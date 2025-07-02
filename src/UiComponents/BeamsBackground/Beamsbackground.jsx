/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const TOTAL_LINES = 14;
const lines = Array.from({ length: TOTAL_LINES });

const defaultH2Class =
  "text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text";

const Beamsbackground = ({ children }) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    // Only modify if it's a valid React element and a heading (h1/h2)
    if (React.isValidElement(child) && typeof child.type === "string") {
      const tag = child.type.toLowerCase();
      if ((tag === "h1" || tag === "h2") && !child.props.className) {
        const defaultClass =
          tag === "h1"
            ? "text-3xl md:text-5xl font-bold mb-2"
            : defaultH2Class;

        return React.cloneElement(child, {
          className: defaultClass,
        });
      }
    }
    return child;
  });

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Falling Lines */}
      {lines.map((_, i) => {
        const delay = Math.random() * 3;
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute top-0 w-[1.5px] h-10 bg-violet-600 opacity-50 rounded-full"
            style={{ left: `${left}%` }}
            animate={{ y: "110vh" }}
            initial={{ y: "-10vh" }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4">
        {React.Children.count(children) > 0 ? (
          enhancedChildren
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              What's cooler than Beams?
            </h1>
            <h2 className={defaultH2Class}>Exploding beams.</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Beamsbackground;
