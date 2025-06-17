import React from "react";

function GradientNeonButton({ btnText = "Black Button" }) {
  return (
    <div className="min-h p-8 flex items-center justify-center bg-gray-100">
      <button
        className="relative px-6 py-4 text-white font-semibold text-sm rounded-full transition duration-300 ease-in-out 
        bg-gradient-to-br from-black via-zinc-900 to-black 
        border-2 border-transparent 
        before:absolute before:inset-0 before:rounded-full before:z-[-1] 
        before:border-2 before:border-transparent 
        before:bg-[conic-gradient(at_top_left,_#00ffab,_#ff00c8)] 
        before:blur-sm before:opacity-60 hover:before:opacity-100"
      >
        {btnText}
      </button>
    </div>
  );
}

export default GradientNeonButton;
