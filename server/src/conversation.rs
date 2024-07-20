use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Conversation {
    pub messages: Vec<Message>,
}

impl Conversation {
    pub fn new() -> Conversation {
        Conversation {
            messages: Vec::new(),
        }
    }

    pub fn add_message(&mut self, user: bool, text: String) {
        self.messages.push(Message { user, text });
    }

    pub fn get_context(&self) -> String {
        self.messages.iter()
            .map(|msg| format!("{}: {}", if msg.user { "Human" } else { "Assistant" }, msg.text))
            .collect::<Vec<String>>()
            .join("\n")
    }
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Message {
    pub user: bool,
    pub text: String,
}
