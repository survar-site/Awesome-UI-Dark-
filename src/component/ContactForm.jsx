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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative  overflow-hidden">
      {/* Left decorative element */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-30">
        <div className="relative">
          <div className="w-32 h-4 bg-white rounded-full transform rotate-45"></div>
          <div className="w-32 h-4 bg-white rounded-full transform -rotate-45 absolute top-0"></div>
        </div>
      </div>

      {/* Right decorative element */}
      <div className="absolute right-4 top-16 opacity-40">
        <div className="relative">
          <div className="w-24 h-3 bg-white rounded-full transform rotate-12"></div>
          <div className="w-24 h-3 bg-white rounded-full transform -rotate-12 absolute top-0"></div>
          <div className="w-20 h-3 bg-white rounded-full transform rotate-45 absolute top-2 left-2"></div>
        </div>
      </div>

      {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
            {/* Contact Form */}
            <div className="w-full max-w-md mb-8">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                Let's Get in Touch
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 bg-white bg-opacity-80 border-0 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 bg-white bg-opacity-80 border-0 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 bg-white bg-opacity-80 border-0 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                    >
                    Get in Touch
                    </button>
                </form>
            </div>

           

                {/* Footer Card */}
                <div className="w-full max-w-2xl  bg-white bg-opacity-90 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">F</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">FasterUI</h3>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-2">
                            Ready to elevate your online presence?
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                            Contact us today to discuss your project and
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                            discover how we can bring your vision to life.
                        </p>
                        
                        <div className="flex items-center text-gray-500 text-sm">
                            <span className="mr-1">💜</span>
                            <span>Made with love powered by InkyUI.com</span>
                        </div>
                        </div>

                        <div className="flex-shrink-0 ml-8">
                        <nav className="flex space-x-6 mb-6">
                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Home</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">How It Works</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Services</a>
                        </nav>
                        
                        <div className="flex space-x-3 justify-end">
                            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-gray-600 text-sm">📧</span>
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-gray-600 text-sm">💼</span>
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-gray-600 text-sm">🔗</span>
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <span className="text-gray-600 text-sm">📍</span>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            

            
        </div>
    </div>
  );
}