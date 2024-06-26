import Head from 'next/head';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us | RAZE</title>
                <meta name="description" content="Get in touch with the team at RAZE. We are here to help you with any inquiries or support you may need." />
            </Head>
            <div className="container mx-auto p-4 text-gray-900">
                <section className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-700">We'd love to hear from you! Reach out to us with any questions, feedback, or just to say hello.</p>
                </section>

                <div className="flex flex-wrap justify-center items-start gap-8">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-red-500">Send Us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 mt-1 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 mt-1 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-3 mt-1 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-3 rounded-lg bg-gray-500 hover:bg-red-500 transition-colors text-white font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-red-500">Get in Touch</h2>
                        <ul className="space-y-4">
                            <li>
                                <h3 className="text-lg font-medium text-gray-700">Address</h3>
                                <p className="text-gray-600">1234 Street Name, City, Country</p>
                            </li>
                            <li>
                                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                                <p className="text-gray-600">info@RAZE.com</p>
                            </li>
                            <li>
                                <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                                <p className="text-gray-600">(123) 456-7890</p>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-gray-700 mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#facebook" className="text-gray-400 hover:text-blue-600"><FaFacebook size={24} /></a>
                                <a href="#twitter" className="text-gray-400 hover:text-blue-500"><FaTwitter size={24} /></a>
                                <a href="#instagram" className="text-gray-400 hover:text-red-500"><FaInstagram size={24} /></a>
                                <a href="#linkedin" className="text-gray-400 hover:text-blue-600"><FaLinkedin size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
