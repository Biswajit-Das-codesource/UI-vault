import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { Copy } from "lucide-react";

// 🎨 Custom color rendering
const getStyledLine = (line) => {
  return (
    <div>
      {line.split(" ").map((word, i) => {
        if (word.startsWith("✔"))
          return (
            <span key={i} className="text-green-400 geist-mono">
              {word}{" "}
            </span>
          );
        if (word === "npx")
          return (
            <span key={i} className="text-yellow-400 geist-mono">
              {word}{" "}
            </span>
          );
        if (["init", "add", "choose"].includes(word))
          return (
            <span key={i} className="text-cyan-400 geist-mono">
              {word}{" "}
            </span>
          );
        if (["Choose", "add", "format", "Components"].includes(word))
          return (
            <span key={i} className="text-cyan-400 geist-mono">
              {word}{" "}
            </span>
          );
        if (
          ["TSX", "JSX", "card", "src/UIvault", "Themes:"].includes(word)
        )
          return (
            <span key={i} className="text-green-400 geist-mono">
              {word}{" "}
            </span>
          );
        return (
          <span key={i} className="text-white geist-mono">
            {word}{" "}
          </span>
        );
      })}
    </div>
  );
};

// ✅ Copy block with toast support
const CopyBlockWithToast = ({ code }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="relative bg-[#1a1a1a] rounded-xl p-4 mt-2 overflow-x-auto font-mono text-sm leading-relaxed">
      <div className="geist-mono text-white text-[16px]">{getStyledLine(code)}</div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-sm bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md flex items-center gap-1"
      >
        <Copy size={14} />
        Copy
      </button>
    </div>
  );
};

// 💻 Multi-line styled block
const CodeBlock = ({ lines }) => (
  <pre className="bg-[#1a1a1a] text-white font-mono text-sm sm:text-base p-4 rounded-xl overflow-x-auto leading-relaxed">
    {lines.map((line, i) => (
      <div key={i}>{getStyledLine(line)}</div>
    ))}
  </pre>
);

// 📦 Main page component
const UIVaultInitGuide = () => {
  const navigate = useNavigate();

  const goToTailwindSetup = () => {
    navigate("/tailwind-setup");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        <Toaster richColors position="top-right" />

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">UI Vault CLI Setup</h1>
        <p className="text-gray-400 mb-10">
          Quickly set up themed React components using{" "}
          <code className="bg-white/10 px-1 py-[1px] rounded">npx ui-vault</code>
        </p>

        {/* Vertical Line Section */}
        <div className="border-l border-blue-300 pl-6 space-y-10">

          {/* Step 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Initialize CLI</h2>
            <CopyBlockWithToast code="npx ui-vault init" />
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2"> Choose Language Format</h2>
            <p className="text-gray-400 mb-2">Pick TypeScript or JavaScript:</p>
            <CodeBlock
              lines={[
                "? Choose your format:",
                "> TSX (TypeScript)",
                "  JSX (JavaScript)",
              ]}
            />
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Generated Output</h2>
            <CodeBlock
              lines={[
                "✔ Components generated in src/UIvault",
                "✔ Format: TSX",
                "✔ Themes: NeonPulse, Obsidian",
              ]}
            />
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-2"> Add More Components</h2>
            <p className="text-gray-400 mb-2">Install more anytime:</p>
            <CodeBlock lines={["npx ui-vault add card"]} />
            <p className="text-sm text-gray-500 mt-2">
              Replace <code>card</code> with any supported component name.
            </p>
          </section>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-12">
          <Link to="/components/lens">
            <button
              onClick={goToTailwindSetup}
              className="bg-gradient-to-r bg-black border border-white cursor-pointer text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:opacity-90 transition-all"
            >
            Download Components →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UIVaultInitGuide;
