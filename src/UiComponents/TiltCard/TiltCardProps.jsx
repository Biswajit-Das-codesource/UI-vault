import React from "react";

const propsData = [
  {
    prop: "title",
    type: "string",
    default: '"the future of UI depth"',
    desc: "The main title displayed next to the highlighted word.",
  },
  {
    prop: "highlight",
    type: "string",
    default: '"Experience"',
    desc: "Highlighted text in the title, wrapped with a background color.",
  },
  {
    prop: "description",
    type: "string",
    default: '"Hover to activate immersive 3D effects with CSS perspective magic."',
    desc: "Short paragraph shown under the title.",
  },
  {
    prop: "image",
    type: "string (URL)",
    default:
      '"https://static.vecteezy.com/system/resources/previews/010/865/555/non_2x/autumn-rural-landscape-farm-fields..."',
    desc: "Image shown in the card, appears with 3D depth.",
  },
  {
    prop: "tryButtonText",
    type: "string",
    default: '"Try now →"',
    desc: "Text for the left-side button (usually a call to action).",
  },
  {
    prop: "signUpText",
    type: "string",
    default: '"Sign up"',
    desc: "Text for the right-side signup button.",
  },
];

const TiltCardProps = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-white bg-black backdrop-blur-md p-2 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Props</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse overflow-hidden">
          <thead>
            <tr className="bg-gray-950/80 text-gray-300">
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">Prop</th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">Type</th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">Default</th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {propsData.map(({ prop, type, default: def, desc }) => (
              <tr
                key={prop}
                className="bg-gray-950/50 text-gray-100 hover:bg-gray-900/70 transition-colors duration-200"
              >
                <td className="border border-gray-700 px-4 py-2 font-mono text-cyan-400 whitespace-nowrap">
                  {prop}
                </td>
                <td className="border border-gray-700 px-4 py-2 whitespace-nowrap">
                  {type}
                </td>
                <td className="border border-gray-700 px-4 py-3 whitespace-normal max-w-xs break-words">
                  <code className="bg-gray-800/60 px-2 py-1 whitespace-normal max-w-full break-words rounded text-gray-300 inline-block">
                    {def}
                  </code>
                </td>
                <td className="border border-gray-700 px-4 py-2 text-gray-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TiltCardProps;
