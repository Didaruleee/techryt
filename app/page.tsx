import HomeFooter from "@/components/HomeFooter";
import HomePage from "@/components/HomePage";
import OutSourcing from "./components/out-source/OutSourcing";
import CalculateSaving from "./components/Slash/CalculateSaving";
import ProcessAndCompliance from "./components/Process-compliance/ProcessAndCompliance";
import Title from "./components/title/Title";
import Reviews from "@/components/Reviews";
import ReachYourIdeal from "@/components/ReachYourIdeal";

export default function Home() {
  return (
    <>
      <HomePage />
      <HomeFooter />
      <OutSourcing />
      <CalculateSaving />
      <ProcessAndCompliance />
      <Title />
      <Reviews />
      <ReachYourIdeal />
    </>
  );
}
