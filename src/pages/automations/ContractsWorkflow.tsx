import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CheckSquare, Clock, Users, Shield, AlertCircle, ArrowRight, CheckCircle, TrendingUp, Zap } from 'lucide-react';

const ContractsWorkflow = () => {
  const automations = [
    {
      icon: FileText,
      name: 'Contract Generation Automation',
      description: 'Automatically generate contracts and agreements from templates with smart field population and customization.',
      features: [
        'Dynamic template-based generation',
        'Smart field auto-population',
        'Multi-format export (PDF, Word, DocuSign)',
        'Brand customization and styling',
        'Legal clause library integration',
        'Version control and tracking'
      ],
      benefits: [
        'Reduce contract creation time by 90%',
        'Eliminate manual data entry errors',
        'Ensure consistent legal language',
        'Accelerate deal closure by 60%'
      ],
      platforms: ['DocuSign', 'PandaDoc', 'HelloSign', 'ContractWorks']
    },
    {
      icon: CheckSquare,
      name: 'Approval Workflow Management',
      description: 'Streamline contract approvals with intelligent routing, escalation, and stakeholder notification systems.',
      features: [
        'Multi-stage approval routing',
        'Conditional approval logic',
        'Automatic escalation workflows',
        'Real-time status tracking',
        'Mobile approval capabilities',
        'Audit trail maintenance'
      ],
      benefits: [
        'Reduce approval time by 75%',
        'Eliminate bottlenecks and delays',
        'Improve compliance tracking',
        'Enhance accountability and transparency'
      ],
      platforms: ['Microsoft Power Platform', 'ServiceNow', 'Nintex', 'K2']
    },
    {
      icon: Clock,
      name: 'Contract Lifecycle Tracking',
      description: 'Monitor contracts throughout their entire lifecycle with automated reminders and milestone tracking.',
      features: [
        'Automated renewal notifications',
        'Contract expiration alerts',
        'Milestone and deadline tracking',
        'Performance metric monitoring',
        'Risk assessment automation',
        'Compliance deadline management'
      ],
      benefits: [
        'Never miss a renewal opportunity',
        'Reduce contract risks by 80%',
        'Improve vendor relationship management',
        'Ensure 100% compliance adherence'
      ],
      platforms: ['ContractWorks', 'Icertis', 'Agiloft', 'Concord']
    },
    {
      icon: Users,
      name: 'Stakeholder Collaboration Hub',
      description: 'Enable seamless collaboration between legal, sales, and business teams with centralized contract workflows.',
      features: [
        'Centralized document collaboration',
        'Real-time editing and comments',
        'Role-based access controls',
        'Communication thread tracking',
        'Change log and version history',
        'Integration with team tools'
      ],
      benefits: [
        'Improve collaboration efficiency by 70%',
        'Reduce email back-and-forth by 90%',
        'Accelerate negotiations',
        'Maintain complete visibility'
      ],
      platforms: ['Microsoft Teams', 'Slack', 'Google Workspace', 'Box']
    },
    {
      icon: Shield,
      name: 'Compliance & Risk Automation',
      description: 'Ensure contracts meet regulatory requirements with automated compliance checking and risk assessment.',
      features: [
        'Automated compliance verification',
        'Risk scoring and assessment',
        'Regulatory change monitoring',
        'Policy enforcement automation',
        'Data privacy compliance checks',
        'Insurance and liability tracking'
      ],
      benefits: [
        'Reduce compliance risks by 95%',
        'Automate regulatory adherence',
        'Prevent costly legal issues',
        'Streamline audit processes'
      ],
      platforms: ['Legal Compliance Tools', 'Thomson Reuters', 'Practical Law', 'Custom Solutions']
    },
    {
      icon: AlertCircle,
      name: 'Contract Performance Monitoring',
      description: 'Track contract performance against key metrics with automated reporting and alert systems.',
      features: [
        'KPI tracking and monitoring',
        'Performance benchmark comparisons',
        'Automated performance reports',
        'SLA compliance tracking',
        'Financial performance analysis',
        'Vendor scoring automation'
      ],
      benefits: [
        'Improve contract performance visibility',
        'Identify underperforming agreements',
        'Optimize vendor relationships',
        'Maximize contract value by 40%'
      ],
      platforms: ['Contract Analytics', 'Business Intelligence Tools', 'Custom Dashboards', 'ERP Integration']
    }
  ];

  const industries = [
    { name: 'Legal Services', description: 'Streamline client contract processing and legal workflows' },
    { name: 'Real Estate', description: 'Automate property agreements and lease management' },
    { name: 'Construction', description: 'Manage subcontractor agreements and project contracts' },
    { name: 'Technology', description: 'Handle software licenses and partnership agreements' },
    { name: 'Healthcare', description: 'Process vendor contracts and compliance agreements' },
    { name: 'Financial Services', description: 'Manage client agreements and regulatory contracts' }
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
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Contracts & Workflow</span><br />
              <span className="text-euphoric-gradient">Automation Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Streamline your contract management from creation to completion with intelligent automation. Reduce processing time, ensure compliance, and never miss important deadlines with our comprehensive contract workflow solutions.
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
                Automate Contract Workflows
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
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-600 via-purple-600 to-blue-700 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Contract Automation</h3>
                <p className="text-white/80 text-sm">Digital Workflows & Smart Processing</p>
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
              Complete Contract Automation Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From contract generation to performance monitoring, automate every aspect of your contract management process with our intelligent workflow solutions.
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
              Industry-Specific Contract Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our contract automation solutions are designed to meet the unique legal and compliance requirements of different industries.
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
              Why Choose Our Contract Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that streamline legal processes and reduce business risk
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">90% Faster Contract Creation</h3>
              <p className="text-gray-600">
                Automated template generation and smart field population dramatically reduce contract preparation time.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">95% Risk Reduction</h3>
              <p className="text-gray-600">
                Automated compliance checking and risk assessment prevent costly legal issues and ensure regulatory adherence.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">75% Faster Approvals</h3>
              <p className="text-gray-600">
                Intelligent routing and escalation workflows eliminate bottlenecks and accelerate contract approvals.
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
              Ready to Streamline Your Contracts?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Transform your contract management process with intelligent automation. Reduce risks, accelerate approvals, and ensure compliance automatically.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-ai/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Automate Contract Workflows
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractsWorkflow;