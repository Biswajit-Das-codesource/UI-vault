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
              className={`font-semibold ${
                alert.type === "error" ? "text-red-500" : ""
              }`}
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
