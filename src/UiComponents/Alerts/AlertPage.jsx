import React, { useState } from "react";
import GradientAlert from "./GradientAlert";
import {
  AlertCircle,
  CheckCircle,
  Clipboard,
  ClipboardCheck,
  Trash2,
} from "lucide-react";
import PremimumAlert from "./PremimumAlert";
import Alert from "./Alertblack";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

function AlertPage() {
  const [tab, setTab] = useState("preview");
  const [premiumTab, setPremiumTab] = useState("preview");
  const [gradientTab, setGradientTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const obsidianCodeString = `
import React from "react";
import { CheckCircle, Trash2, AlertCircle } from "lucide-react";

const alerts = [
  {
    type: "success",
    icon: <CheckCircle className="text-green-500" size={24} />,
    title: "Success! Your changes have been saved",
    description: "This is an alert with icon, title and description.",
  },
  {
    type: "info",
    icon: <Trash2 className="text-white" size={24} />,
    title: "This Alert has a title and an icon. No description.",
    description: null,
  },
  {
    type: "error",
    icon: <AlertCircle className="text-red-500" size={24} />,
    title: "Unable to process your payment.",
    description: (
      <ul className="list-disc list-inside mt-1 text-sm space-y-1 text-white">
        <li>Check your card details</li>
        <li>Ensure sufficient funds</li>
        <li>Verify billing address</li>
      </ul>
    ),
    subtext: "Please verify your billing information and try again.",
  },
];

const Alert = () => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-black min-h-screen">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 border border-neutral-800 rounded-lg bg-neutral-900 text-white"
        >
          <div>{alert.icon}</div>
          <div className="flex flex-col">
            <span
              className={\`font-semibold \${alert.type === "error" ? "text-red-500" : ""}\`}
            >
              {alert.title}
            </span>
            {alert.subtext && (
              <p className="text-sm text-white mt-1">{alert.subtext}</p>
            )}
            {alert.description && <div>{alert.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alert;
`.trim();

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Alert</h1>
        <p className="text-gray-400 mt-1">
          Displays a callout for user attention.
        </p>

        {/* Obsidian Alert Section */}
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
            <span className="text-cyan-400">npx</span> ui-vault alert
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault alert", "obsidian-cli")}
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
            <Alert />
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
              {obsidianCodeString}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(obsidianCodeString, "obsidian-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "obsidian-code" ? "Copied!" : <Clipboard size={16} />}
            </button>
          </div>
        )}

        {/* Premium Neon Section */}
        <h2 className="text-xl font-bold mt-4">Theme : Premimum Neon</h2>
        <button
          className="
          px-4 py-2 mt-3 rounded-full
          text-white font-semibold tracking-wide
          bg-black bg-opacity-60
          backdrop-blur-md
          border border-white/10
          shadow-[0_0_40px_rgba(168,85,247,0.5)]
          hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]
          transition-all duration-300 ease-in-out
        "
        >
          Premium
        </button>

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
            <span className="text-cyan-400">npx</span> ui-vault alert
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault alert", "premium-cli")}
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "premium-cli" ? (
              <ClipboardCheck size={18} />
            ) : (
              <Clipboard size={18} />
            )}
          </button>
        </div>
        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setPremiumTab("preview")}
            className={`px-4 py-2 font-medium ${
              premiumTab === "preview"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setPremiumTab("code")}
            className={`px-4 py-2 font-medium ${
              premiumTab === "code"
                ? "text-white border-b-2 border-white"
                : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>
        {premiumTab === "preview" && (
          <div className="mt-3 bg-black">
            <PremimumAlert />
          </div>
        )}
        {premiumTab === "code" && (
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
              {obsidianCodeString}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(obsidianCodeString, "premium-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "premium-code" ? "Copied!" : <Clipboard size={16} />}
            </button>
          </div>
        )}

        {/* Gradient Alert Section */}
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
            <span className="text-cyan-400">npx</span> ui-vault alert
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault alert", "gradient-cli")}
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
            <GradientAlert />
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
              {obsidianCodeString}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(obsidianCodeString, "gradient-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "gradient-code" ? "Copied!" : <Clipboard size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlertPage;
