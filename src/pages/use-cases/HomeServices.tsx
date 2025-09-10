import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Calendar, Phone, UserCheck, ArrowRight, CheckCircle, TrendingUp, Wrench } from 'lucide-react';

const HomeServicesUseCase = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Emergency Service Dispatch & Scheduling',
      description: 'Instantly respond to emergency calls, assess urgency, dispatch technicians, and provide arrival time updates to homeowners in crisis situations.',
      stats: 'Reduce emergency response time by 50% and increase customer satisfaction during crisis by 70%',
      realWorldPainPoint: 'Home service emergencies like plumbing leaks or HVAC failures create panic for homeowners. Manual dispatching delays response times, leading to property damage and frustrated customers who call competitors.',
      features: [
        'Emergency assessment and triage system',
        'Real-time technician availability and dispatch',
        'Customer location verification and directions',
        'Arrival time updates and progress tracking',
        'Emergency service pricing and authorization'
      ]
    },
    {
      icon: UserCheck,
      title: 'Lead Qualification & Project Estimation',
      description: 'Qualify home improvement leads by collecting project details, budget ranges, and timelines before connecting with sales teams for accurate estimates.',
      stats: 'Increase qualified leads by 65% and reduce sales team time spent on unqualified prospects by 70%',
      realWorldPainPoint: 'Home service contractors waste 60% of their sales time on unqualified leads or projects outside their expertise, losing money on estimates that never convert to jobs.',
      features: [
        'Project scope and requirement gathering',
        'Budget range qualification and timeline assessment',
        'Photo collection for preliminary evaluation',
        'Service area and availability verification',
        'Appointment scheduling with qualified prospects only'
      ]
    },
    {
      icon: Phone,
      title: 'Seasonal Maintenance & Upselling',
      description: 'Proactively contact existing customers for seasonal maintenance, identify additional service needs, and schedule preventive services to maximize customer lifetime value.',
      stats: 'Increase repeat business by 45% and seasonal service bookings by 80%',
      realWorldPainPoint: 'Home service companies struggle to maintain regular contact with past customers, missing opportunities for recurring maintenance contracts and seasonal services, leading to 70% customer churn.',
      features: [
        'Seasonal service reminder campaigns',
        'Maintenance history review and recommendations',
        'Additional service need identification',
        'Preventive maintenance scheduling',
        'Service contract renewal management'
      ]
    }
  ];

  const industries = [
    { name: 'HVAC Services', description: 'Heating, cooling, and ventilation systems', painPoint: 'Emergency calls at night and weekends go unanswered' },
    { name: 'Plumbing Services', description: 'Residential and commercial plumbing repairs', painPoint: 'Plumbing emergencies require immediate response but manual dispatch is slow' },
    { name: 'Electrical Contractors', description: 'Electrical repairs and installations', painPoint: 'Electrical work estimates require detailed project information rarely collected upfront' },
    { name: 'Roofing Companies', description: 'Roof repairs and replacements', painPoint: 'Weather-dependent scheduling creates constant rebooking needs' },
    { name: 'Landscaping Services', description: 'Lawn care and outdoor maintenance', painPoint: 'Seasonal services are forgotten without proactive outreach' },
    { name: 'General Contractors', description: 'Home renovation and repair projects', painPoint: 'Project complexity requires extensive qualification before estimates' }
  ];

  const testimonials = [
    {
      name: 'Tony Martinez',
      role: 'Founder',
      company: 'Precision HVAC Solutions',
      content: 'Emergency response time improved from 2 hours to 15 minutes with instant dispatch. The AI qualifies urgency levels and routes calls appropriately. Our emergency service revenue increased 85% with zero missed opportunities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Rebecca Taylor',
      role: 'Operations Director',
      company: 'Elite Home Contractors',
      content: 'Lead qualification efficiency doubled with automated project scoping. Our conversion rate jumped from 18% to 42% as we focus on qualified prospects. The AI collects detailed project requirements before estimates.',
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
              <Home className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Home Services</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how home service contractors are using AI voice agents to handle emergencies, qualify leads, and maximize customer lifetime value.
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
              Real-World Home Services Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents solving the most critical challenges in home services operations
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
                        <h4 className="text-sm font-medium text-red-800">Industry Challenge:</h4>
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
                        <h4 className="text-sm font-medium text-green-800">Real Results:</h4>
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
              Home Service Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Solving specific operational challenges across different home service sectors
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
              Real Results from Home Service Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See how AI voice agents solved actual business challenges
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
              Ready to Transform Your Home Services Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join home service professionals using AI voice agents to handle emergencies, qualify leads, and grow their business.
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

export default HomeServicesUseCase;