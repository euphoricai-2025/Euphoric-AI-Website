import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, TrendingUp, Target, Users, BarChart3 } from 'lucide-react';

const LeadQualificationUseCase = () => {
  const useCases = [
    {
      icon: Target,
      title: 'Automated Lead Scoring & Prioritization',
      description: 'Intelligently evaluate and score leads based on predefined criteria, ensuring your sales team focuses on the highest-value prospects first.',
      stats: 'Increase qualified lead conversion by 85% and reduce sales cycle time by 40%',
      realWorldPainPoint: 'Sales teams waste 67% of their time on unqualified leads. Manual lead qualification processes are inconsistent, time-consuming, and often miss crucial qualifying information, resulting in $1.2M in lost revenue annually for mid-sized companies.',
      features: [
        'Multi-criteria lead scoring with customizable weightings',
        'Real-time qualification based on budget, authority, need, and timeline',
        'Integration with CRM systems for automatic lead routing',
        'Behavioral analysis and engagement level assessment',
        'Competitor comparison and pricing sensitivity evaluation',
        'Lead nurturing recommendations for non-qualified prospects'
      ]
    },
    {
      icon: Users,
      title: 'Intelligent Conversation Management',
      description: 'Conduct natural, engaging conversations that ask the right questions at the right time to uncover genuine buying intent and pain points.',
      stats: 'Improve lead qualification accuracy by 78% and reduce human intervention by 60%',
      realWorldPainPoint: 'Manual qualification calls are inconsistent, with different sales reps asking different questions. This leads to poor data quality, missed opportunities, and inconsistent follow-up strategies across the sales team.',
      features: [
        'Dynamic questioning based on lead responses and behavior',
        'Pain point discovery through conversational AI techniques',
        'Decision-maker identification and contact mapping',
        'Budget qualification with tactful pricing discussions',
        'Timeline assessment and urgency evaluation',
        'Objection handling with intelligent response suggestions'
      ]
    },
    {
      icon: BarChart3,
      title: 'Real-time CRM Integration & Handoffs',
      description: 'Seamlessly integrate with your existing CRM systems to update lead information instantly and provide smooth handoffs to your sales team.',
      stats: 'Reduce data entry time by 90% and improve lead follow-up speed by 75%',
      realWorldPainPoint: 'Lead data gets lost in transition between marketing and sales. Manual data entry creates delays, errors, and inconsistencies. Sales teams often work with outdated or incomplete lead information, missing critical opportunities.',
      features: [
        'Real-time CRM updates with structured data capture',
        'Automated lead routing based on territory and expertise',
        'Comprehensive conversation summaries for sales teams',
        'Lead status tracking and pipeline management',
        'Automated follow-up scheduling and reminder systems',
        'Integration with popular CRM platforms (Salesforce, HubSpot, Pipedrive)'
      ]
    }
  ];

  const industries = [
    { 
      name: 'B2B Software Companies', 
      description: 'SaaS and software solution providers qualifying enterprise prospects', 
      painPoint: 'Demo requests flood in, but only 15% are qualified buyers, wasting sales resources' 
    },
    { 
      name: 'Financial Services', 
      description: 'Banks, insurance companies, and investment firms qualifying high-value clients', 
      painPoint: 'Compliance requirements make manual qualification slow and error-prone' 
    },
    { 
      name: 'Real Estate Agencies', 
      description: 'Property developers and agencies qualifying serious buyers and investors', 
      painPoint: 'Agents spend 80% of time on unqualified leads instead of closing deals' 
    },
    { 
      name: 'Professional Services', 
      description: 'Consulting, legal, and accounting firms qualifying potential clients', 
      painPoint: 'Complex service offerings require detailed qualification that manual processes miss' 
    },
    { 
      name: 'Manufacturing & Wholesale', 
      description: 'B2B manufacturers qualifying distributors and bulk buyers', 
      painPoint: 'Long sales cycles require consistent nurturing that manual processes cannot maintain' 
    },
    { 
      name: 'Healthcare Technology', 
      description: 'Medical device and healthcare software companies qualifying healthcare providers', 
      painPoint: 'Regulatory compliance and technical requirements make qualification complex and time-consuming' 
    }
  ];

  const testimonials = [
    {
      name: 'Victoria Sterling',
      role: 'Real Estate Broker',
      company: 'Platinum Properties Group',
      content: 'Lead response time went from hours to under 60 seconds. We\'re capturing 70% more qualified leads and my conversion rate increased 55%. The competition can\'t keep up with our speed.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'James Morrison',
      role: 'Senior Vice President',
      company: 'Wealth Advisory Partners',
      content: 'Client acquisition costs dropped 40% with better lead qualification. Our advisors meet only with pre-qualified prospects, improving conversion rates and client satisfaction significantly.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
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
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Lead Qualification</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how businesses are using AI voice agents to automatically qualify leads, improve sales efficiency, and focus human resources on high-value prospects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/pricing"
                className="btn-gold inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                Get Started
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Lead Qualification Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents transforming how businesses identify and prioritize qualified prospects
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="icon-badge mb-6">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {useCase.description}
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-red-800">Current Pain Point:</h4>
                        <p className="text-sm text-red-700 mt-1">{useCase.realWorldPainPoint}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-green-800">Results with AI:</h4>
                        <p className="text-sm text-green-700 mt-1">{useCase.stats}</p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Solving lead qualification challenges across different business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {industry.description}
                </p>
                <div className="text-xs text-red-600 bg-red-50 rounded p-2">
                  <strong>Challenge:</strong> {industry.painPoint}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Sales Teams
            </h2>
            <p className="text-lg text-gray-600">
              Real results from businesses transforming their lead qualification process with AI
            </p>
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
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-teal">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
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
              Ready to Qualify Leads Automatically?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of businesses using AI voice agents to improve lead quality, accelerate sales cycles, and maximize revenue from every prospect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadQualificationUseCase;