'use client'

import { addNewSegment } from '@/api/admin/POST';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const Segments = () => {

    const { data: session } = useSession();
    const bannerInputRef = useRef(null); // Add a ref for the file input

    const [values, setValues] = useState({});
    const [banner, setBanner] = useState();


    const handleBannerSelection = (e) => {
        setBanner(e.target.files[0]);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("segment", JSON.stringify(values)); // Use JSON.stringify directly
        if (banner) {
            formData.append('banner', banner);
        }
        addNewSegment(session.jwtToken, formData).then(response => {
            if (response?.[0]) {
                toast.success("Segment Added!");
                setValues({});
                setBanner(undefined);
                if (bannerInputRef.current) {
                    bannerInputRef.current.value = ''; // Clear the file input
                }
            } else {
                toast.error(response?.[1]);
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Add Segment</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Segment Name</label>
                <input
                    type="text"
                    name="name"
                    value={values.name || ''}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Banner</label>
                <input
                    type="file"
                    name="banner"
                    onChange={handleBannerSelection}
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={bannerInputRef} // Attach the ref to the file input
                />
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add Segment</button>
        </div>
    );
}

export default Segments;