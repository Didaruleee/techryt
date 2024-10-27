// import React from "react";
// import IconCard from "./IconCard";

// const data = [
//   {
//     paragraph: "Live chat support",
//     img: "images/icons/image 293.png",
//   },
//   {
//     paragraph: "Executive Assistance",
//     img: "images/icons/image 301.png",
//   },
//   {
//     paragraph: "Documentation & transcription",
//     img: "images/icons/image 302.png",
//   },
//   {
//     paragraph: "Financial reporting",
//     img: "images/icons/image 308.png",
//   },
//   {
//     paragraph: "Appointment Setting",
//     img: "images/icons/image 309.png",
//   },
//   {
//     paragraph: "Customer onboarding",
//     img: "images/icons/image 311.png",
//   },
//   {
//     paragraph: "Dispatch & ticketing",
//     img: "images/icons/image 312.png",
//   },
//   {
//     paragraph: "Billing and Collection Specialist",
//     img: "images/icons/image 313.png",
//   },
//   {
//     paragraph: "Social Media support",
//     img: "images/icons/image 314.png",
//   },
//   {
//     paragraph: "Live transfer",
//     img: "images/icons/image 318.png",
//   },
//   {
//     paragraph: "Calendar management",
//     img: "images/icons/image 319.png",
//   },
//   {
//     paragraph: "Graphic design",
//     img: "images/icons/image 320.png",
//   },
//   {
//     paragraph: "Web Development",
//     img: "images/icons/image 321.png",
//   },
//   {
//     paragraph: "UI/ UX design",
//     img: "images/icons/image 322.png",
//   },
//   {
//     paragraph: "Collections",
//     img: "images/icons/image 323.png",
//   },
//   {
//     paragraph: "Technical support",
//     img: "images/icons/image 324.png",
//   },
// ];

// const OutSourcing = () => {
//   return (
//     <div className="flex flex-col justify-center items-center w-full h-auto mb-24">
//       <div className="flex justify-center items-center h-[365px] bg-[#0AA1C0] w-full">
//         <h1 className="text-4xl sm:text-5xl font-bold text-white text-center pb-16">
//           Comprehensive outsourcing <br /> solutions for large organizations
//         </h1>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1%] px-4 sm:px-16 md:px-40 w-[95%] -mt-16">
//         {data.map((item, index) => (
//           <IconCard key={index} img={item.img} paragraph={item.paragraph} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OutSourcing;
// import HomeFooter from "@/components/HomeFooter";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import ReachYourIdeal from "@/components/ReachYourIdeal";
import GeneralVSCard from "@/components/GeneralVSCard";
// import PricePlanCard from "@/components/PricePlanCard";
// // import VoiceMessage from "@/components/common/VoiceMessage";
// import ManagedRemote from "@/components/common/ManagedRemote";
// import AskQuestion from "@/components/common/AskQuestion";

export default function Page() {
  const cardsData = [
    {
      title: "Email and Calendar Management",
      description:
        "Keep your inbox and schedule organized so you never miss a meeting or deadline.",
      imageUrl: "/images/Mask group (2).png",
    },
    {
      title: "Task Prioritization",
      description:
        "Help you prioritize daily tasks and manage time more efficiently.",
      imageUrl: "https://github.com/shadcn.png",
    },
    {
      title: "Social Media Management",
      description:
        "Manage your social media accounts to keep engagement high and grow your audience.",
      imageUrl: "https://github.com/shadcn.png",
    },
    {
      title: "Customer Support",
      description: "Assist with customer queries and improve satisfaction.",
      imageUrl: "https://github.com/shadcn.png",
    },
    {
      title: "Research and Reporting",
      description:
        "Conduct thorough research and create reports that help decision making.",
      imageUrl: "https://github.com/shadcn.png",
    },
  ];

  // const secondCardData = [
  //   {
  //     img: "/images/Mask group (2).png",
  //     heading: "Share your needs",
  //     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   },
  //   {
  //     img: "/images/Mask group (3).png",
  //     heading: "Choose the best fit or let us do it",
  //     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   },
  //   {
  //     img: "/images/Mask group (4).png",
  //     heading: "Hire your VA ",
  //     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   },
  // ];

  // const plans = [
  //   {
  //     price: "$1099",
  //     planType: "Full-time",
  //     hours: "160 hours/month",
  //     features: [
  //       "Free replacement",
  //       "Customer Success Manager",
  //       "Quality control and supervision",
  //       "Company issued devices",
  //       "Your timezone - Any hours you want",
  //     ],
  //     saving: "21%",
  //     isHighlighted: true,
  //   },
  //   {
  //     price: "$699",
  //     planType: "Part-time",
  //     hours: "80 hours/month",
  //     features: [
  //       "Free replacement",
  //       "Customer Success Manager",
  //       "Quality control and supervision",
  //       "Company issued devices",
  //       "Your timezone - Any hours you want",
  //     ],
  //     saving: "21%",
  //     isHighlighted: false,
  //   },
  // ];

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-auto mt-10">
        <div className="flex justify-center items-center h-[365px] bg-white w-full">
          {" "}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black text-center pb-0">
            Top TECH RYT services to <br />{" "}
            <h1 className="text-[#04A6C8]">pump up your revenues</h1>{" "}
          </h1>{" "}
        </div>
        <h1 className="text-[20px] text-black font-bold -mt-20 pb-10">
          select as many as you need
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-12 px-10 md:px-0 w-full ">
          {cardsData.map((card, index) => (
            <GeneralVSCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <Button
          variant="default"
          size="lg"
          className="bg-[#04A6C8] text-white  uppercase rounded-full my-16 px-5 py-3 "
        >
          Get Started
        </Button>
      </section>
    </>
  );
}
