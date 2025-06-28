import React from 'react';

export default function AgencyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="navbar bg-white shadow-sm px-4 lg:px-8">
        <div className="navbar-start">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl">FasterUI</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <li><a className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a className="text-gray-600 hover:text-gray-900">Portfolio</a></li>
            <li><a className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white px-6">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Awesome UI Dark<br />
              Template for<br />
              <span className="text-yellow-300">Webflow Agency</span>
            </h1>
            <button className="btn bg-black hover:bg-gray-800 text-white border-none px-8 py-3 text-lg mt-8">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">What We do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Design */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create stunning and functional web designs that capture your brand essence and engage your audience effectively.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our UI/UX designs focus on creating intuitive and delightful user experiences that drive engagement and conversions.
              </p>
            </div>

            {/* Responsive Design */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All our designs are fully responsive and optimized for all devices, ensuring perfect user experience everywhere.
              </p>
            </div>

            {/* E-commerce Solutions */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build powerful e-commerce platforms that help businesses sell online with advanced features and security.
              </p>
            </div>
          </div>

          {/* Additional Services Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* SEO */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO</h3>
              <p className="text-gray-600 text-sm">
                Optimize your website for search engines and improve your online visibility with our comprehensive SEO strategies.
              </p>
            </div>

            {/* Webflow */}
            <div className="bg-blue-600 p-6 rounded-lg text-white">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">W</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Webflow</h3>
              <p className="text-blue-100 text-sm">
                Expert Webflow development services to create fast, responsive, and visually stunning websites.
              </p>
            </div>

            {/* Content Development */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Development</h3>
              <p className="text-gray-600 text-sm">
                Create compelling content that resonates with your audience and drives meaningful engagement.
              </p>
            </div>
          </div>

          {/* Team Member */}
          <div className="mt-12 flex justify-end">
            <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Check our Work Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Check our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Dark Portfolio Item */}
              <div className="bg-gradient-to-br from-purple-900 to-black rounded-xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">F</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">FasterUI</h3>
                    <p className="text-purple-200 text-sm">Dark Theme Portfolio</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-purple-700 rounded-lg"></div>
                  <div className="h-20 bg-purple-600 rounded-lg"></div>
                  <div className="h-20 bg-purple-800 rounded-lg"></div>
                </div>
              </div>

              {/* Agency Team */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Agency With Unlimited Possibilities</h3>
                  <button className="btn btn-sm btn-primary bg-blue-600 border-none">View</button>
                </div>
                <div className="flex -space-x-2 mb-4">
                  <div className="w-8 h-8 bg-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">+</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Portfolio Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-400 rounded-xl h-32 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <div className="bg-blue-500 rounded-xl h-32 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <div className="bg-purple-500 rounded-xl h-32 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <div className="bg-green-500 rounded-xl h-32 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">04</span>
                </div>
              </div>

              {/* Brand Logos */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center justify-center">
                    <div className="text-2xl font-bold text-purple-600">Astrix</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-bold text-blue-600">Shopify</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-bold text-green-600">Spotify</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-xl font-bold text-blue-800">LinkedIn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Team Section */}
          <div className="mt-12 text-center">
            <div className="flex justify-center -space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-red-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold">Backed by 50+ Clients</span> — Our work speaks for itself
            </p>
          </div>
        </div>
      </section>
    </div>
  );
  
}

