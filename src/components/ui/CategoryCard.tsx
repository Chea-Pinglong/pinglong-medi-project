import React from "react";
import Image from "next/image";
interface CategoryCardProps {
  name: string;
  image: string;
  isSelected?: boolean; // Optional prop to handle selected state
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  isSelected,
}) => {
  return (
    <div
      className={`p-4 border ${
        isSelected ? "border-green-500" : "border-gray-300"
      } rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
    >
      <Image
        src={image}
        alt={name}
        width={176}
        height={160}
        className="mx-auto mb-4 w-[176px] h-[160px] object-contain"
      />
      <p className="text-center">{name}</p>
    </div>
  );
};

export default CategoryCard;
