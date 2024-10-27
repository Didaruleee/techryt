import Image from "next/image";
import React from "react";

const ImageRender = ({ img }: { img: string }) => {
  return (
    <main>
      <section className="relative isolate flex justify-center  ">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative  left-[calc(50%-11rem)]  aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-transparent sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8  ">
          <div className="mt-16 flow-root sm:mt-24 ">
            <div
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(8.7px)",
                WebkitBackdropFilter: "blur(7.7px)",
              }}
              className="-mt-2 rounded-lg p-2 ring-1 ring-inset   ring-gray-900/5 lg:-m-4 lg:rounded-2xl lg:p-8 items-center"
            >
              <div>
                <Image
                  src={img}
                  width={600}
                  height={478}
                  alt="product preview"
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 shadow-2xl "
                />
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none  absolute inset-x-0  -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
      </section>
    </main>
  );
};

export default ImageRender;
