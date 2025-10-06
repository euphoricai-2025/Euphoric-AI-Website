import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Calendar, Phone, UserCheck, ArrowRight, CheckCircle, TrendingUp, Clock, Settings, Play, Globe, BarChart3, MessageCircle, Headphones, Loader2, CreditCard, Users, Clipboard, ChevronDown, Search, Wrench } from 'lucide-react';
import { TypingAnimation } from '../../components/magicui/typing-animation';
import { TextAnimate } from '../../components/magicui/text-animate';
import { AnimatedBeam, Circle, EuphoricAIHub } from '../../components/AnimatedBeam';

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
  { code: '+233', country: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: '+60', country: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+66', country: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+63', country: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: '+62', country: 'ID', name: 'Indonesia', flag: '🇮🇩' }
];

const HomeServices = () => {
  const [demoForm, setDemoForm] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // AnimatedBeam refs
  const containerRef = useRef<HTMLDivElement>(null);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const leadsRef = useRef<HTMLDivElement>(null);
  const followupRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

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

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = 'https://calendly.com/euphoricai-ai-voiceagents-demo/45';
    }, 2000);
  };

  const useCases = [
    {
      icon: Calendar,
      title: 'Emergency Service Dispatch & Scheduling',
      description: 'Instantly respond to emergency calls, assess urgency, dispatch technicians, and provide arrival time updates to homeowners in crisis situations.',
      stats: 'Reduce emergency response time by 50% and increase customer satisfaction during crisis by 70%',
      realWorldPainPoint: 'Home service emergencies like plumbing leaks or HVAC failures create panic for homeowners. Manual dispatching delays response times, leading to property damage and frustrated customers who call competitors.',
      features: [
        'Emergency assessment and triage system',
        'Real-time technician availability and dispatch',
        'Customer location verification and directions',
        'Arrival time updates and progress tracking',
        'Emergency service pricing and authorization',
        'Follow-up coordination and service completion verification'
      ],
      benefits: [
        'Reduce emergency response time by 50%',
        'Increase crisis satisfaction by 70%',
        'Prevent customer loss to competitors',
        'Minimize property damage from delays'
      ]
    },
    {
      icon: UserCheck,
      title: 'Lead Qualification & Project Estimation',
      description: 'Qualify home improvement leads by collecting project details, budget ranges, and timelines before connecting with sales teams for accurate estimates.',
      stats: 'Increase qualified leads by 65% and reduce sales team time spent on unqualified prospects by 70%',
      realWorldPainPoint: 'Home service contractors waste 60% of their sales time on unqualified leads or projects outside their expertise, losing money on estimates that never convert to jobs.',
      features: [
        'Project scope and requirement gathering',
        'Budget range qualification and timeline assessment',
        'Photo collection for preliminary evaluation',
        'Service area and availability verification',
        'Appointment scheduling with qualified prospects only',
        'Estimate preparation and follow-up coordination'
      ],
      benefits: [
        'Increase qualified leads by 65%',
        'Reduce wasted sales time by 70%',
        'Improve conversion rates significantly',
        'Focus on profitable projects only'
      ]
    },
    {
      icon: Phone,
      title: 'Seasonal Maintenance & Upselling',
      description: 'Proactively contact existing customers for seasonal maintenance, identify additional service needs, and schedule preventive services to maximize customer lifetime value.',
      stats: 'Increase repeat business by 45% and seasonal service bookings by 80%',
      realWorldPainPoint: 'Home service companies struggle to maintain regular contact with past customers, missing opportunities for recurring maintenance contracts and seasonal services, leading to 70% customer churn.',
      features: [
        'Seasonal service reminder campaigns',
        'Maintenance history review and recommendations',
        'Additional service need identification',
        'Preventive maintenance scheduling',
        'Service contract renewal management',
        'Customer satisfaction surveys and feedback collection'
      ],
      benefits: [
        'Increase repeat business by 45%',
        'Boost seasonal bookings by 80%',
        'Reduce customer churn by 70%',
        'Maximize customer lifetime value'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Emergency Response Delays',
      description: 'Manual dispatching delays emergency response, causing property damage',
      impact: 'Customers call competitors when emergencies aren\'t handled quickly'
    },
    {
      title: 'Unqualified Lead Waste',
      description: 'Contractors waste 60% of sales time on poor-fit prospects',
      impact: 'Money lost on estimates that never convert to actual jobs'
    },
    {
      title: 'Customer Retention Loss',
      description: 'Poor follow-up leads to 70% customer churn',
      impact: 'Missing recurring maintenance opportunities and repeat business'
    }
  ];

  const results = [
    { metric: '50%', label: 'Faster Emergency Response', description: 'Instant dispatch system' },
    { metric: '65%', label: 'More Qualified Leads', description: 'Better pre-screening' },
    { metric: '45%', label: 'Higher Repeat Business', description: 'Proactive follow-up' },
    { metric: '80%', label: 'Seasonal Booking Increase', description: 'Automated reminders' }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface">
      {/* Hero Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Home className="w-4 h-4 mr-3 text-brand-teal" />
                Home Services Growth AI
              </div>

              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Home Services</span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  <TypingAnimation startOnView={true} duration={150} className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                    Voice AI Agents
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Handle emergencies instantly, qualify leads efficiently, and grow repeat business with AI agents built for home service contractors.
                </TextAnimate>
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                <span className="font-bold text-red-600">60% sales time wasted on bad leads?</span> Our AI qualifies leads <span className="font-bold text-green-600">65% better</span> while cutting <span className="font-bold">emergency response time by 50%</span>.
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
                  Home Services Demo
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
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl mb-4 shadow-lg">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Book Home Services Demo
                      </h3>
                      <p className="text-gray-600 text-sm">
                        See automated contractor operations in action
                      </p>
                    </div>

                    <form onSubmit={handleDemoSubmit} className="space-y-4">
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={demoForm.name}
                          onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 transition-all bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                          disabled={isSubmitting}
                          required
                        />
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={demoForm.email}
                          onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 transition-all bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                          disabled={isSubmitting}
                          required
                        />
                      </motion.div>

                      {/* Phone Number Field with Country Code Dropdown */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative"
                      >
                        <div className="flex">
                          {/* Country Code Dropdown */}
                          <div className="relative" ref={dropdownRef}>
                            <button
                              type="button"
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className="flex items-center px-3 py-3 border-2 border-gray-200 rounded-l-xl bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md transition-all border-r-0 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 min-w-[100px]"
                              disabled={isSubmitting}
                            >
                              <span className="mr-2">{selectedCountry.flag}</span>
                              <span className="text-gray-700 font-medium text-sm">{selectedCountry.code}</span>
                              <ChevronDown className={`w-4 h-4 ml-2 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                              <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-80 overflow-hidden">
                                <div className="p-3 border-b border-gray-200">
                                  <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                      type="text"
                                      placeholder="Search country or code..."
                                      value={countrySearch}
                                      onChange={(e) => setCountrySearch(e.target.value)}
                                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm"
                                      autoFocus
                                    />
                                  </div>
                                </div>
                                <div className="overflow-y-auto max-h-60">
                                  {filteredCountries.map((country, index) => (
                                    <button
                                      key={`${country.code}-${country.country}`}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountry(country);
                                        setIsDropdownOpen(false);
                                        setCountrySearch('');
                                      }}
                                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors border-none"
                                    >
                                      <span className="text-lg">{country.flag}</span>
                                      <span className="text-sm font-medium text-gray-700 min-w-[50px]">{country.code}</span>
                                      <span className="text-sm text-gray-600 truncate">{country.name}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Phone Number Input */}
                          <input
                            type="tel"
                            placeholder="123 456 7890"
                            value={demoForm.phone}
                            onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-r-xl bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md transition-all focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 font-medium placeholder:text-gray-500"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting || !demoForm.name.trim() || !demoForm.email.trim() || !demoForm.phone.trim()}
                          className="w-full py-4 px-6 rounded-xl font-bold bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:from-brand-teal/90 hover:to-brand-blue/90 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Booking Demo...
                            </>
                          ) : (
                            <>
                              <Home className="w-5 h-5" />
                              Book Home Services Demo
                            </>
                          )}
                        </button>
                      </motion.div>

                      {/* Status Message */}
                      {submitStatus.type && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-3 rounded-lg text-sm font-medium ${
                            submitStatus.type === 'success' 
                              ? 'bg-green-50 text-green-800 border border-green-200' 
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}
                        >
                          {submitStatus.message}
                        </motion.div>
                      )}
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-euphoric-surface relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-tl from-brand-gold/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 w-full mx-auto">
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-teal/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-teal to-brand-blue bg-clip-text mb-3">
                    50%
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Faster Emergency Response</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-blue/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-blue to-brand-teal bg-clip-text mb-3">
                    65%
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Better Lead Qualification</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-gold to-brand-gray bg-clip-text mb-3">
                    45%
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">More Repeat Business</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gray/20 to-brand-gray/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-gray/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-gray to-brand-teal bg-clip-text mb-3">
                    80%
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Seasonal Booking Increase</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-euphoric-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-blue/30 to-brand-gray/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gray p-8 rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl min-h-[520px] flex flex-col">
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="white" />
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                      </svg>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-white/80 text-base leading-relaxed mb-6">{useCase.description}</p>

                    {/* Problem Subcard - Red Background */}
                    <div className="bg-red-50/95 backdrop-blur-sm border-l-4 border-red-400 rounded-lg p-4 mb-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-semibold text-red-800 mb-1">Current Challenge:</h4>
                          <p className="text-sm text-red-700">{useCase.realWorldPainPoint}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results Subcard - Green Background */}
                    <div className="flex-grow">
                      {useCase.stats && (
                        <div className="bg-green-50/95 backdrop-blur-sm border-l-4 border-green-400 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <TrendingUp className="h-5 w-5 text-green-400 mt-0.5" />
                            </div>
                            <div className="ml-3">
                              <h4 className="text-sm font-semibold text-green-800 mb-1">Proven Results:</h4>
                              <p className="text-sm font-medium text-green-700">{useCase.stats}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-euphoric-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-blue/20 to-brand-gray/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-full px-6 py-2 mb-6">
                  <Home className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700 font-semibold">Home Services Integrations</span>
                </div>
                
                <h2 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                  <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Connects With</span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Your Contractor Stack</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Seamless integration with scheduling systems, CRM platforms, and field service tools for complete business automation.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Scheduling Systems</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-gray rounded-lg flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">CRM Platforms</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-gray to-brand-teal rounded-lg flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Field Service Tools</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Communication Systems</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                ref={containerRef}
                className="relative flex h-[500px] w-full max-w-[700px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-white/40 via-white/20 to-white/40 backdrop-blur-sm shadow-2xl mx-auto border border-white/40 p-20"
              >
                <EuphoricAIHub ref={centerRef} />

                <Circle ref={emergencyRef} className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <Calendar className="w-6 h-6 text-gray-700" />
                </Circle>
                
                <Circle ref={leadsRef} className="absolute left-8 top-1/2 -translate-y-1/2">
                  <UserCheck className="w-6 h-6 text-gray-700" />
                </Circle>
                
                <Circle ref={followupRef} className="absolute right-8 top-1/2 -translate-y-1/2">
                  <Phone className="w-6 h-6 text-gray-700" />
                </Circle>

                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={emergencyRef}
                  toRef={centerRef}
                  duration={4}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={leadsRef}
                  toRef={centerRef}
                  duration={4}
                  delay={0.7}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={followupRef}
                  toRef={centerRef}
                  duration={4}
                  delay={1.4}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-bold mb-6 leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
              <span className="text-white">Ready to Grow</span>
              <br />
              <span className="text-white">Your Home Services Business?</span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join contractors using AI agents to handle emergencies, qualify leads, and maximize customer lifetime value.
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
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;