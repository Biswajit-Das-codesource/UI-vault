import React, { useState } from "react";
import {
  FaClipboard as Clipboard,
  FaClipboardCheck as ClipboardCheck,
} from "react-icons/fa";
import StarRatingCard from "./StarRatingCard";
import FeatureRatingCard from "./FeatureRatingCard";


function RatingPage() {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">Rating Card</h1>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          Animated rating card component with emoji and sparkle effects.
        </p>

        {/* Sadcn Theme Section */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold">Theme: Shiny Rating </h2>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-1">Installation</h3>
            <p className="text-sm text-gray-400 mb-3">CLI</p>

            <div className="flex gap-2 mb-4">
              <button className="bg-neutral-900 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-gray-700">
                npm
              </button>
            </div>

            <div className="flex flex-wrap items-center bg-neutral-900 p-3 rounded-lg mb-6 text-sm">
              <code className="flex-grow font-medium overflow-x-auto whitespace-nowrap">
                npx ui-vault ratingCard-ShinyRating
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("npx ui-vault ratingCard-ShinyRating");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-gray-400 hover:text-white ml-2"
              >
                {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
              </button>
            </div>

            <div className="flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
              <button
                onClick={() => setTab("preview")}
                className={`${
                  tab === "preview" ? "text-white font-medium" : "text-gray-500"
                }`}
              >
                Preview
              </button>
            </div>

            <StarRatingCard/>
          </div>
        </section>

        {/* Glass Glow Theme Section */}
        <section className="mt-12">
          <h2 className="text-lg sm:text-xl font-semibold">Theme: Feature Card</h2>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-1">Installation</h3>
            <p className="text-sm text-gray-400 mb-3">CLI</p>

            <div className="flex gap-2 mb-4">
              <button className="bg-neutral-900 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-gray-700">
                npm
              </button>
            </div>

            <div className="flex flex-wrap items-center bg-neutral-900 p-3 rounded-lg mb-6 text-sm">
              <code className="flex-grow font-medium overflow-x-auto whitespace-nowrap">
                npx ui-vault ratingCard-FeatureCard
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("npx ui-vault ratingCard-FeatureCard");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-gray-400 hover:text-white ml-2"
              >
                {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
              </button>
            </div>

            <div className="flex gap-6 items-center border-b border-gray-800 pb-2 mb-4">
              <button
                onClick={() => setTab("preview")}
                className={`${
                  tab === "preview" ? "text-white font-medium" : "text-gray-500"
                }`}
              >
                Preview
              </button>
            </div>
            <FeatureRatingCard/>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default RatingPage;
