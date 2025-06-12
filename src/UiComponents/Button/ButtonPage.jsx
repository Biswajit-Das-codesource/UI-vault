import React, { useState } from "react";
import { Clipboard, ClipboardCheck, Copy } from "lucide-react";
import ObsidianButton from "./BlackButton";
import AuroraPinkButton from "./BlackButton";
import FrostWhiteButton from "./Whitebutton";
import NeonPulseButton from "./GradientNeonButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

function ButtonPage() {
  const [tab, setTab] = useState("preview");
  const [auroraTab, setAuroraTab] = useState("preview");
  const [frostTab, setFrostTab] = useState("preview");
  const [neonTab, setNeonTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const obsidianCode = `import React from "react";
function ObsidianButton() {
  return (
    <button className="bg-black text-white px-4 py-2 rounded">
      Obsidian Button
    </button>
  );
}
export default ObsidianButton;`;

  const auroraCode = `import React from "react";
function AuroraPinkButton() {
  return (
    <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded">
      Aurora Pink Button
    </button>
  );
}
export default AuroraPinkButton;`;

  const frostCode = `import React from "react";
function FrostWhiteButton() {
  return (
    <button className="bg-white text-black px-4 py-2 rounded border border-gray-300">
      Frost White Button
    </button>
  );
}
export default FrostWhiteButton;`;

  const neonCode = `import React from "react";
function NeonPulseButton() {
  return (
    <button className="bg-black text-pink-400 px-4 py-2 rounded shadow-[0_0_10px_2px_rgba(236,72,153,0.7)]">
      Neon Pulse Button
    </button>
  );
}
export default NeonPulseButton;`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Button</h1>
        <p className="text-gray-400 mt-1">
          Displays a callout for user attention.
        </p>

        {/* Obsidian Button Section */}
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
            className="geist-mono overflow-x-auto text-sm"
            style={{ letterSpacing: "1px" }}
          >
            <span className="text-cyan-400">npx</span> ui-vault button-obsidian
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault button-obsidian", "obsidian-cli")
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
            <ObsidianButton />
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
              {obsidianCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(obsidianCode, "obsidian-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "obsidian-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Aurora Pink Button Section */}
        <h2 className="text-xl font-bold mt-6">Theme : Aurora Pink</h2>
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
            button-aurora-pink
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault button-aurora-pink", "aurora-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "aurora-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setAuroraTab("preview")}
            className={`px-4 py-2 font-medium ${
              auroraTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setAuroraTab("code")}
            className={`px-4 py-2 font-medium ${
              auroraTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {auroraTab === "preview" && (
          <div className="mt-3 bg-black">
            <AuroraPinkButton />
          </div>
        )}
        {auroraTab === "code" && (
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
              {auroraCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(auroraCode, "aurora-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "aurora-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Frost White Button Section */}
        <h2 className="text-xl font-bold mt-6">Theme : Frost White</h2>
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
            button-frost-white
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault button-frost-white", "frost-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "frost-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setFrostTab("preview")}
            className={`px-4 py-2 font-medium ${
              frostTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setFrostTab("code")}
            className={`px-4 py-2 font-medium ${
              frostTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {frostTab === "preview" && (
          <div className="mt-3 bg-black">
            <FrostWhiteButton />
          </div>
        )}
        {frostTab === "code" && (
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
              {frostCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(frostCode, "frost-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "frost-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Neon Pulse Button Section */}
        <h2 className="text-xl font-bold mt-6">Theme : Neon Pulse</h2>
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
            button-neon-pulse
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault button-neon-pulse", "neon-cli")
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
            <NeonPulseButton />
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
              {neonCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(neonCode, "neon-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "neon-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ButtonPage;
