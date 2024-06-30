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
const Navigation = () => {
  return (
    <div>
      <div className="flex flex-col">
      {/* first navbar */}
      <div className="flex flex-row justify-between align-middle items-center h-11 border-b-2 border-gray-200">
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
      <div className="flex flex-row justify-between align-middle items-center h-[85px]">
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

          <IoHeartOutline size={32} />
          <hr className="h-8 border-2 border-[#CCCCCC]" />
          </div>
          <div className="flex flex-row items-center ml-4 gap-x-3">

          <HiOutlineShoppingBag size={32} slope={32} />
          <Typography className="text-[#4D4D4D] !text-[11px]" fontWeight="normal">Shopping Cart:</Typography>
          <Typography className="text-[#1A1A1A]" fontSize="sm" fontWeight="extrabold">$0</Typography>
          </div>
        </div>
      </div>

      {/* third navbar */}
      <div className="flex flex-row justify-between align-middle items-center bg-[#333333] px-[140px] h-[60px]">
        <div className="flex flex-row">
          <Button className="rounded-none bg-[#333333] focus:bg-[#008001]">Home</Button>
          <Button className="rounded-none bg-[#333333] focus:bg-[#008001]">Shop <HiChevronDown color="#FFFFFF" className="ml-2" /></Button>
          <Button className="rounded-none bg-[#333333] focus:bg-[#008001]">Blog <HiChevronDown color="#FFFFFF" className="ml-2" /></Button>
          <Button className="rounded-none bg-[#333333] focus:bg-[#008001]">About Us</Button>
          <Button className="rounded-none bg-[#333333] focus:bg-[#008001]">Contact Us</Button>
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
