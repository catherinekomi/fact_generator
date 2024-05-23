import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [animal, setAnimal] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const API_BASE_URL = process.env.API_BASE_URL_V || '';

  const sendMessage = async () => {
    try {
      const userMessage = `${animal}`;
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', message: userMessage },
      ]);
      setIsTyping(true);
      const response = await axios.post(
        `${API_BASE_URL}/generate-interesting-fact`,
        {
          animal,
        }
      );

      const openAiReply = `${response.data.openAiReply}`;
      // typing delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'ChatGPT', message: openAiReply },
        ]);
        setIsTyping(false);
      }, 1500);

      setAnimal('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className='App'>
      <h1>Interesting Fact Generator</h1>
      <div className='chat-container'>
        <div className='message-list'>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <div className='message-name'>
                {msg.type === 'user' ? 'You' : 'ChatGPT'}
              </div>
              <div className='message-text'>{msg.message}</div>
            </div>
          ))}
          {isTyping && (
            <div className='message chatgpt'>
              <div className='message-name'>ChatGPT</div>
              <div className='typing-indicator'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Type your favorite animal...'
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
