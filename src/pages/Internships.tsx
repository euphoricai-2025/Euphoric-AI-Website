import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Users, Globe, Zap, CheckCircle, Heart, Code, MessageSquare, UserCheck, TrendingUp, Megaphone, Palette, Search, FileText, Video, Upload, Calendar } from 'lucide-react';

const Internships = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    education: '',
    fieldOfStudy: '',
    currentStatus: '',
    role: '',
    availability: '',
    startDate: '',
    resume: null as File | null,
    linkedinProfile: '',
    portfolio: null as File | null,
    whyEuphoric: '',
    skills: '',
    hearAboutUs: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [name]: file
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

  const programHighlights = [
    'Remote, flexible internships open to candidates in India, UAE, and USA',
    'Real-world exposure across marketing, business development, partnerships, and technology',
    'Direct mentorship from our core team',
    'Internship certificate on completion to boost your career credentials',
    'Duration options: 1 to 3 months, based on your availability and performance',
    'Important dates: Applications close on October 10, 2025 | Program start date: September 11, 2025'
  ];

  const eligibility = [
    'Students, recent graduates, and early professionals from India, UAE, or USA',
    'Strong interest in AI, sales, marketing, partnerships, or design',
    'Good communication skills and ability to work independently in a remote setting'
  ];

  const benefits = [
    'Gain international work experience with a U.S.-headquartered company operating globally',
    'Enhance your resume with a certificate recognized across markets',
    'Opportunity to learn, experiment, and grow under mentorship',
    'Flexible working hours to balance academics and personal commitments'
  ];

  const availableRoles = [
    'Marketing Intern',
    'Business Development Intern',
    'Partnerships Intern',
    'Lead Generation Intern',
    'AI Research Intern',
    'Social Media and Content Intern'
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
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Euphoric AI Internships</span><br />
              <span className="text-gray-900 text-2xl md:text-3xl">Remote Opportunities</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              At Euphoric AI, we are a fast-growing global company headquartered in the U.S. with active presence in India and the UAE. We are inviting students and young professionals to join our remote internship program and gain hands-on experience in the world of AI voice technology and business innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <button
                onClick={() => scrollToForm()}
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Apply for Internship
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Highlights
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {programHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    •
                  </div>
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eligibility
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    •
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Roles
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {availableRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    •
                  </div>
                  <p className="text-gray-900 font-medium">{role}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <button
                onClick={() => scrollToForm()}
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    •
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600">
              Submit your resume and a short statement about your interest in Euphoric AI internships to our careers email. Shortlisted candidates will be contacted for a quick virtual interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-gray-600">
              Send your CV and a short note about why you'd like to intern with us
            </p>
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
                    Phone Number (with country code) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location / City & Country *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                    Educational Background *
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">Select education level</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study / Specialization *
                  </label>
                  <input
                    type="text"
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="e.g., Computer Science, Marketing, etc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="currentStatus" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Status *
                  </label>
                  <select
                    id="currentStatus"
                    name="currentStatus"
                    value={formData.currentStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">Select current status</option>
                    <option value="student">Student</option>
                    <option value="recent-graduate">Recent Graduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Internship Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">Select preferred role</option>
                    <option value="marketing-intern">Marketing Intern</option>
                    <option value="business-development-intern">Business Development Intern</option>
                    <option value="partnerships-intern">Partnerships Intern</option>
                    <option value="lead-generation-intern">Lead Generation Intern</option>
                    <option value="ai-research-intern">AI Research Intern</option>
                    <option value="social-media-content-intern">Social Media and Content Intern</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="part-time">Part-time (10-15 hours/week)</option>
                    <option value="full-time">Full-time (20-30 hours/week)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date Availability *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume / CV Upload *
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile (optional)
                  </label>
                  <input
                    type="url"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio / Work Samples (optional)
                  </label>
                  <input
                    type="file"
                    id="portfolio"
                    name="portfolio"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.zip"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="whyEuphoric" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to intern with Euphoric AI? *
                </label>
                <textarea
                  id="whyEuphoric"
                  name="whyEuphoric"
                  value={formData.whyEuphoric}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none"
                  placeholder="Tell us why you're interested in interning with Euphoric AI (150-200 words)"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  What skills or experiences make you a good fit? *
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none"
                  placeholder="Describe your relevant skills and experiences (150-200 words)"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us? *
                </label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="website">Website</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-gold inline-flex items-center justify-center px-8 py-4 text-base font-medium"
              >
                Submit Internship Application
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;