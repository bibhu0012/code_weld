"use client";
import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setShowSuccess(true);
                setShowPopup(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                console.log(formData);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 3000);
            } else {
                console.log('Failed to submit');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-blue-500 dark:text-blue-300 text-center">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="mb-6 flex items-center text-gray-800 dark:text-gray-200">
                            <FaMapMarkerAlt className="text-blue-500 dark:text-blue-300 mr-2" />
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-orange-500 dark:text-orange-300">Address</h2>
                                <p className="text-lg text-blue-700 dark:text-blue-400">Phase 6, Niladri Vihar, Bhubaneswar</p>
                            </div>
                        </div>
                        <div className="mb-6 flex items-center text-gray-800 dark:text-gray-200">
                            <AiOutlinePhone className="text-blue-500 dark:text-blue-300 mr-2" />
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-orange-500 dark:text-orange-300">Phone</h2>
                                <p className="text-lg text-blue-700 dark:text-blue-400">7894495930</p>
                            </div>
                        </div>
                        <div className="mb-6 flex items-center text-gray-800 dark:text-gray-200">
                            <AiOutlineMail className="text-blue-700 dark:text-blue-400 mr-2" />
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-orange-500 dark:text-orange-300">Email</h2>
                                <p className="text-lg text-blue-700 dark:text-blue-400">weldxtitsolutions@gmail.com</p>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img src="contact.jpg" alt="Contact" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="border-b border-t border-blue-500 dark:border-blue-300 rounded-md p-8 bg-white dark:bg-gray-800 shadow-lg">
                        <h2 className="text-2xl font-semibold text-rose-500 dark:text-rose-300 mb-4">Contact Form</h2>
                        {showSuccess && (
                            <div className="mb-4 text-green-500 font-bold">
                                Your message has been sent successfully!
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-orange-500 dark:text-orange-300 font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    className="w-full px-4 py-2 rounded-md bg-blue-200 dark:bg-gray-700 border border-red-800 dark:border-red-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-orange-500 dark:text-orange-300 font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    className="w-full px-4 py-2 rounded-md bg-blue-200 dark:bg-gray-700 border border-red-800 dark:border-red-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-orange-500 dark:text-orange-300 font-bold mb-2" htmlFor="phone">Phone No</label>
                                <input
                                    className="w-full px-4 py-2 rounded-md bg-blue-200 dark:bg-gray-700 border border-red-800 dark:border-red-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-orange-500 dark:text-orange-300 font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 rounded-md bg-blue-200 dark:bg-gray-700 border border-red-800 dark:border-red-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button className="bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-green-600 dark:hover:bg-green-700 focus:outline-none  dark:focus:bg-red-700" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img src="thank you.webp" alt="Success" className="w-64 h-64 object-cover" />
                        <button
                            className="mt-4 bg-blue-500 dark:bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-green-600 dark:hover:bg-green-700 focus:outline-none focus:bg-red-600 dark:focus:bg-red-700"
                            onClick={(e) => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="bg-sky-500 dark:bg-gray-800 font-bold text-white py-8 gap-8 mt-12 w-full">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="text-center md:text-left p-2">
                        <img src="footer.webp" alt="Small" className="mx-auto md:mx-0 mb-4 w-30 h-20" />
                        <p className="text-1xl hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">
                            WeldX brings you smart digital solution and transformation with global standard IT products. Let's work together and reach your business goal.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <a href="/services">
                            <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300">Services</h2>
                        </a>
                        <ul className="list-disc list-inside text-1xl space-y-2">
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">App Development</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Web Development</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Product Design</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Data Analysis</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Internet Of Things(IOT)</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Machine Learning</li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <a href="/">
                            <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300">Weldx</h2>
                        </a>
                        <ul className="list-disc list-inside text-2xl space-y-2">
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">About Us</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Products</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">Contact Us</li>
                            <li className="hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300">FAQ</li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300">Our Address</h2>
                        <p className="text-2xl transition-colors duration-300">
                            309/1801P NiladriVihar, BBSR, Odisha - 751021 Phone-9937054201
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold mb-4 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-300">Social Media</h2>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://m.facebook.com/WeldX-IoT-109293968473834/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300" />
                            </a>
                            <a href="https://twitter.com/WeldxIT" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300" />
                            </a>
                            <a href="https://in.linkedin.com/company/weldxit" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
