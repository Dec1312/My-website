import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function RecruiterAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Ahmad's AI Assistant. I can answer questions about his experience, skills, and achievements. What would you like to know?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What leadership experience does Ahmad have?",
    "What operational improvements did Ahmad deliver?",
    "How did Ahmad improve customer satisfaction?",
    "What are Ahmad's key achievements?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({ role: m.role, content: m.content }))
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      // Fallback logic
      let fallbackResponse = "I'm having trouble connecting right now. Ahmad is an Operations & Customer Excellence Leader with 10+ years of experience. You can reach him directly at ahmad.yamm@outlook.com.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('leadership')) {
        fallbackResponse = "Ahmad has extensive leadership experience, managing teams of 5+ professionals, handling high-level stakeholder relationships, and driving organizational change. He currently leads the Insurance Operations and CS team at Alia International Hospital.";
      } else if (lowerText.includes('improve') || lowerText.includes('metric')) {
        fallbackResponse = "Ahmad has delivered significant improvements: 35% productivity gain, 100% regulatory audit compliance, 98% claim approval accuracy, and a 60% reduction in customer response time.";
      } else if (lowerText.includes('customer') || lowerText.includes('satisfaction')) {
        fallbackResponse = "At Eon Aligner, Ahmad elevated CSAT scores from 82% to 94% in just 9 months and boosted customer retention from 75% to 90% through customer experience transformation initiatives.";
      } else if (lowerText.includes('industry') || lowerText.includes('industries')) {
        fallbackResponse = "Ahmad has cross-industry experience spanning Healthcare (Alia International Hospital), Customer Experience (Eon Aligner), and Logistics (Aramex).";
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: fallbackResponse,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-accent to-orange-accent flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Ask AI Assistant"
      >
        <MessageCircle className="text-navy-primary" size={28} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-cyan-accent rounded-full border-2 border-navy-primary"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[384px] h-[600px] max-h-[calc(100vh-6rem)] bg-navy-secondary border-2 border-cyan-accent/30 rounded-xl shadow-2xl flex flex-col overflow-hidden glow-cyan-border"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-accent/10 to-yellow-accent/10 p-4 border-b border-cyan-accent/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-accent to-blue-500 flex items-center justify-center">
                  <Bot className="text-navy-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold font-display">Ahmad's AI Assistant</h3>
                  <p className="text-cyan-accent text-xs font-mono">Powered by Google Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-navy-primary/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-cyan-accent to-blue-500 text-white rounded-tr-none' 
                        : 'bg-navy-secondary border border-cyan-accent/20 text-white rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <span className="text-[10px] text-text-muted mt-1 font-mono">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex flex-col items-start">
                  <div className="max-w-[85%] p-3 rounded-2xl bg-navy-secondary border border-cyan-accent/20 text-white rounded-tl-none flex items-center gap-2">
                    <Loader2 className="animate-spin text-cyan-accent" size={16} />
                    <span className="text-sm text-text-secondary">AI is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (only show if few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div className="p-3 bg-navy-secondary border-t border-cyan-accent/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-xs bg-navy-primary border border-cyan-accent/30 text-cyan-accent px-3 py-1.5 rounded-full hover:bg-cyan-accent/10 transition-colors whitespace-nowrap"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-navy-secondary border-t border-cyan-accent/20">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ahmad..."
                  disabled={isLoading}
                  className="flex-1 bg-navy-primary border border-cyan-accent/30 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-accent transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-cyan-accent to-blue-500 text-navy-primary p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center w-10 h-10"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
