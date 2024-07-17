"use client";

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaUser, FaSignOutAlt, FaBoxOpen } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import MenuBarsIcon from '../../../public/icons/MenuBarsIcon.svg';
import raze from '../../../public/images/raze.png';

const allNavItems = [
    { category: 'All Products', href: '/all-products' },
    { category: 'Tees', href: '/tees' },
    { category: 'Cargo', href: '/cargo' }
];

const styleConfig = [
    {
        routes: ['/login'], // Always bg-gray-900
        navbarStyle: 'bg-gray-900 text-white',
        containerStyle: 'border-b border-gray-700',
        fixedStyle: 'bg-gray-900 text-white',
    },
    {
        routes: ['/'], // Transparent at first, bg-gray-900 on scroll
        navbarStyle: 'bg-transparent text-white',
        containerStyle: '',
        fixedStyle: 'bg-gray-900 text-white',
    }
];

const getStyleForRoute = (pathname) => {
    for (const style of styleConfig) {
        if (style.routes.includes(pathname)) {
            return style;
        }
    }
    // Default style if no route matches
    return {
        navbarStyle: 'bg-gray-900 text-white',
        containerStyle: 'border-b border-gray-700',
        fixedStyle: 'bg-gray-900 text-white',
    };
};

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();

    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const { navbarStyle, containerStyle, fixedStyle } = getStyleForRoute(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    const renderDropdownOptions = () => {
        if (session?.role === 'USER') {
            return (
                <>
                    <div className='flex justify-center gap-5 px-4 py-2 text-primary font-bold cursor-pointer' onClick={() => router.push('/user/profile')}>
                        {session?.fullName?.split(" ")?.[0]}
                    </div>
                    <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/user/dashboard')}>
                        <MdDashboard size={16} /> Dashboard
                    </div>
                    <hr />
                    <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/user/orders')}>
                        <FaBoxOpen size={16} /> My Orders
                    </div>
                    <hr />
                    <div className='flex items-center gap-5 px-4 py-2 text-[rgb(99,115,129)] cursor-pointer' onClick={logoutUser}>
                        <FaSignOutAlt size={16} /> Logout
                    </div>
                </>
            );
        }

        if (session?.role === 'ADMIN') {
            return (
                <>
                    <div className='flex justify-center gap-5 px-4 py-2 text-primary font-bold cursor-pointer' onClick={() => router.push('/admin/profile')}>
                        {session?.fullName?.split(" ")?.[0]}
                    </div>
                    <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/admin/dashboard')}>
                        <MdDashboard size={16} /> Dashboard
                    </div>
                    <hr />
                    <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/admin/products')}>
                        <FaBoxOpen size={16} /> Products
                    </div>
                    <hr />
                    <div className='flex items-center gap-5 px-4 py-2 text-[rgb(99,115,129)] cursor-pointer' onClick={logoutUser}>
                        <FaSignOutAlt size={16} /> Logout
                    </div>
                </>
            );
        }

        return null;
    };


    return (
        <div className={`fixed top-0 w-full z-10 transition-all duration-300 ${scrolled ? fixedStyle : navbarStyle}`}>
            <div className={`h-12 md:h-20 flex md:justify-between items-center px-4 ${scrolled ? containerStyle : ''}`}>
                <div className="md:hidden w-[5%]" onClick={() => setExpandMobileMenu(!expandMobileMenu)}>
                    <Image src={MenuBarsIcon} alt="Menu Icon" priority />
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    <a href="#facebook" className="text-white hover:text-red-600"><FaFacebook size={20} /></a>
                    <a href="#twitter" className="text-white hover:text-red-600"><FaTwitter size={20} /></a>
                    <a href="#instagram" className="text-white hover:text-red-600"><FaInstagram size={20} /></a>
                    <a href="#linkedin" className="text-white hover:text-red-600"><FaLinkedin size={20} /></a>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center pl-20 md:pl-0 md:pr-28">
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

                <div className="relative flex items-center space-x-10">
                    <a href="#search" className="text-white hover:text-gray-400"><FaSearch size={20} /></a>
                    {session ? (
                        <div className="relative">
                            <FaUser size={20} className="text-white hover:text-gray-400 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
                            {showDropdown && (
                                <div className='absolute top-14 right-0 bg-white text-black w-[200px] shadow-lg rounded-sm'>
                                    {renderDropdownOptions()}
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
