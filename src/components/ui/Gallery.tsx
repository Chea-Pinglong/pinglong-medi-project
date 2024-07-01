import React from "react";
import Image from "next/image";
const images = [
  "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1552841847-0e031d33a283?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1524823226/photo/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.webp?b=1&s=170667a&w=0&k=20&c=S5dNqLRpZc0WNlgtxgQAFj1x41_qsM1bL9qioqtHIxw=",
  "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
];

const Gallery: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Our Gallery</h2>
      <div className="grid grid-cols-4 gap-4">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            width={103}
            height={103}
            className="w-[103px] h-[103px] rounded-lg object-cover aspect-square"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;