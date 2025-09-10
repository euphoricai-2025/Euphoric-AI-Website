import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, Phone, ArrowRight, CheckCircle, TrendingUp, Hotel, Users, Clock } from 'lucide-react';

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
        'Group booking coordination',
        'Multi-property reservation management'
      ],
      benefits: [
        'Increase booking conversion by 45%',
        '24/7 reservation availability',
        'Reduce booking errors by 70%',
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
        'Checkout and feedback collection',
        'Emergency assistance coordination'
      ],
      benefits: [
        'Improve guest satisfaction by 50%',
        'Reduce front desk workload by 60%',
        'Enhance personalized service',
        'Increase positive reviews by 40%'
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
        'Restaurant reservations',
        'Cultural experience guidance'
      ],
      benefits: [
        'Enhance guest experience',
        'Increase ancillary revenue by 25%',
        'Reduce guest service calls by 50%',
        'Improve destination knowledge'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Booking Abandonment',
      description: '68% of travelers abandon bookings due to complex processes or delays',
      impact: 'Lost revenue opportunities and frustrated customers seeking alternatives'
    },
    {
      title: 'Limited Guest Services',
      description: 'Staff can only handle basic requests during limited hours',
      impact: 'Guests receive inconsistent service quality and wait for assistance'
    },
    {
      title: 'Poor Communication',
      description: 'Guests miss important updates about bookings, weather, or local events',
      impact: 'Negative reviews and decreased satisfaction scores impact reputation'
    }
  ];

  const results = [
    { metric: '45%', label: 'Higher Booking Rates', description: 'Through instant responses' },
    { metric: '50%', label: 'Better Guest Satisfaction', description: 'Enhanced service quality' },
    { metric: '$100K+', label: 'Revenue Increase', description: 'From improved conversion' },
    { metric: '60%', label: 'Staff Time Saved', description: 'Automated routine tasks' }
  ];

  const testimonials = [
    {
      name: 'Christopher Davis',
      role: 'Hotel Operations Manager',
      company: 'Grandview Resort & Spa',
      content: 'Guest inquiries are handled 24/7 with instant booking confirmations. Our occupancy rate increased 25% and guest satisfaction scores are consistently above 95%.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Isabella Martinez',
      role: 'Travel Operations Director',
      company: 'Wanderlust Travel Agency',
      content: 'The booking agent handles complex itineraries flawlessly while I sleep. International clients love the multilingual support and our booking volume doubled this year.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
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
              <span className="text-euphoric-gradient">Travel & Hospitality </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
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
                Get This Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/use-cases/travel-hospitality"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Travel Use Cases
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
              <span className="text-gray-900"> in Hospitality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hospitality businesses face operational challenges that impact guest satisfaction and revenue
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
              <span className="text-gray-900">Hospitality </span>
              <span className="text-euphoric-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              AI agents designed specifically for the travel and hospitality industry
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
              <span className="text-gray-900"> for Hospitality Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real impact on hospitality metrics and guest satisfaction
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

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Secure & Trusted</span>
              <span className="text-gray-900"> for Hospitality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built with hospitality security and guest data protection standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Guest Data Security',
                description: 'Advanced encryption and secure handling of all guest personal information and booking data.',
                icon: '🛡️'
              },
              {
                title: 'Payment Protection',
                description: 'PCI DSS compliant payment processing and secure transaction handling.',
                icon: '💳'
              },
              {
                title: 'Privacy Compliance',
                description: 'Full GDPR and privacy regulation compliance for international guest data.',
                icon: '🔒'
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
              Hospitality businesses enhancing guest experiences with AI agents
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
              Ready to Elevate Your Guest Experience?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hospitality leaders using AI agents to provide exceptional service, increase bookings, and enhance operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get this agent called
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/use-cases/travel-hospitality"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                View Travel & Hospitality use case
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelHospitality;