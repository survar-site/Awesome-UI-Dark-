import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(to top, #ff9a8b 0%, #ffb199 10%, #ffd1dc 20%, #f0f8ff 40%, transparent 70%)'
    }}>
      {/* Left decorative element - hidden on mobile */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-30 hidden md:block">
        <div className="relative">
          <div className="w-32 h-4 bg-white rounded-full transform rotate-45"></div>
          <div className="w-32 h-4 bg-white rounded-full transform -rotate-45 absolute top-0"></div>
        </div>
      </div>

      {/* Right decorative element - hidden on mobile */}
      <div className="absolute right-4 top-16 opacity-40 hidden md:block">
        <div className="relative">
          <div className="w-24 h-3 bg-white rounded-full transform rotate-12"></div>
          <div className="w-24 h-3 bg-white rounded-full transform -rotate-12 absolute top-0"></div>
          <div className="w-20 h-3 bg-white rounded-full transform rotate-45 absolute top-2 left-2"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-4 sm:py-8">
        {/* Contact Form */}
        <div className="w-full max-w-md mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
            Let's Get in Touch
          </h1>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                className="w-full px-3 sm:px-4 py-3 bg-white bg-opacity-80 border-0 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="full name"
                className="w-full px-3 sm:px-4 py-3 bg-white bg-opacity-80 border-0 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="write your message..."
                className="w-full px-3 sm:px-4 py-3 bg-white bg-opacity-80 border-0 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-colors duration-200 text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Footer Card with gradient background */}
        <div className="w-full flex items-center justify-center py-4 sm:py-8 px-2 sm:px-4">
          <div className="w-full max-w-2xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl p-1">
            <div className="bg-white bg-opacity-90 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs sm:text-sm">F</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">FasterUI</h3>
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                    Ready to elevate your online presence?
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                    Contact us today to discuss your project and
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    discover how we can bring your vision to life.
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                    <span className="mr-1">💜</span>
                    <span>Made with love powered by InkyUI.com</span>
                  </div>
                </div>

                <div className="flex-shrink-0 sm:ml-8">
                  <nav className="flex flex-wrap gap-3 sm:gap-6 mb-4 sm:mb-6">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm">How It Works</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm">Services</a>
                  </nav>
                  
                  <div className="flex space-x-2 sm:space-x-3 justify-start sm:justify-end">
                    <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-gray-600 text-xs sm:text-sm">📧</span>
                    </a>
                    <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-gray-600 text-xs sm:text-sm">💼</span>
                    </a>
                    <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-gray-600 text-xs sm:text-sm">🔗</span>
                    </a>
                    <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <span className="text-gray-600 text-xs sm:text-sm">📍</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}