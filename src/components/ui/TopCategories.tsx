import React from "react";

const topCategories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

const TopCategories: React.FC = () => {
  return (
    <div className="flex flex-col space-y-[16px] w-full">
      <span className="text-[20px] font-medium text-[#111928]">
        Top Categories
      </span>
      {topCategories.map((category) => (
        <div
          key={category.name}
          className="flex items-center justify-between w-full"
        >
          <span className="text-sm">{category.name}</span>
          <span className="text-[#6B7280]">({category.count})</span>
        </div>
      ))}
    </div>
  );
};

export {TopCategories};