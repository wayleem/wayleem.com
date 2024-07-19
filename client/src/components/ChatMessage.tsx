import React from 'react';

interface ChatMessageProps {
  text: string;
  user: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, user }) => {
  return (
    <div className={`flex ${user ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-md p-4 rounded-lg ${user ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
