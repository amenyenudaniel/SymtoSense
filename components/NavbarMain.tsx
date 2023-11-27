import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarMain = () => {
  return (
    <div className="padding bg-green" id="home">
      <nav className="flex items-center justify-between p-3 ">
        <Link href={"/home"}>
          <Image
            src={"/logo-image.svg"}
            alt="logo-icon"
            width={100}
            height={10}
            className="cursor-pointer flex items-center  mr-[auto]
          ml-[auto]"
          />
        </Link>

        <div className="flex items-center gap-[2rem]">
          <Link href={"/home"} className="text-white font-medium">
            Home
          </Link>

          <a
            href="#discover"
            className="text-[16px] font-normal font-medium text-white"
          >
            Discover
          </a>

          <a
            href="#profile"
            className="text-[16px] font-normal font-medium text-white"
          >
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
