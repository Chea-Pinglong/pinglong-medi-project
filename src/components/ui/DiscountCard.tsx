import React from 'react'
import Image from 'next/image'
import { Typography } from './Typography'
import { Timer } from './Timer'
import { HiArrowRight } from "react-icons/hi2";
import { Button } from './button'
const DiscountCard = () => {
  return (
    // Discount of the month
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{
        backgroundImage: `url('/images/Discount.png')`,
        objectFit: "cover",
      }}
    >
      <div className="relative z-10 space-y-[20px] p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-[#1A1A1A] uppercase tracking-[1px]">
        Summer Sale
        </p>
        <h3 className="text-4xl font-bold text-[#1A1A1A]">Discount</h3>
        <div className='flex items-center gap-x-2'>

<span className='text-[#1A1A1A] font-normal text-lg'>Up to</span>
<span className='text-[#FCC900] font-semibold text-lg uppercase bg-[#1A1A1A] py-[6px] px-3 rounded-sm'>64% off</span>
</div>
<Button variant={'ghost'} className="mt-6 px-8 py-4 border-2 bg-white border-[#008001] text-[#008001] rounded-full flex items-center justify-center space-x-2">
          <span>Shop Now</span>
          {/* <ArrowRightIcon /> */}
          <HiArrowRight size={24}/>
        </Button>
      </div>
    </div>
  )
}

export  {DiscountCard}
