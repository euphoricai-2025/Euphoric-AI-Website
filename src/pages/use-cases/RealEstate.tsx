import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Phone, Calendar, Users, ArrowRight, CheckCircle, TrendingUp, MapPin } from 'lucide-react';

const RealEstateUseCase = () => {
  const useCases = [
    {
      icon: Phone,
      title: 'Instant Lead Response & Qualification',
      description: 'Immediately respond to online inquiries and missed calls, qualifying leads within minutes while they\'re still actively searching for properties.',
      stats: 'Increase lead conversion by 300% and reduce response time from 4 hours to 30 seconds',
      realWorldPainPoint: 'Real estate leads lose interest within 5 minutes if not contacted. Agents miss 67% of inquiries during showings or after hours, losing potential buyers and sellers to faster-responding competitors.',
      features: [
        'Instant response to all online and phone inquiries',
        'Budget and financing pre-qualification',
        'Timeline and urgency assessment',
        'Property type and location preferences',
        'Contact information capture and verification'
      ]
    },
    {
      icon: Calendar,
      title: 'Showing Coordination & Follow-up',
      description: 'Automate showing appointments, send reminders, collect feedback, and nurture prospects through the entire buying or selling process.',
      stats: 'Reduce no-shows by 60% and increase showing-to-offer conversion by 45%',
      realWorldPainPoint: 'Real estate agents spend 40% of their time on administrative tasks like scheduling showings, sending reminders, and following up with prospects, leaving less time for actual sales activities.',
      features: [
        'Automated showing scheduling with calendar integration',
        'Pre-showing preparation and direction assistance',
        'Post-showing feedback collection and analysis',
        'Follow-up nurturing campaigns based on interest level',
        'Offer preparation and negotiation support'
      ]
    },
    {
      icon: Users,
      title: 'Past Client Reactivation & Referrals',
      description: 'Proactively contact past clients for repeat business, referral opportunities, and market updates to maximize lifetime customer value.',
      stats: 'Generate 40% more referrals and increase repeat business by 65%',
      realWorldPainPoint: 'Real estate agents typically get 80% of their business from referrals and repeat clients, but most don\'t have systematic follow-up processes, missing opportunities for future transactions.',
      features: [
        'Automated anniversary and milestone follow-ups',
        'Market update delivery and home value assessments',
        'Referral request campaigns with incentive programs',
        'Home maintenance reminder services',
        'Investment property opportunity alerts'
      ]
    }
  ];

  const industries = [
    { name: 'Residential Real Estate Agents', description: 'Home buying and selling services', painPoint: 'Leads convert to competitors within 5 minutes if not contacted' },
    { name: 'Real Estate Teams & Brokerages', description: 'Multi-agent operations and lead distribution', painPoint: 'Lead routing delays cause 50% lead loss in team environments' },
    { name: 'Commercial Real Estate', description: 'Business property sales and leasing', painPoint: 'Complex inquiries require immediate qualification but agents are often unavailable' },
    { name: 'Property Management Companies', description: 'Rental property management and leasing', painPoint: 'Rental inquiries need instant response but staff availability is limited' },
    { name: 'Real Estate Investors', description: 'Investment property acquisition and disposition', painPoint: 'Seller leads are time-sensitive and require immediate cash offer evaluation' },
    { name: 'New Construction Sales', description: 'New home sales and builder representation', painPoint: 'Model home visitors often leave without connecting with sales staff' }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Top Producing Agent',
      company: 'Century 21 Premier',
      content: 'I used to miss leads constantly during showings and evenings. Now every inquiry gets an immediate response, and I\'ve tripled my conversion rate. The AI agent even pre-qualifies buyers with budget and timeline, so I only spend time with serious prospects.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Thompson',
      role: 'Broker Owner',
      company: 'Thompson Realty Group',
      content: 'Our team of 15 agents was struggling with lead distribution and follow-up. The AI system now routes qualified leads instantly and follows up with every prospect systematically. Our team conversion rate went from 8% to 19%.',
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
              <MapPin className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-gray-900">Real Estate</span><br />
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how real estate professionals are using AI voice agents to capture more leads, increase conversions, and maximize client lifetime value.
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
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/real-estate"
                className="btn-glass inline-flex items-center justify-center px-8 py-3 text-base font-medium"
              >
                View Real Estate Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Real Estate Solutions
            </h2>
            <p className="text-lg text-gray-600">
              AI voice agents solving the most critical challenges in real estate sales and marketing
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Estate Sectors We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Addressing specific operational challenges across different real estate markets
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
              Real Results from Real Estate Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See how AI voice agents transformed actual real estate businesses
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
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join real estate professionals using AI voice agents to capture more leads, increase conversions, and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
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

export default RealEstateUseCase;