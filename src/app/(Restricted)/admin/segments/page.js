'use client';

import AdminNavbar from '@/common/navbar/AdminNavbar';
import Segments from '@/components/Segments';
import SubSegments from '@/components/SubSegments';
import { useState } from 'react';

const AdminSegments = () => {

    const [selectedTab, setSelectedTab] = useState('Segments')

    return (
        <div className='flex'>
            <AdminNavbar />
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-6">Manage Segments and SubSegments</h1>

                <div className="flex gap-5 justify-start border-b mb-7">
                    {/* Waiting For Approval */}
                    <div
                        className={`tabContent ${selectedTab === 'Segments' ? 'border-b-2 border-primary text-gray-800 font-semibold' : 'text-gray-400'} cursor-pointer`}
                        onClick={() => setSelectedTab('Segments')}
                    >
                        Segments
                    </div>

                    {/* History */}
                    <div
                        className={`tabContent ${selectedTab === 'SubSegments' ? 'border-b-2 border-primary text-gray-800 font-semibold' : 'text-gray-400'} cursor-pointer`}
                        onClick={() => setSelectedTab('SubSegments')}
                    >
                        SubSegments
                    </div>
                </div>


                {selectedTab === 'Segments' && <Segments />}
                {selectedTab === 'SubSegments' && <SubSegments />}
            </div>
        </div>
    );
};

export default AdminSegments;
