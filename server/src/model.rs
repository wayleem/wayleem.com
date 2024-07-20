use llm::models::Llama;
use llm::KnownModel;
use std::path::PathBuf;
use tracing::{info, error};

const PORTFOLIO_PROMPT: &str = r#"
You are an AI replica of William. Your purpose is to mimic him and provide information about your resume and portfolio to potential employers. You have the following information:

Resume:
1. I have 5+ years experience in programming
2. I am proficient in TypeScript, JavaScript, Java, Python and Rust.
3. I am experienced with React, Express frameworks.

Portfolio:
1. I have led a team of 5 developers on delivering a Virtual Tour application.
2. I interned at ClinChoice Inc.

Instructions:
1. Only answer questions related to William's resume, portfolio, skills, or professional experience.
2. If asked about anything not related to William's professional information, respond with: "I'm an AI assistant focused on providing information about William's professional background. I don't have information on other topics. Is there anything specific about William's skills or experience you'd like to know?"
3. Be concise and professional in your responses.
4. If you're unsure about any details, say "I don't have specific information about that in my current data."
"#;

pub fn session_setup(model: &Llama) -> llm::InferenceSession {
    model.start_session(Default::default())
}

pub async fn infer(model: &Llama, inference_session: &mut llm::InferenceSession, user_input: &str) -> Result<String, Box<dyn std::error::Error + Send + Sync>> {
    info!("Starting inference with user input: {}", user_input);
    
    let full_prompt = format!("{}\n\nHuman: {}\nAssistant:", PORTFOLIO_PROMPT, user_input);
    
    let estimated_token_count = estimate_token_count(&full_prompt);
    let adjusted_prompt = if estimated_token_count > 1700 {
        format!("{}\n\nPlease provide a brief response:", full_prompt)
    } else {
        full_prompt
    };
    
    let mut response = String::new();
    let result = inference_session
        .infer::<std::convert::Infallible>(
            model,
            &mut rand::thread_rng(),
            &llm::InferenceRequest {
                prompt: adjusted_prompt.as_str().into(),
                parameters: &llm::InferenceParameters::default(),
                play_back_previous_tokens: false,
                maximum_token_count: Some(1800),
            },
            &mut Default::default(),
            |r| {
                match r {
                    llm::InferenceResponse::InferredToken(t) => {
                        response.push_str(&t);
                        info!("Inferred token: {}", t);
                    }
                    llm::InferenceResponse::EotToken => info!("End of text token received"),
                    _ => (),
                }
                Ok::<llm::InferenceFeedback, std::convert::Infallible>(llm::InferenceFeedback::Continue)
            },
        );

    match result {
        Ok(_) => {
            info!("Inference completed successfully");
            let truncated_response = truncate_at_sentence_boundary(&response, 1800);
            Ok(if truncated_response.len() < response.len() {
                format!("{}...", truncated_response)
            } else {
                truncated_response
            })
        }
        Err(e) => {
            error!("Inference process failed: {:?}", e);
            Err(Box::new(e))
        }
    }
}

fn estimate_token_count(text: &str) -> usize {
    // This is a very rough estimate. For more accurate results,
    // you should use the actual tokenizer used by your model.
    text.split_whitespace().count()
}

fn truncate_at_sentence_boundary(text: &str, max_tokens: usize) -> String {
    let words: Vec<&str> = text.split_whitespace().collect();
    if words.len() <= max_tokens {
        return text.to_string();
    }

    let mut result = String::new();
    let mut token_count = 0;
    let mut last_sentence_end = 0;

    for (i, word) in words.iter().enumerate() {
        if token_count + 1 > max_tokens {
            break;
        }
        result.push_str(word);
        result.push(' ');
        token_count += 1;

        if word.ends_with('.') || word.ends_with('!') || word.ends_with('?') {
            last_sentence_end = i + 1;
        }
    }

    if last_sentence_end > 0 {
        words[..last_sentence_end].join(" ")
    } else {
        result.trim().to_string()
    }
}

pub fn get_language_model() -> Llama {
    let model_path = std::env::var("MODEL_PATH").expect("MODEL_PATH must be set");
    let model_parameters = llm::ModelParameters {
        prefer_mmap: true,
        context_size: 512,  // Reduced context size for faster processing
        lora_adapters: None,
        use_gpu: false,  // Raspberry Pi 5 doesn't have a suitable GPU for this
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
