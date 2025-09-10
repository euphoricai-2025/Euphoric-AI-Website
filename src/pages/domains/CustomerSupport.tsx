import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headphones, Clock, MessageCircle, Users, ArrowRight, CheckCircle, TrendingUp, Phone, Star } from 'lucide-react';

const CustomerSupport = () => {
  const useCases = [
    {
      icon: Phone,
      title: '24/7 Support Agent',
      description: 'Provide round-the-clock customer support with AI agents that handle common inquiries, troubleshooting, and escalation.',
      features: [
        'Multi-language support capabilities',
        'Knowledge base integration',
        'Ticket creation and tracking',
        'Escalation to human agents',
        'Customer satisfaction surveys'
      ],
      benefits: [
        'Reduce wait times by 80%',
        '24/7 availability for customers',
        'Handle 60% of inquiries automatically',
        'Improve customer satisfaction scores'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Follow-up & Feedback Agent',
      description: 'Automatically follow up on support tickets, gather feedback, and ensure customer satisfaction after issue resolution.',
      features: [
        'Post-resolution follow-up calls',
        'Customer satisfaction surveys',
        'Issue resolution verification',
        'Additional support offering',
        'Feedback collection and analysis'
      ],
      benefits: [
        'Increase customer satisfaction by 45%',
        'Identify service improvement areas',
        'Reduce repeat support requests',
        'Build stronger customer relationships'
      ]
    },
    {
      icon: Clock,
      title: 'Appointment & Callback Agent',
      description: 'Schedule support appointments, manage callbacks, and coordinate technical support visits efficiently.',
      features: [
        'Callback scheduling and management',
        'Appointment booking integration',
        'Technical support coordination',
        'Reminder and confirmation calls',
        'Rescheduling and cancellation handling'
      ],
      benefits: [
        'Reduce no-show rates by 50%',
        'Streamline appointment management',
        'Improve technician utilization',
        'Enhanced customer convenience'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Thomas Park',
      role: 'Managing Director',
      company: 'Summit Financial Group',
      content: 'Appointment scheduling is seamless with automatic pre-meeting information gathering. Our consultations are more productive and client satisfaction scores are at all-time highs.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Patricia Williams',
      role: 'Chief Client Officer',
      company: 'Premier Investment Services',
      content: 'Portfolio review calls happen consistently every quarter without fail. Client retention improved 45% and assets under management grew substantially from increased engagement.',
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
              <Headphones className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Customer Support</span><br />
              <span className="text-euphoric-gradient">AI Voice Agents</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Transform your customer support with AI agents that provide 24/7 assistance, handle common inquiries, and ensure customer satisfaction.
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
              Comprehensive Customer Support Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered voice agents designed to enhance your customer support operations
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
              Trusted by Support Teams Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              See how customer support teams are enhancing their service delivery
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
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join companies providing exceptional 24/7 customer support with AI voice agents.
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

export default CustomerSupport;