import Image from "next/image";
import React from "react";

const ImageCarousel = () => {
  return (
    <section className="w-full sm:w-[500px] flex flex-col items-center">
      <Image src={"/ai-image1.svg"} alt="ai-image" width={500} height={400} />
      <p className="text-white text-[17px] sm:text-[21px] font-normal mt-[-1rem] sm:mt-[-3rem] text-center sm:text-start">
        Symptosence, your cutting-edge AI-powered diagnosis app, revolutionizes
        healthcare by seamlessly analyzing symptoms to provide accurate and
        timely medical insights. With its advanced algorithms, Symptosence
        interprets user-inputted symptoms, cross-references vast medical
        databases, and delivers personalized health assessments, empowering
        users to make informed decisions about their well-being. Whether it's
        identifying common ailments or flagging potential health risks,
        Symptosence is your trusted companion on the journey to proactive and
        personalized healthcare.
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
