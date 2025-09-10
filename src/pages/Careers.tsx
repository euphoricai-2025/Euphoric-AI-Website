import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Users, Globe, Zap, CheckCircle, Heart, Code, MessageSquare, Upload, UserCheck, TrendingUp, HeadphonesIcon, Megaphone, Palette, Bot } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    role: '',
    resume: null as File | null,
    coverNote: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const scrollToForm = (roleValue?: string) => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Auto-fill the role if provided
      if (roleValue) {
        setTimeout(() => {
          setFormData(prev => ({
            ...prev,
            role: roleValue
          }));
        }, 300); // Small delay to ensure smooth scroll completes
      }
    }
  };

  const whyWorkWithUs = [
    {
      icon: Zap,
      title: 'Fast-Growing AI Company',
      description: 'Be part of a fast-growing AI company with global reach'
    },
    {
      icon: Globe,
      title: 'Flexible Work Options',
      description: 'Remote, hybrid, and on-site work options available'
    },
    {
      icon: Code,
      title: 'Cutting-Edge Technology',
      description: 'Work with cutting-edge technology in AI, automation, and telecom'
    },
    {
      icon: Users,
      title: 'Career Growth',
      description: 'Career growth, mentorship, and international exposure'
    }
  ];

  const openPositions = [
    {
      title: 'Sales & Partnerships Executive (India/UAE)',
      description: 'Drive revenue growth through strategic partnerships and sales initiatives in India and UAE markets.',
      icon: UserCheck,
      value: 'sales-partnerships-executive'
    },
    {
      title: 'AI Engineer (Remote)',
      description: 'Build and optimize AI voice agent systems, working with cutting-edge machine learning and natural language processing technologies.',
      icon: Bot,
      value: 'ai-engineer'
    },
    {
      title: 'Customer Success Manager',
      description: 'Ensure client satisfaction and success by managing relationships, onboarding, and driving product adoption across our global customer base.',
      icon: HeadphonesIcon,
      value: 'customer-success-manager'
    },
    {
      title: 'Business Development Manager (USA)',
      description: 'Expand our presence in the US market by identifying opportunities, building relationships, and closing enterprise deals.',
      icon: TrendingUp,
      value: 'business-development-manager'
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'Execute data-driven marketing campaigns across channels. Focus on demand generation, SEO, and paid campaigns.',
      icon: Globe,
      value: 'digital-marketing-specialist'
    },
    {
      title: 'Strategic Partnerships Manager',
      description: 'Develop and manage high-value partnerships with technology providers, integrators, and enterprise clients to accelerate growth.',
      icon: Users,
      value: 'strategic-partnerships-manager'
    },
    {
      title: 'Brand Communication Manager',
      description: 'Shape Euphoric AI\'s voice and positioning across global markets. Create compelling brand narratives, manage PR, and ensure consistent communication across channels.',
      icon: Megaphone,
      value: 'brand-communication-manager'
    },
    {
      title: 'Social Media Design / Video Editor',
      description: 'Bring our brand to life with creative visuals, graphics, and short-form videos for LinkedIn, Instagram, and other platforms. Collaborate with marketing to deliver engaging content.',
      icon: Palette,
      value: 'social-media-design-video-editor'
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
              <Briefcase className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Careers</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Work at Euphoric AI</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              We're building human-like AI voice agents that transform how businesses communicate. Join our global team and help us shape the future of voice technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((reason, index) => (
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

      {/* Life at Euphoric AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Life at Euphoric AI
            </h2>
            <p className="text-lg text-gray-600">
              We believe in collaboration, innovation, and impact. Our team spans across India, UAE, and the USA, working together to solve real business problems with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Collaboration
              </h3>
              
              <p className="text-gray-600">
                Work alongside passionate professionals who share your commitment to excellence and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              
              <p className="text-gray-600">
                Push the boundaries of AI technology and create solutions that make a real difference in businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Impact
              </h3>
              
              <p className="text-gray-600">
                See your work transform how businesses communicate and operate across multiple industries globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card h-full"
              >
                <div className="icon-badge mb-6">
                  <position.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {position.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {position.description}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => scrollToForm(position.value)}
                    className="btn-gold inline-flex items-center px-6 py-3 text-sm font-medium"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="card mt-12 text-center bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <div className="icon-badge mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Didn't find your role?
            </h3>
            <p className="text-gray-600 mb-4">
              We're always looking for passionate people. Share your profile with us—we'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => scrollToForm()}
                className="btn-gold inline-flex items-center px-6 py-2 text-sm font-medium"
              >
                Apply Anyway
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Form
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
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your location"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role You're Applying For *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                >
                  <option value="">Select a role</option>
                  <option value="sales-partnerships-executive">Sales & Partnerships Executive (India/UAE)</option>
                  <option value="ai-engineer">AI Engineer (Remote)</option>
                  <option value="customer-success-manager">Customer Success Manager</option>
                  <option value="business-development-manager">Business Development Manager (USA)</option>
                  <option value="digital-marketing-specialist">Digital Marketing Specialist</option>
                  <option value="strategic-partnerships-manager">Strategic Partnerships Manager</option>
                  <option value="brand-communication-manager">Brand Communication Manager</option>
                  <option value="social-media-design-video-editor">Social Media Design / Video Editor</option>
                  <option value="other">Other / Didn't find my role</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume Upload *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-teal file:text-white hover:file:bg-brand-teal/90"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Upload className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
              </div>

              <div className="mb-8">
                <label htmlFor="coverNote" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Note
                </label>
                <textarea
                  id="coverNote"
                  name="coverNote"
                  value={formData.coverNote}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none"
                  placeholder="Tell us why you'd be a great fit for Euphoric AI..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold inline-flex items-center justify-center px-8 py-4 text-base font-medium"
              >
                Submit Application
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;