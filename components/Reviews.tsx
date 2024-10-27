import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Example dynamic data for reviews
const reviews = [
  {
    stars: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nisi.",
    name: "Guide Mangani",
    company: "Field Control Analytics",
    image: "/images/google.png",
    img: "/images/Ellipse 1.png",
    score: "99%",
    improvement: "Roll increase",
  },
  {
    stars: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nisi.",
    name: "Guide Mangani",
    company: "Field Control Analytics",
    image: "/images/linkedin.png",
    img: "/images/Ellipse 2.png",
    score: "99%",
    improvement: "Roll increase",
  },
  {
    stars: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nisi.",
    name: "Guide Mangani",
    company: "Field Control Analytics",
    image: "/images/facebook.png",
    img: "/images/Ellipse 3.png",
    score: "99%",
    improvement: "Roll increase",
  },
  {
    stars: 5,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, nisi.",
    name: "Guide Mangani",
    company: "Field Control Analytics",
    image: "/images/google.png",
    img: "/images/Ellipse 1.png",
    score: "99%",
    improvement: "Roll increase",
  },
];

const Reviews = () => {
  return (
    <div className="flex justify-center items-center w-full h-full py-10 px-10 lg:px-36 ">
      <Carousel className="w-full ">
        <CarouselContent className="flex flex-col md:flex-row w-[81vw]  ">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/3 mb-4 md:mb-0 flex justify-center items-center "
            >
              <Card className="flex  flex-col justify-between  items-start w-full sm:w-[90%]  sm:h-[467px] h-auto  px-5   rounded-3xl">
                <CardHeader className="w-full ">
                  <CardTitle className="flex justify-between items-center w-full ">
                    <div className="flex justify-center items-center gap-x-3">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <Star key={i} fill="#FFC107" color="#FFC107" />
                      ))}
                    </div>
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-start  items-start gap-y-16 ">
                  <p className="text-xl font-semibold">{review.content}</p>
                  <div className="flex justify-start text-start  gap-x-5  items-center w-full h-full ">
                    <Avatar>
                      <AvatarImage src={review.img} alt={review.name} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="-mt-4">
                      <h3 className="font-bold">{review.name}</h3>
                      <p>{review.company}</p>
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col justify-start items-start border-t w-full -ml-5">
                  <p className="font-bold text-[40px] text-black">
                    {review.score}
                  </p>
                  <p className="font-bold text-xl">{review.improvement}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex absolute -left-4 z-10 transform -translate-y-1/2 top-1/2 " />
        <CarouselNext className="hidden md:flex absolute right-5 z-10 transform -translate-y-1/2 top-1/2" />
      </Carousel>
    </div>
  );
};

export default Reviews;
