"use client";

import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaUser } from 'react-icons/fa';
import LeftArrow from '../../../public/icons/LeftArrow.svg';
import MenuBarsIcon from '../../../public/icons/MenuBarsIcon.svg';
import RightArrow from '../../../public/icons/RightArrow.svg';
import { allNavItems } from './NavItems';

const Navbar = () => {
    const pathname = usePathname();
    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [currentSubBrands, setCurrentSubBrands] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-900 text-white' : 'bg-transparent text-white'}`}>
            <div className={`h-12 md:h-20 flex md:justify-between items-center px-4 ${scrolled ? 'border-b border-gray-700' : ''}`}>

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
                    <a href="#search" className="text-white hover:text-gray-400"><FaSearch size={20} /></a>
                    <a href="#user" className="text-white hover:text-gray-400"><FaUser size={20} /></a>
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
                                <div className='absolute left-1/2 transform -translate-x-1/2 top-10 w-screen bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out pt-4'>
                                    <div className="max-w-7xl mx-auto px-4">
                                        <ul className="p-4 grid grid-cols-2 md:grid-cols-4">
                                            {[...new Set(item.brands)].map((brand, idx) => {
                                                const isBrandActive = pathname.includes(brand.split(' ').join('-').toLowerCase());
                                                return (
                                                    <li key={idx} className="py-1">
                                                        <Link href={`${item.href}/${brand.split(' ').join('-').toLowerCase()}`}>
                                                            <span className={`${isBrandActive ? 'font-bold' : 'font-normal'} ${isBrandActive ? 'text-gray-600' : 'text-black'}`}>{brand}</span>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className={`absolute min-h-screen top-full left-0 w-[70%] bg-white shadow-lg p-4 transition-all duration-500 ease-in-out ${expandMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`transition-transform duration-500 ${currentSubBrands ? '-translate-x-full' : 'translate-x-0'}`}>
                    <ul>
                        {allNavItems.map((item, index) => {
                            const isActive = pathname.includes(item.href);
                            return (
                                <div
                                    key={index}
                                    className='flex justify-between'
                                    onClick={() => {
                                        setCurrentSubBrands(item.brands);
                                        setCurrentItem(item);
                                    }}
                                >
                                    <li className='p-3'>
                                        <span className={`${isActive ? 'font-bold' : 'font-normal'}`}>{item.category}</span>
                                    </li>
                                    {!currentSubBrands && <Image src={RightArrow} className='cursor-pointer' alt="Right" />}
                                </div>
                            );
                        })}
                    </ul>
                </div>
                <div className={`absolute top-0 left-0 w-full transition-transform duration-500 ${currentSubBrands ? 'translate-x-0' : 'translate-x-full'}`}>
                    {currentSubBrands && (
                        <>
                            <div
                                className='p-3 flex gap-14'
                                onClick={() => {
                                    setCurrentSubBrands(null);
                                    setCurrentItem(null);
                                }}
                            >
                                <Image src={LeftArrow} className='cursor-pointer' alt="Back" />
                                <Link href={currentItem?.href} className='font-bold'>{currentItem?.category}</Link>
                            </div>
                            <ul>
                                {currentSubBrands.map((brand, index) => {
                                    const isBrandActive = pathname.includes(brand.split(' ').join('-').toLowerCase());
                                    return (
                                        <li key={index} className='p-3'>
                                            <Link href={`${currentItem.href}/${brand.split(' ').join('-').toLowerCase()}`} className='flex items-center gap-5'>
                                                <span className={`${isBrandActive ? 'font-bold' : 'font-normal'} ${isBrandActive ? 'text-red-600' : 'text-black'}`}>{brand}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
