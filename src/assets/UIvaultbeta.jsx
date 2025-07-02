import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🧪 Trial/Beta themed messages
const messages = [
  "🚧 UI Vault is in Public Preview — Rapid changes, magic loading soon!",
  "🚀 Beta Access Active — The full experience is launching soon.",
  "✨ Try now: Stunning animations and themes, more coming in v1.0!",
  "🛠️ This is a trial release — Help us shape the stable UI Vault.",
  "🔥 UI Vault Beta — Import modern UI. Official launch is near!",
];

const UiVaultBetaBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // Rotate every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full h-auto py-2 px-3 flex items-center justify-center text-white bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center  md:gap-2 text-xs md:text-sm font-medium md:font-semibold tracking-wide text-center px-3"
        animate={{ scale: [1, 1.01, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Clock className="animate-spin-slow text-yellow-400 min-w-[16px]" size={16} />
        <AnimatePresence mode="wait">
          <motion.span
            key={messages[index]}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4 }}
            className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[95vw] md:max-w-full"
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default UiVaultBetaBanner;
