import NavbarMain from "@/components/NavbarMain";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Symptom = () => {
  return (
    <section>
      <NavbarMain />
      <div className="padding">
        <div className=" mt-[3rem] flex items-center gap-[2rem]">
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

        <div className="pl-3 h-[80vh] flex justify-center flex-col ">
          <Image
            src="/logo-icon.svg"
            alt="arrow-icon"
            width={150}
            height={24}
            className="cursor-pointer"
          />
          <p className="text-[64px] font-medium mb-[3rem]">
            How are you <br />
            feeling?
          </p>

          <input
            type="text"
            placeholder="e.g. back pain"
            className="w-full h-[70px] border border-lightBlack rounded-[35px] pl-[2.5rem] text-[23px] text-black font-medium outline-none"
          />

          <Link
            href={"/symptom2"}
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
