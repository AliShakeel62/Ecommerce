import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 font-sans text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Exclusive</h2>
          <h3 className="text-lg font-semibold mb-1 text-white">Subscribe</h3>
          <p className="text-sm mb-4 text-gray-400">Get 10% off your first order</p>
          <form className="flex flex-col md:flex-row items-stretch md:items-center max-w-xs w-full gap-2 md:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[180px] md:max-w-none px-3 py-2 border border-gray-600 rounded-md md:rounded-l-md md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-red-500 text-sm bg-black text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className=" min-w-[90px] md:max-w-none bg-red-500 text-white px-4 py-2 rounded-md md:rounded-l-none md:rounded-r-md font-semibold text-sm hover:bg-red-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Support</h3>
          <p className="text-sm mb-2 text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm mb-2 text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>
        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400 transition">My Account</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Login / Register</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Cart</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Wishlist</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Shop</a></li>
          </ul>
        </div>
        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-red-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>
        {/* Social Media Section */}
        <div className="flex flex-col items-start lg:items-end justify-between h-full">
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-500 hover:text-white transition-colors"><FaFacebookF size={18} /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-500 hover:text-white transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-500 hover:text-white transition-colors"><FaInstagram size={18} /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-red-500 hover:text-white transition-colors"><FaLinkedinIn size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 pb-2 text-center text-xs text-gray-500">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer; 