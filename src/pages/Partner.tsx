import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, ArrowRight, Users, DollarSign, Globe, Zap, CheckCircle, Building, UserCheck, Target, MessageSquare } from 'lucide-react';

const Partner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    countryRegion: '',
    partnershipType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('partnership-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const partnershipTypes = [
    {
      icon: Users,
      title: 'Resellers',
      description: 'Earn revenue by offering Euphoric AI voice agents to your customers. No complex setup or white-labeling required—just sell, and we\'ll support you.'
    },
    {
      icon: Building,
      title: 'CRM & Software Integrations',
      description: 'Add our AI agents into your platform via simple integrations. Enhance your marketplace offering with cutting-edge AI communication tools.'
    },
    {
      icon: Target,
      title: 'Strategic Alliances',
      description: 'Collaborate with us for larger projects, from enterprise solutions to region-specific initiatives.'
    }
  ];

  const whyPartner = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Global coverage with telecom integrations in the USA, India, and UAE'
    },
    {
      icon: MessageSquare,
      title: 'Multilingual Support',
      description: (
        <>
          Multilingual AI voice agents supporting <strong>35+ languages</strong>
        </>
      )
    },
    {
      icon: CheckCircle,
      title: 'Enterprise-Grade',
      description: 'Proven, enterprise-grade infrastructure and compliance'
    },
    {
      icon: DollarSign,
      title: 'Clear Revenue Models',
      description: 'Clear revenue share models and fast onboarding'
    }
  ];

  const howItWorks = [
    'Share your details via our partnership form',
    'Our team will reach out within 48 hours',
    'We\'ll design a collaboration plan tailored to your business'
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
              <Handshake className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Partner With</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Euphoric AI</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Join us in shaping the future of AI voice agents. At Euphoric AI, we believe partnerships create stronger growth, faster innovation, and broader reach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <button
                onClick={scrollToForm}
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Apply for Partnership
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Partnerships
            </h2>
            <p className="text-lg text-gray-600">
              Choose the partnership model that best fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="icon-badge mb-6">
                  <partnership.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {partnership.title}
                </h3>
                
                <p className="text-gray-600">
                  {partnership.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPartner.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="icon-badge mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-teal text-white rounded-full flex items-center justify-center text-lg font-bold mr-6">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="partnership-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Enquiry Form
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="card"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="countryRegion" className="block text-sm font-medium text-gray-700 mb-2">
                    Country/Region *
                  </label>
                  <input
                    type="text"
                    id="countryRegion"
                    name="countryRegion"
                    value={formData.countryRegion}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your country/region"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                >
                  <option value="">Select partnership type</option>
                  <option value="reseller">Reseller</option>
                  <option value="integration">Integration</option>
                  <option value="strategic-alliance">Strategic Alliance</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none"
                  placeholder="Tell us about your partnership interest..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold inline-flex items-center justify-center px-8 py-4 text-base font-medium"
              >
                Submit Partnership Inquiry
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;