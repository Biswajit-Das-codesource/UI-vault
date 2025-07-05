import React from "react";
import { toast, Toaster } from "sonner";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Reusable code block with copy button
const CopyBlock = ({ code }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="relative bg-[#1a1a1a] mt-5  rounded-3xl text-base font-mono">
      <SyntaxHighlighter
        language="bash"
        style={dracula}
        customStyle={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "15px",
          background: "#1a1a1a",
          padding: "1rem",
          borderRadius: "0.75rem",
          lineHeight: "1.7",
        }}
        className="text-sm"
      >
        {code}
      </SyntaxHighlighter>

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <Toaster richColors position="top-right" />
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Install Tailwind CSS</h1>
        <p className="text-gray-400 mb-10">
          Full setup with Vite plugin and configuration.
        </p>

        <div className="border-l border-blue-300 pl-6 space-y-10">
          {/* Step 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Install Tailwind and Plugin</h2>
            <CopyBlock code={`npm install tailwindcss @tailwindcss/vite`} />
          </section>

          {/* Step 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Use Tailwind in HTML</h2>
            <p className="text-gray-400">
              Link compiled CSS in your <code>&lt;head&gt;</code>:
            </p>
            <CopyBlock
              code={`<!doctype html>
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

        {/* 🔹 Next Button */}
        <div className="flex justify-end mt-10">
          <button
            onClick={() => navigate("/components/docs/install-uivault")}
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
