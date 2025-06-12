import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWifi } from "react-icons/fa";

export default function MastercardInputCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 text-white">
      {/* Card Preview */}
      <motion.div
        onMouseMove={handleMouseMove}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: [0, 5, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="relative w-full max-w-xs sm:max-w-sm h-[200px] sm:h-[220px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#222327] via-[#363941] to-[#2f3b52] p-5 shadow-2xl border border-white/10"
      >
        {/* Cursor-following glow */}
        <motion.div
          className="absolute w-40 h-40 bg-pink-300/20 rounded-full pointer-events-none blur-3xl"
          style={{
            left: glowPos.x - 80,
            top: glowPos.y - 80,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />

        {/* Shimmer overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer z-0 rounded-2xl" />

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start text-sm">
            <div className="text-white font-semibold">business</div>
            <FaWifi className="rotate-90 opacity-80 text-white text-md" />
          </div>
          <div className="text-lg tracking-widest font-mono mt-4 break-words">
            {cardNumber || "5412 7512 3412 3456"}
          </div>
          <div className="flex justify-between items-center text-xs mt-2">
            <div>
              <p className="text-gray-400 text-[10px]">VALID THRU</p>
              <p>{expiry || "12/23"}</p>
            </div>
            <p className="text-xs uppercase truncate max-w-[50%] text-right">
              {holderName || "Biswabhusan Sahoo"}
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-400 mr-[-10px] z-10" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80" />
          </div>
        </div>
      </motion.div>

      {/* Input Form */}
      <div className="w-full max-w-sm mt-6 space-y-3">
        {[
          {
            label: "Card Number",
            placeholder: "5412 7512 3412 3456",
            value: cardNumber,
            setValue: setCardNumber,
            maxLength: 19,
          },
          {
            label: "Card Holder",
            placeholder: "Lee M. Cardholder",
            value: holderName,
            setValue: setHolderName,
          },
          {
            label: "Expiry",
            placeholder: "MM/YY",
            value: expiry,
            setValue: setExpiry,
            maxLength: 5,
          },
        ].map(({ label, placeholder, value, setValue, maxLength }, idx) => (
          <div key={idx}>
            <label className="text-sm">{label}</label>
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              maxLength={maxLength || undefined}
              onChange={(e) => setValue(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-black/50 backdrop-blur text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all 
                         hover:border-pink-400 hover:shadow-md hover:shadow-pink-500/20 cursor-glow"
            />
          </div>
        ))}
        <button className="w-full mt-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Submit
        </button>
      </div>

      {/* Cursor glow effect */}
      <style>
        {`
          .cursor-glow {
            position: relative;
          }
          .cursor-glow:focus::after, .cursor-glow:hover::after {
            content: '';
            position: absolute;
            top: -2px; left: -2px; right: -2px; bottom: -2px;
            border-radius: inherit;
            box-shadow: 0 0 10px 2px rgba(255, 105, 180, 0.6);
            pointer-events: none;
            z-index: 0;
            transition: all 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
