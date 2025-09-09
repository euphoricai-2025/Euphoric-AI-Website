import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, FileText, Heart, ShoppingBag, Phone, CreditCard, Globe, BarChart3, Languages, Clock, ArrowRight, CheckCircle, Loader2, MessageCircle, Headphones, ChevronDown } from 'lucide-react';
import { TypingAnimation } from '../components/magicui/typing-animation';
import { TextAnimate } from '../components/magicui/text-animate';
import { Highlighter } from '../components/magicui/highlighter';
import { useAuth } from '../contexts/AuthContext';
import { SplineScene } from '../components/ui/spline';

// Country codes data with flags
const countryCodes = [
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
  { code: '+39', country: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: '+34', country: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: '+31', country: 'NL', flag: '🇳🇱', name: 'Netherlands' },
  { code: '+41', country: 'CH', flag: '🇨🇭', name: 'Switzerland' },
  { code: '+43', country: 'AT', flag: '🇦🇹', name: 'Austria' },
  { code: '+32', country: 'BE', flag: '🇧🇪', name: 'Belgium' },
  { code: '+45', country: 'DK', flag: '🇩🇰', name: 'Denmark' },
  { code: '+46', country: 'SE', flag: '🇸🇪', name: 'Sweden' },
  { code: '+47', country: 'NO', flag: '🇳🇴', name: 'Norway' },
  { code: '+358', country: 'FI', flag: '🇫🇮', name: 'Finland' },
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
  { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: '+82', country: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: '+64', country: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
  { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: '+7', country: 'RU', flag: '🇷🇺', name: 'Russia' },
  { code: '+27', country: 'ZA', flag: '🇿🇦', name: 'South Africa' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
  { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: '+60', country: 'MY', flag: '🇲🇾', name: 'Malaysia' },
  { code: '+66', country: 'TH', flag: '🇹🇭', name: 'Thailand' }
];

const Home = () => {
  const { user } = useAuth();
  const [isQuarterly, setIsQuarterly] = useState(true);
  const [demoForm, setDemoForm] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to US
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter countries based on search
  const filteredCountries = countryCodes.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.country.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setCountrySearch(''); // Reset search when closing
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };
  
  const getDisplayPrice = (basePrice) => {
    return isQuarterly ? Math.round(basePrice * 0.9) : basePrice;
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!demoForm.name.trim() || !demoForm.phone.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    // Phone number validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(demoForm.phone)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid phone number' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // EuphoricAI API endpoint for demo calls
      const apiUrl = 'https://app.euphoricai.io/api/zapier/quick_call_result/?api_key=9fd3f6a4-1525-4dbb-ab39-7e916713b8ec';
      
      // Split name into first and last name
      const nameParts = demoForm.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Format phone number with country code
      const fullPhoneNumber = `${selectedCountry.code}${demoForm.phone.replace(/\D/g, '')}`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quick_campaign: 'quickcampa3496ea1',
          contact_number: fullPhoneNumber,
          first_name: firstName,
          last_name: lastName,
          custom1: selectedCountry.name,
          custom2: 'Website Demo Request',
          custom3: new Date().toISOString(),
          custom4: 'homepage_demo_form'
        })
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Demo call request successful:', result);
        setSubmitStatus({ 
          type: 'success', 
          message: 'Perfect! Our AI agent will call you shortly for a live demonstration.' 
        });
        setDemoForm({ name: '', phone: '' });
      } else {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        throw new Error(`API request failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Demo submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Unable to schedule your demo call right now. Please try again or contact support.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <svg className="w-4 h-4 mr-3 text-brand-teal animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                AI-Powered Voice Agents
              </div>

              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.85rem, 4vw, 3.6rem)' }}>
                <span className="text-euphoric-gradient">Smarter AI Voice Agents</span>
                <br />
                <span className="text-gray-900">
                  <TypingAnimation startOnView={true} duration={150} className="text-gray-900">
                    Ready in 30 Minutes
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Handle calls, qualify leads, answer from your knowledge base, route to humans, book appointments, and update your CRM—24/7.
                </TextAnimate>
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Our <span className="font-bold">multilingual</span> agents speak 35+ languages, helping you connect with customers worldwide in a natural, authentic way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                {user ? (
                  <a
                    href="https://app.euphoricai.io/"
                    className="btn-gold inline-flex items-center justify-center gap-2 group"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to="/signup"
                    className="btn-gold inline-flex items-center justify-center gap-2 group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                <a
                  href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Book Demo
                </a>
              </div>
            </div>

            {/* Right Side Card - Interactive Demo Coming Soon */}
            <div className="flex items-center justify-center">
              {/* White Background Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 w-full max-w-sm p-8">
                {/* Brand Gradient Overlay Card */}
                <div className="bg-gradient-to-br from-brand-teal to-brand-cyan rounded-2xl p-6 text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Text Below */}
                <p className="text-gray-700 font-medium text-center">Interactive Demo Coming Soon</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-teal mb-2">30min</div>
              <div className="text-gray-600 font-medium">Setup Time</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-blue mb-2">Twilio</div>
              <div className="text-gray-600 font-medium">Ready Integration</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-gold mb-2">Stripe</div>
              <div className="text-gray-600 font-medium">Secure Billing</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-teal mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Always Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Experience Our </span>
              <span className="text-euphoric-gradient">AI Voice Agent</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Interact with our AI assistant and request a live demo call to see how our voice agents can transform your business communication.
            </p>
          </div>

          <div className="w-full">
            <div className="glass p-0 card-hover overflow-hidden relative min-h-[700px] w-full">
              {/* Background: Interactive 3D Robot - Centered */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-cyan/5 to-brand-sage/10 flex items-center justify-center">
                <div 
                  className="w-full h-full flex items-center justify-center lg:pr-96 relative cursor-pointer"
                  onMouseMove={handleMouseMove}
                >
                  <div className="w-full max-w-5xl h-full flex items-center justify-center relative">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full"
                    />
                    
                    {/* Logo on Robot's Upper Torso/Chest - Interactive */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: (mousePosition.x - 400) * 0.02, // Subtle parallax based on mouse X
                        y: (mousePosition.y - 350) * 0.015, // Subtle parallax based on mouse Y
                      }}
                      transition={{ 
                        delay: 2.5, 
                        duration: 0.8, 
                        ease: "easeOut",
                        x: { type: "spring", stiffness: 100, damping: 30 },
                        y: { type: "spring", stiffness: 100, damping: 30 }
                      }}
                      className="absolute pointer-events-none"
                      style={{
                        top: '42%',
                        left: 'calc(50% - 76px)', // Shifted 76px to the left (15px more than before)
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <motion.img 
                        src="/euphoric-ai-logo.svg" 
                        alt="Euphoric AI" 
                        className="w-38 h-19 opacity-90"
                        style={{
                          width: '153px', // 128px * 1.2 = 153.6px
                          height: '77px', // 64px * 1.2 = 76.8px
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15)) brightness(1.1) contrast(1.1)'
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      />
                    </motion.div>
                    
                    {/* Floating Feature Bubbles - Symmetrical Layout */}
                    {/* LEFT SIDE BUBBLES */}
                    {/* 24/7 Availability Bubble - Top Left */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                      className="absolute top-16 left-8 md:left-16"
                    >
                      <div className="relative">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/20 flex items-center gap-3 max-w-xs">
                          <div className="p-2 bg-gradient-to-br from-brand-teal to-brand-cyan rounded-xl">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Available 24/7</p>
                            <p className="text-xs text-gray-600">Always ready to help</p>
                          </div>
                        </div>
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-md rotate-45 border-r border-b border-white/20"></div>
                      </div>
                    </motion.div>

                    {/* Human-like Voice Bubble - Bottom Left */}
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                      className="absolute bottom-32 left-8 md:left-20"
                    >
                      <div className="relative">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/20 flex items-center gap-3 max-w-xs">
                          <div className="p-2 bg-gradient-to-br from-brand-sage to-brand-bronze rounded-xl">
                            <Headphones className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Human-like Voice</p>
                            <p className="text-xs text-gray-600">Natural conversations</p>
                          </div>
                        </div>
                        {/* Speech bubble tail */}
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white/95 backdrop-blur-md rotate-45 border-l border-t border-white/20"></div>
                      </div>
                    </motion.div>

                    {/* RIGHT SIDE BUBBLES */}
                    {/* Languages Bubble - Top Right */}
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                      className="absolute top-20 right-8 md:right-24"
                    >
                      <div className="relative">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/20 flex items-center gap-3 max-w-xs">
                          <div className="p-2 bg-gradient-to-br from-brand-cyan to-brand-sage rounded-xl">
                            <Languages className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">35+ Languages</p>
                            <p className="text-xs text-gray-600">Switch between multiple languages</p>
                          </div>
                        </div>
                        {/* Speech bubble tail */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/95 backdrop-blur-md rotate-45 border-r border-b border-white/20"></div>
                      </div>
                    </motion.div>

                    {/* Smart AI Bubble - Bottom Right */}
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 1.9, duration: 0.6, ease: "easeOut" }}
                      className="absolute bottom-32 right-8 md:right-24"
                    >
                      <div className="relative">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/20 flex items-center gap-3 max-w-xs">
                          <div className="p-2 bg-gradient-to-br from-brand-bronze to-brand-teal rounded-xl">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Smart AI Brain</p>
                            <p className="text-xs text-gray-600">Learns & adapts</p>
                          </div>
                        </div>
                        {/* Speech bubble tail */}
                        <div className="absolute -top-2 right-6 w-4 h-4 bg-white/95 backdrop-blur-md rotate-45 border-l border-t border-white/20"></div>
                      </div>
                    </motion.div>

                    {/* Floating animation for extra visual appeal */}
                    <motion.div
                      animate={{ 
                        y: [-10, 10, -10],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/3 right-16 hidden lg:block"
                    >
                      <div className="w-3 h-3 bg-brand-teal/40 rounded-full"></div>
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [10, -10, 10],
                        rotate: [2, -2, 2]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                      className="absolute bottom-1/3 left-20 hidden lg:block"
                    >
                      <div className="w-2 h-2 bg-brand-cyan/30 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Side Panel: Demo Form - Right Side on Desktop, Bottom on Mobile */}
              <div className="absolute right-0 bottom-0 lg:top-0 w-full lg:w-96 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-lg border-l-0 lg:border-l border-t lg:border-t-0 border-white/30 flex flex-col justify-center p-8 max-h-80 lg:max-h-none">
                <div className="space-y-6">
                  <div className="text-center">
                    <div 
                      className="mb-4 mx-auto shadow-lg"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '18px',
                        background: 'linear-gradient(135deg, #1f2937, #374151, #6b7280)',
                        color: 'white',
                        display: 'grid',
                        placeItems: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                      }}
                    >
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Try Our AI Voice Agent
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Enter your details for a live demo call
                    </p>
                  </div>

                  <form onSubmit={handleDemoSubmit} className="space-y-4">
                    <div>
                      <input
                        id="demo-name"
                        type="text"
                        placeholder="Your Name"
                        value={demoForm.name}
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div>
                      <div className="relative">
                        <div className="flex">
                          {/* Country Code Dropdown */}
                          <div className="relative" ref={dropdownRef}>
                            <button
                              type="button"
                              onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen);
                                if (!isDropdownOpen) {
                                  setCountrySearch(''); // Reset search when opening
                                }
                              }}
                              className="flex items-center gap-2 px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors"
                              disabled={isSubmitting}
                            >
                              <span className="text-lg">{selectedCountry.flag}</span>
                              <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                              <ChevronDown className="w-4 h-4 text-gray-500" />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                                {/* Search Input */}
                                <div className="p-3 border-b border-gray-100">
                                  <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search countries or codes..."
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20"
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                </div>
                                
                                {/* Country List */}
                                <div className="max-h-48 overflow-y-auto">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((country, index) => (
                                      <button
                                        key={`${country.country}-${index}`}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(country);
                                          setIsDropdownOpen(false);
                                          setCountrySearch('');
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                                      >
                                        <span className="text-lg">{country.flag}</span>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-gray-900 truncate">{country.name}</div>
                                          <div className="text-xs text-gray-500">{country.code}</div>
                                        </div>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                      No countries found
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Phone Input */}
                          <input
                            id="demo-phone"
                            type="tel"
                            placeholder="123 456 7890"
                            value={demoForm.phone}
                            onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-colors bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white"
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {submitStatus.type && (
                      <div className={`p-3 rounded-lg text-sm font-medium ${
                        submitStatus.type === 'success' 
                          ? 'bg-gray-100 text-gray-800 border border-gray-300' 
                          : 'bg-gray-200 text-gray-900 border border-gray-400'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Initiating Call...
                        </>
                      ) : (
                        <>
                          <Phone className="w-5 h-5" />
                          Try Demo Call
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to receive a demo call from our AI agent.
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #a98064, #868c82)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Deploy AI Voice Agents in Just 3 Weeks, Not Months
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get up and running fast with no-code tools and flexible APIs. Most customers launch in under 21 days — no engineers required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #868c82, #6498a0)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Human-Like Voice with &lt;500ms Latency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deliver natural conversations with multilingual agents, low latency, and guaranteed uptime. Responses are fast, clear, and reliable.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6498a0, #42a4bf)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Dedicated Support with AI Voice Experts Behind Every Agent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI engineers, telephony specialists, solution architects, and customer success managers ensure your agents are reliable and operational.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #42a4bf, #a98064)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                Maximum Performance, Minimum Cost
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Affordable solutions for large teams with no add-ons or surprise fees. Run enterprise-grade calls starting at just $0.12/min.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-moss text-sm font-medium mb-4 uppercase tracking-wide">Industry Solutions</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Choose Your </span>
              <span className="text-euphoric-gradient">AI Agents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Domain-specific AI voice agents with proven conversation flows and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lead Qualification Agent */}
            <div className="glass p-8 card-hover flex flex-col h-full">
              <div className="icon-badge-lg mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Qualification Agent</h3>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Automated lead scoring & qualification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Intelligent questions to gauge interest</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Real-time CRM updates & handoffs</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/lead-qualification"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Appointment Booking Agent */}
            <div className="glass p-8 card-hover flex flex-col h-full">
              <div className="icon-badge-lg mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointment Booking Agent</h3>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">24/7 scheduling & calendar management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Automated reminders & confirmations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Rescheduling & cancellation handling</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/appointment-booking"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Customer Support Agent */}
            <div className="glass p-8 card-hover flex flex-col h-full">
              <div className="icon-badge-lg mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Support Agent</h3>

              <div className="space-y-3 mb-6 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Instant answers from knowledge base</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Escalation to human agents when needed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Multi-language support & troubleshooting</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/customer-support-agent"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-moss text-sm font-medium mb-4 uppercase tracking-wide">Advanced Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Enterprise-</span>
              <span className="text-euphoric-gradient">Grade Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to launch and scale AI calling agents across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Setup in 30 Minutes</h3>
              <p className="text-gray-600">Get your AI agent running with our intuitive setup process</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payment Processing</h3>
              <p className="text-gray-600">Enterprise-grade security with Stripe integration</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Phone Integration</h3>
              <p className="text-gray-600">Seamless Twilio integration for worldwide calling</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Comprehensive insights and performance tracking</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-language Support</h3>
              <p className="text-gray-600">Serve customers in their preferred language</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Reliability</h3>
              <p className="text-gray-600">Always-on service with 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #42a4bf 0%, #6498a0 50%, #a98064 100%)' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Explore the New Era of AI Phone Assistants for business.
            </h2>
            <p className="text-white/90 mb-12 max-w-4xl mx-auto text-xl leading-relaxed">
              Should Callin seem like the ideal solution to supercharge your incoming and outgoing calls, let's connect, we invite you to connect with us. We're eager to share more with you.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-cyan font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>


      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              Works With Everything You Already Use.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrates into your stack. Extends your superpowers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Google Drive */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://assets.ringg.ai/images/integrations/google-drive.svg" alt="Google Drive" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Google Drive</h3>
                <p className="text-sm text-gray-600">Save transcripts to cloud</p>
              </div>
            </div>

            {/* Shopify */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://assets.ringg.ai/images/integrations/shopify.svg" alt="Shopify" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Shopify</h3>
                <p className="text-sm text-gray-600">Manage orders via voice</p>
              </div>
            </div>

            {/* Twilio */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://assets.ringg.ai/images/integrations/twilio.svg" alt="Twilio" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Twilio</h3>
                <p className="text-sm text-gray-600">Power secure voice calls</p>
              </div>
            </div>

            {/* Salesforce */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://www.sparkplug.ai/wp-content/uploads/2023/10/salesforce-logo.png" alt="Salesforce" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Salesforce</h3>
                <p className="text-sm text-gray-600">Sync CRM data automatically</p>
              </div>
            </div>

            {/* Telnyx */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://res.cloudinary.com/apideck/image/upload/v1576574777/catalog/telnyx/icon128x128.png" alt="Telnyx" className="w-8 h-8 object-contain rounded" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Telnyx</h3>
                <p className="text-sm text-gray-600">Advanced voice communications</p>
              </div>
            </div>

            {/* GoHighLevel */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://images.leadconnectorhq.com/image/f_webp/q_100/r_180/u_https://cdn.filesafe.space/locationPhotos%2FknES3eSWYIsc5YSZ3YLl%2Fchat-widget-person?alt=media&token=86cfa8e1-6444-4301-927d-5f8491d03c06" alt="GoHighLevel" className="w-8 h-8 object-contain rounded" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">GoHighLevel</h3>
                <p className="text-sm text-gray-600">All-in-one marketing platform</p>
              </div>
            </div>

            {/* Custom Integration Card - Centered */}
            <div className="md:col-span-2 lg:col-span-1 lg:col-start-2 bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                <img src="https://assets.ringg.ai/images/integrations/api.svg" alt="Custom Integration" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">APS/Custom Workflow</h3>
                <p className="text-sm text-gray-600">Build custom voice workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              We support over 35+ languages.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global multilingual support across English variants, European languages,<br />
              Asian & Middle Eastern languages, and multi-language campaigns.
            </p>
          </div>

          {/* English Variants */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">English Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {/* English (United States) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇺🇸</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">English (United States)</h4>
                </div>
              </div>

              {/* English (India) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇮🇳</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">English (India)</h4>
                </div>
              </div>

              {/* English (United Kingdom) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇬🇧</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">English (United Kingdom)</h4>
                </div>
              </div>

              {/* English (Australia) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇦🇺</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">English (Australia)</h4>
                </div>
              </div>

              {/* English (New Zealand) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇳🇿</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">English (New Zealand)</h4>
                </div>
              </div>
            </div>
          </div>

          {/* European Languages */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">European Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* German (Germany) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇩🇪</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">German (Germany)</h4>
                </div>
              </div>

              {/* Spanish (Spain) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇪🇸</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Spanish (Spain)</h4>
                </div>
              </div>

              {/* Spanish (Latin America) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🌎</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Spanish (Latin America)</h4>
                </div>
              </div>

              {/* Portuguese (Portugal) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇵🇹</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Portuguese (Portugal)</h4>
                </div>
              </div>

              {/* Portuguese (Brazil) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇧🇷</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Portuguese (Brazil)</h4>
                </div>
              </div>

              {/* French (France) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇫🇷</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">French (France)</h4>
                </div>
              </div>

              {/* Italian (Italy) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇮🇹</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Italian (Italy)</h4>
                </div>
              </div>

              {/* Dutch (Netherlands) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇳🇱</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Dutch (Netherlands)</h4>
                </div>
              </div>

              {/* Dutch (Belgium) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇧🇪</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Dutch (Belgium)</h4>
                </div>
              </div>

              {/* Polish (Poland) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇵🇱</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Polish (Poland)</h4>
                </div>
              </div>

              {/* Romanian (Romania) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇷🇴</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Romanian (Romania)</h4>
                </div>
              </div>

              {/* Bulgarian (Bulgaria) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇧🇬</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Bulgarian (Bulgaria)</h4>
                </div>
              </div>

              {/* Danish (Denmark) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇩🇰</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Danish (Denmark)</h4>
                </div>
              </div>

              {/* Finnish (Finland) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇫🇮</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Finnish (Finland)</h4>
                </div>
              </div>

              {/* Greek (Greece) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇬🇷</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Greek (Greece)</h4>
                </div>
              </div>

              {/* Hungarian (Hungary) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇭🇺</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Hungarian (Hungary)</h4>
                </div>
              </div>

              {/* Norwegian (Norway) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇳🇴</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Norwegian (Norway)</h4>
                </div>
              </div>

              {/* Slovak (Slovakia) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇸🇰</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Slovak (Slovakia)</h4>
                </div>
              </div>

              {/* Swedish (Sweden) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇸🇪</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Swedish (Sweden)</h4>
                </div>
              </div>

              {/* Catalan (Spain) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇪🇸</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Catalan (Spain)</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Asian & Middle Eastern Languages */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Asian & Middle Eastern Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* Hindi (India) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇮🇳</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Hindi (India)</h4>
                </div>
              </div>

              {/* Japanese (Japan) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇯🇵</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Japanese (Japan)</h4>
                </div>
              </div>

              {/* Chinese (China) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇨🇳</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Chinese (China)</h4>
                </div>
              </div>

              {/* Korean (South Korea) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇰🇷</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Korean (South Korea)</h4>
                </div>
              </div>

              {/* Russian (Russia) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇷🇺</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Russian (Russia)</h4>
                </div>
              </div>

              {/* Turkish (Turkey) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇹🇷</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Turkish (Turkey)</h4>
                </div>
              </div>

              {/* Vietnamese (Vietnam) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇻🇳</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Vietnamese (Vietnam)</h4>
                </div>
              </div>

              {/* Indonesian (Indonesia) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇮🇩</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Indonesian (Indonesia)</h4>
                </div>
              </div>

              {/* Thai (Thailand) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇹🇭</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Thai (Thailand)</h4>
                </div>
              </div>

              {/* Malay (Malaysia) */}
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                <div className="text-2xl flex-shrink-0">🇲🇾</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Malay (Malaysia)</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-language Option */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Multi-language Option</h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow max-w-md w-full">
                <div className="text-2xl flex-shrink-0">🌐</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">Multiple Languages</h4>
                  <p className="text-xs text-gray-500">For multilingual campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;