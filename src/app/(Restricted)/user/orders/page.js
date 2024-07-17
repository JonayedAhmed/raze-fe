'use client'

import UserNavbar from '@/common/navbar/UserNavbar'
import Image from 'next/image'
import { useState } from 'react'
import DummyUser from '../../../../../public/images/DummyUser.png'
import { useSession } from 'next-auth/react'

const UserDashboard = () => {

    // const session = await auth();
    const { data: session } = useSession();
    const orders = [];

    const [selectedStatus, setSelectedStatus] = useState('New');

    const statuses = ['New', 'Confirmed', 'Completed', 'Cancelled'];

    return (
        <div className='flex'>
            <div>
                <UserNavbar />
            </div>
            <div className='px-20'>
                <div className='flex gap-5 items-center mb-12'>
                    <Image src={DummyUser} height={60} width={60} alt='user-image' />
                    {session?.fullName ? session?.fullName : ''}
                </div>

                <div className='flex gap-5'>
                    {statuses.map(status => (
                        <div
                            key={status}
                            className={`px-4 py-2 cursor-pointer rounded-md border border-gray-300 ${selectedStatus === status ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} hover:bg-gray-900 hover:text-white`}
                            onClick={() => setSelectedStatus(status)}
                        >
                            {status}
                        </div>
                    ))}
                </div>

                {orders?.length > 0 ?
                    <div>ORDERS</div>
                    :
                    <div className='my-40'>No Orders Found!</div>
                }

            </div>
        </div>
    )
}

export default UserDashboard
