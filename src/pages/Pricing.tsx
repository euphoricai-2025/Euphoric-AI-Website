import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Zap, Shield, BarChart3, CheckCircle, DollarSign, Settings, Briefcase, Headphones, ShieldCheck, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import TabbedInterface from '../components/TabbedInterface';

const Pricing = () => {
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);
  
  const plans = [
    {
      name: 'Starter AI Calling Agent',
      price: 399,
      hours: 2000,
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
      price: 399,
      hours: 2000,
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
      price: 549,
      hours: 3000,
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
      name: 'Pro AI Calling Agent',
      price: 849,
      hours: 7500,
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
      price: 399,
      hours: 2000,
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
      description: 'Premium-grade security with Stripe integration and saved payment methods.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with detailed reporting and real-time call analytics.'
    }
  ];

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.'
    },
    {
      question: 'What happens if I exceed my monthly calling mins?',
      answer: 'You can purchase additional calling mins at $0.16/min, or upgrade to a higher plan for better value.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees! All plans include self-setup tools and onboarding support at no additional cost.'
    },
    {
      question: 'Can I use my own phone numbers?',
      answer: 'Yes, you can port your existing numbers or purchase new ones through our Twilio integration directly from the dashboard.'
    }
  ];

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-sm text-gray-600 mb-4">To develop and launch your first AI voice agent</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-500 text-sm">/month only</span>
                </div>
                <a 
                  href="https://buy.stripe.com/fZueVd8c5bDzgph7tJ8g00b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors block text-center"
                >
                  Subscribe
                </a>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">50 mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">5 Concurrent Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Voice API, LLM, transcriber costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">API & Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Real-Time Booking, Human Transfer & More Actions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Post Call Analysis</span>
                </div>
              </div>
            </motion.div>

            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-sm text-gray-600 mb-4">To develop and launch your first AI voice agent</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$399</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
                >
                  Subscribe
                </a>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">2,000 mins of calling per month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">15 concurrent calls</span>
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
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Post Call Analysis</span>
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
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-sm text-gray-600 mb-4">For businesses with low call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$549</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
                >
                  Subscribe
                </a>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">3,000 mins, then $0.16/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">25 concurrent calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">All Standard features, plus:</span>
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
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Post Call Analysis</span>
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
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-sm text-gray-600 mb-4">For businesses with higher call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$849</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
                >
                  Subscribe
                </a>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">5,000 mins, then $0.16/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">50 concurrent calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">All Growth features, plus:</span>
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
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Post Call Analysis</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 relative flex flex-col min-h-[600px]"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-sm text-gray-600 mb-4">For performance, scalability & support</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$1249</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
                >
                  Subscribe
                </a>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">7,500 mins, then $0.16/min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">80 concurrent calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">All Pro features, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">SIP Trunk Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Guaranteed Uptime (SLA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Custom Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Compliance (SOC2, HIPAA, GDPR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Solution Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Premium Onboarding, Training, Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Custom Caller ID (Display Your Number)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Branded Caller ID (Display Business Name)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Post Call Analysis</span>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-5 mt-8"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Left Column - Plan Description with Premium gradient */}
                  <div className="bg-gradient-to-br from-brand-teal to-gray-700 p-8 flex flex-col justify-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Enterprise Plan</h3>
                    <p className="text-lg text-white/90 mb-8 leading-relaxed">
                      Customized tailor-made plan to fit customer's unique requirements.
                    </p>
                    <a 
                      href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors self-start inline-block text-center"
                    >
                      Contact Sales
                    </a>
                  </div>

                  {/* Right Column - Features */}
                  <div className="p-8 bg-white">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">All features covered from previous plans</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Custom Pricing</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">SIP Trunk Integration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Priority support</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Custom SSO</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Unlimited QA/Guest Users</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Custom Caller ID (Display Your Number)</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Highest Concurrent Calls</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Custom Integrations</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Compliance (SOC2, HIPAA, GDPR)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Guaranteed Uptime SLA</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Solution Architect</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Premium Onboarding Training Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Branded Caller ID (Display Business Name)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight whitespace-nowrap"
            >
              <span className="text-gray-900">Compare Plans and </span>
              <span className="text-euphoric-gradient">Make the Right Choice</span>
            </motion.h1>
          </div>


          {/* Plan Comparison Header */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden mb-8">
            <div className="grid grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-teal/10">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">Plans</span>
              </div>
              
              {/* Plan Cards - Responsive */}
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-2xl font-bold mb-1 text-brand-teal">$29</div>
                  <div className="text-xs text-gray-900 mb-3">/month</div>
                  <a 
                    href="https://buy.stripe.com/fZueVd8c5bDzgph7tJ8g00b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Standard</h3>
                  <div className="text-2xl font-bold mb-1 text-brand-teal">$399</div>
                  <div className="text-xs text-gray-900 mb-3">/month</div>
                  <a 
                    href="https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-brand-teal hover:shadow-md transition-shadow h-full flex flex-col relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-teal text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">Growth</h3>
                  <div className="text-2xl font-bold mb-1 text-brand-teal">$549</div>
                  <div className="text-xs text-gray-900 mb-3">/month</div>
                  <a 
                    href="https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-2xl font-bold mb-1 text-brand-teal">$849</div>
                  <div className="text-xs text-gray-900 mb-3">/month</div>
                  <a 
                    href="https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
                  <div className="text-2xl font-bold mb-1 text-brand-teal">$1249</div>
                  <div className="text-xs text-gray-900 mb-3">/month</div>
                  <a 
                    href="https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Comparison Tabs */}
          <TabbedInterface
            variant="underline"
            tabs={[
              {
                id: 'costs',
                label: 'Costs & Usage',
                icon: DollarSign,
                content: (
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="grid grid-cols-6 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Feature</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Starter</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Standard</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Growth</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Pro</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Premium</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Minutes included</span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg font-semibold">50</span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg font-semibold">2,000</span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg font-semibold">3,000</span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg font-semibold">5,000</span>
                      </div>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg font-semibold">7,500</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Extra Minute</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$0.16</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$0.16</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$0.16</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$0.16</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$0.16</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Concurrent Calls</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">5</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">15</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">25</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">50</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">80</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Extra Concurrent Call</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$7/call</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$7/call</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">$7/call</span>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'features',
                label: 'Core Features',
                icon: Zap,
                content: (
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="grid grid-cols-6 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Feature</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Starter</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Standard</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Growth</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Pro</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Premium</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Number of Assistants</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">1</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">5</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">10</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">20</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">Unlimited</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Multi-language</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Batch Campaigns</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Invite Team Members</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">2</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">3</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">4</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">5</span>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'support',
                label: 'Support & Success',
                icon: Headphones,
                content: (
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="grid grid-cols-6 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Support</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Starter</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Standard</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Growth</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Pro</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Premium</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Support Level</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">Email Support</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">Email Support</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">Priority Email Support</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">Dedicated Account Manager</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">Dedicated Account Manager</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Onboarding via Zoom</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center text-center">
                        <span className="text-xl font-semibold text-gray-900">Early Access to New Features</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">Solution Architect</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'security',
                label: 'Security & Compliance',
                icon: ShieldCheck,
                content: (
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="grid grid-cols-6 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Security Feature</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Starter</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Standard</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Growth</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Pro</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Premium</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">HIPAA Compliance</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">SOC2 Security</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-900">GDPR Compliance</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4 p-6">
                      <div className="flex items-center justify-center text-center">
                        <span className="text-xl font-semibold text-gray-900">Guaranteed Uptime (SLA)</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-medium">—</span>
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                      <div className="text-center">
                        <Check className="w-6 h-6 text-brand-teal mx-auto" />
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
          />
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
            {faqs.map((faq, index) => {
              const isOpen = openFaqItems.includes(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaqItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-gray-900 font-medium pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-teal flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-teal flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
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
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;