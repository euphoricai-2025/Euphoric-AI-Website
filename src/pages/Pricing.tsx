import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Zap, Shield, BarChart3, CheckCircle, DollarSign, Settings, Briefcase, Headphones, ShieldCheck, Tag, ChevronDown, ChevronUp, Sparkles, Crown, Rocket, HelpCircle } from 'lucide-react';
import { TextAnimate } from '../components/magicui/text-animate';
import { useAuth } from '../contexts/AuthContext';

const Pricing = () => {
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([]);
  const { user } = useAuth();
  
  const plans = [
    {
      name: 'Starter',
      price: 399,
      minutes: '2,000 calling minutes per month',
      concurrentCalls: 'Up to 15 concurrent calls',
      description: 'Perfect for teams launching their first AI voice agent',
      popular: false,
      features: [
        '2,000 calling minutes per month',
        'Up to 15 concurrent calls',
        'Self-setup',
        'Twilio number integration',
        'Basic analytics dashboard',
        'Email support',
        'Post-call analysis'
      ]
    },
    {
      name: 'Standard',
      price: 599,
      minutes: '3,000 calling minutes per month',
      concurrentCalls: 'Up to 25 concurrent calls',
      description: 'Growing teams with advanced analytics needs',
      popular: false,
      features: [
        '3,000 calling minutes per month',
        'Then $0.16/min thereafter',
        'Up to 25 concurrent calls',
        'Advanced analytics & reporting',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      price: 999,
      minutes: '5,000 calling minutes per month',
      concurrentCalls: 'Up to 50 concurrent calls',
      description: 'Most popular plan with multilingual support',
      popular: true,
      features: [
        '5,000 calling minutes per month',
        'Then $0.16/min thereafter',
        'Up to 50 concurrent calls',
        'Real-time analytics dashboard',
        'Priority email support',
        'Multilingual Agent'
      ]
    },
    {
      name: 'Pro',
      price: 1499,
      minutes: '7,500 calling minutes per month',
      concurrentCalls: 'Up to 80 concurrent calls',
      description: 'Enterprise-ready with compliance and SLAs',
      popular: false,
      features: [
        '7,500 calling minutes per month',
        'Then $0.16/min thereafter',
        'Up to 80 concurrent calls',
        'SIP trunk integration',
        'Guaranteed uptime (SLA)',
        'Custom integrations',
        'SOC2/HIPAA/GDPR compliance',
        'Premium onboarding'
      ]
    },
    {
      name: 'Enterprise',
      price: 1999,
      priceLabel: 'Starts from $1,999',
      minutes: 'Flexible minute-based pricing',
      concurrentCalls: 'Unlimited concurrent calls',
      description: 'Tailored for high-volume, multi-country operations',
      popular: false,
      features: [
        'Flexible minute-based pricing',
        'Unlimited concurrent calls',
        'Dedicated solution architect',
        'Advanced SIP trunk & API integrations',
        'Enterprise-grade compliance',
        '24/7 premium support'
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

  const planLabels = ['Starter', 'Standard', 'Growth', 'Pro', 'Enterprise'];

  const planComparisonSummary = [
    {
      label: 'Included minutes',
      values: ['2,000', '3,000', '5,000', '7,500', 'Flexible']
    },
    {
      label: 'Concurrent calls',
      values: ['15', '25', '50', '80', 'Unlimited']
    },
    {
      label: 'Analytics & insights',
      values: [
        'Basic analytics dashboard',
        'Advanced analytics & reporting',
        'Real-time analytics dashboard',
        'Real-time analytics + SIP visibility',
        'Enterprise analytics & custom reporting'
      ]
    },
    {
      label: 'Support level',
      values: [
        'Email support',
        'Email support',
        'Priority email support',
        'Priority email + premium onboarding',
        '24/7 premium support'
      ]
    },
    {
      label: 'Key extras',
      values: [
        'Post-call analysis',
        'Same-rate overages at $0.16/min',
        'Multilingual agent',
        'SIP trunk integration, custom integrations, compliance',
        'Dedicated solution architect, enterprise-grade compliance'
      ]
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
      answer: 'No setup fees! All plans include self-setup tools.'
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
            {/* Starter Plan */}
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
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Starter</h3>
                    <p className="text-sm text-gray-600 mb-4">Launch your AI calling agent with guided self-setup</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">$399</span>
                      <span className="text-gray-500 text-sm">/month</span>
                    </div>
                    <a 
                      href="https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c"
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
                      <span className="text-gray-700">2,000 calling minutes included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="text-gray-700">Up to 15 concurrent calls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="text-gray-700">Self-setup workflow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="text-gray-700">Twilio number integration</span>
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
                      <span className="text-gray-700">Post-call analysis</span>
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
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-sm text-gray-600 mb-4">Grow with deeper analytics and higher call volumes</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$599</span>
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
                  <span className="text-gray-700">3,000 calling minutes included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Up to 25 concurrent calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics &amp; reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Same-rate overages at $0.16/min</span>
                </div>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-soft p-8 relative flex flex-col min-h-[600px] card-hover group"
            >
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-sm text-gray-600 mb-4">Enterprise readiness with compliance and SLAs</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$1,499</span>
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
                  <span className="text-gray-700">7,500 calling minutes included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Up to 80 concurrent calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">SIP trunk integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Guaranteed uptime (SLA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Custom integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">SOC2/HIPAA/GDPR compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Premium onboarding</span>
                </div>
              </div>
            </motion.div>

            {/* Growth Plan - Most Popular */}
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
                  <span className="text-3xl font-bold text-gray-900">$999</span>
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
                  <span className="text-gray-700">5,000 calling minutes included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Up to 50 concurrent calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Real-time analytics dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Priority email support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Multilingual agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700">Same-rate overages at $0.16/min</span>
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
                      <div className="text-lg font-semibold text-white/90 mb-10">
                        Starts from $1,999/month with flexible minute-based pricing.
                      </div>
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
                { name: 'Starter', price: '$399', url: 'https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c', popular: false },
                { name: 'Standard', price: '$599', url: 'https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k', popular: false },
                { name: 'Growth', price: '$999', url: 'https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e', popular: true },
                { name: 'Pro', price: '$1,499', url: 'https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f', popular: false },
                { name: 'Enterprise', price: 'From $1,999', url: 'https://calendly.com/euphoricai-ai-voiceagents-demo/45', popular: false }
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
                    <div className="text-xs text-gray-600 mb-3">{plan.name === 'Enterprise' ? 'custom' : '/month'}</div>
                    <a 
                      href={plan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full px-2 py-2 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300 mt-auto whitespace-nowrap block text-center ${
                        plan.popular ? 'bg-gradient-to-r from-brand-gold to-orange-400' : 'bg-gradient-to-r from-brand-teal to-brand-blue'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
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
                    { name: 'Starter', price: '$399', url: 'https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c', popular: false },
                    { name: 'Standard', price: '$599', url: 'https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k', popular: false },
                    { name: 'Growth', price: '$999', url: 'https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e', popular: true },
                    { name: 'Pro', price: '$1,499', url: 'https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f', popular: false },
                    { name: 'Enterprise', price: 'From $1,999', url: 'https://calendly.com/euphoricai-ai-voiceagents-demo/45', popular: false }
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
                        <div className="text-xs text-gray-600 mb-3 text-center">{plan.name === 'Enterprise' ? 'custom' : '/month'}</div>
                        <a 
                          href={plan.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full px-2 py-2 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300 mt-auto block text-center ${
                            plan.popular ? 'bg-gradient-to-r from-brand-gold to-orange-400' : 'bg-gradient-to-r from-brand-teal to-brand-blue'
                          }`}
                        >
                          {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Plan Feature Summary */}
          <div className="mt-20">
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              {/* Desktop Summary Table */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-6 gap-4 p-6 bg-gradient-to-r from-brand-teal/5 to-brand-blue/5 backdrop-blur-sm">
                  <div className="flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">Feature</span>
                  </div>
                  {planLabels.map((plan) => (
                    <div key={`summary-header-${plan}`} className="text-center">
                      <span className="text-lg font-semibold text-gray-600 uppercase tracking-wider">{plan}</span>
                    </div>
                  ))}
                </div>
                {planComparisonSummary.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-6 gap-4 p-6 bg-white/50 backdrop-blur-sm border-b border-white/20"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-900">{row.label}</span>
                    </div>
                    {row.values.map((value, index) => (
                      <div key={`${row.label}-${planLabels[index]}`} className="text-center">
                        <span className="text-lg font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile Summary Cards */}
              <div className="lg:hidden">
                <div className="divide-y divide-white/20">
                  {planLabels.map((plan, planIndex) => (
                    <div key={`summary-mobile-${plan}`} className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                        {plan}
                        {plan === 'Growth' && (
                          <span className="ml-2 text-brand-teal text-xs font-semibold uppercase tracking-wide">Popular</span>
                        )}
                      </h3>
                      <div className="space-y-3">
                        {planComparisonSummary.map((row) => (
                          <div
                            key={`${plan}-${row.label}`}
                            className="flex items-start justify-between bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20"
                          >
                            <span className="text-sm font-medium text-gray-600">{row.label}</span>
                            <span className="text-sm font-semibold text-gray-900 text-right w-1/2">
                              {row.values[planIndex]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
