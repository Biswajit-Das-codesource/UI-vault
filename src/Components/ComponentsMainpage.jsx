import React, { useState } from "react";
import {
  CheckCircle,
  Trash2,
  AlertCircle,
  Clipboard,
  ClipboardCheck,
} from "lucide-react";
import Navbar from "./Navbar";
import Alert from "../UiComponents/Alerts/Alertblack";
import GradientAlert from "../UiComponents/Alerts/GradientAlert";
import PremimumAlert from "../UiComponents/Alerts/PremimumAlert";
import AlertPage from "../UiComponents/Alerts/AlertPage";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
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

const ComponentMainpage = () => {
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useState("preview");
  // eslint-disable-next-line no-unused-vars
  const [copied, setCopied] = useState(false);

  // eslint-disable-next-line no-unused-vars
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
      <Navbar />
      <div className="h-[88.5vh] flex bg-black text-white overflow-hidden">
        {/* Sidebar */}

        <aside className="w-60 p-6 border-r border-gray-800 hidden md:block flex-shrink-0 h-full overflow-y-auto scrollbar-hide">
          <h2 className="text-gray-400 text-sm font-semibold mb-4">
            Components
          </h2>
          <ul className="space-y-2 pr-2">
            {[
              "Alerts",
              "Card",
              "Profilecard",
              "TweetCard",
              "Pricing",
              "Button",
              "Paymentcard",
              "Calendar",
              "Carousel",
              "Barchart",
              "AIchat",
              "Signup",
              "Feedback",
              "Rating",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/components/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`block px-2 py-2 rounded text-sm font-semibold ${
                    item === "Alert"
                      ? "bg-gray-700 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-scroll  p-6 scrollbar-hide">
          <Outlet />
        </main>

        {/* CTA Section */}
        <div className="hidden md:block w-72 p-6 bg-neutral-900 border-l border-gray-800 flex-shrink-0 h-full">
          <h2 className="text-white font-semibold">
            Deploy your shadcn/ui app on Vercel
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Trusted by OpenAI, Sonos, Chick-fil-A, and more.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Vercel provides tools and infrastructure to deploy apps and features
            at scale.
          </p>
          <button className="mt-4 px-4 py-2 rounded bg-white text-black font-semibold">
            Deploy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentMainpage;
