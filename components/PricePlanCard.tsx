import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "./ui/card";

interface ServicePlanCardProps {
  price: string;
  planType: string;
  hours: string;
  features: string[];
  saving: string;
  isHighlighted: boolean;
}

const PricePlanCard: React.FC<ServicePlanCardProps> = ({
  price,
  planType,
  hours,
  features,
  saving,
  isHighlighted,
}) => {
  return (
    <Card
      className={`flex flex-col justify-center items-center gap-y-5 rounded-3xl px-5  ${
        isHighlighted ? "bg-[#013742] text-white" : "bg-white text-black"
      }`}
    >
      <CardHeader className="self-end w-full -mb-7">
        <div className="self-end">
          <Button className="rounded-3xl uppercase bg-[#04A6C8]">
            {saving} saving
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="flex flex-col justify-start items-start gap-x-4 mb-5 px-6">
          <div className="flex justify-start items-center gap-x-4">
            <h1 className="text-2xl font-bold">{price}</h1>
            <p className="opacity-65">/month</p>
          </div>
          <h2 className="text-xl font-bold">
            Virtual Assistant <br /> {planType}
          </h2>
        </CardTitle>

        <ul className="text-lg space-y-5">
          <li>
            <div className="flex items-center space-x-2">
              <Checkbox
                className="bg-yellow-400 size-[24px] rounded-full"
                checked={true}
              />
              <label className="leading-none"> {hours} per agent</label>
            </div>
          </li>
          {features.map((feature, index) => (
            <li key={index}>
              <div className="flex items-center space-x-2">
                <Checkbox
                  className="bg-yellow-400 size-[24px] rounded-full"
                  checked={true}
                />
                <label className="leading-none">{feature}</label>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center w-full px-10 text-center">
        <Button className="rounded-3xl text-center w-full">Choose plan</Button>
      </CardFooter>
    </Card>
  );
};

export default PricePlanCard;
