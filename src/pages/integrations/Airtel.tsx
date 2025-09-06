import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, Globe, Shield, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const AirtelIntegration = () => {
  const useCases = [
    {
      icon: Network,
      title: 'Regional Market Expansion Agent',
      description: 'Expand your AI voice services across South Asia and Africa with Airtel\'s extensive telecommunications infrastructure, reaching customers in their local languages and time zones.',
      features: [
        'Multi-language support for regional dialects',
        'Local number provisioning in 18+ countries',
        'Timezone-aware call scheduling',
        'Cultural adaptation and localization',
        'Regulatory compliance for each market'
      ],
      benefits: [
        'Reach 500M+ potential customers across regions',
        'Reduce international calling costs by 70%',
        'Improve customer response rates by 45%',
        'Ensure 99.5% network reliability'
      ]
    },
    {
      icon: Phone,
      title: 'Enterprise Call Quality Agent',
      description: 'Deliver crystal-clear AI voice interactions with Airtel\'s premium voice infrastructure, ensuring professional communication for your business.',
      features: [
        'HD voice quality optimization',
        'Network redundancy and failover',
        'Call quality monitoring and analytics',
        'Bandwidth optimization algorithms',
        'Real-time performance dashboards'
      ],
      benefits: [
        'Achieve 99.9% call completion rates',
        'Reduce customer complaints by 80%',
        'Improve AI speech recognition accuracy by 35%',
        'Enhance overall customer satisfaction scores'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Communications Agent',
      description: 'Protect sensitive business communications with Airtel\'s enterprise-grade security infrastructure and compliance frameworks.',
      features: [
        'End-to-end call encryption',
        'Secure SIP trunking protocols',
        'Fraud detection and prevention',
        'Compliance monitoring and reporting',
        'Data sovereignty and local storage'
      ],
      benefits: [
        'Meet local data protection requirements',
        'Reduce security risks by 90%',
        'Ensure regulatory compliance across all markets',
        'Maintain customer trust and confidence'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Head of Operations',
      company: 'TechSolutions India',
      content: 'Airtel\'s network reliability has been exceptional for our AI voice agents. We\'ve expanded to 12 countries with consistent call quality and zero downtime.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Ochieng',
      role: 'Customer Success Director',
      company: 'FinServe Africa',
      content: 'The local language support and cultural adaptation features have helped us achieve 60% higher engagement rates across our African markets.',
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
              <Network className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Airtel </span>
              <br />
              <span className="text-gray-900">AI Integration</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Expand your AI voice services across South Asia and Africa with Airtel's robust telecommunications infrastructure and regional expertise.
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
                Connect Airtel
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Regional Setup Consultation
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
              <span className="text-gray-900">Airtel </span>
              <span className="text-euphoric-gradient">Integration Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Leverage Airtel's extensive network infrastructure to deliver exceptional AI voice experiences across emerging markets.
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

      {/* Regional Coverage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Extensive Network</span>
              <span className="text-gray-900"> Coverage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Reach customers across 18+ countries with Airtel's robust telecommunications infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { country: 'India', coverage: 'Pan-India Coverage', users: '350M+ subscribers', icon: '🇮🇳' },
              { country: 'Bangladesh', coverage: 'Nationwide Network', users: '50M+ subscribers', icon: '🇧🇩' },
              { country: 'Sri Lanka', coverage: 'National Coverage', users: '12M+ subscribers', icon: '🇱🇰' },
              { country: 'Africa', coverage: '14 Countries', users: '120M+ subscribers', icon: '🌍' }
            ].map((region, index) => (
              <motion.div
                key={region.country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl mb-4">{region.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{region.country}</h3>
                <p className="text-gray-600 text-sm mb-2">{region.coverage}</p>
                <div className="bg-brand-teal/10 rounded-lg p-2">
                  <p className="text-brand-teal font-semibold text-sm">{region.users}</p>
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
              See how businesses are expanding globally with Airtel's network infrastructure.
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
              Ready to Expand Globally?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join businesses using Airtel's telecommunications infrastructure to deliver AI voice services across emerging markets.
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

export default AirtelIntegration;