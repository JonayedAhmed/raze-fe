'use client'

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdDashboard, MdListAlt } from 'react-icons/md';

const UserNavbar = () => {

    const pathname = usePathname();

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

    const menuItems = [
        { href: '/user/dashboard', label: 'Dashboard', icon: <MdDashboard size={20} /> },
        { href: '/user/orders', label: 'Orders', icon: <MdListAlt size={20} /> },
        { href: '/user/profile', label: 'My Profile', icon: <FaUser size={20} /> },
        { href: '#', label: 'Logout', icon: <FaSignOutAlt size={20} />, onClick: logoutUser, className: 'text-[rgb(99,115,129)] hover:text-red-600' },
    ];

    return (
        <div className="h-screen w-64 p-4 shadow-lg">
            <nav>
                <ul>
                    {menuItems.map(({ href, label, icon, onClick, className }) => (
                        <li key={href} className={`mb-2 ${className || ''}`}>
                            {href !== '#' ?
                                <Link href={href} className={`flex items-center p-3 rounded transition-colors duration-300 ${pathname === href ? 'font-bold text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
                                    {icon} <span className="ml-3">{label}</span>
                                </Link>
                                :
                                <div onClick={onClick} className={`flex items-center p-3 rounded transition-colors duration-300 cursor-pointer ${className}`}>
                                    {icon} <span className="ml-3">{label}</span>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default UserNavbar;