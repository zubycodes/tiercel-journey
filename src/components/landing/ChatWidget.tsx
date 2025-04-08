import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { sender: 'user', text: newMessage }]);
    const userInput = newMessage;
    setNewMessage('');
    setSendingMessage(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Add bot response
      setMessages(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          text: `Thanks for your message: "${userInput}". How else can I assist you?` 
        }
      ]);
      setSendingMessage(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 bg-tiercel-red text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors"
      >
        {isChatOpen ? (
          <X size={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-tiercel-red text-white">
            <h5 className="text-lg font-semibold">AI Assistant</h5>
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200"
              onClick={toggleChat}
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm ${
                    message.sender === "user"
                      ? "bg-tiercel-blue text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
            <input
              className="w-4/5 h-10 border border-gray-300 text-black rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-tiercel-blue text-sm"
              placeholder="Type your message..."
              value={newMessage}
              onKeyDown={handleKeyDown}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="w-1/5 h-10 bg-tiercel-red text-white rounded-md py-1 px-3 hover:bg-red-700 transition-colors"
              onClick={handleSendMessage}
            >
              {sendingMessage ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mx-auto"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 8.107H13.5a.75.75 0 010 1.5H5.029l-2.432 8.107a.75.75 0 00.926.94 48.124 48.124 0 0015.573-8.948.75.75 0 000-1.184A48.092 48.092 0 003.478 2.405z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}