import React, { useEffect, useRef, useState } from "react";

const createWavePath = (
  amplitude,
  frequency,
  phase,
  width = 1000,
  height = 300
) => {
  const points = [];
  const step = 10;

  for (let x = 0; x <= width; x += step) {
    const y =
      height / 2 +
      Math.sin((x / width) * Math.PI * frequency + phase) * amplitude;
    points.push(`${x},${y}`);
  }

  return `M${points.join(" L")}`;
};

const colors = ["#66ccff", "#ffffff", "#f5baff", "#87f4ff", "#ffd1f2"];

const GeminiThreads = () => {
  const [phase, setPhase] = useState(0);
  const animationFrameRef = useRef();

  const animate = () => {
    setPhase((prev) => prev + 0.02);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-2xl bg-black overflow-hidden flex items-center justify-center">
    {/* Gradient Text Above Threads */}
    <div className="absolute z-10 bottom-[210px] text-center">
        
    </div>

    {/* SVG Thread Waves */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
      >
        {colors.map((color, index) => (
          <path
            key={index}
            d={createWavePath(
              35 - index * 5,
              2.2 + index * 0.3,
              phase + index * 0.5
            )}
            stroke={color}
            strokeWidth={1.5}
            fill="transparent"
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 6px ${color})`,
              opacity: 0.9,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default GeminiThreads;
