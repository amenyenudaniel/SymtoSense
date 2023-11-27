import Image from "next/image";
import React from "react";

const ImageCarousel = () => {
  return (
    <section className="w-[650px] flex flex-col items-center">
      <Image src={"/ai-image1.svg"} alt="ai-image" width={650} height={450} />
      <p className="text-white text-[24px] font-normal mt-[-3rem]">
        SymptoSense is an AI-generated diagnosis which
        <br /> helps users identify and track symptoms. Lorem <br />
        ipsum thr aby gysi hyst.{" "}
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
