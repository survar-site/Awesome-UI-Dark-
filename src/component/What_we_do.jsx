import React from 'react';
import { Monitor, Star, Smartphone, ShoppingBag, Zap, Code } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What We do
          </h2>
        </div>

        {/* Services Grid - Mobile First Approach */}
        <div className="flex flex-col space-y-6 sm:space-y-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {/* Web Design */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Web Design
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              UI/UX Design
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Responsive Design
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          {/* E-commerce Solutions */}
          <div className="bg-white flex flex-col justify-between rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 lg:col-span-1 row-span-2 ">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                E-commerce Solutions
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
              </p>
            </div>
            {/* Image */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden mt-4 sm:mt-6">
              <img 
                src="https://i.postimg.cc/Kz8fZ6cH/Rectangle-44.png"
                alt="Team collaboration"
                className="w-full h-full object-cover min-h-[200px] sm:min-h-[280px]"
              />
            </div>
          </div>

          {/* Webflow - Two Columns on Desktop */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Text Content Column */}
              <div className="flex flex-col justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <img src="https://i.postimg.cc/K86Lp4Hf/Vector.png" className='h-6 w-6 sm:h-8 sm:w-8' alt="Webflow" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Webflow
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                </p>
              </div>

              {/* Image/Logo Column */}
              <div className="bg-gradient-to-br flex items-center justify-center bg-indigo-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                <div className="items-center justify-center opacity-100">
                  <img src="https://i.postimg.cc/K86Lp4Hf/Vector.png" alt="Webflow Logo" className='h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20'/>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Development */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Custom Development
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;