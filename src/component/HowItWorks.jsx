import React, { useState } from 'react';
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  Target,
  MessageSquare,
  FileText,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
      details: [
        "Initial project consultation",
        "Requirements gathering",
        "Target audience analysis",
        "Competitor research",
        "Project scope definition"
      ],
      duration: "1-2 days"
    },
    {
      icon: PenTool,
      title: "Design & Strategy",
      description: "Our creative team develops strategic design solutions that align with your brand and business objectives.",
      details: [
        "Wireframing and prototyping",
        "UI/UX design creation",
        "Brand identity integration",
        "User experience optimization",
        "Design system development"
      ],
      duration: "3-5 days"
    },
    {
      icon: Code,
      title: "Development & Build",
      description: "Expert developers bring designs to life using cutting-edge technologies and best practices.",
      details: [
        "Frontend development",
        "Backend integration",
        "Database setup",
        "API development",
        "Performance optimization"
      ],
      duration: "7-14 days"
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "We deploy your project and continuously optimize for performance, user experience, and business results.",
      details: [
        "Quality assurance testing",
        "Performance optimization",
        "SEO implementation",
        "Analytics setup",
        "Launch and monitoring"
      ],
      duration: "2-3 days"
    }
  ];

  const methodologies = [
    {
      icon: Target,
      title: "Agile Development",
      description: "We follow agile methodologies to ensure flexibility, transparency, and rapid delivery of high-quality results."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Regular communication and feedback loops ensure your vision is perfectly translated into the final product."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks at every stage ensure your project meets the highest standards."
    },
    {
      icon: TrendingUp,
      title: "Performance Focus",
      description: "We optimize for speed, scalability, and user experience to drive real business results."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Figma", category: "Design" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our proven process for creating exceptional digital experiences that drive real business results.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, transparency, and results
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === index 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${
                  activeStep === index 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeStep === index 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {step.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {step.duration}
                </div>

                {/* Active State Details */}
                {activeStep === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven approaches that ensure success in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <methodology.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {methodology.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {methodology.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Typical project duration and key milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex items-center mb-3">
                        <step.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto sm:mx-0">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto sm:mx-0">
              <MessageSquare className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 