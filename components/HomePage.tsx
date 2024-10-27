"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import TypingEffect from "./TypingEffect";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import VibrationIcon from "./Vibration";

const HomePage = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
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
        }
      );
    }
  }, []);

  return (
    <>
      <div className=" w-full bg-[#e9f7fa]  h-full overflow-hidden flex pt-[28%] lg:mt-0 flex-col md:flex-row  items-center justify-items-center justify-center min-h-screen md:p-16 p-2 lg:py-32 lg:pb-0 sm:p-20">
        <div
          ref={leftRef}
          className="flex flex-col md:items-start items-center md:justify-items-center justify-center md:justify-start gap-y-0 w-full md:w-[40%] md:p-4 p-2  sm:p-20"
        >
          <div className="flex flex-col self-center md:items-center md:justify-items-center gap-y-2 md:gap-y-7 md:justify-center">
            <h1 className="flex flex-wrap  justify-center items-center md:items-end md:justify-start gap-x-2 leading-10 space-y-3 text-center text-[28px] md:text-5xl font-extrabold text-black md:text-start">
              <TypingEffect text="Power" color="#00000" />
              <TypingEffect text="Your Growth" color="#04A6C8" />
              <TypingEffect text="with Enterprise" color="#00000" />
              <TypingEffect color="#00000" text="Solutions & Teams" />
            </h1>

            <p className="md:self-start self-center text-[13px] md:text-lg font-bold text-center">
              Up to 75% Off Hosting + Website Builders
            </p>

            <div className="  flex flex-row md:flex-col text-black justify-center text-center   md:justify-start md:items-start  w-full items-center gap-y-2 gap-x-2">
              {" "}
              <p className="flex md:text-sm text-[10px] justify-center items-center gap-x-2">
                <Check className="md:size-5 size-4  text-center text-[#17C600]" />{" "}
                Free Domain
              </p>
              <p className="flex md:text-sm text-[10px] justify-center items-center gap-x-2">
                <Check className="md:size-5 size-4 text-[#17C600]" /> Free
                Domain
              </p>
              <p className="flex md:text-sm text-[10px] justify-center items-center gap-x-2">
                <Check className="md:size-5 size-4 text-[#17C600]" /> Free
                Domain
              </p>
            </div>
            <span className="flex md:justify-center md:items-center self-center md:self-start  justify-start items-center gap-x-2 mb-0">
              <h4>USS</h4>
              <span className="flex justify-center items-center gap-x-2 ">
                <p className="text-4xl font-extrabold">2.99</p>
                <p>/mo</p>
              </span>{" "}
            </span>
            <span className="hidden md:flex md:justify-center md:items-center -mt-4 self-center md:self-start  justify-start items-start  mb-2">
              <h4 className="text-md font-bold">+2 months Free</h4>
            </span>
          </div>
          <div className="flex self-center md:self-start md:justify-start md:items-start mt-2 gap-x-5">
            <Button
              variant="default"
              size="lg"
              className="bg-[#04A6C8] text-white rounded-lg px-5 py-3 "
            >
              Book A Demo
            </Button>
          </div>
        </div>
        <div
          ref={rightRef}
          className="relative flex justify-center items-center w-full md:w-1/2"
        >
          <Image src="/images/BG-Image.png" alt="" width={840} height={647} />
          <VibrationIcon
            icon={
              <Button
                variant="outline"
                className="absolute md:top-32 top-4 left-2 md:left-12 z-20 bg-[#1E7AF4] md:size-[62px] hover:bg-blue-500"
                size="icon"
              >
                <Avatar>
                  <AvatarImage src="/images/Home Icon 1.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            }
            animationDirection="left"
          />
          <VibrationIcon
            icon={
              <Button
                variant="outline"
                className="absolute md:top-52 top-20 left-2 md:left-12 z-20 bg-[#F06A6A] md:size-[62px] hover:bg-red-400"
                size="icon"
              >
                <Avatar>
                  <AvatarImage src="/images/Home Icon 2.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            }
            animationDirection="right"
          />
        </div>
      </div>
      <Image
        src="/images/shadow.png"
        alt="Background Image"
        width={1240}
        height={647}
        className="bg-[#e9f7fa] w-full h-full"
      />
    </>
  );
};

export default HomePage;
