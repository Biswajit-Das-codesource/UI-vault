import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import ObsidianProfilecardPage from "./ObsidianProfileCardPage";
import ModernProfileCard from "./ModernProfileCard";
import TiltGlowCard from "./TiltGlowCard";
import CyberFusion from "./CyberFusion";


function ProfileCardPage() {
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Profile Cards</h1>
        <p className="text-gray-400 mt-1">
          Reusable dark-themed animated profile cards for portfolios and dev profiles.
        </p>

        {/* Theme 1 */}
        <h2 className="text-xl font-bold mt-6">Theme : CyberFusion</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault profile-CyberFusion
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault profile-CyberFusion")}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <CyberFusion/>

        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
          <button
            onClick={() => setTab("preview")}
            className={`$%7Btab === "preview" ? "text-white font-medium" : "text-gray-500"%7D`}
          >
            Preview
          </button>
        </div>


        {/* Theme 2 */}
        <h2 className="text-xl font-bold mt-6">Theme : MidnightSpark</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault profile-MidnightSpark
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault profile-MidnightSpark")}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <ModernProfileCard/>


        {/* Theme 3 */}
        <h2 className="text-xl font-bold mt-6">Theme : Orbit Glow</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault profile-OrbitGlow
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault profile-OrbitGlow")}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        <TiltGlowCard/>


        {/* Theme 4 */}
        <h2 className="text-xl font-bold mt-6">Theme : Obsidian</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault profile-Obsidian
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault profile-Obsidian")}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        <ObsidianProfilecardPage/>

      </div>
    
  );
}

export default ProfileCardPage;
