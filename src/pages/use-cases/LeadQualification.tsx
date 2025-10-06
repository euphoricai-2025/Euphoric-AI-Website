import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, TrendingUp, Target, Users, BarChart3, Search, ChevronDown, Play, Shield, Zap } from 'lucide-react';
import { TextAnimate } from '../../components/magicui/text-animate';
import { TypingAnimation } from '../../components/magicui/typing-animation';

const LeadQualificationUseCase = () => {
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countryCodes = [
    { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: '+49', country: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: '+31', country: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+46', country: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: '+41', country: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: '+32', country: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: '+351', country: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'GR', name: 'Greece', flag: '🇬🇷' },
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
    { code: '+353', country: 'IE', name: 'Ireland', flag: '🇮🇪' },
    { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
    { code: '+86', country: 'CN', name: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+66', country: 'TH', name: 'Thailand', flag: '🇹🇭' },
    { code: '+84', country: 'VN', name: 'Vietnam', flag: '🇻🇳' },
    { code: '+63', country: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: '+62', country: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+852', country: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
    { code: '+886', country: 'TW', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+64', country: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+27', country: 'ZA', name: 'South Africa', flag: '🇿🇦' },
    { code: '+234', country: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+254', country: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: '+20', country: 'EG', name: 'Egypt', flag: '🇪🇬' },
    { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+974', country: 'QA', name: 'Qatar', flag: '🇶🇦' },
    { code: '+965', country: 'KW', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+973', country: 'BH', name: 'Bahrain', flag: '🇧🇭' },
    { code: '+968', country: 'OM', name: 'Oman', flag: '🇴🇲' },
    { code: '+961', country: 'LB', name: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'JO', name: 'Jordan', flag: '🇯🇴' },
    { code: '+964', country: 'IQ', name: 'Iraq', flag: '🇮🇶' },
    { code: '+98', country: 'IR', name: 'Iran', flag: '🇮🇷' },
    { code: '+90', country: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: '+972', country: 'IL', name: 'Israel', flag: '🇮🇱' },
    { code: '+55', country: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: '+54', country: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: '+52', country: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: '+56', country: 'CL', name: 'Chile', flag: '🇨🇱' },
    { code: '+57', country: 'CO', name: 'Colombia', flag: '🇨🇴' },
    { code: '+51', country: 'PE', name: 'Peru', flag: '🇵🇪' },
    { code: '+58', country: 'VE', name: 'Venezuela', flag: '🇻🇪' },
    { code: '+593', country: 'EC', name: 'Ecuador', flag: '🇪🇨' },
    { code: '+598', country: 'UY', name: 'Uruguay', flag: '🇺🇾' },
    { code: '+595', country: 'PY', name: 'Paraguay', flag: '🇵🇾' },
    { code: '+591', country: 'BO', name: 'Bolivia', flag: '🇧🇴' }
  ];

  const filteredCountries = countryCodes.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.country.toLowerCase().includes(countrySearch.toLowerCase())
  );

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

  const handleCountrySelect = (country: typeof selectedCountry) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setCountrySearch('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://calendly.com/euphoricai-ai-voiceagents-demo/45';
  };

  const useCases = [
    {
      title: 'Automated Lead Scoring & Prioritization',
      description: 'Intelligently evaluate and score leads based on predefined criteria, ensuring your sales team focuses on the highest-value prospects first.',
      problem: 'Sales teams waste 67% of their time on unqualified leads. Manual lead qualification processes are inconsistent, time-consuming, and often miss crucial qualifying information, resulting in $1.2M in lost revenue annually for mid-sized companies.',
      results: 'Increase qualified lead conversion by 85% and reduce sales cycle time by 40%',
      icon: Target,
      features: [
        'Multi-criteria lead scoring with customizable weightings',
        'Real-time qualification based on budget, authority, need, and timeline',
        'Integration with CRM systems for automatic lead routing',
        'Behavioral analysis and engagement level assessment',
        'Competitor comparison and pricing sensitivity evaluation',
        'Lead nurturing recommendations for non-qualified prospects'
      ]
    },
    {
      title: 'Intelligent Conversation Management',
      description: 'Conduct natural, engaging conversations that ask the right questions at the right time to uncover genuine buying intent and pain points.',
      problem: 'Manual qualification calls are inconsistent, with different sales reps asking different questions. This leads to poor data quality, missed opportunities, and inconsistent follow-up strategies across the sales team.',
      results: 'Improve lead qualification accuracy by 78% and reduce human intervention by 60%',
      icon: Users,
      features: [
        'Dynamic questioning based on lead responses and behavior',
        'Pain point discovery through conversational AI techniques',
        'Decision-maker identification and contact mapping',
        'Budget qualification with tactful pricing discussions',
        'Timeline assessment and urgency evaluation',
        'Objection handling with intelligent response suggestions'
      ]
    },
    {
      title: 'Real-time CRM Integration & Handoffs',
      description: 'Seamlessly integrate with your existing CRM systems to update lead information instantly and provide smooth handoffs to your sales team.',
      problem: 'Lead data gets lost in transition between marketing and sales. Manual data entry creates delays, errors, and inconsistencies. Sales teams often work with outdated or incomplete lead information, missing critical opportunities.',
      results: 'Reduce data entry time by 90% and improve lead follow-up speed by 75%',
      icon: BarChart3,
      features: [
        'Real-time CRM updates with structured data capture',
        'Automated lead routing based on territory and expertise',
        'Comprehensive conversation summaries for sales teams',
        'Lead status tracking and pipeline management',
        'Automated follow-up scheduling and reminder systems',
        'Integration with popular CRM platforms (Salesforce, HubSpot, Pipedrive)'
      ]
    }
  ];

  const results = [
    { metric: '85%', label: 'Increase in Qualified Leads', description: 'Better lead scoring and prioritization' },
    { metric: '78%', label: 'Improved Qualification Accuracy', description: 'Intelligent conversation management' },
    { metric: '90%', label: 'Reduction in Data Entry', description: 'Automated CRM integration' },
    { metric: '$1.2M+', label: 'Annual Revenue Recovery', description: 'From better lead qualification' }
  ];

  const industriesWeServe = [
    {
      name: 'B2B Software Companies',
      description: 'SaaS and software solution providers qualifying enterprise prospects',
      painPoint: 'Demo requests flood in, but only 15% are qualified buyers, wasting sales resources'
    },
    {
      name: 'Financial Services',
      description: 'Banks, insurance companies, and investment firms qualifying high-value clients',
      painPoint: 'Compliance requirements make manual qualification slow and error-prone'
    },
    {
      name: 'Real Estate Agencies',
      description: 'Property developers and agencies qualifying serious buyers and investors',
      painPoint: 'Agents spend 80% of time on unqualified leads instead of closing deals'
    },
    {
      name: 'Professional Services',
      description: 'Consulting, legal, and accounting firms qualifying potential clients',
      painPoint: 'Complex service offerings require detailed qualification that manual processes miss'
    },
    {
      name: 'Manufacturing & Wholesale',
      description: 'B2B manufacturers qualifying distributors and bulk buyers',
      painPoint: 'Long sales cycles require consistent nurturing that manual processes cannot maintain'
    },
    {
      name: 'Healthcare Technology',
      description: 'Medical device and healthcare software companies qualifying healthcare providers',
      painPoint: 'Regulatory compliance and technical requirements make qualification complex and time-consuming'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Lead Capture & Initial Contact',
      description: 'AI agent receives inbound leads from your website, forms, or campaigns and initiates contact within 60 seconds',
      icon: Target
    },
    {
      step: '2',
      title: 'Intelligent Qualification Process',
      description: 'Conducts natural conversations to assess budget, authority, need, and timeline using predefined qualification criteria',
      icon: Users
    },
    {
      step: '3',
      title: 'Scoring & CRM Integration',
      description: 'Automatically scores leads based on qualification responses and updates your CRM with detailed conversation summaries',
      icon: BarChart3
    },
    {
      step: '4',
      title: 'Handoff to Sales Team',
      description: 'Routes qualified leads to appropriate sales reps with complete context and schedules follow-up activities',
      icon: ArrowRight
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface">
      {/* Hero Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Target className="w-4 h-4 mr-3 text-brand-teal animate-pulse" />
                AI Lead Qualification
              </div>

              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Lead Qualification</span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  <TypingAnimation startOnView={true} duration={150} className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                    Voice AI Agents
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Automatically qualify leads, improve sales efficiency, and focus human resources on high-value prospects with AI agents that work 24/7.
                </TextAnimate>
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                <span className="font-bold text-red-600">67% of sales time wasted on unqualified leads?</span> Our AI qualifies prospects in real-time, increasing conversion rates by <span className="font-bold text-green-600">85%</span> while reducing <span className="font-bold">sales cycle time by 40%</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/pricing"
                  className="btn-gold inline-flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Lead Qualification Demo
                </a>
              </div>
            </div>

            {/* Right Side - Demo Form */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 rounded-3xl shadow-2xl border border-gray-200/50 p-8 backdrop-blur-sm"
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-gold/20 to-brand-teal/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-full blur-lg"></div>

                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl mb-4 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Book Lead Qualification Demo</h3>
                    <p className="text-sm text-gray-600">See how AI can transform your lead qualification process</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div className="relative" ref={dropdownRef}>
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-l-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200 min-w-[120px]"
                        >
                          <span className="flex items-center gap-2 text-sm">
                            <span>{selectedCountry.flag}</span>
                            <span className="font-medium">{selectedCountry.code}</span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <input
                          type="tel"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="flex-1 px-4 py-3 border border-l-0 border-gray-200 rounded-r-xl focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                          required
                        />
                      </div>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-60 overflow-hidden">
                          <div className="p-3 border-b border-gray-100">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                placeholder="Search countries..."
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 transition-colors text-sm"
                              />
                            </div>
                          </div>
                          <div className="max-h-44 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <button
                                key={`${country.country}-${country.code}`}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm transition-colors"
                              >
                                <span className="text-lg">{country.flag}</span>
                                <span className="font-medium min-w-[3rem]">{country.code}</span>
                                <span className="text-gray-600 truncate">{country.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()}
                      className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Book Lead Qualification Demo
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">
              See the measurable impact AI lead qualification has on business performance
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {result.metric}
                </div>
                <div className="font-semibold text-gray-900 mb-1 text-sm">
                  {result.label}
                </div>
                <div className="text-xs text-gray-600">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lead Qualification Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive AI solutions for every aspect of lead qualification
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              >
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl flex items-center justify-center mr-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Problem Card */}
                      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          </div>
                          <h4 className="font-semibold text-red-800">Current Challenge</h4>
                        </div>
                        <p className="text-red-700 text-sm leading-relaxed">{useCase.problem}</p>
                      </div>

                      {/* Results Card */}
                      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          </div>
                          <h4 className="font-semibold text-green-800">AI Solution Results</h4>
                        </div>
                        <p className="text-green-700 text-sm leading-relaxed">{useCase.results}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Lead qualification solutions tailored for various business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesWeServe.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {industry.description}
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs text-red-700">
                    <strong>Challenge:</strong> {industry.painPoint}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple 4-step process to transform your lead qualification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-brand-gold to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Qualify Leads Automatically?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of businesses using AI voice agents to improve lead quality, accelerate sales cycles, and maximize revenue from every prospect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadQualificationUseCase;