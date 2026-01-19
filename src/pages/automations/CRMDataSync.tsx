import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, RefreshCw, Users, FileText, Shield, Zap, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const CRMDataSync = () => {
  const automations = [
    {
      icon: Database,
      name: 'Customer Data Integration',
      description: 'Automatically sync customer data across all your business systems to maintain a single source of truth.',
      features: [
        'Real-time bi-directional data sync',
        'Customer record deduplication',
        'Data validation and cleansing',
        'Cross-platform customer matching',
        'Automated data enrichment',
        'Privacy compliance management'
      ],
      benefits: [
        'Eliminate data silos completely',
        'Reduce data errors by 95%',
        'Save 25+ hours weekly on data entry',
        'Improve customer insights accuracy'
      ],
      platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zapier']
    },
    {
      icon: RefreshCw,
      name: 'Lead Distribution System',
      description: 'Automatically distribute and sync leads across sales teams and marketing platforms for optimal follow-up.',
      features: [
        'Intelligent lead routing algorithms',
        'Real-time lead assignment',
        'Multi-system lead synchronization',
        'Territory-based distribution',
        'Lead scoring integration',
        'Performance tracking and optimization'
      ],
      benefits: [
        'Reduce lead response time to under 2 minutes',
        'Increase lead conversion by 60%',
        'Eliminate manual lead assignment',
        'Improve sales team efficiency'
      ],
      platforms: ['Salesforce', 'Microsoft Dynamics', 'Zoho CRM', 'Make.com']
    },
    {
      icon: Users,
      name: 'Contact Management Automation',
      description: 'Keep all customer touchpoints synchronized with automated contact updates and relationship mapping.',
      features: [
        'Automated contact profile updates',
        'Relationship mapping and tracking',
        'Communication history synchronization',
        'Contact lifecycle management',
        'Duplicate contact merging',
        'Social media profile integration'
      ],
      benefits: [
        'Maintain 99% contact data accuracy',
        'Reduce duplicate contacts by 90%',
        'Improve customer relationship visibility',
        'Streamline communication tracking'
      ],
      platforms: ['HubSpot', 'Salesforce', 'ActiveCampaign', 'Intercom']
    },
    {
      icon: FileText,
      name: 'Activity & Task Synchronization',
      description: 'Sync all customer activities, tasks, and interactions across your entire sales and marketing stack.',
      features: [
        'Cross-platform activity tracking',
        'Automated task creation and updates',
        'Meeting and call synchronization',
        'Email interaction logging',
        'Document and proposal tracking',
        'Timeline consolidation'
      ],
      benefits: [
        'Never miss a follow-up opportunity',
        'Improve activity visibility by 100%',
        'Reduce administrative time by 70%',
        'Enhance team collaboration'
      ],
      platforms: ['Google Workspace', 'Microsoft 365', 'Slack', 'Notion']
    },
    {
      icon: TrendingUp,
      name: 'Sales Pipeline Synchronization',
      description: 'Keep your sales pipeline data consistent across all platforms with real-time opportunity updates.',
      features: [
        'Real-time pipeline updates',
        'Opportunity stage synchronization',
        'Deal value and probability tracking',
        'Forecast data consolidation',
        'Win/loss reason analysis',
        'Revenue attribution reporting'
      ],
      benefits: [
        'Improve forecast accuracy by 80%',
        'Reduce pipeline data discrepancies',
        'Accelerate deal closure by 35%',
        'Enhanced sales reporting'
      ],
      platforms: ['Salesforce', 'Pipedrive', 'HubSpot', 'Zoho CRM']
    },
    {
      icon: Shield,
      name: 'Data Security & Compliance',
      description: 'Ensure data security and regulatory compliance while maintaining seamless data synchronization.',
      features: [
        'End-to-end data encryption',
        'GDPR and CCPA compliance automation',
        'Audit trail maintenance',
        'Access control and permissions',
        'Data retention policy enforcement',
        'Breach detection and response'
      ],
      benefits: [
        'Maintain 100% compliance standards',
        'Reduce security risks by 90%',
        'Automated regulatory reporting',
        'Peace of mind with data handling'
      ],
      platforms: ['Custom Security', 'AWS', 'Microsoft Azure', 'Google Cloud']
    }
  ];

  const industries = [
    { name: 'SaaS', description: 'Sync user data and usage analytics across sales and support' },
    { name: 'Real Estate', description: 'Manage property and client data across multiple platforms' },
    { name: 'Financial Services', description: 'Maintain compliance while syncing client portfolios' },
    { name: 'Healthcare', description: 'Secure patient data synchronization across systems' },
    { name: 'Manufacturing', description: 'Integrate customer and supplier data workflows' },
    { name: 'Professional Services', description: 'Sync client projects and billing information' }
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
              <Database className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">CRM & Data Sync</span><br />
              <span className="text-euphoric-gradient">Automation Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Eliminate data silos and maintain perfect customer records across all your business systems. Keep your CRM, marketing tools, and sales platforms perfectly synchronized with intelligent automation that ensures data accuracy and consistency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <a
                href="https://calendly.com/euphoricai-ai/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Sync Your Data Systems
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
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-500 via-teal-600 to-cyan-700 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">CRM Data Sync</h3>
                <p className="text-white/80 text-sm">Interconnected Systems & Real-time Flows</p>
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
              Complete CRM & Data Sync Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From customer data integration to secure compliance management, automate every aspect of your data synchronization with our comprehensive tools.
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Business Impact:</h4>
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
              Industry-Specific Data Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our CRM and data synchronization solutions are designed to meet the unique compliance and operational requirements of different industries.
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
              Why Choose Our CRM & Data Sync Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that eliminate data inconsistencies and improve business efficiency
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">95% Fewer Data Errors</h3>
              <p className="text-gray-600">
                Automated data validation and synchronization eliminates manual entry errors and inconsistencies.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">25+ Hours Saved Weekly</h3>
              <p className="text-gray-600">
                Eliminate manual data entry and synchronization tasks across all your business systems.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">60% Better Lead Conversion</h3>
              <p className="text-gray-600">
                Perfect data synchronization ensures no leads fall through the cracks and improves follow-up efficiency.
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
              Ready to Sync Your Business Data?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Eliminate data silos and maintain perfect customer records across all systems. Start with our automated data synchronization solutions today.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-ai/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Sync Your Data Systems
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMDataSync;