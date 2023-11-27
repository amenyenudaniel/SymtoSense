import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Demographic = () => {
  return (
    <section>
      <Navbar />
      <div className="h-[95vh] bg-green flex flex-col items-center justify-center">
        <Image
          src={"/logo-image.svg"}
          alt="logo-image"
          width={120}
          height={60}
        />
        <div>
          <p className=" text-[20px] text-lightWhite font-medium mb-[36px]">
            Choose Demographic
          </p>

          <div className="flex gap-[5rem] items-center">
            <div>
              <p className="text-[24px] text-white font-normal mb-[1rem]">
                Country
              </p>
              <input
                type="text"
                className="w-[243px] outline-none border-b bg-green mb-[57px] text-white text-[18px] pl-2"
              />
            </div>

            <div>
              <p className="text-[24px] text-white font-normal mb-[1rem]">
                State
              </p>
              <input
                type="text"
                className="w-[243px] outline-none border-b bg-green mb-[57px] text-white text-[18px] pl-2"
              />
            </div>
          </div>
        </div>
        <Link href={"/age"} className="mb-[4.5rem]">
          <button
            type="button"
            className="w-[384px] h-[61px] bg-white rounded-[46px] text-[20px] text-lightGreen font-medium hover:bg-lightGreen hover:text-white transition ease-in duration-200"
          >
            Next
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Demographic;
