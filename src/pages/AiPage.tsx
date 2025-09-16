import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  sources?: string[];
}

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'السلام عليكم ورحمة الله وبركاته! أنا حربي، مساعدك الذكي للأسئلة الإسلامية. كيف يمكنني مساعدتك اليوم؟',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'عذراً، حالياً لا يمكنني الاتصال بالخدمة. يرجى التأكد من إعداد API الخاص بـ ChatGPT. في المستقبل، سأكون قادراً على الإجابة على أسئلتك الإسلامية مع توفير المصادر الموثوقة من القرآن والسنة.',
        isUser: false,
        timestamp: new Date(),
        sources: ['القرآن الكريم', 'صحيح البخاري', 'صحيح مسلم']
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    'ما هي أركان الإسلام؟',
    'كيف أتوضأ بطريقة صحيحة؟',
    'ما هو فضل قراءة القرآن؟',
    'متى يكون الدعاء مستجاب؟',
    'ما هي آداب دخول المسجد؟',
  ];

  const handleSuggestionClick = (question: string) => {
    setInputText(question);
    inputRef.current?.focus();
  };

  return (
    <div className="ai-page">
      <div className="ai-container">
        <div className="ai-header">
          <div className="ai-title">
            <Bot className="ai-icon" />
            <h1>حربي AI</h1>
            <div className="ai-status">
              <div className="status-dot"></div>
              <span>متصل</span>
            </div>
          </div>
          <p className="ai-subtitle">
            اسأل أي سؤال عن الإسلام وسأجيبك بالدليل من القرآن والسنة
          </p>
        </div>

        <div className="chat-container">
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-avatar">
                  {message.isUser ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {message.text}
                  </div>
                  {message.sources && (
                    <div className="message-sources">
                      <strong>المصادر:</strong>
                      <div className="sources-list">
                        {message.sources.map((source, index) => (
                          <span key={index} className="source-tag">
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString('ar-EG', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <Bot size={20} />
                </div>
                <div className="message-content">
                  <div className="message-text loading">
                    <Loader className="loading-spinner" size={16} />
                    جاري التفكير...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="suggested-questions">
            <h3>أسئلة مقترحة:</h3>
            <div className="suggestions-grid">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggestion-btn"
                  onClick={() => handleSuggestionClick(question)}
                >
                  <Sparkles size={14} />
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب سؤالك هنا..."
              className="message-input"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="send-btn"
              disabled={!inputText.trim() || isLoading}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-page {
          min-height: calc(100vh - 80px);
          padding: 2rem;
          background: radial-gradient(ellipse at center, rgba(255, 136, 0, 0.05) 0%, transparent 70%);
        }

        .ai-container {
          max-width: 1000px;
          margin: 0 auto;
          height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
        }

        .ai-header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .ai-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .ai-title h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ff8800;
          text-shadow: 0 0 20px rgba(255, 136, 0, 0.8);
        }

        .ai-icon {
          color: #ff8800;
          filter: drop-shadow(0 0 10px rgba(255, 136, 0, 0.8));
        }

        .ai-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          color: #22c55e;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: statusPulse 2s ease-in-out infinite;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .ai-subtitle {
          color: #cccccc;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .chat-container {
          flex: 1;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 0;
          margin-bottom: 1rem;
        }

        .message {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          animation: messageSlide 0.3s ease-out;
        }

        @keyframes messageSlide {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .user-message {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .user-message .message-avatar {
          background: linear-gradient(135deg, #ff8800, #ff6600);
          color: white;
        }

        .ai-message .message-avatar {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }

        .message-content {
          flex: 1;
          max-width: 70%;
        }

        .message-text {
          background: rgba(16, 16, 16, 0.8);
          padding: 1rem 1.5rem;
          border-radius: 18px;
          color: #ffffff;
          line-height: 1.6;
          font-size: 1rem;
          border: 1px solid rgba(255, 136, 0, 0.2);
          backdrop-filter: blur(5px);
        }

        .user-message .message-text {
          background: rgba(255, 136, 0, 0.2);
          border-color: rgba(255, 136, 0, 0.4);
        }

        .message-text.loading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff8800;
        }

        .loading-spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .message-sources {
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 136, 0, 0.1);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 12px;
          font-size: 0.9rem;
        }

        .sources-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .source-tag {
          background: rgba(255, 136, 0, 0.3);
          color: #ff8800;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 136, 0, 0.5);
        }

        .message-time {
          font-size: 0.75rem;
          color: #888888;
          margin-top: 0.5rem;
          text-align: ${props => props.isUser ? 'left' : 'right'};
        }

        .suggested-questions {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(16, 16, 16, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 136, 0, 0.2);
        }

        .suggested-questions h3 {
          color: #ff8800;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .suggestions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
        }

        .suggestion-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 136, 0, 0.3);
          color: #cccccc;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          text-align: right;
        }

        .suggestion-btn:hover {
          background: rgba(255, 136, 0, 0.1);
          border-color: #ff8800;
          color: #ff8800;
          transform: translateY(-2px);
        }

        .input-container {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: rgba(16, 16, 16, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 136, 0, 0.2);
        }

        .message-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 1rem;
          padding: 0.75rem;
          outline: none;
          font-family: 'Cairo', sans-serif;
        }

        .message-input::placeholder {
          color: #888888;
        }

        .send-btn {
          background: linear-gradient(135deg, #ff8800, #ff6600);
          border: none;
          color: white;
          padding: 0.75rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 48px;
          height: 48px;
        }

        .send-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ff6600, #ff4400);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
          transform: scale(1.05);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .ai-page {
            padding: 1rem;
          }

          .ai-container {
            height: calc(100vh - 100px);
          }

          .ai-title h1 {
            font-size: 2rem;
          }

          .message-content {
            max-width: 85%;
          }

          .suggestions-grid {
            grid-template-columns: 1fr;
          }

          .input-container {
            padding: 0.75rem;
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AiPage;