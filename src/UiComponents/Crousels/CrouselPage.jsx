import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import DarkCarousel from "./DarkCarousel";
import { Copy } from "lucide-react";
import AutoCarousel from "./AutoCrousel";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

const DarkcarouselCodeString = `import './App.css'
import DarkCarousel from './UIvault/darkCarousel/DarkCarousel';
function App() {
  return (
    <div>
      <DarkCarousel/>
    </div>
  )
}
export default App;
`;

const AutocarouselCodeString = `import './App.css'
import AutoCarousel from './UIvault/autoCarousel/AutoCarousel';
function App() {
  return (
    <div>
      <AutoCarousel/>
    </div>
  )
}
export default App;
`;

function CrouselPage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(""); // store the id of the last copied button

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster richColors position="top-center" />
      <h1 className="text-4xl font-bold text-white">Carousel Component</h1>
      <p className="text-gray-300 mt-1">
        Smooth, animated carousel built with Framer Motion and a dark theme.
      </p>

      {/* Carousel Section */}
      <h2 className="text-xl font-bold mt-6">Theme : Dark Carousel</h2>
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
          <span className="text-cyan-400">npx</span> ui-vault add darkCarousel
        </code>
        <button
          onClick={() => handleCopy("npx ui-vault add darkCarousel", "carousel-cli")}
          className="ml-4 text-white transition"
          title="Copy to clipboard"
        >
          {copied === "carousel-cli" ? (
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
          <DarkCarousel />
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
            {DarkcarouselCodeString}
          </SyntaxHighlighter>
          <button
            onClick={() => handleCopy(AutocarouselCodeString, "carousel-code")}
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
          >
            {copied === "carousel-code" ? "Copied!" : <Copy size={16} />}
          </button>
        </div>
      )}

    {/* You can add more carousel themes below in the same style */}

    <h2 className="text-xl font-bold mt-6">Theme : Auto Carousel</h2>
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
          <span className="text-cyan-400">npx</span> ui-vault add autoCarousel
        </code>
        <button
          onClick={() => handleCopy("npx ui-vault add autoCarousel", "carousel-cli")}
          className="ml-4 text-white transition"
          title="Copy to clipboard"
        >
          {copied === "carousel-cli" ? (
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
          <AutoCarousel />
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
            {AutocarouselCodeString}
          </SyntaxHighlighter>
          <button
            onClick={() => handleCopy(AutocarouselCodeString, "carousel-code")}
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
          >
            {copied === "carousel-code" ? "Copied!" : <Copy size={16} />}
          </button>
        </div>
      )}  

    
    </div>
  );
}

export default CrouselPage;