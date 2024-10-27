import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="flex z-10 flex-col self-stretch pt-16 mt-20 w-full bg-cyan-500 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1384px] max-md:max-w-full">
        <h2 className="text-5xl font-black text-white leading-[59px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Reach your ideal customer with Tech Ryt
        </h2>
        <div className="flex gap-5 self-start py-4 pr-16 pl-5 mt-3 text-black bg-white rounded-2xl max-md:pr-5">
          <div
            className="flex shrink-0 bg-cyan-500 rounded-2xl h-[78px] w-[78px]"
            aria-hidden="true"
          />
          <div className="flex flex-col self-start">
            <div className="flex gap-1.5 self-start text-lg font-bold leading-none text-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca5607a54093ce944b4516e66f64978425de9e66cd2dbc06e679788e055280cf?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                alt=""
                className="object-contain shrink-0 my-auto w-4 aspect-square"
              />
              <span className="basis-auto">Schedule a call</span>
            </div>
            <div className="mt-1.5 text-base font-medium leading-6">
              book anytime, today, or this week
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-5 mt-24 w-full text-base font-semibold leading-8 text-center text-white bg-sky-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1390px] max-md:max-w-full">
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e15e45c685aa082476dfa0dd42a3e37bf21d379121739e4e0480abe006bab3?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
            />
            <div className="basis-auto">Free contact shows a month</div>
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e15e45c685aa082476dfa0dd42a3e37bf21d379121739e4e0480abe006bab3?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
            />
            <div className="basis-auto">Instant access</div>
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e15e45c685aa082476dfa0dd42a3e37bf21d379121739e4e0480abe006bab3?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
            />
            <div className="basis-auto">280,000 companies love us</div>
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e15e45c685aa082476dfa0dd42a3e37bf21d379121739e4e0480abe006bab3?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
            />
            <div className="flex-auto">GDPR compliant & CCPA compliant</div>
          </div>
          <div className="flex gap-3 self-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e15e45c685aa082476dfa0dd42a3e37bf21d379121739e4e0480abe006bab3?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
            />
            <div className="basis-auto">Monthly & yearly contracts</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e15e45c685aa082476dfa0dd42a3e37bf21d379121739e4e0480abe006bab3?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
              alt=""
              className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
            />
            <div className="basis-auto">Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
