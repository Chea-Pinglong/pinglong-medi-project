import React from "react";
// import Container from "./Container";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import ArrowRightIcon from "./icons/ArrowRightIcon";
import Image from "next/image";
import { Button } from "./button";

const HeroSection: React.FC = () => {
  return (
    <div className=" container mx-auto bg-[#F2F2F2] h-[640px] flex items-center">
        <Button
        variant={'ghost'} className="rounded-full w-[45px] h-[45px] bg-[#E6E6E6]">
            <FaArrowLeft/>
        </Button>
      <div>
        <div className=" flex items-center justify-center text-left space-x-10">
          <Image
            src="/images/medical.png"
            alt="Medical Equipment"
            className="object-cover"
            width={639}
            height={531}
          />
          <div className="flex flex-col">
            <div className="flex flex-col w-full items-start">
              <span className="text-[#008001] text-[18px] font-semibold">
                Medicom experienced since 1993 in
              </span>
              <h1 className="text-[52px] font-extrabold">
                Medical Equipment Provider
              </h1>
            </div>
            <div className="flex flex-col items-start mt-10">
              <p className="text-[32px]">
                Sale up to {""}
                <strong className="text-[#FF8A00] font-medium">30% OFF</strong>
              </p>
              <span>
                Medicom is one of the major supplier of medical and Laboratory
                Equipment throughout the kingdom.
              </span>
              <button className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <FaArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Button
      variant={'ghost'} className="rounded-full w-[45px] h-[45px] bg-[#E6E6E6]">
            <FaArrowRight color="#1A1A1A"/>
        </Button>
    </div>
  );
};

export {HeroSection};