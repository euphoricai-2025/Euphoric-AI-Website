import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, FileText, Heart, ShoppingBag, Phone, CreditCard, Globe, BarChart3, Languages, Clock, ArrowRight, CheckCircle, Loader2, MessageCircle, Headphones, ChevronDown } from 'lucide-react';
import { TypingAnimation } from '../components/magicui/typing-animation';
import { TextAnimate } from '../components/magicui/text-animate';
import { Highlighter } from '../components/magicui/highlighter';
import { useAuth } from '../contexts/AuthContext';
import { SplineScene } from '../components/ui/spline';
import AnimatedWaveShader from '../components/ui/animated-wave-shader';
import CompactIndustries from '../components/CompactIndustries';
import AnimatedStats from '../components/AnimatedStats';
import { AnimatedBeam, Circle, EuphoricAIHub } from '../components/AnimatedBeam';
import { LanguagesShowcase } from '../components/LanguageMarquee';

// Country codes data with flags
const countryCodes = [
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
  { code: '+968', country: 'OM', flag: '🇴🇲', name: 'Oman' },
  { code: '+974', country: 'QA', flag: '🇶🇦', name: 'Qatar' },
  { code: '+966', country: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: '+973', country: 'BH', flag: '🇧🇭', name: 'Bahrain' },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' }
];

const Home = () => {
  const { user } = useAuth();
  const [isQuarterly, setIsQuarterly] = useState(true);
  const [demoForm, setDemoForm] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to US
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // AnimatedBeam refs
  const containerRef = useRef<HTMLDivElement>(null);
  const googleDriveRef = useRef<HTMLDivElement>(null);
  const shopifyRef = useRef<HTMLDivElement>(null);
  const salesforceRef = useRef<HTMLDivElement>(null);
  const twilioRef = useRef<HTMLDivElement>(null);
  const telnyxRef = useRef<HTMLDivElement>(null);
  const goHighLevelRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Force beam recalculation on component mount and after images load
  useEffect(() => {
    const forceBeamUpdate = () => {
      // Trigger a resize event to force beam recalculation
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
      
      // Additional updates for production reliability
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
      
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 600);
      
      // Additional timeout specifically for API beam centering
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1200);
    };

    // Initial force update
    forceBeamUpdate();
    
    // Wait for images to load then force update
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    const totalImages = images.length;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        forceBeamUpdate();
      }
    };

    images.forEach(img => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener('load', onImageLoad);
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', onImageLoad);
      });
    };
  }, []);

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
    if (!demoForm.name.trim() || !demoForm.phone.trim() || !demoForm.email.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(demoForm.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
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
      
      const requestBody = {
        quick_campaign: 'quickcamp86d47131',
        contact_number: fullPhoneNumber,
        first_name: firstName,
        last_name: lastName,
        email: demoForm.email.trim(),
        custom1: selectedCountry.name,
        custom2: 'Website Demo Request',
        custom3: new Date().toISOString(),
        custom4: 'homepage_demo_form'
      };
      
      console.log('Sending API request with body:', requestBody);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({ 
          type: 'success', 
          message: 'Demo call initiated successfully! You will receive a call from Eliza shortly.' 
        });
        setDemoForm({ name: '', phone: '', email: '' });
        setSelectedCountry(countryCodes[0]); // Reset to default country
      } else {
        // Try to get error details from response
        let errorMessage = 'Failed to submit demo request';
        try {
          const errorData = await response.json();
          console.error('API Error Response:', errorData);
          // Check if it's a validation error
          if (errorData.quick_campaign && Array.isArray(errorData.quick_campaign)) {
            console.error('Campaign validation error:', errorData.quick_campaign[0]);
            errorMessage = `Campaign error: ${errorData.quick_campaign[0]}`;
          } else {
            errorMessage = errorData.message || errorData.error || errorMessage;
          }
        } catch (e) {
          console.error('Could not parse error response');
        }
        throw new Error(errorMessage);
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
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <svg className="w-4 h-4 mr-3 text-brand-teal animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                AI-Powered Voice Agents
              </div>

              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Smarter AI Voice Agents</span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  <TypingAnimation startOnView={true} duration={150} className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
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

            {/* Right Side - Interactive 3D Agent */}
            <div className="flex items-center justify-center">
              {/* Full Height Agent Container */}
              <div 
                className="rounded-3xl shadow-lg border border-gray-100 w-full relative overflow-hidden"
                onMouseMove={handleMouseMove}
                style={{ height: '420px' }}
              >
                {/* Animated Wave Background */}
                <div className="absolute inset-0">
                  <AnimatedWaveShader />
                </div>
                
                {/* 3D Agent Container */}
                <div className="absolute inset-0 flex items-start justify-center pt-8">
                  <div className="w-full h-[600px] flex items-center justify-center relative">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full scale-125"
                    />
                    
                    {/* Logo on Agent's Chest - Interactive */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: (mousePosition.x - 400) * 0.02, // Parallax based on mouse X
                        y: (mousePosition.y - 300) * 0.015, // Parallax based on mouse Y
                      }}
                      transition={{ 
                        delay: 1.5, 
                        duration: 0.8, 
                        ease: "easeOut",
                        x: { type: "spring", stiffness: 100, damping: 30 },
                        y: { type: "spring", stiffness: 100, damping: 30 }
                      }}
                      className="absolute pointer-events-none"
                      style={{
                        top: 'calc(48% - 20px)',
                        left: 'calc(50% - 75px)',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <motion.img 
                        src="/euphoric-logo-final.png" 
                        alt="Euphoric AI" 
                        className="opacity-95 max-w-[142px]"
                        style={{
                          width: '142px', // 7.1 * 20px = 142px (width is 7.1 times height)
                          height: '20px', // Larger for full-size card
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4)) brightness(1.4) contrast(1.4)'
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Demo Form Section - Below Hero */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="relative bg-gradient-to-br from-brand-teal/15 via-brand-cyan/15 to-brand-sage/15 rounded-3xl shadow-2xl border border-brand-teal/40 p-6 sm:p-8 lg:p-10 xl:p-12 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-gold/25 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-cyan/25 to-transparent rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-euphoric-gradient mb-3">
                      Get a Real-Time Call from Our AI Agent <span className="bg-gradient-to-r from-brand-gold to-brand-teal bg-clip-text text-transparent font-extrabold">Eliza</span>
                    </h3>
                    <p className="text-gray-600 text-base">
                      Experience the future of customer communication with our intelligent voice AI
                    </p>
                  </motion.div>
                </div>

              <form onSubmit={handleDemoSubmit} className="space-y-6">
                {/* Single Row - Three Parallel Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <input
                      id="hero-demo-name"
                      type="text"
                      placeholder="Your Name"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-brand-teal/40 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 transition-all bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                      disabled={isSubmitting}
                      required
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <input
                      id="hero-demo-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-brand-cyan/40 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/20 transition-all bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                      disabled={isSubmitting}
                      required
                    />
                  </motion.div>

                  {/* Phone Number with Country Code */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
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
                            className="flex items-center gap-1 px-3 py-4 border-2 border-r-0 border-brand-sage/40 rounded-l-xl bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white focus:border-brand-sage focus:ring-4 focus:ring-brand-sage/20 transition-all shadow-sm hover:shadow-md font-medium"
                            disabled={isSubmitting}
                          >
                            <span className="text-base">{selectedCountry.flag}</span>
                            <span className="text-sm font-bold text-gray-800">{selectedCountry.code}</span>
                            <ChevronDown className="w-4 h-4 text-brand-sage/80" />
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
                              <div className="max-h-36 overflow-y-auto">
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
                          id="hero-demo-phone"
                          type="tel"
                          placeholder="123 456 7890"
                          value={demoForm.phone}
                          onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                          className="flex-1 px-5 py-4 border-2 border-brand-sage/40 rounded-r-xl focus:border-brand-sage focus:ring-4 focus:ring-brand-sage/20 transition-all bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button - Centered */}
                <motion.div 
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative py-5 px-10 rounded-2xl font-bold bg-gradient-to-br from-white via-white to-white hover:from-white hover:via-white hover:to-white transition-all transform hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 text-lg overflow-hidden group border-4 border-brand-teal bg-clip-padding"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.9) 100%), linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-cyan) 50%, var(--brand-gold) 100%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box'
                    }}
                  >
                    {/* Animated gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 via-brand-cyan/10 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin text-white drop-shadow-sm" />
                        <span className="text-euphoric-gradient font-bold drop-shadow-sm">Initiating Call...</span>
                      </>
                    ) : (
                      <>
                        <div className="relative p-3 bg-gradient-to-br from-brand-teal via-brand-cyan to-brand-teal rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                          <Phone className="w-5 h-5 text-white drop-shadow-sm relative z-10" />
                        </div>
                        <span className="text-euphoric-gradient font-bold drop-shadow-sm">Try Live Call Demo</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-700 font-medium text-center max-w-md">
                    By submitting, you agree to receive a demo call from our AI agent.
                  </p>
                </motion.div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Below Demo Form */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Elements */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-tl from-brand-gold/20 to-transparent rounded-full blur-2xl"></div>
          
          {/* Stats Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full max-w-6xl mx-auto">
            {/* 30min Setup */}
            <div className="text-center group">
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-cyan/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-cyan to-brand-teal bg-clip-text mb-3">
                    30min
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Setup Time</div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Twilio Integration */}
            <div className="text-center group">
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-teal/15 to-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-blue/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue bg-clip-text mb-3">
                    Twilio
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Ready Integration</div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Stripe Billing */}
            <div className="text-center group">
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-brand-gold/15 to-brand-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-gold via-brand-gold to-brand-gold bg-clip-text mb-3">
                    Stripe
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Secure Billing</div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* 24/7 Active */}
            <div className="text-center group">
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-teal/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-teal to-brand-teal bg-clip-text mb-3">
                    24/7
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Always Active</div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* 250ms Latency */}
            <div className="text-center group">
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-blue/15 to-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-blue/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue bg-clip-text mb-3">
                    250ms
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Latency</div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Industry Solutions */}
      <CompactIndustries />

      {/* Enterprise Features - Custom Stats */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-blue/30 to-brand-gray/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Global Phone Integration */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gray p-8 rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="pattern-global" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#pattern-global)" />
                  </svg>
                </div>

                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
                  <Globe className="w-8 h-8 text-white" />
                </div>

                {/* Stat Value */}
                <div className="text-white mb-2">
                  <div className="text-4xl md:text-5xl font-bold">Global</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">Phone Integration</h3>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed">Seamless Twilio integration for worldwide calling</p>
              </div>
            </motion.div>

            {/* Real-time Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-brand-blue via-brand-teal to-brand-gold p-8 rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="pattern-analytics" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#pattern-analytics)" />
                  </svg>
                </div>

                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>

                {/* Stat Value */}
                <div className="text-white mb-2">
                  <div className="text-4xl md:text-5xl font-bold">Realtime</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed">Comprehensive insights and performance tracking</p>
              </div>
            </motion.div>

            {/* Multi-language Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-brand-gray via-brand-teal to-brand-blue p-8 rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="pattern-languages" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#pattern-languages)" />
                  </svg>
                </div>

                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
                  <Languages className="w-8 h-8 text-white" />
                </div>

                {/* Stat Value */}
                <div className="text-white mb-2">
                  <div className="text-4xl md:text-5xl font-bold">35+</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">Languages</h3>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed">Serve customers in their preferred language globally</p>
              </div>
            </motion.div>

            {/* 24/7 Reliability */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-brand-gold via-brand-teal to-brand-black p-8 rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="pattern-reliability" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#pattern-reliability)" />
                  </svg>
                </div>

                {/* Icon */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block">
                  <Clock className="w-8 h-8 text-white" />
                </div>

                {/* Stat Value */}
                <div className="text-white mb-2">
                  <div className="text-4xl md:text-5xl font-bold">99.9%</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">Uptime</h3>

                {/* Description */}
                <p className="text-white/80 text-base leading-relaxed">Always-on service with guaranteed reliability</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-blue to-brand-gray rounded-3xl p-12 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="text-white">Ready to Transform</span>
              <br />
              <span className="text-white">Your Business?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-4xl mx-auto text-center leading-relaxed"
            >
              Join thousands of businesses using AI voice agents to scale their operations 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-white hover:bg-white text-brand-black hover:text-brand-gray px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center justify-center group"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Book Your Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/pricing"
                className="relative overflow-hidden border-2 border-white/80 hover:border-white text-white hover:text-white bg-transparent hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group backdrop-blur-sm"
              >
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Pricing</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Integrations Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-blue/20 to-brand-gray/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-full px-6 py-2 mb-6">
                  <Globe className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700 font-semibold">Integrations</span>
                </div>
                
                <h2 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                  <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Works With Everything You Already</span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Use</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Integrates into your stack. Extends your superpowers with seamless connections to your favorite tools and platforms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Voice Workflows</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-gray rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Real-time Sync</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-gray to-brand-teal rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Secure APIs</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">24/7 Uptime</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - AnimatedBeam Integration Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                ref={containerRef}
                className="relative flex h-[400px] sm:h-[450px] md:h-[500px] w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/40 via-white/20 to-white/40 backdrop-blur-sm shadow-2xl mx-auto border border-white/40 p-8 sm:p-12 md:p-16 lg:p-20"
                style={{
                  // Ensure consistent positioning
                  minHeight: '400px',
                  aspectRatio: '7/5',
                  // Better rendering performance
                  willChange: 'transform',
                  contain: 'layout style paint'
                }}
              >
                {/* Central Euphoric AI Hub */}
                <EuphoricAIHub ref={centerRef} />

                {/* Animated Beams with curves - rendered first so they appear behind logos */}
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={googleDriveRef}
                  toRef={centerRef}
                  duration={4}
                  curvature={-30}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={shopifyRef}
                  toRef={centerRef}
                  duration={4}
                  delay={0.7}
                  curvature={30}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={salesforceRef}
                  toRef={centerRef}
                  duration={4}
                  delay={1.4}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={twilioRef}
                  toRef={centerRef}
                  duration={4}
                  delay={2.1}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={telnyxRef}
                  toRef={centerRef}
                  duration={4}
                  delay={2.8}
                  curvature={30}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={goHighLevelRef}
                  toRef={centerRef}
                  duration={4}
                  delay={3.5}
                  curvature={-30}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={apiRef}
                  toRef={centerRef}
                  duration={4}
                  delay={5}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />

                {/* Positioned Integration Icons - rendered after beams so they appear on top */}
                
                {/* Top Left - Google Drive */}
                <Circle ref={googleDriveRef} className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8">
                  <img src="https://assets.ringg.ai/images/integrations/google-drive.svg" alt="Google Drive" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain" />
                </Circle>
                
                {/* Top Right - Shopify */}
                <Circle ref={shopifyRef} className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8">
                  <img src="https://assets.ringg.ai/images/integrations/shopify.svg" alt="Shopify" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain" />
                </Circle>
                
                {/* Middle Left - Salesforce */}
                <Circle ref={salesforceRef} className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2">
                  <img src="https://www.sparkplug.ai/wp-content/uploads/2023/10/salesforce-logo.png" alt="Salesforce" className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 object-contain" />
                </Circle>
                
                {/* Middle Right - Twilio */}
                <Circle ref={twilioRef} className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2">
                  <img src="https://assets.ringg.ai/images/integrations/twilio.svg" alt="Twilio" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain" />
                </Circle>
                
                {/* Bottom Left - Telnyx */}
                <Circle ref={telnyxRef} className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
                  <img src="https://res.cloudinary.com/apideck/image/upload/v1576574777/catalog/telnyx/icon128x128.png" alt="Telnyx" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain rounded" />
                </Circle>
                
                {/* Bottom Right - GoHighLevel */}
                <Circle ref={goHighLevelRef} className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                  <img src="https://images.leadconnectorhq.com/image/f_webp/q_100/r_180/u_https://cdn.filesafe.space/locationPhotos%2FknES3eSWYIsc5YSZ3YLl%2Fchat-widget-person?alt=media&token=86cfa8e1-6444-4301-927d-5f8491d03c06" alt="GoHighLevel" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain rounded" />
                </Circle>
                
                {/* Bottom Center - API Integration */}
                <Circle ref={apiRef} className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2">
                  <img src="https://assets.ringg.ai/images/integrations/api.svg" alt="Custom API" className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain" />
                </Circle>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Languages Showcase */}
      <LanguagesShowcase />
    </div>
  );
};

export default Home;