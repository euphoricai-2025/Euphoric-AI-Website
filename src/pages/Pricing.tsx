import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Zap, Shield, BarChart3, CheckCircle, DollarSign, Settings, Briefcase, Headphones, ShieldCheck, Tag, ChevronDown, ChevronUp, Sparkles, Crown, Rocket, HelpCircle } from 'lucide-react';
import TabbedInterface from '../components/TabbedInterface';
import { TextAnimate } from '../components/magicui/text-animate';
import { useAuth } from '../contexts/AuthContext';

const Pricing = () => {
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);
  const { user } = useAuth();
  
  const plans = [
    {
      name: 'Trial AI Calling Agent',
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
      name: 'Trial AI Calling Agent',
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
      name: 'Growth AI Calling Agent',
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
      name: 'Trial AI Calling Agent',
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
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-gold/30 to-brand-teal/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Sparkles className="w-4 h-4 mr-3 text-brand-gold animate-pulse" />
                Flexible Plans for Every Business Size
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-8 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Scale as You</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Grow</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                Self-setup from dashboard. Twilio numbers. Stripe billing. No hidden fees. No contracts.
              </TextAnimate>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
{!user ? (
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group text-lg"
                >
                  Sign Up
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a
                  href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group text-lg"
                >
                  Book Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <Link
                to="/contact"
                className="bg-white border-2 border-brand-teal text-brand-teal font-bold py-4 px-8 rounded-xl hover:bg-brand-teal hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>


          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {/* Trial Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-blue/5 to-brand-teal/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative glass rounded-2xl p-8 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col min-h-[600px]">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Trial</h3>
                    <p className="text-sm text-gray-600 mb-4">To develop and launch your first AI voice agent</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">$99</span>
                      <span className="text-gray-500 text-sm">/month only</span>
                    </div>
                    <a 
                      href="https://buy.stripe.com/aFa4gz2RL5fbc913dt8g00l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </a>
                  </div>
              
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="text-gray-700">250 mins</span>
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
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-soft p-8 relative flex flex-col min-h-[600px] card-hover group"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-sm text-gray-600 mb-4">To develop and launch your first AI voice agent</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$399</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-center py-3 px-6 font-semibold mt-auto"
                >
                  Get Started
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

            {/* Growth Plan becomes Standard (no highlight) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-soft p-8 relative flex flex-col min-h-[600px] card-hover group"
            >
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-sm text-gray-600 mb-4">For businesses with low call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$549</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-center py-3 px-6 font-semibold mt-auto"
                >
                  Get Started
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
                  <span className="text-gray-700">All Starter features, plus:</span>
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

            {/* Pro Plan becomes Growth - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 relative flex flex-col min-h-[600px] card-hover group border-2 border-brand-teal shadow-xl scale-105 z-10"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-sm text-gray-600 mb-4">For businesses with higher call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$849</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold text-center py-3 px-6 font-semibold mt-auto"
                >
                  Get Started
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
                  <span className="text-gray-700">All Standard features, plus:</span>
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

            {/* Premium Plan becomes Pro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-soft p-8 relative flex flex-col min-h-[600px] card-hover group"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-sm text-gray-600 mb-4">For performance, scalability & support</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$1249</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <a 
                  href="https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary text-center py-3 px-6 font-semibold mt-auto"
                >
                  Get Started
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
                  <span className="text-gray-700">All Growth features, plus:</span>
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
              className="lg:col-span-5 mt-12"
            >
              <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2">
                  {/* Left Column - Plan Description with Premium gradient */}
                  <div className="bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold p-12 flex flex-col justify-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                        <Crown className="w-4 h-4 inline mr-2 text-brand-gold" />Custom Solution
                      </span>
                      <h3 className="text-4xl font-bold mb-6 leading-tight">Enterprise Plan</h3>
                      <p className="text-xl text-white/95 mb-10 leading-relaxed">
                        Tailored solutions with dedicated support, custom integrations, and enterprise-grade security for your unique requirements.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-brand-teal font-bold py-4 px-8 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div className="p-10 bg-white/80 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Left Column - First 6 features */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Custom Pricing & Volume Discounts</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Advanced SIP Trunk Integration</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">24/7 Dedicated Support Team</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Enterprise SSO & SAML Integration</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Unlimited Users & Advanced Roles</span>
                        </div>
                      </div>
                      
                      {/* Right Column - Last 6 features */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Unlimited Concurrent Calls</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Custom API Integrations</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Full Compliance (SOC2, HIPAA, GDPR)</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">99.9% Uptime SLA Guarantee</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Dedicated Solution Architect</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 glass-soft rounded-lg">
                          <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                          <span className="text-gray-800 font-medium">Premium Training & Onboarding</span>
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
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full text-brand-teal font-medium text-sm mb-6 shadow-lg">
                <BarChart3 className="w-4 h-4 inline mr-2 text-brand-teal" />Detailed Comparison
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-6 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Compare Plans and</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Make the Right Choice</span>
            </motion.h2>
          </div>

          {/* Mobile-Optimized Plan Comparison Header */}
          <div className="glass rounded-3xl overflow-hidden mb-8 shadow-2xl">
            {/* Desktop View */}
            <div className="hidden lg:grid lg:grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 backdrop-blur-sm">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">Plans</span>
              </div>
              
              {/* Plan Cards - Desktop */}
              {[
                { name: 'Trial', price: '$99', url: 'https://buy.stripe.com/aFa4gz2RL5fbc913dt8g00l', popular: false },
                { name: 'Starter', price: '$399', url: 'https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c', popular: false },
                { name: 'Standard', price: '$549', url: 'https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k', popular: false },
                { name: 'Growth', price: '$849', url: 'https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e', popular: true },
                { name: 'Pro', price: '$1249', url: 'https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f', popular: false }
              ].map((plan) => (
                <div key={plan.name} className="text-center">
                  <div className={`rounded-xl p-4 hover:shadow-lg transition-all duration-300 h-full flex flex-col group card-hover ${
                    plan.popular ? 'glass border-2 border-brand-teal scale-105 relative' : 'glass-soft'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                        <span className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                          Popular
                        </span>
                      </div>
                    )}
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${plan.popular ? 'mt-2' : ''}`}>{plan.name}</h3>
                    <div className="text-2xl font-bold mb-1 text-brand-teal">{plan.price}</div>
                    <div className="text-xs text-gray-600 mb-3">/month</div>
                    <a 
                      href={plan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-2 py-2 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300 mt-auto whitespace-nowrap block text-center ${
                        plan.popular ? 'bg-gradient-to-r from-brand-gold to-orange-400' : 'bg-gradient-to-r from-brand-teal to-brand-blue'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
              <div className="p-6 bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 backdrop-blur-sm text-center">
                <span className="text-2xl md:text-4xl font-bold text-gray-900">Plans</span>
              </div>
              
              {/* Horizontal scrollable plan cards for mobile */}
              <div className="p-4 overflow-x-auto">
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                  {[
                    { name: 'Trial', price: '$99', url: 'https://buy.stripe.com/aFa4gz2RL5fbc913dt8g00l', popular: false },
                    { name: 'Starter', price: '$399', url: 'https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c', popular: false },
                    { name: 'Standard', price: '$549', url: 'https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k', popular: false },
                    { name: 'Growth', price: '$849', url: 'https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e', popular: true },
                    { name: 'Pro', price: '$1249', url: 'https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f', popular: false }
                  ].map((plan) => (
                    <div key={plan.name} className="flex-shrink-0 w-36">
                      <div className={`rounded-xl p-3 hover:shadow-lg transition-all duration-300 h-full flex flex-col group card-hover ${
                        plan.popular ? 'glass border-2 border-brand-teal relative' : 'glass-soft'
                      }`}>
                        {plan.popular && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                            <span className="bg-gradient-to-r from-brand-teal to-brand-blue text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                              Popular
                            </span>
                          </div>
                        )}
                        <h3 className={`text-lg font-bold text-gray-900 mb-2 text-center ${plan.popular ? 'mt-2' : ''}`}>{plan.name}</h3>
                        <div className="text-xl font-bold mb-1 text-brand-teal text-center">{plan.price}</div>
                        <div className="text-xs text-gray-600 mb-3 text-center">/month</div>
                        <a 
                          href={plan.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full px-2 py-2 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300 mt-auto block text-center ${
                            plan.popular ? 'bg-gradient-to-r from-brand-gold to-orange-400' : 'bg-gradient-to-r from-brand-teal to-brand-blue'
                          }`}
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
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
                  <div className="glass rounded-2xl border-0 shadow-lg overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-blue/5 backdrop-blur-sm">
                        <div className="flex items-center justify-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Feature</span>
                        </div>
                        <div className="text-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Trial</span>
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
                      </div>
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
                        <div className="flex items-center justify-center">
                          <span className="text-xl font-semibold text-gray-900">Minutes included</span>
                        </div>
                        <div className="text-center">
                          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-lg font-semibold">250</span>
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
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden">
                      <div className="p-4 space-y-4">
                        {/* Minutes included */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Minutes included</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">250</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">2,000</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">3,000</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <div className="text-gray-800 font-semibold">5,000</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <div className="text-gray-800 font-semibold">7,500</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Continue Desktop Table */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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

                    {/* Continue Mobile Card View */}
                    <div className="lg:hidden">
                      <div className="p-4 space-y-4">
                        {/* Extra Minute */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Extra Minute Cost</h3>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-xl font-bold text-brand-teal">$0.16</div>
                            <div className="text-sm text-gray-600 mt-1">Same rate for all plans</div>
                          </div>
                        </div>

                        {/* Concurrent Calls */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Concurrent Calls</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">5</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">15</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">25</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <div className="text-gray-800 font-semibold">50</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <div className="text-gray-800 font-semibold">80</div>
                            </div>
                          </div>
                        </div>

                        {/* Extra Concurrent Call */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Extra Concurrent Call</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">$7/call</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <div className="text-gray-800 font-semibold">$7/call</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <div className="text-gray-800 font-semibold">$7/call</div>
                            </div>
                          </div>
                        </div>
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
                  <div className="glass rounded-2xl border-0 shadow-lg overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-blue/5 backdrop-blur-sm">
                        <div className="flex items-center justify-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Feature</span>
                        </div>
                        <div className="text-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Trial</span>
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
                      </div>
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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

                    {/* Mobile Card View */}
                    <div className="lg:hidden">
                      <div className="p-4 space-y-4">
                        {/* Number of Assistants */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Number of Assistants</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">1</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">5</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">10</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <div className="text-gray-800 font-semibold">20</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <div className="text-gray-800 font-semibold">Unlimited</div>
                            </div>
                          </div>
                        </div>

                        {/* Multi-language */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Multi-language Support</h3>
                          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                            <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="text-green-800 font-semibold">Available on all plans</div>
                          </div>
                        </div>

                        {/* Batch Campaigns */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Batch Campaigns</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                        </div>

                        {/* Invite Team Members */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Invite Team Members</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">2</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">3</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <div className="text-gray-800 font-semibold">4</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <div className="text-gray-800 font-semibold">5</div>
                            </div>
                          </div>
                        </div>
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
                  <div className="glass rounded-2xl border-0 shadow-lg overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-blue/5 backdrop-blur-sm">
                        <div className="flex items-center justify-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Support</span>
                        </div>
                        <div className="text-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Trial</span>
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
                      </div>
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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

                    {/* Mobile Card View */}
                    <div className="lg:hidden">
                      <div className="p-4 space-y-4">
                        {/* Support Level */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Support Level</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 text-sm font-semibold">Email Support</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 text-sm font-semibold">Email Support</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 text-sm font-semibold">Priority Email</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg border border-brand-gold/30">
                              <div className="font-bold text-brand-teal mb-1">Growth ⭐</div>
                              <div className="text-gray-800 text-sm font-semibold">Account Manager</div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <div className="text-gray-800 text-sm font-semibold">Account Manager</div>
                            </div>
                          </div>
                        </div>

                        {/* Onboarding via Zoom */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Onboarding via Zoom</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Growth</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                        </div>

                        {/* Early Access to New Features */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Early Access to New Features</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Growth</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                        </div>

                        {/* Solution Architect */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Solution Architect</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Starter</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Growth</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                        </div>
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
                  <div className="glass rounded-2xl border-0 shadow-lg overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="hidden lg:block">
                      <div className="grid grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-blue/5 backdrop-blur-sm">
                        <div className="flex items-center justify-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Security Feature</span>
                        </div>
                        <div className="text-center">
                          <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Trial</span>
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
                      </div>
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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
                      
                      <div className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20">
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

                    {/* Mobile Card View */}
                    <div className="lg:hidden">
                      <div className="p-4 space-y-4">
                        {/* HIPAA Compliance */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">HIPAA Compliance</h3>
                          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                            <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="text-green-800 font-semibold">Available on all plans</div>
                          </div>
                        </div>

                        {/* SOC2 Security */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">SOC2 Security</h3>
                          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                            <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="text-green-800 font-semibold">Available on all plans</div>
                          </div>
                        </div>

                        {/* GDPR Compliance */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">GDPR Compliance</h3>
                          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                            <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="text-green-800 font-semibold">Available on all plans</div>
                          </div>
                        </div>

                        {/* Guaranteed Uptime (SLA) */}
                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Guaranteed Uptime (SLA)</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Trial</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Standard</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-brand-teal mb-1">Growth</div>
                              <div className="text-gray-800 font-semibold">—</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                              <div className="font-bold text-brand-teal mb-1">Pro</div>
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            </div>
                          </div>
                        </div>
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
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full text-brand-teal font-medium text-sm mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 inline mr-2 text-brand-gold" />Core Features
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-6 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Everything You Need</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Included</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              All plans come with essential features to get your AI calling agents up and running quickly.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group h-full"
                >
                  <div className="relative h-full">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg flex-grow">{feature.description}</p>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full text-brand-teal font-medium text-sm mb-6 shadow-lg">
                <HelpCircle className="w-4 h-4 inline mr-2 text-brand-teal" />Got Questions?
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-6 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Questions</span>
            </motion.h2>
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
                  className="glass-soft rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden card-hover group"
                >
                  <button
                    onClick={() => toggleFaqItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300 group-hover:bg-white/60"
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
                      <div className="pt-4 border-t border-white/30">
                        <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
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
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-brand-blue/5 to-brand-gold/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full text-brand-teal font-medium text-sm mb-6 shadow-lg">
                <Rocket className="w-4 h-4 inline mr-2 text-brand-blue" />Get Started Today
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-8 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Ready to Transform</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Your Business?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Deploy your first AI calling agent today and start transforming your business communications.
              <br className="hidden md:block" />
              <span className="text-euphoric-gradient font-semibold">No setup fees. No long-term contracts.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
{!user ? (
                <Link
                  to="/signup"
                  className="btn-gold inline-flex items-center justify-center gap-2 group px-8 py-4 text-lg font-semibold"
                >
                  Sign Up
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a
                  href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center gap-2 group px-8 py-4 text-lg font-semibold"
                >
                  Book Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-teal" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-teal" />
                <span>Cancel Anytime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
