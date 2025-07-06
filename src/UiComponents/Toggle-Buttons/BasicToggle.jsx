import { useState } from "react";

export default function BasicToggle() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative w-[50px] h-[25px] m-5 select-none">
      <input
        id="basic-toggle"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="absolute top-0 left-0 w-full  h-full opacity-0 z-10 cursor-pointer"
      />
      <label
        htmlFor="basic-toggle"
        className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-300 cursor-pointer ${
          isChecked
            ? "bg-gradient-to-b from-[#4cd964] to-[#5de24e]"
            : "bg-gradient-to-b from-[#b3b3b3] to-[#e6e6e6]"
        }`}
      >
        <span
          className={`absolute top-[1px] left-[1px] w-[23px] h-[23px] rounded-full bg-white shadow-md transition-all duration-300 ${
            isChecked ? "translate-x-[25px]" : ""
          }`}
        />
      </label>
    </div>
  );
}
