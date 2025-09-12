import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Phone, CreditCard, Globe, BarChart3, Clock, ArrowRight, Loader2, ChevronDown, Zap, Users, Star, Headphones, Languages, MessageCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { SplineScene } from '../components/ui/spline';
import InteractiveHero from '../components/InteractiveHero';
import AnimatedStats from '../components/AnimatedStats';
import StickyNav from '../components/StickyNav';
import CompactIndustries from '../components/CompactIndustries';

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

const HomeV2 = () => {
  const { user } = useAuth();
  const [demoForm, setDemoForm] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to US
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Navigation sections
  const navigationSections = [
    { id: 'hero', title: 'Demo', icon: Play },
    { id: 'industries', title: 'Industries', icon: Globe },
    { id: 'features', title: 'Features', icon: Zap },
    { id: 'stats', title: 'Results', icon: BarChart3 },
    { id: 'pricing', title: 'Pricing', icon: CreditCard }
  ];

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
    <div className="home-page relative">
      {/* Sticky Navigation */}
      <StickyNav sections={navigationSections} />
      
      {/* Interactive Hero Section */}
      <section id="hero">
        <InteractiveHero />
      </section>

      {/* Compact Industries Section */}
      <section id="industries">
        <CompactIndustries />
      </section>

      {/* Animated Stats Section */}
      <section id="stats">
        <AnimatedStats />
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-blue/5 to-brand-gray/10 flex items-center justify-center">
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
                        src="/euphoric-logo-final.png" 
                        alt="Euphoric AI" 
                        className="w-38 h-19 opacity-90 max-w-[156px] sm:max-w-[156px] md:max-w-[156px] lg:max-w-[156px]"
                        style={{
                          width: '156px', // 7.1 * 22px = 156.2px ≈ 156px (width is 7.1 times height)
                          height: '22px', // Made thicker for better visibility and dominance
                          filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35)) drop-shadow(0 2px 6px rgba(0,0,0,0.3)) drop-shadow(0 8px 24px rgba(0,0,0,0.15)) brightness(1.5) contrast(1.4)'
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
                          <div className="p-2 bg-gradient-to-br from-brand-teal to-brand-blue rounded-xl">
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
                          <div className="p-2 bg-gradient-to-br from-brand-gray to-brand-gold rounded-xl">
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
                          <div className="p-2 bg-gradient-to-br from-brand-blue to-brand-gray rounded-xl">
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
                          <div className="p-2 bg-gradient-to-br from-brand-gold to-brand-teal rounded-xl">
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
                      <div className="w-2 h-2 bg-brand-blue/30 rounded-full"></div>
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

      {/* Compact Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue/20 to-brand-gray/20 rounded-full px-6 py-2 mb-6"
            >
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-semibold">Key Features</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-gray bg-clip-text text-transparent">
                Scale Fast
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-brand-blue to-brand-teal w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Minute Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Deploy AI voice agents instantly with no-code tools. Most customers go live in under 30 minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-brand-teal to-brand-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-Like Conversations</h3>
              <p className="text-gray-600 leading-relaxed">
                Natural voice interactions with &lt;500ms latency. Customers can't tell it's AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-brand-gray to-brand-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">35+ Languages</h3>
              <p className="text-gray-600 leading-relaxed">
                Serve customers globally with multilingual support. Switch languages mid-conversation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-brand-gold to-brand-teal w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated AI engineers and 24/7 support ensure 99.9% uptime for your agents.
              </p>
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
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
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
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Book Your Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/pricing"
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default HomeV2;