/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Utility to join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getMeteorPosition = (angle, width, height) => {
  const rad = (angle * Math.PI) / 180;
  const edge = Math.random() < 0.5 ? "top" : "right";

  if (edge === "top") {
    const x = Math.random() * width;
    return {
      start: { x, y: -10 },
      end: {
        x: x - height * Math.tan(rad),
        y: height + 20,
      },
    };
  } else {
    const y = Math.random() * height;
    return {
      start: { x: width + 20, y },
      end: {
        x: -20,
        y: y + width * Math.tan(Math.PI / 2 - rad),
      },
    };
  }
};

const Meteors = ({
  number = 30,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 135,
  className = "",
  children,
}) => {
  const [meteors, setMeteors] = useState([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const arr = Array.from({ length: number }).map(() => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const pos = getMeteorPosition(angle, dimensions.width, dimensions.height);
      return { delay, duration, ...pos };
    });
    setMeteors(arr);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle, dimensions]);

  return (
    <div className={cn("relative overflow-hidden min-h-screen w-full bg-gray-950", className)}>
      <div className="absolute inset-0 z-10 flex pointer-events-none text-white">
        {children ? (
          children
        ) : (
          <div className="relative w-full h-full flex flex-col justify-center items-center px-4 text-center">
            {/* 💡 Overlay content goes here */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">
              Meteors
            </h2>
            <p className="mt-3 text-base md:text-lg max-w-md md:max-w-xl text-gray-500">
              Watch as meteors streak across the night sky, bringing a sense of wonder and beauty to your web experience.
            </p>
          </div>
        )}
      </div>

      {meteors.map((meteor, idx) => (
        <motion.span
          key={idx}
          initial={{
            opacity: 0,
            x: meteor.start.x,
            y: meteor.start.y,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: meteor.end.x,
            y: meteor.end.y,
          }}
          transition={{
            delay: meteor.delay,
            duration: meteor.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: 3,
            height: 4,
            borderRadius: "9999px",
            background: "#71717a",
            boxShadow: "0 0 0 1px #ffffff10",
            pointerEvents: "none",
            zIndex: 1,
            rotate: `${-angle}deg`,
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: 50,
              height: 1,
              background: "linear-gradient(90deg, #71717a, transparent)",
              transform: "translateY(-50%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        </motion.span>
      ))}
    </div>
  );
};

export default Meteors;
