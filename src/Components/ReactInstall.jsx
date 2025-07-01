import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ← if using React Router

const ReactInstall = () => {
  const navigate = useNavigate(); // React Router navigation

  const goToTailwindSetup = () => {
    navigate("/tailwind-setup"); // Replace with your actual route
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
        <div className="border-l border-blue-200 pl-6">

          {/* Create Project */}
          <div className="flex items-center justify-between bg-[#1a1a1a] border border-gray-700 text-green-400 px-5 py-4 text-sm rounded-2xl mt-4">
            <code className="geist-mono text-sm overflow-x-auto">
              <span className="text-cyan-400">npm</span> create vite@latest
            </code>
          </div>

          {/* Prompts */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mt-4">
              On installation, you'll see the following prompts:
            </h2>
            <pre className="bg-[#1e1e1e] text-cyan-300 p-4 rounded-md overflow-auto text-sm mt-4">
              <code className="geist-mono text-sm overflow-x-auto">
{`✔ Project name: » my-app
✔ Select a framework: » React
✔ Select a variant: » JavaScript / TypeScript`}
              </code>
            </pre>
          </section>

          {/* Install dependencies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Install dependencies</h2>
            <pre className="bg-[#1e1e1e] text-yellow-300 p-4 rounded-md overflow-auto">
              <code className="geist-mono text-sm overflow-x-auto">
{`cd my-app
npm install`}
              </code>
            </pre>
          </section>

          {/* Start the app */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Start the app</h2>
            <pre className="bg-[#1e1e1e] text-green-400 p-4 rounded-md overflow-auto">
              <code className="geist-mono text-sm overflow-x-auto">
                npm run dev
              </code>
            </pre>
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

export default ReactInstall;
