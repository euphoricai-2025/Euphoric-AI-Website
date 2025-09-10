import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Phone, FileText, Calendar, ArrowRight, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

const InsuranceUseCase = () => {
  const useCases = [
    {
      icon: Phone,
      title: 'Claims Status Updates & Follow-up',
      description: 'Automatically update policyholders on claim progress, collect additional documentation, and coordinate with adjusters to accelerate resolution.',
      stats: 'Reduce claims processing time by 40% and improve customer satisfaction scores by 55%',
      realWorldPainPoint: 'Insurance claims create 80% of customer service calls, with policyholders frustrated by lack of updates and lengthy processing times, leading to poor retention rates.',
      features: [
        'Automated claim status notifications at key milestones',
        'Proactive document collection and verification',
        'Adjuster coordination and appointment scheduling',
        'Settlement explanation and next steps communication',
        'Customer satisfaction surveys post-resolution'
      ]
    },
    {
      icon: Calendar,
      title: 'Policy Renewal & Premium Optimization',
      description: 'Proactively contact policyholders before renewal dates, review coverage needs, and present competitive premium options to prevent lapses.',
      stats: 'Increase renewal rates by 35% and reduce policy lapses by 60%',
      realWorldPainPoint: 'Insurance agencies lose 25% of policies annually due to poor renewal communication and competitive pricing from other carriers, directly impacting revenue.',
      features: [
        'Automated renewal deadline tracking and alerts',
        'Coverage needs assessment and recommendations',
        'Competitive rate analysis and presentation',
        'Payment plan setup and automation',
        'Policy lapse prevention and win-back campaigns'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment & Underwriting Support',
      description: 'Conduct comprehensive risk assessments for new applications through structured questioning and data collection for accurate underwriting.',
      stats: 'Improve underwriting accuracy by 50% and reduce application processing time from 10 days to 3 days',
      realWorldPainPoint: 'Manual risk assessment creates bottlenecks in underwriting, leading to delayed approvals, inaccurate pricing, and lost business to faster competitors.',
      features: [
        'Structured risk questionnaire delivery',
        'Property and asset valuation assistance',
        'Health and lifestyle assessment coordination',
        'Prior claims history verification',
        'Fraud indicator detection and flagging'
      ]
    }
  ];

  const industries = [
    { name: 'Auto Insurance Agencies', description: 'Vehicle coverage and claims processing', painPoint: 'Claims updates consume 70% of customer service time' },
    { name: 'Home & Property Insurance', description: 'Residential and commercial property coverage', painPoint: 'Property assessments delay underwriting by weeks' },
    { name: 'Health Insurance Providers', description: 'Medical coverage and benefits administration', painPoint: 'Complex claims require extensive member communication' },
    { name: 'Life Insurance Companies', description: 'Life and disability insurance services', painPoint: 'Lengthy underwriting process loses 40% of applicants' },
    { name: 'Commercial Insurance Brokers', description: 'Business insurance and risk management', painPoint: 'Manual renewals result in 30% policy lapse rates' },
    { name: 'Insurance Adjusting Firms', description: 'Claims investigation and settlement', painPoint: 'Policyholder communication delays claim resolution' }
  ];

  const testimonials = [
    {
      name: 'Michael Davidson',
      role: 'Claims Director',
      company: 'Guardian Insurance Group',
      content: 'Policy renewals are now seamless with 95% retention rates. The AI agent identifies coverage gaps and presents solutions proactively. Our premium volume increased 25% from better customer engagement.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Walsh',
      role: 'Vice President Operations',
      company: 'Premier Risk Solutions',
      content: 'Claims follow-up calls reduced from 200+ daily to zero. Clients receive proactive updates and our satisfaction scores jumped from 3.1 to 4.7. Staff now focus on complex cases instead of status calls.',
      image: 'https://images.unsplash.com/photo-1594824154493-f8bcfe19bba4?w=150&h=150&fit=crop&crop=face'
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Insurance</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how insurance agencies are using AI voice agents to solve critical challenges in claims processing, policy renewals, and customer retention.
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
              Real-World Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents solving the most pressing challenges in insurance operations
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
                        <h4 className="text-sm font-medium text-red-800">Current Industry Challenge:</h4>
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
                        <h4 className="text-sm font-medium text-green-800">Proven Results:</h4>
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
              Insurance Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Addressing specific operational challenges across different insurance markets
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
              Real Results from Insurance Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See how AI voice agents solved actual operational challenges
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
              Ready to Transform Your Insurance Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join insurance professionals using AI voice agents to streamline claims, improve renewals, and boost customer satisfaction.
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

export default InsuranceUseCase;