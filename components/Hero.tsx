import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="padding mt-[5rem]">
      <div className="flex gap-[3rem] items-center">
        <Image width={117} height={117} alt="user-image" src={"/user.svg"} />
        <div>
          <h1 className="text-[41px] text-green font-normal">
            Good Morning, <br />
            <span className="text-green font-bold text-[41px]">Joel!</span>
          </h1>
          <p className="text-lightBlack text-[23px] mt-[-10px] font-medium">
            How are you feeling today?
          </p>
        </div>
      </div>

      <Link href={"/symptom1"}>
        <button className="w-[484px] h-[83px] bg-buttonGreen rounded-[60px] text-white outline-none border-none text-[30px] font-medium cursor-pointer mt-[83px] transition ease-in duration-200 hover:bg-green ml-[2rem]">
          Let's assess your symptom
        </button>
      </Link>

      <div className="flex gap-[6rem] flex-wrap mt-[106px]">
        <div>
          <div className="w-[582px] h-[300px] rounded-[18px] bg-green flex justify-center items-center ml-[1rem]">
            <Image
              width={251}
              height={251}
              src={"/tracker.svg"}
              alt="tracker-image"
            />
          </div>
          <h1 className="text-[37px] font-bold mt-[32px] text-green mb-[18px]">
            Symptom Tracker
          </h1>
          <p className="text-lightBlack text-[26px] font-medium">
            Understand your symptoms and spot patterns
          </p>
        </div>

        <div>
          <div className="w-[582px] h-[300px] rounded-[18px] bg-green flex justify-center items-center ml-[1rem]">
            <Image
              width={251}
              height={251}
              src={"/first-aid.svg"}
              alt="tracker-image"
            />
          </div>
          <h1 className="text-[37px] font-bold mt-[32px] text-green mb-[18px]">
            Quick First Aid
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
