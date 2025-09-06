import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, UserCheck, FileText, ArrowRight, CheckCircle, TrendingUp, Shield, Phone } from 'lucide-react';

const FinancialServices = () => {
  const useCases = [
    {
      icon: UserCheck,
      title: 'Lead Qualification Agent',
      description: 'Automatically qualify financial leads by assessing investment goals, risk tolerance, and financial status.',
      features: [
        'Investment goal assessment',
        'Risk tolerance evaluation',
        'Income and asset verification',
        'Compliance requirement checks',
        'CRM integration and scoring'
      ],
      benefits: [
        'Increase qualified leads by 45%',
        'Reduce advisor screening time',
        'Ensure regulatory compliance',
        'Improve client matching accuracy'
      ]
    },
    {
      icon: Calendar,
      title: 'Appointment Setting Agent',
      description: 'Schedule consultations and financial planning meetings while pre-qualifying prospects.',
      features: [
        'Calendar integration and sync',
        'Meeting type categorization',
        'Pre-meeting information gathering',
        'Automated confirmation and reminders',
        'Rescheduling and cancellation handling'
      ],
      benefits: [
        'Increase meeting attendance by 35%',
        'Better prepared consultations',
        'Reduced scheduling conflicts',
        'Improved client experience'
      ]
    },
    {
      icon: Phone,
      title: 'Client Follow-up Agent',
      description: 'Maintain regular contact with clients for portfolio reviews, renewals, and service updates.',
      features: [
        'Portfolio performance updates',
        'Renewal notification system',
        'Market update delivery',
        'Service satisfaction surveys',
        'Escalation for urgent matters'
      ],
      benefits: [
        'Improve client retention by 40%',
        'Increase renewal rates',
        'Enhanced client satisfaction',
        'Proactive service delivery'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Financial Advisor',
      company: 'Premier Wealth Management',
      content: 'The AI agent has transformed our lead qualification process. We now spend time with truly qualified prospects, improving our conversion rate significantly.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Robert Chen',
      role: 'Branch Manager',
      company: 'Capital Investment Group',
      content: 'Client retention has never been better. The follow-up agent ensures we stay connected with every client, leading to more referrals and business growth.',
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
              <span className="text-euphoric-gradient">Financial Services </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Enhance client relationships and streamline operations with AI agents designed for financial services, wealth management, and investment advisory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Get This Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Customize for My Business
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Financial Services </span>
              <span className="text-euphoric-gradient">AI Agents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Compliance-ready AI calling agents designed specifically for wealth management and financial advisory firms.
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="glass p-8 card-hover">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="icon-badge-lg">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {useCase.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Regulatory Compliant</span>
              <span className="text-gray-900"> & Secure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built with financial industry security and compliance requirements in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'SEC & FINRA Compliant',
                description: 'Full compliance with financial regulatory requirements and audit trail capabilities.',
                icon: '🔒'
              },
              {
                title: 'Bank-Grade Encryption',
                description: 'End-to-end encryption for all client communications and sensitive financial data.',
                icon: '🛡️'
              },
              {
                title: 'SOC 2 Type II Certified',
                description: 'Enterprise security standards with continuous monitoring and compliance reporting.',
                icon: '📋'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              See how financial services firms are improving client relationships with AI CallAgent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 card-hover"
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-brand-teal">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight"
            >
              Ready to Transform Your Financial Services?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join leading financial firms using AI CallAgent to enhance client relationships and grow their business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="btn-primary inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;