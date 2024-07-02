import React from "react";
import { Typography } from "./Typography";
import Image from "next/image";
const CoreValueCard = () => {
  return (
    <div className="flex flex-col bg-[#F9FAFB] py-20 container mx-auto">
      <div className="flex flex-col gap-y-5 mx-80">
        <Typography
          fontWeight="extrabold"
          className="!text-[40px] text-[#111928]"
        >
          Core Value
        </Typography>
        <Typography className="text-[#6B7280]" fontSize="base">
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </Typography>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-20 mx-20 space-x-2">
        <div className="flex flex-col space-y-5 bg-[#FFFFFF] p-10 shadow-sm rounded-md">
          <Image
            src={"icons/platform.svg"}
            alt={"platform"}
            width={48}
            height={48}
          />
          <Typography
            fontWeight="semibold"
            fontSize="lg"
            align="left"
            className="text-[#111928]"
          >
            Platform
          </Typography>
          <Typography align="left" className="text-[#6B7280]">
            We keep Flowbite, secure, and free of spam and abuse so that this
            can be the platform where developers come together to create.
          </Typography>
        </div>

        <div className="flex flex-col space-y-5 bg-[#FFFFFF] p-10 shadow-sm rounded-md">
          <Image
            src={"icons/premium.svg"}
            alt={"platform"}
            width={48}
            height={48}
          />
          <Typography
            fontWeight="semibold"
            fontSize="lg"
            align="left"
            className="text-[#111928]"
          >
            Premium products
          </Typography>
          <Typography align="left" className="text-[#6B7280]">
            We embody the shift toward investments in safe and secure software
            design practices with our world-class front-end products.{" "}
          </Typography>
        </div>

        <div className="flex flex-col space-y-5 bg-[#FFFFFF] p-10 shadow-sm rounded-md">
          <Image
            src={"icons/feature.svg"}
            alt={"platform"}
            width={48}
            height={48}
          />
          <Typography
            fontWeight="semibold"
            fontSize="lg"
            align="left"
            className="text-[#111928]"
          >
            Features
          </Typography>
          <Typography align="left" className="text-[#6B7280]">
            Start with thousands of actions and applications from our community
            to help you build, improve, and accelerate your automated workflows.{" "}
          </Typography>
        </div>

        <div className="flex flex-col space-y-5 bg-[#FFFFFF] p-10 shadow-sm rounded-md">
          <Image
            src={"icons/support_24_7.svg"}
            alt={"platform"}
            width={48}
            height={48}
          />
          <Typography
            fontWeight="semibold"
            fontSize="lg"
            align="left"
            className="text-[#111928]"
          >
            Support 24/7
          </Typography>
          <Typography align="left" className="text-[#6B7280]">
            We provide high-quality services all around the world with personal
            assistance through our 24/7 premium service.{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export {CoreValueCard};
