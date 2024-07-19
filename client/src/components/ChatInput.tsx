import React, { useState } from 'react';
import { webSocketService } from '../services/websocket';

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      webSocketService.sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Type a message..."
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
