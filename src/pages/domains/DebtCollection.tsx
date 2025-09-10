import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, Phone, FileText, Calendar, ArrowRight, CheckCircle, TrendingUp, Scale, Shield } from 'lucide-react';

const DebtCollection = () => {
  const useCases = [
    {
      icon: Phone,
      title: 'Payment Reminder Agent',
      description: 'Send courteous payment reminders and notifications while maintaining compliance with debt collection regulations.',
      features: [
        'FDCPA compliant communications',
        'Automated payment reminders',
        'Payment plan negotiation',
        'Multiple contact attempt scheduling',
        'Compliance tracking and reporting'
      ],
      benefits: [
        'Increase collection rates by 40%',
        'Ensure regulatory compliance',
        'Reduce operational costs',
        'Maintain professional communication'
      ]
    },
    {
      icon: Calendar,
      title: 'Payment Arrangement Agent',
      description: 'Negotiate payment plans, schedule arrangements, and follow up on agreed-upon payment schedules.',
      features: [
        'Payment plan setup and management',
        'Arrangement confirmation calls',
        'Missed payment follow-ups',
        'Plan modification handling',
        'Success tracking and reporting'
      ],
      benefits: [
        'Improve payment arrangement success by 50%',
        'Reduce account write-offs',
        'Streamline payment processes',
        'Enhance debtor relationships'
      ]
    },
    {
      icon: FileText,
      title: 'Account Information Agent',
      description: 'Provide account information, verify debtor details, and maintain accurate records while ensuring privacy compliance.',
      features: [
        'Account balance inquiries',
        'Payment history provision',
        'Debtor verification processes',
        'Information update collection',
        'Privacy compliance maintenance'
      ],
      benefits: [
        'Improve data accuracy by 45%',
        'Reduce information verification time',
        'Enhance account management',
        'Maintain compliance standards'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'Operations Director',
      company: 'Prime Care Medical Group',
      content: 'The follow-up system has transformed our patient care. Medication adherence improved 65% and readmission rates dropped significantly. Our staff can focus on patient care instead of manual calls.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Catherine Lee',
      role: 'Customer Success Director',
      company: 'Shield Insurance Solutions',
      content: 'Policy renewals are automated with personalized touches. Retention rates increased 40% and customers feel valued throughout their policy lifecycle.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
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
              <Scale className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Debt Collection</span><br />
              <span className="text-euphoric-gradient">AI Voice Agents</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Improve collection rates while maintaining compliance and professionalism with AI agents designed specifically for debt collection agencies.
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
              Compliant Debt Collection Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered voice agents designed for debt collection agencies with built-in compliance features
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

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="icon-badge-lg mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built-in Compliance Features
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI agents are designed with compliance at the core, ensuring adherence to all relevant regulations.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">FDCPA Compliance</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                    Proper identification and disclosure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                    Respectful communication protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                    Time and frequency restrictions
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Protection</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                    Secure data handling procedures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                    Third-party disclosure prevention
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                    Call recording and documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Collection Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See how debt collection agencies are improving their results
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
              Ready to Improve Your Collection Results?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join collection agencies using compliant AI voice agents to increase recovery rates professionally.
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

export default DebtCollection;