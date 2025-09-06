import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, Zap, Link as LinkIcon, ArrowRight, CheckCircle, Workflow } from 'lucide-react';

const MakeIntegration = () => {
  const useCases = [
    {
      icon: Workflow,
      title: 'No-Code Automation Builder Agent',
      description: 'Create sophisticated automation workflows that connect your AI voice agents to 1000+ applications without any coding, using Make\'s intuitive visual interface.',
      features: [
        'Drag-and-drop workflow design interface',
        'Pre-built templates for common use cases',
        'Real-time workflow testing and debugging',
        'Advanced error handling and retry logic',
        'Integration with 1000+ apps and services'
      ],
      benefits: [
        'Build automations 10x faster than coding',
        'Reduce development costs by 80%',
        'Enable non-technical teams to create workflows',
        'Deploy automation changes instantly'
      ]
    },
    {
      icon: Zap,
      title: 'Real-Time Trigger Automation Agent',
      description: 'Instantly trigger complex multi-step actions across your entire tech stack when AI agents complete calls, capture leads, or meet specific business conditions.',
      features: [
        'Instant webhook-based triggers from AI agents',
        'Multi-step workflow execution in parallel',
        'Conditional logic and decision routing',
        'Data transformation and formatting',
        'Real-time monitoring and alerting'
      ],
      benefits: [
        'Reduce response time from hours to seconds',
        'Eliminate 90% of manual data entry tasks',
        'Ensure 100% consistency in process execution',
        'Scale operations without adding staff'
      ]
    },
    {
      icon: LinkIcon,
      title: 'Enterprise System Integration Agent',
      description: 'Seamlessly connect AI voice agents with your CRM, ERP, marketing automation, databases, and hundreds of other business systems in unified workflows.',
      features: [
        'Native connectors for major business platforms',
        'Custom API integration capabilities',
        'Data synchronization across multiple systems',
        'Advanced mapping and transformation tools',
        'Enterprise security and compliance features'
      ],
      benefits: [
        'Eliminate data silos across departments',
        'Achieve single source of truth for customer data',
        'Reduce integration complexity by 75%',
        'Maintain data consistency across all platforms'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Kim',
      role: 'Operations Director',
      company: 'TechStart Solutions',
      content: 'Make has revolutionized how we handle lead processing. Our AI agents now trigger entire workflows that update our CRM, send emails, and assign tasks automatically.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Chen',
      role: 'Head of Customer Success',
      company: 'ServicePro Inc',
      content: 'The visual workflow builder is incredible. Our non-technical team members can now create complex automations that would have taken weeks to develop traditionally.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

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
              <Settings className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Make </span>
              <br />
              <span className="text-gray-900">AI Integration</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Connect your AI voice agents to 1000+ applications with Make's powerful no-code automation platform. Build complex workflows visually, without programming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Build Workflows
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Templates
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Make </span>
              <span className="text-euphoric-gradient">Integration Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Visual automation platform that connects AI voice agents to your entire business ecosystem without code.
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="glass p-8 card-hover">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="icon-badge-lg">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {useCase.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Examples Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Popular Workflow</span>
              <span className="text-gray-900"> Templates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pre-built automation templates that you can customize for your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Lead Processing Pipeline',
                description: 'Automatically qualify leads, update CRM, and trigger follow-ups',
                steps: 5,
                benefit: '300% faster processing',
                icon: '🎯'
              },
              {
                title: 'Support Ticket Creation',
                description: 'Route support requests and assign to appropriate specialists',
                steps: 4,
                benefit: '85% faster response',
                icon: '🎧'
              },
              {
                title: 'Appointment Scheduling',
                description: 'Book appointments, send confirmations, and set reminders',
                steps: 6,
                benefit: '95% fewer conflicts',
                icon: '📅'
              }
            ].map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-soft p-6 card-hover text-center"
              >
                <div className="text-4xl mb-4">{template.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{template.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-teal font-medium text-sm">{template.steps} Steps</span>
                  <span className="text-gold font-medium text-sm">{template.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              See how businesses are transforming operations with Make's automation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 card-hover"
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
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
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight"
            >
              Ready to Automate Everything?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join thousands of businesses using Make to connect AI voice agents with their entire technology ecosystem.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="btn-primary inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeIntegration;