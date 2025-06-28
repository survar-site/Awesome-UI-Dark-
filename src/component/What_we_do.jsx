import React from 'react';
import { Monitor, Star, Smartphone, ShoppingBag, Zap, Code } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What We do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Design */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Monitor className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Web Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="bg-white  rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Responsive Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>


          {/* E-commerce Solutions */}
            <div className="bg-white flex flex-col justify-between row-span-2 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <ShoppingBag className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    E-commerce Solutions:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                    </p>

                </div>
                {/* img */}
                <div className="bg-white  rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
                    <img 
                    src="https://i.postimg.cc/Kz8fZ6cH/Rectangle-44.png"
                    alt="Team collaboration"
                    className="w-full h-full object-cover min-h-[280px]"
                    />
                </div>
            </div>


          {/* Webflow */}
            <div className="bg-white rounded-2xl grid grid-cols-2 gap-16 col-span-2 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className='col-span-1'>

                    <div className="w-10 h-10  bg-indigo-500 rounded-lg flex items-center justify-center mb-6">
                    {/* <Zap className="w-6 h-6 text-white" /> */}
                    <img src="https://i.postimg.cc/K86Lp4Hf/Vector.png" className='h-8 w-8' alt="" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Webflow
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                    </p>
                </div>

                {/* Featured Card - Webflow with Logo */}
                <div className="bg-gradient-to-br flex items-center justify-center bg-indigo-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    
                    <div className=" items-center justify-center opacity-100">
                        <img src="https://i.postimg.cc/K86Lp4Hf/Vector.png" alt="" className='colors-white'/>
                    
                    </div>
                </div>
            </div>

          

          {/* Custom Development */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          
          {/* Image Card */}
         
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;