// components/HeroBanner.jsx
import React from 'react';
import Herobanner from "../assets/herobaneer.jpg";

const HeroBanner = () => {
  return (
    <div className="w-full relative px-4 md:px-8">
      <img
        src={`${Herobanner}`}
        alt="HP Hero Banner"
        className="w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[340px] xl:h-[600px] object-cover rounded-lg mx-auto"
      />
      <div
        className="absolute left-6 bottom-6 sm:left-8 sm:bottom-8 md:left-16 md:bottom-14 lg:left-[77rem] lg:bottom-[62rem] xl:left-[19.25rem] xl:bottom-[12.5rem]"
      >
        <button
          className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-6 md:py-2.5 md:text-base lg:px-8 lg:py-3 lg:text-lg font-semibold rounded-lg bg-green-500 text-black shadow-xl transition duration-300 hover:bg-red-600 hover:text-white"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
