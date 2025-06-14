import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";
import NeonTiltLoginCard from "./NeonTiltLoginCard";
import FrostedGlassSignUpCard from "./FrostedGlassSignUpCard";
import GradientSocialSignUpCard from "./GradientSocialSignUpCard";

function SocialCardPage() {
  const [activeTab, setActiveTab] = useState({
    obsidian: "preview",
    neon: "preview",
    hyper: "preview",
    support: "preview",
  });

  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const codeSnippets = {
    obsidian: `import React from "react";
function NeonTiltLoginCard() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl">
      <h1 className="text-purple-400">NeonTiltLoginCard</h1>
    </div>
  );
}
export default NeonTiltLoginCard;`,
    neon: `import React from "react";
function FrostedGlassSignUpCard() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-xl">
      <h1 className="text-pink-200">FrostedGlassSignUpCard</h1>
    </div>
  );
}
export default FrostedGlassSignUpCard;`,
    hyper: `import React from "react";
function GradientSignUpCard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-4 rounded-xl">
      <h1 className="text-green-200">GradientSignUpCard</h1>
    </div>
  );
}
export default GradientSignUpCard;`,
  };

  const renderCardComponent = (theme) => {
    switch (theme) {
      case "obsidian":
        return <NeonTiltLoginCard />;
      case "neon":
        return <FrostedGlassSignUpCard />;
      case "hyper":
        return <GradientSocialSignUpCard />;
      default:
        return null;
    }
  };

  const themes = [
    {
      id: "obsidian",
      label: "Neon Pulse",
      command: "npx ui-vault SocialCard-NeonPulse",
    },
    {
      id: "neon",
      label: "Frosted Glass",
      command: "npx ui-vault SocialCard-FrostedGlassSignUpCard",
    },
    {
      id: "hyper",
      label: "Gradient SignUp Card",
      command: "npx ui-vault SocialCard-GradientSignUpCard",
    },
  ];

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Social Cards</h1>
        <p className="text-gray-400 mt-1">
          Visually expressive card designs with copy & code previews for better
          user onboarding.
        </p>

        {themes.map(({ id, label, command }) => (
          <div key={id} className="mt-10">
            <h2 className="text-xl font-bold mt-6">Theme : {label}</h2>
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
                <span className="text-cyan-400">npx</span>{" "}
                {command.split("npx ")[1]}
              </code>
              <button
                onClick={() => handleCopy(command, `${id}-cli`)}
                className="ml-4 text-white transition"
                title="Copy to clipboard"
              >
                {copied === `${id}-cli` ? (
                  <ClipboardCheck size={18} />
                ) : (
                  <Clipboard size={18} />
                )}
              </button>
            </div>

            <div className="flex border-b border-white/10 mt-5">
              <button
                onClick={() => setActiveTab({ ...activeTab, [id]: "preview" })}
                className={`px-4 py-2 font-medium ${
                  activeTab[id] === "preview"
                    ? "text-white border-b-2 border-white"
                    : "text-white/50"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab({ ...activeTab, [id]: "code" })}
                className={`px-4 py-2 font-medium ${
                  activeTab[id] === "code"
                    ? "text-white border-b-2 border-white"
                    : "text-white/50"
                }`}
              >
                Code
              </button>
            </div>

            {activeTab[id] === "preview" && (
              <div className="mt-3 bg-black rounded-xl">
                {renderCardComponent(id)}
              </div>
            )}

            {activeTab[id] === "code" && (
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
                  {codeSnippets[id]}
                </SyntaxHighlighter>
                <button
                  onClick={() => handleCopy(codeSnippets[id], `${id}-code`)}
                  className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
                >
                  {copied === `${id}-code` ? "Copied!" : <Copy size={16} />}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default SocialCardPage;
