// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const UILoader = () => {
//   const [count, setCount] = useState(0);
//   const [startExit, setStartExit] = useState(false);
//   const [loadingDone, setLoadingDone] = useState(false);

//   useEffect(() => {
//     if (count < 100) {
//       const timer = setTimeout(() => setCount((prev) => prev + 1), 20); // slower count
//       return () => clearTimeout(timer);
//     } else {
//       setTimeout(() => setStartExit(true), 500); // slight pause before exit
//     }
//   }, [count]);

//   return (
//     <AnimatePresence>
//       {!loadingDone && (
//         <motion.div
//           key="loader"
//           className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-[9999]"
//           initial={{ y: 0, opacity: 1 }}
//           animate={startExit ? { y: "-100%", opacity: 0.9 } : { y: 0, opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           onAnimationComplete={() => {
//             if (startExit) {
//               setLoadingDone(true);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-white text-4xl font-bold"
//           >
//             {count}%
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default UILoader;





import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "@fontsource/sora/400.css";
import "@fontsource/sora/700.css";


const UILoader = () => {
  const [step, setStep] = useState(0); // 0: Welcome, 1: UIvault, 2: Future of UI, 3: Exit
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
  if (step < 4) {
    document.body.style.overflow = "hidden"; // 👈 disable scroll
  } else {
    document.body.style.overflow = ""; // 👈 re-enable scroll
  }

  const delays = [1000, 1000, 1000, 1000];
  const timeout = setTimeout(() => {
    setStep((prev) => prev + 1);
  }, delays[step]);

  return () => clearTimeout(timeout);
}, [step]);

//   const textMap = ["Welcome", "UIvault", "The Future of UI"];
const textMap = ["Welcome to", "UIvault", "The Future of UI"];


  return (
    <AnimatePresence>
      {!loadingDone && step < 4 && (
        <motion.div
          key="loader"
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-[9999] scrollbar-hide"
          initial={{ y: 0, opacity: 1 }}
          animate={step === 3 ? { y: "-100%", opacity: 0.9 } : { y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            if (step === 3) {
              setLoadingDone(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
           className="text-white text-4xl font-bold text-center font-[Sora]"

          >
            {textMap[step] || ""}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UILoader;

