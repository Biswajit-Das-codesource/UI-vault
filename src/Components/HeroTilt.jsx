import React, { useRef } from "react";

export default function Herotilt() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const resetRotation = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div className="bg-black flex items-center justify-center p-4 sm:p-6 md:p-5">
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl p-3 shadow-xl transition-transform duration-300"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div
          ref={cardRef}
          className="rounded-2xl transition-transform duration-300 bg-[#111] p-4 sm:p-6"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">
            <span className="bg-blue-600 text-white px-1 rounded">
              Experience
            </span>{" "}
            the future of UI depth
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Hover to activate immersive 3D effects with CSS perspective magic.
          </p>

          <img
            src="https://static.vecteezy.com/system/resources/previews/010/865/555/non_2x/autumn-rural-landscape-farm-fields-and-forest-trees-with-orang-blue-sky-sunset-cartoon-banner-backdrop-farm-field-harvest-scenery-of-natural-countryside-with-sunrise-for-fall-season-background-vector.jpg"
            alt="Forest"
            className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-52 lg:h-60"
            style={{
              transform: "translateZ(40px)",
              transition: "transform 0.3s ease",
            }}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
            <button className="text-white underline text-sm sm:text-base">
              Try now →
            </button>
            <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition text-sm sm:text-base">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
