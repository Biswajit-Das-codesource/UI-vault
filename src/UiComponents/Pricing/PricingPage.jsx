import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import SubscriptionCard from "./SubscriptionCard";
import PaymentCard from "./PaymentCard";
import GradientPaymentCard from "./GradientPaymentCard";
import AuroraPricingFlipCards from "./Flipcard";

function PricingPage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-gray-400 mt-1">
          A pricing section helps communicate different tiers, features, and
          options of your product in a visually distinct and appealing way.
        </p>

        {/* Theme 1 */}
        <h2 className="text-xl font-bold mt-6">Theme : Obsidian</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault pricing-Obsidian
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault pricing-Obsidian");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>

       <SubscriptionCard />

        {/*2nd Theme*/}

        <h2 className="text-xl font-bold mt-6">Theme : Neon Pulse</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault pricing-NeonPulse
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault pricing-NeonPulse");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>

        <PaymentCard/>
        {/* 3rd theme */}

        <h2 className="text-xl font-bold mt-6">Theme : HyperGlow Transfer</h2>
        <h1 className="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 className="text-lg text-gray-400 mb-4">CLI</h2>

        <div className="flex gap-3 mb-5">
          <button className="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>

        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow text-sm font-medium">
            npx ui-vault pricing-HyperGlowTransfer
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("npx ui-vault pricing-HyperGlowTransfer");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-400 hover:text-white ml-2"
          >
            {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
          </button>
        </div>

        <div className="mt-6 flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
          <button
            onClick={() => setTab("preview")}
            className={`${
              tab === "preview" ? "text-white font-medium" : "text-gray-500"
            }`}
          >
            Preview
          </button>
        </div>
        <GradientPaymentCard/>
        <AuroraPricingFlipCards/>

      </div>
    </div>
  );
}

export default PricingPage;
