import React from 'react';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import NotFound from './NotFound.jsx';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // If it's a 404 error, show the NotFound component
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  let errorMessage = 'Something went wrong';
  let errorDetails = 'An unexpected error occurred. Please try again.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      errorMessage = 'Server Error';
      errorDetails = 'Something went wrong on our end. Please try again later.';
    } else {
      errorMessage = `Error ${error.status}`;
      errorDetails = error.data?.message || 'An error occurred while loading this page.';
    }
  } else if (error instanceof Error) {
    errorMessage = 'Application Error';
    errorDetails = error.message || 'An unexpected error occurred in the application.';
  }

  const handleGoHome = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {errorMessage}
        </h1>

        {/* Error Details */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {errorDetails}
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
            onClick={handleRefresh}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh Page
          </button>
        </div>

        {/* Error Code for Development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500 mb-2">Debug Information:</p>
            <pre className="text-xs text-gray-600 text-left overflow-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorBoundary; 