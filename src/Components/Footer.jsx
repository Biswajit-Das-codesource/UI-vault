import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-black px-4">
      <div className="bg-gradient-to-b from-zinc-800 to-black rounded-[60px] p-10 text-center max-w-4xl w-full shadow-xl relative">
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Build Beautiful Interfaces Like <br />
          <span className="text-white">Spectrum UI for Your Product</span>
        </h1>

        <p className="text-zinc-400 text-lg mt-6">
          I help companies ship fast, clean UIs that users love.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 blur-xl opacity-70 rounded-full" />
            <button className="relative z-10 flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-semibold rounded-full border border-zinc-700 hover:border-white transition-all">
              Lets Talk <FaArrowRight className="ml-1 text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
