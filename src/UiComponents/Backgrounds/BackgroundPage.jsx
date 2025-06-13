import React, { useState } from "react";
import { Clipboard, ClipboardCheck, Copy } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";
import CyberGridBackground from "./CyberGridBackground";
import BeamsBackground from "./BeamsBackground";

function BackgroundPage() {
const [auroraTab, setAuroraTab] = useState("preview");
const [cyberTab, setCyberTab] = useState("preview");
const [copied, setCopied] = useState("");

const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
};

const auroraCode = `import React from "react";
function BeamsBackground() {
return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-screen">
    {/*Beams Background*/}
    </div>
);
}
export default BeamsBackground;`;

const cyberCode = `import React from "react";
function CyberGridBackground() {
return (
    <div className="bg-black text-neon-green h-screen">
    {/* Cyber Grid */}
    </div>
);
}
export default CyberGridBackground;`;

return (
    <div>
    <Toaster richColors position="top-center" />
    <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Backgrounds</h1>

        {/* Aurora Lights */}
        <h2 className="text-xl font-bold mt-6">Theme : Aurora Lights</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>

        {/* CLI Label */}
        <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
            CLI
        </button>
        </div>

        <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
        </div>
        <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
        <code className="geist-mono text-sm overflow-x-auto" style={{ letterSpacing: "1px" }}>
            <span className="text-cyan-400">npx</span> ui-vault background-BeamsBackground
        </code>
        <button
            onClick={() => handleCopy("npx ui-vault background-BeamsBackground", "aurora-cli")}
            className="ml-4 text-white transition"
            title="Copy to clipboard"
        >
            {copied === "aurora-cli" ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
        </button>
        </div>

        {/* Tabs */}
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
        <div className="mt-3 border-2 border-gray-500 bg-black rounded-xl">
            <BeamsBackground/>
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

        {/* Cyber Night */}
        <h2 className="text-xl font-bold mt-6">Theme : Cyber Grid</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>

        {/* CLI Label */}
        <div className="flex border-b border-white/10 mt-7">
        <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
            CLI
        </button>
        </div>

        <div className="px-2 pt-4 pb-2 text-white">
        <p className="font-medium">Run the following command</p>
        </div>
        <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
        <code className="geist-mono text-sm overflow-x-auto" style={{ letterSpacing: "1px" }}>
            <span className="text-cyan-400">npx</span> ui-vault background-CyberGrid
        </code>
        <button
            onClick={() => handleCopy("npx ui-vault background-CyberGrid", "cyber-cli")}
            className="ml-4 text-white transition"
            title="Copy to clipboard"
        >
            {copied === "cyber-cli" ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
        </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mt-5">
        <button
            onClick={() => setCyberTab("preview")}
            className={`px-4 py-2 font-medium ${
            cyberTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
        >
            Preview
        </button>
        <button
            onClick={() => setCyberTab("code")}
            className={`px-4 py-2 font-medium ${
            cyberTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
        >
            Code
        </button>
        </div>

        {cyberTab === "preview" && (
        <div className="mt-3 border-2 border-gray-500 bg-black rounded-xl">
            <CyberGridBackground/>
        </div>
        )}

        {cyberTab === "code" && (
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
            {cyberCode}
            </SyntaxHighlighter>
            <button
            onClick={() => handleCopy(cyberCode, "cyber-code")}
            className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
            {copied === "cyber-code" ? "Copied!" : <Copy size={16} />}
            </button>
        </div>
        )}
    </div>
    </div>
);
}

export default BackgroundPage;
