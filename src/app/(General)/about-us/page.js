import Head from 'next/head';

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us | RAZE</title>
                <meta name="description" content="Learn more about Discount Hub, our mission, vision, and the team behind the platform that brings you the best discounts in one place." />
            </Head>
            <div className="container mx-auto p-4 text-black">
                <section className="text-center mb-16">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-lg text-gray-600">Discover the story behind Discount Hub, your go-to platform for the best discounts across all segments.</p>
                </section>

                <section className="mb-16 bg-white text-gray-700 p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">Our Mission</h2>
                    <p className="text-lg leading-relaxed">Our mission is to simplify your shopping experience by bringing all the best discounts and deals to one platform, saving you time and money.</p>
                </section>

                <section className="mb-16 bg-white text-gray-700 p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">Our Vision</h2>
                    <p className="text-lg leading-relaxed">We envision a world where shopping is always affordable, accessible, and enjoyable. Our goal is to be the most trusted platform for finding the best deals and discounts.</p>
                </section>

                <section className="mb-16 bg-white text-gray-700 p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-red-500">Our Story</h2>
                    <p className="text-lg leading-relaxed">Founded in 2024, Discount Hub started as a small project aimed at helping friends and family find the best deals. Today, it has grown into a comprehensive platform that serves thousands of users every day.</p>
                </section>

                {/* <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <img src="/team/john_doe.jpg" alt="John Doe" className="w-36 h-36 rounded-full object-cover mb-4 mx-auto border-4 border-white" />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img src="/team/jane_smith.jpg" alt="Jane Smith" className="w-36 h-36 rounded-full object-cover mb-4 mx-auto border-4 border-white" />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p>Chief Operating Officer</p>
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default AboutUs;
