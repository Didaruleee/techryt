"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface IconCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const GeneralVSCard: React.FC<IconCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card
      className={`flex flex-col shadow-lg justify-center items-center w-full md:w-1/4 gap-y-2 px-4 py-4 rounded-2xl 
      ${isChecked ? "bg-[#04A6C8] text-white" : "bg-white text-black"}`}
    >
      <div className="flex w-full justify-end">
        <Checkbox
          checked={isChecked}
          onCheckedChange={handleCheckboxChange}
          className="mr-2 mt-2"
        />
      </div>
      <CardContent className="flex justify-center items-center w-[62px] h-[58px] md:w-[100px] md:h-[100px] p-3 rounded-xl bg-[#E7FBFF]">
        <img src={imageUrl} alt="Icon" className="w-full h-full" />
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center text-center mt-4">
        <h2
          className={`text-sm md:text-lg font-semibold ${
            isChecked ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-xs md:text-sm ${
            isChecked ? "text-white" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </CardFooter>
    </Card>
  );
};

export default GeneralVSCard;
