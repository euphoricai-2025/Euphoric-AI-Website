import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Mail, Calendar, Phone, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const LeadManagementNurturing = () => {
  const automations = [
    {
      icon: Target,
      name: 'Lead Qualification & Scoring',
      description: 'Automatically qualify and score incoming leads by asking the right questions and connecting to your CRM system.',
      features: [
        'Budget qualification and timeline assessment',
        'Decision maker identification',
        'Pain point discovery through conversation',
        'CRM integration and lead scoring',
        'Automated lead routing to sales team',
        'Real-time qualification reports'
      ],
      benefits: [
        'Increase qualified leads by 85%',
        'Reduce sales team screening time by 60%',
        'Improve conversion rates by 40%',
        'Never miss a potential opportunity'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Mail,
      name: 'Lead Nurturing Campaigns',
      description: 'Keep prospects engaged with personalized email and SMS sequences that guide them through your sales funnel.',
      features: [
        'Multi-channel messaging (email, SMS, voice)',
        'Behavioral trigger-based campaigns',
        'Personalized content delivery',
        'A/B testing for optimization',
        'Engagement tracking and analytics',
        'Automated follow-up scheduling'
      ],
      benefits: [
        'Increase lead engagement by 70%',
        'Reduce time to close by 35%',
        'Improve email open rates by 60%',
        'Boost conversion rates by 45%'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Calendar,
      name: 'Appointment Scheduling Automation',
      description: 'Let prospects book appointments 24/7 while automatically syncing with your calendar and sending reminders.',
      features: [
        '24/7 automated booking system',
        'Real-time calendar synchronization',
        'Multi-channel appointment reminders',
        'Rescheduling and cancellation handling',
        'Buffer time and travel coordination',
        'No-show reduction strategies'
      ],
      benefits: [
        'Reduce no-shows by 80%',
        'Increase booking conversion by 70%',
        'Save 15+ hours weekly on scheduling',
        'Improve customer satisfaction scores'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Phone,
      name: 'Follow-up Automation System',
      description: 'Stay in touch with prospects and customers through intelligent, personalized follow-up campaigns.',
      features: [
        'Intelligent follow-up sequences',
        'Multi-touch campaign management',
        'Personalized messaging based on behavior',
        'Response tracking and analysis',
        'Lead temperature monitoring',
        'Automated handoff to sales team'
      ],
      benefits: [
        'Increase response rates by 65%',
        'Reduce manual follow-up time by 90%',
        'Improve lead nurturing consistency',
        'Boost sales pipeline velocity by 50%'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: Users,
      name: 'Lead Capture & Distribution',
      description: 'Capture leads from multiple sources and instantly distribute them to the right sales representatives.',
      features: [
        'Multi-channel lead capture (website, social, ads)',
        'Real-time lead distribution',
        'Territory-based routing',
        'Lead source tracking and attribution',
        'Duplicate detection and merging',
        'Performance analytics and reporting'
      ],
      benefits: [
        'Capture 40% more leads from existing traffic',
        'Reduce lead response time to under 60 seconds',
        'Improve lead assignment efficiency',
        'Increase overall conversion rates by 55%'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    },
    {
      icon: TrendingUp,
      name: 'Lead Analytics & Reporting',
      description: 'Track lead performance, conversion rates, and ROI with automated reporting and dashboard updates.',
      features: [
        'Real-time lead performance dashboards',
        'Conversion rate tracking by source',
        'ROI calculation and reporting',
        'Lead lifecycle analytics',
        'Sales team performance metrics',
        'Automated monthly reports'
      ],
      benefits: [
        'Improve marketing ROI visibility by 80%',
        'Identify top-performing channels',
        'Optimize lead generation strategies',
        'Increase data-driven decision making'
      ],
      platforms: ['n8n', 'Make.com', 'Zapier']
    }
  ];

  const industries = [
    { name: 'Real Estate', description: 'Qualify property inquiries and nurture potential buyers' },
    { name: 'Financial Services', description: 'Screen investment prospects and schedule consultations' },
    { name: 'Healthcare', description: 'Manage patient inquiries and appointment scheduling' },
    { name: 'Insurance', description: 'Qualify policy prospects and follow up on quotes' },
    { name: 'E-commerce', description: 'Recover abandoned carts and nurture repeat customers' },
    { name: 'B2B Services', description: 'Qualify enterprise prospects and manage sales pipeline' }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* SEO-Optimized Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="icon-badge-lg mx-auto mb-6"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Lead Management &</span><br />
              <span className="text-euphoric-gradient">Nurturing Automation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Transform your lead generation and nurturing process with AI-powered automation solutions. Qualify prospects faster, nurture leads more effectively, and convert more opportunities into customers with our intelligent lead management systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Start Automating Leads
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Lead Management</h3>
                <p className="text-white/80 text-sm">Futuristic Dashboard & Analytics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Lead Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial capture to final conversion, automate every step of your lead management process with our comprehensive suite of AI-powered tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {automations.map((automation, index) => (
              <motion.div
                key={automation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-6">
                  <div className="icon-badge mr-4">
                    <automation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{automation.name}</h3>
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {automation.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-brand-teal font-medium">
                        <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {automation.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Lead Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our lead management automations are tailored to meet the unique requirements of different industries and business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Lead Management Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that transform your sales process and accelerate business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">85% More Qualified Leads</h3>
              <p className="text-gray-600">
                Our AI qualification system ensures your sales team only works with high-potential prospects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">60-Second Response Time</h3>
              <p className="text-gray-600">
                Never lose a hot lead again with instant qualification and routing to your sales team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">40% Higher Conversion</h3>
              <p className="text-gray-600">
                Personalized nurturing sequences and timely follow-ups dramatically improve your close rates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Lead Management?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start automating your lead qualification, nurturing, and conversion process today. See results in the first 30 days or your money back.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Start Automating Leads
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadManagementNurturing;