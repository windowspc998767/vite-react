import React from 'react';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  messages: {
    text: string;
    sender: 'user' | 'bot';
  }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatWindow;
