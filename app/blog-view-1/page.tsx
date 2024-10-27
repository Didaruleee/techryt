import ArticleGrid from "@/components/ArticleGrid";
import Newsletter from "@/components/Newsletter";
import ReachYourIdeal from "@/components/ReachYourIdeal";
import { Button } from "@/components/ui/button";
import React from "react";

const tags = [
  "Business Support",
  "Productivity",
  "Outsourcing Industry",
  "Virtual Assistant",
  "Remote Work",
  "Virtual Assistant Skills",
  "Sales & Marketing",
  "App & Saas",
  "Business",
  "Wing News",
];

const articles = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e43841586e127fb652d36bd66705049fe66935ba97c36ba7d72e2682b8c49a4?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1",
    title: "Branding Brilliance: Your Guide to Great Branding",
    author: "Sofie Koevoets",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e43841586e127fb652d36bd66705049fe66935ba97c36ba7d72e2682b8c49a4?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1",
    title: "Branding Brilliance: Your Guide to Great Branding",
    author: "Sofie Koevoets",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e43841586e127fb652d36bd66705049fe66935ba97c36ba7d72e2682b8c49a4?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1",
    title: "Branding Brilliance: Your Guide to Great Branding",
    author: "Sofie Koevoets",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e43841586e127fb652d36bd66705049fe66935ba97c36ba7d72e2682b8c49a4?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1",
    title: "Branding Brilliance: Your Guide to Great Branding",
    author: "Sofie Koevoets",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

export default function Page() {
  return (
    <>
      <div className="flex overflow-hidden flex-col px-10 md:px-0 items-center pt-12 bg-white">
        <section className=" md:mt-56 flex flex-col  justify-center items-center gap-y-3 max-md:mt-10 max-md:max-w-full">
          <h1 className="text-6xl font-extrabold pt-20 md:pt-0 tracking-tight text-center text-black max-md:max-w-full max-md:text-4xl">
            Streamline your work processes.
          </h1>
          <p className="mt-6 text-xl font-medium leading-7 text-center text-black w-full md:w-[70%] max-md:max-w-full">
            Evaluate the newest digital trends. Utilize the most recent
            technology while developing plans. Manage your projects flawlessly
            using the necessary data and suitable team.
          </p>
          <div className="flex  gap-9 md:px-6 px-3 py-3 md:py-5 mt-16 max-w-full text-xl font-medium leading-snug text-center border border-solid bg-neutral-100 border-black border-opacity-10 rounded-[40px] text-neutral-400 w-full md:w-[70%] max-md:px-5 max-md:mt-10">
            <div
              className="flex justify-center items-center shrink-0 bg-cyan-500 rounded-2xl h-7 md:h-[43px] w-7 md:w-[43px]"
              aria-hidden="true"
            >
              <img
                src="/images/Search Icon.png"
                className="w-4 h-4 md:w-6 md:h-6"
                alt=""
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="flex-auto my-auto w-full max-md:max-w-full bg-transparent border-none focus:outline-none"
              aria-label="Search"
            />
          </div>
        </section>

        <article className="mt-24 w-full max-w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1fb3aaa62feab9f2059897b35e3ccee6996dac3e943e135b21abc8df75f1bd?placeholderIfAbsent=true&apiKey=9c9a67f1f44647bbbaf1c94871aa98d1"
                alt="Featured article"
                className="object-contain grow mt-3 w-full aspect-[1.5] rounded-[64px] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col md:ml-5 w-full md:w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="self-start px-11 py-2.5 text-2xl font-semibold leading-relaxed text-center whitespace-nowrap bg-cyan-300 bg-opacity-10 rounded-[40px] text-slate-900 max-md:px-5">
                  FEATURED
                </div>
                <div className="flex flex-col items-start pl-2 mt-2.5 w-full text-xl text-black max-md:max-w-full">
                  <h2 className="text-6xl font-extrabold tracking-tight max-md:max-w-full max-md:text-4xl">
                    Benefits of hiring a small business CPA
                  </h2>
                  <p className="self-stretch mt-12 font-medium leading-6 max-md:mt-10 max-md:max-w-full">
                    Managing finances efficiently is the key to success in
                    todays evolving business environment. A Small Business CPA
                    and a virtual assistant can be a game-changer..
                  </p>
                  <Button
                    size="lg"
                    className="px-6 py-4 mt-7 font-semibold leading-tight text-center text-white bg-cyan-500 rounded max-md:px-5"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-wrap gap-y-5 gap-x-7 justify-center py-20 w-full text-sm  md:text-xl font-semibold tracking-widest leading-none text-center max-w-full md:px-24 text-neutral-600 max-md:mt-10 max-md:max-w-full">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-12 py-4 bg-zinc-100 rounded-[67px] max-md:px-5"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex  gap-10 mt-10 md:mt-20 w-full text-6xl font-extrabold leading-none text-black max-w-full md:px-16 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h2 className="shrink basis-auto grow-0 max-md:text-4xl">
            Wing News
          </h2>
          <div className="hidden md:inline-flex shrink-0 my-auto max-w-full h-px border-t border-cyan-500 w-[70%]" />
        </div>
        <ArticleGrid articles={articles} />
        <div className="flex  gap-10 mt-20 w-full text-6xl font-extrabold leading-none text-black max-w-[1337px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h2 className="shrink basis-auto grow-0 max-md:text-4xl">Featured</h2>
          <div className="hidden md:inline-flex shrink-0 my-auto max-w-full h-px border-t border-cyan-500 w-[70%]" />
        </div>
        <ArticleGrid articles={articles} />
        <div className="flex  gap-10 mt-20 w-full text-6xl font-extrabold leading-none text-black max-w-[1337px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h2 className="shrink basis-auto grow-0 max-md:text-4xl">
            Productivity
          </h2>
          <div className=" hidden md:inline-flex shrink-0 my-auto max-w-full h-px border-t border-cyan-500 w-[70%]" />
        </div>
        <ArticleGrid articles={articles} />
        <Newsletter />
      </div>
      <ReachYourIdeal />
    </>
  );
}
