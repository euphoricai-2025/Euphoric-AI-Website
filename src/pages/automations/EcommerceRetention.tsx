import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Mail, Gift, Star, Users, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const EcommerceRetention = () => {
  const automations = [
    {
      icon: ShoppingCart,
      name: 'Abandoned Cart Recovery',
      description: 'Automatically recover abandoned carts with personalized email sequences and targeted offers to bring customers back.',
      features: [
        'Multi-stage cart recovery campaigns',
        'Personalized product recommendations',
        'Dynamic discount code generation',
        'Cross-channel reminder delivery',
        'A/B testing for optimization',
        'Real-time cart abandonment tracking'
      ],
      benefits: [
        'Recover 35% of abandoned carts',
        'Increase revenue by 15-25%',
        'Reduce cart abandonment rates',
        'Improve customer re-engagement'
      ],
      platforms: ['Shopify', 'WooCommerce', 'Magento', 'Klaviyo']
    },
    {
      icon: Heart,
      name: 'Customer Loyalty Programs',
      description: 'Automate loyalty rewards, point accumulation, and tier management to increase customer lifetime value.',
      features: [
        'Automated point calculation and awards',
        'Tier-based reward progression',
        'Personalized reward recommendations',
        'Birthday and anniversary campaigns',
        'VIP customer recognition programs',
        'Social sharing incentives'
      ],
      benefits: [
        'Increase repeat purchases by 60%',
        'Boost customer lifetime value by 40%',
        'Improve customer satisfaction scores',
        'Reduce customer acquisition costs'
      ],
      platforms: ['LoyaltyLion', 'Smile.io', 'Yotpo', 'ReferralCandy']
    },
    {
      icon: Mail,
      name: 'Personalized Email Marketing',
      description: 'Send highly targeted emails based on customer behavior, purchase history, and preferences.',
      features: [
        'Behavioral trigger email automation',
        'Product recommendation engines',
        'Segmentation based on purchase behavior',
        'Lifecycle email campaign automation',
        'Win-back campaign sequences',
        'Cross-sell and upsell automation'
      ],
      benefits: [
        'Improve email open rates by 70%',
        'Increase click-through rates by 50%',
        'Generate 30% more repeat sales',
        'Reduce unsubscribe rates'
      ],
      platforms: ['Klaviyo', 'Mailchimp', 'Omnisend', 'Constant Contact']
    },
    {
      icon: Gift,
      name: 'Dynamic Promotions Engine',
      description: 'Automatically create and deploy targeted promotions based on customer segments and behavior patterns.',
      features: [
        'Smart discount code generation',
        'Inventory-based promotion triggers',
        'Customer segment-specific offers',
        'Seasonal campaign automation',
        'Flash sale management',
        'Promotion performance tracking'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Optimize promotional spend efficiency',
        'Reduce inventory holding costs',
        'Boost average order value'
      ],
      platforms: ['Dynamic Yield', 'Optimizely', 'Personalization Engines', 'Custom Solutions']
    },
    {
      icon: Star,
      name: 'Review & Feedback Automation',
      description: 'Automatically collect customer reviews and feedback to improve products and build social proof.',
      features: [
        'Post-purchase review request automation',
        'Multi-platform review collection',
        'Sentiment analysis and categorization',
        'Response automation for reviews',
        'Photo and video review incentives',
        'Review display optimization'
      ],
      benefits: [
        'Increase review collection by 300%',
        'Improve product ratings and visibility',
        'Enhance customer trust and credibility',
        'Gather actionable product feedback'
      ],
      platforms: ['Yotpo', 'Trustpilot', 'Reviews.io', 'Judge.me']
    },
    {
      icon: Users,
      name: 'Customer Segmentation & Targeting',
      description: 'Automatically segment customers based on behavior and create targeted campaigns for each group.',
      features: [
        'RFM (Recency, Frequency, Monetary) analysis',
        'Behavioral segmentation automation',
        'Predictive customer scoring',
        'Churn risk identification',
        'High-value customer identification',
        'Dynamic segment updates'
      ],
      benefits: [
        'Improve targeting precision by 80%',
        'Increase campaign ROI by 65%',
        'Reduce churn rates by 30%',
        'Enhance personalization effectiveness'
      ],
      platforms: ['Customer.io', 'Segment', 'Amplitude', 'Mixpanel']
    }
  ];

  const industries = [
    { name: 'Fashion & Apparel', description: 'Personalize recommendations and manage seasonal inventory' },
    { name: 'Electronics', description: 'Cross-sell accessories and manage product warranties' },
    { name: 'Health & Beauty', description: 'Automate subscription renewals and product education' },
    { name: 'Home & Garden', description: 'Seasonal promotions and DIY project recommendations' },
    { name: 'Food & Beverage', description: 'Subscription management and dietary preference tracking' },
    { name: 'Sports & Recreation', description: 'Seasonal gear recommendations and loyalty programs' }
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
              <ShoppingCart className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">E-commerce Retention</span><br />
              <span className="text-euphoric-gradient">Automation Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Transform one-time buyers into loyal customers with intelligent retention automation. Recover abandoned carts, build lasting loyalty, and maximize customer lifetime value with personalized experiences that keep customers coming back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Boost Customer Retention
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
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">E-commerce Retention</h3>
                <p className="text-white/80 text-sm">Customer Intelligence & Loyalty Systems</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete E-commerce Retention Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From cart recovery to loyalty programs, automate every aspect of customer retention with our comprehensive e-commerce automation tools.
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Retention Benefits:</h4>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Retention Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our e-commerce retention automation solutions are tailored to the unique customer behaviors and seasonal patterns of different industries.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our E-commerce Retention Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that turn one-time buyers into lifelong customers and maximize revenue
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">60% More Repeat Customers</h3>
              <p className="text-gray-600">
                Automated loyalty programs and personalized experiences dramatically increase customer retention rates.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">35% Cart Recovery Rate</h3>
              <p className="text-gray-600">
                Intelligent abandoned cart sequences recover significant lost revenue with personalized messaging.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">40% Higher Lifetime Value</h3>
              <p className="text-gray-600">
                Comprehensive retention strategies significantly increase the total value each customer brings to your business.
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
              Ready to Maximize Customer Retention?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Transform your e-commerce business with intelligent retention automation. Recover lost revenue, build customer loyalty, and create lasting relationships that drive growth.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Boost Customer Retention
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceRetention;