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
import HorizantalCard from "@/components/HorizantalCard";

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
      <div className="relative w-full md:h-screen h-full   flex flex-col lg:flex-row bg-[#04A6C80A] bg-opacity-[5%] items-center justify-items-center justify-center min-h-screen p-8 sm:p-20">
        <div className="flex flex-col justify-start items-start lg:w-1/2 w-full">
          <div className="flex flex-col items-start justify-items-center gap-y-10 justify-center p-8 sm:p-20 ">
            <h1 className="lg:text-7xl text-[40px] leading-10 font-bold text-black text-center lg:text-start">
              Scalable support teams for teams of all sizes
            </h1>
            <p className="text-center lg:text-start">
              Create content, create campaigns, manage socials, drive
              conversations, schedule and manage content calendar
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
        <div className="relative flex justify-center items-center lg:w-1/2 w-full h-full">
          <Button className="flex justify-center absolute z-20 lg:left-20 left-0 bottom-30 items-center gap-x-3 bg-white text-black  hover:text-black ">
            <div className="size-[30px] rounded-xl py-2 flex justify-center bg-[#04A6C8] items-center text-black">
              <img
                src="/images/Customer Service/icon 1.png"
                alt=""
                className="size-[20px]"
              />
            </div>{" "}
            Techright Sales
          </Button>
          <img
            src="/images/Customer Service/Frame 22.png"
            className="w-[80vw] h-[80vw] md:w-[573px] md:h-[510px]"
            alt=""
          />
          <img
            src="/images/Customer Service/Person.png"
            className="absolute z-10 w-[70vw] -mt-16 md:mt-2 h-[90vw] md:w-[444.98px] md:h-[615.18px]"
            alt=""
          />
        </div>
      </div>
      <HomeFooter />

      {/* Second Hero Section */}
      <>
        <div className="relative w-full lg:h-screen h-full flex flex-col lg:flex-row bg-[#F8F8F8] bg-opacity-[5%] items-center justify-items-center justify-center min-h-screen p-8 sm:p-20">
          <div className="flex flex-col justify-start items-start lg:w-1/2 w-full">
            <div className="flex flex-col items-start justify-items-center gap-y-10  justify-center p-8 sm:p-10 ">
              <h1 className="lg:text-7xl text-[40px] leading-10 font-bold text-black text-center lg:text-start">
                Techright Customer service representative for{" "}
                <p className="text-[#04A6C8] inline">Enterprise teams</p>
              </h1>

              <p className="text-center lg:text-start">
                Create content, create campaigns, manage socials, drive
                conversations, schedule and manage content calendar
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center lg:w-1/2 w-full h-full">
            <div className="flex justify-center rounded-xl px-3 py-3 absolute z-20 lg:left-40 left-0 top-20 lg:top-40 items-center gap-x-3 bg-white text-black  hover:text-black ">
              <img
                src="/images/Customer Service/facebook.png"
                alt=""
                className="size-[30px]"
              />
              Social Media Links
            </div>
            <div className="flex justify-center rounded-xl px-3 py-3 absolute z-20 lg:right-[65%] right-0 bottom-1/3 items-center gap-x-3 bg-white text-black  hover:text-black ">
              <img
                src="/images/Customer Service/google.png"
                alt=""
                className="size-[30px]"
              />
              Social Media Links
            </div>
            <img
              src="/images/Customer Service/Frame 23.png"
              className=" lg:w-[573px] lg:h-[510px] w-full"
              alt=""
            />
          </div>
        </div>
      </>

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
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-7 py-16 px-10 md:px-0 w-full">
          {cardsData.map((card, index) => (
            <HorizantalCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
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
