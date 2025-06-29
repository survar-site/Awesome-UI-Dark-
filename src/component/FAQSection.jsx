import React, { useState } from 'react';
import springImg from '../img/spring.png';
import ContactForm from './ContactForm';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // First item open by default

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How can I contact Inkyy Team?",
      answer: "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com. We typically respond within 24 hours."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of digital services including web design, web development, branding, digital marketing, and e-commerce solutions."
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we provide comprehensive website maintenance services including regular updates, security monitoring, backup services, and technical support."
    },
    {
      question: "How long does it take to design and develop a website?",
      answer: "The timeline varies depending on the complexity of the project. A simple website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks."
    },
    {
      question: "Do you require a deposit for projects?",
      answer: "Yes, we typically require a 50% deposit before starting any project, with the remaining balance due upon completion and approval."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-16 px-4 sm:px-8 relative overflow-hidden">
      

        <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
                {/* Left Side - Title */}
            
                <div className="lg:sticky lg:top-16 relative">
                     {/* background img */}
                     <img src={springImg} alt="Spring background decoration" className="w-full h-auto" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight text-center px-4">
                        Frequently<br />
                        Asked<br />
                        Questions
                        </h2>
                     </div>
                </div>
            
                {/* Right Side - FAQ Items */}
                <div className="space-y-3 sm:space-y-4">
                   
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                            <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2 sm:pr-4">
                                {item.question}
                            </span>
                            <div className="flex-shrink-0">
                                {openItems[index] ? (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                ) : (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                )}
                            </div>
                            </button>
                            
                            {openItems[index] && (
                            <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                                <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {item.answer}
                                {index === 0 && (
                                    <>
                                    {' '}
                                    <span className="font-semibold text-gray-900">hello@inkyy.com</span>
                                    {' '}We typically respond within 24 hours.
                                    </>
                                )}
                                </div>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ContactForm/>
    </div>
  );
};

export default FAQSection;