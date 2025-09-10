import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, Target, Mail, Calendar, BarChart3, MessageSquare, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const MarketingSocialMedia = () => {
  const automations = [
    {
      icon: Share2,
      name: 'Social Media Content Scheduling',
      description: 'Automate your social media posting across all platforms with intelligent content scheduling and optimization.',
      features: [
        'Multi-platform content distribution',
        'Optimal posting time analysis',
        'Content calendar automation',
        'Hashtag optimization and research',
        'Visual content resizing for each platform',
        'Engagement tracking and analytics'
      ],
      benefits: [
        'Save 20+ hours weekly on posting',
        'Increase engagement rates by 45%',
        'Maintain consistent brand presence',
        'Optimize posting times for maximum reach'
      ],
      platforms: ['Hootsuite', 'Buffer', 'Sprout Social', 'Zapier']
    },
    {
      icon: Target,
      name: 'Audience Segmentation & Targeting',
      description: 'Automatically segment your audience based on behavior, demographics, and preferences for personalized marketing.',
      features: [
        'Behavioral segmentation automation',
        'Dynamic audience list updates',
        'Personalized content recommendations',
        'Custom audience creation for ads',
        'Engagement-based scoring',
        'Lookalike audience generation'
      ],
      benefits: [
        'Improve campaign targeting by 70%',
        'Increase conversion rates by 55%',
        'Reduce ad spend waste by 40%',
        'Enhance personalization effectiveness'
      ],
      platforms: ['Facebook Ads', 'Google Ads', 'HubSpot', 'Mailchimp']
    },
    {
      icon: Mail,
      name: 'Email Marketing Automation',
      description: 'Create sophisticated email campaigns that nurture leads and drive conversions with intelligent automation.',
      features: [
        'Drip campaign automation',
        'Behavioral trigger emails',
        'A/B testing and optimization',
        'Personalized email content',
        'Automated list cleaning',
        'Performance analytics tracking'
      ],
      benefits: [
        'Increase email open rates by 65%',
        'Boost click-through rates by 50%',
        'Reduce unsubscribe rates by 30%',
        'Generate 40% more qualified leads'
      ],
      platforms: ['Mailchimp', 'Klaviyo', 'ConvertKit', 'ActiveCampaign']
    },
    {
      icon: BarChart3,
      name: 'Marketing Analytics Dashboard',
      description: 'Track all marketing metrics in real-time with automated reporting and performance insights.',
      features: [
        'Real-time marketing dashboard',
        'Cross-channel attribution tracking',
        'ROI calculation and reporting',
        'Campaign performance analysis',
        'Automated weekly/monthly reports',
        'Goal tracking and alerts'
      ],
      benefits: [
        'Improve marketing ROI visibility by 85%',
        'Reduce reporting time by 90%',
        'Make data-driven decisions faster',
        'Identify top-performing channels'
      ],
      platforms: ['Google Analytics', 'Facebook Analytics', 'HubSpot', 'Tableau']
    },
    {
      icon: MessageSquare,
      name: 'Social Media Engagement Bot',
      description: 'Automatically respond to comments, messages, and mentions while maintaining authentic brand voice.',
      features: [
        'Intelligent comment moderation',
        'Automated response templates',
        'Sentiment analysis and routing',
        'Brand mention monitoring',
        'Crisis management alerts',
        'Community management workflows'
      ],
      benefits: [
        'Respond 24/7 to customer inquiries',
        'Increase response rate by 300%',
        'Improve customer satisfaction',
        'Reduce community management workload'
      ],
      platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']
    },
    {
      icon: Calendar,
      name: 'Campaign Launch Automation',
      description: 'Coordinate complex marketing campaigns across multiple channels with automated launch sequences.',
      features: [
        'Multi-channel campaign coordination',
        'Automated asset deployment',
        'Launch sequence scheduling',
        'Performance monitoring setup',
        'Budget allocation automation',
        'Team notification workflows'
      ],
      benefits: [
        'Reduce campaign setup time by 75%',
        'Eliminate launch coordination errors',
        'Ensure consistent messaging',
        'Accelerate time-to-market by 50%'
      ],
      platforms: ['HubSpot', 'Marketo', 'Pardot', 'Make.com']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Drive sales with automated product promotions and retargeting' },
    { name: 'SaaS', description: 'Generate leads and nurture trial users into customers' },
    { name: 'Professional Services', description: 'Build thought leadership and attract qualified prospects' },
    { name: 'Healthcare', description: 'Educate patients and promote services compliantly' },
    { name: 'Financial Services', description: 'Build trust and nurture high-value prospects' },
    { name: 'Real Estate', description: 'Showcase properties and nurture buyer relationships' }
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
              <Share2 className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Marketing & Social Media</span><br />
              <span className="text-euphoric-gradient">Automation Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Transform your marketing efforts with intelligent automation that scales your social media presence, personalizes customer journeys, and maximizes ROI. Reach the right audience with the right message at the right time.
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
                Automate Your Marketing
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
              className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 h-64 md:h-80 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Marketing Automation</h3>
                <p className="text-white/80 text-sm">Social Media & Campaign Intelligence</p>
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
              Complete Marketing Automation Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From content creation to campaign analytics, automate every aspect of your marketing and social media strategy with our comprehensive tools.
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Marketing Benefits:</h4>
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
              Industry-Specific Marketing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our marketing automation solutions are tailored to meet the unique challenges and opportunities of different industries.
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
              Why Choose Our Marketing Automation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results that amplify your marketing impact and drive measurable business growth
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">45% Higher Engagement</h3>
              <p className="text-gray-600">
                Intelligent scheduling and content optimization dramatically improve your social media engagement rates.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">20+ Hours Saved Weekly</h3>
              <p className="text-gray-600">
                Automate repetitive marketing tasks and focus your team on strategy and creative work.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">70% Better Targeting</h3>
              <p className="text-gray-600">
                Advanced segmentation and personalization deliver the right message to the right audience every time.
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
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Transform your marketing and social media strategy with intelligent automation. Scale your reach, improve engagement, and drive more qualified leads.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Automate Your Marketing
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingSocialMedia;