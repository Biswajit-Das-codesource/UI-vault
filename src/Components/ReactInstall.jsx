import React from "react";
import { Link, useNavigate } from "react-router-dom";

// 🎨 Simplified 4-color palette mapping
const getStyledLine = (line) => {
  const words = line.split(" ").map((word, i) => {
    if (word.startsWith("✔"))
      return (
        <span key={i} className="geist-mono text-green-400">
          {word}{" "}
        </span>
      );
    if (["npm", "cd"].includes(word))
      return (
        <span key={i} className="geist-mono text-yellow-400">
          {word}{" "}
        </span>
      );
    if (word.includes("vite") || word === "React" || word.includes("my-app"))
      return (
        <span key={i} className="geist-mono text-green-400">
          {word}{" "}
        </span>
      );
    if (
      ["install", "run", "dev", "JavaScript", "TypeScript"].includes(word)
    )
      return (
        <span key={i} className="text-cyan-400 geist-mono">
          {word}{" "}
        </span>
      );
    return (
      <span key={i} className="text-white geist-mono">
        {word}{" "}
      </span>
    );
  });

  return <div>{words}</div>;
};

// 💻 Code block component
const CodeBlock = ({ lines }) => (
  <pre className="bg-[#1a1a1a] text-white font-mono text-sm sm:text-base p-4 rounded-xl overflow-x-auto leading-relaxed">
    {lines.map((line, i) => (
      <div key={i}>{getStyledLine(line)}</div>
    ))}
  </pre>
);

// 📦 Main ReactInstall component
const ReactInstall = () => {
  const navigate = useNavigate();

  const goToTailwindSetup = () => {
    navigate("/tailwind-setup");
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Install React.js
        </h1>
        <p className="text-gray-400 mb-10">
          Fast setup using the Vite build tool.
        </p>

        <div className="border-l border-blue-200 pl-6 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Create a project</h2>
            <CodeBlock lines={["npm create vite@latest"]} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              On installation, you'll see the following prompts:
            </h2>
            <CodeBlock
              lines={[
                "✔ Project name: » my-app",
                "✔ Select a framework: » React",
                "✔ Select a variant: » JavaScript / TypeScript",
              ]}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Install dependencies</h2>
            <CodeBlock lines={["cd my-app", "npm install"]} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Start the app</h2>
            <CodeBlock lines={["npm run dev"]} />
          </div>
        </div>

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
