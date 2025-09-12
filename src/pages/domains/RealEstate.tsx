import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Users, Calendar, Phone, ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Play, Globe, BarChart3, MessageCircle, Headphones, Loader2, CreditCard, MapPin, DollarSign, Zap, ChevronDown, Search } from 'lucide-react';
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

const RealEstate = () => {
  const [demoForm, setDemoForm] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // AnimatedBeam refs
  const containerRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);
  const mlsRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Demo request submitted! We\'ll show you AI agents capturing leads in under 60 seconds.' });
    }, 2000);
  };

  const useCases = [
    {
      icon: Users,
      title: 'Lead Qualification Agent',
      description: 'Instantly qualify incoming leads by assessing budget, timeline, property preferences, and financing readiness.',
      features: [
        'Budget and financing pre-qualification',
        'Timeline and urgency assessment',
        'Property type and location preferences',
        'First-time buyer vs. investor identification',
        'CRM integration with lead scoring',
        'Automated lead routing to agents'
      ],
      benefits: [
        'Increase qualified leads by 55%',
        'Save 4+ hours daily on qualification',
        'Improve conversion rates by 40%',
        'Never miss a lead opportunity'
      ]
    },
    {
      icon: MapPin,
      title: 'Property Matching Agent',
      description: 'Match qualified leads to perfect properties using AI-powered preference analysis and market data.',
      features: [
        'Advanced preference matching algorithms',
        'Real-time MLS integration',
        'Price and location optimization',
        'Investment property analysis',
        'Comparable property research',
        'Automated property alerts'
      ],
      benefits: [
        'Increase showing-to-offer rate by 45%',
        'Reduce time to find perfect match',
        'Higher client satisfaction scores',
        'More targeted property presentations'
      ]
    },
    {
      icon: DollarSign,
      title: 'Market Analysis Agent',
      description: 'Provide instant market analysis, pricing insights, and investment potential assessments to prospects.',
      features: [
        'Real-time market trend analysis',
        'Automated comparative market analysis',
        'Investment ROI calculations',
        'Neighborhood insight reports',
        'Price prediction modeling',
        'Market timing recommendations'
      ],
      benefits: [
        'Position as market expert instantly',
        'Build trust with data-driven insights',
        'Accelerate decision-making process',
        'Command premium commission rates'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Slow Lead Response',
      description: 'Real estate leads lose interest quickly - 78% go to competitors who respond first',
      impact: 'Manual follow-up processes result in delayed responses and lost opportunities'
    },
    {
      title: 'Unqualified Leads',
      description: 'Agents spend 60% of their time on prospects who aren\'t ready to buy or sell',
      impact: 'Time wasted on tire-kickers instead of serious buyers and motivated sellers'
    },
    {
      title: 'Appointment No-Shows',
      description: '35% of property showings result in no-shows due to poor confirmation processes',
      impact: 'Wasted time, travel costs, and missed opportunities with other qualified prospects'
    }
  ];

  const results = [
    { metric: '65%', label: 'Faster Lead Response', description: 'Average response time improvement' },
    { metric: '55%', label: 'More Qualified Leads', description: 'Increase in pre-qualified prospects' },
    { metric: '40%', label: 'Higher Conversion', description: 'Lead to client conversion rate' },
    { metric: '4+ hrs', label: 'Time Saved Daily', description: 'Staff time freed up for selling' }
  ];

  const testimonials = [
    {
      name: 'Victoria Sterling',
      role: 'Real Estate Broker',
      company: 'Platinum Properties Group',
      content: 'Lead response time went from hours to under 60 seconds. We\'re capturing 70% more qualified leads and my conversion rate increased 55%. The competition can\'t keep up with our speed.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Sales Manager',
      company: 'Elite Realty Partners',
      content: 'The showing coordination agent eliminated double-bookings and reduced no-shows by 65%. Our team can focus on selling while the AI handles all scheduling logistics perfectly.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Zap className="w-4 h-4 mr-3 text-brand-teal animate-pulse" />
                60-Second Lead Response
              </div>

              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.85rem, 4vw, 3.6rem)' }}>
                <span className="text-euphoric-gradient">Lightning-Fast</span>
                <br />
                <span className="text-gray-900">
                  <TypingAnimation startOnView={true} duration={150} className="text-gray-900">
                    Real Estate AI
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-4 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Qualify leads instantly, schedule showings automatically, and never miss a hot prospect with AI agents that work 24/7.
                </TextAnimate>
              </p>

              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                <span className="font-bold text-red-600">78% of leads go to competitors who respond first?</span> Our AI responds in <span className="font-bold text-green-600">under 60 seconds</span> and increases conversions by <span className="font-bold">55%</span>.
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
                  href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Real Estate Demo
                </a>
              </div>
            </div>

            {/* Right Side - Interactive 3D Agent */}
            <div className="flex items-center justify-center">
              <div 
                className="rounded-3xl shadow-lg border border-gray-100 w-full relative overflow-hidden"
                onMouseMove={handleMouseMove}
                style={{ height: '420px' }}
              >
                <div className="absolute inset-0">
                  <AnimatedWaveShader />
                </div>
                
                <div className="absolute inset-0 flex items-start justify-center pt-8">
                  <div className="w-full h-[600px] flex items-center justify-center relative">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full scale-125"
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: (mousePosition.x - 400) * 0.02,
                        y: (mousePosition.y - 300) * 0.015,
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
                          width: '142px',
                          height: '20px',
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

      {/* Demo Form Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="relative bg-gradient-to-br from-brand-teal/15 via-brand-cyan/15 to-brand-sage/15 rounded-3xl shadow-2xl border border-brand-teal/40 p-6 sm:p-8 lg:p-10 xl:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-gold/25 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-cyan/25 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-euphoric-gradient mb-3">
                      See Lightning-Fast <span className="bg-gradient-to-r from-brand-gold to-brand-teal bg-clip-text text-transparent font-extrabold">Lead Response</span>
                    </h3>
                    <p className="text-gray-600 text-base">
                      Experience AI agents capturing leads in under 60 seconds, qualifying prospects, and scheduling showings
                    </p>
                  </motion.div>
                </div>

              <form onSubmit={handleDemoSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-brand-teal/40 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20 transition-all bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                      disabled={isSubmitting}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-brand-cyan/40 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/20 transition-all bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                      disabled={isSubmitting}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <input
                      type="tel"
                      placeholder="123 456 7890"
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border-2 border-brand-sage/40 focus:border-brand-sage focus:ring-4 focus:ring-brand-sage/20 transition-all bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white shadow-sm hover:shadow-md font-medium placeholder:text-gray-500"
                      disabled={isSubmitting}
                      required
                    />
                  </motion.div>
                </div>

                {submitStatus.type && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <motion.div 
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative py-5 px-10 rounded-2xl font-bold bg-gradient-to-br from-white via-gray-50 to-white hover:from-gray-50 hover:via-white hover:to-gray-50 transition-all transform hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-3 text-lg overflow-hidden group border-4 border-brand-teal bg-clip-padding"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.9) 100%), linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-cyan) 50%, var(--brand-gold) 100%)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 via-brand-cyan/10 to-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin text-white drop-shadow-sm" />
                        <span className="text-euphoric-gradient font-bold drop-shadow-sm">Booking Demo...</span>
                      </>
                    ) : (
                      <>
                        <div className="relative p-3 bg-gradient-to-br from-brand-teal via-brand-cyan to-brand-teal rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                          <Home className="w-5 h-5 text-white drop-shadow-sm relative z-10" />
                        </div>
                        <span className="text-euphoric-gradient font-bold drop-shadow-sm">Book Real Estate Demo</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-700 font-medium text-center max-w-md">
                    See how our AI qualifies leads, schedules showings, and follows up instantly to beat the competition.
                  </p>
                </motion.div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-tl from-brand-gold/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 w-full mx-auto">
            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-cyan/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-cyan to-brand-teal bg-clip-text mb-3">
                    &lt;60s
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Response Time</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-teal/15 to-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-blue/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue bg-clip-text mb-3">
                    65%
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">More Leads Captured</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-amber-300/15 to-brand-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-gold via-amber-500 to-brand-gold bg-clip-text mb-3">
                    55%
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Higher Conversion</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-400/15 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-br from-purple-500 via-violet-500 to-purple-500 bg-clip-text mb-3">
                    4+ hrs
                  </div>
                  <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">Time Saved Daily</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
                  <div className="bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gray p-8 rounded-3xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
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

                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-white/80 text-base leading-relaxed mb-4">{useCase.description}</p>

                    <div className="text-white mb-2">
                      <div className="text-2xl font-bold">{useCase.benefits[0]}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
                  <span className="text-gray-700 font-semibold">Real Estate Integrations</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Connects With Your 
                  <br />
                  <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                    Real Estate Stack
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Seamless integration with CRM systems, MLS platforms, and calendar tools for complete lead management automation.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">CRM Systems</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-gray rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">MLS Platforms</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-gray to-brand-teal rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Scheduling</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Phone Systems</span>
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

                <Circle ref={crmRef} className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <Users className="w-6 h-6 text-gray-700" />
                </Circle>
                
                <Circle ref={mlsRef} className="absolute left-8 top-1/2 -translate-y-1/2">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </Circle>
                
                <Circle ref={calendarRef} className="absolute right-8 top-1/2 -translate-y-1/2">
                  <Calendar className="w-6 h-6 text-gray-700" />
                </Circle>

                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={crmRef}
                  toRef={centerRef}
                  duration={4}
                  curvature={0}
                  pathColor="#e5e7eb"
                  gradientStartColor="#64a4bf"
                  gradientStopColor="#42a4bf"
                />
                
                <AnimatedBeam
                  containerRef={containerRef}
                  fromRef={mlsRef}
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
                  fromRef={calendarRef}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real estate professionals closing more deals with AI voice agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-8"
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Beat the Competition?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join real estate professionals using AI agents to respond in under 60 seconds, qualify leads instantly, and close more deals.
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
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
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

export default RealEstate;