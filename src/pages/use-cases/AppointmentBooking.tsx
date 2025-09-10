import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, TrendingUp, Calendar, Bell, RefreshCw } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const AppointmentBookingUseCase = () => {
  const useCases = [
    {
      icon: Calendar,
      title: '24/7 Scheduling & Calendar Management',
      description: 'Enable customers to book appointments anytime, automatically sync with calendars, and manage availability in real-time across multiple staff members and locations.',
      stats: 'Increase booking conversion by 70% and reduce scheduling conflicts by 95%',
      realWorldPainPoint: 'Businesses lose 40% of potential appointments because customers call outside business hours. Manual scheduling creates double-bookings, missed appointments, and wastes 15+ hours weekly on phone tag with customers trying to schedule.',
      features: [
        'Real-time availability checking across multiple calendars',
        '24/7 booking capability with instant confirmations',
        'Automatic calendar sync with Google Calendar, Outlook, and other platforms',
        'Multi-location and multi-staff scheduling coordination',
        'Buffer time management and travel time calculations',
        'Recurring appointment setup and series booking'
      ]
    },
    {
      icon: Bell,
      title: 'Automated Reminders & Confirmations',
      description: 'Reduce no-shows with intelligent reminder systems that adapt to customer preferences and provide multiple confirmation options.',
      stats: 'Reduce no-show rates by 80% and improve customer satisfaction by 65%',
      realWorldPainPoint: 'No-show rates average 23% across service industries, costing businesses $150 billion annually. Manual reminder calls are time-consuming, inconsistent, and often forgotten, leading to lost revenue and frustrated customers.',
      features: [
        'Multi-channel reminders via phone, SMS, and email',
        'Smart timing optimization based on appointment type and customer history',
        'Two-way confirmation with easy reschedule options',
        'Customizable reminder cadence and messaging',
        'Automated waitlist management when cancellations occur',
        'Post-appointment follow-up and feedback collection'
      ]
    },
    {
      icon: RefreshCw,
      title: 'Rescheduling & Cancellation Management',
      description: 'Handle last-minute changes seamlessly with intelligent rebooking that maximizes schedule efficiency while accommodating customer needs.',
      stats: 'Recover 85% of cancelled appointments and improve schedule utilization by 60%',
      realWorldPainPoint: 'Last-minute cancellations and rescheduling requests create chaos in daily operations. Manual rebooking is time-consuming, often results in suboptimal scheduling, and frequently leads to lost appointments when customers cannot reach staff.',
      features: [
        'One-click rescheduling with real-time availability',
        'Intelligent rebooking suggestions to minimize schedule gaps',
        'Automatic waitlist notification when slots open up',
        'Cancellation policy enforcement and fee processing',
        'Emergency rescheduling with priority booking',
        'Schedule optimization to maximize daily capacity'
      ]
    }
  ];

  const industries = [
    { 
      name: 'Healthcare & Medical', 
      description: 'Doctors, dentists, specialists, and healthcare providers managing patient appointments', 
      painPoint: 'No-show rates of 25-30% cost medical practices $200+ per missed appointment' 
    },
    { 
      name: 'Professional Services', 
      description: 'Lawyers, consultants, accountants, and advisors scheduling client meetings', 
      painPoint: 'Scheduling conflicts and double-bookings damage professional credibility and client relationships' 
    },
    { 
      name: 'Beauty & Wellness', 
      description: 'Salons, spas, fitness trainers, and wellness practitioners', 
      painPoint: '60% of bookings happen outside business hours when staff cannot answer phones' 
    },
    { 
      name: 'Home Services', 
      description: 'Contractors, repair services, cleaning companies, and maintenance providers', 
      painPoint: 'Complex scheduling across multiple technicians and locations leads to inefficient routing' 
    },
    { 
      name: 'Financial Services', 
      description: 'Financial advisors, insurance agents, and banking professionals', 
      painPoint: 'Regulatory compliance requires detailed appointment documentation that manual systems miss' 
    },
    { 
      name: 'Education & Training', 
      description: 'Tutoring centers, driving schools, and professional training providers', 
      painPoint: 'Student scheduling conflicts and frequent changes disrupt learning continuity' 
    }
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
      name: 'Marcus Rodriguez',
      role: 'Sales Manager',
      company: 'Elite Realty Partners',
      content: 'The showing coordination agent eliminated double-bookings and reduced no-shows by 65%. Our team can focus on selling while the AI handles all scheduling logistics perfectly.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
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
              <Clock className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Appointment Booking</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how service-based businesses are using AI voice agents to automate scheduling, reduce no-shows, and provide 24/7 booking capabilities that boost revenue.
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
              Real-World Appointment Booking Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents revolutionizing how businesses manage appointments and customer scheduling
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
              Solving appointment scheduling challenges across different service industries
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
              Trusted by Service Providers
            </h2>
            <p className="text-lg text-gray-600">
              Real results from businesses transforming their appointment scheduling with AI
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
              Ready to Automate Your Scheduling?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of service providers using AI voice agents to reduce no-shows, increase bookings, and provide 24/7 scheduling convenience for their customers.
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

export default AppointmentBookingUseCase;