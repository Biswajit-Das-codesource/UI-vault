import React, { useRef, useState } from "react";

export default function VisionCard({
  imageURL = "https://mobilesyrup.com/wp-content/uploads/2024/07/vision-pro-header-scaled.jpg",
  title = "Apple Vision Pro",
  description = `Biswajit said it's the future. Biswabhusana wore it once and tried
to code with hand gestures. Now it's banned in class.`,
}) {
  const containerRef = useRef();
  const [lensStyle, setLensStyle] = useState({ display: "none" });

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    const zoom = 2.5;

    const bgX = (x / bounds.width) * 100;
    const bgY = (y / bounds.height) * 100;

    setLensStyle({
      display: "block",
      position: "absolute",
      top: y,
      left: x,
      transform: "translate(-50%, -50%)",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      backgroundImage: `url(${imageURL})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: `${bounds.width * zoom}px ${bounds.height * zoom}px`,
      backgroundPosition: `${bgX}% ${bgY}%`,
      pointerEvents: "none",
      zIndex: 10,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
    });
  };

  const handleMouseLeave = () => {
    setLensStyle({ display: "none" });
  };

  return (
    <div className="min-h md:p-8 flex items-center justify-center bg-gray-950">
      <div className="max-w-sm rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-600 to-gray-900 p-[2px]">
        <div className="bg-black rounded-[2rem] p-4">
          <div
            className="relative w-full h-64 rounded-2xl overflow-hidden"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={imageURL}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div style={lensStyle} className="absolute" />
          </div>
          <div className="mt-6 px-2">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-gray-300 mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
