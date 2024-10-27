"use client";
import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageRender from "./ImageRender";

interface AccordionData {
  title: string;
  content: string;
}

const accordionData: AccordionData[] = [
  {
    title: "Master Service Agreement?",
    content:
      "Our prices are up to 80% less than average outsourcing prices in the US.",
  },
  {
    title: "Payment Terms?",
    content: "We provide flexible payment terms to suit your business needs.",
  },
  {
    title: "Service Level Agreements?",
    content: "Guaranteed service uptime with 24/7 support.",
  },
  {
    title: "Service Level Agreements?",
    content: "Guaranteed service uptime with 24/7 support.",
  },
  {
    title: "Service Level Agreements?",
    content: "Guaranteed service uptime with 24/7 support.",
  },
];

const ReachYourIdeal = () => {
  const leftRef1 = useRef<HTMLDivElement>(null);
  const rightRef1 = useRef<HTMLDivElement>(null);
  const leftRef2 = useRef<HTMLDivElement>(null);
  const rightRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateElement = (
      ref: React.RefObject<HTMLDivElement>,
      direction: string,
      startTrigger: string
    ) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { x: direction === "left" ? "-100%" : "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: startTrigger,
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    // Animate elements
    animateElement(leftRef1, "left", "top 60%");
    animateElement(rightRef1, "right", "top 60%");
    animateElement(leftRef2, "left", "top 60%");
    animateElement(rightRef2, "right", "top 60%");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-[#04A6C80A] overflow-hidden w-full h-full md:h-[240vh] px-32 bg-opacity-[5%] flex  justify-center items-center ">
      <div className="flex flex-col items-center space-y-[10%]  justify-center  p-24">
        <h1 className="hidden text-6xl font-black text-black text-center pb-16 sm:flex gap-x-4">
          <span className="text-[#04A6C8]">High-value </span> process and
          compliance
        </h1>

        <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-center items-center text-center gap-y-10 gap-x-36 ">
          <div ref={leftRef1} className="w-full lg:w-[568px]  space-y-[25px]">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full shadow-md bg-white rounded-xl"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="h-[82px] rounded-lg text-lg px-6 md:px-10 data-[state=open]:text-black">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="-mt-4  px-2 md:px-4 text-start text-lg">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div ref={rightRef1} className="w-[300px] sm:w-[70%] -mt-24">
            <ImageRender img="/images/image 415.png" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-10 gap-x-36 mb-20">
          <div ref={leftRef2} className="w-[300px] sm:w-[70%] ">
            <ImageRender img="/images/Image 2.png" />
          </div>
          <div
            ref={rightRef2}
            className="w-full lg:w-[568px] h-auto space-y-[25px] mt-20"
          >
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full bg-white shadow-md rounded-xl"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="h-[82px] rounded-lg text-lg px-6 md:px-10 data-[state=open]:text-black">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="-mt-4  px-2 md:px-4 text-start text-lg">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReachYourIdeal;
