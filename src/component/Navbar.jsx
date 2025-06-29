import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Banar from './Banar'
import WhatWeDo from './What_we_do';
import PortfolioShowcase from './PortfolioShowcase';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/LoginForm');
  };

  const handleSignUp = () => {
    navigate('/SignupForm');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleHowItWorks = () => {
    navigate('/how-it-works');
  };

  const handleServices = () => {
    navigate('/services');
  };

  return (
    <nav className="fixed top-0 left-0  right-0 z-50 backdrop-blur-md">
      {/* <img src="../img/Mask group.png" alt="" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={handleHome} className="flex items-center space-x-2 cursor-pointer">
              <svg
                className="h-8 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-2xl font-bold text-gray-800">FasterUI</span>
            </button>
          </div>

          {/* Centered Navigation Links for Desktop */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1">
            <div className="bg-white/50 backdrop-blur-lg rounded-full shadow-sm px-6 py-3">
              <div className="flex items-center space-x-8">
                <button
                  onClick={handleHome}
                  className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={handleAbout}
                  className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={handleHowItWorks}
                  className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                >
                  How it Works
                </button>
                <button
                  onClick={handleServices}
                  className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
                >
                  Services
                </button>
              </div>
            </div>
          </div>

          {/* Sign In and Sign Up Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleSignIn}
              className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <button 
              onClick={handleHome}
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={handleAbout}
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={handleHowItWorks}
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              How it Works
            </button>
            <button 
              onClick={handleServices}
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              Services
            </button>
            <hr className="my-2"/>
            <button 
              onClick={handleSignIn}
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              Sign In
            </button>
            <button 
              onClick={handleSignUp}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-2 cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;