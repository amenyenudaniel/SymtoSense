import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="padding">
        <nav className="flex justify-between items-center pt-3 pb-3 ">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={120}
              height={50}
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>

          <Link href={"/signUp"} className="hidden sm:flex">
            <button className="outline-none border-none rounded-[10px] bg-lightGreen w-[183px] height-[34px] text-[15px] text-white p-1 cursor-pointer hover:bg-green transition ease-in duration-200">
              Create an account
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
