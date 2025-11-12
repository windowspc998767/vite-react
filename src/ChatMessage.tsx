import React from 'react';

interface ChatMessageProps {
  message: {
    text: string;
    sender: 'user' | 'bot';
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <p>{message.text}</p>
    </div>
  );
};

export default ChatMessage;
