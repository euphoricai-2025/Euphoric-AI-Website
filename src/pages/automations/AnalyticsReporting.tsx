import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, LineChart, AlertTriangle, FileText, Calendar, ArrowRight, CheckCircle, TrendingUp, Shield, Zap, ChevronDown, Search, Phone, Star, Clock, Users, DollarSign } from 'lucide-react';
import { TypingAnimation } from '../../components/magicui/typing-animation';
import { TextAnimate } from '../../components/magicui/text-animate';

const AnalyticsReporting = () => {
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
      icon: BarChart3,
      title: 'Real-Time Dashboard Automation',
      description: 'Create dynamic dashboards that automatically update with your latest business metrics and KPIs in real-time.',
      features: [
        'Live data visualization and updates',
        'Custom KPI tracking and alerts',
        'Multi-source data integration',
        'Mobile-responsive dashboard design',
        'Drill-down analysis capabilities',
        'Role-based access controls'
      ],
      benefits: [
        'Access insights 24/7 from anywhere',
        'Reduce reporting delays by 100%',
        'Improve decision-making speed by 80%',
        'Eliminate manual data compilation'
      ],
      platforms: ['Power BI', 'Tableau', 'Google Analytics', 'Looker']
    },
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically on schedules that fit your business needs with smart formatting.',
      features: [
        'Scheduled report generation',
        'Multi-format output (PDF, Excel, PowerPoint)',
        'Custom branding and formatting',
        'Automated distribution to stakeholders',
        'Interactive report elements',
        'Version control and archiving'
      ],
      benefits: [
        'Save 30+ hours monthly on reporting',
        'Ensure consistent report quality',
        'Never miss a reporting deadline',
        'Improve stakeholder communication'
      ],
      platforms: ['Microsoft Power Platform', 'Google Workspace', 'Zapier', 'n8n']
    },
    {
      icon: PieChart,
      title: 'Performance Analytics Engine',
      description: 'Track and analyze business performance across all departments with automated metric calculation and trending.',
      features: [
        'Cross-departmental performance tracking',
        'Automated metric calculations',
        'Trend analysis and forecasting',
        'Goal tracking and achievement monitoring',
        'Comparative analysis tools',
        'Historical data preservation'
      ],
      benefits: [
        'Identify performance trends 90% faster',
        'Improve goal achievement by 65%',
        'Reduce analysis time by 75%',
        'Make data-driven decisions confidently'
      ],
      platforms: ['Google Analytics', 'Adobe Analytics', 'Mixpanel', 'Amplitude']
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alert & Notification System',
      description: 'Get instant notifications when key metrics hit thresholds or unusual patterns are detected in your data.',
      features: [
        'Intelligent threshold monitoring',
        'Anomaly detection algorithms',
        'Multi-channel alert delivery',
        'Escalation workflow management',
        'Custom alert condition building',
        'Alert fatigue prevention'
      ],
      benefits: [
        'Catch issues before they impact business',
        'Reduce response time by 95%',
        'Prevent revenue loss through early warning',
        'Improve operational efficiency'
      ],
      platforms: ['PagerDuty', 'Slack', 'Microsoft Teams', 'Custom Webhooks']
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics Automation',
      description: 'Leverage machine learning to automatically generate forecasts and predictive insights from your business data.',
      features: [
        'ML-powered forecasting models',
        'Predictive trend identification',
        'Scenario planning and modeling',
        'Risk assessment automation',
        'Customer behavior prediction',
        'Revenue forecasting optimization'
      ],
      benefits: [
        'Improve forecast accuracy by 85%',
        'Identify opportunities 6 months earlier',
        'Reduce planning time by 60%',
        'Enhance strategic decision making'
      ],
      platforms: ['Azure ML', 'AWS SageMaker', 'Google Cloud AI', 'DataRobot']
    },
    {
      icon: Calendar,
      title: 'Scheduled Analytics Workflows',
      description: 'Automate complex analytical processes to run on schedules, ensuring fresh insights are always available.',
      features: [
        'Automated data processing pipelines',
        'Scheduled analysis execution',
        'Data quality monitoring',
        'Error handling and recovery',
        'Workflow dependency management',
        'Performance optimization'
      ],
      benefits: [
        'Ensure data freshness 100% of the time',
        'Reduce manual processing by 90%',
        'Improve data reliability',
        'Scale analytics operations efficiently'
      ],
      platforms: ['Apache Airflow', 'Azure Data Factory', 'AWS Glue', 'Zapier']
    }
  ];

  const stats = [
    { number: '85%', label: 'More Accurate Forecasts', icon: TrendingUp },
    { number: '30+', label: 'Hours Saved Monthly', icon: Clock },
    { number: '80%', label: 'Faster Decisions', icon: Zap },
    { number: '90%', label: 'Reduction in Analysis Time', icon: BarChart3 }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Track sales, inventory, and customer behavior analytics' },
    { name: 'SaaS', description: 'Monitor user engagement, churn, and product metrics' },
    { name: 'Financial Services', description: 'Analyze portfolio performance and risk metrics' },
    { name: 'Healthcare', description: 'Track patient outcomes and operational efficiency' },
    { name: 'Manufacturing', description: 'Monitor production efficiency and quality metrics' },
    { name: 'Marketing Agencies', description: 'Report campaign performance across clients' }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "VP of Operations",
      company: "DataTech Solutions",
      content: "The predictive analytics automation has transformed our business forecasting. We're now making strategic decisions 6 months ahead of market changes.",
      avatar: "SM"
    },
    {
      name: "Michael Chen",
      role: "Head of Analytics",
      company: "Growth Dynamics",
      content: "Real-time dashboards have eliminated our weekly reporting meetings. Everyone has instant access to the KPIs that matter most.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Intelligence Director",
      company: "Scale Ventures",
      content: "The automated report generation saves our team 35 hours monthly. We can focus on insights instead of data compilation.",
      avatar: "ER"
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
                  Analytics & Reporting
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
                Transform your data into actionable insights with intelligent analytics automation. Generate reports automatically, monitor KPIs in real-time, and get predictive insights that drive better business decisions.
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
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
                    <p className="text-gray-600">Transform your analytics in 24 hours</p>
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
                        placeholder="Tell us about your analytics needs..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Book Analytics Demo
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Trusted by 1,000+ businesses worldwide</p>
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
                Complete Analytics Automation Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real-time dashboards to predictive analytics, automate every aspect of your data analysis and reporting workflow.
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
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Analytics Benefits:</h4>
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
                How Analytics Automation Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get intelligent analytics automation deployed in your business within 24 hours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Integration",
                description: "Connect all your data sources and systems to create a unified analytics foundation"
              },
              {
                step: "02",
                title: "Custom Setup",
                description: "Configure dashboards, reports, and alerts tailored to your specific business KPIs"
              },
              {
                step: "03",
                title: "AI Deployment",
                description: "Deploy intelligent automation that monitors, analyzes, and reports on your data 24/7"
              },
              {
                step: "04",
                title: "Insights & Action",
                description: "Receive actionable insights and automated reports that drive better business decisions"
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
              Our analytics automation solutions are tailored to track the metrics that matter most in your industry
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
              See how analytics automation is transforming businesses across industries
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
              Ready to Automate Your Analytics?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Turn your data into your competitive advantage with intelligent analytics automation. Get insights that drive better decisions and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Analytics Demo
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

export default AnalyticsReporting;