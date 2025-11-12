import React from 'react';

interface HistoryPanelProps {
  conversations: {
    id: number;
    messages: { text: string; sender: 'user' | 'bot' }[];
  }[];
  onSelectConversation: (conversationId: number) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ conversations, onSelectConversation }) => {
  return (
    <div className="history-panel">
      <h2>Chat History</h2>
      <ul>
        {conversations.map((convo) => (
          <li key={convo.id} onClick={() => onSelectConversation(convo.id)}>
            Conversation #{convo.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPanel;
