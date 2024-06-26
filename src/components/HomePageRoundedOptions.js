import React from 'react'
import Image from "next/image";
import { allNavItems } from '../common/navbar/NavItems';
import Link from "next/link";

const HomePageRoundedOptions = () => {
    return (
        <div className="grid grid-cols-12 gap-4 my-12 md:my-20">
            <div className="hidden lg:block lg:col-span-1" />
            {allNavItems?.map((navItem, index) => (
                <div
                    key={index}
                    className="col-span-4 lg:col-span-2 cursor-pointer flex flex-col justify-center items-center"
                >
                    <div className="border-2 border-gray-200 rounded-full hover:border-[#FF6700] hover:drop-shadow-md h-20 md:h-32 w-20 md:w-32 flex items-center justify-center overflow-hidden">
                        <Link
                            className="transform transition-transform duration-500 ease-in-out hover:scale-125"
                            href={navItem?.href}
                        >
                            <Image
                                src={navItem?.categoryImage}
                                alt={navItem?.category || 'Category Image'}
                                height={100} // Adjust the height
                                width={100} // Adjust the width
                                layout="fixed" // Ensures the image doesn't stretch
                            />
                        </Link>
                    </div>
                    <div>{navItem?.category}</div>
                </div>
            ))}
            <div className="hidden lg:block lg:col-span-1" />
        </div>
    )
}

export default HomePageRoundedOptions