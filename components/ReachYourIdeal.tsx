"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const ReachYourIdeal = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (leftRef.current && rightRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center h-auto md:h-[350px]">
      <div className="flex flex-col md:flex-row justify-center gap-[27%] items-center w-full  h-full bg-[#04A6C8] py-10 md:py-0">
        <h1
          ref={leftRef}
          className="text-3xl md:text-5xl font-bold text-white text-center md:text-left"
        >
          Reach your ideal <br /> customer with Tech Ryt
        </h1>
        <div
          ref={rightRef}
          className="w-[85%] md:w-[363px] h-auto bg-white cursor-pointer flex justify-between items-center rounded-xl  px-2 md:px-4 py-2 mt-5 md:mt-0 transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="w-[78px] h-[78px] flex justify-center items-center rounded-xl bg-[#04A6C8] cursor-pointer">
            <Image
              src="/images/calender.png"
              alt=""
              width={54}
              height={54}
              quality={100}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-y-1">
            <h3 className="text-lg font-bold">Schedule A Call</h3>
            <p className="text-sm">Book Anytime, Today, Or This Week</p>
          </div>
        </div>
      </div>
      <div className="bg-[#006378] px-5 py-5 grid grid-cols-2 sm:flex sm:justify-center  text-white justify-center w-full items-center space-y-5 md:space-y-0 md:space-x-10">
        <div className="flex justify-center items-center gap-x-2 text-sm md:text-base">
          <Check /> Free contact shows a month
        </div>
        <div className="flex justify-center items-center gap-x-2 text-sm md:text-base">
          <Check /> 280,000 companies love us
        </div>
        <div className="flex justify-center items-center gap-x-2 text-sm md:text-base">
          <Check /> GDPR compliant & CCPA compliant
        </div>
        <div className="flex justify-center items-center gap-x-2 text-sm md:text-base">
          <Check /> Monthly & yearly contracts
        </div>
      </div>
    </div>
  );
};

export default ReachYourIdeal;
