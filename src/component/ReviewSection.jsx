import React from 'react';

const ReviewSection = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 p-4 sm:p-8">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-md">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {/* Profile Pictures */}
          <div className="flex items-center justify-center sm:justify-start">
            {/* Profile 1 - Blue gradient */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs sm:text-sm border-2 border-white relative z-10">
              J
            </div>
            
            {/* Profile 2 - Orange gradient */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold text-xs sm:text-sm border-2 border-white relative z-10 -ml-1 sm:-ml-2">
              S
            </div>
            
            {/* Profile 3 - Dark gradient */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-semibold text-xs sm:text-sm border-2 border-white relative z-10 -ml-1 sm:-ml-2">
              M
            </div>
            
            {/* Profile 4 - Pink gradient */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center text-white font-semibold text-xs sm:text-sm border-2 border-white relative z-10 -ml-1 sm:-ml-2">
              A
            </div>
            
            {/* Profile 5 - Purple gradient */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-xs sm:text-sm border-2 border-white relative z-10 -ml-1 sm:-ml-2">
              R
            </div>
          </div>
          
          {/* Rating and Review Text */}
          <div className="flex items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span className="text-base sm:text-lg font-semibold text-gray-900">5.0</span>
            <span className="text-gray-500 text-xs sm:text-sm">Based On</span>
            <span className="text-gray-900 font-medium text-xs sm:text-sm">145</span>
            <span className="text-gray-500 text-xs sm:text-sm">Reviews</span>
          </div>
          
          {/* Stars */}
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;