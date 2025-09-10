import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2, ShoppingCart, MessageSquare, ArrowRight, CheckCircle, TrendingUp, Shield, Star } from 'lucide-react';

const Ecommerce = () => {
  const useCases = [
    {
      icon: CheckCircle2,
      title: 'Order Confirmation Agent',
      description: 'Instantly confirm orders with customers, verify details, and build confidence to reduce chargebacks and increase satisfaction.',
      features: [
        'Real-time order confirmation calls',
        'Payment verification and fraud prevention',
        'Shipping timeline and tracking communication',
        'Order modification and upsell opportunities',
        'Seamless customer service escalation',
        'Customer preference data collection'
      ],
      benefits: [
        'Reduce chargebacks by 45%',
        'Increase customer confidence by 60%',
        'Prevent fraudulent orders early',
        'Improve order accuracy significantly'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Cart Recovery Agent',
      description: 'Re-engage customers who abandoned their carts with personalized outreach, addressing concerns and offering incentives.',
      features: [
        'Personalized abandonment follow-up',
        'Dynamic discount and incentive offering',
        'Product questions and objection handling',
        'Purchase barrier identification and removal',
        'Multi-touch recovery sequence management',
        'Inventory availability notifications'
      ],
      benefits: [
        'Recover 30% of abandoned carts',
        'Increase overall conversion by 25%',
        'Personalize customer experience',
        'Automate revenue recovery process'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Review Collection Agent',
      description: 'Systematically collect customer feedback and reviews to improve products, build social proof, and increase conversions.',
      features: [
        'Post-purchase satisfaction surveys',
        'Strategic review request timing',
        'Multi-platform review collection',
        'Issue identification and resolution',
        'Loyalty program enrollment and retention',
        'Product feedback analysis and reporting'
      ],
      benefits: [
        'Increase reviews by 500%',
        'Improve product insights dramatically',
        'Build social proof and trust',
        'Enhance brand reputation online'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Cart Abandonment Crisis',
      description: 'Average cart abandonment rate of 70% means massive lost revenue from interested customers',
      impact: 'Every abandoned cart represents lost revenue and wasted marketing spend'
    },
    {
      title: 'Order Uncertainty & Chargebacks',
      description: 'Customers worry about fraudulent charges leading to 15% chargeback rates',
      impact: 'Chargebacks cost businesses $40 for every $100 disputed transaction'
    },
    {
      title: 'Silent Customer Problem',
      description: 'Only 5-10% of customers leave reviews naturally, limiting social proof',
      impact: 'Missing reviews reduce conversion rates and make competitor research difficult'
    }
  ];

  const results = [
    { metric: '30%', label: 'Cart Recovery', description: 'Average abandoned cart recovery rate' },
    { metric: '45%', label: 'Chargeback Reduction', description: 'Fewer payment disputes and fraud' },
    { metric: '500%', label: 'More Reviews', description: 'Increase in customer review generation' },
    { metric: '60%', label: 'Time Saved', description: 'Support team efficiency improvement' }
  ];

  const testimonials = [
    {
      name: 'Kevin Zhang',
      role: 'E-commerce Director',
      company: 'TechVault Electronics',
      content: 'Cart abandonment recovery increased our revenue by 28%. The AI agent personalizes each interaction and customers appreciate the helpful follow-up. Conversion rates are phenomenal.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sophie Laurent',
      role: 'Operations Manager',
      company: 'Fashion Forward Boutique',
      content: 'Order confirmations and shipping updates are handled flawlessly. Customer anxiety decreased and chargeback disputes dropped 45%. The multilingual support is incredible.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?w=150&h=150&fit=crop&crop=face'
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
              <ShoppingBag className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Ecommerce </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Boost your ecommerce conversions with AI agents that confirm orders, recover abandoned carts, and collect valuable customer feedback automatically.
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
                to="/use-cases/ecommerce"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Ecommerce Use Cases
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
              <span className="text-gray-900"> in Ecommerce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Online retailers face operational challenges that impact conversion rates and customer trust
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
              <span className="text-gray-900">Ecommerce </span>
              <span className="text-euphoric-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Purpose-built AI agents designed specifically for online retail businesses
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
              <span className="text-gray-900"> for Ecommerce Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real impact on ecommerce metrics and customer satisfaction
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
              <span className="text-euphoric-gradient">Enterprise Ready</span>
              <span className="text-gray-900"> & Secure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built with ecommerce industry standards and security requirements in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Platform Integrations',
                description: 'Connect with Shopify, WooCommerce, BigCommerce, Magento, and other major ecommerce platforms.',
                icon: '🔗'
              },
              {
                title: 'PCI DSS Compliant',
                description: 'Full compliance with payment industry standards for handling sensitive customer information.',
                icon: '💳'
              },
              {
                title: 'GDPR & CCPA Ready',
                description: 'Built-in privacy controls and data handling practices that meet international regulations.',
                icon: '🛡️'
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
              Ecommerce businesses transforming their operations with AI agents
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
              Ready to Boost Your Ecommerce Sales?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join ecommerce businesses using AI agents to recover revenue, reduce chargebacks, and enhance customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get this agent called
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/use-cases/ecommerce"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                View E-commerce use case
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;