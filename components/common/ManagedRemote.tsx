import React from "react";
import CustomAccordion from "./CustomAccordion";

const ManagedRemote = () => {
  const accordionData = [
    {
      id: "item-1",
      title: "Save up to 80% on payroll",
      content:
        "Our prices are up to 80% less than average outsourcing prices in the US.",
    },
    {
      id: "item-2",
      title: "Dedicated assistants only",
      content:
        "Each assistant is dedicated exclusively to your business, ensuring personalized service.",
    },
    {
      id: "item-3",
      title: "Ongoing Quality Supervision",
      content:
        "We ensure continuous monitoring to maintain high-quality services.",
    },
  ];

  return (
    <main className="bg-[#04A6C80A] w-full py-16 bg-opacity-[5%]">
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <h1 className="flex justify-start items-start gap-x-4 text-3xl md:text-[55px] md:leading-[100%] font-black text-black text-center pb-16">
            A managed remote <br /> talent experience
          </h1>
          <CustomAccordion data={accordionData} />
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src="/images/laptop.png"
            className="md:w-[80%] md:h-[80%] h-full w-[400px] bg-cover bg-center"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default ManagedRemote;
