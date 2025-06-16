import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-black px-4">
    "<div className="bg-gradient-to-b from-violet-500 to-black rounded-[40px] sm:rounded-[60px] px-6 py-14 sm:py-20 text-center max-w-4xl w-full shadow-2xl relative">

        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Build Beautiful Interfaces Like <br />
          <span className="text-white">UIvault for Your Product</span>
        </h1>

        <div className="mt-10 flex justify-center">
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 blur-xl opacity-70 rounded-full group-hover:opacity-90 transition duration-300" />

            {/* Actual Button */}
            <button className="relative z-10 bg-black border border-zinc-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-zinc-900 transition duration-300">
              Get Started
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
