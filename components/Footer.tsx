import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-auto px-5 md:px-20 pt-10 md:pt-20 ">
      <div className="w-full bg-[#04A6C8] bg-opacity-[5%] rounded-t-3xl">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center w-full p-5  md:p-10    ">
          <div className="flex flex-wrap justify-between w-full">
            {[
              "Advertisers",
              "Ad Formats",
              "Resources",
              "Company",
              "Our contacts",
            ].map((section, index) => (
              <ul
                key={index}
                className="text-sm md:text-lg mb-5 md:mb-0 w-1/2 md:w-auto md:mr-5"
              >
                <li className="mb-3 font-bold">{section}</li>
                <li className="text-sm hover:underline hover:text-blue-600 hover:cursor-pointer">
                  Benefits for Advertisers
                </li>
                <li className="text-sm hover:underline hover:text-blue-600 hover:cursor-pointer">
                  Pricing Models
                </li>
                <li className="text-sm hover:underline hover:text-blue-600 hover:cursor-pointer">
                  Self-Serve Platform
                </li>
                <li className="text-sm hover:underline hover:text-blue-600 hover:cursor-pointer">
                  RTB traffic
                </li>
                <li className="text-sm hover:underline hover:text-blue-600 hover:cursor-pointer">
                  Publishers
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full   h-auto pt-5 mt-10  px-10 ">
          <div className="flex  flex-col md:flex-row justify-between   items-start w-full mb-5  ">
            <div className="flex flex-row  items-start justify-between w-full md:w-1/5 gap-y-2  sm:gap-y-0 sm:items-center mb-5 md:mb-0">
              <p className="mr-2 ">Follow us:</p>
              <div className="flex gap-x-3 ">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Avatar key={index} className="size-[25px] sm:size-[40px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      height={50}
                      width={50}
                      alt="Facebook Icon"
                      className="rounded-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="flex gap-x-3 self-center md:self-end ">
              {Array.from({ length: 4 }).map((_, index) => (
                <Avatar key={index} className="size-[25px] sm:size-[40px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-full mb-5 ">
            <ul className="flex flex-wrap md:flex-row justify-center md:justify-start border-t-2  items-center gap-y-4  sm:flex-row  md:gap-x-4 text-xs sm:text-sm md:text-lg w-full">
              <li className="hidden sm:block">© 2013-2024</li>
              <li className="w-1/2 md:w-fit font-bold md:font-normal text-base">
                Terms & Policies
              </li>
              <li className="w-1/2 md:w-fit font-bold md:font-normal text-base">
                Terms for Advertisers
              </li>
              <li className="w-1/2 md:w-fit font-bold md:font-normal text-base">
                Terms for Publishers
              </li>
              <li className="w-1/2 md:w-fit font-bold md:font-normal text-base">
                Privacy Policy
              </li>
              <li className="hidden sm:block">Cookies Policy</li>
            </ul>
            <Button
              variant="link"
              className="hidden w-1/6  md:flex text-sm md:text-lg"
            >
              Report Abuse <ChevronRightIcon />
            </Button>
          </div>

          <div className="flex justify-center md:justify-start gap-x-5 items-center  w-full mt-5">
            <p className="block sm:hidden">© 2013-2024</p>
            <p className="text-sm md:text-lg">mytechhryt.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
