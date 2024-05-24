"use client";
import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaServicestack,
  FaProductHunt,
  FaQuestionCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden');
    };

    menuButton.addEventListener('click', toggleMenu);

    return () => {
      menuButton.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} ${theme}`}>
        <div>
          <nav className="bg-sky-500/50 backdrop-blur-sm w-full py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-lg transform hover:shadow-2xl transition-shadow duration-300 rounded-lg">
            <a href="/" className="block">
              <img src="/logo.webp" alt="Logo" className="h-14 w-auto" />
            </a>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 ml-auto">
                <Link
                  href="/"
                  className="nav-link flex flex-col items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-green-500 hover:bg-black"
                >
                  <FaHome className="text-2xl" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/about"
                  className="nav-link flex flex-col items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-cyan-500 hover:bg-black"
                >
                  <FaInfoCircle className="text-2xl" />
                  <span>About</span>
                </Link>
                <Link
                  href="/contact"
                  className="nav-link flex flex-col items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-red-500 hover:bg-black"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>Contact</span>
                </Link>
                <Link
                  href="/services"
                  className="nav-link flex flex-col items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-lime-500 hover:bg-black"
                >
                  <FaServicestack className="text-2xl" />
                  <span>Services</span>
                </Link>
                <Link
                  href="/products"
                  className="nav-link flex flex-col items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
                >
                  <FaProductHunt className="text-2xl" />
                  <span>Products</span>
                </Link>
                <Link
                  href="/faq"
                  className="nav-link flex flex-col items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-violet-500 hover:bg-black"
                >
                  <FaQuestionCircle className="text-2xl" />
                  <span>FAQ</span>
                </Link>
              </div>
              <button
                onClick={toggleTheme}
                className="ml-4 px-4 py-2 bg-white/50 rounded-lg hover:bg-black hover:text-yellow-500 transition-colors duration-300 flex items-center"
              >
                {theme === 'light' ? <FaMoon className="text-2xl" /> : <FaSun className="text-2xl" />}
              </button>
              <div className="md:hidden flex items-center ml-auto">
                <button
                  id="menu-button"
                  className="text-2xl transform hover:translate-y-1 transition-transform duration-300"
                >
                  ☰
                </button>
              </div>
            </div>
          </nav>

          <div
            id="mobile-menu"
            className="hidden md:hidden bg-blue-400/50 backdrop-blur-sm w-full py-4 px-6 flex-col space-y-2 shadow-lg transform hover:shadow-2xl transition-shadow duration-300 rounded-lg"
          >
            <Link
              href="/"
              className="nav-link flex items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
            >
              <FaHome className="text-2xl" />
              <span className="ml-2">Home</span>
            </Link>
            <Link
              href="/about"
              className="nav-link flex items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
            >
              <FaInfoCircle className="text-2xl" />
              <span className="ml-2">About</span>
            </Link>
            <Link
              href="/contact"
              className="nav-link flex items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
            >
              <FaEnvelope className="text-2xl" />
              <span className="ml-2">Contact</span>
            </Link>
            <Link
              href="/services"
              className="nav-link flex items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
            >
              <FaServicestack className="text-2xl" />
              <span className="ml-2">Services</span>
            </Link>
            <Link
              href="/products"
              className="nav-link flex items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
            >
              <FaProductHunt className="text-2xl" />
              <span className="ml-2">Products</span>
            </Link>
            <Link
              href="/faq"
              className="nav-link flex items-center px-4 py-2 bg-white/50 rounded-lg transform hover:translate-y-1 transition-transform duration-300 hover:text-orange-500 hover:bg-black"
            >
              <FaQuestionCircle className="text-2xl" />
              <span className="ml-2">FAQ</span>
            </Link>
          </div>

          <div className="container mx-auto py-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
