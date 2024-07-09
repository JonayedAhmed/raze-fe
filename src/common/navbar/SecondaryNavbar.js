"use client";

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaUser } from 'react-icons/fa';
import MenuBarsIcon from '../../../public/icons/MenuBarsIcon.svg';
import raze from '../../../public/images/raze.png';

const allNavItems = [
    { category: 'All Products', href: '/all-products' },
    { category: 'Tees', href: '/tees' },
    { category: 'Cargo', href: '/cargo' }
];

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();

    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const logoutUser = () => {
        localStorage.clear();

        // Clear cookies
        document.cookie.split(";").forEach(cookie => {
            const [name] = cookie.split("=");
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        });

        // Sign out using next-auth and redirect to login page
        signOut({ callbackUrl: '/login' });
    };


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
                    <Image
                        src={raze}
                        height={120}
                        width={130}
                        alt="Raze Logo"
                        className='cursor-pointer'
                        onClick={() => router.push('/')}
                        priority
                    />
                    <span className="text-[10px]">Breaking Boundaries</span>
                </div>

                {/* Search and User Icons */}
                <div className="relative flex items-center space-x-10">
                    <Link href="/login" className="text-white hover:text-gray-400"><FaSearch size={20} /></Link>
                    {session ? (
                        <div className="relative">
                            <FaUser size={20} className="text-white hover:text-gray-400 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
                            {showDropdown && (
                                <div className='absolute top-14 right-0 bg-white text-black w-[200px] shadow-lg rounded-sm'>
                                    <div className='flex items-center gap-5 px-4 py-2 text-primary font-bold cursor-pointer' onClick={() => router.push('/profile')}>
                                        Profile
                                    </div>
                                    <hr />
                                    <div className='flex items-center gap-5 px-4 py-2 text-[rgb(99,115,129)] font-bold cursor-pointer' onClick={logoutUser}>
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a href="/login" className="text-white hover:text-gray-400"><FaUser size={20} /></a>
                    )}
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
