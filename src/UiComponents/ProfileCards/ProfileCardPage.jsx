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
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Profile Cards</h1>
      <p className="text-gray-300 mt-1">
        Reusable dark-themed animated profile cards for portfolios and dev
        profiles.
      </p>

      {/* Theme 1 */}
      <h2 className="text-xl font-bold mt-6">Theme : CyberFusion</h2>
      <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>

      <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
          CLI
        </button>
      </div>

      {/* Description */}
      <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
      </div>

      {/* Code block */}
      <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl">
        <code className="geist-mono overflow-x-auto text-base">
          <span className="text-cyan-400">npx</span> ui-vault
          profile-CyberFusion
        </code>
        <button
          onClick={() => handleCopy("ui-vault profile-CyberFusion")}
          className="ml-4 text-white  transition"
          title="Copy to clipboard"
        >
          {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
        </button>
      </div>

      <CyberFusion />

      <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
        <button
          onClick={() => setTab("preview")}
          className={`${
            tab === "preview" ? "text-white font-medium" : "text-gray-500"
          }`}
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

      <ModernProfileCard />

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
      <TiltGlowCard />

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
      <ObsidianProfilecardPage />
    </div>
  );
}

export default ProfileCardPage;
