import React, { useState } from "react";
import { Clipboard, ClipboardCheck, Copy } from "lucide-react";
import FeedbackCard from "./Feedbackcard";
import GradientFeedbackcard from "./GradientFeedbackpage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";
import FeedbackCardProps from "./FeedbackCardProps";

function FeedbackPage() {
  const [obsidianTab, setObsidianTab] = useState("preview");
  const [auroraTab, setAuroraTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const obsidianCode = `import React from "react";
function FeedbackCard() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
      <h1 className="text-purple-400">Obsidian Feedback</h1>
      <p>Thank you for your feedback!</p>
    </div>
  );
}
export default FeedbackCard;`;

  const auroraCode = `import React from "react";
function GradientFeedbackcard() {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white p-6 rounded-xl shadow-xl">
      <h1 className="font-bold">Aurora Gradient Feedback</h1>
      <p>We appreciate your thoughts!</p>
    </div>
  );
}
export default GradientFeedbackcard;`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Feedback Card</h1>
        <p className="text-gray-400 mt-1">
          Displays a callout for user attention.
        </p>

        {/* Obsidian Feedback Section */}
        <h2 className="text-xl font-bold mt-6">Theme : Obsidian Feedback</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault feedback-obsidian
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault feedback-obsidian", "obsidian-cli")}
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
            <FeedbackCard />
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

        {/* Aurora Gradient Feedback Section */}
        <h2 className="text-xl font-bold mt-6">Theme : Aurora Gradient Feedback</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault feedback-aurora-gradient
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault feedback-aurora-gradient", "aurora-cli")}
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
            <GradientFeedbackcard />
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
        <FeedbackCardProps/>
      </div>
    </div>
  );
}

export default FeedbackPage;
