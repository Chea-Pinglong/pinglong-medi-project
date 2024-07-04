import React, { FC } from "react";
import {DailyBlogCard} from "./DailyBlogCard";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { Button } from "./button";

interface Blog {
  title: string;
  date: string;
  image: string;
  content: string;
}

interface DailyBlogSectionProps {
  blogs: Blog[];
}
const DailyBlogSection: FC<DailyBlogSectionProps> = ({ blogs }) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F2F5F3] pb-[68px]">
      <div>
        <div className="container mx-auto text-center">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-8">Daily Blog</h2>
            <div className="flex items-center space-x-2">
              <Button className="text-gray-700 bg-[#F2F2F2] p-[10px] hover:bg-[#008001] hover:text-white rounded-full flex items-center justify-center">
                <HiArrowLeft />{" "}
              </Button>
              <Button className="text-gray-700 bg-[#F2F2F2] p-[10px] hover:bg-[#008001] hover:text-white rounded-full flex items-center justify-center">
                <HiArrowRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs.map((blog, index) => (
              <DailyBlogCard
                key={index}
                title={blog.title}
                date={blog.date}
                image={blog.image}
                content={blog.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export {DailyBlogSection};
