import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function LiveChatIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
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
            className="absolute inset-0 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        {/* Status Dot */}
        <motion.div
          className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : 20,
        }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed bottom-24 right-6 z-40 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-pink-500 text-white p-6 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-lg">Hi there! 👋</h3>
              <p className="text-sm font-light opacity-90">
                Chat with our wedding experts
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-green-300" />
            <span>We typically reply in minutes</span>
          </div>
        </div>

        {/* Message Area */}
        <div className="h-64 bg-gray-50 p-6 overflow-y-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💍</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm max-w-xs">
              <p className="text-sm text-foreground">
                Welcome to Lumière! Got questions about your wedding? We're here to help!
              </p>
              <p className="text-xs text-muted-foreground mt-2">Just now</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-lg">✨</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm max-w-xs">
              <p className="text-sm text-foreground">
                Ask me about our services, pricing, or availability!
              </p>
              <p className="text-xs text-muted-foreground mt-2">Just now</p>
            </div>
          </motion.div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white space-y-3">
          <div className="space-y-2">
            <button className="w-full text-sm text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-foreground font-light">
              📅 Check availability
            </button>
            <button className="w-full text-sm text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-foreground font-light">
              💰 Pricing & packages
            </button>
            <button className="w-full text-sm text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-foreground font-light">
              📞 Schedule a call
            </button>
          </div>

          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
          />
        </div>

        {/* Company Info */}
        <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 text-xs text-muted-foreground text-center font-light">
          Powered by Lumière • Response within 2 hours
        </div>
      </motion.div>
    </>
  );
}
