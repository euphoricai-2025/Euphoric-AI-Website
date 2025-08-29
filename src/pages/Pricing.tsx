import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Zap, Shield, BarChart3, CheckCircle } from 'lucide-react';

const Pricing = () => {
  const [isQuarterly, setIsQuarterly] = useState(false);
  
  const getDisplayPrice = (basePrice) => {
    return isQuarterly ? Math.round(basePrice * 0.9) : basePrice;
  };
  
  const plans = [
    {
      name: 'Starter AI Calling Agent',
      price: 299,
      hours: 24,
      description: 'Perfect for small businesses getting started with AI calling',
      popular: false,
      features: [
        'Self-setup',
        'Twilio phone number integration',
        'Basic analytics dashboard',
        'Email support',
        'Secure Stripe payments'
      ]
    },
    {
      name: 'Standard AI Calling Agent',
      price: 499,
      hours: 48,
      description: 'Ideal for growing businesses with higher call volumes',
      popular: true,
      features: [
        'Assisted setup in 30 minutes',
        'Twilio phone number integration',
        'Advanced analytics & reporting',
        'Priority email support',
        'Secure Stripe payments',
        'Multi-domain support',
        'Custom voice training',
        'API access'
      ]
    },
    {
      name: 'Premium AI Calling Agent',
      price: 599,
      hours: 60,
      description: 'For enterprise businesses requiring maximum calling capacity',
      popular: false,
      features: [
        'Assisted setup in 30 minutes',
        'Twilio phone number integration',
        'Real-time analytics dashboard',
        'Dedicated account manager',
        'Secure Stripe payments',
        'All domain specializations',
        'Advanced voice customization',
        'Full API access',
        'Priority feature requests'
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get your AI calling agent up and running in just 30 minutes with our intuitive setup process.'
    },
    {
      icon: Phone,
      title: 'Twilio Integration',
      description: 'Seamlessly purchase and manage phone numbers directly from your dashboard.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Enterprise-grade security with Stripe integration and saved payment methods.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed reporting and real-time call analytics.'
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Scale </span>
              <span className="text-gray-500">as </span>
              <span className="text-euphoric-gradient">You Grow</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Self-setup from dashboard. Twilio numbers. Stripe billing. No hidden fees.
            </motion.p>
          </div>

          {/* Billing Period Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="glass-soft p-4 rounded-2xl inline-flex items-center gap-6">
              <span className={`text-lg font-semibold transition-colors ${!isQuarterly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsQuarterly(!isQuarterly)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 ${
                  isQuarterly ? 'bg-brand-teal' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isQuarterly ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <div className="flex items-center gap-3">
                <span className={`text-lg font-semibold transition-colors ${isQuarterly ? 'text-gray-900' : 'text-gray-500'}`}>
                  Quarterly
                </span>
                <span className="text-sm font-bold text-brand-teal bg-brand-teal/10 px-3 py-1.5 rounded-full">
                  Save 10%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="glass p-8 card-hover"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{plans[0].name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">${getDisplayPrice(plans[0].price)}</span>
                <span className="text-gray-500 ml-2">/{isQuarterly ? 'quarter' : 'month'}</span>
              </div>
              <p className="text-gray-600 mb-6">Includes {plans[0].hours} hours/mo of calling</p>

              <div className="space-y-4 mb-8">
                {plans[0].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </motion.div>

            {/* Standard AI Calling Agent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-12 card-hover relative transform scale-125"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="popular-badge">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{plans[1].name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">${getDisplayPrice(plans[1].price)}</span>
                <span className="text-gray-500 ml-2">/{isQuarterly ? 'quarter' : 'month'}</span>
              </div>
              <p className="text-gray-600 mb-6">Includes {plans[1].hours} hours/mo of calling</p>

              <div className="space-y-4 mb-8">
                {plans[1].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup" className="btn-gold w-full text-center">
                Get Started
              </Link>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 card-hover"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{plans[2].name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">${getDisplayPrice(plans[2].price)}</span>
                <span className="text-gray-500 ml-2">/{isQuarterly ? 'quarter' : 'month'}</span>
              </div>
              <p className="text-gray-600 mb-6">Includes {plans[2].hours} hours/mo of calling</p>

              <div className="space-y-4 mb-8">
                {plans[2].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Everything You Need </span>
              <span className="text-euphoric-gradient">Included</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              All plans come with essential features to get your AI calling agents up and running quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-soft p-6 card-hover"
                >
                  <div className="icon-badge mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.'
              },
              {
                question: 'What happens if I exceed my monthly calling hours?',
                answer: 'You can purchase additional calling hours at $12.50 per hour, or upgrade to a higher plan for better value.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees! All plans include self-setup tools and onboarding support at no additional cost.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll provide a full refund within the first 30 days.'
              },
              {
                question: 'Can I use my own phone numbers?',
                answer: 'Yes, you can port your existing numbers or purchase new ones through our Twilio integration directly from the dashboard.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="accordion-item"
              >
                <div className="accordion-button">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Deploy your first AI calling agent today and start transforming your business communications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;