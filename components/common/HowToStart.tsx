import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface HowToStartProps {
  className?: string;
}

const HowToStart: React.FC<HowToStartProps> = ({ className }) => {
  return (
    <section
      className={twMerge(
        "md:hidden flex flex-col justify-center items-center h-auto mt-5 rounded-[50px] text-white mx-auto w-[90%] bg-[#013742] py-16",
        className
      )}
    >
      <main>
        <h1 className="flex md:justify-center md:items-center justify-start items-start gap-x-4 text-white  text-4xl font-bold  text-center pb-16 ">
          Here’s how you can start
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-10 md:h-full md:gap-y-2 gap-y-16">
          <div className="flex flex-col justify-center items-center gap-y-2 ">
            <div className="flex justify-center items-center rounded-full border-2 border-white size-[56.97px]">
              <Image
                src="/images/Section Icon/Share.png"
                alt="Share Icon"
                width={27.5}
                height={27.5}
                className="size-[27.5px]"
              />
            </div>
            <p>Share your needs</p>
          </div>

          <Image
            src="/images/Next Arrow 1.png"
            width={114.85}
            height={38.28}
            className="w-[114.85px] h-[38.28px] hidden md:block"
            alt="Next Arrow 1"
          />

          <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="flex justify-center items-center rounded-full border-2 border-white size-[56.97px]">
              <Image
                src="/images/Section Icon/Click.png"
                alt="Click Icon"
                width={27.5}
                height={27.5}
                className="size-[27.5px]"
              />
            </div>
            <p className="text-center">Choose the best fit or let us do it </p>
          </div>

          <Image
            src="/images/Next Arrow 2.png"
            width={114.85}
            height={38.28}
            className="w-[114.85px] h-[38.28px] hidden md:block"
            alt="Next Arrow 2"
          />

          <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="flex justify-center items-center rounded-full border-2 border-white size-[56.97px]">
              <Image
                src="/images/Section Icon/Search.png"
                alt="Search Icon"
                width={27.5}
                height={27.5}
                className="size-[27.5px]"
              />
            </div>
            <p>Hire your VA </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HowToStart;
