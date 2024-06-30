"use client";
import Image from "next/image";
import { Navigation } from "@/components/ui/Navigation";
import { Typography } from "@/components/ui/Typography";
import { PopularCategories } from "@/components/ui/PopularCategories";
import { useEffect, useState } from "react";
import { PopularProducts } from "@/components/ui/PopularProducts";
import { SaleMaterialDiscountSection } from "@/components/ui/SaleMaterialDiscountSection";
import DailyBlogSection from "@/components/ui/DailyBlogSection";
import { CompanySection } from "@/components/ui/CompanySection";
import { Footer } from "@/components/ui/Footer";
import { HeroSection } from "@/components/ui/HeroSection";

interface Category {
  name: string;
  image: string;
}

interface Blog {
  title: string;
  date: string;
  image: string;
  content: string;
}

interface Product {
  name: string;
  price: string;
  originalPrice: string;
  productType: string;
  image: string;
  discount: number;
}
export default function Home() {
  const [category, setCategory] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/data");
      const data = await res.json();
      setCategory(data.category);
      setProduct(data.products);
      setBlogs(data.blogs);
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <Navigation />

    <div className="flex flex-col gap-y-12">
      <HeroSection/>
      {/* 4 card section */}
      <div className="grid grid-cols-4 container mx-auto">
        {/* free shipping */}
        <div className="h-[224px] flex flex-col justify-center align-middle items-center gap-y-4">
          <Image
            src={"/images/free_delivery.png"}
            alt={"free shopping icon"}
            width={72}
            height={72}
          />
          <div className="flex flex-col gap-y-2">
            <Typography fontWeight="medium" fontSize="xl">
              Free Shipping
            </Typography>
            <Typography
              fontWeight="normal"
              fontSize="sm"
              className="text-[#999999]"
            >
              Free shipping with discount
            </Typography>
          </div>
        </div>

        {/* support 24/7 */}
        <div className="h-[224px] flex flex-col justify-center align-middle items-center gap-y-4">
          <Image
            src={"/images/support.png"}
            alt={"support icon"}
            width={72}
            height={72}
          />
          <div className="flex flex-col gap-y-2">
            <Typography fontWeight="medium" fontSize="xl">
              Great Support 24/7
            </Typography>
            <Typography
              fontWeight="normal"
              fontSize="sm"
              className="text-[#999999]"
            >
              Instant access to Contact
            </Typography>
          </div>
        </div>

        {/* secure payment */}
        <div className="h-[224px] flex flex-col justify-center align-middle items-center gap-y-4">
          <Image
            src={"/images/payment.png"}
            alt={"secure payment icon"}
            width={72}
            height={72}
          />
          <div className="flex flex-col gap-y-2">
            <Typography fontWeight="medium" fontSize="xl">
              100% Secure Payment
            </Typography>
            <Typography
              fontWeight="normal"
              fontSize="sm"
              className="text-[#999999]"
            >
              We ensure your money is saved
            </Typography>
          </div>
        </div>

        {/* guarantee */}
        <div className="h-[224px] flex flex-col justify-center align-middle items-center gap-y-4">
          <Image
            src={"/images/guarantee.png"}
            alt={"money back guarantee icon"}
            width={72}
            height={72}
          />
          <div className="flex flex-col gap-y-2">
            <Typography fontWeight="medium" fontSize="xl">
              Money-Back Guarantee
            </Typography>
            <Typography
              fontWeight="normal"
              fontSize="sm"
              className="text-[#999999]"
            >
              30 days money-back
            </Typography>
          </div>
        </div>
      </div>
      <hr className="container mx-auto w-full" />
      <PopularCategories categories={category} />
      <PopularProducts products={product} />
      <SaleMaterialDiscountSection />
      <DailyBlogSection blogs={blogs} />
      <CompanySection />
      <Footer/>
    </div>
    </div>
  );
}
