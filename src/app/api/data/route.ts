import { NextResponse } from "next/server";
import { describe } from "node:test";

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
      title: "Blog Post 2",
      date: "18 Nov",
      image: "/images/blog2.png",
      content:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      title: "Blog Post 3",
      date: "18 Nov",
      image: "/images/blog3.png",
      content:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    // Add more blogs
  ],
  comments: [
     {
    name: "Annette Black",
    date: "26 Apr, 2021",
    message:
      "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Devon Lane",
    date: "24 Apr, 2021",
    message:
      "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.",
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jacob Jones",
    date: "20 Apr, 2021",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image:
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Jane Cooper",
    date: "18 Apr, 2021",
    message:
      "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.",
    image:
    "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Darrell Steward",
    date: "7 Apr, 2021",
    message: "Nulla molestie interdum ultricies.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  ],
  gallerys: [
    {
      id: 1,
      image:
      "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      image:
      "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      image:
      "https://images.unsplash.com/photo-1552841847-0e031d33a283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      image:
      "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      image:
      "https://media.istockphoto.com/id/1524823226/photo/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.webp?b=1&s=170667a&w=0&k=20&c=S5dNqLRpZc0WNlgtxgQAFj1x41_qsM1bL9qioqtHIxw=",
    },
    {
      id: 8,
      image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
    }
  ],
  tags : [
    {
    tag: "Healthy"
    },{
     tag: "Low fat"
    },{
      tag: "Vegetarian"
    },{
      tag: "Bread"
    },{
     tag: "Kid foods"
    },{
    tag:  "Vitamins"
    },{
     tag: "Snacks"
    },{
     tag: "Tiffin"
    },{
     tag: "Meat"
    },{
   tag:   "Lunch"
    },{
     tag: "Dinner"
    }
    
  ]
};

export async function GET() {
  return NextResponse.json(data);
}
