import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";
import {
  HiOutlineMapPin,
  HiChevronDown,
  HiMagnifyingGlass,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { Button } from "./button";
import { Input } from "./input";
import { FiPhoneCall } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
const Navigation = () => {
  return (
    <div className="">
      <div className="flex flex-col">
      {/* first navbar */}
      <div className="flex flex-row container mx-auto justify-between align-middle items-center h-11 border-b-2 border-gray-200">
        {/* left part */}
        <div className="flex flex-row gap-x-2 ">
          <HiOutlineMapPin width={15} height={18} />
          <Typography
            fontSize="sm"
            fontWeight="normal"
            className="text-[#666666]"
          >
            Store Location: No.2A, Down Town Road No 7, Phum Kork Chambak,Phnom
            Penh
          </Typography>
        </div>
        {/* right part */}
        <div className="flex flex-row items-center">
          <Button variant={"ghost"} className=" text-[#666666]">
            Eng <HiChevronDown color="#666666" className="ml-2" />
          </Button>
          {/* <div className='bg-[#E6E6E6] w-[1px] h-[15px]'></div> */}
          <hr className="h-8 border-2 border-[#E6E6E6]" />
          <Button variant={"ghost"} className="text-[#666666]">
            Sign In
          </Button>
          <Button variant={"ghost"} className="text-[#666666]">
            Sign Up
          </Button>
        </div>
      </div>
      {/* second navbar */}
      <div className="flex flex-row container mx-auto justify-between align-middle items-center h-[85px]">
        {/* left part */}
        <div>
          <Image
            src={"icons/logo.svg"}
            alt="logo icon"
            height={40}
            width={40}
          />
        </div>

        {/* center part */}
        <div className="flex flex-row relative w-[500px] max-w-sm items-center">
          <Input 
            height={45}
            id="search"
            type="text"
            placeholder="Search"
            className="pl-11 rounded-none rounded-l-[6px]"
          />
          <span className="absolute start-0 inset-y-0 flex items-center justify-center px-4">
            <HiMagnifyingGlass size={20} />
          </span>
          <Button
            variant={"secondary"}
            className="bg-[#008001] text-white rounded-none rounded-r-[6px]"
            color="green"
          >
            Search
          </Button>
        </div>

        {/* right part */}
        <div className="flex flex-row items-center">
          <div className="flex flex-row gap-x-4">
          <button className="text-black hover:text-red-500 ">

          <IoHeartOutline size={32} />
          </button>
          <hr className="h-8 border-2 border-[#CCCCCC]" />
          </div>
          <div className="flex flex-row items-center ml-4 gap-x-3 relative">

          <button className="text-black hover:text-red-500">

          <HiOutlineShoppingBag size={32} />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#008001] border-2 border-white rounded-full -top-2 -end-2 left-4 ">
                2
              </div>
          </button>
          <Typography className="text-[#4D4D4D] !text-[11px]" fontWeight="normal">Shopping Cart:</Typography>
          <Typography className="text-[#1A1A1A]" fontSize="sm" fontWeight="extrabold">$0</Typography>
          </div>
        </div>
      </div>

      {/* third navbar */}
      <div className="flex flex-row justify-between align-middle items-center bg-[#333333] container mx-auto h-[60px]">
        <div className="flex flex-row">
          <Button className=" bg-[#333333] hover:bg-[#008001]">
          <Link href={"../"}>Home</Link>
          </Button>
          <Button className=" bg-[#333333] hover:bg-[#008001]">Shop <HiChevronDown color="#FFFFFF" className="ml-2" /></Button>
          <Button className=" bg-[#333333] hover:bg-[#008001]">
           <Link href={"blog"}>
           Blog 
           </Link>
            <HiChevronDown color="#FFFFFF" className="ml-2" /></Button>
          <Button className=" bg-[#333333] hover:bg-[#008001]">
            <Link href={"aboutUs"}>About Us</Link>
          </Button>
          <Button className=" bg-[#333333] hover:bg-[#008001]">
            <Link href={'contactUs'}>Contact Us</Link>
          </Button>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-2">
          <FiPhoneCall color="white"/>
          <Typography className="text-white" fontSize="sm" fontWeight="semibold">(+855) 088 5654 093</Typography>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export { Navigation };
