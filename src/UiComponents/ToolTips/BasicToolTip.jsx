import React from "react";

const BasicToolTip = () => {
  return (
    <button
      className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-500 to-pink-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Hover For Tooltip
      </span>

      {/* Tooltip Container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
        <div className="flex flex-col items-center text-sm text-slate-300">
          {/* Tooltip Box */}
          <div className="bg-gray-500 text-white rounded-sm py-1 px-2">
            <p className="whitespace-nowrap">This is a tooltip.</p>
          </div>
          {/* Arrow */}
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent  border-t-gray-500" />
        </div>
      </div>
    </button>
  );
};

export default BasicToolTip;
