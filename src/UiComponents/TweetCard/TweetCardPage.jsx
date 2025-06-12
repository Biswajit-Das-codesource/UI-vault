import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import MirrorShineTweet from "./MirrorShineTweet";
import ModernTweetCard from "./ModernTweetCard";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

function TweetCardPage() {
  const [mirrorTab, setMirrorTab] = useState("preview");
  const [gradientTab, setGradientTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const MirrorShineCode = `import React from "react";

function MirrorShineTweet() {
  return (
    <div className="bg-black text-white p-4 rounded-xl">
      <h1 className="text-blue-400">Mirror Shine Tweet</h1>
    </div>
  );
}

export default MirrorShineTweet;`;

  const GradientCode = `import React from "react";

function ModernTweetCard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl">
      <h1 className="font-bold">Gradient Tweet Card</h1>
    </div>
  );
}

export default ModernTweetCard;`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Tweet Card</h1>
        <p className="text-gray-400 mt-1">
          Displays a card with tweet information, including user details and
          tweet content.
        </p>

        {/* MirrorShine Section */}
        <h2 className="text-xl font-bold mt-6">Theme : MirrorShine</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>

        <div className="flex border-b border-white/10 mt-7">
          <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
            CLI
          </button>
        </div>
        <div className="px-2 pt-4 pb-2 text-white">
          <p className="font-medium">Run the following command</p>
        </div>
        <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl">
          <code className="geist-mono overflow-x-auto text-sm" style={{letterSpacing:"1px"}}>
            <span className="text-cyan-400">npx</span> ui-vault
            tweetCard-MirrorShineTweet
          </code>
          <button
            onClick={() =>
              handleCopy(
                "npx ui-vault tweetCard-MirrorShineTweet",
                "mirror-cli"
              )
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "mirror-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setMirrorTab("preview")}
            className={`px-4 py-2 font-medium ${
              mirrorTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setMirrorTab("code")}
            className={`px-4 py-2 font-medium ${
              mirrorTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {mirrorTab === "preview" && (
          <div className="mt-3 bg-black">
            <MirrorShineTweet />
          </div>
        )}
        {mirrorTab === "code" && (
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
              {MirrorShineCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(MirrorShineCode, "mirror-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "mirror-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* Gradient Section */}
        <h2 className="text-xl font-bold mt-6">Theme : Gradient</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <div className="flex border-b border-white/10 mt-7">
          <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
            CLI
          </button>
        </div>
        <div className="px-2 pt-4 pb-2 text-white">
          <p className="font-medium">Run the following command</p>
        </div>
        <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl">
          <code className="geist-mono overflow-x-auto text-sm" style={{letterSpacing:"1px"}}>
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
            <ModernTweetCard />
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
              {GradientCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(GradientCode, "gradient-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "gradient-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TweetCardPage;
