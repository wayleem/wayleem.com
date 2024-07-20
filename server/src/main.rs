use axum::{
    routing::post,
    Router,
    Json,
    extract::State,
};
use tower_http::cors::{Any, CorsLayer};
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tokio::sync::Mutex;
use dotenv::dotenv;
use std::env;
use std::net::SocketAddr;
use llm::models::Llama;
use tracing::info;

mod model;
mod conversation;

use conversation::Conversation;

#[derive(Clone)]
struct AppState {
    model: Arc<Mutex<Llama>>,
    conversation: Arc<Mutex<Conversation>>,
}

#[derive(Deserialize)]
struct ChatRequest {
    message: String,
}

#[derive(Serialize)]
struct ChatResponse {
    response: String,
}

async fn chat(
    State(state): State<AppState>,
    Json(request): Json<ChatRequest>,
) -> Json<ChatResponse> {
    let model = state.model.lock().await;
    let mut conversation = state.conversation.lock().await;
    
    conversation.add_message(true, request.message.clone());
    
    let context = conversation.get_context();
    let mut session = model::session_setup(&model);
    
    let formatted_context = format!("Human: {}", request.message);
    let response = model::infer(&model, &mut session, &formatted_context).await
        .unwrap_or_else(|_| "Sorry, I couldn't generate a response.".to_string());

    conversation.add_message(false, response.clone());

    Json(ChatResponse { response })
}

#[tokio::main]
async fn main() {
    dotenv().ok();
    tracing_subscriber::fmt::init();

    let model = Arc::new(Mutex::new(model::get_language_model()));
    let conversation = Arc::new(Mutex::new(Conversation::new()));
    let app_state = AppState { model, conversation };

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/chat", post(chat))
        .layer(cors)
        .with_state(app_state);

    let addr = env::var("SERVER_ADDRESS").unwrap_or_else(|_| "127.0.0.1:8080".to_string());
    let socket_addr: SocketAddr = addr.parse().expect("Invalid address");
    println!("Server running on {}", socket_addr);

    // Use tokio to run the server
    let listener = tokio::net::TcpListener::bind(&socket_addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
