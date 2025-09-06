import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Calendar, Wrench, Phone, ArrowRight, CheckCircle, TrendingUp, Clock, UserCheck } from 'lucide-react';

const HomeServices = () => {
  const useCases = [
    {
      icon: Calendar,
      title: 'Appointment Booking Agent',
      description: 'Automatically schedule service appointments, handle rescheduling, and send reminders to reduce no-shows.',
      features: [
        'Real-time scheduling integration',
        'Service availability checking',
        'Automatic confirmation calls',
        'Rescheduling and cancellation handling',
        'Reminder notifications system'
      ],
      benefits: [
        'Reduce no-shows by 55%',
        'Increase booking efficiency by 70%',
        'Improve customer satisfaction',
        'Optimize technician schedules'
      ]
    },
    {
      icon: UserCheck,
      title: 'Lead Qualification Agent',
      description: 'Qualify incoming service requests, gather project details, and connect customers with the right specialists.',
      features: [
        'Service requirement assessment',
        'Budget and timeline evaluation',
        'Urgency level determination',
        'Specialist matching system',
        'Quote request processing'
      ],
      benefits: [
        'Increase qualified leads by 50%',
        'Better project matching',
        'Reduce wasted consultations',
        'Higher conversion rates'
      ]
    },
    {
      icon: Phone,
      title: 'Follow-up & Feedback Agent',
      description: 'Conduct post-service follow-ups, collect customer feedback, and identify opportunities for additional services.',
      features: [
        'Service completion verification',
        'Customer satisfaction surveys',
        'Quality assurance checks',
        'Upselling opportunity identification',
        'Review and referral requests'
      ],
      benefits: [
        'Improve service quality scores',
        'Increase repeat business by 40%',
        'Generate more referrals',
        'Identify service improvements'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Mike Patterson',
      role: 'Owner',
      company: 'Patterson Plumbing Services',
      content: 'The appointment booking agent has eliminated our scheduling headaches. We now book 70% more appointments with zero double-bookings.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Williams',
      role: 'Operations Manager',
      company: 'Elite Home Repair',
      content: 'Customer feedback collection has never been easier. We identify issues quickly and our service quality has improved significantly.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              <span className="text-euphoric-gradient">AI Voice Agents</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Grow your home services business with AI agents that handle scheduling, lead qualification, and customer follow-ups automatically.
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
              Specialized Home Services Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered voice agents tailored for contractors, repair services, and home improvement companies
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
              Trusted by Home Service Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See how contractors and service providers are growing their business
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
              Ready to Grow Your Home Services Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join home service professionals using AI voice agents to automate operations and increase bookings.
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

export default HomeServices;