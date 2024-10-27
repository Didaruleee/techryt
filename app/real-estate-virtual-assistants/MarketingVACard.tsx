import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IconCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const MarketingVACard: React.FC<IconCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <Card
      className="flex flex-row  justify-start items-center w-full md:w-1/3 gap-y-5 px-3 py-2 md:px-0 md:py-0  rounded-2xl md:rounded-3xl 
       hover:bg-[#04A6C8] hover:text-white  bg-white text-black"
    >
      <CardHeader>
        <CardTitle className="flex  justify-center items-center w-[62px] h-[58px] md:w-[131] md:h-[124px] rounded-xl bg-[#E7FBFF]">
          <img
            src={imageUrl}
            alt="Icon"
            className="w-full h-full md:w-[87px] md:h-[87px] "
          />
        </CardTitle>
      </CardHeader>{" "}
      <CardContent className="flex flex-col justify-start items-start text-start">
        <h2 className="text-sm md:text-xl font-bold">{title}</h2>
        <p className="text-xs md:text-base">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MarketingVACard;
