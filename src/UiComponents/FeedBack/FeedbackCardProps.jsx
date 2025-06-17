import React from "react";

const props = [
  {
    prop: "title",
    type: "string",
    default: '"Feedback"',
    desc: "Title displayed on the feedback card.",
  },
  {
    prop: "subtitle",
    type: "string",
    default: '"Help us improve our product"',
    desc: "Subheading displayed under the title.",
  },
  {
    prop: "defaultSatisfaction",
    type: "number",
    default: "50",
    desc: "Initial value of the satisfaction slider (0-100).",
  },
  {
    prop: "placeholder",
    type: "string",
    default: '"Tell us what you think..."',
    desc: "Placeholder text in the feedback textarea.",
  },
  {
    prop: "submitText",
    type: "string",
    default: '"Submit Feedback"',
    desc: "Text for the submit button.",
  },
  {
    prop: "onSubmit",
    type: "(satisfaction: number, feedback: string) => void",
    default: "alert with satisfaction & feedback",
    desc: "Function triggered when the form is submitted.",
  },
];

export default function FeedbackCardProps() {
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
            {props.map(({ prop, type, default: def, desc }) => (
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
                  <code className="bg-gray-800/60 px-2 py-1 rounded text-gray-300 inline-block">
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
}
