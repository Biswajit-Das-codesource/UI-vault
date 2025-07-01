import React from "react";
import { toast, Toaster } from "sonner";
import { Copy } from "lucide-react";

// ✅ Reusable CopyBlock Component
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

// ✅ Main Component
const UIVaultInitGuide = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <Toaster richColors position="top-right" />
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">UI Vault CLI Setup</h1>
        <p className="text-gray-400 mb-10">
          Quickly set up themed React components using <code>npx ui-vault</code>
        </p>

        <div className="border-l border-blue-300 pl-6 space-y-10">

          {/* Step 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Initialize CLI</h2>
            <CopyBlock
              code={
                <>
                  <span className="text-blue-400">npx</span>{" "}
                  <span className="text-green-400">ui-vault init</span>
                </>
              }
              raw={`npx ui-vault init`}
            />
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Choose Language Format</h2>
            <p className="text-gray-400 mb-2">Pick TypeScript or JavaScript:</p>
            <CopyBlock
              code={
                <span className="text-green-400 whitespace-pre-wrap">
                  {`? Choose your format:\n> TSX (TypeScript)\n  JSX (JavaScript)`}
                </span>
              }
              raw={`? Choose your format:\n> TSX (TypeScript)\n  JSX (JavaScript)`}
            />
          </section>

          {/* Step 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Generated Output</h2>
            <CopyBlock
              code={
                <span className="text-green-400 whitespace-pre-wrap">
                  {`✔ Components generated in src/UIvault\n✔ Format: TSX\n`}
                </span>
              }
              raw={`✔ Components generated in src/UIvault\n✔ Format: TSX\n✔ Themes: NeonPulse, Obsidian`}
            />
          </section>

          {/* Step 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Add Components</h2>
            <p className="text-gray-400 mb-2">You can install more anytime:</p>
            <CopyBlock
              code={
                <>
                  <span className="text-blue-400">npx</span>{" "}
                  <span className="text-green-400">ui-vault add card</span>
                </>
              }
              raw={`npx ui-vault add card`}
            />
            <p className="text-sm text-gray-500 mt-2">
              Replace <code>card</code> with any supported component name.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default UIVaultInitGuide;
