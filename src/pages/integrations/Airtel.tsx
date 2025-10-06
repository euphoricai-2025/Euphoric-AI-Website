import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, Globe, Shield, Phone, ArrowRight, CheckCircle, Search, ChevronDown, Users, Signal } from 'lucide-react';
import { TypingAnimation } from '../../components/magicui/typing-animation';
import { TextAnimate } from '../../components/magicui/text-animate';

// Comprehensive country codes with flags - focusing on Airtel markets
const countryCodes = [
  { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
  { code: '+880', country: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+234', country: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: '+256', country: 'UG', name: 'Uganda', flag: '🇺🇬' },
  { code: '+255', country: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+260', country: 'ZM', name: 'Zambia', flag: '🇿🇲' },
  { code: '+265', country: 'MW', name: 'Malawi', flag: '🇲🇼' },
  { code: '+235', country: 'TD', name: 'Chad', flag: '🇹🇩' },
  { code: '+226', country: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+223', country: 'ML', name: 'Mali', flag: '🇲🇱' },
  { code: '+227', country: 'NE', name: 'Niger', flag: '🇳🇪' },
  { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪' }
];

const AirtelIntegration = () => {
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

  const useCases = [
    {
      icon: Network,
      title: 'Regional Market Expansion Agent',
      description: 'Expand your AI voice services across South Asia and Africa with Airtel\'s extensive telecommunications infrastructure, reaching customers in their local languages and time zones.',
      features: [
        'Multi-language support for regional dialects',
        'Local number provisioning in 18+ countries',
        'Timezone-aware call scheduling',
        'Cultural adaptation and localization',
        'Regulatory compliance for each market'
      ],
      benefits: [
        'Reach 500M+ potential customers across regions',
        'Reduce international calling costs by 70%',
        'Improve customer response rates by 45%',
        'Ensure 99.5% network reliability'
      ]
    },
    {
      icon: Phone,
      title: 'Enterprise Call Quality Agent',
      description: 'Deliver crystal-clear AI voice interactions with Airtel\'s premium voice infrastructure, ensuring professional communication for your business.',
      features: [
        'HD voice quality optimization',
        'Network redundancy and failover',
        'Call quality monitoring and analytics',
        'Bandwidth optimization algorithms',
        'Real-time performance dashboards'
      ],
      benefits: [
        'Achieve 99.9% call completion rates',
        'Reduce customer complaints by 80%',
        'Improve AI speech recognition accuracy by 35%',
        'Enhance overall customer satisfaction scores'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Communications Agent',
      description: 'Protect sensitive business communications with Airtel\'s enterprise-grade security infrastructure and compliance frameworks.',
      features: [
        'End-to-end call encryption',
        'Secure SIP trunking protocols',
        'Fraud detection and prevention',
        'Compliance monitoring and reporting',
        'Data sovereignty and local storage'
      ],
      benefits: [
        'Meet local data protection requirements',
        'Reduce security risks by 90%',
        'Ensure regulatory compliance across all markets',
        'Maintain customer trust and confidence'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Raj Patel',
      role: 'Chief Operations Officer',
      company: 'Mumbai Financial Services',
      content: 'Airtel\'s regional network coverage transformed our customer outreach in India. Our AI agents now handle 500+ calls daily with 99% call completion rates and customers love the local language support.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Amara Okafor',
      role: 'Director of Operations',
      company: 'Lagos Tech Solutions',
      content: 'Expanding into African markets was seamless with Airtel\'s infrastructure. Our customer service is now available 24/7 across 8 countries, and client satisfaction has increased by 60%.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?w=150&h=150&fit=crop&crop=face'
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
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Airtel Integration</span>
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
                Expand your AI voice services across South Asia and Africa with Airtel\'s robust telecommunications infrastructure and regional expertise.
              </TextAnimate>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                >
                  Connect Airtel
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Airtel Integration Demo</h3>
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
                  Book Airtel Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Airtel Integration Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage Airtel\'s extensive network infrastructure to deliver exceptional AI voice experiences across emerging markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="text-brand-teal mb-6">
                    <Icon className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{useCase.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {useCase.features.map((feature, idx) => (
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
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
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
              Get started with Airtel integration in four simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: 1, title: 'Choose Your Markets', description: 'Select regions across South Asia and Africa for deployment' },
              { step: 2, title: 'Configure Network Settings', description: 'Set up localized voice preferences and compliance rules' },
              { step: 3, title: 'Connect AI Agent', description: 'Integrate your AI voice agent with Airtel infrastructure' },
              { step: 4, title: 'Launch Regionally', description: 'Deploy across multiple countries with local optimization' }
            ].map((step, index) => (
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
      <section className="py-20 bg-white">
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
              Airtel\'s network spans multiple industries across emerging markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Financial Services', description: 'Banking and mobile money across Africa and Asia' },
              { name: 'E-commerce', description: 'Online retail and marketplace communications' },
              { name: 'Healthcare', description: 'Telemedicine and patient communication systems' },
              { name: 'Education', description: 'Remote learning and student support services' },
              { name: 'Agriculture', description: 'Farmer assistance and supply chain coordination' },
              { name: 'Government', description: 'Public services and citizen engagement platforms' }
            ].map((industry, index) => (
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

      {/* Regional Coverage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Extensive Network</span>
              <span className="text-gray-900"> Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Reach customers across 18+ countries with Airtel\'s robust telecommunications infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { country: 'India', coverage: 'Pan-India Coverage', users: '350M+ subscribers', icon: '🇮🇳' },
              { country: 'Bangladesh', coverage: 'Nationwide Network', users: '50M+ subscribers', icon: '🇧🇩' },
              { country: 'Sri Lanka', coverage: 'National Coverage', users: '12M+ subscribers', icon: '🇱🇰' },
              { country: 'Africa', coverage: '14 Countries', users: '120M+ subscribers', icon: <Globe className="w-5 h-5" /> }
            ].map((region, index) => (
              <motion.div
                key={region.country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl mb-4">{region.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{region.country}</h3>
                <p className="text-gray-600 text-sm mb-2">{region.coverage}</p>
                <div className="bg-brand-teal/10 rounded-lg p-2">
                  <p className="text-brand-teal font-semibold text-sm">{region.users}</p>
                </div>
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
              See how businesses are expanding globally with Airtel\'s network infrastructure.
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-blue to-brand-gray rounded-3xl p-12 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight"
            >
              Ready to Expand Globally?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 mb-8 max-w-4xl mx-auto"
            >
              Join businesses using Airtel\'s telecommunications infrastructure to deliver AI voice services across emerging markets.
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
                Connect Airtel
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

export default AirtelIntegration;