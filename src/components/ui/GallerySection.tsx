 import React, { FC } from 'react'
 import { Gallery } from './Gallery'
import Image from 'next/image'
 interface Gallery{
    image: string
    id: number
 }

 interface GallerySectionProps {
    gallerys: Gallery[]
 }
 const GallerySection:FC<GallerySectionProps> = ({
    gallerys
 }) => {
   return (
    <div>
    <h2 className="text-2xl font-semibold mb-4">Our Gallery</h2>
    <div className="grid grid-cols-4 gap-4">
      {gallerys.map((gallery, index) => (
        <Image
          key={index}
          src={gallery.image}
          alt={`Gallery Image ${gallery.id}`}
          width={103}
          height={103}
          className="w-[103px] h-[103px] rounded-lg object-cover aspect-square"
        />
      ))}
    </div>
  </div>
   )
 }
 
 export {GallerySection}