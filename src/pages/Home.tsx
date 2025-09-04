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
  const [isQuarterly, setIsQuarterly] = useState(false);
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
      // Replace with your actual webhook URL
      const webhookUrl = import.meta.env.VITE_DEMO_WEBHOOK_URL || 'https://your-webhook-url.com/demo';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: demoForm.name,
          phone: `${selectedCountry.code} ${demoForm.phone}`,
          countryCode: selectedCountry.code,
          country: selectedCountry.name,
          timestamp: new Date().toISOString(),
          source: 'website_demo_form'
        })
      });

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Great! We\'ll call you shortly to demonstrate our AI voice agent.' 
        });
        setDemoForm({ name: '', phone: '' });
      } else {
        throw new Error('Failed to submit demo request');
      }
    } catch (error) {
      console.error('Demo submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or contact support.' 
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
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-soft text-brand-teal text-sm font-medium mb-6">
                • AI-Powered Voice Agents
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-euphoric-gradient">Deploy AI Voice Agents</span>
                <br />
                <span className="text-gray-900">
                  <TypingAnimation startOnView={true} duration={150} className="text-gray-900">
                    in 30 Minutes
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Get specialized AI voice agents that handle inbound and outbound calling, qualify leads, answer from your knowledge base, route to humans when needed, book appointments, and update your CRM - all available 24/7.
                </TextAnimate>
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Our <span className="font-bold">multilingual</span> agents support 30+ languages, allowing you to serve customers globally with authentic communication.
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

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-b from-euphoric-50 to-white">
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
                            <p className="text-sm font-semibold text-gray-900">30+ Languages</p>
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

      {/* Stats Section */}
      <section className="py-16">
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
            {/* Real Estate */}
            <div className="glass p-8 card-hover">
              <div className="icon-badge-lg mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Outbound lead calling & qualification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Property requirements understanding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Appointment booking & CRM updates</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/real-estate"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Healthcare */}
            <div className="glass p-8 card-hover">
              <div className="icon-badge-lg mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-600">Patient appointment reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-600">Follow-up care & medication checks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-600">HIPAA-compliant communications</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/healthcare"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Ecommerce */}
            <div className="glass p-8 card-hover">
              <div className="icon-badge-lg mb-6">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecommerce</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">Order confirmations & support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">Abandoned cart recovery calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">Customer feedback & reviews</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/ecommerce"
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
          <div className="glass p-12 text-center gradient-border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <br /> Ready to Transform Your Business Communication?
            </h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join{" "}
              <Highlighter action="underline" color="#a98064" className="font-bold">
                hundreds of businesses
              </Highlighter>{" "}
              already using{" "}
              <span className="font-bold text-brand-teal">
                Euphoric AI
              </span>{" "}
              to automate their calling processes and boost conversions.
            </p>
            {user ? (
              <a href="https://app.euphoricai.io/" className="btn-gold">
                Go to Dashboard
              </a>
            ) : (
              <Link to="/signup" className="btn-gold">
                Start Your Free Trial
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Scale </span>
              <span className="text-gray-500">as </span>
              <span className="text-euphoric-gradient">You Grow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Self-setup from dashboard. Twilio numbers. Stripe billing. No hidden fees.
            </p>
          </div>

          {/* Billing Period Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-20"
          >
            <div className="glass-soft p-4 rounded-2xl inline-flex items-center gap-6">
              <span className={`text-lg font-semibold transition-colors ${!isQuarterly ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsQuarterly(!isQuarterly)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 ${
                  isQuarterly ? 'bg-brand-teal' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isQuarterly ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <div className="flex items-center gap-3">
                <span className={`text-lg font-semibold transition-colors ${isQuarterly ? 'text-gray-900' : 'text-gray-500'}`}>
                  Quarterly
                </span>
                <span className="text-sm font-bold text-brand-teal bg-brand-teal/10 px-3 py-1.5 rounded-full">
                  Save 10%
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Starter Plan */}
            <div className="glass p-8 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter AI Calling Agent</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">${getDisplayPrice(299)}</span>
                <span className="text-gray-500 ml-2">/{isQuarterly ? 'quarter' : 'month'}</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for small businesses getting started with AI calling</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Self-setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Twilio phone number integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Basic analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Email support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Secure Stripe payments</span>
                </div>
              </div>

              <Link to="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Standard AI Calling Agent */}
            <div className="glass p-12 card-hover relative transform scale-110">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="popular-badge">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard AI Calling Agent</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">${getDisplayPrice(499)}</span>
                <span className="text-gray-500 ml-2">/{isQuarterly ? 'quarter' : 'month'}</span>
              </div>
              <p className="text-gray-600 mb-6">Ideal for growing businesses with higher call volumes</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Assisted setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Twilio phone number integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Advanced analytics & reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Priority email support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Secure Stripe payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Multi-domain support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Custom voice training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">API access</span>
                </div>
              </div>

              <Link to="/signup" className="btn-gold w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="glass p-8 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium AI Calling Agent</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">${getDisplayPrice(599)}</span>
                <span className="text-gray-500 ml-2">/{isQuarterly ? 'quarter' : 'month'}</span>
              </div>
              <p className="text-gray-600 mb-6">For enterprise businesses requiring maximum calling capacity</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Assisted setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Twilio phone number integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Real-time analytics dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Secure Stripe payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">All domain specializations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Advanced voice customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Full API access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Priority feature requests</span>
                </div>
              </div>

              <Link to="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;