/* eslint-disable @next/next/no-img-element */
"use client";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CommentSection } from "@/components/ui/CommentSection";
import { Gallery } from "@/components/ui/Gallery";
import { GallerySection } from "@/components/ui/GallerySection";
import { PopularTagSection } from "@/components/ui/PopularTagSection";
import { RecentAdd } from "@/components/ui/RecentAdd";
import { TopCategories } from "@/components/ui/TopCategories";
import { useEffect, useState } from "react";
import {
  FaComment,
  FaInstagram,
  FaPinterestP,
  FaSearch,
  FaTag,
  FaTwitter,
} from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";

interface CommentData {
  name: string;
  date: string;
  image: string;
  message: string;
}

interface Gallery {
  image: string;  
  id: number;
}

interface PopularTag {
  tag: string
}

const BlogDetail = () => {
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [popularTag, setPopularTag] = useState<PopularTag[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      setCommentData(data.comments);
      setGallery(data.gallerys);
      setPopularTag(data.tags)
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center w-full mb-10">
        <div className="w-full">
          <div className="mb-8">
            <Breadcrumb />
          </div>

          <div className="flex items-start space-x-[20px]">
            <div className="w-full flex flex-1 flex-col space-y-[37.5px]">
              <img
                src="https://images.pexels.com/photos/8326474/pexels-photo-8326474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
                className="h-[600px] object-cover rounded-lg"
              />

              <div className="flex flex-col px-8 w-full items-start space-y-[16px]">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {/* <TagIcon className="w-5 h-5 text-[#008001]" /> */}
                    <FaTag />
                    <span>Food</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* <UserIcon className="w-5 h-5 text-[#008001]" /> */}
                    <IoPersonOutline size={20} />

                    <span>By Admin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* <CommentIcon className="w-5 h-5 text-[#008001]" /> */}
                    <FaComment size={20} color="#008001" />
                    <span>Comments</span>
                  </div>
                </div>
                <span className="text-[32px] font-semibold text-gray-900">
                  Maecenas tempor urna sed quam mollis, a placerat dui fringill
                  Suspendisse.
                </span>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="profile"
                      className="object-cover w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col items-start space-y-1">
                      <span className="text-[16px] font-medium">
                        Cameron Williamson
                      </span>
                      <span className="text-gray-600 text-[14px]">
                        4 April, 2021 • 6 min read
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                      {/* <FacebookIcon className="w-6 h-6" /> */}
                      <SlSocialFacebook />
                    </button>
                    <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                      {/* <TwitterIcon className="w-6 h-6" /> */}
                      <FaTwitter />
                    </button>
                    <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                      {/* <PinterestIcon className="w-6 h-6" /> */}
                      <FaPinterestP />
                    </button>
                    <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                      {/* <InstagramIcon className="w-6 h-6" /> */}
                      <FaInstagram />
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-400" />

              <div className="flex flex-col w-full items-start space-y-[20px]">
                <span className="text-gray-900 text-[20px] font-medium">
                  Maecenas lacinia felis nec placerat sollicitudin. Quisque
                  placerat dolor at scelerisque imperdiet. Phasellus tristique
                  felis dolor.
                </span>
                <span className="text-[18px] text-gray-500 text-justify">
                  Maecenas elementum in risus sed condimentum. Duis convallis
                  ante ac tempus maximus. Fusce malesuada sed velit ut dictum.
                  Morbi faucibus vitae orci at euismod. Integer auctor augue in
                  erat vehicula, quis fermentum ex finibus.
                </span>
                <span className="text-[18px] text-gray-500 text-justify">
                  Mauris pretium elit a dui pulvinar, in ornare sapien euismod.
                  Nullam interdum nisl ante, id feugiat quam euismod commodo.
                  Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim
                  justo, at fermentum turpis. Sed molestie, ligula ut molestie
                  ultrices, tellus ligula viverra neque, malesuada consectetur
                  diam sapien volutpat risus. Quisque eget tortor lobortis,
                  facilisis metus eu, elementum est. Nunc sit amet erat quis ex
                  convallis suscipit. ur ridiculus mus.
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src="/images/image1.png"
                  alt="image-01"
                  className="h-[356px] w-1/2 object-cover rounded-lg"
                />
                <img
                  src="/images/image2.png"
                  alt="image-02"
                  className="h-[356px] w-1/2 object-cover rounded-lg"
                />
              </div>

              <span className="text-[18px] text-gray-500 text-justify">
                Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate
                quis vehicula ut, vestibulum ut mauris. Nullam non felis varius
                dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem
                sed luctus. Proin iaculis euismod metus non sollicitudin. Duis
                vel luctus lacus. Nullam faucibus iaculis convallis. In
                ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer
                accumsan arcu nec faucibus ultricies.
              </span>

              <img
                src="/images/image3.png"
                alt="banner"
                className="rounded-lg object-cover"
              />

              {/* Leave a Comment */}
              <div className="flex flex-col w-full space-y-4 mt-8">
                <h2 className="text-2xl font-semibold">Leave a Comment</h2>
                <form className="w-full flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="full-name"
                        className="text-sm text-gray-600"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        placeholder="example : John"
                        className="border border-gray-300 rounded-lg p-2"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="email" className="text-sm text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@gmail.com"
                        className="border border-gray-300 rounded-lg p-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm text-gray-600">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Hello I..."
                      className="border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="save-info"
                      className="border-gray-300 rounded"
                    />
                    <label
                      htmlFor="save-info"
                      className="text-sm text-gray-600"
                    >
                      Save my name and email in this browser for the next time I
                      comment.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#008001] w-[204px] text-white font-semibold rounded-full py-2 px-8"
                  >
                    Post Comments
                  </button>
                </form>
              </div>

              {/* Comments */}
              <CommentSection comments={commentData} />
            </div>
            <div className="w-[469px] flex flex-col items-start space-y-[20px]">
              {/* Search Input */}
              <div className="flex items-center">
                <div className="relative w-[469px]">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    {/* <SearchIcon /> */}
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
              <PopularTagSection popularTags={popularTag} />
              <div className="bg-gray-200 w-full h-[1px]" />
              {/* Our Gallery */}
              <GallerySection gallerys={gallery} />
              {/* Recently Added */}
              <RecentAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
