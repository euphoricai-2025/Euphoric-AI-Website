import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Calendar, UserCheck, FileText, ArrowRight, CheckCircle, TrendingUp, Shield, Phone, Clock } from 'lucide-react';

const Healthcare = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Appointment Reminder Agent',
      description: 'Reduce no-shows and improve patient compliance with intelligent appointment reminders and confirmations.',
      features: [
        'Multi-channel reminder delivery (voice, SMS, email)',
        'Smart timing optimization for each patient',
        'Appointment confirmation and rescheduling',
        'Insurance verification and copay reminders',
        'Pre-appointment health screening questionnaires',
        'Automated waitlist management'
      ],
      benefits: [
        'Reduce no-shows by up to 65%',
        'Improve clinic efficiency by 40%',
        'Save 15+ staff hours weekly',
        'Increase patient satisfaction scores'
      ]
    },
    {
      icon: UserCheck,
      title: 'Patient Follow-up Agent',
      description: 'Ensure continuity of care with automated follow-up calls for medication adherence and recovery monitoring.',
      features: [
        'Post-discharge follow-up protocols',
        'Medication adherence tracking',
        'Symptom monitoring and reporting',
        'Recovery milestone check-ins',
        'Patient satisfaction surveys',
        'Care plan compliance verification'
      ],
      benefits: [
        'Improve patient outcomes by 40%',
        'Reduce readmission rates by 35%',
        'Enhance care continuity',
        'Strengthen patient relationships'
      ]
    },
    {
      icon: FileText,
      title: 'Test Results Delivery Agent',
      description: 'Deliver test results professionally while ensuring patient comprehension and scheduling follow-ups.',
      features: [
        'HIPAA-compliant secure result delivery',
        'Patient comprehension verification',
        'Results explanation in simple terms',
        'Follow-up appointment scheduling',
        'Question and concern handling',
        'Provider escalation protocols'
      ],
      benefits: [
        'Reduce result delivery time by 80%',
        'Improve patient understanding by 60%',
        'Decrease administrative burden',
        'Enhance care coordination'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'High No-Show Rates',
      description: 'Healthcare practices lose $150 billion annually due to missed appointments',
      impact: 'Manual reminders are time-consuming and 25-30% of patients still miss appointments'
    },
    {
      title: 'Inconsistent Follow-up Care',
      description: 'Poor follow-up leads to 20% of patients being readmitted within 30 days',
      impact: 'Manual follow-up calls are inconsistent and often missed due to staffing constraints'
    },
    {
      title: 'Delayed Communication',
      description: 'Patients wait days for test results, causing anxiety and delayed treatment',
      impact: 'Staff spend hours calling patients and explaining results, creating bottlenecks'
    }
  ];

  const results = [
    { metric: '65%', label: 'Reduction in No-Shows', description: 'Fewer missed appointments' },
    { metric: '35%', label: 'Lower Readmission Rates', description: 'Better post-care monitoring' },
    { metric: '$75K+', label: 'Annual Revenue Recovery', description: 'From improved scheduling' },
    { metric: '15hrs', label: 'Staff Time Saved Weekly', description: 'Freed for patient care' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Martinez',
      role: 'Chief Medical Officer',
      company: 'Valley Health Systems',
      content: 'Our no-show rate dropped from 32% to 8% in just 3 months. The AI agent handles appointment reminders with perfect HIPAA compliance, and patients love the personalized approach. We\'ve recovered over $200K in lost revenue.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Thompson',
      role: 'Operations Director',
      company: 'Prime Care Medical Group',
      content: 'The follow-up system has transformed our patient care. Medication adherence improved 65% and readmission rates dropped significantly. Our staff can focus on patient care instead of manual calls.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
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
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Healthcare </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Transform patient care with HIPAA-compliant AI agents that handle appointment reminders, follow-ups, and test result delivery.
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
                Get This Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/use-cases/healthcare"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Healthcare Use Cases
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              <span className="text-euphoric-gradient">Current Challenges</span>
              <span className="text-gray-900"> in Healthcare</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Healthcare providers face operational challenges that impact patient care and revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {painPoints.map((painPoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
                  <h3 className="text-lg font-bold text-red-800 mb-2">{painPoint.title}</h3>
                  <p className="text-red-700 text-sm mb-2">{painPoint.description}</p>
                  <p className="text-red-600 text-xs">{painPoint.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Healthcare </span>
              <span className="text-euphoric-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              HIPAA-compliant AI agents designed specifically for healthcare providers
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
                  className="max-w-6xl mx-auto"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="icon-badge mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-green-800">Key Benefits:</h4>
                            <ul className="text-sm text-green-700 mt-1 space-y-1">
                              {useCase.benefits.map((benefit, idx) => (
                                <li key={idx}>• {benefit}</li>
                              ))}
                            </ul>
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Proven Results</span>
              <span className="text-gray-900"> for Healthcare Providers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real impact on healthcare practice metrics and patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl font-bold text-euphoric-gradient mb-2">
                  {stat.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">HIPAA Compliant</span>
              <span className="text-gray-900"> & Secure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built with healthcare security and privacy requirements in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'HIPAA Compliant',
                description: 'Full compliance with healthcare privacy regulations and data protection standards.',
                icon: '🔒'
              },
              {
                title: 'Encrypted Communications',
                description: 'End-to-end encryption for all patient communications and data transmission.',
                icon: '🛡️'
              },
              {
                title: 'Audit Trails',
                description: 'Complete audit logs and compliance reporting for all patient interactions.',
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Healthcare providers transforming patient care with AI agents
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
      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Patient Care?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join healthcare providers using AI agents to improve patient outcomes, reduce costs, and enhance operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;