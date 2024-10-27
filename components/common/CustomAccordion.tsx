// CustomAccordion.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface AccordionData {
  id: string;
  title: string;
  content: string;
}

interface CustomAccordionProps {
  data: AccordionData[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ data }) => {
  return (
    <div className="w-full lg:w-[568px] h-auto space-y-5  md:mt-5 px-0 ">
      {data.map((item, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-full bg-white rounded-2xl"
        >
          <AccordionItem value={item.id}>
            <AccordionTrigger className="h-[82px] rounded-lg text-lg md:px-10 px-1  data-[state=open]:text-black">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="-mt-5 px-3 text-lg">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomAccordion;
