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

const alerts = [
  {
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    title: "Success! Your changes have been saved",
    description: "This is an alert with icon, title and description.",
    bg: "bg-neutral-900",
    text: "text-white",
  },
  {
    icon: <Trash2 className="text-white w-5 h-5" />,
    title: "This Alert has a title and an icon. No description.",
    bg: "bg-neutral-900",
    text: "text-white",
  },
  {
    icon: <AlertCircle className="text-red-500 w-5 h-5" />,
    title: "Unable to process your payment.",
    description: (
      <>
        <p>Please verify your billing information and try again.</p>
        <ul className="list-disc ml-5 mt-1 text-sm">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </>
    ),
    bg: "bg-neutral-900",
    text: "text-red-500",
  },
];

function AlertPage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const codeString = `
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
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Alert</h1>
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

        {/* Content */}
        <Alert />
      </div>

      {/* second one  */}

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

      <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
      <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

      <div class="flex gap-3 mb-5">
        <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
          npm
        </button>
      </div>
      <div className="flex items-center bg-neutral-900 p-4 rounded-lg mb-5">
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

      <PremimumAlert />

      {/* third option start here  */}

      <h2 className="text-xl font-bold mt-4">Theme : Obsidian</h2>
      <h1 class="text-2xl font-bold mb-2 mt-4">Installation</h1>
      <h2 class="text-lg text-gray-400 mb-4">CLI</h2>

      <div class="flex gap-3 mb-5">
        <button class="bg-neutral-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
          npm
        </button>
      </div>
      <div className="flex items-center bg-neutral-900 p-4 mb-5 rounded-lg">
        <code className="flex-grow  text-sm font-medium ">
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
      <GradientAlert />
    </div>
  );
}

export default AlertPage;
