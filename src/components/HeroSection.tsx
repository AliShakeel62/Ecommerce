import React, { useState, useEffect } from 'react';
// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { increment, decrement } from '../redux/counterSlice';

const images = [
  'https://images.unsplash.com/photo-1554941071-8ec75d5379b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
"https://e7852c3a.delivery.rocketcdn.me/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg",
  'https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  "https://image-us.samsung.com/us/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-kv.jpg?imbypass=true",
];

const HeroSection: React.FC = () => {
  
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <section className="w-full bg-white overflow-x-hidden">
      {/* Gray line under navbar */}
      <div className="w-full h-[3px] mb-0" />
      <div className="flex justify-center items-center w-full">
        <div className="w-full relative">
           {/* Slider image  */}
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full min-h-[180px] h-[35vw] max-h-[700px] object-cover transition-all duration-500 m-0 p-0"
          />
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          {/* Dots */}
          <div className="flex justify-center mt-4 gap-3 absolute left-1/2 -translate-x-1/2 bottom-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 focus:outline-none
                  ${current === idx
                    ? 'bg-gray-900 border-gray-900 shadow-lg scale-110 opacity-100'
                    : 'bg-white border-gray-400 opacity-70 hover:opacity-100'}
                `}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 