use actix_web::web::Payload;
use actix_web::{web, Error, HttpRequest, HttpResponse};
use actix_ws::Message;
use futures::StreamExt;
use llm::models::Llama;
use std::path::PathBuf;
use std::sync::Arc;

pub fn get_language_model() -> Llama {
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

    llm::load::<Llama>(
        &PathBuf::from(&model_path),
        llm::TokenizerSource::Embedded,
        model_parameters,
        llm::load_progress_callback_stdout,
    )
    .unwrap_or_else(|err| panic!("Failed to load model from {model_path:?}: {err}"))
}

pub async fn ws(
    req: HttpRequest,
    body: Payload,
    _model: web::Data<Llama>,
) -> Result<HttpResponse, Error> {
    let (response, mut session, mut msg_stream) = actix_ws::handle(&req, body)?;

    actix_rt::spawn(async move {
        while let Some(Ok(msg)) = msg_stream.next().await {
            match msg {
                Message::Text(text) => {
                    // Here you would process the incoming message and generate a response
                    let response = serde_json::json!({
                        "text": format!("Echo: {}", text)
                    });
                    if let Err(e) = session.text(response.to_string()).await {
                        eprintln!("Error sending message: {:?}", e);
                        break;
                    }
                }
                Message::Close(_) => {
                    break;
                }
                _ => {}
            }
        }
    });

    Ok(response)
}
