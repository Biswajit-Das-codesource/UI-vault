import React, { useState } from "react";
import PaymentCard from "../Pricing/PaymentCard";
import AnimatedPaymentcard from "./PaymentCard";
import { Clipboard, ClipboardCheck } from "lucide-react";
import MastercardInputCard from "./Neaonpaymentcard";
function PaymentcardPage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Card</h1>
        <p className="text-gray-400 mt-1">
          A card is a flexible and extensible content container. It includes
          options for headers and footers, a wide variety of content, contextual
          background colors, and powerful display options.
        </p>

        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
        <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

        <div class="flex gap-3 mb-5">
          <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>
        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow  text-sm font-medium">
            npx ui-vault card-Obsidian
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

        <AnimatedPaymentcard />
        <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
        <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
        <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

        <div class="flex gap-3 mb-5">
          <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
            npm
          </button>
        </div>
        <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-4">
          <code className="flex-grow  text-sm font-medium">
            npx ui-vault card-Obsidian
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

        <MastercardInputCard />
      </div>
    </div>
  );
}

export default PaymentcardPage;
