"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface IconCardProps {
  img: string;
  paragraph: string;
}

const IconCard: React.FC<IconCardProps> = ({ img, paragraph }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card
      className={`flex flex-col  justify-center items-center sm:w-[80%]  w-full h-full sm:h-[80%] rounded-3xl transition-transform transform hover:scale-105 duration-300 ease-in-out ${
        isChecked ? "bg-[#04A6C8] text-white" : "bg-white text-black"
      }`}
    >
      <CardHeader className="self-end -mt-2">
        <CardTitle>
          <Checkbox
            checked={isChecked}
            onCheckedChange={handleCheckboxChange}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center  w-[53.34px] h-[50.49px] p-2 sm:p-0 sm:w-[131px] -mt-6 sm:h-[124px] rounded-xl bg-[#E7FBFF]">
        <img src={img} alt="Icon" className="sm:w-[94px] sm:h-[94px]" />
      </CardContent>
      <CardFooter className="text-xs sm:text-lg font-semibold flex justify-center items-center text-center">
        <p>{paragraph}</p>
      </CardFooter>
    </Card>
  );
};

export default IconCard;
