import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="padding mt-[5rem]">
      <div className="flex gap-[3rem] items-center flex-wrap justify-center sm:justify-start">
        <div className="w-[120px] h-[120px] rounded-full bg-lightGreen" />
        <div id="profile">
          <h1 className="sm:text-[41px] text-[30px] text-green font-normal">
            Good Morning, <br />
            <span className="text-green font-bold sm:text-[41px] text-[30px]">
              Joel!
            </span>
          </h1>
          <p className="text-lightBlack sm:text-[23px] text-[18px] mt-[-10px] font-medium">
            How are you feeling today?
          </p>
        </div>
      </div>

      <Link href={"/symptom1"} className="flex sm:justify-start justify-center">
        <button className="sm:w-[484px] w-[240px] sm:h-[83px] h-[50px] p-3 sm:p-0 bg-buttonGreen rounded-[60px] text-white outline-none border-none sm:text-[30px] text-[16px] font-medium cursor-pointer mt-[83px] transition ease-in duration-200 hover:bg-green sm:ml-[2rem] ml-0">
          Let's assess your symptom
        </button>
      </Link>

      <div className="flex gap-[6rem] flex-col justify-center  lg:items-start lg:flex-row mt-[106px]">
        <div>
          <div className="md:w-[582px]  h-[300px] rounded-[18px] bg-green flex justify-center  sm:ml-[1rem] ml-0">
            <Image
              width={251}
              height={251}
              src={"/tracker.svg"}
              alt="tracker-image"
            />
          </div>
          <h1 className="sm:text-[37px] text-[20px] font-bold mt-[32px] text-green mb-[18px]">
            Symptom Tracker
          </h1>
          <p className="text-lightBlack sm:text-[26px] text[17px] font-medium">
            Understand your symptoms and spot patterns
          </p>
        </div>

        <div>
          <div className="md:w-[582px] h-[300px] rounded-[18px] bg-green flex justify-center items-center sm:ml-[1rem] ml-0">
            <Image
              width={251}
              height={251}
              src={"/first-aid.svg"}
              alt="tracker-image"
            />
          </div>
          <h1 className="sm:text-[37px] text-[20px] font-bold mt-[32px] text-green mb-[18px]">
            Quick First Aid
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
