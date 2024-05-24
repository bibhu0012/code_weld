import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FaqPage = () => {
    return (
        <div className="px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                    <img src="faq.gif" alt="Image" className="rounded-lg w-full" />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-extrabold mb-4 text-blue-600">Frequently Asked Questions</h2>
                    <h2 className="text-1xl font-bold mb-4 text-green-500">Our methodical approach is focused on revealing the essence of problem solving. Explore Frequently Asked Question and Answers for your business solutions.</h2>
                    <div className="border-b-8 border-rose-700 mb-4"></div>

                    <div className="overflow-y-scroll max-h-80">
                        <div className="mb-4">
                            <details>
                                <summary className="text-xl text-sky-600 font-extrabold">Is my data structure with weldx analysis team?</summary>
                                <p className="font-bold text-pink-700">As a leading data analysis and machine learning solution provider, the WeldX maintain the strict privacy policy for business and data analysis, and never compromise on its client business data security. We take prior approval from the Clients while reviewing and analysing the business data and take care of the business planning and insights.</p>
                            </details>
                        </div>
                        <div className="mb-4">
                            <details>
                                <summary className="text-xl text-sky-600 font-extrabold">What other services weldx offer for my business growth and Expantation?</summary>
                                <p className="font-bold text-pink-700">As a leading digital transformation company in India, the WeldX offers a wide range of services for your business solutions including software products development, web application development, Android and iOS App development and other digital transformation solutions based on the new range of technologies. Let your business reach your targeted audience with the next level digital transformation solutions from WeldX, your one stop digital transformation solution for the business.</p>
                            </details>
                        </div>
                        <div className="mb-4">
                            <details>
                                <summary className="text-xl text-sky-600 font-extrabold">What contract Process WeldX follow on Projects,Assignment and Delivery Time?</summary>
                                <p className="font-bold text-pink-700">The WeldX always believe in transparency for all project contracts and work on the assigned projects with the timely delivery. On approval of the Clients, the WeldX team will analyse and work with business requirements and follow the policy of organization to take and deliver the projects on time. For more details about our project contracts, please get in touch with our business expert team and they will assist you asap.</p>
                            </details>
                        </div>
                        <div className="mb-4">
                            <details>
                                <summary className="text-xl text-sky-600 font-extrabold">How Can i Process Payment To WeldX?</summary>
                                <p className="font-bold text-pink-700">The WeldX receive the Payment with various Payment gateways including Bank Details, Bank Cheque, PayPal, Razorpay etc. For the projects contracts, we follow the best transparency policy as per the global standards, and provide the Invoice details to clients.</p>
                            </details>
                        </div>
                        <div className="mb-4">
                            <details>
                                <summary className="text-xl text-sky-600 font-extrabold">Where is Weldx Located and What About Its Global Presence?</summary>
                                <p className="font-bold text-pink-700">The WeldX is primarily located in Bhubaneswar, India and have global client presence for its wide range of IT services. Let’s talk about your IT projects today and work together for your business success.</p>
                            </details>
                        </div>
                        <div className="mb-4">
                            <details>
                                <summary className="text-xl text-sky-600 font-extrabold">Is There Any Return Policy From WeldX?</summary>
                                <p className="font-bold text-pink-700">The WeldX often committed to work on your IT projects and deliver it on right time with all aspects. However, the WeldX is not offering any Refund Policy for its IT services.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-8">
                <h2 className="text-5xl font-bold text-rose-500 mb-4 text-center md:text-left">Have a Project on Your Mind?</h2>
                <h2 className="text-5xl font-bold text-blue-500 mb-4 text-center md:text-left">Contact Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-300 rounded-lg shadow-md p-4">
                        <label htmlFor="name" className="block text-black font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="border border-yellow-400 rounded-lg py-2 px-3 w-full" />
                    </div>

                    <div className="bg-gray-300 rounded-lg shadow-md p-4">
                        <label htmlFor="email" className="block text-black font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="border border-red-400 rounded-lg py-2 px-3 w-full" />
                    </div>

                    <div className="bg-rose-300 rounded-lg shadow-md p-4">
                        <label htmlFor="phone" className="block text-black font-bold mb-2">Phone No.</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="border border-cyan-400 rounded-lg py-2 px-3 w-full" />
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
                            <li className="hover:text-red-500 transition-colors duration-300">Web Development</li>
                            <li className="hover:text-red-500 transition-colors duration-300">Product Design</li>
                            <li className="hover:text-red-500 transition-colors duration-300">Data Analysis</li>
                            <li className="hover:text-red-500 transition-colors duration-300">Internet Of Things (IoT)</li>
                            <li className="hover:text-red-500 transition-colors duration-300">Machine Learning</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <a href="/">
                            <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">Weldx</h2>
                        </a>
                        <ul className="list-disc list-inside text-2xl space-y-2">
                            <li className="hover:text-red-500 transition-colors duration-300">About Us</li>
                            <li className="hover:text-red-500 transition-colors duration-300">Products</li>
                            <li className="hover:text-red-500 transition-colors duration-300">Contact Us</li>
                            <li className="hover:text-red-500 transition-colors duration-300">FAQ</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">Our Address</h2>
                        <p className="text-2xl transition-colors duration-300">
                            309/1801P NiladriVihar, BBSR, Odisha - 751021 Phone-9937054201
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold mb-4 hover:text-yellow-500 transition-colors duration-300">Social Media</h2>
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

export default FaqPage;
