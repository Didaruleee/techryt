import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CardNotify = () => {
  return (
    <Card className="flex flex-col justify-center items-center sm:w-[250px] lg:w-[303px] w-[85vw]  sm:h-[350px] lg:h-[431px] gap-y-2 sm:gap-y-7 rounded-2xl bg-[#0E687A] border-[#0E687A] transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="text-3xl  lg:text-[45px] font-black text-center text-white md:leading-[60px]  -mt-5 mb-5  md:-mb-10">
          My budget <br /> $1800/-
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          variant="default"
          size="lg"
          className="bg-[#04A6C8] text-base text-white rounded-[37px] px-14 py-6"
        >
          Calculate
        </Button>
      </CardContent>
      <CardFooter>
        <p className="text-center text-white text-sm lg:text-lg">
          Monthly payment, no setup fees, pay only when you approve the expert.
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardNotify;
