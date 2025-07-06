/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useMemo} from "react";

export default function GlassToggleBar() {
  const [selected, setSelected] = useState("silver");
  const gliderRef = useRef(null);
  const options = useMemo(() => ["silver", "gold", "platinum"], []);

  const getGliderPosition = () => {
    const index = options.indexOf(selected);
    return `translate-x-[${index * 100}%]`;
  };

  useEffect(() => {
    const glider = gliderRef.current;
    if (glider) {
      glider.style.transform = `translateX(${options.indexOf(selected) * 100}%)`;
    }
  }, [selected, options]);

  const gliderStyles = {
    silver: {
      background: "linear-gradient(135deg, #c0c0c055, #e0e0e0)",
      boxShadow: "0 0 18px rgba(192, 192, 192, 0.5), 0 0 10px rgba(255, 255, 255, 0.4) inset"
    },
    gold: {
      background: "linear-gradient(135deg, #ffd70055, #ffcc00)",
      boxShadow: "0 0 18px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 235, 150, 0.4) inset"
    },
    platinum: {
      background: "linear-gradient(135deg, #d0e7ff55, #a0d8ff)",
      boxShadow: "0 0 18px rgba(160, 216, 255, 0.5), 0 0 10px rgba(200, 240, 255, 0.4) inset"
    }
  };

  return (
    <div className="w-full flex justify-center px-4 py-6">
      <div className="relative flex w-full max-w-md bg-white/10 backdrop-blur-lg text-sm rounded-xl overflow-hidden shadow-inner shadow-black/30">
        {/* Glider */}
        <div
          ref={gliderRef}
          className="absolute top-0 bottom-0 left-0 w-1/3 rounded-xl transition-transform duration-[500ms] ease-[cubic-bezier(0.37,1.95,0.66,0.56)]"
          style={gliderStyles[selected]}
        />

        {/* Buttons */}
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`relative z-10 flex-1 py-3 text-center font-semibold transition-colors duration-300 ${
              selected === option ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
