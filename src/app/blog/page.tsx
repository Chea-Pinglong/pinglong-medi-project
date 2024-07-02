"use client";

import {DailyBlogCard} from "@/components/ui/DailyBlogCard";
import {Breadcrumb} from "@/components/ui/Breadcrumb";
import {Gallery} from "@/components/ui/Gallery";
import {PopularTags} from "@/components/ui/PopularTags";
import {RecentAdd} from "@/components/ui/RecentAdd";
import {TopCategories} from "@/components/ui/TopCategories";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import {Pagination} from "@/components/ui/Pagination";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogData = [
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Curabitur porttitor orci eget neque accumsan.",
    date: "Jun 25, 2023",
    image:
      "https://images.unsplash.com/photo-1718879329566-82d40c4175d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Blog = () => {
  const resultsFound = 52; // Replace with dynamic data if necessary
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto flex flex-col items-center w-full mb-10">
      <div className="w-full">
        <div className="mb-8">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-between w-full mb-8">
          <button className="flex items-center space-x-2 rounded-full bg-[#008001] text-white px-[40px] py-[13.5px]">
            <span className="text-[16px] font-semibold">Filter</span>
            <CiSliderHorizontal />
          </button>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-[16px]">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:border-gray-500">
                  <option>Latest</option>
                  <option>Oldest</option>
                  <option>Most Popular</option>
                  <option>Least Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="text-gray-800 text-[16px] font-semibold">
            {resultsFound} Results Found
          </span>
        </div>

        <div className="flex items-start space-x-[20px]">
          <div className="w-[469px] flex flex-col items-start space-y-[20px]">
            {/* Search Input */}
            <div className="flex items-center">
              <div className="relative w-[469px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <FaSearch />
                </div>
                <input
                  type="search"
                  id="search-dropdown"
                  className="block pl-12 pr-[24px] py-[14px] w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-lg border border-gray-300 focus:outline-none"
                  placeholder="Search..."
                  required
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full h-[1px]" />
            {/* Top Categories */}
            <TopCategories />
            <div className="bg-gray-200 w-full h-[1px]" />
            {/* Popular Tags */}
            <PopularTags />
            <div className="bg-gray-200 w-full h-[1px]" />
            {/* Our Gallery */}
            <Gallery />
            {/* Recently Added */}
            <RecentAdd />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentBlogs.map((blog, index) => (
              <Link href={`/blog/${index}`} key={index}>
                <DailyBlogCard
                  title={blog.title}
                  date={blog.date}
                  image={blog.image}
                  content={blog.content}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(blogData.length / blogsPerPage)}
            onPageChange={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
