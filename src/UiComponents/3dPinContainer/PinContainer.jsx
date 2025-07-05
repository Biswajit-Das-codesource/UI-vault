/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const defaultContent = (
  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
      UI Vault
    </h3>
    <div className="text-base !m-0 !p-0 font-normal">
      <span className="text-slate-500 ">
        Customizable Tailwind CSS and Framer Motion and react-three-fiber Components.
      </span>
    </div>
    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-gray-200 via-gray-500 to-gray-900" />
  </div>  //you can add image here also insted of bg color
);

export const PinContainer = ({
  children,
  title,
  href,
  className = "",
  containerClassName = "",
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform(
      "translate(-50%,-50%) rotateX(30deg) scale(0.92) rotateZ(-6deg)"
    );
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1) rotateZ(0deg)");
  };

  // Use defaults if not provided
  const displayChildren = children || defaultContent;
  const displayTitle = title || "UI Vault";
  const displayHref = href || "https://uivaultlib.vercel.app/";

  return (
    <a
      className={`relative group/pin z-50 cursor-pointer ${containerClassName}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={displayHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          perspective: "1200px",
          transform: "rotateX(60deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] border mt-4 -translate-x-1/2 -translate-y-1/2 "
      >
        <div
          style={{
            transform: transform,
            boxShadow:
              "0 12px 32px 0 rgba(0,0,0,0.45), 0 0 0 4px rgba(0,255,255,0.08)",
          
            borderWidth: 2,
            borderStyle: "solid",
            background: "linear-gradient(135deg, #18181b 80%, #23234a 100%)",
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start border-gray-400 rounded-2xl border group-hover/pin:border-cyan-400/40 transition duration-700 overflow-hidden"
        >
          <div className={`relative z-50 ${className}`}>{displayChildren}</div>
        </div>
      </div>
      <PinPerspective title={displayTitle} href={displayHref} />
    </a>
  );
};

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-gradient-to-r from-cyan-700 via-indigo-800 to-cyan-700 py-0.5 px-4 ring-1 ring-cyan-400/20 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>
        <div
          style={{
            perspective: "1200px",
            transform: "rotateX(60deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            {[0, 2, 4].map((delay) => (
              <motion.div
                key={delay}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
            ))}
          </>
        </div>
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-400 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-400 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-400 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-200 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};

export default PinContainer; 