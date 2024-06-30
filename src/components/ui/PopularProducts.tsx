import React, { FC } from "react";
import { Typography } from "./Typography";
import Image from "next/image";
import ProductCard from "./ProductCard";
interface Product {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  discount: number;
}
interface PopularProductsProps {
  products: Product[];
}
const PopularProducts: FC<PopularProductsProps> = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-between">
          <Typography fontSize="32" fontWeight="semibold">
            Popular Products
          </Typography>
          <div className="flex items-center space-x-2 text-[#008001]">
            <Typography fontSize="base" fontWeight="medium">
              View All
            </Typography>
            <Image
              src={"/icons/arrowRight.svg"}
              alt="arrow right"
              width={15}
              height={12}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-[32px]">
            {products.map((product, index)=>(
                <ProductCard 
                key={index}
                name={product.name} 
                price={product.price} 
                originalPrice={product.originalPrice} 
                productType={product.productType} 
                image={product.image} 
                discount={product.discount}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export { PopularProducts };
