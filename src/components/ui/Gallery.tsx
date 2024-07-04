import React, { FC } from "react";
import Image from "next/image";

interface GalleryProps {
  image: string
  id:  number
}
   
const Gallery:FC<GalleryProps> = ({ 
  image,
  id
}) => {
  return (
    <div>
          <Image
            src={image}
            alt={`Gallery Image ${id}`}
            width={103}
            height={103}
            className="w-[103px] h-[103px] rounded-lg object-cover aspect-square"
          />
    </div>
  );
};

export {Gallery};