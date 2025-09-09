import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headphones, Clock, MessageCircle, Phone, ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';

const CustomerSupportUseCase = () => {
  const useCases = [
    {
      icon: Clock,
      title: '24/7 Tier 1 Support Automation',
      description: 'Handle common customer inquiries, troubleshooting, and account questions around the clock, escalating complex issues to human agents only when necessary.',
      stats: 'Reduce support costs by 60% and resolve 75% of inquiries without human intervention',
      realWorldPainPoint: 'Customer support teams are overwhelmed with repetitive inquiries that could be automated. 80% of support tickets are basic questions, but hiring enough staff for 24/7 coverage is cost-prohibitive.',
      features: [
        'Automated FAQ and knowledge base access',
        'Account information retrieval and updates',
        'Order status and tracking assistance',
        'Password resets and basic troubleshooting',
        'Intelligent escalation to human agents'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Proactive Issue Resolution & Follow-up',
      description: 'Proactively contact customers about known issues, service outages, or order problems before they call support, and follow up on resolved cases.',
      stats: 'Reduce incoming support volume by 40% and improve customer satisfaction by 65%',
      realWorldPainPoint: 'Companies typically react to customer complaints rather than proactively communicating about issues. This creates frustration, negative reviews, and higher support volumes when problems affect multiple customers.',
      features: [
        'Proactive outage and issue notifications',
        'Service disruption updates and ETAs',
        'Post-resolution satisfaction surveys',
        'Follow-up calls for complex issue verification',
        'Preventive maintenance and update notifications'
      ]
    },
    {
      icon: Users,
      title: 'Customer Onboarding & Success',
      description: 'Guide new customers through setup processes, provide training, and ensure successful product adoption with automated check-ins and support.',
      stats: 'Reduce onboarding time by 50% and increase product adoption rates by 45%',
      realWorldPainPoint: 'Poor onboarding leads to 70% of SaaS customers churning within the first 90 days. Manual onboarding processes don\'t scale and leave customers feeling unsupported during critical early stages.',
      features: [
        'Automated welcome calls and setup guidance',
        'Step-by-step process assistance',
        'Feature adoption tracking and encouragement',
        'Regular check-ins during trial periods',
        'Success milestone celebrations and upselling'
      ]
    }
  ];

  const industries = [
    { name: 'SaaS & Software Companies', description: 'Software support and user onboarding', painPoint: '70% of support tickets are repetitive setup and usage questions' },
    { name: 'E-commerce & Retail', description: 'Order support and customer service', painPoint: 'Order inquiries spike during promotions, overwhelming support teams' },
    { name: 'Telecommunications', description: 'Service support and technical assistance', painPoint: 'Service outages create support call floods that exceed capacity' },
    { name: 'Financial Services', description: 'Account support and transaction assistance', painPoint: 'Security requirements limit self-service options, increasing call volume' },
    { name: 'Healthcare Technology', description: 'Patient portal and system support', painPoint: 'Complex systems require extensive user support but staff availability is limited' },
    { name: 'B2B Services', description: 'Client support and account management', painPoint: 'High-touch onboarding is necessary but doesn\'t scale with growth' }
  ];

  const testimonials = [
    {
      name: 'Amanda Thompson',
      role: 'Customer Success Director',
      company: 'TechFlow Solutions',
      content: 'Our support team was drowning in basic "how-to" questions while complex issues went unresolved. The AI agent now handles 80% of tier-1 inquiries instantly, and our customer satisfaction scores increased from 3.2 to 4.6 stars.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Park',
      role: 'VP of Customer Experience',
      company: 'Global Connect Services',
      content: 'We had a 48% churn rate in the first 90 days due to poor onboarding. The AI agent now guides every new customer through setup and checks in regularly. Our churn dropped to 18% and product adoption increased significantly.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              <Headphones className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Customer Support</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how companies are using AI voice agents to provide exceptional customer support, reduce costs, and improve satisfaction scores.
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
              Real-World Customer Support Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents solving the most critical challenges in customer support operations
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
                        <h4 className="text-sm font-medium text-red-800">Industry Challenge:</h4>
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
                        <h4 className="text-sm font-medium text-green-800">Proven Results:</h4>
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
              Industries We Support
            </h2>
            <p className="text-lg text-gray-600">
              Solving specific customer support challenges across different business sectors
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
              Real Results from Support Teams
            </h2>
            <p className="text-lg text-gray-600">
              See how AI voice agents transformed actual customer support operations
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
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join companies using AI voice agents to provide exceptional 24/7 customer support while reducing costs.
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

export default CustomerSupportUseCase;