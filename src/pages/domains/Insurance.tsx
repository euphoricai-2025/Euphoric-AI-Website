import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Calendar, UserCheck, FileText, ArrowRight, CheckCircle, TrendingUp, Phone, AlertTriangle } from 'lucide-react';

const Insurance = () => {
  const useCases = [
    {
      icon: UserCheck,
      title: 'Claims Follow-up Agent',
      description: 'Proactively follow up on insurance claims, gather required documentation, and keep clients informed throughout the process.',
      features: [
        'Claim status updates and tracking',
        'Document collection and verification',
        'Client communication automation',
        'Adjuster coordination scheduling',
        'Settlement notification delivery',
        'Fraud detection assistance'
      ],
      benefits: [
        'Reduce claim processing time by 40%',
        'Improve customer satisfaction scores',
        'Decrease administrative overhead',
        'Faster claim resolution cycles'
      ]
    },
    {
      icon: Calendar,
      title: 'Policy Renewal Agent',
      description: 'Automate policy renewal reminders, gather updated information, and facilitate smooth renewal processes.',
      features: [
        'Renewal deadline tracking and alerts',
        'Information update collection',
        'Premium adjustment notifications',
        'Payment facilitation and reminders',
        'Coverage review scheduling',
        'Multi-channel renewal outreach'
      ],
      benefits: [
        'Increase renewal rates by 35%',
        'Reduce policy lapses significantly',
        'Streamline renewal process',
        'Enhance client retention rates'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment Agent',
      description: 'Conduct thorough risk assessments for new applications and policy updates through intelligent questioning.',
      features: [
        'Comprehensive risk questionnaires',
        'Property and asset evaluation',
        'Underwriting support and scoring',
        'Medical history collection',
        'Background verification assistance',
        'Risk mitigation recommendations'
      ],
      benefits: [
        'Improve underwriting accuracy by 30%',
        'Reduce application processing time',
        'Better risk profile assessment',
        'Enhanced policy pricing accuracy'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Slow Claims Processing',
      description: 'Insurance claims take weeks to process due to manual documentation and follow-up delays',
      impact: 'Delayed claims lead to customer dissatisfaction and increased operational costs'
    },
    {
      title: 'Policy Renewal Lapses',
      description: 'Up to 25% of policies lapse due to inadequate renewal communication and follow-up',
      impact: 'Lost revenue and customers switching to competitors due to poor retention processes'
    },
    {
      title: 'Inefficient Risk Assessment',
      description: 'Manual risk assessments are time-consuming and prone to human error in evaluation',
      impact: 'Inaccurate pricing and underwriting decisions leading to financial losses'
    }
  ];

  const results = [
    { metric: '40%', label: 'Faster Claims Processing', description: 'Reduction in claim processing time' },
    { metric: '35%', label: 'Higher Renewal Rates', description: 'Improvement in policy renewals' },
    { metric: '30%', label: 'Better Risk Assessment', description: 'Improved underwriting accuracy' },
    { metric: '25%', label: 'Cost Reduction', description: 'Lower operational expenses' }
  ];

  const testimonials = [
    {
      name: 'Maria Gonzalez',
      role: 'Claims Director',
      company: 'Guardian Insurance Group',
      content: 'Claims processing time cut in half with automatic status updates. Customer satisfaction improved dramatically and our team can focus on complex cases requiring human expertise.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Brian Taylor',
      role: 'Underwriting Manager',
      company: 'Secure Life Partners',
      content: 'Risk assessment calls are comprehensive and consistent. We\'re making better underwriting decisions with complete information, reducing claims by 30% year-over-year.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Insurance </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Transform insurance operations with AI agents that handle claims follow-up, policy renewals, and risk assessments efficiently.
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
                Get This Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/use-cases/insurance"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Insurance Use Cases
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              <span className="text-euphoric-gradient">Current Challenges</span>
              <span className="text-gray-900"> in Insurance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insurance companies face operational challenges that impact customer satisfaction and profitability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {painPoints.map((painPoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
                  <h3 className="text-lg font-bold text-red-800 mb-2">{painPoint.title}</h3>
                  <p className="text-red-700 text-sm mb-2">{painPoint.description}</p>
                  <p className="text-red-600 text-xs">{painPoint.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Insurance </span>
              <span className="text-euphoric-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized AI agents designed specifically for insurance companies and agencies
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
                  className="max-w-6xl mx-auto"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="icon-badge mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-green-800">Key Benefits:</h4>
                            <ul className="text-sm text-green-700 mt-1 space-y-1">
                              {useCase.benefits.map((benefit, idx) => (
                                <li key={idx}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`card ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h4 className="font-semibold text-gray-900 mb-4">How It Works:</h4>
                      <ul className="space-y-3">
                        {useCase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Proven Results</span>
              <span className="text-gray-900"> for Insurance Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real impact on insurance operations and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl font-bold text-euphoric-gradient mb-2">
                  {stat.metric}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Industry Compliant</span>
              <span className="text-gray-900"> & Secure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built with insurance industry standards and regulatory requirements in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Regulatory Compliance',
                description: 'Full compliance with insurance industry regulations and state-specific requirements.',
                icon: '🔒'
              },
              {
                title: 'Data Security',
                description: 'Enterprise-grade encryption and secure handling of sensitive customer information.',
                icon: '🛡️'
              },
              {
                title: 'Audit Ready',
                description: 'Complete audit trails and compliance reporting for regulatory examinations.',
                icon: '📋'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass-soft p-6 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insurance companies transforming their operations with AI agents
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
      <section className="py-20 bg-gradient-to-r from-brand-teal to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Insurance Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join insurance companies using AI agents to improve claims processing, increase renewals, and enhance customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;