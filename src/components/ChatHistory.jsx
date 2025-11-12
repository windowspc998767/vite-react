import React, { useState } from 'react';

const ChatHistory = () => {
    const [chats, setChats] = useState([]);
    const [newChat, setNewChat] = useState('');

    const addChat = () => {
        if (newChat) {
            setChats([...chats, newChat]);
            setNewChat('');
        }
    };

    const deleteChat = (index) => {
        const updatedChats = chats.filter((_, i) => i !== index);
        setChats(updatedChats);
    };

    return (
        <div className="chat-history">
            <h2>Chat History</h2>
            <ul>
                {chats.map((chat, index) => (
                    <li key={index}>
                        {chat}
                        <button onClick={() => deleteChat(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                value={newChat} 
                onChange={(e) => setNewChat(e.target.value)} 
                placeholder="New chat..."
            />
            <button onClick={addChat}>Create Chat</button>
        </div>
    );
};

export default ChatHistory;