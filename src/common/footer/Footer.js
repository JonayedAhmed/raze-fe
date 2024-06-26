'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>



            <div className="bg-gray-900 text-white py-10">
                {/* Logo and Description */}
                <div className='flex flex-col justify-center items-center mb-8'>
                    <div className="text-2xl font-bold">R A Z E</div>
                    <div className="text-gray-400">
                        Breaking Boundaries
                    </div>
                </div>

                <div className="container mx-auto px-5 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        {/* Navigation Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-red-600">Home</a></li>
                                <li><a href="/about-us" className="text-gray-400 hover:text-red-600">About Us</a></li>
                                <li><a href="/contact-us" className="text-gray-400 hover:text-red-600">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">1234 Street Name, City, Country</li>
                                <li className="text-gray-400">Email: info@yourwebsite.com</li>
                                <li className="text-gray-400">Phone: (123) 456-7890</li>
                            </ul>
                        </div>

                        {/* Newsletter Subscription */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-10 flex justify-center space-x-4">
                        <a href="#facebook" className="text-gray-400 hover:text-red-600"><FaFacebook size={24} /></a>
                        <a href="#twitter" className="text-gray-400 hover:text-red-600"><FaTwitter size={24} /></a>
                        <a href="#instagram" className="text-gray-400 hover:text-red-600"><FaInstagram size={24} /></a>
                        <a href="#linkedin" className="text-gray-400 hover:text-red-600"><FaLinkedin size={24} /></a>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} YourWebsite. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer