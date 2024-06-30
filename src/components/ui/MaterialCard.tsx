import React from 'react'
import Image from 'next/image'
import { Typography } from './Typography'
import { Timer } from './Timer'
import { HiArrowRight } from "react-icons/hi2";
import { Button } from './button'
const MaterialCard = () => {
  return (
    // Material of the month
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{
        backgroundImage: `url('/images/Material.png')`,
        objectFit: "cover",
      }}
    >
      <div className="relative z-10 space-y-[20px] p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-white uppercase tracking-[1px]">
          New Products
        </p>
        <h3 className="text-4xl font-bold text-white">Material Doctor</h3>
        {/* <Timer targetDate="2024-08-06T23:59:59" /> */}
        <div className='flex gap-x-2'>

        <span className='text-white font-normal text-lg'>Started at</span>
        <span className='text-[#D82525] font-semibold text-lg'>$79.99</span>
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

export  {MaterialCard}
