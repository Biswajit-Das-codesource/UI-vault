import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import ObsidianProfilecardPage from "./ObsidianProfileCardPage";
import ModernProfileCard from "./ModernProfileCard";
import TiltGlowCard from "./TiltGlowCard";
import CyberFusion from "./CyberFusion";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "prismjs/themes/prism.css";
import { toast, Toaster } from "sonner";

function ProfileCardPage() {
  const [tab, setTab] = useState("preview");
  const [midnightTab, setMidnightTab] = useState("preview");
  const [orbitTab, setOrbitTab] = useState("preview");
  const [obsidianTab, setObsidianTab] = useState("preview");
  const [copied, setCopied] = useState(""); // store the id of the last copied button

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const Cyberfusioncodestring = `import React from "react";

function CyberFusion() {
  return (
    <div className="bg-black text-white p-4 rounded-xl">
      <h1 className="text-pink-400">Cyber Fusion</h1>
    </div>
  );
}

export default CyberFusion;`;
  const MidnightSparkCode = `import React from "react";

function MidnightSpark() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl">
      <h1 className="text-blue-400">Midnight Spark</h1>
    </div>
  );
}

export default MidnightSpark;`;
  const OrbitGlowCode = `import React from "react";

function OrbitGlow() {
  return (
    <div className="bg-black text-white p-4 rounded-xl">
      <h1 className="text-green-400">Orbit Glow</h1>
    </div>
  );
}

export default OrbitGlow;`;
  const ObsidianCode = `import React from "react";

function Obsidian() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl">
      <h1 className="text-purple-400">Obsidian</h1>
    </div>
  );
}

export default Obsidian;`;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Profile Cards</h1>
      <p className="text-gray-300 mt-1">
        Reusable dark-themed animated profile cards for portfolios and dev
        profiles.
      </p>

      {/* CyberFusion Section */}
      <h2 className="text-xl font-bold mt-6">Theme : CyberFusion</h2>
      <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>

      <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
          CLI
        </button>
      </div>
      <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
      </div>
      <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
        <code
          className="geist-mono overflow-x-auto text-sm"
          style={{ letterSpacing: "1px" }}
        >
          <span className="text-cyan-400">npx</span> ui-vault
          profile-CyberFusion
        </code>
        <button
          onClick={() =>
            handleCopy("npx ui-vault profile-CyberFusion", "cyberfusion-cli")
          }
          className="ml-4 text-white transition"
          title="Copy to clipboard"
        >
          {copied === "cyberfusion-cli" ? (
            <ClipboardCheck size={18} />
          ) : (
            <Clipboard size={18} />
          )}
        </button>
      </div>
      <div className="flex border-b border-white/10 mt-5">
        <button
          onClick={() => setTab("preview")}
          className={`px-4 py-2 font-medium ${
            tab === "preview"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={`px-4 py-2 font-medium ${
            tab === "code"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Code
        </button>
      </div>
      {tab === "preview" && (
        <div className="mt-3 bg-black">
          <CyberFusion />
        </div>
      )}
      {tab === "code" && (
        <div className="relative bg-[#1a1a1a] mt-5 p-3 rounded-3xl text-base font-mono">
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            customStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "15px",
              background: "#1a1a1a",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              lineHeight: "1.7",
            }}
            className="text-sm geist-mono mt-5"
          >
            {Cyberfusioncodestring}
          </SyntaxHighlighter>
          <button
            onClick={() =>
              handleCopy(Cyberfusioncodestring, "cyberfusion-code")
            }
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
          >
            {copied === "cyberfusion-code" ? "Copied!" : <Copy size={16} />}
          </button>
        </div>
      )}

      {/* MidnightSpark Section */}
      <h2 className="text-xl font-bold mt-6">Theme : MidnightSpark</h2>
      <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>

      <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
          CLI
        </button>
      </div>
      <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
      </div>

      <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
        <code
          className="geist-mono overflow-x-auto text-sm"
          style={{ letterSpacing: "1px" }}
        >
          <span className="text-cyan-400">npx</span> ui-vault
          profile-MidnightSpark
        </code>
        <button
          onClick={() =>
            handleCopy(
              "npx ui-vault profile-MidnightSpark",
              "midnightspark-cli"
            )
          }
          className="text-gray-400 hover:text-white ml-2"
        >
          {copied === "midnightspark-cli" ? (
            <ClipboardCheck size={18} />
          ) : (
            <Clipboard size={18} />
          )}
        </button>
      </div>
      <div className="flex border-b border-white/10 mt-5">
        <button
          onClick={() => setMidnightTab("preview")}
          className={`px-4 py-2 font-medium ${
            midnightTab === "preview"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setMidnightTab("code")}
          className={`px-4 py-2 font-medium ${
            midnightTab === "code"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Code
        </button>
      </div>
      {midnightTab === "preview" && (
        <div className="mt-3 bg-black">
          <ModernProfileCard />
        </div>
      )}
      {midnightTab === "code" && (
        <div className="relative bg-[#1a1a1a] mt-5 p-3 rounded-3xl text-base font-mono">
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            customStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "15px",
              background: "#1a1a1a",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              lineHeight: "1.7",
            }}
            className="text-sm geist-mono mt-5"
          >
            {MidnightSparkCode}
          </SyntaxHighlighter>
          <button
            onClick={() => handleCopy(MidnightSparkCode, "midnightspark-code")}
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
          >
            {copied === "midnightspark-code" ? "Copied!" : <Copy size={16} />}
          </button>
        </div>
      )}

      {/* Orbit Glow Section */}
      <h2 className="text-xl font-bold mt-6">Theme : Orbit Glow</h2>
      <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
      <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
          CLI
        </button>
      </div>
      <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
      </div>

      <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
        <code
          className="geist-mono flex-grow text-sm font-medium"
          style={{ letterSpacing: "1px" }}
        >
          <span className="text-cyan-400">npx</span> ui-vault profile-OrbitGlow
        </code>
        <button
          onClick={() =>
            handleCopy("npx ui-vault profile-OrbitGlow", "orbitglow-cli")
          }
          className="text-gray-400 hover:text-white ml-2"
        >
          {copied === "orbitglow-cli" ? (
            <ClipboardCheck size={18} />
          ) : (
            <Clipboard size={18} />
          )}
        </button>
      </div>
      <div className="flex border-b border-white/10 mt-5">
        <button
          onClick={() => setOrbitTab("preview")}
          className={`px-4 py-2 font-medium ${
            orbitTab === "preview"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setOrbitTab("code")}
          className={`px-4 py-2 font-medium ${
            orbitTab === "code"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Code
        </button>
      </div>
      {orbitTab === "preview" && (
        <div className="mt-3 bg-black">
          <TiltGlowCard />
        </div>
      )}
      {orbitTab === "code" && (
        <div className="relative bg-[#1a1a1a] mt-5 p-3 rounded-3xl text-base font-mono">
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            customStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "15px",
              background: "#1a1a1a",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              lineHeight: "1.7",
            }}
            className="text-sm geist-mono mt-5"
          >
            {OrbitGlowCode}
          </SyntaxHighlighter>
          <button
            onClick={() => handleCopy(OrbitGlowCode, "orbitglow-code")}
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
          >
            {copied === "orbitglow-code" ? "Copied!" : <Copy size={16} />}
          </button>
        </div>
      )}

      {/* Obsidian Section */}
      <h2 className="text-xl font-bold mt-6">Theme : Obsidian</h2>
      <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
      <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
          CLI
        </button>
      </div>
      <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
      </div>

      <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
        <code
          className="flex-grow text-sm geist-mono font-medium"
          style={{ letterSpacing: "1px" }}
        >
          <span className="text-cyan-400">npx</span> ui-vault profile-Obsidian
        </code>
        <button
          onClick={() =>
            handleCopy("npx ui-vault profile-Obsidian", "obsidian-cli")
          }
          className="text-gray-400 hover:text-white ml-2"
        >
          {copied === "obsidian-cli" ? (
            <ClipboardCheck size={18} />
          ) : (
            <Clipboard size={18} />
          )}
        </button>
      </div>
      <div className="flex border-b border-white/10 mt-5">
        <button
          onClick={() => setObsidianTab("preview")}
          className={`px-4 py-2 font-medium ${
            obsidianTab === "preview"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setObsidianTab("code")}
          className={`px-4 py-2 font-medium ${
            obsidianTab === "code"
              ? "text-white border-b-2 border-white"
              : "text-white/50"
          }`}
        >
          Code
        </button>
      </div>
      {obsidianTab === "preview" && (
        <div className="mt-3 bg-black">
          <ObsidianProfilecardPage />
        </div>
      )}
      {obsidianTab === "code" && (
        <div className="relative bg-[#1a1a1a] mt-5 p-3 rounded-3xl text-base font-mono">
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            customStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "15px",
              background: "#1a1a1a",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              lineHeight: "1.7",
            }}
            className="text-sm geist-mono mt-5"
          >
            {ObsidianCode}
          </SyntaxHighlighter>
          <button
            onClick={() => handleCopy(ObsidianCode, "obsidian-code")}
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
          >
            {copied === "obsidian-code" ? "Copied!" : <Copy size={16} />}
          </button>
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default ProfileCardPage;
