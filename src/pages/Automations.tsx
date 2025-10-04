import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Users, DollarSign, Building, Phone, Mail, Calendar, FileText, TrendingUp, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const Automations = () => {
  const automations = [
    // N8N Automations
    {
      name: 'Lead Qualification & Scoring',
      icon: Users,
      category: 'N8N Automations',
      description: 'Automatically qualify and score incoming leads by asking the right questions and connecting to your CRM.',
      features: ['Budget qualification', 'Decision maker identification', 'Timeline assessment', 'CRM integration'],
      path: '/automations/n8n-lead-qualification'
    },
    {
      name: 'Appointment Scheduling System',
      icon: Calendar,
      category: 'N8N Automations',
      description: 'Let customers book appointments 24/7 while automatically syncing with your calendar and sending reminders.',
      features: ['24/7 booking', 'Calendar sync', 'Automated reminders', 'No-show reduction'],
      path: '/automations/n8n-appointment-scheduling'
    },
    {
      name: 'Customer Follow-up Sequences',
      icon: Mail,
      category: 'N8N Automations',
      description: 'Stay in touch with prospects and customers through automated email and SMS follow-up campaigns.',
      features: ['Multi-channel messaging', 'Personalized content', 'Engagement tracking', 'Response automation'],
      path: '/automations/n8n-customer-followup'
    },
    {
      name: 'Multi-Channel Lead Capture',
      icon: Zap,
      category: 'N8N Automations',
      description: 'Capture leads from your website, social media, and phone calls, then route them to the right person instantly.',
      features: ['Website integration', 'Social media capture', 'Lead routing', 'Response speed tracking'],
      path: '/automations/n8n-lead-capture'
    },

    // Make.com Automations
    {
      name: 'Order Confirmation & Tracking',
      icon: CheckCircle,
      category: 'Make.com Automations',
      description: 'Automatically confirm orders with customers, verify details, and send tracking updates to reduce chargebacks.',
      features: ['Order verification calls', 'Payment confirmation', 'Tracking notifications', 'Customer confidence building'],
      path: '/automations/make-order-confirmation'
    },
    {
      name: 'Patient Appointment Reminders',
      icon: Calendar,
      category: 'Make.com Automations',
      description: 'Reduce no-shows by up to 65% with automated appointment reminders via phone, SMS, and email.',
      features: ['Multi-channel reminders', 'Smart timing', 'Rescheduling options', 'Insurance verification'],
      path: '/automations/make-patient-reminders'
    },
    {
      name: 'Real Estate Lead Follow-up',
      icon: Building,
      category: 'Make.com Automations',
      description: 'Respond to property inquiries within 60 seconds and nurture leads with personalized follow-up.',
      features: ['Instant response', 'Property matching', 'Showing coordination', 'Market updates'],
      path: '/automations/make-real-estate-followup'
    },
    {
      name: 'Review Collection Automation',
      icon: TrendingUp,
      category: 'Make.com Automations',
      description: 'Automatically request reviews from happy customers and manage your online reputation.',
      features: ['Review requests', 'Review monitoring', 'Response automation', 'Reputation management'],
      path: '/automations/make-review-collection'
    },

    // Zapier Automations
    {
      name: 'Automated Bookkeeping',
      icon: FileText,
      category: 'Zapier Automations',
      description: 'Connect your bank accounts, receipts, and invoices to automatically categorize transactions and update your books.',
      features: ['Transaction categorization', 'Receipt scanning', 'Bank sync', 'Tax preparation'],
      path: '/automations/zapier-bookkeeping'
    },
    {
      name: 'Invoice Generation & Tracking',
      icon: DollarSign,
      category: 'Zapier Automations',
      description: 'Create and send professional invoices automatically, then track payments and send friendly reminders.',
      features: ['Auto invoice creation', 'Payment tracking', 'Late payment alerts', 'Professional templates'],
      path: '/automations/zapier-invoicing'
    },
    {
      name: 'Expense Management',
      icon: TrendingUp,
      category: 'Zapier Automations',
      description: 'Capture receipts, categorize expenses, and get approval workflows to streamline business spending.',
      features: ['Receipt capture', 'Expense categorization', 'Approval workflows', 'Spending reports'],
      path: '/automations/zapier-expense-management'
    },
    {
      name: 'Payment Reminder System',
      icon: DollarSign,
      category: 'Zapier Automations',
      description: 'Automatically send payment reminders to customers and track which invoices are overdue.',
      features: ['Automated reminders', 'Overdue tracking', 'Payment confirmation', 'Cash flow reports'],
      path: '/automations/zapier-payment-reminders'
    },

    // Custom Automations
    {
      name: 'Insurance Claims Processing',
      icon: CheckCircle,
      category: 'Custom Automations',
      description: 'Speed up insurance claims by automatically reviewing documents and routing claims to the right adjusters.',
      features: ['Document scanning', 'Damage assessment', 'Claim routing', 'Customer updates'],
      path: '/automations/custom-insurance-claims'
    },
    {
      name: 'Healthcare Test Results Delivery',
      icon: FileText,
      category: 'Custom Automations',
      description: 'Deliver test results to patients professionally while ensuring they understand next steps.',
      features: ['Results explanation', 'Follow-up scheduling', 'Doctor referrals', 'Patient education'],
      path: '/automations/custom-healthcare-results'
    },
    {
      name: 'E-commerce Cart Recovery',
      icon: Building,
      category: 'Custom Automations',
      description: 'Win back customers who abandoned their shopping carts with personalized follow-up calls and offers.',
      features: ['Abandoned cart detection', 'Personalized outreach', 'Discount offers', 'Purchase assistance'],
      path: '/automations/custom-cart-recovery'
    },
    {
      name: 'Financial Advisory Scheduling',
      icon: Calendar,
      category: 'Custom Automations',
      description: 'Qualify potential investment clients and schedule consultations while gathering financial information.',
      features: ['Investment goal assessment', 'Risk evaluation', 'Advisor matching', 'Meeting scheduling'],
      path: '/automations/custom-financial-advisory'
    },

    // Additional Popular Automations
    {
      name: 'AI Calling Agents',
      icon: Phone,
      category: 'Popular Automations',
      description: 'Automated voice agents that handle outbound sales calls, lead qualification, and customer follow-ups.',
      features: ['Outbound sales calls', 'Lead qualification', 'CRM integration', 'Call analytics'],
      path: '/automations/calling-agents'
    },
    {
      name: 'Lead Gen AI Agent',
      icon: Users,
      category: 'Popular Automations',
      description: 'Intelligent lead generation system that identifies, qualifies, and nurtures potential customers.',
      features: ['Prospect identification', 'Lead scoring', 'Automated outreach', 'Pipeline management'],
      path: '/automations/lead-gen'
    },
    {
      name: 'AI Chatbot for Websites',
      icon: Bot,
      category: 'Popular Automations',
      description: 'Intelligent chatbots that provide 24/7 customer support and lead qualification on your website.',
      features: ['24/7 availability', 'Multi-language support', 'Lead capture', 'Knowledge base integration'],
      path: '/automations/website-chatbot'
    },
    {
      name: 'WhatsApp + Email Support',
      icon: Mail,
      category: 'Popular Automations',
      description: 'Unified customer support across WhatsApp and email channels with AI-powered responses.',
      features: ['Multi-channel support', 'Automated responses', 'Ticket management', 'Customer history'],
      path: '/automations/whatsapp-support'
    }
  ];

  const categories = [
    'All',
    'N8N Automations',
    'Make.com Automations', 
    'Zapier Automations',
    'Custom Automations',
    'Popular Automations'
  ];
  
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAutomations = selectedCategory === 'All' 
    ? automations 
    : automations.filter(automation => automation.category === selectedCategory);

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="icon-badge-lg mx-auto mb-6"
            >
              <Bot className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">AI</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Automations</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Explore our advanced AI automations designed for n8n workflows, Make.com integrations, Zapier connections, and custom industry-specific solutions.
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
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-brand-teal text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Automations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredAutomations.map((automation, index) => (
              <motion.div
                key={automation.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="icon-badge mr-4">
                    <automation.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{automation.name}</h3>
                    <p className="text-xs text-brand-teal font-medium">{automation.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {automation.description}
                </p>

                <div className="mb-4">
                  <ul className="space-y-1">
                    {automation.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-brand-teal mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={automation.path}
                  className="inline-flex items-center text-brand-teal font-medium text-sm hover:text-brand-teal/80 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Automations?
            </h2>
            <p className="text-lg text-gray-600">
              Designed for efficiency, scalability, and seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Deployment</h3>
              <p className="text-gray-600">
                Get your automation agents up and running in minutes with our plug-and-play solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart AI</h3>
              <p className="text-gray-600">
                Advanced AI models that learn from your business patterns and continuously improve performance.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Grow your automation capabilities as your business expands with flexible, scalable infrastructure.
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start with our Starter pack for just $99/month and transform your operations with AI-powered automations.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automations;