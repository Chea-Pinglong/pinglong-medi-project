import Breadcrumb from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="container mx-auto">
        <div className="flex flex-row gap-x-5 py-8">
          <div className="flex flex-col bg-white rounded-[8px] drop-shadow-lg w-[450px] space-y-[26px] px-[35px] py-6">
            <div className="flex flex-col justify-center items-center gap-y-4 py-6">
              <Image
                src={"/icons/location.svg"}
                width={51}
                height={51}
                alt="location"
              />
              <Typography className="text-[#374151]">
                No.2A, Down Town Road No 7, Kork Chambak Village, Phnom Penh.
              </Typography>
            </div>

            <hr className="" />

            <div className="flex flex-col justify-center items-center gap-y-4 py-6">
              <Image
                src={"/icons/mail.svg"}
                width={51}
                height={51}
                alt="location"
              />
              <Typography className="text-[#374151]">
                info@medi.com, <br />
                jycatry@medi.com
              </Typography>
            </div>

            <hr className="px-[35px]" />

            <div className="flex flex-col justify-center items-center gap-y-4 py-6">
              <Image
                src={"/icons/phone.svg"}
                width={51}
                height={51}
                alt="location"
              />
              <Typography className="text-[#374151]">
                052 804 122 <br />
                (164) 333-0487
              </Typography>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-[8px] drop-shadow-lg p-8 gap-y-6 w-full ">
            <div className="flex flex-col gap-y-1">
              <Typography align="left" fontSize="32" fontWeight="semibold">
                Just Say Hello!
              </Typography>
              <Typography
                align="left"
                fontSize="sm"
                className="w-[533px] text-[#808080]"
              >
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </Typography>
            </div>

            <form className="flex flex-col space-y-4">
              <div className="flex flex-row justify-between w-full gap-x-8">
                <div className="flex flex-col gap-y-2 w-full">
                  <Label className="text-base" htmlFor="name">Full name</Label>
                  <input type="text" id="name" placeholder="example: john" className="border-2 border-[#D1D5DB] px-5 py-[14px] rounded-[8px] bg-[#F9FAFB]"/>
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                  <Label className="text-base" htmlFor="name">Email</Label>
                  <input type="email" id="email" placeholder="name@example.com" className="border-2 border-[#D1D5DB] px-5 py-[14px] rounded-[8px] bg-[#F9FAFB]"/>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full gap-x-8">
                <div className="flex flex-col gap-y-2 w-full">
                  <Label className="text-base" 
                    htmlFor="reason"
                  >
                    Reason
                  </Label>
                  <select id="reason" name="reason" className="border-2 border-[#D1D5DB] px-5 py-[14px] rounded-[8px] bg-[#F9FAFB]">
                    <option>Choose your reason</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-y-2 w-full">
                  <Label className="text-base" htmlFor="email">Phone number</Label>
                  <input type="tel" placeholder="+(12) 345 6789" className="border-2 border-[#D1D5DB] px-5 py-[14px] rounded-[8px] bg-[#F9FAFB]"/>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <Label className="text-base">Your message</Label>
                <br />
                <textarea placeholder="Hello I" className="border-2 border-[#008001] px-5 py-[14px] rounded-[8px] bg-[#F9FAFB] h-40"/>
              </div>

              <Button variant={'destructive'} className="w-fit px-10 py-5 rounded-full bg-[#008001]"> Send Message</Button>
            </form>

          </div>
        </div>

        <div>
          <Image src={"/images/map.png"} alt="map" height={400} width={1728} className="h-full"/>
        </div>
      </div>
    </div>
  );
};

export default page;
