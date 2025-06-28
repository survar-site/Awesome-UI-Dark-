import React from 'react';
import FAQSection from './FAQSection'

const PricingSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
          {/* Left Side - Pricing */}
          <div >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
            </p>
            
            
            
            {/* CTA Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-5xl font-bold text-gray-900 mb-6">
                Let's Schedule<br />
                a Meeting
              </h3>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                Schedule Meeting
              </button>
            </div>
          </div>
          
          {/* Right Side - Unlimited Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unlimited Services</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
            </p>
            
            <div className='flex justify-between '>
                {/* Feature List */}
                <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-gray-700">Unlimited requests</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-gray-700">Unlimited requests</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-gray-700">Unlimited requests</span>
                    </div>
                </div>

                {/* Feature List */}
                <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-gray-700">Unlimited requests</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-gray-700">Unlimited requests</span>
                    </div>
                
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <span className="text-gray-700">Unlimited requests</span>
                    </div>
                </div>
            </div>
            
            {/* Price Section */}
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold text-gray-900">$3,250</span>
              <span className="text-gray-500 text-lg mb-2">/mo</span>
              <div className="ml-auto">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection/>
    </div>
    
  );
};

export default PricingSection;