import UserNavbar from '@/common/navbar/UserNavbar'
import React from 'react'
import DummyUser from '../../../../../public/images/DummyUser.png'
import Image from 'next/image'
import { auth } from '../../../../../auth'

const UserDashboard = async () => {

    const session = await auth();;
    const orders = [];

    return (
        <div className='flex'>
            <div className='w-1/6 flex justify-end'>
                <UserNavbar />
            </div>
            <div className='w-5/6 px-20'>

                <div className='flex gap-5 items-center mb-12'>
                    <Image src={DummyUser} height={60} width={60} />
                    {session?.fullName ? session?.fullName : ''}
                </div>

                <div className='flex gap-10'>
                    <div className='h-32 w-60 rounded-md bg-slate-100 flex flex-col justify-center items-center'>
                        <div className='text-3xl font-semibold'>00</div>
                        <div className='text-md font-medium'>Total Orders</div>
                    </div>

                    <div className='h-32 w-60 rounded-md bg-slate-100 flex flex-col justify-center items-center'>
                        <div className='text-3xl font-semibold'>00</div>
                        <div className='text-md font-medium'>New Orders</div>
                    </div>

                    <div className='h-32 w-60 rounded-md bg-slate-100 flex flex-col justify-center items-center'>
                        <div className='text-3xl font-semibold'>00</div>
                        <div className='text-md font-medium'>Cart</div>
                    </div>
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