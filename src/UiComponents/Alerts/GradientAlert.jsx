import React from "react";
import { CheckCircle, Trash2, AlertCircle } from "lucide-react";

const alerts = [
  {
    type: "success",
    icon: <CheckCircle className="text-green-100" size={24} />,
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
    icon: <AlertCircle className="text-red-100" size={24} />,
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

const getGradient = (type) => {
  switch (type) {
    case "success":
      return "from-green-500 via-emerald-600 to-green-700";
    case "error":
      return "from-red-500 via-pink-600 to-red-700";
    case "info":
    default:
      return "from-slate-500 via-gray-600 to-slate-700";
  }
};

const GradientAlert = () => {
  return (
    <div className="flex flex-col gap-4 bg-black min-h">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`
            flex items-start gap-4 p-4 rounded-xl border border-gray-800 
            text-white transition-all duration-300 ease-in-out
            bg-gradient-to-r ${getGradient(alert.type)} 
            hover:scale-[1.02] hover:shadow-xl
          `}
        >
          <div>{alert.icon}</div>
          <div className="flex flex-col">
            <span
              className={`font-semibold text-white text-lg`}
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

export default GradientAlert;
