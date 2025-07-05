import React from "react";
import { toast, Toaster } from "sonner";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

// 🎨 Styled line renderer
const getStyledLine = (line) => {
  const keywords = line.split(" ").map((word, i) => {
    if (word.startsWith("<!") || word.startsWith("</") || word.startsWith("<")) {
      return (
        <span key={i} className="geist-mono text-yellow-400">{word} </span>
      );
    }
    if (["npm", "cd", "npx", "import", "export", "from"].includes(word)) {
      return (
        <span key={i} className="text-yellow-400 geist-mono">{word} </span>
      );
    }
    if (
      ["tailwindcss", "@tailwindcss/vite", "postcss", "autoprefixer"].includes(word) ||
      word.includes("vite") || word.includes("style.css")
    ) {
      return (
        <span key={i} className="text-green-400 geist-mono">{word} </span>
      );
    }
    if (["run", "dev", "init", "-D"].includes(word)) {
      return (
        <span key={i} className="text-cyan-400 geist-mono">{word} </span>
      );
    }
    return (
      <span key={i} className="text-white geist-mono">{word} </span>
    );

     if (["name", "dev", "@import", "-D"].includes(word)) {
      return (
        <span key={i} className="text-cyan-400 geist-mono">{word} </span>
      );
    }
    return (
      <span key={i} className="text-white geist-mono">{word} </span>
    );
  });

  return <div>{keywords}</div>;
};

// 📦 Copyable and styled code block
const CopyBlock = ({ lines }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy!");
    }
  };

  return (
    <div className="relative bg-[#1a1a1a] mt-4 rounded-2xl font-mono text-sm sm:text-base overflow-hidden">
      <pre className="px-4 py-4 whitespace-pre-wrap leading-relaxed">
        {lines.map((line, i) => (
          <div key={i}>{getStyledLine(line)}</div>
        ))}
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

// 🌟 Main component
const TailwindInstall = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-4">
      <Toaster richColors position="top-right" />
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Install Tailwind CSS</h1>
        <p className="text-gray-400 mb-10">Full setup using the Vite plugin and configuration.</p>

        <div className="border-l border-blue-200 pl-6 space-y-10">
          <div>
            <h2 className="text-xl font-semibold mb-2"> Create your project</h2>
            <CopyBlock lines={["npm create vite@latest my-project", "cd my-project"]} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2"> Install Tailwind CSS</h2>
            <CopyBlock lines={["npm install tailwindcss @tailwindcss/vite"]} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2"> Configure the Vite plugin</h2>
            <CopyBlock
              lines={[
                "import { defineConfig } from 'vite'",
                "import tailwindcss from '@tailwindcss/vite'",
                "",
                "export default defineConfig({",
                "  plugins: [",
                "    tailwindcss(),",
                "  ],",
                "})",
              ]}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Import Tailwind CSS</h2>
            <CopyBlock lines={["@import \"tailwindcss\";"]} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Start your build process</h2>
            <CopyBlock lines={["npm run dev"]} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2"> Start using Tailwind</h2>
            <CopyBlock
              lines={[
                "<!doctype html>",
                "<html>",
                "  <head>",
                "    <meta charset=\"UTF-8\" />",
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
                "    <link href=\"/src/style.css\" rel=\"stylesheet\">",
                "  </head>",
                "  <body>",
                "    <h1 class=\"text-3xl font-bold underline\">Hello world!</h1>",
                "  </body>",
                "</html>",
              ]}
            />
          </div>
        </div>

        <div className="flex justify-end mt-12">
          <button
            onClick={() => navigate("/components/docs/install-uivault")}
            className="bg-gradient-to-r bg-black border border-white cursor-pointer text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:opacity-90 transition-all"
          >
            Next: Setup UI Vault →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindInstall;
