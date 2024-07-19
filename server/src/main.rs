use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use std::env;

mod api;
mod model;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();

    let model = web::Data::new(api::get_language_model());
    let server_address =
        env::var("SERVER_ADDRESS").unwrap_or_else(|_| "127.0.0.1:8080".to_string());

    println!("Starting server at {}", server_address);

    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![
                actix_web::http::header::AUTHORIZATION,
                actix_web::http::header::ACCEPT,
            ])
            .allowed_header(actix_web::http::header::CONTENT_TYPE)
            .max_age(3600);

        App::new()
            .wrap(cors)
            .app_data(model.clone())
            .route("/ws", web::get().to(api::ws))
    })
    .bind(&server_address)?
    .run()
    .await
}
