import HomeFooter from "@/components/HomeFooter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReachYourIdeal from "@/components/ReachYourIdeal";
import GeneralVSCard from "@/components/GeneralVSCard";
import PricePlanCard from "@/components/PricePlanCard";
import VoiceMessage from "@/components/common/VoiceMessage";
import ManagedRemote from "@/components/common/ManagedRemote";
import AskQuestion from "@/components/common/AskQuestion";

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

  const secondCardData = [
    {
      img: "/images/Mask group (2).png",
      heading: "Share your needs",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      img: "/images/Mask group (3).png",
      heading: "Choose the best fit or let us do it",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      img: "/images/Mask group (4).png",
      heading: "Hire your VA ",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
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
      isHighlighted: true,
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
  ];

  return (
    <>
      <div className="relative w-full  h-full sm:mt-[2%] pt-[30%] flex flex-col  sm:flex-row bg-[#e9f7fa]  items-center justify-items-center justify-center min-h-screen p-8 sm:p-20 gap-y-20">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-1/2 w-full">
          <div className="flex flex-col items-start justify-items-center gap-y-10 justify-center p-8 sm:p-20 ">
            <h1 className="lg:text-[58px] text-4xl md:leading-[62px] w-full  font-black text-black text-center lg:text-start">
              Power <span className="text-[#04A6C8]"> Your Growth </span>
              with Enterprise Solutions & Teams
            </h1>
            <p className="lg:text-start text-center text-[17px] font-semibold w-full">
              Start delegating your work, tasks & processes to a dedicated
              assistant, full-time team member on a month-to-month subscription
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-[#04A6C8] self-center md:self-start text-white rounded-lg px-5 py-3   "
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:w-1/2 w-full h-full md:mt-[10%]">
          <img
            src="/images/Polygon 18.png"
            className="lg:w-[441px] lg:h-[434px] h-[80%] w-full"
            alt=""
          />
          <img
            src="/images/person 1.png"
            alt=""
            className="absolute z-10 lg:w-[446px] lg:h-[500px] h-[60vh] w-full md:-mt-16 -mt-10"
          />

          <Button
            variant="outline"
            className="absolute top-28 lg:left-28 left-2 z-20 bg-white size-[82px]"
            size="icon"
          >
            <Avatar className="">
              <AvatarImage src="images/icon-park-outline_customer.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
          <Button
            variant="outline"
            className="absolute top-20 lg:right-28 right-2 z-20 bg-white size-[82px]"
            size="icon"
          >
            <Avatar className="">
              <AvatarImage src="images/Mask group.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
      <HomeFooter />
      <section className="flex flex-col justify-center items-center w-full h-auto mt-10">
        <h1 className="flex justify-center items-center gap-x-4 text-[25px] md:text-5xl font-black text-black text-center pb-16">
          What can General VAs Do?
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-7 px-10 md:px-0  w-full">
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
      <main className="md:flex flex-col hidden justify-center items-center w-full h-auto py-16 bg-[#013742] text-white">
        <div className="absolute -left-52 bg-[#FFFFFF] hidden md:flex bg-opacity-5 w-[20vw] h-[500px] z-10 rounded-r-full"></div>
        <h1 className="flex justify-start items-start gap-x-4  md:text-5xl font-bold  text-center pb-16 ">
          Here’s how you can start
        </h1>
        <div className="flex  flex-wrap justify-center items-center gap-20 w-full">
          {secondCardData.map((card, index) => (
            <Card
              key={index}
              className="relative flex flex-col justify-center text-white  items-center w-[340px] gap-y-3 h-[256px] rounded-3xl bg-[#0C5C6C]"
            >
              <CardHeader className="self-end">
                <CardTitle className="flex justify-center items-center absolute left-7 -top-6 size-[80px] rounded-3xl bg-[#04A6C8]">
                  <img src={card.img} alt="Icon" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-lg font-semibold">{card.heading}</h2>
              </CardContent>
              <CardFooter className="flex flex-col justify-center items-center text-center">
                <p>{card.para}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <>
        <section className="md:hidden flex flex-col justify-center items-center h-auto mt-5 rounded-[50px] text-white mx-auto w-[90%] bg-[#013742] py-16 mb-20">
          <main>
            <h1 className="flex justify-start items-start gap-x-4 text-white  text-[30px] leading-7 font-bold  text-center pb-16 ">
              Here’s how you <br />
              can start
            </h1>
            <div className="flex flex-col justify-center items-center gap-y-16">
              <div className="flex flex-col justify-center items-center gap-y-2">
                <div className="flex justify-center items-center rounded-full border-2 border-white size-[56.97px]">
                  <img
                    src="/images/Section Icon/Share.png"
                    alt=""
                    className="size-[27.5px]"
                  />
                </div>
                <p>Share your needs</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-2">
                <div className="flex justify-center items-center rounded-full border-2 border-white size-[56.97px]">
                  <img
                    src="/images/Section Icon/Click.png"
                    alt=""
                    className="size-[27.5px]"
                  />
                </div>
                <p className="text-center">
                  Choose the best fit or <br />
                  let us do it 
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-2">
                <div className="flex justify-center items-center rounded-full border-2 border-white size-[56.97px]">
                  <img
                    src="/images/Section Icon/Search.png"
                    alt=""
                    className="size-[27.5px]"
                  />
                </div>
                <p>Hire your VA </p>
              </div>
            </div>
          </main>
        </section>
      </>
      <main className="hidden md:flex flex-col justify-center items-center w-full h-auto py-16  ">
        <h1 className="flex justify-start items-start gap-x-4 text-black  md:text-5xl text-4xl font-black  text-center pb-16 ">
          Pricing
        </h1>
        <div className="flex flex-row justify-center items-center gap-x-5 gap-y-7 w-full">
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
      <AskQuestion />
      <ReachYourIdeal />
    </>
  );
}
