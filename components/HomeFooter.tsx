import React from "react";

const HomeFooter: React.FC = () => {
  const images = [
    { src: "images/5.png", alt: "Image 5" },
    { src: "images/4.png", alt: "Image 4" },
    { src: "images/3.png", alt: "Image 3" },
    { src: "images/2.png", alt: "Image 2" },
    { src: "images/5.png", alt: "Image 5" },
    { src: "images/4.png", alt: "Image 4" },
    { src: "images/3.png", alt: "Image 3" },
    { src: "images/2.png", alt: "Image 2" },
    { src: "images/5.png", alt: "Image 5" },
    { src: "images/4.png", alt: "Image 4" },
    { src: "images/3.png", alt: "Image 3" },
    { src: "images/2.png", alt: "Image 2" },
    { src: "images/5.png", alt: "Image 5" },
    { src: "images/4.png", alt: "Image 4" },
    { src: "images/3.png", alt: "Image 3" },
    { src: "images/2.png", alt: "Image 2" },
    { src: "images/5.png", alt: "Image 5" },
    { src: "images/4.png", alt: "Image 4" },
    { src: "images/3.png", alt: "Image 3" },
    { src: "images/2.png", alt: "Image 2" },
  ];

  return (
    <div className="h-auto bg-white w-full flex flex-col justify-between items-center py-7">
      <p className="text-center text-sm md:text-base">
        +8000 businesses using ARA for their forms
      </p>
      <div className="w-full overflow-hidden mt-4">
        <div className="flex w-[calc(100% * 2)] animate-scroll space-x-4 md:space-x-8">
          {images.concat(images).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-10 md:h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
