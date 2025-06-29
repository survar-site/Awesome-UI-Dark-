import React from 'react';
import { useNavigate } from 'react-router';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* 404 Icon */}
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-12 h-12 text-blue-600" />
        </div>

        {/* 404 Number */}
        <div className="text-8xl font-bold text-gray-300 mb-4">404</div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        {/* Error Details */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Home
          </button>

          <button
            onClick={handleGoBack}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might want to visit:</p>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/')}
              className="block w-full text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              Home Page
            </button>
            <button
              onClick={() => navigate('/about')}
              className="block w-full text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              About Us
            </button>
            <button
              onClick={() => navigate('/LoginForm')}
              className="block w-full text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 