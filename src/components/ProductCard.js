import React from 'react';
import Image from 'next/image';

const ProductCard = ({ brand, imageUrl, startDate, endDate, discount, purchaseMedium, category, couponCode, paymentMethodDiscount }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[345px]">
            <Image src={imageUrl} alt={`${brand} image`} className="w-full h-48 object-contain" width={400} height={200} />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">{brand}</h2>
                <div className="mt-4">
                    <div className="flex items-center justify-between text-gray-600">
                        <span className="text-sm">From:</span>
                        <span className="text-sm">{startDate ? startDate : '-'}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                        <span className="text-sm">To:</span>
                        <span className="text-sm">{endDate ? endDate : '-'}</span>
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">
                        {discount}
                    </span>
                    {paymentMethodDiscount &&
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-200 rounded-full">
                            {paymentMethodDiscount}
                        </span>
                    }
                </div>
                <div className="mt-4 text-gray-600">
                    <p>Purchase Medium: <span className="font-medium text-gray-900">{purchaseMedium}</span></p>
                    <p>Category: <span className="font-medium text-gray-900">{category}</span></p>
                </div>

                <div className="mt-4">
                    <p className="text-gray-600">Coupon Code:</p>
                    <p className="font-mono text-lg font-semibold text-gray-900 bg-gray-200 p-2 rounded">{couponCode ? couponCode : 'N/A'}</p>
                </div>

                {/* Will be available soon */}
                {/* <div className="mt-6">
                    <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300">
                        Shop Now
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default ProductCard;