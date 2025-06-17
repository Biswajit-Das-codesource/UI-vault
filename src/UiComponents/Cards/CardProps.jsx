import React from "react";

const propsData = [
  {
    prop: "headtext",
    type: "string",
    default: '"Welcome Back"',
    desc: "Heading text at the top of the card",
  },
  {
    prop: "desc",
    type: "string",
    default: '"Login to continue"',
    desc: "Description below the heading",
  },
  {
    prop: "emailLabel",
    type: "string",
    default: '"Email"',
    desc: "Label above email input",
  },
  {
    prop: "emailPlaceholder",
    type: "string",
    default: '"you@example.com"',
    desc: "Placeholder inside email input",
  },
  {
    prop: "passwordLabel",
    type: "string",
    default: '"Password"',
    desc: "Label above password input",
  },
  {
    prop: "passwordPlaceholder",
    type: "string",
    default: '"••••••••"',
    desc: "Placeholder inside password input",
  },
  {
    prop: "buttonText",
    type: "string",
    default: '"Login"',
    desc: "Text inside the login button",
  },
];

const CardProps = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-white bg-black backdrop-blur-md p-2 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Props</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm  border-collapse overflow-hidden">
          <thead>
            <tr className="bg-gray-950/80 text-gray-300">
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                Prop
              </th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
                Type
              </th>
              <th className="border border-gray-700 px-4 py-3 text-left font-semibold">
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
                <td className="border border-gray-700 px-4 py-2 font-mono text-cyan-400 whitespace-nowrap">
                  {prop}
                </td>
                <td className="border border-gray-700 px-4 py-2 whitespace-nowrap">
                  {type}
                </td>
                <td className="border border-gray-700 px-4 py-3 whitespace-nowrap">
                  <code className="bg-gray-800/60 px-2 py-1 rounded text-gray-300">
                    {def}
                  </code>
                </td>
                <td className="border border-gray-700 px-4 py-2 text-gray-400">
                  {desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardProps;
