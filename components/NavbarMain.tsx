import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarMain = () => {
  return (
    <div className="padding bg-green" id="home">
      <nav className="flex items-center justify-between p-3 ">
        <Image
          src={"/menu.svg"}
          alt="menu-icon"
          width={34}
          height={30}
          className="cursor-pointer"
        />
        <Image
          src={"/logo-image.svg"}
          alt="logo-icon"
          width={100}
          height={10}
          className="cursor-pointer flex items-center  mr-[auto]
          ml-[auto]"
        />
        <div className="flex items-center gap-[2rem]">
          <Link href={"/home"} className="text-white font-medium">
            Home
          </Link>
          <div className="cursor-pointer flex items-center gap-[5px]">
            <a
              href="#discover"
              className="text-[16px] font-normal font-medium text-white"
            >
              Discover
            </a>
            <Image
              src={"/arrow-white.svg"}
              alt="arrow"
              width={12}
              height={10}
              className="mb-[-5px]"
            />
          </div>
          <a href="#profile">
            <div className="cursor-pointer flex items-center gap-[5px]">
              <p className="text-[16px] font-normal font-medium text-white">
                Profile
              </p>
              <Image
                src={"/arrow-white.svg"}
                alt="arrow"
                width={12}
                height={10}
                className="mb-[-5px]"
              />
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
