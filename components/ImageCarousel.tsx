import Image from "next/image";
import React from "react";

const ImageCarousel = () => {
  return (
    <section className="w-full sm:w-[500px] flex flex-col items-center">
      <Image src={"/ai-image1.svg"} alt="ai-image" width={500} height={400} />
      <p className="text-white text-[17px] sm:text-[21px] font-normal mt-[-1rem] sm:mt-[-3rem] text-center sm:text-start">
        SymptoSence is an AI powered symptoms and diagnosis App.
      </p>
      <div className="flex flex-row gap-[10px] mt-[2.5rem]">
        <Image src={"/horiIcon.svg"} alt="icon" width={40} height={13} />
        <div className="w-[13px] h-[13px] rounded-full bg-white"></div>
        <div className="w-[13px] h-[13px] rounded-full bg-white"></div>
        <div className="w-[13px] h-[13px] rounded-full bg-white"></div>
      </div>
    </section>
  );
};

export default ImageCarousel;
