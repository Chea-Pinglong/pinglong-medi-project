import React from 'react'
import Image from 'next/image'
import { Typography } from './Typography'
import { Timer } from './Timer'
import { HiArrowRight } from "react-icons/hi2";
import { Button } from './button'
const SaleCard = () => {
  return (
    // sale of the month
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{
        backgroundImage: `url('/images/sale.png')`,
        objectFit: "cover",
      }}
    >
      <div className="relative z-10 space-y-[20px] p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-gray-500 uppercase tracking-[1px]">
          BEST DEALS
        </p>
        <h3 className="text-4xl font-bold text-gray-800">Sale of the Month</h3>
        <Timer targetDate="2024-08-06T23:59:59" />
        <Button variant={'ghost'} className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
          <span>Shop Now</span>
          {/* <ArrowRightIcon /> */}
          <HiArrowRight size={24}/>
        </Button>
      </div>
    </div>
  )
}

export  {SaleCard}
