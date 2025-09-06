import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, Phone, ArrowRight, CheckCircle, TrendingUp, Hotel, Users } from 'lucide-react';

const TravelHospitality = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Booking & Reservation Agent',
      description: 'Handle reservations, booking changes, and availability inquiries for hotels, restaurants, and travel services.',
      features: [
        'Real-time availability checking',
        'Booking confirmation and changes',
        'Cancellation and refund processing',
        'Special request handling',
        'Group booking coordination'
      ],
      benefits: [
        'Increase booking conversion by 45%',
        '24/7 reservation availability',
        'Reduce booking errors',
        'Streamline reservation process'
      ]
    },
    {
      icon: Phone,
      title: 'Guest Services Agent',
      description: 'Provide exceptional customer service with pre-arrival, during stay, and post-departure support.',
      features: [
        'Pre-arrival welcome calls',
        'Concierge service assistance',
        'Complaint resolution support',
        'Service request handling',
        'Checkout and feedback collection'
      ],
      benefits: [
        'Improve guest satisfaction by 50%',
        'Reduce front desk workload',
        'Enhance personalized service',
        'Increase positive reviews'
      ]
    },
    {
      icon: MapPin,
      title: 'Travel Information Agent',
      description: 'Provide travel information, local recommendations, and assistance with itinerary planning.',
      features: [
        'Local attraction recommendations',
        'Transportation assistance',
        'Weather and travel updates',
        'Event and activity booking',
        'Emergency assistance coordination'
      ],
      benefits: [
        'Enhance guest experience',
        'Increase ancillary revenue by 25%',
        'Reduce guest service calls',
        'Improve destination knowledge'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Isabella Martinez',
      role: 'Hotel General Manager',
      company: 'Seaside Resort & Spa',
      content: 'Guest satisfaction scores have reached an all-time high. The AI agent handles everything from reservations to concierge services seamlessly.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Wilson',
      role: 'Operations Director',
      company: 'Metropolitan Travel Group',
      content: 'Our booking conversion rates have improved dramatically. The AI agent never misses an opportunity and provides consistent service 24/7.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              <Plane className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Travel & Hospitality</span><br />
              <span className="text-euphoric-gradient">AI Voice Agents</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Enhance guest experiences and streamline operations with AI agents designed for hotels, restaurants, travel agencies, and hospitality businesses.
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
                to="/contact"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Schedule Demo
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
              Comprehensive Hospitality Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered voice agents designed for the travel and hospitality industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card h-full"
              >
                <div className="icon-badge mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Hospitality Leaders
            </h2>
            <p className="text-lg text-gray-600">
              See how hospitality businesses are enhancing guest experiences
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
              Ready to Elevate Your Guest Experience?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hospitality leaders using AI voice agents to provide exceptional service and drive bookings.
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

export default TravelHospitality;