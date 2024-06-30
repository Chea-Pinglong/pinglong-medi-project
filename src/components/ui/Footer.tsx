import React from "react";
import { Typography } from "./Typography";
import { Button } from "./button";
import { FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center container mx-auto bg-[#F7F7F7] py-8">
        <div className="flex space-x-4">
          <Typography fontSize="base" fontWeight="medium">
            Terms
          </Typography>
          <Typography fontSize="base" fontWeight="medium">
            Privacy
          </Typography>
          <Typography fontSize="base" fontWeight="medium">
            Cookie
          </Typography>
        </div>

        <div className="flex gap-x-2">
          <Button className="hover:text-white hover:bg-[#008001] p-2 w-10 h-10 bg-[#F7F7F7] rounded-full text-[#4D4D4D]">
            <SlSocialFacebook size={18} />
          </Button>
          <Button className="hover:text-white hover:bg-[#008001] p-2 w-10 h-10 bg-[#F7F7F7] rounded-full text-[#4D4D4D]">
            <FaTwitter size={18} />
          </Button>
          <Button className="hover:text-white hover:bg-[#008001] p-2 w-10 h-10 bg-[#F7F7F7] rounded-full text-[#4D4D4D]">
            <FaPinterestP size={18} />
          </Button>
          <Button className="hover:text-white hover:bg-[#008001] p-2 w-10 h-10 bg-[#F7F7F7] rounded-full text-[#4D4D4D]">
            <FaInstagram size={18} />
          </Button>
        </div>
      </div>
      <div className="bg-[#1A1A1A] container mx-auto relative h-[405px]">
        <Image
          src={"/images/bg-footer.png"}
          alt="background footer"
          width={316}
          height={373}
          className="absolute top-0 left-0 "
        />
        <div className="flex flex-col absolute top-[60px] gap-y-[40px]">
          <div className="grid grid-cols-5 space-x-[100px] w-full container mx-auto text-white">
            <div className="flex flex-col gap-y-4 w-full">
              <Image
                src={"/icons/logo.svg"}
                width={40}
                height={40}
                alt="logo"
              />
              <Typography className="text-white" align="left">
                Address: No.2A, Down Town Road No 7, Phum Kork Chambak,Phnom
                Penh
              </Typography>
              <div className="flex gap-x-2 align-middle items-center">
                <FiSmartphone color="white" />
                <Typography className="text-white" align="left">
                  Office: (+855) 088 5654 093
                </Typography>
              </div>
              <div className="flex gap-x-2 align-middle items-center text-white">
                <CiMail />
                <Typography className="text-white" align="left">
                  Support: info@medi.com
                </Typography>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 w-full">
              <div>
                <Typography align="left">My Account</Typography>
              </div>
              <div className="flex flex-col gap-y-3">
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  My Account
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Order History
                </Typography>
                <Typography align="left" fontSize="sm" className="text-[#999999] hover:text-white hover:cursor-pointer">
                  Shopping Cart
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Wishlist
                </Typography>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 w-full">
              <div>
                <Typography align="left">Helps</Typography>
              </div>
              <div className="flex flex-col gap-y-3">
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Contact
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Faqs
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Terms & Condition
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Privacy Policy
                </Typography>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 w-full">
              <div>
                <Typography align="left">Proxy</Typography>
              </div>
              <div className="flex flex-col gap-y-3">
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  About
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Shop
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Product
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Track Order
                </Typography>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 w-full">
              <div>
                <Typography align="left">Categories</Typography>
              </div>
              <div className="flex flex-col gap-y-3">
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Fruit & Vegetables
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Meat & Fish
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Bread & Bakery
                </Typography>
                <Typography
                  align="left"
                  fontSize="sm"
                  className="text-[#999999] hover:text-white hover:cursor-pointer"
                >
                  Beauty & Health
                </Typography>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-[#333333] py-6 container mx-auto ">
            <Typography className="text-[#808080]">
              Developed by Digital Solution
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
