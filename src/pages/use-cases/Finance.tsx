import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, Phone, UserCheck, TrendingUp, ArrowRight, CheckCircle, Calendar, Shield } from 'lucide-react';

const FinanceUseCase = () => {
  const useCases = [
    {
      icon: UserCheck,
      title: 'Lead Qualification & Scoring',
      description: 'Automatically qualify financial leads by assessing investment goals, risk tolerance, and financial capacity before connecting with advisors.',
      stats: 'Increase qualified leads by 45% and reduce advisor time spent on unqualified prospects by 60%',
      realWorldPainPoint: 'Financial advisors spend 70% of their time screening unqualified leads, leaving less time for actual client consultation and relationship building.',
      features: [
        'Investment goal and timeline assessment',
        'Risk tolerance evaluation questionnaire',
        'Income and asset verification process',
        'Regulatory compliance requirement checks',
        'Automated lead scoring and routing to appropriate advisors'
      ]
    },
    {
      icon: Calendar,
      title: 'Client Onboarding & Documentation',
      description: 'Streamline new client onboarding with automated document collection, KYC compliance, and initial consultation scheduling.',
      stats: 'Reduce onboarding time from 2 weeks to 3 days and improve compliance documentation by 85%',
      realWorldPainPoint: 'New client onboarding requires extensive paperwork, multiple follow-ups for missing documents, and manual compliance checks, creating delays and poor first impressions.',
      features: [
        'Automated document request and tracking',
        'KYC (Know Your Customer) compliance verification',
        'Identity verification and background checks',
        'Initial consultation scheduling and preparation',
        'Client portal setup and access coordination'
      ]
    },
    {
      icon: Phone,
      title: 'Portfolio Review & Rebalancing Notifications',
      description: 'Proactively contact clients about portfolio performance, rebalancing opportunities, and market changes affecting their investments.',
      stats: 'Increase client retention by 40% and portfolio review meeting attendance by 65%',
      realWorldPainPoint: 'Clients often miss important portfolio rebalancing opportunities and market changes, leading to suboptimal returns and reduced trust in advisory services.',
      features: [
        'Performance-based outreach triggers',
        'Market volatility and opportunity alerts',
        'Rebalancing recommendation delivery',
        'Review meeting scheduling and preparation',
        'Client education on market conditions and strategy adjustments'
      ]
    }
  ];

  const industries = [
    { name: 'Investment Advisory Firms', description: 'Wealth management and investment planning services', painPoint: 'Manual lead qualification wastes 60% of advisor time' },
    { name: 'Financial Planning Services', description: 'Retirement and estate planning consultation', painPoint: 'Complex onboarding delays client engagement by weeks' },
    { name: 'Private Banking', description: 'High-net-worth client relationship management', painPoint: 'Inconsistent client communication affects retention rates' },
    { name: 'Insurance & Annuities', description: 'Life insurance and retirement product sales', painPoint: 'Poor follow-up on policy renewals leads to lapses' },
    { name: 'Mortgage & Lending', description: 'Home loans and commercial lending services', painPoint: 'Manual application follow-up creates bottlenecks' },
    { name: 'Credit Unions', description: 'Member services and loan processing', painPoint: 'Limited staff for member outreach and education' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Financial Advisor',
      company: 'Premier Wealth Management',
      content: 'The AI agent transformed our lead qualification process. I now spend 80% of my time with qualified prospects instead of cold screening calls. Our conversion rate increased from 12% to 28%.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Robert Chen',
      role: 'Branch Manager',
      company: 'Capital Investment Group',
      content: 'Client onboarding used to take 2-3 weeks with multiple follow-ups for documents. Now it\'s completed in 3 days automatically. Client satisfaction scores improved by 45%.',
      image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              <DollarSign className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Financial Services</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how financial services firms are using AI voice agents to solve real-world challenges in client acquisition, onboarding, and portfolio management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/financial-services"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                View Financial Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Financial Services Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents solving actual pain points in financial services operations
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Solving specific operational challenges across different financial sectors
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
              Real Results from Financial Professionals
            </h2>
            <p className="text-lg text-gray-600">
              Hear how AI voice agents solved actual business challenges
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
              Ready to Solve Your Financial Services Challenges?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join financial professionals using AI voice agents to transform their operations and client relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
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

export default FinanceUseCase;