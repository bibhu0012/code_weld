"use client"
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';


const HomePage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/request_callback", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    console.log(formData);
  };
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8   bg-cover bg-center">
        <div className="md:w-1/2 md:mr-8 p-8 rounded-lg bg-black shadow-lg">
          <h1 className="text-6xl font-extrabold text-indigo-500 mb-4">Welcome to
            <div className='flex flex-row'>
              <div className='text-blue-600'>Weld</div><div className='text-pink-800'>X</div>
            </div>
          </h1>
          <p className="text-4xl font-bold text-lime-500 mb-4">
            Leading Software Hub in Bhubaneswar
          </p>
          <p className="text-4xl font-bold text-pink-700 mb-4">
            Ideas  |  Innovation  |  Execution
          </p>
        </div>

        <div className="md:w-1/2 ">
          <img src="/image1.jpg" alt="weldx Image" className="w-full rounded-lg shadow-md animate-" />
        </div>
      </div>
      <div className="flex flex-col items-center p-6 ">
        <h2 className="text-4xl text-orange-500 font-semibold mb-2">Choose What Matters to Your Business and Your Targeted Customers</h2>
        <hr className="w-full border-t-4 border-pink-700 mb-4" />
        <p className="font-bold text-blue-500 text-center">
          At WeldX, we create and develop high quality android app and provide better web solutions that are used and loved by global clients!
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center py-8">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4  transform transition duration-300 hover:scale-105">
          <div className="bg-black bg-opacity-90 rounded-lg shadow-lg p-6">
            <img src="/app.png" alt="Image 1" className="w-full rounded-lg mb-4 " />
            <h2 className="text-2xl font-bold text-lime-600 mb-2">App development</h2>
            <hr className="w-full border-t-4 border-pink-700 mb-4" />
            <p className="text-lg text-white">"Transforming ideas into intuitive applications one line of code at a time."
              "Empowering businesses through seamless app experiences"</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105">
          <div className="bg-black bg-opacity-90 rounded-lg shadow-lg p-6">
            <img src="/web.jpg" alt="Image 2" className="w-full rounded-lg mb-4 animate-" />
            <h2 className="text-2xl font-bold text-lime-500 mb-2">Web Development</h2>
            <hr className="w-full border-t-4 border-pink-700 mb-4" />
            <p className="text-lg text-white">"Web development is the art of crafting digital experiences through coding, design, and functionality, shaping the online world we interact with daily."</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105">
          <div className="bg-black bg-opacity-90 rounded-lg shadow-lg p-6">
            <img src="/design.jpg" alt="Image 3" className="w-full rounded-lg mb-4 animate-" />
            <h2 className="text-2xl font-bold text-lime-500 mb-2">Product Design</h2>
            <hr className="w-full border-t-4 border-pink-700 mb-4" />
            <p className="text-lg text-white">"Product design is the process of conceptualizing and creating tangible solutions that effectively address user needs and enhance experiences."</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105">
          <div className="bg-black bg-opacity-95 rounded-lg shadow-lg p-6">
            <img src="/data.png" alt="Image 4" className="w-full rounded-lg mb-4 animate-" />
            <h2 className="text-2xl font-bold text-lime-500 mb-2">Data Analysis</h2>
            <hr className="w-full border-t-4 border-pink-700 mb-4" />
            <p className="text-lg text-white">"Through data analysis, raw information transforms into actionable intelligence, driving organizational success and innovation."</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105">
          <div className="bg-black bg-opacity-95 rounded-lg shadow-lg p-6">
            <img src="/iot.png" alt="Image 5" className="w-full rounded-lg mb-4 animate-" />
            <h2 className="text-1xl font-bold text-lime-500 mb-2">Internet Of Things(IOT)</h2>
            <hr className="w-full border-t-4 border-pink-700 mb-4" />
            <p className="text-lg text-white">"Internet of Things (IoT) enables seamless connectivity and communication between everyday objects, revolutionizing how we interact with technology."</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 transform transition duration-300 hover:scale-105">
          <div className="bg-black border-pink-700 mb-4 bg-opacity-95 rounded-lg shadow-lg p-6">
            <img src="/ml.png" alt="Image 6" className="w-full rounded-lg mb-4 animate-" />
            <h2 className="text-2xl font-extrabold text-lime-500 mb-2">Machine Learning</h2>
            <hr className="w-full border-t-4 border-pink-700 mb-4" />
            <p className="text-lg text-white">"Machine learning enables computers to learn from data and make predictions or decisions without being explicitly programmed."</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 ">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold bg-rose-500, bg-black">This is How We Operate</h2>
        </div>
        <div className="w-full bg-gray-900">
          <img src="/image2.webp" alt="Operating Image" className="w-full rounded-lg shadow-lg animate-" />
        </div>
      </div>
      <div className="container  mx-auto py-5 bg- bg-sky-400">
        <h2 className="text-5xl font-bold text-pink-800 mb-4">Have a Project on Your Mind? We will find the</h2>
        <h2 className="text-5xl font-bold text-black mb-4"> best solution for your project.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-black rounded-lg shadow-md p-4">
            <label htmlFor="name" className="block text-orange-500 font-semibold mb-2">Name</label>
            <input type="text" value={formData.name}
              onChange={handleChange} id="name" name="name" placeholder="Enter your name" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
          </div>

          <div className="bg-black rounded-lg shadow-md p-4">
            <label htmlFor="email" className="block text-yellow-500 font-semibold mb-2">Email</label>
            <input type="email" value={formData.email} onChange={handleChange} id="email" name="email" placeholder="Enter your email" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
          </div>

          <div className="bg-black rounded-lg shadow-md p-4">
            <label htmlFor="phone" className="block text-cyan-500 font-semibold mb-2">Phone No.</label>
            <input type="tel" value={formData.phone} onChange={handleChange} id="phone" name="phone" placeholder="Enter your phone number" className="border border-gray-400 rounded-lg py-2 px-3 w-full" />
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">Request Callback</button>
        </div>
      </div>
      <div className="container mx-full py-5">
        <div className="text-center">
          <div className="inline-block bg-blue-700 py-2 px-4 mb-4 max-h-60 overflow-y-auto">
            <h2 className="text-3xl font-extrabold text-white">Our Portfolio</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">

          <div className="group relative">
            <img src="/propick logo.webp" alt="Image 1" className="w-full h-auto rounded-lg transition duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition duration-300">

            </div>
          </div>

          <div className="group relative">
            <img src="/chasicare logo.webp" alt="Image 2" className="w-full h-auto rounded-lg transition duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition duration-300">

            </div>
          </div>


          <div className="group relative">
            <img src="/the quiver logo.webp" alt="Image 3" className="w-full h-auto rounded-lg transition duration-300 transform group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition duration-300">

            </div>
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
              <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">
                <a href="/services">Services</a>
              </h2>
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
              <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">
                <a href="/">Weldx</a>
              </h2>
              <ul className="list-disc list-inside text-2xl space-y-2">
                <li className="hover:text-red-500 transition-colors duration-300">
                  <a href="/about-us">About Us</a>
                </li>
                <li className="hover:text-red-500  transition-colors duration-300">
                  <a href="/products">Products</a>
                </li>
                <li className="hover:text-red-500  transition-colors duration-300">
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li className="hover:text-red-500  transition-colors duration-300">
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h2 className="font-bold mb-4 text-3xl hover:text-yellow-500 transition-colors duration-300">Our Address</h2>
              <p className="text-2xl transition-colors duration-300">
                309/1801P NiladriVihar,BBSR, Odisha - 751021, Phone - 9937054201
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
                <a href="https://www.linkedin.com/company/weldxit/?lipi=urn%3Ali%3Apage%3Acompanies_company_about_index%3Bae397016-f876-4e08-b64f-2f0d5aac9852" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl hover:text-red-600 transition-colors duration-300" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
