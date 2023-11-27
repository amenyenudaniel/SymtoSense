import NavbarMain from "@/components/NavbarMain";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Symptom = () => {
  return (
    <section>
      <NavbarMain />
      <div className="padding">
        <div className="flex items-center justify-between mt-[2rem]">
          <div className="flex gap-[2rem] items-center">
            <Link href={"/home"}>
              <Image
                src="/arrow-left1.svg"
                alt="arrow-icon"
                width={36}
                height={24}
                className="cursor-pointer"
              />
            </Link>
            <h1 className="font-bold text-[36px]">Assessment</h1>
          </div>
          <Link href={"/symptom2"}>
            <button
              type="button"
              className="w-[250px] border border-lightBlack h-[61px] bg-white rounded-[46px] text-[20px] text-lightGreen font-medium hover:bg-lightGreen hover:text-white transition ease-in duration-200 hover:border-none"
            >
              Previous Answer
            </button>
          </Link>
        </div>
        <div className=" mt-[3rem] flex items-center gap-[2rem]"></div>

        <div className="pl-3 h-[80vh] flex justify-center flex-col ">
          <Image
            src="/logo-icon.svg"
            alt="arrow-icon"
            width={150}
            height={24}
            className="cursor-pointer"
          />
          <p className="text-[64px] font-medium mb-[3rem]">
            What is your blood <br />
            pressure rate?
          </p>

          <input
            type="text"
            placeholder="e.g. 90/60mmHg and 120/80mmHg"
            className="w-full h-[70px] border border-lightBlack rounded-[35px] pl-[2.5rem] text-[23px] text-black font-medium outline-none"
          />

          <Link
            href={"/solution"}
            className="mt-[3rem] flex items-center justify-center"
          >
            <button
              type="button"
              className="w-[384px] border border-lightBlack h-[61px] bg-white rounded-[46px] text-[20px] text-lightGreen font-medium hover:bg-lightGreen hover:text-white transition ease-in duration-200 hover:border-none"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Symptom;
