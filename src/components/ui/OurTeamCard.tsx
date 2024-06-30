import React from "react";
import { Typography } from "./Typography";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "./button";
import Image from "next/image";

const OurTeamCard = () => {
  return (
    <div className="container mx-auto bg-white py-10 flex flex-col gap-y-10">
      <div className="flex flex-row justify-between mx-20">
        <div className="flex flex-col space-y-5">
          <Typography
            align="left"
            className="text-[#111928] !text-[40px]"
            fontWeight="extrabold"
          >
            Our Team
          </Typography>
          <Typography
            align="left"
            className="text-[#6B7280] w-[600px]"
          >
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </Typography>
        </div>
        <div className="flex align-middle items-center space-x-3">
          <Button
            variant={"outline"}
            className="rounded-full border-2 w-12 h-12 bg-white text-black border-[#E6E6E6] hover:bg-[#008001] hover:text-white hover:border-none"
          >
            <FaArrowLeft size={15} />
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full border-2 w-12 h-12 bg-white text-black border-[#E6E6E6] hover:bg-[#008001] hover:text-white hover:border-none"
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-20">
        <div className="flex flex-col align-middle justify-center items-center space-y-3 ">
          <Image src={"/images/team1.png"} alt="team" width={144} height={144}/>
          <Typography fontWeight="extrabold" fontSize="lg">Bonnie Green</Typography>
          <Typography fontWeight="medium"  className="text-[#6B7280]">Senior Front-end Developer</Typography>
          <div className="flex flex-row gap-x-3">
            <Image src={"/icons/facebook.svg"} alt="facebook" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
            <Image src={"/icons/linkedin.svg"} alt="linkedin" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
          </div>
        </div>

        <div className="flex flex-col align-middle justify-center items-center space-y-3">
          <Image src={"/images/team2.png"} alt="team" width={144} height={144}/>
          <Typography fontWeight="extrabold" fontSize="lg">Bonnie Green</Typography>
          <Typography fontWeight="medium"  className="text-[#6B7280]">Senior Front-end Developer</Typography>
          <div className="flex flex-row gap-x-3">
            <Image src={"/icons/facebook.svg"} alt="facebook" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
            <Image src={"/icons/linkedin.svg"} alt="linkedin" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
          </div>
        </div>


        <div className="flex flex-col align-middle justify-center items-center space-y-3">
          <Image src={"/images/team3.png"} alt="team" width={144} height={144}/>
          <Typography fontWeight="extrabold" fontSize="lg">Bonnie Green</Typography>
          <Typography fontWeight="medium"  className="text-[#6B7280]">Senior Front-end Developer</Typography>
          <div className="flex flex-row gap-x-3">
            <Image src={"/icons/facebook.svg"} alt="facebook" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
            <Image src={"/icons/linkedin.svg"} alt="linkedin" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
          </div>
        </div>

        <div className="flex flex-col align-middle justify-center items-center space-y-3">
          <Image src={"/images/team4.png"} alt="team" width={144} height={144}/>
          <Typography fontWeight="extrabold" fontSize="lg">Bonnie Green</Typography>
          <Typography fontWeight="medium"  className="text-[#6B7280]">Senior Front-end Developer</Typography>
          <div className="flex flex-row gap-x-3">
            <Image src={"/icons/facebook.svg"} alt="facebook" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
            <Image src={"/icons/linkedin.svg"} alt="linkedin" width={20} height={20}/>
            <Image src={"/icons/telegram.svg"} alt="telegram" width={20} height={20}/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export { OurTeamCard };
