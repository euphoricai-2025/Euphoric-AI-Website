import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Globe, Shield, ArrowRight, CheckCircle, BarChart3 } from 'lucide-react';

const TwillioIntegration = () => {
  const useCases = [
    {
      icon: Phone,
      title: 'Multi-Channel Customer Experience Agent',
      description: 'Create seamless customer journeys that intelligently switch between voice, SMS, and WhatsApp based on customer preferences and conversation context.',
      features: [
        'Intelligent channel switching mid-conversation',
        'Unified conversation history across channels',
        'Global phone number provisioning',
        'Real-time channel availability detection',
        'Automated fallback channel selection'
      ],
      benefits: [
        'Increase customer engagement by 70%',
        'Reduce response time across all channels',
        'Improve customer satisfaction scores by 45%',
        'Achieve 99.95% message delivery rates globally'
      ]
    },
    {
      icon: BarChart3,
      title: 'AI Performance Optimization Agent',
      description: 'Leverage Twilio\'s comprehensive analytics to continuously improve your AI agents\' performance with detailed conversation insights and quality metrics.',
      features: [
        'Real-time conversation quality scoring',
        'AI sentiment and intent analysis',
        'Custom performance dashboards',
        'Automated A/B testing for AI responses',
        'Advanced reporting and data visualization'
      ],
      benefits: [
        'Improve AI response accuracy by 45%',
        'Reduce customer churn through insights',
        'Optimize conversation flows automatically',
        'Increase first-call resolution by 60%'
      ]
    },
    {
      icon: Shield,
      title: 'Compliant Healthcare Communication Agent',
      description: 'Deploy HIPAA-compliant AI voice agents for healthcare providers, ensuring secure patient communications while maintaining regulatory compliance.',
      features: [
        'Full HIPAA compliance and audit trails',
        'End-to-end encryption for all communications',
        'Secure patient data handling protocols',
        'Automated compliance monitoring',
        'Healthcare-specific conversation templates'
      ],
      benefits: [
        'Meet all healthcare regulatory requirements',
        'Reduce compliance risks by 95%',
        'Improve patient communication efficiency',
        'Streamline appointment scheduling and reminders'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'Operations Director',
      company: 'Prime Care Medical Group',
      content: 'The follow-up system has transformed our patient care. Medication adherence improved 65% and readmission rates dropped significantly. Our staff can focus on patient care instead of manual calls.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Nathan Phillips',
      role: 'Logistics Manager',
      company: 'Swift Transport Solutions',
      content: 'Delivery coordination is seamless with automatic customer notifications. Missed deliveries dropped 55% and customer complaints are virtually non-existent.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
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
              <Phone className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Twilio </span>
              <br />
              <span className="text-gray-900">AI Integration</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Power your AI voice agents with Twilio's world-class communication platform, delivering exceptional multi-channel experiences across 180+ countries.
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
                Connect Twilio
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Twilio </span>
              <span className="text-euphoric-gradient">Integration Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Multi-channel communication platform trusted by enterprises worldwide for AI voice applications.
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

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Global Scale</span>
              <span className="text-gray-900"> & Reliability</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Trusted infrastructure powering millions of communications worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Global Reach', description: 'Countries with voice coverage', metric: '180+ countries', icon: '🌍' },
              { title: 'Call Success', description: 'Guaranteed call completion rate', metric: '99.95% success', icon: '📞' },
              { title: 'Multi-Channel', description: 'Voice, SMS, WhatsApp integration', metric: '3 channels unified', icon: '💬' },
              { title: 'Compliance', description: 'Enterprise security standards', metric: 'HIPAA + PCI DSS', icon: '🔒' }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{metric.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{metric.description}</p>
                <div className="bg-brand-teal/10 rounded-lg p-3">
                  <p className="text-brand-teal font-semibold text-sm">{metric.metric}</p>
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
              See how organizations are transforming customer communication with Twilio's platform.
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
              Ready for Global Communication?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join thousands of organizations using Twilio to deliver exceptional AI voice experiences at enterprise scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Connect Twilio
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwillioIntegration;