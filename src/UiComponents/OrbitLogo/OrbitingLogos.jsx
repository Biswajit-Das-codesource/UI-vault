/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import chatgpt from "../../assets/openai.svg";
import vscode from "../../assets/vscode.svg";
import python from "../../assets/python.svg";
import nodejs from "../../assets/nodejs.svg";
import notion from "../../assets/notion.svg";


const logos = [chatgpt, vscode, python, nodejs, notion];

const OrbitingLogos = () => {
  return (
    <div className="relative rounded-2xl w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Outer Circle - AntiClockwise */}
      <motion.div
        className="absolute border-2 border-[#3f3f3f] rounded-full w-[25rem] h-[25rem] flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ animationDirection: "reverse" }}
      >
        {logos.map((logo, index) => {
          const angle = (360 / logos.length) * index;
          const radius = 200;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.img
              key={`outer-${index}`}
              src={logo}
              className="absolute w-10 h-10 object-contain"
              style={{ left: `calc(50% + ${x}px - 1.25rem)`, top: `calc(50% + ${y}px - 1.25rem)` }}
            />
          );
        })}
      </motion.div>

      {/* Inner Circle - Clockwise */}
      <motion.div
        className="absolute border-2  border-[#3f3f3f] rounded-full w-[15rem] h-[15rem] flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {logos.map((logo, index) => {
          const angle = (360 / logos.length) * index;
          const radius = 120;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          return (
            <motion.img
              key={`inner-${index}`}
              src={logo}
              className="absolute w-8 h-8 object-contain"
              style={{ left: `calc(50% + ${x}px - 1rem)`, top: `calc(50% + ${y}px - 1rem)` }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default OrbitingLogos;
