import React from "react";
import { Typography } from "./Typography";
import Image from "next/image";
import { Button } from "./button";

const AboutUsCard = () => {
  return (
    <div>
      <div className="container mx-auto mb-10">
        <div className="flex items-center container mx-auto justify-between w-full gap-x-10 ">
          <div className="flex flex-col align-middle justify-center gap-y-10 w-full">
            <Typography
              align="left"
              className="font-extrabold text-[48px] text-[#1A1A1A] leading-snug"
            >
              100% Trusted Organic Food Store
            </Typography>
            <Typography
              align="left"
              className="text-[#666666] text-lg font-normal"
            >
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </Typography>
          </div>
          <div className="w-full">
            <Image
              src={"/images/aboutus1.png"}
              width={716}
              height={492}
              alt="about us 1"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="flex flex-col">
        {/* Mission */}
        <div className="flex items-center justify-between w-full ">
          <Image
            src={"/images/aboutus2.png"}
            width={716}
            height={685}
            alt="about us 1"
            className="object-cover"
          />

          <div className="flex flex-col align-middle justify-center gap-y-8 w-full">
            <Typography
              align="left"
              className="font-extrabold text-[48px] text-[#1A1A1A]"
            >
              Mission
            </Typography>
            <Typography
              align="left"
              className="text-[#666666] text-lg font-normal"
            >
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </Typography>

            {/* mission */}
            <div className="flex flex-row justify-start gap-x-5">
              <div className="flex flex-col gap-y-5 w-full">
                <div className="flex flex-row justify-start gap-x-5 items-center ">
                  <Image
                    src={"/icons/organic.svg"}
                    alt="organic"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col">
                    <Typography fontWeight="medium" fontSize="lg" align="left">
                      100% Organic food
                    </Typography>
                    <Typography
                      className="text-[#808080]"
                      fontSize="sm"
                      align="left"
                    >
                      100% healthy & Fresh food.
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-x-5 items-center ">
                  <Image
                    src={"/icons/feedback.svg"}
                    alt="organic"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col">
                    <Typography fontWeight="medium" fontSize="lg" align="left">
                      Customer Feedback
                    </Typography>
                    <Typography
                      className="text-[#808080]"
                      fontSize="sm"
                      align="left"
                    >
                      Our happy customer
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-x-5 items-center">
                  <Image
                    src={"/icons/shipping.svg"}
                    alt="organic"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col">
                    <Typography fontWeight="medium" fontSize="lg" align="left">
                      Free Shipping{" "}
                    </Typography>
                    <Typography
                      className="text-[#808080]"
                      fontSize="sm"
                      align="left"
                    >
                      Free shipping with discount
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-5 w-full">
                <div className="flex flex-row justify-start gap-x-5 items-center">
                  <Image
                    src={"/icons/support.svg"}
                    alt="organic"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col">
                    <Typography fontWeight="medium" fontSize="lg" align="left">
                      Great Support 24/7
                    </Typography>
                    <Typography
                      className="text-[#808080]"
                      fontSize="sm"
                      align="left"
                    >
                      Instant access to Contact
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-x-5 items-center">
                  <Image
                    src={"/icons/secure_payment.svg"}
                    alt="organic"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col">
                    <Typography fontWeight="medium" fontSize="lg" align="left">
                      100% Secure Payment
                    </Typography>
                    <Typography
                      className="text-[#808080]"
                      fontSize="sm"
                      align="left"
                    >
                      We ensure your money is save
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-x-5 items-center">
                  <Image
                    src={"/icons/package.svg"}
                    alt="organic"
                    width={64}
                    height={64}
                  />
                  <div className="flex flex-col">
                    <Typography fontWeight="medium" fontSize="lg" align="left">
                      100% Organic Food
                    </Typography>
                    <Typography
                      className="text-[#808080]"
                      fontSize="sm"
                      align="left"
                    >
                      100% healthy & Fresh food.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col align-middle justify-center gap-y-8 w-full">
            <Typography
              align="left"
              className="font-extrabold text-[48px] text-[#111928] leading-snug"
            >
              Vision
            </Typography>
            <Typography
              align="left"
              className="text-[#6B7280] text-lg font-normal"
            >
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </Typography>
            
            <div className="flex flex-col pt-10 gap-y-5 border-t-2 border-[#E5E7EB]">
                <div className="flex gap-x-5">
                    <Image src={"/icons/check.svg"} width={18} height={18} alt="check"/>
                    <Typography fontWeight="medium">
                    Continuous integration and deployment
                    </Typography>
                </div>
                <div className="flex gap-x-5" >
                    <Image src={"/icons/check.svg"} width={18} height={18} alt="check"/>
                    <Typography fontWeight="medium">
                    Development workflow
                    </Typography>
                </div> 
                <div className="flex gap-x-5">
                    <Image src={"/icons/check.svg"} width={18} height={18} alt="check"/>
                    <Typography fontWeight="medium">
                    Knowledge management
                    </Typography>
                </div>

                <button className="w-fit rounded-full px-8 py-5 bg-[#008001] text-white hover:bg-[#006001] hover:text-white">Shop Now</button>
            </div> 
           
          </div>
          <Image
            src={"/images/aboutus3.png"}
            width={716}
            height={685}
            alt="about us 1"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { AboutUsCard };
