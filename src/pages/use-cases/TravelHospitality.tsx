import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, Hotel, Calendar, Phone, ArrowRight, CheckCircle, TrendingUp, Clock, Shield, MapPin } from 'lucide-react';

const TravelHospitalityUseCase = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Reservation Management & Guest Communication',
      description: 'Streamline booking confirmations, handle reservation changes, coordinate check-in/check-out times, and manage guest preferences to deliver exceptional service experiences.',
      stats: 'Reduce booking cancellations by 40% and improve guest satisfaction by 55%',
      realWorldPainPoint: 'Hotels lose $2.8 billion annually from booking cancellations and no-shows. Manual reservation management requires 25+ staff hours daily, and 35% of guests have unmet expectations due to poor communication.',
      features: [
        'Automated booking confirmation and itinerary delivery',
        'Pre-arrival preference collection and room assignment optimization',
        'Check-in/check-out time coordination and early/late requests',
        'Reservation modification handling and availability updates',
        'Special occasion recognition and upgrade opportunities',
        'Group booking coordination and event planning assistance'
      ]
    },
    {
      icon: MapPin,
      title: 'Concierge Services & Local Recommendations',
      description: 'Provide personalized recommendations, handle reservation requests, offer travel guidance, and enhance guest experiences with local expertise and 24/7 availability.',
      stats: 'Increase ancillary revenue by 60% and guest experience scores by 45%',
      realWorldPainPoint: 'Concierge services are only available 12-16 hours daily, missing 40% of guest requests. Manual recommendation processes lead to generic suggestions, resulting in poor guest experiences and lost revenue opportunities.',
      features: [
        'Personalized restaurant and activity recommendations',
        'Real-time availability checking and reservation booking',
        'Transportation coordination including rideshare and rentals',
        'Local event and attraction information with ticket booking',
        'Weather updates and activity adjustments',
        'Emergency assistance and 24/7 guest support'
      ]
    },
    {
      icon: Phone,
      title: 'Customer Service & Issue Resolution',
      description: 'Handle guest inquiries, resolve service issues, manage feedback, and coordinate with housekeeping and maintenance teams for immediate problem resolution.',
      stats: 'Resolve 85% of issues within first contact and reduce complaint escalation by 70%',
      realWorldPainPoint: 'Guest complaints cost the hospitality industry $75 billion annually in lost revenue. Average response time of 45 minutes for service issues creates negative reviews and reduces repeat bookings by 60%.',
      features: [
        'Immediate issue reporting and resolution tracking',
        'Housekeeping and maintenance coordination',
        'Room service and amenity request fulfillment',
        'Billing inquiry resolution and service explanations',
        'Feedback collection and satisfaction monitoring',
        'Loyalty program management and points redemption'
      ]
    }
  ];

  const industries = [
    { 
      name: 'Luxury Hotels & Resorts', 
      description: 'Premium guest experiences with personalized concierge services', 
      painPoint: 'VIP guests expect 24/7 personalized service, requiring 3x staffing costs' 
    },
    { 
      name: 'Business Hotels', 
      description: 'Corporate traveler services and meeting room coordination', 
      painPoint: 'Business travelers need immediate assistance, creating peak demand stress' 
    },
    { 
      name: 'Vacation Rentals', 
      description: 'Remote property management and guest self-service support', 
      painPoint: 'Property managers handle 50+ properties with limited on-site presence' 
    },
    { 
      name: 'Airlines & Travel Services', 
      description: 'Flight updates, rebooking assistance, and travel coordination', 
      painPoint: 'Flight disruptions create 10x call volume spikes overwhelming support teams' 
    },
    { 
      name: 'Tour Operators', 
      description: 'Itinerary management and group coordination services', 
      painPoint: 'Complex multi-day itineraries require constant coordination and updates' 
    },
    { 
      name: 'Event Venues', 
      description: 'Wedding and corporate event planning and coordination', 
      painPoint: 'Event planning requires 100+ hours of coordination per major event' 
    }
  ];

  const testimonials = [
    {
      name: 'Sofia Gonzalez',
      role: 'Guest Experience Manager',
      company: 'Paradise Resort & Spa',
      content: 'Guest satisfaction jumped from 4.2 to 4.9 stars with instant concierge services. The AI handles dining reservations, activity bookings, and local recommendations 24/7. Ancillary revenue increased 50% from better guest engagement.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chang',
      role: 'Operations Director',
      company: 'Metropolitan Business Hotel',
      content: 'Check-in efficiency improved 65% and no-shows reduced from 18% to 6%. Business travelers get instant answers to requests, improving our corporate booking retention to 92%. Staff focus on high-value guest experiences.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
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
              className="icon-badge-lg mx-auto mb-8"
            >
              <Plane className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900">Travel & Hospitality </span>
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how AI voice agents transform guest experiences, streamline operations, and deliver personalized service that drives bookings and builds loyalty.
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
          <div className="max-w-6xl mx-auto space-y-20">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="icon-badge mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Real-world Pain Point */}
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Shield className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-red-800">The Problem:</h4>
                          <p className="text-sm text-red-700 mt-1">{useCase.realWorldPainPoint}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-green-800">Results:</h4>
                          <p className="text-sm text-green-700 mt-1">{useCase.stats}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`card ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized solutions for different sectors of the travel and hospitality industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                  <p className="text-sm text-yellow-800">{industry.painPoint}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hospitality companies achieving exceptional results with AI voice agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-8"
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
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-cyan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Elevate Your Guest Experience
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hospitality companies using AI agents to deliver exceptional service, increase bookings, and create unforgettable guest experiences.
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

export default TravelHospitalityUseCase;