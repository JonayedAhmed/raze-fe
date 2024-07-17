'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBoxOpen, FaChartLine, FaCog, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { signOut } from 'next-auth/react';

const AdminNavbar = () => {

    const pathname = usePathname();

    const logoutAdmin = () => {
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
        { href: '/admin/dashboard', label: 'Home', icon: <FaHome className="mr-3" /> },
        { href: '/admin/products', label: 'Products', icon: <FaBoxOpen className="mr-3" /> },
        { href: '/admin/users', label: 'Users', icon: <FaUsers className="mr-3" /> },
        { href: '/admin/reports', label: 'Reports', icon: <FaChartLine className="mr-3" /> },
        { href: '/admin/settings', label: 'Settings', icon: <FaCog className="mr-3" /> },
        { href: '#', label: 'Logout', icon: <FaSignOutAlt size={20} />, onClick: logoutAdmin, className: 'text-[rgb(99,115,129)] hover:text-red-600' },
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

export default AdminNavbar;