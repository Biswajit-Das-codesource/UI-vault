
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GravityScroll = () => {
  const containerRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const centerRef = useRef();
  const topH1 = useRef();
  const bottomH1 = useRef();
  const fullTitleRef = useRef();
  const centerContentRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "100% top",
          scrub: 2,
          pin: true,
        },
      });

      tl.to(fullTitleRef.current, { opacity: 0, duration: 0.5 }, "start")
        .to(topRef.current, { yPercent: -100 }, "a")
        .to(bottomRef.current, { yPercent: 100 }, "a")
        .to(topH1.current, { y: "100%" }, "a")
        .to(bottomH1.current, { y: "-100%" }, "a")
        .to(centerContentRef.current, { marginTop: 0 }, "a");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Full GRAVITY centered initially */}
      <h1
        ref={fullTitleRef}
        className="absolute z-30 text-[22vw] font-bold text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        Scroll
      </h1>

      {/* Top Split */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-white z-20 overflow-hidden flex items-center justify-center"
      >
       
      </div>

      {/* Bottom Split */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-20 overflow-hidden flex items-center justify-center"
      >

      </div>

      {/* Content Reveal */}
      <div
        ref={centerContentRef}
        className="relative w-full h-screen mt-[100vh] flex flex-col items-center justify-center text-center text-white px-4 gap-6"
      >
        <h4 className="text-sm tracking-widest font-semibold text-gray-300">
          GRAVITY
        </h4>
        <h3 className="text-xl md:text-3xl font-light max-w-[600px]">
          <i>Browse</i> the work that define a <i>movement</i> and created a
          craft.
        </h3>
        <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm cursor-pointer">
          ENTER GALLERY
        </div>
        <h2 className="text-[15vw] text-white font-bold">(17)</h2>
      </div>
    </div>
  );
};

export default GravityScroll;
