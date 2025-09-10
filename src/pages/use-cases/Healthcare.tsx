import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Calendar, UserCheck, FileText, ArrowRight, CheckCircle, TrendingUp, Clock, Shield, Phone } from 'lucide-react';

const HealthcareUseCase = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Appointment Reminder & Confirmation',
      description: 'Reduce no-shows and optimize scheduling with intelligent appointment reminders that adapt to patient preferences and past behavior patterns.',
      stats: 'Reduce no-shows by 65% and increase practice revenue by $75,000+ annually',
      realWorldPainPoint: 'Healthcare practices lose $150 billion annually due to missed appointments. Manual reminder calls consume 15+ staff hours weekly, and 25-30% of patients still miss appointments despite reminders.',
      features: [
        'Multi-channel reminder delivery (voice, SMS, email) based on patient preference',
        'Smart timing optimization - learns when each patient responds best',
        'Appointment confirmation and one-click rescheduling',
        'Insurance verification and copay reminders',
        'Pre-appointment health screening questionnaires',
        'Automated waitlist management and slot optimization'
      ]
    },
    {
      icon: UserCheck,
      title: 'Patient Follow-up & Care Coordination',
      description: 'Ensure comprehensive post-care monitoring with AI agents that track recovery, medication adherence, and patient satisfaction while identifying early warning signs.',
      stats: 'Improve patient outcomes by 40% and reduce readmission rates by 35%',
      realWorldPainPoint: 'Poor follow-up care leads to 20% of patients being readmitted within 30 days. Manual follow-up calls are inconsistent, time-consuming, and often missed due to staffing constraints.',
      features: [
        'Post-discharge follow-up calls with standardized protocols',
        'Medication adherence monitoring and reminder systems',
        'Symptom tracking with automated escalation for concerning responses',
        'Recovery milestone check-ins and progress monitoring',
        'Patient satisfaction surveys and feedback collection',
        'Care plan compliance verification and adjustment recommendations'
      ]
    },
    {
      icon: FileText,
      title: 'Test Results & Health Information Delivery',
      description: 'Deliver test results professionally while ensuring patient comprehension, scheduling follow-ups, and maintaining HIPAA compliance throughout the process.',
      stats: 'Reduce result delivery time from 5 days to same-day, improve patient understanding by 60%',
      realWorldPainPoint: 'Patients wait days for test results, leading to anxiety and delayed treatment. Staff spend hours calling patients, explaining results, and scheduling follow-ups, creating bottlenecks in patient communication.',
      features: [
        'HIPAA-compliant secure result delivery with patient identity verification',
        'Results explanation in patient-friendly language',
        'Comprehension verification through interactive questioning',
        'Automatic follow-up appointment scheduling for abnormal results',
        'Provider escalation for complex or critical results',
        'Patient question handling and concern documentation'
      ]
    }
  ];

  const industries = [
    { 
      name: 'Hospitals & Health Systems', 
      description: 'Large-scale patient communication and care coordination across multiple departments', 
      painPoint: 'Managing 10,000+ appointments monthly with 25% no-show rates costs $2M+ annually' 
    },
    { 
      name: 'Primary Care Practices', 
      description: 'Family medicine and internal medicine patient management', 
      painPoint: 'Staff spend 20+ hours weekly on appointment reminders instead of patient care' 
    },
    { 
      name: 'Specialty Practices', 
      description: 'Cardiology, orthopedics, and specialized treatment follow-ups', 
      painPoint: 'Complex treatment protocols require frequent follow-ups that overwhelm staff' 
    },
    { 
      name: 'Mental Health Services', 
      description: 'Therapy appointment management and patient wellness monitoring', 
      painPoint: 'Sensitive patient communications require consistency that manual processes cannot maintain' 
    },
    { 
      name: 'Urgent Care Centers', 
      description: 'Rapid patient follow-up and post-visit care instructions', 
      painPoint: 'High patient volume makes follow-up care inconsistent and incomplete' 
    },
    { 
      name: 'Surgical Centers', 
      description: 'Pre-op preparation and post-operative recovery monitoring', 
      painPoint: 'Post-surgical complications go undetected due to inadequate follow-up systems' 
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Wu',
      role: 'Practice Administrator',
      company: 'Metro Family Medicine',
      content: 'Test results delivery is now seamless and instant. Patients receive results within hours instead of days, with clear explanations. Patient satisfaction scores increased 40% in our last survey.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Robert Chen',
      role: 'CEO',
      company: 'Sunrise Medical Center',
      content: 'The AI agent processes thousands of appointment confirmations daily without errors. Our administrative costs decreased 35% while patient experience improved dramatically. ROI was evident within 60 days.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
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
              <span className="text-gray-900">Healthcare</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how healthcare organizations are using AI voice agents to solve critical operational challenges, improve patient outcomes, and reduce administrative burden.
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
              Real-World Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents solving critical operational challenges in healthcare delivery
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
              Healthcare Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Solving specific operational challenges across different healthcare sectors
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
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-600">
              Real results from healthcare providers transforming patient care with AI
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
              Ready to Transform Patient Care?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of healthcare providers using AI voice agents to improve patient outcomes, reduce costs, and enhance operational efficiency.
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

export default HealthcareUseCase;