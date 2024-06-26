'use client'

import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import useWindowSize from './useWindowSize'; // Custom hook to get window size
import ProductCard from "./ProductCard";

function HomepageProductCarousel({ productList }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { width } = useWindowSize(); // Get the current window width

    // Determine number of items per slide based on screen width
    const getItemsPerSlide = () => {
        if (width >= 1024) return 4; // Large screens
        if (width >= 768) return 3; // Medium screens
        if (width >= 640) return 2; // Small screens
        return 1; // Extra small screens
    };

    const itemsPerSlide = getItemsPerSlide();
    const totalSlides = productList.length - 3;

    useEffect(() => {
        console.log(`Width: ${width}, Items per Slide: ${itemsPerSlide}, Total Slides: ${totalSlides}`);
    }, [width, itemsPerSlide, totalSlides]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? totalSlides - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === totalSlides - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Optionally enable mouse swiping
    });

    // Render a simple grid if the product list is less than or equal to items per slide
    if (productList.length <= itemsPerSlide) {
        return (
            <div className="grid gap-4 px-5" style={{ gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)` }}>
                {productList.map((product, index) => (
                    <div key={`${product?.brand}-${index}`} className="w-full">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        );
    }

    // Render the carousel if the product list is greater than items per slide
    return (
        <div {...handlers} className="relative w-full overflow-hidden">
            <div
                className="grid transition-transform duration-300 mb-2 px-5"
                style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
                    gridTemplateColumns: `repeat(${productList.length}, calc(${100 / itemsPerSlide}% - 10px))`,
                    gap: '10px'
                }}
            >
                {productList.map((product, index) => (
                    <div key={`${product?.brand}-${index}`} className="w-full">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black px-6 py-4 rounded-full border bg-slate-200 hover:bg-green-200"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black px-6 py-4 rounded-full border bg-slate-200 hover:bg-green-200"
            >
                &#10095;
            </button>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomepageProductCarousel;
