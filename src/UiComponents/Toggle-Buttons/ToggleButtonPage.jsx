import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import { Copy } from "lucide-react";
import { toast, Toaster } from "sonner"; // ✅ include Toaster
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import BasicToggle from "./BasicToggle";
import GlassToggleBar from "./GlassToggleBar";
import LockOpenToggle from "./LockOpenToggle";

function ToggleButtonPage() {
  const [copied, setCopied] = useState("");
  const [tab1, setTab1] = useState("preview");
  const [tab2, setTab2] = useState("preview");
  const [tab3, setTab3] = useState("preview");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard!"); // ✅ this now works
    setTimeout(() => setCopied(""), 2000);
  };

  const toggleButtonCode1 = `import React from "react";

function BasicToggle() {
  return (
    <div>
      BasicToggle
    </div>
  );
}

export default BasicToggle;`;

  const toggleButtonCode2 = `import React from "react";

function GlassToggleBar() {
  return (
    <div>
      GlassToggleBar
    </div>
  );
}

export default GlassToggleBar;`;

  const toggleButtonCode3 = `import React from "react";

function LockOpenToggle() {
  return (
    <div>
      LockOpenToggle
    </div>
  );
}

export default LockOpenToggle;`;

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* ✅ Mount the Toaster for toast messages */}
      <Toaster position="top-center" richColors />

      <h1 className="text-4xl font-bold text-white">Toggle Buttons</h1>
      <p className="text-gray-300 mt-1 mb-6">
        Reusable dark-themed animated toggle buttons.
      </p>

      {/* Toggle Button 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold">Theme: Basic Toggle</h2>
        <h3 className="text-2xl font-bold mt-3">Installation</h3>

        <div className="flex border-b border-white/10 mt-4">
          <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
            CLI
          </button>
        </div>

        <div className="mt-4 bg-[#1a1a1a] text-green-400 px-5 py-4 text-sm rounded-2xl border border-gray-700 flex justify-between items-center">
          <code>
            <span className="text-cyan-400">npx</span> ui-vault add BasicToggle
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault add BasicToggle", "cli1")}
            className="ml-4 text-white"
            title="Copy to clipboard"
          >
            {copied === "cli1" ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setTab1("preview")}
            className={`px-4 py-2 font-medium ${
              tab1 === "preview" ? "text-white border-b-2 border-white" : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab1("code")}
            className={`px-4 py-2 font-medium ${
              tab1 === "code" ? "text-white border-b-2 border-white" : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>

        {tab1 === "preview" && (
          <div className="mt-4 bg-black p-6 rounded-xl">
            <BasicToggle />
          </div>
        )}

        {tab1 === "code" && (
          <div className="relative bg-[#1a1a1a] mt-5 p-4 rounded-3xl">
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
            >
              {toggleButtonCode1}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(toggleButtonCode1, "code1")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "code1" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </section>

      {/* Toggle Button 2 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold">Theme: GlassToggleBar</h2>
        <h3 className="text-2xl font-bold mt-3">Installation</h3>

        <div className="mt-4 bg-[#1a1a1a] text-green-400 px-5 py-4 text-sm rounded-2xl border border-gray-700 flex justify-between items-center">
          <code>
            <span className="text-cyan-400">npx</span> ui-vault add GlassToggleBar
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault add GlassToggleBar", "cli2")}
            className="ml-4 text-white"
            title="Copy to clipboard"
          >
            {copied === "cli2" ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setTab2("preview")}
            className={`px-4 py-2 font-medium ${
              tab2 === "preview" ? "text-white border-b-2 border-white" : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab2("code")}
            className={`px-4 py-2 font-medium ${
              tab2 === "code" ? "text-white border-b-2 border-white" : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>

        {tab2 === "preview" && (
          <div className="mt-4 bg-black p-6 rounded-xl">
            <GlassToggleBar />
          </div>
        )}

        {tab2 === "code" && (
          <div className="relative bg-[#1a1a1a] mt-5 p-4 rounded-3xl">
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
            >
              {toggleButtonCode2}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(toggleButtonCode2, "code2")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "code2" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </section>

      {/* Toggle Button 3 */}
      <section>
        <h2 className="text-xl font-bold">Theme: LockOpenToggle</h2>
        <h3 className="text-2xl font-bold mt-3">Installation</h3>

        <div className="mt-4 bg-[#1a1a1a] text-green-400 px-5 py-4 text-sm rounded-2xl border border-gray-700 flex justify-between items-center">
          <code>
            <span className="text-cyan-400">npx</span> ui-vault add LockOpenToggle
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault add LockOpenToggle", "cli3")}
            className="ml-4 text-white"
            title="Copy to clipboard"
          >
            {copied === "cli3" ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <div className="flex border-b border-white/10 mt-5">
          <button
            onClick={() => setTab3("preview")}
            className={`px-4 py-2 font-medium ${
              tab3 === "preview" ? "text-white border-b-2 border-white" : "text-white/50"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab3("code")}
            className={`px-4 py-2 font-medium ${
              tab3 === "code" ? "text-white border-b-2 border-white" : "text-white/50"
            }`}
          >
            Code
          </button>
        </div>

        {tab3 === "preview" && (
          <div className="mt-4 bg-black p-6 mb-8 rounded-xl">
            <LockOpenToggle />
          </div>
        )}

        {tab3 === "code" && (
          <div className="relative bg-[#1a1a1a] mt-5 p-4 rounded-3xl">
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
            >
              {toggleButtonCode3}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(toggleButtonCode3, "code3")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "code3" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default ToggleButtonPage;
