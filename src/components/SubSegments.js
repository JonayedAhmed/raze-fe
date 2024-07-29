'use client'

import { getAllSegments } from '@/api/admin/GET';
import { addNewSubSegment } from '@/api/admin/POST';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';

const SubSegments = () => {

    const { data: session } = useSession();
    const bannerInputRef = useRef(null); // Add a ref for the file input

    const [segmentOptions, setSegmentOptions] = useState([]);
    const [values, setValues] = useState({
        name: '',
        segment: ''
    })
    const [banner, setBanner] = useState();

    useEffect(() => {
        getAllSegments().then(response => {
            if (response?.[0]) {
                const options = response?.[0]?.map(eachSegment => ({ label: eachSegment?.name, value: eachSegment?._id }))
                setSegmentOptions(options);
            } else {
                setSegmentOptions([]);
            }
        })
    }, []);

    const handleSubSegmentBannerChange = (e) => {
        setBanner(e.target.files[0]);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("subSegment", JSON.stringify(values)); // Use JSON.stringify directly
        if (banner) {
            formData.append('banner', banner);
        }
        addNewSubSegment(session.jwtToken, formData).then(response => {
            if (response?.[0]) {
                toast.success("Sub Segment Added!");
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
    }

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Add SubSegment</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">SubSegment Name</label>
                <input
                    type="text"
                    name="name"
                    value={values?.name}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Segment</label>
                <Select
                    options={segmentOptions}
                    onChange={(e) => setValues({ ...values, segment: e.value })}
                    value={segmentOptions?.filter(option => option?.value === values?.segment)?.[0]}
                    className="w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Banner</label>
                <input
                    type="file"
                    name="banner"
                    onChange={handleSubSegmentBannerChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    ref={bannerInputRef} // Attach the ref to the file input
                />
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add SubSegment</button>

        </div>
    )
}

export default SubSegments;
