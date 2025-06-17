import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const FeedbackCard = ({
  title = "Feedback",
  subtitle = "Help us improve our product",
  defaultSatisfaction = 50,
  placeholder = "Tell us what you think...",
  submitText = "Submit Feedback",
  onSubmit = (s, f) => alert(`Satisfaction: ${s}\nFeedback: ${f}`),
}) => {
  const [satisfaction, setSatisfaction] = useState(defaultSatisfaction);
  const [feedback, setFeedback] = useState("");

  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);
  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(satisfaction, feedback);
  };

  return (
    <div className="min-h flex items-center justify-center bg-gray-950 p-4 sm:p-8">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative max-w-sm w-full p-6 bg-black text-white rounded-2xl shadow-xl space-y-4 overflow-hidden border border-gray-800"
      >
        {/* Cursor Glow */}
        <motion.div
          className="absolute w-40 h-40 bg-pink-500/20 blur-2xl rounded-full pointer-events-none z-0"
          style={{ left: glowX, top: glowY, transform: "translate(-50%, -50%)" }}
        />

        {/* Mirror Shine */}
        <motion.div
          className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-3 z-10 pointer-events-none"
          animate={{ left: ["-75%", "125%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Content */}
        <div className="relative z-20 space-y-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-400 text-sm">{subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-2">
                How satisfied are you with our product?
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={satisfaction}
                onChange={(e) => setSatisfaction(e.target.value)}
                className="w-full accent-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Your feedback</label>
              <textarea
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={placeholder}
                className="w-full p-3 rounded-xl bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
            >
              {submitText}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default FeedbackCard;
