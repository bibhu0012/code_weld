import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ProductsPage = () => {
    return (
        <div className=" min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-6xl font-extrabold mb-8 text-rose-700">Our Products</h1>
                <div className="flex flex-col md:flex-row items-center justify-center">

                    <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
                        <img src="product.jpeg" alt="Product" className="w-full h-auto rounded-lg  animate-" />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-6xl font-extrabold mb-4 text-blue-700">Exhibition of all Your Digital Need</h2>
                        <p className="text-2xl font-bold text-rose-700">Accelerate your business with our Digital Product.</p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl font-bold mb-8 text-blue-700">Fulfill your Need with our modern Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className=" rounded-lg shadow-lg p-4 hover:bg-black transition duration-300">
                            <img src="p1.png" alt="Product 1" className="w-full h-auto rounded-lg mb-9" />
                            <h2 className="text-3xl font-bold mb-2 text-rose-700">Enterprise Resource Planning</h2>
                        </div>

                        <div className=" rounded-lg shadow-md p-4 hover:bg-black transition duration-300">
                            <img src="p2.jpg" alt="Product 2" className="w-full h-auto rounded-lg mb-4" />
                            <h2 className="text-3xl font-bold mb-2 text-rose-700">Smart School Management System</h2>
                        </div>

                        <div className=" rounded-lg shadow-md p-4 hover:bg-black transition duration-300">
                            <img src="p3.png" alt="Product 3" className="w-full h-auto rounded-lg mb-4" />
                            <h2 className="text-3xl font-bold mb-2 text-rose-700">Smart Hospital Management System</h2>
                        </div>

                        <div className=" rounded-lg shadow-md p-4 hover:bg-black transition duration-300">
                            <img src="p4.png" alt="Product 4" className="w-full h-auto rounded-lg mb-4" />
                            <h2 className="text-3xl font-bold mb-2 text-rose-700">Smart Security & Surveillance System</h2>
                        </div>

                        <div className="rounded-lg shadow-md p-4 hover:bg-black transition duration-300">
                            <img src="p5.png" alt="Product 5" className="w-full h-auto rounded-lg mb-4" />
                            <h2 className="text-3xl font-bold mb-2 text-rose-700">Smart Clinic Management System</h2>
                        </div>

                        <div className="
                         rounded-lg shadow-md p-4 hover:bg-black transition duration-300">
                            <img src="p6.png" alt="Product 6" className="w-full h-auto rounded-lg mb-4" />
                            <h2 className="text-3xl font-bold mb-2 text-rose-700">E-Commerce Website Management System</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <img src="erp1 (2).gif" alt="Your Image" className="w-auto h-auto" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-rose-700">Enterprise Resource Planning</h2>
                        <ul className="text-2xl font-bold list-disc pl-4 text-blue-700">
                            <li>Automation</li>
                            <li>Data Analysis</li>
                            <li>Inventory management</li>
                            <li>Accounting</li>
                            <li>Financial management</li>
                            <li>Tracking and visibility</li>
                            <li>Sales and marketing</li>
                            <li>Customer relationship management</li>
                            <li>Supply chain management</li>
                            <li>Manufacturing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-rose-700">Smart School Management System</h2>
                        <ul className="text-2xl font-bold list-disc pl-4 text-blue-700">
                            <li>Student Information</li>
                            <li>Teacher Information</li>
                            <li>Attendance Management</li>
                            <li>Online Assignments and Assessments</li>
                            <li>Report Card Generation</li>
                            <li>Fee Management System</li>
                            <li>Admission Management</li>
                            <li>Transport Management</li>
                            <li>Library Management</li>
                            <li>Parent Communication</li>
                        </ul>
                    </div>

                    <div>
                        <img src="gif2 (2).gif" alt="Your Image" className="w-auto h-auto" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                        <img src="gif3.gif" alt="Your Image" className="w-full h-auto" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-rose-700">Smart Hospital Management System</h2>
                        <ul className="text-2xl font-bold list-disc pl-4 text-blue-700">
                            <li>Appointment Scheduling And Patient Registration</li>
                            <li>Inpatient Registration, Boarding And Billing</li>
                            <li>Consultation Management</li>
                            <li>Digital Imaging And Diagnostics Management</li>
                            <li>Intuitive And Useful Patient Portal</li>
                            <li>Staff Interaction And Collaboration</li>
                            <li>Workforce Management</li>
                            <li>Lab Management</li>
                            <li>Pharmacy And Store Management</li>
                            <li>Prescription Renewals And Cancellations</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-rose-700">Smart Security & Surveillance System</h2>
                        <ul className="text-2xl font-bold list-disc pl-4 text-blue-700">
                            <li>Fire detection</li>
                            <li>Smoke detection</li>
                            <li>Person detection</li>
                            <li>Surveillance camera</li>
                            <li>One tap live footage</li>
                            <li>One tap fire station calling</li>
                            <li>One tap notification</li>
                            <li>Video storage</li>
                        </ul>
                    </div>

                    <div>
                        <img src="gif4 (3).gif" alt="Your Image" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                        <img src="gif5.gif" alt="Your Image" className="w-full h-auto" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-rose-700">Smart Clinic Management System</h2>
                        <ul className="text-2xl font-bold list-disc pl-4 text-blue-700">
                            <li>Electronic Medical Records</li>
                            <li>Appointment Scheduling</li>
                            <li>Patient Registration</li>
                            <li>Appointments Booking Mobile App</li>
                            <li>Sample Management</li>
                            <li>Visit Management</li>
                            <li>Lab Management</li>
                            <li>Prescription Renewals And Cancellations</li>
                            <li>Insurance</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-rose-700">E-Commerce Management System</h2>
                        <ul className="text-2xl font-bold list-disc pl-4 text-blue-700">
                            <li>Seller registration</li>
                            <li>Buyer registration</li>
                            <li>Payment interface</li>
                            <li>Delivery and Logistics</li>
                            <li>Giant market</li>
                            <li>Global reach</li>
                            <li>No middleman</li>
                            <li>Advertisement</li>
                        </ul>
                    </div>
                    <div>
                        <img src="gif6.gif" alt="Your Image" className="w-full h-auto" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-8">
                <h2 className="text-5xl font-extrabold text-rose-500 mb-4">Have a Project on Your Mind? We will find the</h2>
                <h2 className="text-5xl font-extrabold text-blue-500 mb-4"> best solution for your project.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="bg-black rounded-lg shadow-md p-4">
                        <label htmlFor="name" className="block text-orange-500 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
                    </div>

                    <div className="bg-black rounded-lg shadow-md p-4">
                        <label htmlFor="email" className="block text-yellow-500 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
                    </div>

                    <div className="bg-black rounded-lg shadow-md p-4">
                        <label htmlFor="phone" className="block text-cyan-500 font-semibold mb-2">Phone No.</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
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

export default ProductsPage;
