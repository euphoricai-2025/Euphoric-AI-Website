import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Users, MessageCircle, BarChart3, ArrowRight, TrendingUp, Target, Phone } from 'lucide-react';

const GoHighLevelIntegration = () => {
  const features = [
    {
      icon: Users,
      title: 'All-in-One CRM Integration',
      description: 'Seamlessly integrate AI voice agents with GoHighLevel\'s comprehensive CRM, pipeline management, and lead scoring systems.',
      realWorldBenefit: 'Increase lead conversion rates by 65% with automated follow-ups'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Campaign Automation',
      description: 'Trigger SMS, email, and voice campaigns based on AI agent interactions and customer behavior patterns.',
      realWorldBenefit: 'Boost engagement rates by 80% with personalized multi-channel sequences'
    },
    {
      icon: Target,
      title: 'Advanced Lead Scoring',
      description: 'Use AI conversation insights to automatically score and prioritize leads based on qualification criteria and buying signals.',
      realWorldBenefit: 'Sales teams focus on 40% higher quality leads with better conversion rates'
    },
    {
      icon: BarChart3,
      title: 'Attribution & ROI Tracking',
      description: 'Track the complete customer journey from AI voice interaction to conversion with detailed attribution reporting.',
      realWorldBenefit: 'Optimize marketing spend with 95% accurate ROI attribution'
    }
  ];

  const workflows = [
    {
      title: 'Lead Qualification & Nurture Sequence',
      steps: ['AI qualifies lead', 'Auto-score in GHL', 'Trigger nurture campaign', 'Schedule human follow-up', 'Track to conversion'],
      industry: 'Real Estate',
      result: '3x faster lead-to-appointment conversion'
    },
    {
      title: 'Customer Onboarding Automation',
      steps: ['AI completes intake', 'Create client profile', 'Send welcome sequence', 'Schedule onboarding call', 'Track progress'],
      industry: 'Professional Services',
      result: '90% reduction in onboarding time'
    },
    {
      title: 'Appointment Booking & Confirmation',
      steps: ['AI books appointment', 'Update GHL calendar', 'Send confirmations', 'Automated reminders', 'Follow-up sequence'],
      industry: 'Healthcare',
      result: '85% reduction in no-shows'
    }
  ];

  const benefits = [
    {
      title: 'Complete Sales Funnel',
      description: 'From first AI contact to final conversion in one platform',
      metric: 'End-to-end funnel visibility'
    },
    {
      title: 'Marketing Automation',
      description: 'Trigger campaigns based on AI conversation outcomes',
      metric: '5x more targeted campaigns'
    },
    {
      title: 'Pipeline Management',
      description: 'Automatically move leads through sales stages',
      metric: '60% faster deal closure'
    },
    {
      title: 'Client Communication',
      description: 'Maintain engagement across all touchpoints',
      metric: '70% higher client retention'
    }
  ];

  const testimonials = [
    {
      quote: "The AI voice agents integrated with GoHighLevel have transformed our lead qualification process. We're converting 3x more leads into appointments.",
      author: "Sarah Johnson",
      title: "Real Estate Team Leader",
      company: "Premier Properties"
    },
    {
      quote: "Our client onboarding is now completely automated. The AI handles intake calls and GoHighLevel manages the entire follow-up sequence automatically.",
      author: "Mike Chen",
      title: "Practice Manager",
      company: "Elite Dental Group"
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
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-gray-900">GoHighLevel</span><br />
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
              Supercharge your sales and marketing operations by connecting AI voice agents with GoHighLevel's all-in-one CRM and automation platform.
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
                Connect GoHighLevel
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Custom Setup
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Sales & Marketing Automation
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
              Industry-Specific Workflows
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
                <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                  <div className="lg:w-2/3">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{workflow.title}</h3>
                      <span className="ml-3 bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-sm font-medium">
                        {workflow.industry}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {workflow.steps.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {step}
                          </span>
                          {idx < workflow.steps.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/3 lg:text-right mt-4 lg:mt-0">
                    <div className="bg-gold/10 rounded-lg p-3">
                      <p className="text-gold font-semibold text-sm">{workflow.result}</p>
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
              Why Choose GoHighLevel Integration?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start mb-4">
                  <Phone className="w-8 h-8 text-brand-teal mr-4 mt-1" />
                  <div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-brand-teal font-medium">{testimonial.company}</p>
                    </div>
                  </div>
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
              Ready to Automate Your Sales Process?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Connect AI voice agents with GoHighLevel and transform your entire sales and marketing operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Start Integration
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoHighLevelIntegration;