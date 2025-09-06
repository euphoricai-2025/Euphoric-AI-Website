import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

const TelnyxIntegration = () => {
  const useCases = [
    {
      icon: Globe,
      title: 'Global Enterprise Voice Agent',
      description: 'Deploy AI voice agents worldwide with Telnyx\'s private global network, ensuring consistent call quality and ultra-low latency across all international markets.',
      features: [
        'Private global network with 90+ PoPs',
        'Intelligent call routing and failover',
        'Global number portability and provisioning',
        'Multi-region redundancy and backup',
        'Real-time network performance monitoring'
      ],
      benefits: [
        'Achieve 40% better call quality vs traditional carriers',
        'Reduce international calling costs by 50%',
        'Ensure 99.999% uptime SLA globally',
        'Support customers in 60+ countries seamlessly'
      ]
    },
    {
      icon: BarChart3,
      title: 'AI Performance Analytics Agent',
      description: 'Optimize your AI voice agents with comprehensive real-time analytics, call quality metrics, and performance insights from Telnyx\'s advanced monitoring platform.',
      features: [
        'Real-time call quality monitoring',
        'AI conversation analytics and insights',
        'Custom performance dashboards',
        'Automated alert and escalation systems',
        'Advanced reporting and data export'
      ],
      benefits: [
        'Improve AI response accuracy by 35%',
        'Reduce customer churn through quality insights',
        'Optimize operational costs with usage analytics',
        'Identify and resolve issues 10x faster'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Communications Agent',
      description: 'Protect sensitive customer communications with Telnyx\'s enterprise-grade security, encryption, and compliance frameworks for regulated industries.',
      features: [
        'End-to-end TLS encryption protocols',
        'Advanced SIP authentication mechanisms',
        'Compliance monitoring and reporting',
        'Fraud detection and prevention systems',
        'SOC 2 Type II and HIPAA compliance'
      ],
      benefits: [
        'Meet enterprise security requirements automatically',
        'Reduce security incidents by 95%',
        'Ensure regulatory compliance across industries',
        'Maintain customer trust and data protection'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'GlobalTech Solutions',
      content: 'Telnyx\'s network quality has been exceptional for our AI agents. We\'ve seen 40% improvement in call clarity and our customers notice the difference immediately.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Lisa Chen',
      role: 'Head of Operations',
      company: 'Enterprise Communications Inc',
      content: 'The analytics dashboard gives us incredible insights into our AI performance. We\'ve optimized our agents based on the data and improved customer satisfaction by 60%.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              <Globe className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Telnyx </span>
              <br />
              <span className="text-gray-900">AI Integration</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Power your AI voice agents with Telnyx's private global network, delivering superior call quality and enterprise-grade security worldwide.
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
                Connect Telnyx
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Enterprise Consultation
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
              <span className="text-gray-900">Telnyx </span>
              <span className="text-euphoric-gradient">Integration Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade communication platform designed for demanding AI voice applications.
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

      {/* Network Performance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Global Network</span>
              <span className="text-gray-900"> Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Unmatched performance metrics across Telnyx's private global infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Call Quality', description: 'Superior voice clarity vs traditional carriers', metric: '40% better quality', icon: '🔊' },
              { title: 'Global Reach', description: 'Points of presence worldwide', metric: '90+ PoPs globally', icon: '🌍' },
              { title: 'Uptime SLA', description: 'Enterprise-grade reliability guarantee', metric: '99.999% uptime', icon: '⚡' },
              { title: 'Low Latency', description: 'Ultra-fast global routing', metric: 'Sub-50ms latency', icon: '🚀' }
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
              See how enterprises are achieving superior results with Telnyx's communication platform.
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
              Ready for Premium Voice Quality?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join enterprises using Telnyx's private global network to deliver superior AI voice experiences worldwide.
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
                Start Integration
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

export default TelnyxIntegration;