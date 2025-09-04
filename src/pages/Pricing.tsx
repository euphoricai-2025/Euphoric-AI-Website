import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Zap, Shield, BarChart3, CheckCircle, DollarSign, Settings, Briefcase, Headphones, ShieldCheck, Tag } from 'lucide-react';

const Pricing = () => {
  const [isQuarterly, setIsQuarterly] = useState(true);
  
  const getDisplayPrice = (basePrice) => {
    return isQuarterly ? Math.round(basePrice * 0.9) : basePrice;
  };
  
  const plans = [
    {
      name: 'Starter AI Calling Agent',
      price: 299,
      hours: 1440,
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
      name: 'Starter AI Calling Agent',
      price: 299,
      hours: 1440,
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
      hours: 2880,
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
      hours: 3600,
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
    },
    {
      name: 'Starter AI Calling Agent',
      price: 299,
      hours: 1440,
      description: 'Perfect for small businesses getting started with AI calling',
      popular: false,
      features: [
        'Self-setup',
        'Twilio phone number integration',
        'Basic analytics dashboard',
        'Email support',
        'Secure Stripe payments'
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-sm text-gray-600 mb-4">To develop and launch your first AI voice agent</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-500 text-sm">/month only</span>
                </div>
                <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">1,440 mins of calling per month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Self-setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Twilio phone number integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Secure Stripe payments</span>
                </div>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-sm text-gray-600 mb-4">To develop and launch your first AI voice agent</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">${getDisplayPrice(299)}</span>
                  <span className="text-gray-500 text-sm">/{isQuarterly ? 'quarter' : 'month'}</span>
                </div>
                <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto">
                  Try 14-Day Free
                </button>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">1,440 mins of calling per month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Self-setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Twilio phone number integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Secure Stripe payments</span>
                </div>
              </div>
            </motion.div>

            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-brand-teal p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-teal text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-sm text-gray-600 mb-4">For businesses with low call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">${getDisplayPrice(499)}</span>
                  <span className="text-gray-500 text-sm">/{isQuarterly ? 'quarter' : 'month'}</span>
                </div>
                <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto">
                  Try 14-Day Free
                </button>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">All Standard features, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">2,800 mins, then $0.22/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-brand-teal font-semibold"><strong>Custom Caller ID (Display Your Number)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-brand-teal font-semibold"><strong>Branded Caller ID (Display Business Name)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Assisted setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics and reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Priority email support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Multi-domain support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Custom voice training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">API access</span>
                </div>
              </div>
            </motion.div>

            {/* Agency Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-sm text-gray-600 mb-4">For businesses with higher call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">${getDisplayPrice(599)}</span>
                  <span className="text-gray-500 text-sm">/{isQuarterly ? 'quarter' : 'month'}</span>
                </div>
                <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto">
                  Try 14-Day Free
                </button>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">All Pro features, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">3,600 mins, then $0.22/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Real-time analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">All domain specializations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Advanced voice customization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Full API access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Priority feature requests</span>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-brand-teal to-gray-700 rounded-2xl p-8 relative text-white flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">Enterprise</h3>
                <p className="text-sm text-white font-bold mb-4">For performance, scalability & support</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors mt-auto">
                  Contact us
                </button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Volume-based Price, as low as $0.08/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">SIP Trunk Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Guaranteed Uptime (SLA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Custom Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">200+ Concurrent Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Compliance (SOC2, HIPAA, GDPR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Solution Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Enterprise Onboarding, Training, Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Custom Caller ID (Display Your Number)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-gray-200 font-bold">Branded Caller ID (Display Business Name)</span>
                </div>
              </div>
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

      {/* Compare Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              Compare Plans and Make the Right Choice
            </h2>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border">
                <button
                  onClick={() => setIsQuarterly(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    !isQuarterly ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsQuarterly(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    isQuarterly ? 'bg-brand-teal text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-6 gap-6 p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <div className="col-span-2 flex items-end pb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Features</h3>
                  <p className="text-sm text-gray-600 mt-1">Compare what's included in each plan</p>
                </div>
              </div>
              
              {/* Starter Plan */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#000000' }}>${getDisplayPrice(299)}</div>
                  <div className="text-sm text-gray-500 mb-4">/{isQuarterly ? 'quarter' : 'month'}</div>
                  <button className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm mt-auto">
                    Get Started
                  </button>
                </div>
              </div>
              
              {/* Pro Plan */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#a98064' }}>${getDisplayPrice(375)}</div>
                  <div className="text-sm text-gray-500 mb-4">/{isQuarterly ? 'quarter' : 'month'}</div>
                  <button className="w-full px-4 py-3 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-colors shadow-sm mt-auto" style={{ backgroundColor: '#a98064' }}>
                    Try 14-Day Free
                  </button>
                </div>
              </div>
              
              {/* Growth Plan */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#868c82' }}>${getDisplayPrice(750)}</div>
                  <div className="text-sm text-gray-500 mb-4">/{isQuarterly ? 'quarter' : 'month'}</div>
                  <button className="w-full px-4 py-3 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-colors shadow-sm mt-auto" style={{ backgroundColor: '#868c82' }}>
                    Try 14-Day Free
                  </button>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold mb-1 text-gray-700">Custom</div>
                  <div className="text-sm text-gray-500 mb-4">Pricing</div>
                  <button className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm mt-auto">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>

            {/* Costs Structure */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: '#a98064' }}>
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Costs Structure</h4>
                  <p className="text-sm text-gray-600">Transparent pricing with no hidden fees</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="grid grid-cols-6 gap-6 py-4 border-b border-gray-50 hover:bg-gray-25 transition-colors">
                  <div className="col-span-2 text-sm text-gray-800 font-semibold">Minutes included</div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium">50</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium">2,000</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium">4,000</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium">Custom</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Extra Minute</div>
                  <div className="text-center text-sm">$0.22</div>
                  <div className="text-center text-sm">$0.22</div>
                  <div className="text-center text-sm">$0.22</div>
                  <div className="text-center text-sm">Custom</div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Conversational Voice Engine API</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">LLM Agent</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Transcriber</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Concurrent Calls</div>
                  <div className="text-center text-sm">5</div>
                  <div className="text-center text-sm">25</div>
                  <div className="text-center text-sm">50</div>
                  <div className="text-center text-sm">Custom</div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Extra Concurrent Call</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">$7/call</div>
                  <div className="text-center text-sm">$7/call</div>
                  <div className="text-center text-sm">Custom</div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">New Phone Number</div>
                  <div className="text-center text-sm">$1.50</div>
                  <div className="text-center text-sm">$1.50</div>
                  <div className="text-center text-sm">$1.50</div>
                  <div className="text-center text-sm">Included</div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Boosted Queuing for Calls</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">$500/mo</div>
                  <div className="text-center text-sm">$500/mo</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="p-8 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: '#868c82' }}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Core Capabilities</h4>
                  <p className="text-sm text-gray-600">Essential features for AI voice agents</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Unlimited Assistants</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Multi-language</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Retelling</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Batch Campaigns</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Invite Team Members</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: '#6498a0' }}>
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Actions & Workflows</h4>
                  <p className="text-sm text-gray-600">Automation and integration capabilities</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Custom Workflows (Reach Calls, Lead capture, Lead Qualification, etc.)</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">8,000</div>
                  <div className="text-center text-sm">42,000</div>
                  <div className="text-center text-sm">Custom</div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Extra Workflow</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">$0.002</div>
                  <div className="text-center text-sm">$0.002</div>
                  <div className="text-center text-sm">Custom</div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Send SMS</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Real-time Booking</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Call Transfer</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Information Extractor</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Custom Actions</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
              </div>
            </div>

            {/* White Label Platform */}
            <div className="p-8 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: '#42a4bf' }}>
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">White Label Platform</h4>
                  <p className="text-sm text-gray-600">Brand customization and reseller options</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">White-label Platform</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Subaccounts</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">25</div>
                  <div className="text-center text-sm">Unlimited</div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: '#a98064' }}>
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Support & Training</h4>
                  <p className="text-sm text-gray-600">Help when you need it most</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Academy</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Support via Ticketing System</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">30-day Onboarding via Private Slack, then Support via Ticketing System</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Dedicated Support & Slack Channel</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">$1,200/mo</div>
                  <div className="text-center text-sm">$1,200/mo</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-100">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Early Access to New Features</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Solution Architect</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="p-8 bg-gray-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: '#000000' }}>
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Security & Compliance</h4>
                  <p className="text-sm text-gray-600">Enterprise-grade security standards</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">Guaranteed Uptime (SLA)</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">HIPAA</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center text-sm">—</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3 border-b border-gray-200">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">SOC2 Security</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
                <div className="grid grid-cols-6 gap-4 py-3">
                  <div className="col-span-2 text-sm text-gray-700 font-medium">GDPR</div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                  <div className="text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></div>
                </div>
              </div>
            </div>
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
                question: 'What happens if I exceed my monthly calling mins?',
                answer: 'You can purchase additional calling mins at $0.22/min, or upgrade to a higher plan for better value.'
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