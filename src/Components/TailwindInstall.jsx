import React from "react";
import { toast, Toaster } from "sonner";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this line

const CopyBlock = ({ code, raw }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(raw || "");
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="relative">
      <pre className="bg-[#1e1e1e] text-sm p-4 rounded-md overflow-auto pr-12">
        <code className="geist-mono whitespace-pre-wrap">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md flex items-center gap-1"
      >
        <Copy size={14} />
        Copy
      </button>
    </div>
  );
};

const TailwindInstall = () => {
  const navigate = useNavigate(); // hook for routing

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <Toaster richColors position="top-right" />
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Install Tailwind CSS</h1>
        <p className="text-gray-400 mb-10">
          Full setup with Vite plugin and configuration.
        </p>

        <div className="border-l border-blue-300 pl-6 space-y-10">
          {/* Steps here... (same as before) */}

          {/* Step 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Install Tailwind and Plugin</h2>
            <CopyBlock
              code={
                <>
                  <span className="text-blue-400">npm</span>{" "}
                  <span className="text-green-400">install tailwindcss @tailwindcss/vite</span>
                </>
              }
              raw={`npm install tailwindcss @tailwindcss/vite`}
            />
          </section>

          {/* ... All other steps same as your code above */}

          {/* Step 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Use Tailwind in HTML</h2>
            <p className="text-gray-400 mb-2">Link compiled CSS in your <code>&lt;head&gt;</code>:</p>
            <CopyBlock
              code={
                <span className="text-green-400 whitespace-pre-wrap">
                  {`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>`}
                </span>
              }
              raw={`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>`}
            />
          </section>
        </div>

        {/* 👇 Next Button */}
        <div className="flex justify-end mt-10">
          <button
            onClick={() => navigate("/components/docs/install-uivault")} // your next route
            className="bg-gradient-to-r border border-white hover:opacity-90 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-md"
          >
            Next: Setup UI Vault →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindInstall;
