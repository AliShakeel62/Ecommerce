import React from 'react';

const categories = [
  {
    title: 'Phones',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 mx-auto">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Computers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 mx-auto">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="8" y="18" width="8" height="2" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'SmartWatch',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 mx-auto">
        <rect x="7" y="6" width="10" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="9" y="2" width="6" height="2" rx="1" fill="currentColor" />
        <rect x="9" y="20" width="6" height="2" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Camera',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 mx-auto">
        <rect x="3" y="7" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="8" y="4" width="2" height="3" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'HeadPhones',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 mx-auto">
        <path d="M4 17v-2a8 8 0 0116 0v2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="2" y="15" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="18" y="15" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Gaming',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 mx-auto">
        <rect x="4" y="8" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <circle cx="16" cy="12" r="1" fill="currentColor" />
        <rect x="11" y="10" width="2" height="4" rx="1" fill="currentColor" />
      </svg>
    ),
  },
];

const Category = () => {
  return (
    <section className="border-t border-b border-gray-200 py-10 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center mb-1">
          <div className="w-3 h-7 bg-red-500 rounded mr-2"></div>
          <span className="text-red-500 font-semibold text-sm">Categories</span>
        </div>
        <h2 className="text-3xl font-bold text-black font-sans tracking-tight">Browse By Category</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col items-center justify-center bg-white text-black border border-gray-200 rounded-lg h-24 md:h-32 transition-all duration-200 cursor-pointer hover:bg-red-500 hover:text-white group"
          >
            <div className="mb-2 group-hover:text-white text-gray-700">{cat.icon}</div>
            <span className="text-xs md:text-sm font-medium group-hover:text-white">{cat.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category; 