'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-80 w-full">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
        <p className="text-gray-500 text-lg">{product.subname}</p>
        <div className="flex items-center mt-2 mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`mr-1 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
          <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
        </div>
        <div className="relative">
          <p className={`text-2xl font-bold text-gray-900 transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>${product.price.toFixed(2)}</p>
          <button className={`absolute inset-0 w-full bg-gray-900 text-white font-bold py-5 px-4 rounded focus:outline-none transition-opacity duration-300 flex items-center justify-center ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <FaShoppingCart className="mr-2" /> QUICK ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
