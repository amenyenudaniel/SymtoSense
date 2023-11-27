"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Age = () => {
  const [selectedGender, setSelectedGender] = useState<string>("male");

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.value);
  };

  return (
    <section>
      <Navbar />

      <div className="h-[95vh] bg-green flex flex-col items-center justify-center">
        <Image src="/logo-image.svg" alt="logo-image" width={120} height={60} />
        <div>
          <div>
            <p className="text-[24px] text-white font-normal mb-[1rem]">Age</p>
            <input
              type="text"
              className="w-[548px] outline-none border-b bg-green mb-[57px] text-white text-[18px] pl-2"
            />
            <p className="text-[24px] text-white font-normal mb-[1rem]">
              Gender
            </p>
            <div>
              <div className="flex flex-row gap-[1rem] p-3 items-center">
                <label className="text-lightWhite font-medium text-[17px] cursor-pointer">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={selectedGender === "male"}
                    onChange={handleGenderChange}
                    className="hidden"
                  />
                  <div className="flex items-center gap-[5px]">
                    <div
                      className={`w-[15px] h-[15px]  rounded-full cursor-pointer ${
                        selectedGender === "male"
                          ? "bg-greenBright"
                          : "bg-white"
                      }`}
                    ></div>

                    <span className="ml-2">Male</span>
                  </div>
                </label>
              </div>

              <div className="flex flex-row gap-[1rem] p-3 items-center">
                <label className="text-lightWhite font-medium text-[17px] cursor-pointer">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={selectedGender === "female"}
                    onChange={handleGenderChange}
                    className="hidden"
                  />
                  <div className="flex items-center gap-[5px]">
                    <div
                      className={`w-[15px] h-[15px]  rounded-full cursor-pointer ${
                        selectedGender === "female"
                          ? "bg-greenBright"
                          : "bg-white"
                      }`}
                    ></div>

                    <span className="ml-2">Female</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <Link href="/home" className="mb-[4.5rem]">
          <button
            type="button"
            className="w-[384px] h-[61px] bg-white rounded-[46px] text-[20px] text-lightGreen font-medium hover:bg-lightGreen hover:text-white transition ease-in duration-200 mt-[5rem]"
          >
            Next
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Age;
