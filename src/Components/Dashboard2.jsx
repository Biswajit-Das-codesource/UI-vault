import React from 'react';
import { FaSearch, FaClipboard, FaLanguage, FaPaperPlane } from 'react-icons/fa';

const WelcomePage = () => {
  return (
    <div className="h-[80vh] bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-5xl font-semibold mb-4 text-center">Welcome to WebbyUI</h1>
      <p className="text-gray-400 text-xl mb-10 text-center">What can I do for you today?</p>

      {/* Input Box */}
      <div className="w-full max-w-3xl bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
        <div className="flex items-center p-4">
          <textarea
            rows="3"
            placeholder="What would you like to do?"
            className="w-full bg-transparent text-white placeholder-gray-500 outline-none resize-none"
          />
          <button className="text-gray-400 hover:text-white transition duration-200 ml-4">
            <FaPaperPlane size={20} />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-3xl">
        <ActionButton icon={<FaSearch />} label="Search the web" />
        <ActionButton icon={<FaClipboard />} label="Summarize this article" />
        <ActionButton icon={<FaLanguage />} label="Translate this text" />
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }) => (
  <button className="flex items-center justify-center gap-2 flex-1 bg-zinc-800 hover:bg-zinc-700 transition text-white px-4 py-3 rounded-xl text-sm shadow">
    {icon}
    {label}
  </button>
);

export default WelcomePage;
