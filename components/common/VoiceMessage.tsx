import Image from "next/image";
import React from "react";

const VoiceMessage = () => {
  return (
    <main className="relative flex flex-col justify-center items-center w-full h-auto md:min-w-min py-5 md:py-16 bg-[#013742]">
      {/* Don’t take our word for it. Hear it for yourself! */}
      <h1 className="flex-1 text-3xl md:text-5xl font-bold text-white text-center pb-16">
        Don’t take our word for it. Hear it for yourself!
      </h1>
      <div className="justify-between items-center px-10 md:px-[500px] absolute top-1/3 w-full inline-flex">
        <Image src="/images/Arrow Left.png" width={25} height={40} alt="" />
        <Image src="/images/Arrow Right.png" width={25} height={40} alt="" />
      </div>
      <div className="flex justify-center items-center  gap-x-3 md:gap-x-5">
        <div className="relative w-[100px] md:w-[244.62px] h-[100px] md:h-[244.62px] rounded-full flex justify-center items-center">
          <Image
            width={240}
            height={240}
            src="/images/voice msg 1.png"
            alt=""
          />
          <div className="absolute bg-white w-[40px] md:w-[57px] h-[40px] md:h-[57px] rounded-full flex justify-center items-center">
            <Image width={20} height={20} src="/images/play.png" alt="" />
          </div>
        </div>

        <div className="relative w-[120px] md:w-[380px] h-[250px] md:h-[374px] flex justify-center items-center">
          <div className="bg-[#04A6C8] bg-opacity-[20%] p-3 md:p-5 flex justify-center items-center rounded-full">
            <div className="bg-[#04A6C8] bg-opacity-[20%] p-3 md:p-5 flex justify-center items-center rounded-full">
              <div className="bg-[#04A6C8] p-3 md:p-5 flex justify-center items-center rounded-full">
                <div className="relative w-[100px] md:w-[244.62px] h-[100px] md:h-[244.62px] rounded-full flex justify-center items-center">
                  <Image
                    width={244}
                    height={244}
                    src="/images/voice msg 2.png"
                    alt=""
                  />
                  <div className="absolute bg-[#FF0051] w-[40px] md:w-[57px] h-[40px] md:h-[57px] rounded-full flex justify-center items-center">
                    <Image
                      width={20}
                      height={20}
                      src="/images/voice.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[100px] md:w-[244.62px] h-[100px] md:h-[244.62px] rounded-full flex justify-center items-center">
          <Image
            width={240}
            height={240}
            src="/images/voice msg 3.png"
            alt=""
          />
          <div className="absolute bg-white w-[40px] md:w-[57px] h-[40px] md:h-[57px] rounded-full flex justify-center items-center">
            <Image width={20} height={20} src="/images/play.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VoiceMessage;
