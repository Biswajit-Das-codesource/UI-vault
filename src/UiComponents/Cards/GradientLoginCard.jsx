import React from 'react';
import "../../App.css"

function GradientLoginCard() {
  return (
    <div className="min-h flex items-center justify-center bg-black p-4 sm:p-4 ">
      <div className="bg-gradient-to-br from-pink-600 via-fuchsia-600 to-violet-600 rounded-2xl p-1 shadow-[0_0_40px_#ff00ff55] w-full max-w-sm border border-[#2c2c2c]">
        <div className="bg-[#0f0f0f] rounded-2xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_0_10px_#ff00ff]">Login</h2>
          <p className="text-gray-300 mb-6">
            Enter your credentials to access your account.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-xl bg-[#121212] border border-pink-500 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-[0_0_10px_#ff00ff33]"
                autoComplete="email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-xl bg-[#121212] border border-violet-500 text-white placeholder-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-[0_0_10px_#bf40ff33]"
                autoComplete="current-password"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#121212] text-white border border-[#333] hover:bg-[#1a1a1a] transition shadow-[0_0_12px_#ff00ff55]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold hover:opacity-90 transition shadow-[0_0_20px_#ff00ffcc]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GradientLoginCard;
