"use client"
import React, { FC, useState } from 'react'
import { PopularTags } from './PopularTags'
interface PopularTag{
    tag: string
}

interface PopularTagSectionProps {
    popularTags: PopularTag[]
}

const PopularTagSection: FC<PopularTagSectionProps> = ({
    popularTags
}) => {
    const [activeTag, setActiveTag] = useState<string | null>(null)

  return (
    <div>
    <span className="text-[20px] font-medium text-[#111928]">
      Popular Tag
    </span>
    <div className="flex flex-wrap mt-4 space-x-2 space-y-2">
      {popularTags.map((popularTag, index)=>(
        <PopularTags key={index} tag={popularTag.tag} />
      ))}
    </div>
  </div>
  )
} 

export {PopularTagSection}