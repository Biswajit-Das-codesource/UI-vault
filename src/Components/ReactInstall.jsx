import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const ReactInstall = () => {
  const navigate = useNavigate();

  const goToTailwindSetup = () => {
    navigate("/tailwind-setup");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Install React.js</h1>
        <p className="text-gray-400 mb-10">
          Fast setup using the Vite build tool.
        </p>

        {/* Vertical Line Starts Here */}
        <div className="border-l border-blue-200 pl-6 space-y-8">

          {/* Create Project */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Create a project</h2>
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
              npm create vite@latest
            </SyntaxHighlighter>
          </div>

          {/* Prompts */}
          <div>
            <h2 className="text-xl font-semibold">
              On installation, you'll see the following prompts:
            </h2>
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
{`✔ Project name: » my-app
✔ Select a framework: » React
✔ Select a variant: » JavaScript / TypeScript`}
            </SyntaxHighlighter>
          </div>

          {/* Install Dependencies */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Install dependencies</h2>
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
{`cd my-app
npm install`}
            </SyntaxHighlighter>
          </div>

          {/* Start App */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Start the app</h2>
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
              npm run dev
            </SyntaxHighlighter>
          </div>
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

export default ReactInstall;
