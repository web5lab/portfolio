import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { findBestResponse, formatTimestamp } from '../utils/botUtils';
import { robotThoughts } from '../data/robotThoughts';
import CuteRobot from './CuteRobot';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const AiBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentThought, setCurrentThought] = useState(robotThoughts[0]);
  const [messages, setMessages] = useState<Message[]>([{
    type: 'bot',
    content: "Hi! I'm Shiva's cute robot assistant. I know all about blockchain, web development, and Shiva's amazing projects! What would you like to know? 🤖✨",
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      const moveInterval = setInterval(() => {
        const newX = Math.random() * 100 - 50;
        const newY = Math.random() * 100 - 50;
        
        controls.start({
          x: newX,
          y: newY,
          transition: { duration: 2, ease: "easeInOut" }
        });
      }, 3000);

      const thoughtInterval = setInterval(() => {
        const randomThought = robotThoughts[Math.floor(Math.random() * robotThoughts.length)];
        setCurrentThought(randomThought);
      }, 4000);

      return () => {
        clearInterval(moveInterval);
        clearInterval(thoughtInterval);
      };
    }
  }, [isOpen, controls]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = findBestResponse(userMessage.content);
      const botMessage: Message = {
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-20 right-8 z-50">
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-lg w-80 shadow-xl"
        >
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CuteRobot />
              <span className="text-white font-medium">Shiva's Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.type === 'user'
                      ? 'bg-blue-500/50 ml-auto'
                      : 'bg-gray-700/50 mr-auto'
                  } rounded-lg p-3 max-w-[80%]`}
                >
                  <p className="text-white text-sm">{message.content}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="bg-gray-700/50 rounded-lg p-3 mr-auto max-w-[80%]">
                  <motion.div
                    className="flex space-x-1"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  </motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="relative">
          <motion.div
            animate={controls}
            className="relative"
            whileHover={{ scale: 1.1 }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full right-0 mb-2 bg-white rounded-lg p-2 text-sm w-48 shadow-lg"
            >
              <div className="relative">
                <p className="text-gray-800">{currentThought}</p>
                <div className="absolute bottom-[-8px] right-4 w-4 h-4 bg-white transform rotate-45" />
              </div>
            </motion.div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transition-all"
            >
              <CuteRobot />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AiBot;