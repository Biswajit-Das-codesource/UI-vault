import React from "react";

export default function FloatingCard({ imgsrc }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex items-center justify-center min-h md:p-8 bg-black">
      <div className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={imgsrc || defaultImage}
          alt="Floating Ripple Card"
          className="w-full h-full object-cover"
          style={{ filter: "url(#bgRipple)" }}
        />

        {/* SVG Filter for Background Ripple */}
        <svg className="absolute w-0 h-0">
          <filter id="bgRipple">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.008"
              numOctaves="2"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.08;0.010;0.08"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
      </div>
    </div>
  );
}
