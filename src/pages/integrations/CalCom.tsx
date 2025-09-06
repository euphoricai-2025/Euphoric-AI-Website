import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, ArrowRight, CheckCircle, TrendingUp, Zap } from 'lucide-react';

const CalComIntegration = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Automated Appointment Booking',
      description: 'AI agents automatically book appointments based on your Cal.com availability, eliminating back-and-forth scheduling.',
      realWorldBenefit: 'Reduce scheduling time from 10 minutes per appointment to 30 seconds'
    },
    {
      icon: Clock,
      title: 'Real-time Availability Sync',
      description: 'Instantly check and update calendar availability across all your connected calendars and booking platforms.',
      realWorldBenefit: 'Eliminate double-bookings and scheduling conflicts completely'
    },
    {
      icon: Users,
      title: 'Multi-person Meeting Coordination',
      description: 'Coordinate complex meetings with multiple participants, finding optimal times for all attendees.',
      realWorldBenefit: 'Reduce meeting coordination time by 80% for team meetings'
    },
    {
      icon: Phone,
      title: 'Appointment Reminders & Follow-ups',
      description: 'Automatically send personalized reminders and collect pre-meeting information from attendees.',
      realWorldBenefit: 'Reduce no-show rates from 25% to under 5%'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      scenario: 'Patient appointment scheduling with automated insurance verification',
      improvement: '60% reduction in administrative time'
    },
    {
      industry: 'Consulting',
      scenario: 'Client consultation booking with pre-meeting questionnaires',
      improvement: '40% increase in meeting preparation quality'
    },
    {
      industry: 'Sales',
      scenario: 'Prospect meeting scheduling with lead qualification',
      improvement: '3x more qualified meetings per sales rep'
    },
    {
      industry: 'Education',
      scenario: 'Student-teacher meeting coordination with topic preparation',
      improvement: '50% improvement in meeting effectiveness'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Family Practice Physician',
      company: 'Westside Medical Group',
      content: 'The Cal.com integration eliminated our receptionist\'s biggest headache. Patients now book their own appointments through the AI agent, and we have zero scheduling conflicts. Our no-show rate dropped from 30% to 4%.',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Business Development Manager',
      company: 'Growth Consulting Partners',
      content: 'Prospect meetings used to take 3-4 email exchanges to schedule. Now the AI agent handles everything instantly while the lead is still hot. We book 3x more qualified meetings per month.',
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
              className="flex items-center justify-center mb-6"
            >
              <div className="icon-badge-lg mr-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-gray-900">Cal.com</span><br />
                  <span className="text-euphoric-gradient">Integration</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Transform your scheduling process with intelligent AI agents that seamlessly integrate with Cal.com for automated appointment booking and management.
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
                Set Up Integration
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Cal.com Features
            </h2>
            <p className="text-lg text-gray-600">
              Seamlessly connect your AI voice agents with Cal.com's scheduling platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="icon-badge mr-6 mt-1">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700 font-medium">{feature.realWorldBenefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              See how different industries are transforming their scheduling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-brand-teal rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-brand-teal">{useCase.industry}</h3>
                </div>
                <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                <div className="bg-gold/10 rounded-lg p-3">
                  <p className="text-gold font-semibold text-sm">Result: {useCase.improvement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Set up your Cal.com integration in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Your Cal.com Account',
                description: 'Authorize the integration and sync your existing calendar settings and availability.'
              },
              {
                step: '2',
                title: 'Configure AI Agent Rules',
                description: 'Set up scheduling preferences, meeting types, and automated follow-up sequences.'
              },
              {
                step: '3',
                title: 'Start Automated Booking',
                description: 'Your AI agent immediately begins handling all scheduling requests seamlessly.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from Cal.com integration users
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
              Ready to Transform Your Scheduling?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Connect Cal.com with AI voice agents and automate your entire scheduling process today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Set Up Integration Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalComIntegration;