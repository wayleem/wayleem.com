use actix_web::{web, Error, HttpRequest, HttpResponse};
use actix_web::web::Payload;
use actix_ws::Message as Msg;
use futures::StreamExt;
use llm::models::Llama;
use llm::KnownModel;
use std::sync::Arc;
use tokio::sync::Mutex;
use log::{info, error, debug};
use serde_json::Value;

static CHARACTER_NAME: &str = "### Assistant";
static USER_NAME: &str = "### Human";

pub struct AppState {
    pub model: Arc<Mutex<Llama>>,
}

pub async fn ws(req: HttpRequest, body: Payload, data: web::Data<AppState>) -> Result<HttpResponse, Error> {
    info!("WebSocket connection attempt");
    let (response, session, mut msg_stream) = actix_ws::handle(&req, body)?;
    let model = data.model.clone();

    let (tx, mut rx) = tokio::sync::mpsc::channel(100);
    
    let session = Arc::new(Mutex::new(session));
    let session_clone = session.clone();

    actix_rt::spawn(async move {
        info!("WebSocket connection established");
        let (user_tx, user_rx) = std::sync::mpsc::channel();

        std::thread::spawn(move || {
            info!("Inference thread started");
            let model_guard = futures::executor::block_on(model.lock());
            let mut inference_session = session_setup(&*model_guard);

            for user_message in user_rx {
                info!("Inference thread received message: {}", user_message);
                match infer(&*model_guard, &mut inference_session, &user_message, tx.clone()) {
                    Ok(_) => info!("Inference completed successfully"),
                    Err(e) => error!("Inference error: {:?}", e),
                }
            }
            info!("Inference thread finished");
        });

        while let Some(Ok(msg)) = msg_stream.next().await {
            match msg {
                Msg::Text(text) => {
                    info!("Received WebSocket text message: {}", text);
                    match serde_json::from_str::<Value>(&text) {
                        Ok(json) => {
                            if let Some(message) = json.get("text").and_then(|v| v.as_str()) {
                                info!("Extracted message: {}", message);
                                if let Err(e) = user_tx.send(message.to_string()) {
                                    error!("Failed to send message to inference thread: {:?}", e);
                                } else {
                                    info!("Message sent to inference thread");
                                }
                            } else {
                                error!("Invalid message format: {}", text);
                            }
                        },
                        Err(e) => error!("Failed to parse JSON: {:?}", e),
                    }
                }
                Msg::Close(reason) => {
                    info!("WebSocket connection closing: {:?}", reason);
                    break;
                }
                _ => debug!("Received other type of WebSocket message"),
            }
        }
        info!("WebSocket connection closed");
    });

    actix_rt::spawn(async move {
        info!("Starting response handling task");
        while let Some(message) = rx.recv().await {
            info!("Sending response: {}", message);
            if let Err(e) = session_clone.lock().await.text(message).await {
                error!("Failed to send message over WebSocket: {:?}", e);
            }
        }
        info!("Response handling task finished");
    });

    Ok(response)
}

fn infer(model: &Llama, inference_session: &mut llm::InferenceSession, user_message: &String, tx: tokio::sync::mpsc::Sender<String>) -> Result<(), Box<dyn std::error::Error>> {
    info!("Starting inference for message: {}", user_message);
    let result = inference_session
        .infer::<std::convert::Infallible>(
            model,
            &mut rand::thread_rng(),
            &llm::InferenceRequest {
                prompt: format!("{USER_NAME}\n{user_message}\n{CHARACTER_NAME}:")
                    .as_str()
                    .into(),
                parameters: &llm::InferenceParameters::default(),
                play_back_previous_tokens: false,
                maximum_token_count: Some(100),
            },
            &mut Default::default(),
            |r| {
                match r {
                    llm::InferenceResponse::InferredToken(t) => {
                        info!("Inferred token: {}", t);
                        if let Err(e) = tx.blocking_send(t) {
                            error!("Failed to send inferred token: {:?}", e);
                        }
                    }
                    llm::InferenceResponse::EotToken => info!("End of text token received"),
                    _ => debug!("Received other type of inference response"),
                }
                Ok::<llm::InferenceFeedback, std::convert::Infallible>(llm::InferenceFeedback::Continue)
            },
        )
        .map_err(|e| {
            error!("Inference error: {:?}", e);
            Box::new(e) as Box<dyn std::error::Error>
        });

    match result {
        Ok(_) => info!("Inference completed successfully"),
        Err(e) => error!("Inference process failed: {:?}", e),
    }
    Ok(())
}

fn session_setup(model: &Llama) -> llm::InferenceSession {
    let persona = "A chat between a human and an assistant.";
    let history = format!(
        "{CHARACTER_NAME}:Hello - How may I help you today?\n\
        {USER_NAME}:What is the capital of France?\n\
        {CHARACTER_NAME}:Paris is the capital of France.\n"
    );

    let mut session = model.start_session(Default::default());
    session
        .feed_prompt(
            model,
            format!("{persona}\n{history}").as_str(),
            &mut Default::default(),
            llm::feed_prompt_callback(|_| {
                Ok::<llm::InferenceFeedback, std::convert::Infallible>(llm::InferenceFeedback::Continue)
            }),
        )
        .expect("Failed to ingest initial prompt.");

    session
}

fn inference_callback<'a>(
    stop_sequence: String,
    buf: &'a mut String,
    tx: tokio::sync::mpsc::Sender<String>,
) -> impl FnMut(llm::InferenceResponse) -> Result<llm::InferenceFeedback, std::convert::Infallible> + 'a {
    move |resp| -> Result<llm::InferenceFeedback, std::convert::Infallible> {
        match resp {
            llm::InferenceResponse::InferredToken(t) => {
                let mut reverse_buf = buf.clone();
                reverse_buf.push_str(t.as_str());
                if stop_sequence.as_str().eq(reverse_buf.as_str()) {
                    buf.clear();
                    return Ok(llm::InferenceFeedback::Halt);
                } else if stop_sequence.as_str().starts_with(reverse_buf.as_str()) {
                    buf.push_str(t.as_str());
                    return Ok(llm::InferenceFeedback::Continue);
                }

                let text_to_send = if buf.is_empty() {
                    t.clone()
                } else {
                    reverse_buf.clone()
                };

                let tx_clone = tx.clone();
                tokio::spawn(async move {
                    let _ = tx_clone.send(text_to_send).await;
                });

                buf.clear();
                Ok(llm::InferenceFeedback::Continue)
            }
            llm::InferenceResponse::EotToken => Ok(llm::InferenceFeedback::Halt),
            _ => Ok(llm::InferenceFeedback::Continue),
        }
    }
}

pub fn get_language_model() -> Llama {
    use std::path::PathBuf;
    use dotenv::dotenv;

    dotenv().ok();
    let model_path = std::env::var("MODEL_PATH").expect("MODEL_PATH must be set");
    let model_parameters = llm::ModelParameters {
        prefer_mmap: true,
        context_size: 2048,
        lora_adapters: None,
        use_gpu: true,
        gpu_layers: None,
        rope_overrides: None,
        n_gqa: None,
    };

    info!("Loading model from path: {}", model_path);
    let model = llm::load::<Llama>(
        &PathBuf::from(&model_path),
        llm::TokenizerSource::Embedded,
        model_parameters,
        llm::load_progress_callback_stdout,
    ).unwrap_or_else(|err| panic!("Failed to load model from {model_path:?}: {err}"));

    info!("Model loaded successfully");
    model
}
