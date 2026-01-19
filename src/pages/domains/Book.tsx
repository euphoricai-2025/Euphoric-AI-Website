import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, Phone, ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Play, Globe, BarChart3, MessageCircle, Headphones, Loader2, CreditCard, Star, Zap, ChevronDown, Search } from 'lucide-react';
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
  { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
  { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
];

const Book = () => {
  const [demoForm, setDemoForm] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // AnimatedBeam refs
  const containerRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
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
      window.location.href = 'https://calendly.com/euphoricai-ai/demo';
    }, 2000);
  };

  const useCases = [
    {
      icon: Users,
      title: 'Author Event Booking Agent',
      description: 'Automate book signing appointments, virtual author events, and reader meet-and-greets with intelligent scheduling.',
      stats: 'Increase event attendance by 60% and save 10+ hours weekly on booking coordination',
      realWorldPainPoint: 'Authors and publishers waste countless hours coordinating events manually. Double bookings, timezone confusion, and missed opportunities are common, leading to frustrated readers and lost revenue.',
      features: [
        'Automated event scheduling across timezones',
        'Virtual and in-person event coordination',
        'Reader preference tracking',
        'Multi-platform calendar integration',
        'Automated reminder sequences',
        'Waitlist and overflow management'
      ],
      benefits: [
        'Increase event attendance by 60%',
        'Save 10+ hours weekly on coordination',
        'Eliminate double-booking errors',
        'Maximize author availability'
      ]
    },
    {
      icon: Star,
      title: 'Book Launch Campaign Agent',
      description: 'Coordinate launch activities, manage review requests, and handle pre-order inquiries with AI-powered automation.',
      stats: 'Boost pre-orders by 75% and increase launch week reviews by 3x',
      realWorldPainPoint: 'Book launches require coordinating dozens of moving parts simultaneously. Manual outreach for reviews is time-consuming and inconsistent, often missing the critical launch window when momentum matters most.',
      features: [
        'Pre-order campaign automation',
        'Review request management',
        'Launch timeline coordination',
        'Media contact outreach',
        'Influencer collaboration tracking',
        'Launch day activity orchestration'
      ],
      benefits: [
        'Boost pre-orders by 75%',
        'Increase launch week reviews by 3x',
        'Streamline launch coordination',
        'Build early momentum effectively'
      ]
    },
    {
      icon: Calendar,
      title: 'Reading Group Coordination Agent',
      description: 'Manage book club bookings, author Q&A sessions, and group discussion scheduling with automated workflows.',
      stats: 'Serve 4x more reading groups and increase engagement by 85%',
      realWorldPainPoint: 'Publishers struggle to scale author interactions with reading groups. Manual coordination limits reach, creates scheduling conflicts, and prevents authors from connecting with passionate readers who drive word-of-mouth sales.',
      features: [
        'Book club scheduling automation',
        'Group size and preference matching',
        'Discussion guide distribution',
        'Author availability optimization',
        'Virtual meeting room setup',
        'Follow-up engagement tracking'
      ],
      benefits: [
        'Serve 4x more reading groups',
        'Increase engagement by 85%',
        'Scale author availability',
        'Drive word-of-mouth marketing'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Manual Event Coordination',
      description: 'Authors and publishers lose 15+ hours weekly managing event bookings and scheduling',
      impact: 'Time that could be spent writing, marketing, or building reader relationships'
    },
    {
      title: 'Missed Launch Opportunities',
      description: 'Critical launch window activities fall through the cracks due to manual tracking',
      impact: 'Reduced visibility, lower sales, and missed momentum during the crucial launch period'
    },
    {
      title: 'Limited Reader Engagement',
      description: 'Inability to scale personalized interactions with reading groups and fans',
      impact: 'Lost opportunities for word-of-mouth marketing and building loyal reader communities'
    }
  ];

  const results = [
    { metric: '60%', label: 'Event Attendance', description: 'Increase in scheduled event participation' },
    { metric: '75%', label: 'Pre-Order Growth', description: 'Boost in launch campaign pre-orders' },
    { metric: '4x', label: 'Reading Groups', description: 'More book clubs served effectively' },
    { metric: '15+ hrs', label: 'Time Saved Weekly', description: 'Staff time freed for creative work' }
  ];


  return (
    <div className="pt-16 bg-euphoric-surface">
      {/* Hero Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <BookOpen className="w-4 h-4 mr-3 text-brand-teal animate-pulse" />
                Automate Your Book Events
              </div>

              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">AI Voice Agents</span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  <TypingAnimation startOnView={true} duration={150} className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                    for Book Publishing
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Book launches, author events, and reader engagement shouldn't drain your time. Euphoric AI voice agents handle scheduling, coordination, and follow-ups — in natural conversations, available 24/7.
                </TextAnimate>
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                From coordinating global book tours to managing local reading groups, Euphoric AI connects with readers in their preferred language and timezone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/pricing"
                  className="btn-gold inline-flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://calendly.com/euphoricai-ai/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-teal inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  See It In Action
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-1">35+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-teal mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            {/* Demo Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-2xl"></div>
              <div className="relative glass rounded-3xl p-8 border border-brand-teal/30 shadow-2xl">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Demo Call</h2>
                  <p className="text-gray-600">See how AI can transform your book events</p>
                </div>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="flex items-center gap-2 px-3 py-3 rounded-xl border border-gray-300 bg-white hover:border-brand-teal transition-all"
                        >
                          <span className="text-xl">{selectedCountry.flag}</span>
                          <span className="text-sm font-medium">{selectedCountry.code}</span>
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </button>

                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-gray-300 shadow-xl z-50 max-h-96 overflow-hidden">
                            <div className="p-3 border-b border-gray-200">
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none"
                                  placeholder="Search country..."
                                />
                              </div>
                            </div>
                            <div className="overflow-y-auto max-h-80">
                              {filteredCountries.map((country) => (
                                <button
                                  key={`${country.code}-${country.country}`}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setIsDropdownOpen(false);
                                    setCountrySearch('');
                                  }}
                                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-brand-teal/10 transition-all text-left"
                                >
                                  <span className="text-xl">{country.flag}</span>
                                  <span className="text-sm font-medium flex-1">{country.name}</span>
                                  <span className="text-sm text-gray-500">{country.code}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Book Demo Call
                      </>
                    )}
                  </button>
                </form>

                {submitStatus.type && (
                  <div className={`mt-4 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Common Publishing Challenges
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Authors and publishers face unique coordination challenges that drain time and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/15 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-8 border border-red-200 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-600 mb-4">{point.description}</p>
                    <p className="text-sm text-red-600 font-medium">{point.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                AI-Powered Book Publishing Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Automate event coordination, launch campaigns, and reader engagement with intelligent voice agents
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative glass rounded-3xl p-8 md:p-10 border border-brand-teal/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                          <p className="text-lg text-gray-600 mb-4">{useCase.description}</p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-green-700">{useCase.stats}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6 p-6 bg-red-50/50 rounded-2xl border border-red-100">
                        <h4 className="text-sm font-bold text-red-900 mb-2 uppercase tracking-wide">The Problem</h4>
                        <p className="text-gray-700 leading-relaxed">{useCase.realWorldPainPoint}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Key Features</h4>
                          <ul className="space-y-2">
                            {useCase.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Business Benefits</h4>
                          <ul className="space-y-2">
                            {useCase.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Zap className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Measurable Results
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real outcomes from AI-powered book event automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                    <div className="text-5xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-blue to-brand-teal bg-clip-text mb-3">
                      {result.metric}
                    </div>
                    <div className="text-gray-900 font-bold text-lg mb-2">{result.label}</div>
                    <div className="text-gray-600 text-sm">{result.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                  Seamless Integration
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with your existing publishing tools and platforms for automated workflows
              </p>
            </div>

            <div ref={containerRef} className="relative h-96 flex items-center justify-center">
              {/* Center Hub */}
              <div ref={centerRef} className="absolute">
                <EuphoricAIHub />
              </div>

              {/* Integration Points */}
              <div ref={crmRef} className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <Circle icon={Users} label="Author CRM" />
              </div>
              <div ref={emailRef} className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <Circle icon={MessageCircle} label="Email Marketing" />
              </div>
              <div ref={calendarRef} className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <Circle icon={Calendar} label="Event Calendar" />
              </div>

              {/* Animated Beams */}
              {centerRef.current && crmRef.current && (
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={crmRef}
                  toRef={centerRef}
                />
              )}
              {centerRef.current && emailRef.current && (
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={emailRef}
                  toRef={centerRef}
                />
              )}
              {centerRef.current && calendarRef.current && (
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={calendarRef}
                  toRef={centerRef}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Book Events?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join leading authors and publishers using AI to automate event coordination and maximize reader engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-teal font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-ai/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
