"use client";
import Image from "next/image";
import { useRef } from "react";

const Discover = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 400;
      } else {
        current.scrollLeft += 400;
      }
    }
  };
  return (
    <section id="discover" className="pt-[7rem]">
      <div className="paddingD  mb-[13rem] ">
        <h1 className="sm:text-[37px] text-[22px] font-bold mb-[31px]">
          Discover
        </h1>
        <div>
          <div className="discover-scroll" ref={scrollRef}>
            <div className="flex gap-[65px] items-center">
              <div>
                <div className="sm:w-[470px] w-[280px] h-[300px] bg-green rounded-[18px] flex justify-center items-center">
                  <Image
                    width={291}
                    height={251}
                    src={"/first-aid.svg"}
                    alt="tracker-image"
                  />
                </div>
                <p className="text-green sm:text-[28px] font-medium mt-[27px] text-[18px]">
                  Blood Pressure
                </p>
              </div>
              <div>
                <div className="sm:w-[470px] w-[280px] h-[300px] bg-green rounded-[18px] flex justify-center items-center">
                  <Image
                    width={291}
                    height={251}
                    src={"/first-aid.svg"}
                    alt="tracker-image"
                  />
                </div>
                <p className="text-green sm:text-[28px] text-[18px] font-medium mt-[27px]">
                  Hypertension
                </p>
              </div>
              <div>
                <div className="sm:w-[470px] w-[280px] h-[300px] bg-green rounded-[18px] flex justify-center items-center">
                  <Image
                    width={291}
                    height={251}
                    src={"/first-aid.svg"}
                    alt="tracker-image"
                  />
                </div>
                <p className="text-green sm:text-[28px] text-[18px] font-medium mt-[27px]">
                  Hysteritis
                </p>
              </div>
              <div>
                <div className="sm:w-[470px] w-[280px] h-[300px] bg-green rounded-[18px] flex justify-center items-center sm:mr-[3rem] mr-[1rem]">
                  <Image
                    width={291}
                    height={251}
                    src={"/first-aid.svg"}
                    alt="tracker-image"
                  />
                </div>
                <p className="text-green sm:text-[28px] text-[18px] font-medium mt-[27px]">
                  Blood Pressure
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[2rem]">
            <Image
              src={"/arrow-right.svg"}
              alt="arrow-icon"
              width={42}
              height={40}
              className="cursor-pointer"
              onClick={() => scroll("left")}
            />
            <Image
              src={"/arrow-right.svg"}
              alt="arrow-icon"
              width={42}
              className="cursor-pointer mr-[2rem]"
              height={40}
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
