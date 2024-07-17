import UserNavbar from '@/common/navbar/UserNavbar'
import React from 'react'
import DummyUser from '../../../../../public/images/DummyUser.png'
import Image from 'next/image'
import { auth } from '../../../../../auth'

const UserProfile = async () => {

    const session = await auth();;
    const orders = [];

    return (
        <div className='flex'>
            <div>
                <UserNavbar />
            </div>
            <div className='px-20'>

                <>
                    <div className='mb-5 text-lg font-medium'>My Profile</div>
                    <div className='flex gap-5 items-center mb-12'>
                        <Image src={DummyUser} height={80} width={80} alt='user-image' />
                        <span className='text-lg font-medium'>Place Image</span>
                    </div>
                </>

                <>
                    <div className='mb-5 text-lg font-medium'>Basic Info</div>
                    <div className='flex flex-col gap-5 mb-12'>
                        <div>
                            <div className='text-gray-500 text-sm'>Full Name</div>
                            <div>{session?.fullName}</div>
                        </div>
                        <div>
                            <div className='text-gray-500 text-sm'>Email</div>
                            <div>{session?.email}</div>
                        </div>
                        <div className='flex gap-96'>
                            <div>
                                <div className='text-gray-500 text-sm'>Phone</div>
                                <div>{session?.phone}</div>
                            </div>

                            <div>
                                <div className='text-gray-500 text-sm'>Gender</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </>

                <>
                    <div className='mb-5 text-lg font-medium'>Security</div>
                    <div className='mb-20'>
                        <div>
                            <div className='text-gray-500 text-sm'>Password</div>
                            <div>**********</div>
                        </div>
                    </div>
                </>

            </div>
        </div>
    )
}

export default UserProfile