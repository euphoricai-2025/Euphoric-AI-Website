import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, FileText, Clock, AlertCircle, CreditCard, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const BillingCollections = () => {
  const automations = [
    {
      icon: FileText,
      name: 'Automated Invoice Generation',
      description: 'Generate and send professional invoices automatically based on completed work, contracts, or scheduled billing cycles.',
      features: [
        'Smart invoice generation from project data',
        'Professional branded invoice templates',
        'Multi-currency and tax calculation support',
        'Automated delivery via email and portal',
        'PDF generation and digital signatures',
        'Integration with accounting software'
      ],
      benefits: [
        'Reduce invoicing time by 90%',
        'Eliminate billing errors and delays',
        'Improve cash flow predictability',
        'Professional brand presentation'
      ],
      platforms: ['QuickBooks', 'Xero', 'FreshBooks', 'Zapier']
    },
    {
      icon: AlertCircle,
      name: 'Smart Payment Reminders',
      description: 'Send personalized payment reminders that adapt tone and frequency based on customer relationship and payment history.',
      features: [
        'Intelligent reminder scheduling',
        'Personalized messaging by customer type',
        'Multi-channel delivery (email, SMS, phone)',
        'Escalation workflows for overdue accounts',
        'Payment link integration',
        'Customer portal access'
      ],
      benefits: [
        'Reduce payment delays by 65%',
        'Improve customer relationships',
        'Decrease manual follow-up time by 80%',
        'Increase on-time payment rates by 45%'
      ],
      platforms: ['Stripe', 'PayPal', 'Square', 'Make.com']
    },
    {
      icon: Clock,
      name: 'Collections Workflow Automation',
      description: 'Streamline your collections process with intelligent workflows that balance firm follow-up with customer relationship preservation.',
      features: [
        'Progressive collections sequences',
        'Customer segmentation and personalization',
        'Automated payment plan setup',
        'Legal notice generation and tracking',
        'Collection agency handoff automation',
        'Settlement negotiation tracking'
      ],
      benefits: [
        'Recover 35% more overdue payments',
        'Maintain customer relationships during collections',
        'Reduce bad debt by 50%',
        'Streamline legal compliance processes'
      ],
      platforms: ['n8n', 'Make.com', 'Custom Integration']
    },
    {
      icon: TrendingUp,
      name: 'Revenue Recovery System',
      description: 'Identify and recover lost revenue through failed payments, subscription lapses, and billing discrepancies.',
      features: [
        'Failed payment retry automation',
        'Subscription dunning management',
        'Billing discrepancy detection',
        'Revenue leakage analysis',
        'Customer winback campaigns',
        'Payment method update requests'
      ],
      benefits: [
        'Recover 25% of failed subscription payments',
        'Reduce involuntary churn by 40%',
        'Identify revenue leaks worth 3-5% of total revenue',
        'Improve customer lifetime value'
      ],
      platforms: ['Stripe', 'Chargebee', 'Recurly', 'Zapier']
    },
    {
      icon: CreditCard,
      name: 'Payment Processing Automation',
      description: 'Automate payment acceptance, processing, and reconciliation across multiple payment methods and channels.',
      features: [
        'Multi-payment method acceptance',
        'Automatic payment reconciliation',
        'Split payment handling',
        'Refund and chargeback management',
        'PCI compliance automation',
        'Real-time payment notifications'
      ],
      benefits: [
        'Reduce payment processing time by 95%',
        'Minimize human errors in reconciliation',
        'Improve customer payment experience',
        'Ensure PCI compliance automatically'
      ],
      platforms: ['Stripe', 'Square', 'PayPal', 'Authorize.Net']
    },
    {
      icon: DollarSign,
      name: 'Cash Flow Optimization',
      description: 'Monitor and optimize cash flow with predictive analytics and automated financial reporting.',
      features: [
        'Cash flow forecasting and alerts',
        'Aging report automation',
        'Payment trend analysis',
        'Customer credit scoring',
        'Working capital optimization',
        'Financial dashboard automation'
      ],
      benefits: [
        'Improve cash flow predictability by 80%',
        'Reduce DSO (Days Sales Outstanding) by 25%',
        'Early identification of cash flow issues',
        'Data-driven credit decisions'
      ],
      platforms: ['QuickBooks', 'Xero', 'NetSuite', 'Custom Analytics']
    }
  ];

  const industries = [
    { name: 'Professional Services', description: 'Automate project-based billing and client payments' },
    { name: 'SaaS & Subscriptions', description: 'Manage recurring billing and reduce churn' },
    { name: 'E-commerce', description: 'Process orders and manage payment failures' },
    { name: 'Healthcare', description: 'Handle patient billing and insurance claims' },
    { name: 'Construction', description: 'Manage progress billing and contractor payments' },
    { name: 'Retail', description: 'Automate B2B invoice processing and collections' }
  ];

  const painPoints = [
    {
      problem: 'Late payments affecting cash flow',
      solution: 'Automated reminders reduce payment delays by 65%',
      icon: Clock
    },
    {
      problem: 'Time-consuming manual invoicing',
      solution: 'Generate invoices 90% faster with automation',
      icon: FileText
    },
    {
      problem: 'Difficult collections conversations',
      solution: 'Professional automated workflows preserve relationships',
      icon: AlertCircle
    },
    {
      problem: 'Lost revenue from failed payments',
      solution: 'Recover 25% of failed payments automatically',
      icon: DollarSign
    }
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
              <DollarSign className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Billing &</span><br />
              <span className="text-euphoric-gradient">Collections Automation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Automate your entire billing and collections process to improve cash flow, reduce late payments, and eliminate manual invoice processing. Get paid faster while maintaining excellent customer relationships.
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
                Automate Your Billing
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
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Billing Automation</h3>
                <p className="text-white/80 text-sm">Financial Flow & Collection Intelligence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Billing Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your biggest billing pain points into automated solutions that improve cash flow and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start">
                  <div className="icon-badge mr-4 flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.problem}</h3>
                    <p className="text-brand-teal font-semibold">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Billing & Collections Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From invoice generation to payment collection, automate every aspect of your billing process with our comprehensive automation tools.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Billing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our billing automations adapt to the unique requirements and regulations of your specific industry.
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Billing Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that improve cash flow and reduce administrative burden
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">65% Faster Payments</h3>
              <p className="text-gray-600">
                Automated reminders and streamlined payment processes significantly reduce payment delays.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">90% Less Manual Work</h3>
              <p className="text-gray-600">
                Eliminate repetitive billing tasks and focus your team on higher-value activities.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">25% Revenue Recovery</h3>
              <p className="text-gray-600">
                Recover lost revenue from failed payments and optimize your cash flow automatically.
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
              Ready to Automate Your Billing Process?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start getting paid faster and reduce billing workload by 90%. Join thousands of businesses that have transformed their cash flow with our automation solutions.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Automate Your Billing
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingCollections;