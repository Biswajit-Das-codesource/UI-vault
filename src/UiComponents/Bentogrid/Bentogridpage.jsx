import React, { useState } from "react";
import { Clipboard, ClipboardCheck, Copy } from "lucide-react";
import BentoGrid from "./Bentogrid";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

function Bentogridpage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const bentoCode = `import './App.css'
import { Bentogrid } from './UIvault/bentogrid/Bentogrid';
function App() {
  return (
    <div>
      <Bentogrid/>
    </div>
  )
}
export default App;`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Bento Grid</h1>
        <p className="text-gray-400 mt-1">
          Flexible and beautiful bento/grid layouts for your UI.
        </p>

      
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
            <span className="text-cyan-400">npx</span> ui-vault add
            bentogrid 
          </code>
          <button
            onClick={() =>
              handleCopy("npx ui-vault add bentogrid", "bento-cli")
            }
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "bento-cli" ? (
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
            <BentoGrid />
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
              {bentoCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(bentoCode, "bento-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "bento-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bentogridpage;
