import React from "react";

const LockOpenToggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="group peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-300 w-20 sm:w-24 h-10 sm:h-12 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-8 sm:after:h-10 after:w-8 sm:after:w-10 after:top-1 sm:after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-10 sm:peer-checked:after:translate-x-12 peer-hover:after:scale-95">
        
        {/* Lock Open Icon */}
        <svg
          className="absolute top-1 sm:top-1 left-10 sm:left-12 stroke-gray-900 w-8 sm:w-10 h-8 sm:h-10"
          height="100"
          viewBox="0 0 100 100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,18A19.9,19.9,0,0,0,30,38v8a8,8,0,0,0-8,8V74a8,8,0,0,0,8,8H70a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H38V38a12,12,0,0,1,23.6-3,4,4,0,1,0,7.8-2A20.1,20.1,0,0,0,50,18Z"
            className="fill-current"
          />
        </svg>

        {/* Lock Closed Icon */}
        <svg
          className="absolute top-1 left-1 stroke-gray-900 w-8 sm:w-10 h-8 sm:h-10"
          height="100"
          viewBox="0 0 100 100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30,46V38a20,20,0,0,1,40,0v8a8,8,0,0,1,8,8V74a8,8,0,0,1-8,8H30a8,8,0,0,1-8-8V54A8,8,0,0,1,30,46Zm32-8v8H38V38a12,12,0,0,1,24,0Z"
            fillRule="evenodd"
            className="fill-current"
          />
        </svg>
      </div>
    </label>
  );
};

export default LockOpenToggle;
