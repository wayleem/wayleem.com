import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ChatMessage from './ChatMessage';

const ChatArea: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} text={message.text} user={message.user} />
      ))}
    </div>
  );
};

export default ChatArea;
