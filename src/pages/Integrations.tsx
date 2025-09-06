import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Calendar, Bot, Settings, Phone, Globe, Network, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      name: 'Cal.com',
      icon: Calendar,
      category: 'Scheduling',
      description: 'Seamlessly integrate with Cal.com for automated appointment scheduling and calendar management.',
      features: ['Automatic appointment booking', 'Calendar sync', 'Availability checking', 'Meeting reminders'],
      path: '/integrations/cal-com'
    },
    {
      name: 'Custom LLM',
      icon: Bot,
      category: 'AI Models',
      description: 'Connect your custom language models for specialized industry knowledge and responses.',
      features: ['Custom model integration', 'Industry-specific responses', 'Knowledge base training', 'Advanced customization'],
      path: '/integrations/custom-llm'
    },
    {
      name: 'Make',
      icon: Settings,
      category: 'Automation',
      description: 'Automate complex workflows and connect multiple apps with Make\'s powerful automation platform.',
      features: ['Workflow automation', 'Multi-app integration', 'Trigger-based actions', 'Data synchronization'],
      path: '/integrations/make'
    },
    {
      name: 'Twillio',
      icon: Phone,
      category: 'Communications',
      description: 'Leverage Twilio\'s communication APIs for voice, SMS, and messaging capabilities.',
      features: ['Voice calling', 'SMS messaging', 'Phone number management', 'Call recording'],
      path: '/integrations/twillio'
    },
    {
      name: 'Telnyx',
      icon: Globe,
      category: 'Communications',
      description: 'Connect with Telnyx for global voice and messaging services with enterprise reliability.',
      features: ['Global voice coverage', 'Enterprise reliability', 'Advanced call routing', 'Real-time analytics'],
      path: '/integrations/telnyx'
    },
    {
      name: 'Airtel',
      icon: Network,
      category: 'Telecommunications',
      description: 'Integrate with Airtel\'s telecommunications infrastructure for reliable voice services.',
      features: ['Telecom integration', 'Voice services', 'Network reliability', 'Regional coverage'],
      path: '/integrations/airtel'
    },
    {
      name: 'n8n',
      icon: Zap,
      category: 'Workflow Automation',
      description: 'Build custom workflows and automate processes with n8n\'s open-source platform.',
      features: ['Custom workflows', 'Open-source flexibility', 'API integrations', 'Process automation'],
      path: '/integrations/n8n'
    },
    {
      name: 'Go High Level',
      icon: TrendingUp,
      category: 'CRM & Marketing',
      description: 'Connect with Go High Level for comprehensive CRM and marketing automation.',
      features: ['CRM integration', 'Lead management', 'Marketing automation', 'Sales pipeline tracking'],
      path: '/integrations/go-high-level'
    }
  ];

  const categories = ['All', 'Scheduling', 'AI Models', 'Automation', 'Communications', 'Telecommunications', 'Workflow Automation', 'CRM & Marketing'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory);

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
              <Zap className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Powerful</span><br />
              <span className="text-euphoric-gradient">Integrations</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Connect your AI voice agents with the tools and platforms you already use. Build seamless workflows that enhance your business operations.
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
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Request Integration
              </Link>
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

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="icon-badge mr-4">
                    <integration.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{integration.name}</h3>
                    <p className="text-xs text-brand-teal font-medium">{integration.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {integration.description}
                </p>

                <div className="mb-4">
                  <ul className="space-y-1">
                    {integration.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-brand-teal mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={integration.path}
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

      {/* Integration Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Integrations?
            </h2>
            <p className="text-lg text-gray-600">
              Built for reliability, security, and seamless connectivity
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Setup</h3>
              <p className="text-gray-600">
                Connect your tools in minutes with our simple, guided setup process. No technical expertise required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Robust APIs</h3>
              <p className="text-gray-600">
                Enterprise-grade APIs ensure reliable data flow and real-time synchronization across all platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="icon-badge mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Get help when you need it with our dedicated integration support team available around the clock.
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
              Ready to Connect Your Tools?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start building powerful workflows with our comprehensive integration platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Request Custom Integration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;