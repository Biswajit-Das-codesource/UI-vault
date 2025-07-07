import React from "react";

const HoverTooltipLink = () => {
  return (
    <a
      href="https://uivault.in"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex justify-center items-center text-zinc-800 text-sm font-bold"
    >
      {/* Tooltip */}
      <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-300 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md z-10">
        <div className="bg-gradient-to-br from-blue-200 to-purple-600 flex items-center gap-1 p-2 rounded-md">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-zinc-800"
          >
            <circle strokeLinejoin="round" r="9" cy="12" cx="12" />
            <path
              strokeLinejoin="round"
              d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
            />
            <path
              strokeLinejoin="round"
              d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
            />
            <path strokeLinejoin="round" d="M3 12H21" />
            <path strokeLinejoin="round" d="M19.5 7.5H4.5" />
            <path strokeLinejoin="round" d="M19.5 16.5H4.5" />
          </svg>
          <span>Uivault.in</span>
        </div>
        {/* Tooltip tail and overlay */}
        <div className="shadow-md bg-gradient-to-br from-blue-200 to-purple-600 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1" />
        <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
          <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1" />
        </div>
      </div>

      {/* Trigger Button */}
      <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-blue-200 to-purple-600 p-3 rounded-full cursor-pointer duration-300">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-zinc-800"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
          />
        </svg>
        <span className="text-[0px] group-hover:text-sm duration-300">
          Check Our Website
        </span>
      </div>
    </a>
  );
};

export default HoverTooltipLink;
