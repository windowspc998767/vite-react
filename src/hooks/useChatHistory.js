import { useState, useEffect } from 'react';

const useChatHistory = () => {
    const [chatHistory, setChatHistory] = useState([]);

    const addMessage = (message) => {
        setChatHistory((prevHistory) => [...prevHistory, message]);
    };

    const clearHistory = () => {
        setChatHistory([]);
    };

    // Optionally, load chat history from local storage or an API
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
        setChatHistory(savedHistory);
    }, []);

    // Save chat history to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }, [chatHistory]);

    return {
        chatHistory,
        addMessage,
        clearHistory,
    };
};

export default useChatHistory;