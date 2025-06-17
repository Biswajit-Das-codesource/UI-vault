import React from "react";

const propsData = [
  {
    prop: "imageURL",
    type: "string",
    default: '"https://example.com/image.jpg"',
    desc: "Source URL of the main image displayed in the card and zoom effect.",
  },
  {
    prop: "title",
    type: "string",
    default: '"Default Title"',
    desc: "Main heading shown below the image.",
  },
  {
    prop: "description",
    type: "string",
    default: '"Default description goes here."',
    desc: "Descriptive text displayed below the title.",
  },
];

const VisionCardProps = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-white bg-black backdrop-blur-md p-2 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Props</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse overflow-hidden">
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

export default VisionCardProps;
