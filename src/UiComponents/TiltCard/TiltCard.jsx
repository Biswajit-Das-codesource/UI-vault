import React, { useRef } from "react";
import PropTypes from "prop-types";

export default function TiltCard(props) {
  const {
    title,
    highlight,
    description,
    image,
    tryButtonText,
    signUpText,
  } = { ...TiltCard.defaultProps, ...props }; // <-- Default fallback

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
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="min-h md:p-10 bg-black flex items-center justify-center">
      <div
        className="w-[340px] md:w-[480px] rounded-2xl p-6 shadow-xl transition-transform duration-300"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <div
          ref={cardRef}
          className="rounded-2xl transition-transform duration-300 bg-[#111] p-6"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
            <span className="bg-blue-600 text-white px-1 rounded">
              {highlight}
            </span>{" "}
            {title}
          </h2>
          <p className="text-gray-400 mb-4">{description}</p>

          <img
            src={image}
            alt="Tilt visual"
            className="rounded-xl object-cover w-full h-48"
            style={{
              transform: "translateZ(40px)",
              transition: "transform 0.3s ease",
            }}
          />

          <div className="flex justify-between items-center mt-6">
            <button className="text-white underline">{tryButtonText}</button>
            <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition">
              {signUpText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TiltCard.propTypes = {
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tryButtonText: PropTypes.string,
  signUpText: PropTypes.string,
};

TiltCard.defaultProps = {
  title: "the future of UI depth",
  highlight: "Experience",
  description:
    "Hover to activate immersive 3D effects with CSS perspective magic.",
  image:
    "https://static.vecteezy.com/system/resources/previews/010/865/555/non_2x/autumn-rural-landscape-farm-fields-and-forest-trees-with-orang-blue-sky-sunset-cartoon-banner-backdrop-farm-field-harvest-scenery-of-natural-countryside-with-sunrise-for-fall-season-background-vector.jpg",
  tryButtonText: "Try now →",
  signUpText: "Sign up",
};
