import React from "react";

const propsData = [
  {
    prop: "children",
    type: "React.ReactNode (`<h1>` and `<p>` elements)",
    default: `<h1 className="text-6xl font-bold text-white mb-4 leading-[1.1]">Ui <br/>Vault</h1>\n<p className="text-gray-300 max-w-xl mx-auto">Get the best advice from our experts, including artists, painters, marathoners, and RDX — totally free.</p>`,
    desc: `Optional. Defines the content rendered at the center of the background. Supports custom <h1> and <p> elements. If no Tailwind CSS classNames are provided, default styles will be automatically applied.`,
  },
];

const GradientlineBackgroundProps = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-white bg-black backdrop-blur-md p-2 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Props</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse table-fixed">
          <thead>
            <tr className="bg-gray-950/80 text-gray-300">
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold w-[100px]">
                Prop
              </th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold w-[150px]">
                Type
              </th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold w-[250px]">
                Default
              </th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {propsData.map(({ prop, type, default: def, desc }) => (
              <tr
                key={prop}
                className="bg-gray-950/50 text-gray-100 hover:bg-gray-900/70 transition-colors duration-200"
              >
                <td className="border border-gray-700 px-4 py-2 font-mono text-cyan-400 align-top break-words">
                  {prop}
                </td>
                <td className="border border-gray-700 px-4 py-2 align-top break-words">
                  <span className="block">{type}</span>
                </td>
                <td className="border border-gray-700 px-4 py-2 align-top break-words">
                  <code className="block bg-gray-800/60 px-2 py-1 rounded text-gray-300 whitespace-pre-wrap break-words">
                    {def}
                  </code>
                </td>
                <td className="border border-gray-700 px-4 py-2 text-gray-400 align-top break-words">
                  <p className="leading-relaxed">{desc}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradientlineBackgroundProps;
