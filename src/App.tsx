import { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import HistoryPanel from './HistoryPanel';
import './App.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface Conversation {
  id: number;
  messages: Message[];
}

interface ChatState {
  conversations: Conversation[];
  currentConversationId: number | null;
}

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    conversations: [],
    currentConversationId: null,
  });

  const handleSendMessage = (message: string) => {
    const userMessage: Message = { text: message, sender: 'user' };

    setChatState(prevState => {
      const { conversations, currentConversationId } = prevState;

      if (currentConversationId === null) {
        const newConversationId = Date.now();
        const newConversation: Conversation = {
          id: newConversationId,
          messages: [userMessage],
        };
        return {
          conversations: [...conversations, newConversation],
          currentConversationId: newConversationId,
        };
      } else {
        const updatedConversations = conversations.map(convo =>
          convo.id === currentConversationId
            ? { ...convo, messages: [...convo.messages, userMessage] }
            : convo
        );
        return {
          ...prevState,
          conversations: updatedConversations,
        };
      }
    });

    setTimeout(() => {
      const botMessage: Message = { text: `Echo: ${message}`, sender: 'bot' };
      setChatState(prevState => {
        const { conversations, currentConversationId } = prevState;
        const updatedConversations = conversations.map(convo =>
          convo.id === currentConversationId
            ? { ...convo, messages: [...convo.messages, botMessage] }
            : convo
        );
        return {
          ...prevState,
          conversations: updatedConversations,
        };
      });
    }, 500);
  };

  const handleSelectConversation = (conversationId: number) => {
    setChatState(prevState => ({
      ...prevState,
      currentConversationId: conversationId,
    }));
  };

  const currentMessages = chatState.conversations.find(
    convo => convo.id === chatState.currentConversationId
  )?.messages || [];

  return (
    <div className="App">
      <HistoryPanel
        conversations={chatState.conversations}
        onSelectConversation={handleSelectConversation}
      />
      <div className="chat-area">
        <ChatWindow messages={currentMessages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
