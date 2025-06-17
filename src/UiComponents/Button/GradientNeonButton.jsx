import React from "react";

function PremiumGlowButton({ btnText = "Premium Glow" }) {
  return (
    <div className="min-h p-10 flex items-center justify-center bg-gray-950">
      <button
        className="relative px-8 py-3 text-white font-semibold tracking-wide uppercase rounded-full
        bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]
        border border-[#00ffab] shadow-[0_0_8px_#00ffab88]
        transition-all duration-300 ease-in-out
        hover:shadow-[0_0_10px_#00ffabcc,0_0_20px_#ff00c8cc]
        hover:border-pink-500
        before:absolute before:inset-0 before:rounded-full before:z-[-1]
        before:bg-[radial-gradient(circle_at_50%_50%,_#00ffab33,_#ff00c833,_transparent)]
        before:transition-all before:duration-500 before:opacity-0
        hover:before:opacity-100"
      >
        {btnText}
      </button>
    </div>
  );
}

export default PremiumGlowButton;
