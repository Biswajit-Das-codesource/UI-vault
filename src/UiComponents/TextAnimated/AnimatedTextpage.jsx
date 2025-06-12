import React, { useState } from "react";
import { Clipboard, ClipboardCheck, Copy } from "lucide-react";
import ShinnyText from "./ShinnyText";
import CircularTextScroll from "./CircularText";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

function AnimatedTextpage() {
  const [shinyTab, setShinyTab] = useState("preview");
  const [circularTab, setCircularTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const shinyCode = `import React from "react";
function ShinnyText() {
  return (
    <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
      Shiny Obsidian Text
    </h1>
  );
}
export default ShinnyText;`;

  const circularCode = `import React from "react";
function CircularTextScroll() {
  return (
    <div className="animate-spin-slow text-2xl font-bold text-blue-400">
      my name is biswajit
    </div>
  );
}
export default CircularTextScroll;`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Animated Text</h1>
        <p className="text-gray-400 mt-1">
          Beautiful and flexible animated text components for your UI.
        </p>

        {/* Shiny Obsidian Theme */}
        <h2 className="text-xl font-bold mt-6">Theme : Shiny Obsidian</h2>
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
          <code className="geist-mono overflow-x-auto text-sm" style={{ letterSpacing: "1px" }}>
            <span className="text-cyan-400">npx</span> ui-vault animatedtext-shiny-obsidian
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault animatedtext-shiny-obsidian", "shiny-cli")}
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "shiny-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setShinyTab("preview")}
            className={`px-4 py-2 font-medium ${
              shinyTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setShinyTab("code")}
            className={`px-4 py-2 font-medium ${
              shinyTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {shinyTab === "preview" && (
          <div className="mt-3 bg-black p-4 rounded-xl">
            <ShinnyText />
          </div>
        )}
        {shinyTab === "code" && (
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
              {shinyCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(shinyCode, "shiny-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "shiny-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Circular Aurora Theme */}
        <h2 className="text-xl font-bold mt-6">Theme : Circular Aurora</h2>
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
          <code className="geist-mono overflow-x-auto text-sm" style={{ letterSpacing: "1px" }}>
            <span className="text-cyan-400">npx</span> ui-vault animatedtext-circular-aurora
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault animatedtext-circular-aurora", "circular-cli")}
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "circular-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setCircularTab("preview")}
            className={`px-4 py-2 font-medium ${
              circularTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setCircularTab("code")}
            className={`px-4 py-2 font-medium ${
              circularTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {circularTab === "preview" && (
          <div className="mt-3 bg-black p-4 rounded-xl">
            <CircularTextScroll text="my name is biswajit" />
          </div>
        )}
        {circularTab === "code" && (
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
              {circularCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(circularCode, "circular-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "circular-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimatedTextpage;