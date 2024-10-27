import HomeFooter from "@/components/HomeFooter";
import { Button } from "@/components/ui/button";
import ReachYourIdeal from "@/components/ReachYourIdeal";
import PricePlanCard from "@/components/PricePlanCard";
import VoiceMessage from "@/components/common/VoiceMessage";
import ManagedRemote from "@/components/common/ManagedRemote";
import AskQuestion from "@/components/common/AskQuestion";
import Reviews from "@/components/Reviews";
import HowToStart from "@/components/common/HowToStart";
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
      <div className="relative w-full md:h-screen h-full pt-[28%] sm:pt-[10%]   flex flex-col lg:flex-row bg-[#04A6C80A] bg-opacity-[5%] items-center justify-items-center justify-center min-h-screen p-8 sm:p-20">
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
        <div className="relative flex justify-center items-center md:w-1/2 w-full h-full">
          <img
            src="/images/Customer Representative/Frame 22.png"
            className=" md:w-[573px] md:h-[510px] w-full "
            alt=""
          />
          <img
            src="/images/Customer Representative/pngwing.com (7) 1.png"
            className="absolute z-10 md:w-[434.98px] md:h-[550.18px]  w-[75%] "
            alt=""
          />
          <img
            src="/images/Customer Representative/Group.png"
            className="absolute z-10 bottom-2 md:left-0 right-32  w-[70%]  md:w-[323.56px] md:h-[261.52px] rounded-lg"
            alt=""
          />
          <img
            src="/images/Customer Representative/Group (1).png"
            className="absolute z-10 -bottom-5 sm:-bottom-20 sm:right-0 -right-7   md:w-[321px] md:h-[219px] w-[70%]   rounded-lg"
            alt=""
          />
        </div>
      </div>
      <HomeFooter />

      <section className="flex flex-col justify-center items-center w-full h-auto mt-10">
        <h1 className="flex justify-center items-center gap-x-4 text-3xl md:text-5xl font-bold text-black text-center pb-16">
          How Techright Real Estate Assistants Help You
        </h1>

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
