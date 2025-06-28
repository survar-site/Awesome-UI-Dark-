import React, { useState, useEffect } from 'react';
import ReviewSection from  './ReviewSection'
import PricingSection from './PricingSection'

// Import images for the cards
import img1 from '../img/thambel.png';
import img2 from '../img/thambel1.png';
import img3 from '../img/thambel2.png';
import img4 from '../img/thambel3.png';
import img5 from '../img/thambel4.png';
import img6 from '../img/Rectangle 44.png';


// Decorative SVG for background (replace with your own if needed)
const bgDecor = (
  <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-40 select-none pointer-events-none">
    <g filter="url(#filter0_f_1_2)">
      <ellipse cx="300" cy="100" rx="200" ry="40" fill="#E0E7FF"/>
    </g>
    <defs>
      <filter id="filter0_f_1_2" x="0" y="0" width="600" height="200" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_2"/>
      </filter>
    </defs>
  </svg>
);

const images = [img1, img2, img3, img4, img5, img6];

const PortfolioShowcase = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative min-h-[100vh] bg-[#f6f9ff] py-20 px-2 overflow-x-hidden flex flex-col items-center">
      {bgDecor}
      <div className="relative max-w-7xl w-full mx-auto pt-10">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center tracking-tight">Check our Work</h2>
        <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto text-lg md:text-xl font-normal">
          Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
        </p>
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-[500px] object-cover transition-all duration-700"
          />
          
          {/* Left Navigation Icon */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Right Navigation Icon */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ReviewSection/>
        {/* PricingSection */}
        <PricingSection/>
      </div>
      
    </div>
  );
};

export default PortfolioShowcase; 


