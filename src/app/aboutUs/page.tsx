import { AboutUsCard } from "@/components/ui/AboutUsCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CoreValueCard from "@/components/ui/CoreValueCard";
import { Footer } from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/Navigation";
import { OurTeamCard } from "@/components/ui/OurTeamCard";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* <div className="flex items-center gap-x-3 container mx-auto my-8">
          <GoHome />
          <IoIosArrowForward />
          <Typography className="text-[#008001]">About Us</Typography>
        </div> */}
        <Breadcrumb/>
      </div>

      <div className="container mx-auto">
        <AboutUsCard />
      </div>
        <CoreValueCard/>
        <OurTeamCard/>
    </div>
  );
};

export default page;
