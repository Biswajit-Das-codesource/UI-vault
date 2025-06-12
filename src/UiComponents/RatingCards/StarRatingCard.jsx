import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const starEmojis = [
  { emoji: "😞", text: "Awful" },
  { emoji: "☹️", text: "Bad" },
  { emoji: "😐", text: "Good" },
  { emoji: "😄", text: "Great" },
  { emoji: "🤩", text: "Awesome" },
];

const StarRatingCard = () => {
  const [hoverValue, setHoverValue] = useState(0);
  const [rating, setRating] = useState(0);
  const [showMsg, setShowMsg] = useState(false);
  const [activeSparkles, setActiveSparkles] = useState([]);

  const handleHover = (val) => setHoverValue(val);
  const handleLeave = () => setHoverValue(0);

  const handleClick = (val) => {
    setRating(val);
    setShowMsg(false);
    setActiveSparkles([...Array(val).keys()]);
    setTimeout(() => {
      setShowMsg(true);
      setActiveSparkles([]);
    }, 500);
  };

  return (
    <div className="min-h bg-[#111] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-black border-2 border-gray-700 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 max-w-sm w-full overflow-hidden"
      >
        {/* Chrome shine sweep effect */}
        <motion.div
          className="absolute top-0 left-[-50%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[0deg] pointer-events-none"
          animate={{ left: ["-30%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3}}
        />

        <h2 className="text-xl font-semibold text-white">Rate Your Experience</h2>

        <div className="relative flex gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative">
              <motion.div
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(i)}
                animate={{
                  scale: rating === i ? 1.3 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
                className="cursor-pointer text-2xl relative z-10"
              >
                <FaStar
                  className={`transition-colors duration-200 ${
                    (hoverValue >= i || (!hoverValue && rating >= i))
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              </motion.div>

              {/* Sparkle burst circles */}
              {activeSparkles.includes(i - 1) && (
                <motion.div
                  className="absolute inset-0 flex justify-center items-center z-0"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5],
                    opacity: [1, 0],
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute w-10 h-10 rounded-full border-2 border-yellow-300 blur-sm animate-ping" />
                  <div className="absolute w-6 h-6 rounded-full bg-yellow-300 opacity-60 blur-md" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Emoji & Description */}
        <AnimatePresence>
          {showMsg && rating > 0 && (
            <motion.div
              key="rating-feedback"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl">{starEmojis[rating - 1].emoji}</span>
                <span className="text-white font-medium text-lg">
                  {starEmojis[rating - 1].text}
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-green-400 font-medium text-base">Thank you for your feedback! 🎉</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default StarRatingCard;
