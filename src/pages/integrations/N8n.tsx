import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Workflow, Zap, Code, GitBranch, ArrowRight, TrendingUp, Settings } from 'lucide-react';

const N8nIntegration = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Open-Source Automation Platform',
      description: 'Leverage n8n\'s powerful open-source workflow automation to connect your AI voice agents with 400+ integrations and custom nodes.',
      realWorldBenefit: 'Complete control over your automation infrastructure with zero vendor lock-in'
    },
    {
      icon: Code,
      title: 'Custom Node Development',
      description: 'Create custom nodes and integrations tailored to your specific business requirements using n8n\'s flexible development framework.',
      realWorldBenefit: 'Build any integration you need - no limitations on functionality'
    },
    {
      icon: GitBranch,
      title: 'Advanced Conditional Logic',
      description: 'Implement complex business logic with conditional routing, loops, and error handling for sophisticated automation workflows.',
      realWorldBenefit: 'Handle 95% of complex business scenarios without external dependencies'
    },
    {
      icon: Settings,
      title: 'Self-Hosted & Cloud Options',
      description: 'Deploy n8n on your own infrastructure for maximum security or use n8n Cloud for managed hosting with enterprise features.',
      realWorldBenefit: 'Meet any compliance requirement while maintaining full data control'
    }
  ];

  const workflows = [
    {
      title: 'Multi-System Lead Processing',
      description: 'AI qualifies lead → Enrich with external data → Create in CRM → Notify team → Schedule follow-up',
      complexity: 'Complex multi-step workflow',
      benefit: '400% faster lead qualification and routing'
    },
    {
      title: 'Customer Data Synchronization',
      description: 'Voice interaction updates → Sync across multiple databases → Trigger personalized campaigns',
      complexity: 'Real-time data synchronization',
      benefit: 'Eliminate data silos across 10+ systems'
    },
    {
      title: 'Intelligent Call Routing',
      description: 'Analyze call context → Route to specialist → Update availability → Generate insights',
      complexity: 'Dynamic decision-making workflow',
      benefit: '70% improvement in first-call resolution'
    }
  ];

  const benefits = [
    { 
      title: 'Complete Flexibility', 
      description: 'Build any workflow imaginable with unlimited customization',
      metric: 'Zero limitations on automation logic'
    },
    { 
      title: 'Cost-Effective Scaling', 
      description: 'Open-source foundation means no per-execution pricing',
      metric: 'Up to 80% cost savings vs proprietary platforms'
    },
    { 
      title: 'Developer-Friendly', 
      description: 'Visual workflow editor with code-level customization options',
      metric: 'Reduce development time by 60%'
    },
    { 
      title: 'Enterprise Security', 
      description: 'Self-hosted deployment ensures complete data sovereignty',
      metric: '100% compliance with internal security policies'
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="icon-badge-lg mr-4">
                <Workflow className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-gray-900">n8n</span><br />
                  <span className="text-euphoric-gradient">Integration</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Connect your AI voice agents to n8n's powerful open-source automation platform. Build unlimited workflows with complete flexibility and control.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Connect n8n
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Book Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open-Source Automation Power
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="icon-badge mr-6 mt-1">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3">
                    <p className="text-sm text-green-700 font-medium">{feature.realWorldBenefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Workflow Examples
            </h2>
          </div>

          <div className="space-y-8">
            {workflows.map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{workflow.title}</h3>
                    <p className="text-gray-600 mb-4">{workflow.description}</p>
                    <div className="inline-block bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-medium">
                      {workflow.complexity}
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:text-right mt-4 lg:mt-0">
                    <div className="bg-gold/10 rounded-lg p-3">
                      <p className="text-gold font-semibold text-sm">{workflow.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose n8n?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                <div className="bg-brand-teal/10 rounded-lg p-3">
                  <p className="text-brand-teal font-semibold text-sm">{benefit.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Unlimited Automation?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Connect with n8n and build workflows limited only by your imagination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Connect n8n
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default N8nIntegration;