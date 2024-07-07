"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const images = [
  '/images/medical.png',
  '/images/medical.png',
  '/images/medical.png'
];

const CarouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const transitionEnd = setTimeout(() => {
        if (currentIndex === images.length) {
          setCurrentIndex(0);
        } else if (currentIndex === -1) {
          setCurrentIndex(images.length - 1);
        }
        setIsTransitioning(false);
      }, 300); // The duration should match your CSS transition duration

      return () => clearTimeout(transitionEnd);
    }
  }, [currentIndex, isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="relative container mx-auto bg-[#F2F2F2] h-[640px] flex items-center">
      <button
        onClick={prevSlide}
      >
        <FaChevronLeft size={45} />
      </button>
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-300 ${isTransitioning ? '' : 'transition-none'}`}
          style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
        >
          {[images[images.length - 1], ...images, images[0]].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full flex items-center justify-center text-left space-x-10">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover"
                width={639}
                height={531}
              />
              <div className="flex flex-col">
                <div className="flex flex-col w-full items-start">
                  <span className="text-[#008001] text-[18px] font-semibold">
                    Medicom experienced since 1993 in
                  </span>
                  <h1 className="text-[52px] font-extrabold">
                    Medical Equipment Provider
                  </h1>
                </div>
                <div className="flex flex-col items-start mt-10">
                  <p className="text-[32px]">
                    Sale up to{' '}
                    <strong className="text-[#FF8A00] font-medium">30% OFF</strong>
                  </p>
                  <span>
                    Medicom is one of the major supplier of medical and Laboratory
                    Equipment throughout the kingdom.
                  </span>
                  <button className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
                    <span>Shop Now</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
      >
        <FaChevronRight size={45} />
      </button>
    </div>
  );
};

export {CarouselCard};
