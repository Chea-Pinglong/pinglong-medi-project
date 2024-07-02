import React, { FC, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import { Typography } from "./Typography";
import { Button } from "./button";
interface ProductCardProps {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  discount: number;
}
const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  productType,
  image,
  discount,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div>
      <div className="border-2 border-[#E6E6E6] hover:border-[#008001]  relative py-4">
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white h-[43px] w-[122px] flex items-center justify-center text-base font-bold px-2 py-1 rounded">
            Sale {discount}%
          </div>
        )}
        <Image
          src={image}
          alt={name}
          width={328.5}
          height={337.3}
          className="mx-auto mb-4 object-contain"
        />
        <div className="flex items-center justify-between px-4">
          <div className="flex flex-col">
                <Typography fontSize="sm" fontWeight="medium" className="text-[#4D4D4D]" align="left">{productType}</Typography>
                <Typography fontWeight="extrabold" fontSize="lg" align="left">{name}</Typography>
                <div className="flex gap-x-1">
                    <Typography fontSize="xl" fontWeight="medium" className="text-[#1A1A1A]" align="left">{price}</Typography>
                    {discount >0 && (

                    <Typography fontSize="xl" fontWeight="normal"  align="left" className="line-through text-gray-500">{originalPrice}</Typography>
                    )}
                </div>
                <Image src={"/icons/rating.svg"} alt="rating" width={85} height={17}/>
          </div>
          <div>
            <Button
              variant={"ghost"}
              onClick={handleSelect}
              className={"bg-[#F2F2F2] hover:text-white hover:bg-[#008001] p-2 rounded-full"}
            >   
              <HiOutlineShoppingBag className="w-5  h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {ProductCard};
