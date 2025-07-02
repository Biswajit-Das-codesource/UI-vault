import React from "react";

const propsData = [
  {
    prop: "children",
    type: "React.ReactNode (Only `<h2>` element)",
    default:
      '<h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Title</h2>',
    desc: `Defines the content inside the BeamsBackground. Only accepts a single <h2> tag. You can apply your own Tailwind CSS styles via className. If no styling is passed, a default gradient-styled <h2> will be used.`,
  },
];

const BeamsBackgroundProps = () => {
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

export default BeamsBackgroundProps;
