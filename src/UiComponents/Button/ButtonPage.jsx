import React, { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import BlackButton from "./BlackButton";
import GradientPink from "./BlackButton";
import Whitebutton from "./Whitebutton";
import GradientNeonButton from "./GradientBlack";
import Black2button from "./GradientNeonButton";
import PremiumGlowButton from "./GradientNeonButton";
function ButtonPage() {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState("preview");
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Button</h1>
        <p className="text-gray-400 mt-1">
          Displays a callout for user attention.
        </p>

        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
        <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

        <div class="flex gap-3 mb-5">
          <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>
        <div className="flex items-center bg-neutral-900 p-4 rounded-lg">
          <code className="flex-grow  text-sm font-medium">
            npx ui-vault Button
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault alert");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        {/* Tabs */}
        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>

        <GradientPink />

        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
        <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

        <div class="flex gap-3 mb-5">
          <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>
        <div className="flex items-center bg-neutral-900 p-4 rounded-lg">
          <code className="flex-grow  text-sm font-medium">
            npx ui-vault alert
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault alert");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        {/* Tabs */}
        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>
        <Whitebutton />
        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
        <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

        <div class="flex gap-3 mb-5">
          <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>
        <div className="flex items-center bg-neutral-900 p-4 rounded-lg">
          <code className="flex-grow  text-sm font-medium">
            npx ui-vault alert
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault alert");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        {/* Tabs */}
        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>
        <GradientNeonButton />
        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
        <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

        <div class="flex gap-3 mb-5">
          <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>
        <div className="flex items-center bg-neutral-900 p-4 rounded-lg">
          <code className="flex-grow  text-sm font-medium">
            npx ui-vault alert
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault alert");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
        {/* Tabs */}
        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>
        <PremiumGlowButton />
      </div>
    </div>
  );
}

export default ButtonPage;
