import React, { useState } from "react";
import { Clipboard, ClipboardCheck, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "./Dialog"; // adjust the path as needed

function DialoguePage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard! Paste it where you need.");
    setTimeout(() => setCopied(""), 2000);
  };

  const dialogUsageCode = `import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/Dialog'; // adjust path if needed

export default function ExampleDialog() {
  return (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 transition">
        Open Dialog
      </DialogTrigger>
      <DialogContent from="top">
        <DialogHeader>
          <DialogTitle>Custom Dialog</DialogTitle>
          <p className="text-gray-300 text-sm">This is a custom animated Dialog using Radix UI and Framer Motion.</p>
        </DialogHeader>
        <DialogFooter>
          <button className="px-3 py-1 bg-green-600 text-white rounded">Confirm</button>
          <button className="px-3 py-1 bg-gray-600 text-white rounded">Cancel</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

  return (
    <div>
      <Toaster richColors position="top-center" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Custom Dialog</h1>
        <p className="text-gray-400 mt-1">
          Animated Dialog component using Radix UI and Framer Motion.
        </p>

        <h2 className="text-2xl font-bold mb-2 mt-4">Installation</h2>
        <div className="flex border-b border-white/10 mt-4">
          <button className="px-4 py-2 text-white font-medium border-b-2 border-white">
            CLI
          </button>
        </div>
        <div className="px-2 pt-4 pb-2 text-white">
          <p className="font-medium">Run the following command</p>
        </div>
        <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
          <code className="geist-mono text-sm">
            npx ui-vault add dialog
          </code>
          <button
            onClick={() => handleCopy("npx ui-vault add dialog", "dialog-cli")}
            className="ml-4 text-white transition"
            title="Copy to clipboard"
          >
            {copied === "dialog-cli" ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
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
          <div className="mt-5 p-5 bg-black rounded-2xl flex justify-center">
            <Dialog>
              <DialogTrigger className="px-4 py-2 bg-white font-bold text-black rounded hover:bg-gray-800 hover:text-white transition">
                Open Dialog
              </DialogTrigger>
              <DialogContent from="top">
                <DialogHeader>
                  <DialogTitle>Custom Dialog</DialogTitle>
                  <p className="text-gray-300 text-sm mt-1">
                    This is a custom animated Dialog using Radix UI and Framer Motion.
                  </p>
                </DialogHeader>
                <DialogFooter className="mt-4">
                  <button className="px-3 py-1 bg-white text-black rounded">Confirm</button>
                  <button className="px-3 py-1 bg-gray-600 text-white rounded">Cancel</button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
              className="text-sm geist-mono"
            >
              {dialogUsageCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(dialogUsageCode, "dialog-code")}
              className="absolute top-4 right-4 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-200 flex items-center gap-1"
            >
              {copied === "dialog-code" ? "Copied!" : <Copy size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DialoguePage;
