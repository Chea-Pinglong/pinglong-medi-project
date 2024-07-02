"use client";

import React, { useState } from "react";

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Lunch",
  "Dinner",
];

const PopularTags: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <div>
      <span className="text-[20px] font-medium text-[#111928]">
        Popular Tag
      </span>
      <div className="flex flex-wrap mt-4 space-x-2 space-y-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 mt-2 text-sm font-medium rounded-full ${
              activeTag === tag
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export {PopularTags};