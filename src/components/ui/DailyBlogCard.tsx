import React, { FC } from 'react'
import Image from 'next/image'
import { PiTagThin } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";


interface DailyBlogCardProps {
    title: string
    date: string
    image: string
    content: string
}
const DailyBlogCard: FC<DailyBlogCardProps> = ({title, date, image, content}) => {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
    <Image
          src={image}
          alt={title}
          className="w-[469px] h-[394px] object-cover"
          width={469}
          height={394}
        />
      <div className="absolute bottom-[24.98px] left-[27px] bg-white text-gray-800 text-center  py-[19px] px-[20px] rounded">
        <p className="text-lg font-semibold">{date.split(" ")[0]}</p>
        <p className="text-xs">{date.split(" ")[1]}</p>
      </div>
    </div>
    <div className="p-4 text-left">
      <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
        <div className="flex items-center space-x-2">
        <PiTagThin size={20}/>
          <span>Food</span>
        </div>
        <div className="flex items-center space-x-2">
        <BsPerson size={20}/>
          <span>By Admin</span>
        </div>
        <div className="flex items-center space-x-2">
        <FaRegCommentAlt size={20}/>

          <span>65 Comments</span>
        </div>
      </div>
      <p className="text-sm text-left hover:text-[#2C742F] text-gray-800 mb-4 font-medium">
        {content}
      </p>
      <div className="text-[#008001] flex items-center space-x-2 font-medium">
        <span>Read More</span>
        <HiArrowRight size={24}/>
      </div>
    </div>
  </div>
  )
}

export default DailyBlogCard
