import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-black">Exclusive</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-black hover:underline underline-offset-4 decoration-2 decoration-black">Home</a>
            <a href="#" className="text-black hover:underline underline-offset-4 decoration-2 decoration-black">Contact</a>
            <a href="#" className="text-black hover:underline underline-offset-4 decoration-2 decoration-black">About</a>
            <a href="#" className="text-black hover:underline underline-offset-4 decoration-2 decoration-black">Sign Up</a>
          </nav>

          {/* Search + Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex bg-[#f5f5f5] rounded px-3 py-1 items-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm placeholder-gray-500 w-40"
              />
              {/* Modern search icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </div>
            {/* Icons */}
            <button className="text-black text-xl" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a4.5 4.5 0 00-3.6 1.8 4.5 4.5 0 00-7.65 2.7c0 5.25 7.65 10.5 7.65 10.5s7.65-5.25 7.65-10.5a4.5 4.5 0 00-4.5-4.5z" />
              </svg>
            </button>
            <button className="text-black text-xl" title="Cart">
              {/* Standard Heroicons cart icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.5l1.5 13.5a2.25 2.25 0 002.25 2.25h9.75a2.25 2.25 0 002.25-2.25L20.25 6H6.75" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="17" cy="20" r="1" />
              </svg>
            </button>
            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2 shadow">
          <a href="#" className="block text-black hover:underline underline-offset-4 decoration-2 decoration-black">Home</a>
          <a href="#" className="block text-black hover:underline underline-offset-4 decoration-2 decoration-black">Contact</a>
          <a href="#" className="block text-black hover:underline underline-offset-4 decoration-2 decoration-black">About</a>
          <a href="#" className="block text-black hover:underline underline-offset-4 decoration-2 decoration-black">Sign Up</a>
          <div className="flex bg-[#f5f5f5] rounded px-3 py-1 items-center mt-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm placeholder-gray-500 w-full"
            />
            {/* Modern search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
