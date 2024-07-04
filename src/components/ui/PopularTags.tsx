"use client";
import React, { FC, useState } from "react";

interface PopularTagProps {
  tag: string
}

const PopularTags: FC<PopularTagProps> = ({
  tag
}) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
   
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
  )
};

export {PopularTags};