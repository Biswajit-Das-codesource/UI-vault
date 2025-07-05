import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const UIVaultInitGuide = () => {
  const navigate = useNavigate();

  const goToTailwindSetup = () => {
    navigate("/tailwind-setup");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">UI Vault CLI Setup</h1>
        <p className="text-gray-400 mb-10">
          Quickly set up themed React components using{" "}
          <code className="bg-white/10 px-1 py-[1px] rounded">npx ui-vault</code>
        </p>

        {/* Vertical Line Content */}
        <div className="border-l border-blue-300 pl-6 space-y-10">

          {/* Step 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1️⃣ Initialize CLI</h2>
            <SyntaxHighlighter
              language="bash"
              style={dracula}
              customStyle={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "15px",
                background: "#1e1e1e",
                padding: "1rem",
                borderRadius: "0.75rem",
                lineHeight: "1.7",
              }}
              className="text-sm"
            >
              npx ui-vault init
            </SyntaxHighlighter>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">2️⃣ Choose Language Format</h2>
            <p className="text-gray-400 mb-2">Pick TypeScript or JavaScript:</p>
            <SyntaxHighlighter
              language="bash"
              style={dracula}
              customStyle={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "15px",
                background: "#1e1e1e",
                padding: "1rem",
                borderRadius: "0.75rem",
                lineHeight: "1.7",
              }}
              className="text-sm"
            >
{`? Choose your format:
> TSX (TypeScript)
  JSX (JavaScript)`}
            </SyntaxHighlighter>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3️⃣ Generated Output</h2>
            <SyntaxHighlighter
              language="bash"
              style={dracula}
              customStyle={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "15px",
                background: "#1e1e1e",
                padding: "1rem",
                borderRadius: "0.75rem",
                lineHeight: "1.7",
              }}
              className="text-sm"
            >
{`✔ Components generated in src/UIvault
✔ Format: TSX
✔ Themes: NeonPulse, Obsidian`}
            </SyntaxHighlighter>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">4️⃣ Add More Components</h2>
            <p className="text-gray-400 mb-2">Install more anytime:</p>
            <SyntaxHighlighter
              language="bash"
              style={dracula}
              customStyle={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "15px",
                background: "#1e1e1e",
                padding: "1rem",
                borderRadius: "0.75rem",
                lineHeight: "1.7",
              }}
              className="text-sm"
            >
              npx ui-vault add card
            </SyntaxHighlighter>
            <p className="text-sm text-gray-500 mt-2">
              Replace <code>card</code> with any supported component name.
            </p>
          </section>
        </div>

        {/* 🔹 Next Button */}
        <div className="flex justify-end mt-12">
          <Link to="/components/docs/install-tailwindcss">
            <button
              onClick={goToTailwindSetup}
              className="bg-gradient-to-r bg-black border border-white cursor-pointer text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:opacity-90 transition-all"
            >
              Next: Setup Tailwind CSS →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UIVaultInitGuide;
