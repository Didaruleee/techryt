"use client";
import { Progress } from "@/components/ui/progress";
import CardNotify from "./CardNotify";
import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const CalculateSaving = () => {
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
    <div className="w-full  h-auto overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-y-10  px-10 sm:px-0 lg:gap-x-52 bg-[#013742] text-white py-10">
      <div
        ref={leftRef}
        className="flex flex-col justify-center items-center gap-y-10 lg:gap-y-20 lg:w-[40%] "
      >
        <h1 className="text-3xl lg:text-6xl font-black text-center">
          Slash your payroll
          <span className="block pt-2">Calculate your savings</span>
        </h1>
        <div className="flex flex-col justify-start items-center gap-y-2 w-full">
          <Progress value={33} color="white" className="w-[300px] lg:w-full" />
          <p className="text-[0.5rem] lg:text-base text-center">
            $500 - $1000 - $1500k - $2000 - $3000 - $400 - $4500- $5000 - $5500
            - $6000$ - 6500$
          </p>
        </div>
      </div>
      <div ref={rightRef}>
        <CardNotify />
      </div>
    </div>
  );
};

export default CalculateSaving;
