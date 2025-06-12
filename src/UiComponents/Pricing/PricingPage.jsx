import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import SubscriptionCard from "./SubscriptionCard";
import PaymentCard from "./PaymentCard";
import GradientPaymentCard from "./GradientPaymentCard";
import AuroraPricingFlipCards from "./Flipcard";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

function PricingPage() {
  const [obsidianTab, setObsidianTab] = useState("preview");
  const [neonTab, setNeonTab] = useState("preview");
  const [hyperTab, setHyperTab] = useState("preview");
  const [supportTab, setSupportTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const obsidianCode = `import React from "react";
function SubscriptionCard() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl">
      <h1 className="text-purple-400">Obsidian Pricing</h1>
    </div>
  );
}
export default SubscriptionCard;`;

  const neonCode = `import React from "react";
function GradientPaymentCard() {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-xl">
      <h1 className="text-pink-200">Neon Pulse Pricing</h1>
    </div>
  );
}
export default GradientPaymentCard;`;

  const hyperCode = `import React from "react";
function PaymentCard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-4 rounded-xl">
      <h1 className="text-green-200">HyperGlow Pricing</h1>
    </div>
  );
}
export default PaymentCard;`;

  const supportCode = `import React from "react";
function AuroraPricingFlipCards() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white p-4 rounded-xl">
      <h1 className="text-yellow-200">SupportDev Pricing</h1>
    </div>
  );
}
export default AuroraPricingFlipCards;`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-gray-400 mt-1">
          A pricing section helps communicate different tiers, features, and
          options of your product in a visually distinct and appealing way.
        </p>

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
            className="geist-mono overflow-x-auto text-sm"
            style={{ letterSpacing: "1px" }}
          >
            <span className="text-cyan-400">npx</span> ui-vault pricing-obsidian
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault pricing-obsidian", "obsidian-cli")
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
            <SubscriptionCard />
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

        {/* Neon Pulse Section */}
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
            <span className="text-cyan-400">npx</span> ui-vault pricing-neon-pulse
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault pricing-neon-pulse", "neon-cli")
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
            <GradientPaymentCard />
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

        {/* HyperGlow Section */}
        <h2 className="text-xl font-bold mt-6">Theme : HyperGlow</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault pricing-hyperglow
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault pricing-hyperglow", "hyper-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "hyper-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setHyperTab("preview")}
            className={`px-4 py-2 font-medium ${
              hyperTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setHyperTab("code")}
            className={`px-4 py-2 font-medium ${
              hyperTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {hyperTab === "preview" && (
          <div className="mt-3 bg-black">
            <PaymentCard />
          </div>
        )}
        {hyperTab === "code" && (
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
              {hyperCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(hyperCode, "hyper-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "hyper-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}

        {/* SupportDev Section */}
        <h2 className="text-xl font-bold mt-6">Theme : SupportDev</h2>
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
            <span className="text-cyan-400">npx</span> ui-vault pricing-supportdev
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault pricing-supportdev", "support-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "support-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setSupportTab("preview")}
            className={`px-4 py-2 font-medium ${
              supportTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setSupportTab("code")}
            className={`px-4 py-2 font-medium ${
              supportTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {supportTab === "preview" && (
          <div className="mt-3 bg-black">
            <AuroraPricingFlipCards />
          </div>
        )}
        {supportTab === "code" && (
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
              {supportCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(supportCode, "support-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "support-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PricingPage;
