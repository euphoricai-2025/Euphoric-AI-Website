import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headphones, ArrowRight, TrendingUp, BookOpen, Users, Globe } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const CustomerSupportAgentUseCase = () => {
  const useCases = [
    {
      icon: BookOpen,
      title: 'Instant Knowledge Base Answers',
      description: 'Provide immediate, accurate answers to customer questions by accessing your comprehensive knowledge base, reducing wait times and improving customer satisfaction.',
      stats: 'Resolve 75% of inquiries instantly and reduce average resolution time from 24 hours to 2 minutes',
      realWorldPainPoint: 'Customers wait an average of 12 minutes on hold for simple questions that could be answered instantly. 67% of customers hang up when put on hold, leading to frustrated customers and lost business opportunities worth millions annually.',
      features: [
        'Real-time knowledge base search and retrieval',
        'Natural language processing for complex query understanding',
        'Multi-format content support (FAQs, documents, videos)',
        'Dynamic answer personalization based on customer context',
        'Automatic knowledge base updates and content synchronization',
        'Escalation triggers for complex issues requiring human intervention'
      ]
    },
    {
      icon: Users,
      title: 'Smart Escalation to Human Agents',
      description: 'Seamlessly transfer complex issues to human agents with full context and conversation history, ensuring efficient resolution and customer satisfaction.',
      stats: 'Improve first-call resolution by 60% and reduce human agent workload by 40%',
      realWorldPainPoint: 'Customers have to repeat their issues multiple times when transferred between agents. Poor handoffs waste 30% of agent time on information gathering instead of problem-solving, leading to longer resolution times and frustrated customers.',
      features: [
        'Intelligent escalation decision-making based on query complexity',
        'Complete conversation history transfer to human agents',
        'Customer context and preference sharing for personalized service',
        'Priority routing based on customer tier and issue urgency',
        'Agent availability monitoring and optimal assignment',
        'Seamless handoff with no information loss or repetition'
      ]
    },
    {
      icon: Globe,
      title: 'Multi-Language Support & Troubleshooting',
      description: 'Provide consistent, high-quality customer support across multiple languages while handling complex technical troubleshooting scenarios.',
      stats: 'Expand global support coverage by 300% and improve customer satisfaction scores by 45%',
      realWorldPainPoint: 'Hiring multilingual support staff is expensive and scaling globally is challenging. Technical troubleshooting requires specialized knowledge that varies between agents, leading to inconsistent service quality and customer frustration.',
      features: [
        'Native-level fluency in 35+ languages with cultural context',
        'Technical troubleshooting guides and step-by-step assistance',
        'Visual aid generation and screen-sharing integration',
        'Product-specific knowledge and compatibility checking',
        'Warranty and service history integration',
        'Follow-up scheduling and case tracking across languages'
      ]
    }
  ];

  const industries = [
    { 
      name: 'E-commerce & Retail', 
      description: 'Online retailers managing order inquiries, returns, and product support', 
      painPoint: 'Peak shopping periods overwhelm support teams, with response times exceeding 48 hours' 
    },
    { 
      name: 'Software & Technology', 
      description: 'SaaS companies and tech firms providing technical support and onboarding', 
      painPoint: 'Complex technical issues require specialized knowledge that junior agents lack' 
    },
    { 
      name: 'Financial Services', 
      description: 'Banks, credit unions, and fintech companies handling account and transaction support', 
      painPoint: 'Regulatory compliance requires consistent, accurate responses that human agents sometimes miss' 
    },
    { 
      name: 'Healthcare & Insurance', 
      description: 'Healthcare providers and insurance companies managing benefits and claims support', 
      painPoint: 'HIPAA compliance and complex policy explanations require specialized training and consistency' 
    },
    { 
      name: 'Telecommunications', 
      description: 'Telecom companies providing service support and technical troubleshooting', 
      painPoint: 'Technical support calls require 45+ minutes on average, creating massive operational costs' 
    },
    { 
      name: 'Travel & Hospitality', 
      description: 'Airlines, hotels, and travel companies managing bookings and customer service', 
      painPoint: 'Seasonal demand fluctuations make it impossible to maintain consistent service levels' 
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Park',
      role: 'Customer Experience Director',
      company: 'TechShop Pro',
      content: 'Our customer satisfaction scores jumped from 3.2 to 4.8 stars after implementing the AI support agent. It handles 80% of our inquiries instantly, and our human agents can focus on complex issues. We\'ve reduced support costs by $400,000 annually while improving service quality.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'VP of Operations',
      company: 'Global Finance Solutions',
      content: 'The multi-language support is incredible. We now provide 24/7 support in 15 languages without hiring additional staff. Customer resolution time dropped from 24 hours to under 5 minutes for 70% of our inquiries. It\'s transformed our international operations.',
      image: 'https://images.pexels.com/photos/3760511/pexels-photo-3760511.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="icon-badge-lg mx-auto mb-6"
            >
              <Headphones className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Customer Support</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how businesses are using AI voice agents to provide instant customer support, reduce response times, and deliver 24/7 assistance across multiple languages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/pricing"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Book Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Customer Support Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents transforming how businesses deliver customer service and support
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="icon-badge mb-6">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {useCase.description}
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-red-800">Current Pain Point:</h4>
                        <p className="text-sm text-red-700 mt-1">{useCase.realWorldPainPoint}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-green-800">Results with AI:</h4>
                        <p className="text-sm text-green-700 mt-1">{useCase.stats}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`card ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="font-semibold text-gray-900 mb-4">How It Works:</h4>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Solving customer support challenges across different business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {industry.description}
                </p>
                <div className="text-xs text-red-600 bg-red-50 rounded p-2">
                  <strong>Challenge:</strong> {industry.painPoint}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Customer Success Teams
            </h2>
            <p className="text-lg text-gray-600">
              Real results from businesses transforming their customer support with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-teal">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Customer Support?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of businesses using AI voice agents to provide instant support, reduce costs, and deliver exceptional customer experiences around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportAgentUseCase;