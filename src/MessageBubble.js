// src/components/MessageBubble.js
import React, { useState } from 'react';
import './css/MessageBubble.css';

const MessageBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBubble = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="message-container">
      {!isOpen && (
        <button className="message-button" onClick={toggleBubble}>
          💬 Messages
        </button>
      )}

      {isOpen && (
        <div className="message-bubble">
          <div className="message-header">
            <p>How can we help you?</p>
            <button className="close-button" onClick={toggleBubble}>
              &times;
            </button>
          </div>
          <div className="message-body">
            <p>Hello! Need help with something?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
