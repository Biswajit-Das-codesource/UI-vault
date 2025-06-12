import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaDollarSign, FaUsers, FaDownload } from "react-icons/fa";
import "../../App.css";

function SubscriptionCard() {
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

  return (
    <div className="min-h flex items-center justify-center bg-black p-4 sm:p-8">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full max-w-sm bg-gray-950 border border-[#232323] rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden"
      >
        {/* Cursor Glow */}
        <motion.div
          className="absolute w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none z-0"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Mirror Shine Effect */}
        <motion.div
          className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-3 z-10 pointer-events-none"
          animate={{ left: ["-75%", "125%"] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Content */}
        <div className="relative z-20">
          <h2 className="text-2xl font-bold text-white mb-1">
            Subscription Plan
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            You are currently on the Pro plan
          </p>

          <div className="flex items-center mb-6">
            <span className="text-4xl font-extrabold text-white mr-2">
              $20.99
            </span>
            <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full">
              Monthly
            </span>
          </div>

          <ul className="space-y-3 mb-6 text-white">
            <li className="flex items-center gap-3">
              <FaDollarSign />
              Unlimited projects
            </li>
            <li className="flex items-center gap-3">
              <FaUsers />
              Unlimited team members
            </li>
            <li className="flex items-center gap-3">
              <FaDownload />
              5TB storage
            </li>
          </ul>

          <button className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition">
            Upgrade Plan
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default SubscriptionCard;
