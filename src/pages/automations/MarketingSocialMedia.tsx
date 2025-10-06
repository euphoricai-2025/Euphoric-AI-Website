import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Target, Mail, Calendar, BarChart3, MessageSquare, ArrowRight, CheckCircle, TrendingUp, Shield, Zap, ChevronDown, Search, Phone, Star, Clock, Users, DollarSign } from 'lucide-react';
import { TypingAnimation } from '../../components/magicui/typing-animation';
import { TextAnimate } from '../../components/magicui/text-animate';

const MarketingSocialMedia = () => {
  const [selectedCountry, setSelectedCountry] = useState({ code: 'US', flag: '🇺🇸', name: 'United States' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    { code: 'US', flag: '🇺🇸', name: 'United States' },
    { code: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: 'FR', flag: '🇫🇷', name: 'France' },
    { code: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: 'SE', flag: '🇸🇪', name: 'Sweden' },
    { code: 'NO', flag: '🇳🇴', name: 'Norway' },
    { code: 'DK', flag: '🇩🇰', name: 'Denmark' },
    { code: 'FI', flag: '🇫🇮', name: 'Finland' },
    { code: 'CH', flag: '🇨🇭', name: 'Switzerland' },
    { code: 'AT', flag: '🇦🇹', name: 'Austria' },
    { code: 'BE', flag: '🇧🇪', name: 'Belgium' },
    { code: 'IE', flag: '🇮🇪', name: 'Ireland' },
    { code: 'IT', flag: '🇮🇹', name: 'Italy' },
    { code: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: 'PT', flag: '🇵🇹', name: 'Portugal' },
    { code: 'LU', flag: '🇱🇺', name: 'Luxembourg' },
    { code: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
    { code: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: 'NZ', flag: '🇳🇿', name: 'New Zealand' },
    { code: 'ZA', flag: '🇿🇦', name: 'South Africa' },
    { code: 'IN', flag: '🇮🇳', name: 'India' },
    { code: 'BR', flag: '🇧🇷', name: 'Brazil' },
    { code: 'MX', flag: '🇲🇽', name: 'Mexico' },
    { code: 'AR', flag: '🇦🇷', name: 'Argentina' },
    { code: 'CL', flag: '🇨🇱', name: 'Chile' },
    { code: 'CO', flag: '🇨🇴', name: 'Colombia' },
    { code: 'PE', flag: '🇵🇪', name: 'Peru' },
    { code: 'UY', flag: '🇺🇾', name: 'Uruguay' },
    { code: 'IL', flag: '🇮🇱', name: 'Israel' },
    { code: 'AE', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: 'SA', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: 'QA', flag: '🇶🇦', name: 'Qatar' },
    { code: 'KW', flag: '🇰🇼', name: 'Kuwait' },
    { code: 'BH', flag: '🇧🇭', name: 'Bahrain' },
    { code: 'OM', flag: '🇴🇲', name: 'Oman' },
    { code: 'JO', flag: '🇯🇴', name: 'Jordan' },
    { code: 'LB', flag: '🇱🇧', name: 'Lebanon' },
    { code: 'EG', flag: '🇪🇬', name: 'Egypt' },
    { code: 'MA', flag: '🇲🇦', name: 'Morocco' },
    { code: 'TN', flag: '🇹🇳', name: 'Tunisia' },
    { code: 'KE', flag: '🇰🇪', name: 'Kenya' },
    { code: 'NG', flag: '🇳🇬', name: 'Nigeria' },
    { code: 'GH', flag: '🇬🇭', name: 'Ghana' },
    { code: 'TZ', flag: '🇹🇿', name: 'Tanzania' },
    { code: 'UG', flag: '🇺🇬', name: 'Uganda' },
    { code: 'RW', flag: '🇷🇼', name: 'Rwanda' },
    { code: 'TH', flag: '🇹🇭', name: 'Thailand' },
    { code: 'MY', flag: '🇲🇾', name: 'Malaysia' },
    { code: 'ID', flag: '🇮🇩', name: 'Indonesia' },
    { code: 'PH', flag: '🇵🇭', name: 'Philippines' },
    { code: 'VN', flag: '🇻🇳', name: 'Vietnam' },
    { code: 'CN', flag: '🇨🇳', name: 'China' },
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: 'PK', flag: '🇵🇰', name: 'Pakistan' },
    { code: 'BD', flag: '🇧🇩', name: 'Bangladesh' },
    { code: 'LK', flag: '🇱🇰', name: 'Sri Lanka' },
    { code: 'NP', flag: '🇳🇵', name: 'Nepal' },
    { code: 'MM', flag: '🇲🇲', name: 'Myanmar' },
    { code: 'KH', flag: '🇰🇭', name: 'Cambodia' },
    { code: 'LA', flag: '🇱🇦', name: 'Laos' },
    { code: 'MN', flag: '🇲🇳', name: 'Mongolia' },
    { code: 'BT', flag: '🇧🇹', name: 'Bhutan' },
    { code: 'MV', flag: '🇲🇻', name: 'Maldives' },
    { code: 'BN', flag: '🇧🇳', name: 'Brunei' },
    { code: 'TL', flag: '🇹🇱', name: 'Timor-Leste' },
    { code: 'PG', flag: '🇵🇬', name: 'Papua New Guinea' },
    { code: 'FJ', flag: '🇫🇯', name: 'Fiji' },
    { code: 'VU', flag: '🇻🇺', name: 'Vanuatu' },
    { code: 'SB', flag: '🇸🇧', name: 'Solomon Islands' },
    { code: 'NC', flag: '🇳🇨', name: 'New Caledonia' },
    { code: 'PF', flag: '🇵🇫', name: 'French Polynesia' },
    { code: 'TO', flag: '🇹🇴', name: 'Tonga' },
    { code: 'WS', flag: '🇼🇸', name: 'Samoa' },
    { code: 'KI', flag: '🇰🇮', name: 'Kiribati' },
    { code: 'PW', flag: '🇵🇼', name: 'Palau' },
    { code: 'MH', flag: '🇲🇭', name: 'Marshall Islands' },
    { code: 'FM', flag: '🇫🇲', name: 'Micronesia' },
    { code: 'NR', flag: '🇳🇷', name: 'Nauru' },
    { code: 'TV', flag: '🇹🇻', name: 'Tuvalu' },
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const automations = [
    {
      icon: Share2,
      title: 'Social Media Content Scheduling',
      description: 'Automate your social media posting across all platforms with intelligent content scheduling and optimization.',
      features: [
        'Multi-platform content distribution',
        'Optimal posting time analysis',
        'Content calendar automation',
        'Hashtag optimization and research',
        'Visual content resizing for each platform',
        'Engagement tracking and analytics'
      ],
      benefits: [
        'Save 20+ hours weekly on posting',
        'Increase engagement rates by 45%',
        'Maintain consistent brand presence',
        'Optimize posting times for maximum reach'
      ],
      platforms: ['Hootsuite', 'Buffer', 'Sprout Social', 'Zapier']
    },
    {
      icon: Target,
      title: 'Audience Segmentation & Targeting',
      description: 'Automatically segment your audience based on behavior, demographics, and preferences for personalized marketing.',
      features: [
        'Behavioral segmentation automation',
        'Dynamic audience list updates',
        'Personalized content recommendations',
        'Custom audience creation for ads',
        'Engagement-based scoring',
        'Lookalike audience generation'
      ],
      benefits: [
        'Improve campaign targeting by 70%',
        'Increase conversion rates by 55%',
        'Reduce ad spend waste by 40%',
        'Enhance personalization effectiveness'
      ],
      platforms: ['Facebook Ads', 'Google Ads', 'HubSpot', 'Mailchimp']
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Create sophisticated email campaigns that nurture leads and drive conversions with intelligent automation.',
      features: [
        'Drip campaign automation',
        'Behavioral trigger emails',
        'A/B testing and optimization',
        'Personalized email content',
        'Automated list cleaning',
        'Performance analytics tracking'
      ],
      benefits: [
        'Increase email open rates by 65%',
        'Boost click-through rates by 50%',
        'Reduce unsubscribe rates by 30%',
        'Generate 40% more qualified leads'
      ],
      platforms: ['Mailchimp', 'Klaviyo', 'ConvertKit', 'ActiveCampaign']
    },
    {
      icon: BarChart3,
      title: 'Marketing Analytics Dashboard',
      description: 'Track all marketing metrics in real-time with automated reporting and performance insights.',
      features: [
        'Real-time marketing dashboard',
        'Cross-channel attribution tracking',
        'ROI calculation and reporting',
        'Campaign performance analysis',
        'Automated weekly/monthly reports',
        'Goal tracking and alerts'
      ],
      benefits: [
        'Improve marketing ROI visibility by 85%',
        'Reduce reporting time by 90%',
        'Make data-driven decisions faster',
        'Identify top-performing channels'
      ],
      platforms: ['Google Analytics', 'Facebook Analytics', 'HubSpot', 'Tableau']
    },
    {
      icon: MessageSquare,
      title: 'Social Media Engagement Bot',
      description: 'Automatically respond to comments, messages, and mentions while maintaining authentic brand voice.',
      features: [
        'Intelligent comment moderation',
        'Automated response templates',
        'Sentiment analysis and routing',
        'Brand mention monitoring',
        'Crisis management alerts',
        'Community management workflows'
      ],
      benefits: [
        'Respond 24/7 to customer inquiries',
        'Increase response rate by 300%',
        'Improve customer satisfaction',
        'Reduce community management workload'
      ],
      platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']
    },
    {
      icon: Calendar,
      title: 'Campaign Launch Automation',
      description: 'Coordinate complex marketing campaigns across multiple channels with automated launch sequences.',
      features: [
        'Multi-channel campaign coordination',
        'Automated asset deployment',
        'Launch sequence scheduling',
        'Performance monitoring setup',
        'Budget allocation automation',
        'Team notification workflows'
      ],
      benefits: [
        'Reduce campaign setup time by 75%',
        'Eliminate launch coordination errors',
        'Ensure consistent messaging',
        'Accelerate time-to-market by 50%'
      ],
      platforms: ['HubSpot', 'Marketo', 'Pardot', 'Make.com']
    }
  ];

  const stats = [
    { number: '45%', label: 'Higher Engagement', icon: TrendingUp },
    { number: '20+', label: 'Hours Saved Weekly', icon: Clock },
    { number: '70%', label: 'Better Targeting', icon: Target },
    { number: '300%', label: 'Increase in Response Rate', icon: MessageSquare }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Drive sales with automated product promotions and retargeting' },
    { name: 'SaaS', description: 'Generate leads and nurture trial users into customers' },
    { name: 'Professional Services', description: 'Build thought leadership and attract qualified prospects' },
    { name: 'Healthcare', description: 'Educate patients and promote services compliantly' },
    { name: 'Financial Services', description: 'Build trust and nurture high-value prospects' },
    { name: 'Real Estate', description: 'Showcase properties and nurture buyer relationships' }
  ];

  const testimonials = [
    {
      name: "Jessica Thompson",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "Social media automation has transformed our marketing efficiency. We're now posting consistently across 6 platforms while our team focuses on strategy and creative work.",
      avatar: "JT"
    },
    {
      name: "David Park",
      role: "Growth Marketing Manager",
      company: "ScaleUp Inc",
      content: "The audience segmentation automation increased our campaign conversion rates by 55%. We're reaching the right people with the right message every time.",
      avatar: "DP"
    },
    {
      name: "Maria Santos",
      role: "Digital Marketing Specialist",
      company: "BrandBoost Agency",
      content: "Email automation has been a game changer. Our open rates increased 65% and we're generating 40% more qualified leads with automated nurturing sequences.",
      avatar: "MS"
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                  Marketing & Social Media
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  <TypingAnimation startOnView={true} duration={150}>
                    Voice AI Agents
                  </TypingAnimation>
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
              >
                Transform your marketing efforts with intelligent automation that scales your social media presence, personalizes customer journeys, and maximizes ROI. Reach the right audience with the right message at the right time.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-brand-blue/5 to-brand-gold/5"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl flex items-center justify-center">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
                    <p className="text-gray-600">Supercharge your marketing in 24 hours</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        placeholder="Work Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-colors"
                      />
                    </div>

                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-colors text-left flex items-center justify-between bg-white"
                      >
                        <span className="flex items-center">
                          <span className="mr-3 text-lg">{selectedCountry.flag}</span>
                          <span>{selectedCountry.name}</span>
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-hidden">
                          <div className="p-3 border-b">
                            <div className="relative">
                              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              <input
                                type="text"
                                placeholder="Search countries..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none text-sm"
                              />
                            </div>
                          </div>
                          <div className="max-h-40 overflow-y-auto">
                            {filteredCountries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsDropdownOpen(false);
                                  setSearchTerm('');
                                }}
                                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center text-sm"
                              >
                                <span className="mr-3">{country.flag}</span>
                                <span>{country.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Tell us about your marketing goals..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Book Marketing Demo
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Trusted by 1,000+ marketing teams worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Automations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Complete Marketing Automation Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content creation to campaign analytics, automate every aspect of your marketing and social media strategy with our comprehensive tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automations.map((automation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-transparent to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg flex items-center justify-center mr-4">
                      <automation.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{automation.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{automation.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {automation.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Marketing Benefits:</h4>
                    <ul className="space-y-2">
                      {automation.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-brand-teal font-medium">
                          <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {automation.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                How Marketing Automation Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get intelligent marketing automation deployed in your business within 24 hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Discovery",
                description: "Analyze your current marketing channels and identify automation opportunities"
              },
              {
                step: "02",
                title: "Platform Integration",
                description: "Connect all your marketing tools and social media accounts for unified automation"
              },
              {
                step: "03",
                title: "Campaign Setup",
                description: "Configure automated workflows, content schedules, and audience targeting rules"
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "Deploy automated campaigns and continuously optimize based on performance data"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-brand-teal mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our marketing automation solutions are tailored to meet the unique challenges and opportunities of different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-teal transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how marketing automation is transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8 relative"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-teal font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your marketing and social media strategy with intelligent automation. Scale your reach, improve engagement, and drive more qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Marketing Demo
              </a>
              <a
                href="tel:+1-555-0123"
                className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketingSocialMedia;