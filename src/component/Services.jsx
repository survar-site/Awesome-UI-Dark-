import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Shield, 
  Zap, 
  Check, 
  Star, 
  ArrowRight,
  Palette,
  Code,
  Search,
  BarChart3,
  MessageSquare,
  Settings,
  Users,
  Target,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web-development');

  const serviceCategories = [
    {
      id: 'web-development',
      name: 'Web Development',
      icon: Globe,
      description: 'Custom websites and web applications'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      icon: Smartphone,
      description: 'iOS and Android applications'
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      icon: ShoppingCart,
      description: 'Online stores and marketplaces'
    },
    {
      id: 'ui-ux-design',
      name: 'UI/UX Design',
      icon: Palette,
      description: 'User interface and experience design'
    }
  ];

  const services = {
    'web-development': [
      {
        name: 'Basic Website',
        price: '$2,500',
        duration: '2-3 weeks',
        description: 'Professional website for small businesses',
        features: [
          'Responsive design',
          'Up to 5 pages',
          'Contact form',
          'SEO optimization',
          'Google Analytics',
          'Basic CMS',
          'Social media integration',
          '1 month support'
        ],
        popular: false,
        icon: Globe
      },
      {
        name: 'Business Website',
        price: '$5,000',
        duration: '4-6 weeks',
        description: 'Comprehensive website for growing businesses',
        features: [
          'Everything in Basic',
          'Up to 15 pages',
          'Blog functionality',
          'Advanced SEO',
          'Email marketing integration',
          'Custom animations',
          'Performance optimization',
          '3 months support'
        ],
        popular: true,
        icon: Globe
      },
      {
        name: 'Custom Web App',
        price: '$15,000+',
        duration: '8-12 weeks',
        description: 'Full-featured web application',
        features: [
          'Everything in Business',
          'Custom functionality',
          'User authentication',
          'Database integration',
          'API development',
          'Advanced security',
          'Scalable architecture',
          '6 months support'
        ],
        popular: false,
        icon: Code
      }
    ],
    'mobile-apps': [
      {
        name: 'Basic App',
        price: '$8,000',
        duration: '6-8 weeks',
        description: 'Simple mobile application',
        features: [
          'iOS or Android',
          'Basic UI/UX',
          'Core functionality',
          'App Store submission',
          'Basic testing',
          'User guide',
          '1 month support'
        ],
        popular: false,
        icon: Smartphone
      },
      {
        name: 'Advanced App',
        price: '$20,000',
        duration: '10-14 weeks',
        description: 'Feature-rich mobile application',
        features: [
          'Cross-platform (React Native)',
          'Advanced UI/UX',
          'Backend integration',
          'Push notifications',
          'Offline functionality',
          'Analytics integration',
          'Comprehensive testing',
          '3 months support'
        ],
        popular: true,
        icon: Smartphone
      },
      {
        name: 'Enterprise App',
        price: '$50,000+',
        duration: '16-20 weeks',
        description: 'Complex enterprise mobile solution',
        features: [
          'Everything in Advanced',
          'Custom backend',
          'Advanced security',
          'Multi-user support',
          'Real-time features',
          'Third-party integrations',
          'Performance optimization',
          '6 months support'
        ],
        popular: false,
        icon: Smartphone
      }
    ],
    'ecommerce': [
      {
        name: 'Starter Store',
        price: '$4,000',
        duration: '4-6 weeks',
        description: 'Basic e-commerce website',
        features: [
          'Product catalog',
          'Shopping cart',
          'Payment integration',
          'Order management',
          'Basic inventory',
          'Mobile responsive',
          'SEO optimization',
          '2 months support'
        ],
        popular: false,
        icon: ShoppingCart
      },
      {
        name: 'Professional Store',
        price: '$12,000',
        duration: '8-10 weeks',
        description: 'Advanced e-commerce platform',
        features: [
          'Everything in Starter',
          'Advanced inventory',
          'Multiple payment methods',
          'Shipping integration',
          'Customer accounts',
          'Reviews & ratings',
          'Marketing tools',
          '4 months support'
        ],
        popular: true,
        icon: ShoppingCart
      },
      {
        name: 'Marketplace',
        price: '$30,000+',
        duration: '12-16 weeks',
        description: 'Multi-vendor marketplace',
        features: [
          'Everything in Professional',
          'Vendor management',
          'Commission system',
          'Advanced analytics',
          'Multi-language support',
          'Advanced security',
          'Scalable architecture',
          '6 months support'
        ],
        popular: false,
        icon: ShoppingCart
      }
    ],
    'ui-ux-design': [
      {
        name: 'Basic Design',
        price: '$1,500',
        duration: '1-2 weeks',
        description: 'Essential UI/UX design',
        features: [
          'Wireframes',
          'Basic mockups',
          'User flow diagrams',
          'Design system basics',
          'Responsive design',
          'Design files',
          '1 revision round'
        ],
        popular: false,
        icon: Palette
      },
      {
        name: 'Professional Design',
        price: '$4,000',
        duration: '3-4 weeks',
        description: 'Comprehensive UI/UX design',
        features: [
          'Everything in Basic',
          'High-fidelity mockups',
          'Interactive prototypes',
          'User research',
          'Usability testing',
          'Design system',
          '3 revision rounds'
        ],
        popular: true,
        icon: Palette
      },
      {
        name: 'Enterprise Design',
        price: '$10,000+',
        duration: '6-8 weeks',
        description: 'Complete design system',
        features: [
          'Everything in Professional',
          'Design system library',
          'Component documentation',
          'Accessibility compliance',
          'Brand guidelines',
          'Design handoff',
          'Unlimited revisions'
        ],
        popular: false,
        icon: Palette
      }
    ]
  };

  const additionalServices = [
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Search engine optimization and digital marketing services to boost your online presence.',
      price: 'From $500/month'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics setup and regular reporting to track your business performance.',
      price: 'From $300/month'
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your project running smoothly.',
      price: 'From $200/month'
    },
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Expert consultation and strategy sessions to help you make informed decisions.',
      price: 'From $150/hour'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                Comprehensive digital solutions to help your business grow and succeed in the digital world.
              </p>
            </div>
            
            {/* Services Banner Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/mg99BN0C/our-survices.jpg" 
                  alt="Our Services - Visual Design, Web Development, SEO SEM, UI UX Design, Online Marketing, Mobile Apps, Hosting and Web Design"
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                  }}
                />
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our range of professional services
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === category.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                  activeTab === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Service Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Service Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {service.price}
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ongoing support and specialized services to keep your business growing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-blue-600">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results with every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                We never compromise on quality and always deliver exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                We respect deadlines and always deliver projects on schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our experienced team ensures your project is in capable hands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Results Driven
              </h3>
              <p className="text-gray-600">
                We focus on delivering measurable results that grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto sm:mx-0">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto sm:mx-0">
              <MessageSquare className="w-5 h-5 mr-2" />
              Schedule Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 