import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex justify-between flex-col lg:flex-row items-center padding bg-green h-full bg-green gap-[3rem] lg:gap-[1rem]">
        <ImageCarousel />
        <div className="flex flex-col items-center ">
          <Image
            src={"/logo-image.svg"}
            alt="logo-image"
            width={120}
            height={60}
            className="mb-[55px]"
          />
          <div className="flex flex-col items-start w-[250px] sm:w-[548px] mb-[122px]">
            <p className="sm:text-[24px] text-[17px] text-white font-normal mb-[1rem]">
              Email
            </p>
            <input
              type="text"
              className="w-full outline-none border-b bg-green mb-[57px] text-white text-[18px] pl-2"
            />
            <p className="sm:text-[24px] text-[17px] text-white font-normal  mb-[1rem]">
              Password
            </p>
            <input
              type="text"
              className="w-full outline-none border-b bg-green text-white text-[18px] pl-2"
            />
          </div>

          <div className="flex flex-col gap-[36px]">
            <Link href={"/home"}>
              {" "}
              <button
                type="button"
                className="sm:w-[384px] w-[200px] h-[61px] bg-lightGreen rounded-[46px] text-white sm:text-[20px] text-[17px] font-medium"
              >
                Sign In
              </button>
            </Link>
            <Link href={"/signUp"} className="mb-[4.5rem]">
              <button
                type="button"
                className="sm:w-[384px] w-[200px] h-[61px] bg-white rounded-[46px] sm:text-[20px]  text-[17px] text-lightGreen font-medium hover:bg-lightGreen hover:text-white transition ease-in duration-200"
              >
                Create an account
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-[5px] mb-[2rem]">
            <Image src={"/line.svg"} alt="line" width={100} height={0.5} />
            <p className="text-[15px] text-lightGreen font-medium">or</p>
            <Image src={"/line.svg"} alt="line" width={100} height={0.5} />
          </div>

          <div className="flex items-center gap-[3rem] pb-[7rem]">
            <Image
              className="cursor-pointer"
              width={46}
              height={56}
              alt="social__icon"
              src={"/apple.svg"}
            />
            <Image
              className="cursor-pointer"
              width={46}
              height={56}
              alt="social__icon"
              src={"/google.svg"}
            />
            <Image
              className="cursor-pointer"
              width={46}
              height={56}
              alt="social__icon"
              src={"/facebook.svg"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
