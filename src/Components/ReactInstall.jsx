import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollTop";

// 🎨 Syntax styling
const getStyledLine = (line) => {
  const words = line.split(" ").map((word, i) => {
    if (word.startsWith("✔"))
      return (
        <span key={i} className="geist-mono text-green-400 text-[20px]">
          {word}{" "}
        </span>
      );
    if (["npm", "cd"].includes(word))
      return (
        <span key={i} className="geist-mono text-yellow-400 text-[14.5px]">
          {word}{" "}
        </span>
      );
    if (word.includes("vite") || word === "React" || word.includes("my-app"))
      return (
        <span key={i} className="geist-mono text-green-400 text-[14.5px]">
          {word}{" "}
        </span>
      );
    if (
      ["install", "run", "dev", "JavaScript", "TypeScript"].includes(word)
    )
      return (
        <span key={i} className="text-cyan-400 geist-mono text-[14.5px]">
          {word}{" "}
        </span>
      );
    return (
      <span key={i} className="text-white geist-mono text-[14.5px]">
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

// 📦 Main Install Component
const ReactInstall = () => {
  const navigate = useNavigate();

  const goToTailwindSetup = () => {
    navigate("/tailwind-setup");
  };

  <ScrollToTop/>
  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Install React.js</h1>
        <p className="text-gray-400 mb-10">Fast setup using the Vite build tool.</p>
        
        <div className="border-l border-blue-200 pl-6 space-y-10">
          {/* Create Project */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Create a Project</h2>
            <CodeBlock lines={["npm create vite@latest"]} />
            <p className="text-sm text-gray-400 mt-2">
              This command starts the Vite project wizard. Vite is a super-fast bundler used to set up modern frontend apps.
            </p>
          </div>

          {/* Prompts */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Answer the Setup Prompts</h2>
            <CodeBlock
              lines={[
                "✔ Project name: » my-app",
                "✔ Select a framework: » React",
                "✔ Select a variant: » JavaScript / TypeScript",
              ]}
            />
            <p className="text-sm text-gray-400 mt-2">
              You’ll be asked to name the folder (e.g., <code>my-app</code>), choose React as the framework, and select either JavaScript or TypeScript.
            </p>
          </div>

          {/* Install */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Install Dependencies</h2>
            <CodeBlock lines={["cd my-app", "npm install"]} />
            <p className="text-sm text-gray-400 mt-2">
              Move into your project folder and install all required packages. This sets up React, Vite, and everything else your app needs.
            </p>
          </div>

          {/* Run */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Start the App</h2>
            <CodeBlock lines={["npm run dev"]} />
            <p className="text-sm text-gray-400 mt-2">
              Finally, run the development server. Your app will open in the browser instantly with hot-reload enabled.
            </p>
          </div>
        </div>

        {/* CTA */}
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
