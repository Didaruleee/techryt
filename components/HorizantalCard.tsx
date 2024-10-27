"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface IconCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HorizantalCard: React.FC<IconCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <Card
      className="flex flex-row  justify-between items-center w-full md:w-1/3 gap-y-5 px-3 py-2 md:px-3 md:py-2  rounded-2xl md:rounded-3xl 
    hover:bg-[#04A6C8] hover:text-white bg-white text-black"
    >
      <CardContent className="flex object-center object-cover justify-center items-center w-[62px] h-[58px] md:w-[131px] md:h-[124px] rounded-xl bg-[#E7FBFF]">
        {" "}
        <img
          src={imageUrl}
          alt="Icon"
          className="w-full h-full md:size-[82px]"
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start ">
        <h2 className="text-sm md:text-lg font-semibold">{title}</h2>
        <p className="text-xs md:text-base">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default HorizantalCard;
