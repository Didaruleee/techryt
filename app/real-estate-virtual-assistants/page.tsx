import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";

import ReachYourIdeal from "@/components/ReachYourIdeal";
import PricePlanCard from "@/components/PricePlanCard";
import VoiceMessage from "@/components/common/VoiceMessage";
import ManagedRemote from "@/components/common/ManagedRemote";
import AskQuestion from "@/components/common/AskQuestion";
import Reviews from "@/components/Reviews";
import HowToStart from "@/components/common/HowToStart";
import GeneralVSCard from "@/components/GeneralVSCard";
import Image from "next/image";

export default function Page() {
  const cardsData = [
    {
      title: "Create Campaigns",
      description:
        "Plan, schedule, and post on social media to engage with your audience.",
      imageUrl: "/images/icons/image 331.png",
    },
    {
      title: "Graphic Design",
      description:
        "Leverage photoshop, canva and other tools to turn ideas into content",
      imageUrl: "/images/icons/image 293.png",
    },
    {
      title: "Social Media Management",
      description:
        "Manage your social media accounts to keep engagement high and grow your audience.",
      imageUrl: "/images/icons/image 293.png",
    },
    {
      title: "Customer Support",
      description: "Assist with customer queries and improve satisfaction.",
      imageUrl: "/images/icons/image 293.png",
    },
    {
      title: "Research and Reporting",
      description:
        "Conduct thorough research and create reports that help decision making.",
      imageUrl: "/images/icons/image 293.png",
    },
  ];

  const plans = [
    {
      price: "$1099",
      planType: "Full-time",
      hours: "160 hours/month",
      features: [
        "Free replacement",
        "Customer Success Manager",
        "Quality control and supervision",
        "Company issued devices",
        "Your timezone - Any hours you want",
      ],
      saving: "21%",
      isHighlighted: false,
    },
    {
      price: "$699",
      planType: "Part-time",
      hours: "80 hours/month",
      features: [
        "Free replacement",
        "Customer Success Manager",
        "Quality control and supervision",
        "Company issued devices",
        "Your timezone - Any hours you want",
      ],
      saving: "21%",
      isHighlighted: false,
    },
    {
      price: "$1040",
      planType: "Enterprise",
      hours: "80 hours/month",
      features: [
        "Full customization",
        "End-to-end teams",
        "Dialer Management ",
        "Your timezone - Any hours you want",
        "Security and compliance",
      ],
      saving: "11%",
      isHighlighted: true,
    },
  ];

  return (
    <>
      <div>
        <div className="relative w-full h-full  pt-[10vh] flex flex-col md:flex-row bg-[#04A6C80A] bg-opacity-[5%] items-center justify-items-center justify-between md:justify-center  p-8 sm:p-20">
          <div className="flex flex-col justify-start items-start md:w-1/2 w-full">
            <div className="flex flex-col w-full md:items-start items-center md:justify-items-center gap-y-10 justify-center p-8 sm:p-20 ">
              <h1 className="text-3xl font-black text-black md:text-start text-center bg-red-50 w-[20rem]">
                Streamline Your Real Estate Operations
              </h1>
              <p className="text-center items-center md:items-start lg:text-start">
                Close more by streamlining your workflow: Let Our Expert Real
                Estate Virtual Assistants Manage CRM, Marketing, and Admin Tasks
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-[#04A6C8] text-white rounded-lg px-5 py-3 "
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center md:w-1/2 w-full">
            <div className="flex justify-start items-center gap-x-5 ">
              <div className="lg:w-[282px] lg:h-[300px] w-[60%] h-[60%] rounded-xl bg-[#04A6C8]"></div>
              <div className="lg:w-[127px] lg:h-[300px] w-[60%] h-[60%] rounded-xl bg-[#1570DB]"></div>{" "}
              <img
                src="/images/call label.png"
                className="lg:w-[195.2px] lg:h-[151.19px] w-[40%]  absolute z-10 -bottom-1 lg:bottom-2 right-1"
                alt=""
              />
              <Button
                variant="default"
                className="bg-white text-black rounded-3xl top-3 absolute right-16 "
                size="lg"
              >
                24/7 Call Response
              </Button>
              <img
                src="/images/Msg Notification.png"
                className="w-[15%] top-20 lg:w-[74.33px] lg:h-[55.72px] absolute lg:-top-20 right-16 lg:right-40"
                alt=""
              />
            </div>
            <img
              src="/images/call person.png"
              alt=""
              className="absolute w-[80vw] h-[80vw]  lg:w-[520px] lg:h-[494px]"
            />
          </div>
        </div>
        <Image
          src="/images/realestate.png"
          alt="Background Image"
          width={1240}
          height={647}
          className="bg-[#e9f7fa] bg-opacity-15 w-full h-full -rotate-180 -mt-[8%]"
        />
      </div>
      <HomeFooter />
      <section className="flex flex-col justify-center items-center w-full h-auto mt-10">
        <h1 className="flex justify-center items-center gap-x-4 text-3xl md:text-5xl font-bold text-black text-center pb-16">
          A little bit of what your marketing VA can do?
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-7 px-10 md:px-0 w-full">
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
      <ManagedRemote />
      <HowToStart className="w-full  md:flex rounded-none " />

      <main className="flex flex-col justify-center items-center w-full h-auto py-16  ">
        <h1 className="flex justify-start items-start gap-x-4 text-black  text-5xl font-bold  text-center pb-16 ">
          Pricing
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-7 w-full">
          {plans.map((plan, index) => (
            <PricePlanCard
              key={index}
              price={plan.price}
              planType={plan.planType}
              hours={plan.hours}
              features={plan.features}
              saving={plan.saving}
              isHighlighted={plan.isHighlighted}
            />
          ))}
        </div>
      </main>
      <VoiceMessage />
      <Reviews />
      <AskQuestion />
      <ReachYourIdeal />
    </>
  );
}
