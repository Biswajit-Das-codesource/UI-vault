import React, { useState } from "react";
import LoginCard from "./LoginCard";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import GradientLoginCard from "./GradientLoginCard";
import AnimatedBgCard from "./AnimatedBgCard";
import LightThemeCard from "./LightThemeCard";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

function LoginPage() {
  const [obsidianTab, setObsidianTab] = useState("preview");
  const [gradientTab, setGradientTab] = useState("preview");
  const [neonTab, setNeonTab] = useState("preview");
  const [cottonTab, setCottonTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const ObsidianCode = `import React from "react";
function LoginCard() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl">
      <h1 className="text-purple-400">Obsidian Login</h1>
    </div>
  );
}
export default LoginCard;`;

  // Add similar code strings for Gradient, Neon Pulse, Cotton Bloom...

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Card</h1>
        <p className="text-gray-400 mt-1">
          A card is a flexible and extensible content container. It includes
          options for headers and footers, a wide variety of content, contextual
          background colors, and powerful display options.
        </p>

        {/* Obsidian Section */}
        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault card-Obsidian
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault card-Obsidian", "obsidian-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
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
            <LoginCard />
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

        {/* Repeat this pattern for Gradient, Neon Pulse, Cotton Bloom themes */}
        {/* Gradient Section */}
        <h2 className="text-xl font-bold mt-4">Theme : Gradient</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault card-gradient
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault card-gradient", "gradient-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "gradient-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setGradientTab("preview")}
            className={`px-4 py-2 font-medium ${
              gradientTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setGradientTab("code")}
            className={`px-4 py-2 font-medium ${
              gradientTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {gradientTab === "preview" && (
          <div className="mt-3 bg-black">
            <GradientLoginCard />
          </div>
        )}
        {gradientTab === "code" && (
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
              {`// Your Gradient theme code here`}
            </SyntaxHighlighter>
            <button
              onClick={() =>
                handleCopy(`// Your Gradient theme code here`, "gradient-code")
              }
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "gradient-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Neon Pulse Section */}
        <h2 className="text-xl font-bold mt-4">Theme : Neon Pulse</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault card-NeonPulse
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault card-NeonPulse", "neon-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "neon-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setNeonTab("preview")}
            className={`px-4 py-2 font-medium ${
              neonTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setNeonTab("code")}
            className={`px-4 py-2 font-medium ${
              neonTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {neonTab === "preview" && (
          <div className="mt-3 bg-black">
            <AnimatedBgCard />
          </div>
        )}
        {neonTab === "code" && (
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
              {`// Your Neon Pulse theme code here`}
            </SyntaxHighlighter>
            <button
              onClick={() =>
                handleCopy(`// Your Neon Pulse theme code here`, "neon-code")
              }
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "neon-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Cotton Bloom Section */}
        <h2 className="text-xl font-bold mt-4">Theme : Cotton Bloom</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault card-CottonBloom
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault card-CottonBloom", "cotton-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "cotton-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setCottonTab("preview")}
            className={`px-4 py-2 font-medium ${
              cottonTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setCottonTab("code")}
            className={`px-4 py-2 font-medium ${
              cottonTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {cottonTab === "preview" && (
          <div className="mt-3 bg-black">
            <LightThemeCard />
          </div>
        )}
        {cottonTab === "code" && (
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
              {`// Your Cotton Bloom theme code here`}
            </SyntaxHighlighter>
            <button
              onClick={() =>
                handleCopy(
                  `// Your Cotton Bloom theme code here`,
                  "cotton-code"
                )
              }
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "cotton-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
