"use client";

import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaUser } from 'react-icons/fa';
import MenuBarsIcon from '../../../public/icons/MenuBarsIcon.svg';

const allNavItems = [
    { category: 'All Products', href: '/all-products' },
    { category: 'Tees', href: '/tees' },
    { category: 'Cargo', href: '/cargo' }
];

const Navbar = () => {
    const pathname = usePathname();
    const [expandMobileMenu, setExpandMobileMenu] = useState(false);

    return (
        <div className="fixed top-0 w-full z-10 bg-gray-900 text-white transition-all duration-300">
            <div className="h-12 md:h-20 flex md:justify-between items-center px-4 border-b border-gray-700">

                {/* Mobile Menu Icon */}
                <div className="md:hidden w-[5%]" onClick={() => setExpandMobileMenu(!expandMobileMenu)}>
                    <Image src={MenuBarsIcon} alt="Menu Icon" />
                </div>

                {/* Social Media Icons (only for md and above) */}
                <div className="hidden md:flex items-center space-x-10">
                    <a href="#facebook" className="text-white hover:text-red-600"><FaFacebook size={20} /></a>
                    <a href="#twitter" className="text-white hover:text-red-600"><FaTwitter size={20} /></a>
                    <a href="#instagram" className="text-white hover:text-red-600"><FaInstagram size={20} /></a>
                    <a href="#linkedin" className="text-white hover:text-red-600"><FaLinkedin size={20} /></a>
                </div>

                {/* Logo and Slogan */}
                <div className="flex-1 flex flex-col justify-center items-center md:w-auto">
                    <div className="text-[24px] font-bold">R A Z E</div>
                    <span className="text-[8px]">Breaking Boundaries</span>
                </div>

                {/* Search and User Icons */}
                <div className="flex items-center space-x-10">
                    <Link href="/login" className="text-white hover:text-gray-400"><FaSearch size={20} /></Link>
                    <Link href="/login" className="text-white hover:text-gray-400"><FaUser size={20} /></Link>
                </div>
            </div>

            <div className='px-8 h-12 hidden md:flex justify-center items-center relative'>
                <ul className="flex gap-10">
                    {allNavItems.map((item, index) => {
                        const isActive = pathname.includes(item.href);
                        return (
                            <li key={index} className="group">
                                <Link href={item.href} className='flex items-center gap-2 hover:border-b-2 hover:border-white'>
                                    <span className={`${isActive ? 'font-bold' : 'font-normal'} ${isActive ? 'text-red-600' : 'text-white'}`}>{item.category}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={`absolute min-h-screen top-full left-0 w-[70%] bg-gray-900 text-white shadow-lg p-4 transition-all duration-500 ease-in-out ${expandMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul>
                    {allNavItems.map((item, index) => {
                        const isActive = pathname.includes(item.href);
                        return (
                            <li key={index} className='p-3'>
                                <Link href={item.href} className='flex items-center gap-5'>
                                    <span className={`${isActive ? 'font-bold' : 'font-normal'}`}>{item.category}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;