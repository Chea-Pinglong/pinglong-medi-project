import { NextResponse } from "next/server";

const data = {
  category: [
    { name: "Syringe and needles", image: "/images/syringe.png" },
    { name: "Suture", image: "/images/suture.png" },
    { name: "Blood Bag", image: "/images/blood_bag.png" },
    { name: "Blood Lancet", image: "/images/blood_lancets.png" },
    { name: "Urine Bag", image: "/images/urine_bag.png" },
    { name: "Medical Tube", image: "/images/medical_tube.png" },
  ],
  products: [
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 50,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 50,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 0,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",

      discount: 0,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 50,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 0,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 0,
    },
    {
      name: "Sarasoft AG",
      price: "$14.99",
      productType: "HealthCare",
      originalPrice: "$20.99",
      image: "/images/product.png",
      discount: 0,
    },
    // Add more products
  ],
  blogs: [
    {
      title: "Blog Post 1",
      date: "18 Nov",
      image: "/images/blog1.png",
      content:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      title: "Blog Post 1",
      date: "18 Nov",
      image: "/images/blog2.png",
      content:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      title: "Blog Post 1",
      date: "18 Nov",
      image: "/images/blog3.png",
      content:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    // Add more blogs
  ],
};

export async function GET() {
  return NextResponse.json(data);
}
