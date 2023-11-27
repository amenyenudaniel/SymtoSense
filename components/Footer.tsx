import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green">
      <div className="padding">
        <Image
          src={"/logo-image.svg"}
          alt="logo-icon"
          width={200}
          height={20}
          className="cursor-pointer ml-[-2.8rem]"
        />
        <h1 className="text-[37px] font-bold text-white mt-[-2rem] pb-[6rem]">
          SymptoSense
        </h1>
      </div>
      <div className="flex flex-col gap-[32px] padding">
        <a href="#home" className="text-[17px] text-white font-medium">
          Home
        </a>
        <a href="#discover" className="text-[17px] text-white font-medium">
          Discover
        </a>
        <a href="#profile" className="text-[17px] text-white font-medium">
          Profile
        </a>
      </div>

      <p className="mt-[120px] text-center pb-[1rem] text-white ">
        Hackerthon 2023
      </p>
    </footer>
  );
};

export default Footer;
