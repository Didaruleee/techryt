// import React from "react";
// import CustomAccordion from "./CustomAccordion";

// const accordionData = [
//   {
//     id: "item-1",
//     title: "How do i communicate with my assistant?",
//     content: `Techright has the following methods available:
//     - Web app (through the login in the top right)
//     - Dedicated phone number (calls & texts)
//     - Email
//     - WhatsApp
//     - Microsoft Teams
//     - Custom methods are available upon request.`,
//   },
//   {
//     id: "item-2",
//     title: "Dedicated assistants only",
//     content:
//       "Each assistant is dedicated exclusively to your business, ensuring personalized service.",
//   },
//   {
//     id: "item-3",
//     title: "How do i communicate with my assistant?",
//     content:
//       "We ensure continuous monitoring to maintain high-quality services.",
//   },
//   {
//     id: "item-4",
//     title: "How do i communicate with my assistant?",
//     content:
//       "We ensure continuous monitoring to maintain high-quality services.",
//   },
//   {
//     id: "item-5",
//     title: "How do i communicate with my assistant?",
//     content:
//       "We ensure continuous monitoring to maintain high-quality services.",
//   },
// ];

// const AskQuestion = () => {
//   return (
//     <main className="bg-[#04A6C80A] w-full py-16 bg-opacity-[5%]">
//       <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-y-10 gap-x-36 mb-20">
//         <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
//           <CustomAccordion data={accordionData} />
//         </div>
//         <div>
//           <div className="lg:w-1/2 w-full   ">
//             <h1 className="text-left w-full text-4xl md:text-5xl font-black text-black mb-8">
//               Frequently Asked Questions
//             </h1>
//             <div className="sm:relative flex justify-center object-fill items-center rounded-full bg-[#04A6C8] bg-opacity-[10%] lg:w-[402px] lg:h-[403px] w-full  h-full">
//               <img
//                 src="/images/Message Frame.png"
//                 className="absolute z-10 w-full h-full "
//                 alt=""
//               />
//               <img src="/images/QA Icon.png" className="absolute z-20" alt="" />
//             </div>
//           </div>
//           <div className="w-full h-full mt-40 mb-20 rounded-none ">
//             <div className="sm:relative flex justify-center items-center rounded-full bg-[#04A6C8] bg-opacity-10 w-full   ">
//               <img
//                 src="/images/Message Frame.png"
//                 className="absolute z-10 w-[80vw] h-[80vw]"
//                 alt=""
//               />
//               <img
//                 src="/images/QA Icon.png"
//                 className="absolute z-20"
//                 alt="QA Icon"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default AskQuestion;
import React from "react";
import CustomAccordion from "./CustomAccordion";

const accordionData = [
  {
    id: "item-1",
    title: "How do I communicate with my assistant?",
    content: `Techright has the following methods available:
    - Web app (through the login in the top right)
    - Dedicated phone number (calls & texts)
    - Email
    - WhatsApp
    - Microsoft Teams
    - Custom methods are available upon request.`,
  },
  {
    id: "item-2",
    title: "Dedicated assistants only",
    content:
      "Each assistant is dedicated exclusively to your business, ensuring personalized service.",
  },
  {
    id: "item-3",
    title: "How do I communicate with my assistant?",
    content:
      "We ensure continuous monitoring to maintain high-quality services.",
  },
  {
    id: "item-4",
    title: "How do I communicate with my assistant?",
    content:
      "We ensure continuous monitoring to maintain high-quality services.",
  },
  {
    id: "item-5",
    title: "How do I communicate with my assistant?",
    content:
      "We ensure continuous monitoring to maintain high-quality services.",
  },
];

const AskQuestion: React.FC = () => {
  return (
    <main className="bg-[#04A6C80A] w-full h-full py-16 bg-opacity-[5%]">
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-y-10 gap-x-20 mb-20">
        <div className="flex flex-col h-full  w-full md:w-1/2 justify-center items-center">
          <CustomAccordion data={accordionData} />
        </div>
        <div className="lg:w-[450px] w-full h-full pt-[5%] flex flex-col gap-y-5 mt-20 md:mt-0 mb-10 md:mb-0">
          <div className="hidden md:flex">
            <h1 className="text-left w-full text-xl md:text-[50px] font-black text-black mb-8 md:leading-[100%]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="relative pt-[25%] md:pt-0 flex justify-center items-center rounded-full md:bg-[#04A6C8] md:pl-5 md:bg-opacity-10 lg:w-[400px] lg:h-[400px] w-full h-full">
            <img
              src="/images/Message Frame.png"
              className="absolute z-10 object-cover md:w-[452px]  md:h-[452px] h-[100vw] w-[100vw]"
              alt="Message Frame"
            />
            <img
              src="/images/QA Icon.png"
              className="absolute z-20 md:w-[147px] md:h-[147px] h-[40vw] w-[40vw]"
              alt="QA Icon"
            />
          </div>
        </div>
        {/* <div className="w-full h-full mt-16 mb-16 hidden">
            <div className="relative flex justify-center items-center rounded-full bg-[#04A6C8] bg-opacity-10 w-full">
              <img
                src="/images/Message Frame.png"
                className="absolute z-10 object-cover w-[80vw] h-[80vw]"
                alt="Message Frame"
              />
              <img
                src="/images/QA Icon.png"
                className="absolute z-20 w-[60px] h-[60px]"
                alt="QA Icon"
              />
            </div>
          </div> */}
      </div>
    </main>
  );
};

export default AskQuestion;
