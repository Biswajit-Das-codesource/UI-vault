/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const TOTAL_LINES = 100;
const lines = Array.from({ length: TOTAL_LINES });

const getMotionProps = (i) => {
  const baseAngle = (i / TOTAL_LINES) * 2 * Math.PI;
  const jitter = (Math.random() - 0.5) * 0.5;
  const angle = baseAngle + jitter;

  const baseX = Math.cos(angle) * 600;
  const baseY = Math.sin(angle) * 600;

  const waveX = 50 * Math.sin(i);
  const waveY = 50 * Math.cos(i);

  const colors = [
    "#00FFFF",
    "#FF00FF",
    "#FFA500",
    "#00FF00",
    "#FF0000",
    "#FFFF00",
  ];

  return {
    backgroundColor: colors[i % colors.length],
    blur: Math.random() > 0.5 ? "" : "blur-md",
    size: Math.random() * 0.5 + 0.5,
    animate: {
      x: [0, baseX * 0.3 + waveX, baseX * 0.6, baseX + waveX, baseX, 0],
      y: [0, baseY * 0.3 + waveY, baseY * 0.6, baseY + waveY, baseY, 0],
      opacity: [0, 0.8, 1, 0.8, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 5 + Math.random() * 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay: i * 0.03,
      },
    },
  };
};

export default function Gradientlinebackground({ children }) {
  // Default fallback content
  const defaultChildren = (
    <>
      <h1 className="text-6xl font-bold text-white mb-4 leading-[1.1]">
        Ui <br /> Vault
      </h1>
      <p className="text-gray-300 max-w-xl mx-auto">
        Get the best advice from our experts, including artists, painters,
        marathoners, and RDX — totally free.
      </p>
    </>
  );

  // Enhance user children if provided, add default classes if missing
  const renderChildren = () => {
    if (!children) return defaultChildren;

    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;

      const isHeading = child.type === "h1" || child.type === "h2";
      const isParagraph = child.type === "p";

      if (isHeading && !child.props.className) {
        return React.cloneElement(child, {
          className: "text-6xl font-bold text-white mb-4 leading-[1.1]",
        });
      }

      if (isParagraph && !child.props.className) {
        return React.cloneElement(child, {
          className: "text-gray-300 max-w-xl mx-auto",
        });
      }

      return child;
    });
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Foreground Text */}
      <div className="z-10 text-center">{renderChildren()}</div>

      {/* Background Animations */}
      {lines.map((_, i) => {
        const { backgroundColor, animate, blur, size } = getMotionProps(i);
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${blur}`}
            style={{
              top: "50%",
              left: "50%",
              width: `${size}rem`,
              height: "2.5rem",
              backgroundColor,
              opacity: 0,
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={animate}
          />
        );
      })}
    </div>
  );
}
