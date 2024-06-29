import React from 'react'
import { cn } from '@/lib/utils'
import { HiOutlineMapPin } from "react-icons/hi2";
const Navigation = () => {
  return (
    <div className='flex flex-col bg-red-500 mx-[140px]'>
      {/* first navbar */}
      <div className='flex flex-row justify-between bg-blue-500'>
        <div>
          <HiOutlineMapPin />
          <h5></h5>
          
          </div>
        <div>23</div>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  )
}

export {Navigation}
