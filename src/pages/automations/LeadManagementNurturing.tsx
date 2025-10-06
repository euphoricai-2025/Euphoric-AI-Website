import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Mail, Calendar, Phone, ArrowRight, CheckCircle, TrendingUp, Shield, Zap, Search, ChevronDown, BarChart3, Clock, Star } from 'lucide-react';
import { TypingAnimation } from '../../components/magicui/typing-animation';
import { TextAnimate } from '../../components/magicui/text-animate';

// Comprehensive country codes with flags
const countryCodes = [
  { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
  { code: '+1', country: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+49', country: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
  { code: '+39', country: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+41', country: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: '+32', country: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: '+45', country: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: '+46', country: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: '+358', country: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: '+351', country: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: '+353', country: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+81', country: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: '+86', country: 'CN', name: 'China', flag: '🇨🇳' },
  { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
  { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+66', country: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+63', country: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: '+62', country: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+852', country: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: '+973', country: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+965', country: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+968', country: 'OM', name: 'Oman', flag: '🇴🇲' },
  { code: '+972', country: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: '+90', country: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: '+7', country: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: '+48', country: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: '+420', country: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+36', country: 'HU', name: 'Hungary', flag: '🇭🇺' },
  { code: '+40', country: 'RO', name: 'Romania', flag: '🇷🇴' },
  { code: '+359', country: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+385', country: 'HR', name: 'Croatia', flag: '🇭🇷' },
  { code: '+386', country: 'SI', name: 'Slovenia', flag: '🇸🇮' },
  { code: '+421', country: 'SK', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+370', country: 'LT', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+371', country: 'LV', name: 'Latvia', flag: '🇱🇻' },
  { code: '+372', country: 'EE', name: 'Estonia', flag: '🇪🇪' },
  { code: '+55', country: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: '+54', country: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: '+58', country: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+27', country: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: '+20', country: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: '+234', country: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: '+233', country: 'GH', name: 'Ghana', flag: '🇬🇭' }
];

const LeadManagementNurturing = () => {
  const [demoForm, setDemoForm] = useState({ name: '', phone: '', email: '' });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter countries based on search
  const filteredCountries = countryCodes.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setCountrySearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setDemoForm(prev => ({ ...prev, [field]: value }));
  };

  const automations = [
    {
      icon: Target,
      title: 'Lead Qualification & Scoring',
      description: 'Automatically qualify and score incoming leads by asking the right questions and connecting to your CRM system.',
      features: [
        'Budget qualification and timeline assessment',
        'Decision maker identification',
        'Pain point discovery through conversation',
        'CRM integration and lead scoring',
        'Automated lead routing to sales team',
        'Real-time qualification reports'
      ],
      benefits: [
        'Increase qualified leads by 85%',
        'Reduce sales team screening time by 60%',
        'Improve conversion rates by 40%',
        'Never miss a potential opportunity'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Mail,
      title: 'Lead Nurturing Campaigns',
      description: 'Keep prospects engaged with personalized email and SMS sequences that guide them through your sales funnel.',
      features: [
        'Multi-channel messaging (email, SMS, voice)',
        'Behavioral trigger-based campaigns',
        'Personalized content delivery',
        'A/B testing for optimization',
        'Engagement tracking and analytics',
        'Automated follow-up scheduling'
      ],
      benefits: [
        'Increase lead engagement by 70%',
        'Reduce time to close by 35%',
        'Improve email open rates by 60%',
        'Boost conversion rates by 45%'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling Automation',
      description: 'Let prospects book appointments 24/7 while automatically syncing with your calendar and sending reminders.',
      features: [
        '24/7 automated booking system',
        'Real-time calendar synchronization',
        'Multi-channel appointment reminders',
        'Rescheduling and cancellation handling',
        'Buffer time and travel coordination',
        'No-show reduction strategies'
      ],
      benefits: [
        'Reduce no-shows by 80%',
        'Increase booking conversion by 70%',
        'Save 15+ hours weekly on scheduling',
        'Improve customer satisfaction scores'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Phone,
      title: 'Follow-up Automation System',
      description: 'Stay in touch with prospects and customers through intelligent, personalized follow-up campaigns.',
      features: [
        'Intelligent follow-up sequences',
        'Multi-touch campaign management',
        'Personalized messaging based on behavior',
        'Response tracking and analysis',
        'Lead temperature monitoring',
        'Automated handoff to sales team'
      ],
      benefits: [
        'Increase response rates by 65%',
        'Reduce manual follow-up time by 90%',
        'Improve lead nurturing consistency',
        'Boost sales pipeline velocity by 50%'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Users,
      title: 'Lead Capture & Distribution',
      description: 'Capture leads from multiple sources and instantly distribute them to the right sales representatives.',
      features: [
        'Multi-channel lead capture (website, social, ads)',
        'Real-time lead distribution',
        'Territory-based routing',
        'Lead source tracking and attribution',
        'Duplicate detection and merging',
        'Performance analytics and reporting'
      ],
      benefits: [
        'Capture 40% more leads from existing traffic',
        'Reduce lead response time to under 60 seconds',
        'Improve lead assignment efficiency',
        'Increase overall conversion rates by 55%'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: BarChart3,
      title: 'Lead Analytics & Reporting',
      description: 'Track lead performance, conversion rates, and ROI with automated reporting and dashboard updates.',
      features: [
        'Real-time lead performance dashboards',
        'Conversion rate tracking by source',
        'ROI calculation and reporting',
        'Lead lifecycle analytics',
        'Sales team performance metrics',
        'Automated monthly reports'
      ],
      benefits: [
        'Improve marketing ROI visibility by 80%',
        'Identify top-performing channels',
        'Optimize lead generation strategies',
        'Increase data-driven decision making'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    }
  ];

  const keyStats = [
    { metric: '85%', label: 'More Qualified Leads', description: 'AI qualification ensures sales teams work with high-potential prospects' },
    { metric: '60 sec', label: 'Response Time', description: 'Never lose a hot lead with instant qualification and routing' },
    { metric: '40%', label: 'Higher Conversion', description: 'Personalized nurturing sequences improve close rates' },
    { metric: '90%', label: 'Less Manual Work', description: 'Automate repetitive lead management tasks' }
  ];

  const industries = [
    { name: 'Real Estate', description: 'Qualify property inquiries and nurture potential buyers' },
    { name: 'Financial Services', description: 'Screen investment prospects and schedule consultations' },
    { name: 'Healthcare', description: 'Manage patient inquiries and appointment scheduling' },
    { name: 'Insurance', description: 'Qualify policy prospects and follow up on quotes' },
    { name: 'E-commerce', description: 'Recover abandoned carts and nurture repeat customers' },
    { name: 'B2B Services', description: 'Qualify enterprise prospects and manage sales pipeline' }
  ];

  const howItWorks = [
    { step: 1, title: 'Connect Your CRM', description: 'Integrate with your existing CRM and lead management systems' },
    { step: 2, title: 'Configure Workflows', description: 'Set up qualification criteria and nurturing sequences' },
    { step: 3, title: 'Deploy AI Agents', description: 'Launch automated lead management and qualification' },
    { step: 4, title: 'Monitor Performance', description: 'Track metrics and optimize your lead conversion process' }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "TechStart Solutions",
      content: "Our lead qualification process is now 90% automated. We're converting 65% more qualified leads and our sales team can focus on closing deals instead of screening prospects."
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Manager",
      company: "GrowthPath Consulting", 
      content: "Lead nurturing automation has transformed our pipeline. We've increased email engagement by 70% and reduced our sales cycle by 35%. The ROI is incredible."
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Lead Management</span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  <TypingAnimation startOnView={true} duration={150} className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                    Voice AI Agents
                  </TypingAnimation>
                </span>
              </h1>
              
              <TextAnimate 
                animation="blurInUp" 
                by="word" 
                className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
                once
              >
                Transform your lead generation and nurturing process with AI-powered automation solutions. Qualify prospects faster, nurture leads more effectively, and convert more opportunities into customers.
              </TextAnimate>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                >
                  Start Automating Leads
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-brand-teal text-brand-teal font-bold py-4 px-8 rounded-xl hover:bg-brand-teal hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Book Demo
                </a>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Lead Automation Demo</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={demoForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={demoForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="flex gap-2">
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-xl hover:border-brand-teal focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white min-w-[120px]"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="text-sm font-medium">{selectedCountry.code}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-hidden">
                          <div className="p-2 border-b border-gray-100">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                              <input
                                type="text"
                                placeholder="Search countries..."
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                              />
                            </div>
                          </div>
                          <div className="max-h-48 overflow-y-auto">
                            {filteredCountries.map((country, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors"
                              >
                                <span className="text-lg">{country.flag}</span>
                                <span className="text-sm font-medium">{country.code}</span>
                                <span className="text-sm text-gray-600 truncate">{country.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      value={demoForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Lead Automation Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-brand-teal mb-2">{stat.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Lead Management Automations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions for every stage of your lead management process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automations.map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-brand-teal mb-6">
                  <automation.icon className="w-12 h-12" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{automation.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{automation.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {automation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {automation.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Platforms:</h4>
                    <div className="flex gap-2 flex-wrap">
                      {automation.platforms.map((platform, idx) => (
                        <span key={idx} className="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded text-xs font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with lead management automation in four simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lead management automation works across all business sectors to improve sales efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are transforming their lead management with AI automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-brand-teal">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-blue to-brand-gray rounded-3xl p-12 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
            >
              Ready to Transform Your Lead Management?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-4xl mx-auto"
            >
              Start automating your lead qualification, nurturing, and conversion process today. Transform your business operations with intelligent automation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="bg-white hover:bg-white text-brand-black hover:text-brand-gray px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center group"
              >
                Start Automating Leads
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Book Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadManagementNurturing;