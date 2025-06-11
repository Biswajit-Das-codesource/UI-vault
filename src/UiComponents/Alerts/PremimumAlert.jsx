import React from "react";
import { CheckCircle, Trash2, AlertCircle } from "lucide-react";

const alerts = [
  {
    type: "success",
    icon: <CheckCircle className="text-green-200 animate-pulse" size={28} />,
    title: "Success! Your changes have been saved",
    description: "This is an alert with icon, title and description.",
  },
  {
    type: "info",
    icon: <Trash2 className="text-indigo-200 animate-pulse" size={28} />,
    title: "This Alert has a title and an icon. No description.",
    description: null,
  },
  {
    type: "error",
    icon: <AlertCircle className="text-pink-200 animate-pulse" size={28} />,
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

const getShadow = (type) => {
  switch (type) {
    case "success":
      return "shadow-[0_0_10px_rgba(34,197,94,0.8)]";
    case "error":
      return "shadow-[0_0_10px_rgba(236,72,153,0.8)]";
    case "info":
    default:
      return "shadow-[0_0_10px_rgba(139,92,246,0.8)]";
  }
};

const PremimumAlert = () => {
  return (
    <div className="flex flex-col gap-6 bg-black min-h pb-10 font-sans p-10">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`
            flex items-start gap-4 p-6 rounded-2xl 
            border border-white/10 backdrop-blur-md
            text-white bg-black/30 
            ${getShadow(alert.type)}
            transition-all duration-300 ease-in-out
            hover:scale-[1.01] hover:shadow-xl hover:animate-bounce
          `}
        >
          <div className="pt-1">{alert.icon}</div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wide text-lg leading-snug">
              {alert.title}
            </span>
            {alert.subtext && (
              <p className="text-sm text-white/80 mt-1">{alert.subtext}</p>
            )}
            {alert.description && (
              <div className="mt-2 text-sm text-white/90">
                {alert.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PremimumAlert;
