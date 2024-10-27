import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="md:px-20 mt-36 max-w-full bg-cyan-950 rounded-[40px] w-full md:w-[90%] mb-10 max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col md:w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-stretch pl-2.5 text-white max-md:max-w-full">
              <h2 className="self-center md:self-start text-4xl md:text-5xl font-black leading-none max-md:text-4xl">
                Newsletters
              </h2>
              <p className="text-center mt-7 md:text-xl md:font-medium leading-7 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s,
              </p>
            </div>
            <form className="w-full mt-10">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="px-3 py-5  md:px-10 md:py-7 mt-10 max-w-full md:text-xl md:font-medium leading-none bg-white rounded-[187px] text-cyan-950 text-opacity-60 w-full md:w-[391px] max-md:px-5 max-md:mt-10"
              />
              <div className="flex  md:gap-10 py-2.5 pr-2.5 md:pl-10 mt-8 max-w-full bg-white rounded-[187px] w-full md:w-[577px] max-md:pl-5">
                <label htmlFor="email" className="sr-only">
                  Enter Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email Address"
                  className="my-auto md:text-xl md:font-medium leading-none text-cyan-950 text-opacity-60 bg-transparent border-none focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex justify-center items-center w-[88.44px] h-[25.74pxpx] flex-1 gap-4 px-3 py-5  md:px-9 md:py-5 md:text-xl md:font-bold leading-none text-white whitespace-nowrap md:aspect-[3.436] rounded-[145px] max-md:px-5 bg-cyan-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/200f4e930b63ac41603e1a17b888e649998967ed98ee17aced104ceb726fc315?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
            alt="Newsletter illustration"
            className="object-contain grow -mt-7 w-full aspect-[1.03] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
