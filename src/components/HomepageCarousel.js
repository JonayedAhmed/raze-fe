'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import carousel1 from '../../public/images/carousel1.jpg';
import carousel2 from '../../public/images/carousel2.jpg';
import Image from 'next/image';

const productList = [carousel1, carousel2];

function HomepageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === productList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Optionally enable mouse swiping
  });

  return (
    <div {...handlers} className="relative w-full h-98 overflow-hidden">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {productList.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black p-2 px-6 py-4 rounded-full border bg-slate-200 hover:bg-green-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black p-2 px-6 py-4 rounded-full border bg-slate-200 hover:bg-green-200"
      >
        &#10095;
      </button>
    </div>
  );
}

export default HomepageCarousel;
