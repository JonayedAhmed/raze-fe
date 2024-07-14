'use client'

import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';
import { MdDashboard, MdExitToApp, MdListAlt } from 'react-icons/md';

const UserNavbar = () => {

    const router = useRouter();
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

    return (
        <div>
            <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/user/dashboard')}>
                <MdDashboard size={20} /> <span className={pathname?.includes('dashboard') && 'font-semibold'}>Dashboard</span>
            </div>

            <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/user/orders')}>
                <MdListAlt size={20} /> <span className={pathname?.includes('orders') && 'font-semibold'}>Orders</span>
            </div>

            <div className='flex items-center gap-5 px-4 py-2 text-primary cursor-pointer' onClick={() => router.push('/user/profile')}>
                <FaUser size={20} /> <span className={pathname?.includes('profile') && 'font-semibold'}>My Profile</span>
            </div>

            <div className='flex items-center gap-5 px-4 py-2 text-[rgb(99,115,129)] cursor-pointer' onClick={logoutUser}>
                <MdExitToApp size={20} /> Logout
            </div>
        </div>
    )
}

export default UserNavbar
