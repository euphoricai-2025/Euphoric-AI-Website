import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Zap, Shield, BarChart3 } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter AI Calling Agent',
      price: 299,
      hours: 24,
      description: 'Perfect for small businesses getting started with AI calling',
      popular: false,
      features: [
        '24 hours of calling per month',
        'Self-setup in 30 minutes',
        'Twilio phone number integration',
        'Basic analytics dashboard',
        'Email support',
        'Secure Stripe payments',
        'Single domain specialization'
      ]
    },
    {
      name: 'Standard AI Calling Agent',
      price: 449,
      hours: 48,
      description: 'Ideal for growing businesses with higher call volumes',
      popular: true,
      features: [
        '48 hours of calling per month',
        'Self-setup in 30 minutes',
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
        '60 hours of calling per month',
        'Self-setup in 30 minutes',
        'Twilio phone number integration',
        'Real-time analytics dashboard',
        'Dedicated support manager',
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass p-8 card-hover relative ${
                  plan.popular ? 'gradient-border' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="popular-badge">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-euphoric-gradient">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {plan.hours} hours of calling per month
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block w-full py-4 rounded-xl font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'btn-gold'
                      : 'btn-primary'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
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