/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaRegCommentDots, FaRetweet, FaHeart, FaShare } from "react-icons/fa";

const MirrorShineTweet = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
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
    <div className="min-h bg-black flex items-center justify-center p-5">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-[500px] bg-[#16181c] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-lg transition-transform"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute w-40 h-40 bg-cyan-700/20 blur-2xl rounded-full pointer-events-none z-0"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Mirror shine */}
        <motion.div
          className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-3 z-10 pointer-events-none"
          animate={{ left: ["-75%", "125%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Tweet Content */}
        <div className="relative z-20 p-6 text-white">
          <div className="flex items-start gap-4">
            <img
              src="https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full border border-gray-700"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Biswajit Das</h3>
                <span className="text-gray-500 text-sm">@biswa.dev · 2h</span>
              </div>
              <p className="mt-1 text-gray-300">
                "Shipping side projects is the best way to learn. 🚀{" "}
                <span className="text-sky-400">#React</span>{" "}
                <span className="text-purple-400">#FramerMotion</span>! 💻✨"
              </p>

              {/* Tweet Actions */}
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
                  <FaRegCommentDots /> <span>23</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
                  <FaRetweet /> <span>42</span>
                </div>
                <div className="flex items-center gap-2 hover:text-pink-400 cursor-pointer">
                  <FaHeart /> <span>128</span>
                </div>
                <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
                  <FaShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MirrorShineTweet;
