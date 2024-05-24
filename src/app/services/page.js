import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const ServicePage = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 bg-cover  bg-center">
                <div className="md:w-1/2 md:mr-8 p-8 rounded-lg">
                    <h1 className="text-6xl font-extrabold  text-blue-700 mb-4">Information Technology Solutions in India</h1>
                    <p className="text-4xl font-semibold text-rose-700 mb-4">
                        Accelerate your business with our services
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src="/it.gif" alt="weldx Image" className="w-full rounded-lg" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                <div>
                    <img src="/s2.gif" alt="Image" className="w-[100] h-[100] rounded-lg " />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-rose-700 mb-4">App development</h2>
                    <p className="text-lg font-bold  text-blue-700 mb-5">
                        Custom built App development services for your business with all advanced features. With our full stack solution App development services, you’ll enjoy an App customized built to your business specification! Let’s work together to build and develop your App that runs fine in iOs and Android.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-rose-700 mb-4">Web Development</h2>
                    <p className="text-lg font-bold text-blue-700 mb-5">
                        Responsive website design and web development services for your business with all customised features. The WeldX provides web development services for the small, medium and enterprise level business that meet both local and global standards. Strengthen your brand recognition with stunning web design & development services.
                    </p>
                </div>
                <div>
                    <img src="/service.gif" alt="Image" className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <img src="/s3.png" alt="Image" className="w-full h-auto rounded-lg " />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-rose-700 mb-4">Product Design</h2>
                    <p className="text-lg font-bold text-blue-700 mb-5">
                        WeldX designs amazing software products with innovation to propel your business and give unique products prospects competitive advantage. Take your business into the new heights with our stunning products design services and expand your business brand, response and reputations. Let's work together and win together.
                    </p>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-rose-700 mb-4">Data Analysis</h2>
                    <p className="text-lg font-bold text-blue-700 mb-5">
                        Track and analyze your business with an array of data driven platforms! Transform your business locally and globally with a new range of Data Analysis services from WeldX. We use (Data as a Service) DaaS for helping our global clients analyze their business data with business intelligence and take effective actions for better ROI.
                    </p>
                </div>
                <div>
                    <img src="/s4.png" alt="Image" className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                <div>
                    <img src="/s5.gif" alt="Image" className="w-full h-auto rounded-lg" />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-rose-700 mb-4">Internet Of Things (IOT)</h2>
                    <p className="text-lg font-bold text-blue-700 mb-5">
                        Explore unique IoT (Internet of Things) platform for businesses and organizations with advanced features. Accelerate your business brand identity with IoT (Internet of Things) and advance digital transformation services. Visualize your IoT Data for the business and implement it with effective strategy to ream more business markets.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                <div>
                    <h2 className="text-3xl font-extrabold text-rose-700 mb-4">Machine Learning </h2>
                    <p className="text-lg font-bold text-blue-700 mb-5">
                        Grow your business at the pace of technology giants with WeldX. We bring a new range of digital transformation solutions through data and machine learning services for your business and help to expand the global presence! At WeldX, we develop end-to-end machine learning solutions for your particular business needs.
                    </p>
                </div>
                <div>
                    <img src="/s6.gif" alt="Image" className="w-full h-auto rounded-lg" />
                </div>
            </div>

            <div className="container  mx-auto py-8">
                <h2 className="text-5xl font-bold text-rose-700 mb-4">Have a Project on Your Mind? We will find the</h2>
                <h2 className="text-5xl font-bold text-blue-700 mb-4"> best solution for your project.</h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="bg-black rounded-lg shadow-md p-4 hover:bg-gray-900 transition duration-300">
                        <label htmlFor="name" className="block text-orange-500 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
                    </div>

                    <div className="bg-black rounded-lg shadow-md p-4 hover:bg-gray-900 transition duration-300">
                        <label htmlFor="email" className="block text-yellow-500 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
                    </div>

                    <div className="bg-black rounded-lg shadow-md p-4 hover:bg-gray-900 transition duration-300">
                        <label htmlFor="phone" className="block text-cyan-500 font-semibold mb-2">Phone No.</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="border border-yellow-400 rounded-lg py-2 px-3 w-full" />
                    </div>
                </div>

                <div className="text-center mt-6">
                    <button className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">Request Callback</button>
                </div>
            </div>
            <div className="bg-sky-500 font-bold text-white py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

                    <div className="text-center md:text-left p-2">
                        <img src="footer.webp" alt="Small" className="mx-auto md:mx-0 mb-4 w-30 h-20" />
                        <p className="text-1xl hover:text-red-500 transition-colors duration-300">
                            WeldX brings you smart digital solution and transformation with global standard IT products. Let's work together and reach your business goal.
                        </p>
                    </div>


                    <div className="text-center md:text-left">
                        <a href="/services">
                            <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">Services</h2>
                        </a>
                        <ul className="list-disc list-inside text-1xl space-y-2">
                            <li className="hover:text-red-500 transition-colors duration-300">App Development</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Web Development</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Product Design</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Data Analysis</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Internet Of Things(IOT)</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Machine Learning</li>
                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <a href="/">
                            <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">Weldx</h2>
                        </a>
                        <ul className="list-disc list-inside text-2xl space-y-2">
                            <li className="hover:text-red-500 transition-colors duration-300">About Us</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Products</li>
                            <li className="hover:text-red-500  transition-colors duration-300">Contact Us</li>
                            <li className="hover:text-red-500  transition-colors duration-300">FAQ</li>

                        </ul>
                    </div>


                    <div className="text-center md:text-left">
                        <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">Our Address</h2>
                        <p className="text-2xl transition-colors duration-300">
                            309/1801P NiladriVihar,BBSR, Odisha - 751021, Phone - 9937054201
                        </p>

                    </div>


                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold mb-4 hover:text-yellow-500  transition-colors duration-300">Social Media</h2>
                        <div className="flex justify-center md:justify-start space-x-4">

                            <a href="https://m.facebook.com/WeldX-IoT-109293968473834/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl hover:text-red-600 transition-colors duration-300" />
                            </a>
                            <a href="https://twitter.com/WeldxIT" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-red-600 transition-colors duration-300" />
                            </a>

                            <a href="https://in.linkedin.com/company/weldxit" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-red-600 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServicePage;
