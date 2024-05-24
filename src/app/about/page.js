import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="/about.gif" alt="About Image" width={600} height={400} className="rounded-lg" />
        </div>
        <div class="md:order-1">
          <div class="p-6">
            <h2 class="text-3xl font-extrabold mb-4 text-pink-700">A Group of Professional and Innovative Minds</h2>
            <p class="text-lg font-bold mb-5 text-blue-500">
              <hr className="w-full border-t-4 border-lime-500 mb-4" />
              The local and global business are undergoing a new range of digital transformation due to the data explosion, and global business are now adopting effective data analysis technology and AI solution to expand their business. As the digital transformation continues, business experts are converging more on quality data analysis and utilizing the data driven AI solution to leverage their business and meet their global client’s new and ongoing demands.
              Only the raw data does not generate quality information to drive real business growth, rather it required AI based data analysis solution and digital transformation process. At WeldX, we expertise in data driven analysis and solutions that help your business from all aspects.
            </p>
          </div>
        </div>

      </div>

      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="mb-0">
            <h2 className="text-3xl font-bold  text-center text-blue-700">Our Mission</h2>
            <hr className="w-full border-t-4 border-pink-500 mb-4" />
            <div className="rounded-lg ">
              <div className="text-center">
                <Image src="/icon1.webp" alt="Mission Image" width={500} height={200} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold  text-center text-rose-700">Empowering Businesses</h3>
              <p className="text-center font-bold text-sky-500">We strive to empower businesses through technology, providing reliable and scalable solutions that drive growth and success.</p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <h2 className="text-3xl font-bold text-center  text-rose-700">Our Vision</h2>
            <hr className="w-full border-t-4 border-blue-500 mb-4" />
            <div className="rounded-lg  p-4 ">
              <div className="text-center">
                <Image src="/icon2.png" alt="Vision Image" width={500} height={200} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-center text-blue-700">Global Leadership</h3>
              <p className="text-center font-bold text-pink-500">Our vision is to be a global leader in software innovation, transforming industries and shaping the future of technology.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div>
          <img src="/a2.gif" alt="Image" className="w-full h-auto rounded-lg " />
        </div>
        <div>
          
          <h2 className="text-3xl font-extrabold mb-4 text-rose-700">Who We Are?</h2>
          <hr className="w-full border-t-4 border-lime-500 mb-4" />
          <p className="text-lg font-bold mb-8 text-blue-700">
            WeldX is a leading Data Analytics firm based in Bhubaneswar, India. The WeldX focuses on AI based solutions based on quality data analysis, decision science and machine learning. Focusing on the data analysis and digital transformation solutions, we deeply work on global business demand and create next level business platform and solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="md:order-2">
            <Image src="/a3.gif" alt="What We Do Image" width={600} height={400} className="rounded-lg" />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-extrabold mb-4 text-rose-700">What We Do?</h2>
            <hr className="w-full border-t-4 border-lime-500 mb-4" />
            <p className="text-lg font-bold mb-5 text-blue-700">
              As a next generation business solutions provider, the WeldX work and collaborate with global business organizations to analyze and transform their business growth in sustainable way. Take your business into the next level with AI based data analysis and effective solutions. We work and collaborate with small, medium and enterprise level business to reach their business requirements through quality data driven solution and machine learning science.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div>
            <img src="/a4.gif" alt="Image" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-rose-700">How We Do ?</h2>
            <hr className="w-full border-t-4 border-lime-500 mb-4" />
            <p className="text-lg font-bold mb-5 text-blue-700">
              WeldX often believe in effective use of the quality Data Analytics by investing, innovating and researching the business process deeply. Let your business grow with the new range of data analysis and AI based data solution technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 bg-sky-500">
        <h2 className="text-5xl font-bold text-pink-700 mb-4">Have a Project on Your Mind? We will find the</h2>
        <h2 className="text-5xl font-bold text-black mb-4"> best solution for your project.</h2>


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
      <div className="bg-sky-500 font-bold text-white py-8 gap-2">
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
              309/1801P   NiladriVihar, BBSR, Odisha - 751021 Phone -9937054201
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

export default AboutPage;
