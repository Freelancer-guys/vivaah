import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Calendar, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  link?: {
    href: string;
    label: string;
  };
}

export function LiveChatIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Namaste & Welcome to Vivaah Luxe! Planning a grand celebration? We're here to assist you with dates, pricing, and custom curations.",
      time: "Just now",
    },
    {
      id: "2",
      sender: "bot",
      text: "Select an option below or type a message to chat with our wedding concierge.",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Thank you for reaching out! Our senior wedding planner is available. Would you like to schedule a private consultation or review our portfolio?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        link: { href: "/contact", label: "Book Consultation →" },
      };

      const lower = text.toLowerCase();
      if (lower.includes("availability") || lower.includes("date")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We are currently accepting reservations for the 2026–2027 wedding seasons across Rajasthan, Goa, Kerala, and international destinations. Let us know your preferred dates or submit an inquiry to lock in your celebration window.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          link: { href: "/contact", label: "Check Specific Dates →" },
        };
      } else if (lower.includes("pricing") || lower.includes("package") || lower.includes("cost")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Vivaah Luxe curates fully bespoke productions. Full-service destination weddings typically begin from ₹25 Lakhs for boutique celebrations and scale based on venue, guest count, and multi-day bespoke decor. View our curated proposals.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          link: { href: "/contact", label: "Request Custom Quote →" },
        };
      } else if (lower.includes("call") || lower.includes("phone") || lower.includes("schedule")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "You can speak directly with our senior wedding director right now at +91 99885 56611 or request a callback at your preferred time.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          link: { href: "tel:+919988556611", label: "Call Now (+91 99885 56611)" },
        };
      }

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 900);
  };

  const handleQuickAction = (actionText: string) => {
    handleSend(actionText);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 via-primary to-amber-700 text-white shadow-2xl hover:shadow-primary/50 transition-all flex items-center justify-center group border border-white/30"
        aria-label="Open live chat"
      >
        <motion.div
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <X className="w-6 h-6" />
        </motion.div>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/60"
            animate={{ scale: [1, 1.35], opacity: [0.8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}

        {/* Status Dot */}
        <motion.div
          className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[580px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-5 space-y-2 border-b border-amber-500/30">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-amber-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold tracking-wide text-white">Vivaah Luxe Concierge</h3>
                    <p className="text-xs font-light text-amber-100/80">
                      Luxury Wedding Specialists
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1.5 rounded-full transition-colors text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium pt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online • Responds instantly</span>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50/80 min-h-[220px] max-h-[280px]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 text-xs">
                      ✨
                    </div>
                  )}
                  <div
                    className={`p-3.5 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-neutral-900 text-white rounded-br-none shadow-sm font-normal"
                        : "bg-white text-neutral-800 border border-neutral-200/80 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.link && (
                      <div className="mt-2.5 pt-2 border-t border-gray-100">
                        <Link href={msg.link.href} onClick={() => setIsOpen(false)}>
                          <span className="inline-flex items-center text-xs font-semibold text-primary hover:underline cursor-pointer">
                            {msg.link.label}
                          </span>
                        </Link>
                      </div>
                    )}
                    <span
                      className={`block text-[10px] mt-1.5 ${
                        msg.sender === "user" ? "text-white/60 text-right" : "text-neutral-400"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center text-xs text-neutral-400 pl-9"
                >
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.4s]" />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Buttons */}
            <div className="p-3 bg-white border-t border-neutral-100 flex flex-wrap gap-1.5">
              <button
                onClick={() => handleQuickAction("📅 Check availability for our dates")}
                className="text-xs px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-neutral-800 border border-amber-200 transition-colors font-medium flex items-center gap-1.5"
              >
                <span>📅</span> Check availability
              </button>
              <button
                onClick={() => handleQuickAction("💰 What are your pricing & packages?")}
                className="text-xs px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-neutral-800 border border-amber-200 transition-colors font-medium flex items-center gap-1.5"
              >
                <span>💰</span> Pricing & packages
              </button>
              <button
                onClick={() => handleQuickAction("📞 I want to schedule a call with a planner")}
                className="text-xs px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-neutral-800 border border-amber-200 transition-colors font-medium flex items-center gap-1.5"
              >
                <span>📞</span> Schedule a call
              </button>
            </div>

            {/* Input Area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-neutral-200 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about dates, venues, packages..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm placeholder:text-neutral-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white rounded-xl transition-all shadow-md flex items-center justify-center"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Footer */}
            <div className="px-4 py-2 bg-neutral-100/70 text-[10px] text-neutral-500 text-center font-light border-t border-neutral-200">
              Vivaah Luxe Private Concierge • Direct Assistance
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
