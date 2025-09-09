import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, CreditCard, Truck, Phone, ArrowRight, CheckCircle, TrendingUp, Clock, Shield, Star } from 'lucide-react';

const EcommerceUseCase = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: 'Cart Abandonment Recovery & Sales Conversion',
      description: 'Proactively reach out to customers who abandoned their carts, address concerns, offer incentives, and guide them through purchase completion to recover lost revenue.',
      stats: 'Recover 30% of abandoned carts, generating $250,000+ additional monthly revenue',
      realWorldPainPoint: 'E-commerce stores lose $4.6 trillion annually from cart abandonment (average 69.8% abandonment rate). Without intervention, 96% of first-time visitors never return, representing massive missed opportunities.',
      features: [
        'Personalized cart abandonment outreach within 1-2 hours',
        'Objection handling for price, shipping, and product concerns',
        'Dynamic discount and incentive offer creation',
        'Payment assistance and checkout technical support',
        'Product availability updates and alternative suggestions',
        'Limited-time offer creation to create urgency'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Issue Resolution & Order Recovery',
      description: 'Handle failed payments, declined transactions, and billing issues while helping customers complete their purchases through alternative payment methods.',
      stats: 'Reduce payment failures by 60% and recover 45% of declined transactions',
      realWorldPainPoint: 'Payment failures cost e-commerce businesses $756 billion annually. 62% of customers never retry after a payment failure, and manual recovery processes are slow and inconsistent.',
      features: [
        'Immediate payment failure notification and assistance',
        'Alternative payment method guidance and setup',
        'Card verification and security concern resolution',
        'Installment and financing option explanations',
        'Subscription payment update assistance',
        'Fraud prevention verification and customer authentication'
      ]
    },
    {
      icon: Truck,
      title: 'Post-Purchase Engagement & Customer Retention',
      description: 'Maintain customer relationships after purchase with order updates, satisfaction surveys, cross-selling opportunities, and support for returns and exchanges.',
      stats: 'Increase customer lifetime value by 40% and repeat purchase rate by 50%',
      realWorldPainPoint: 'Only 32% of e-commerce customers make a second purchase without engagement. Poor post-purchase communication leads to 68% customer churn and reduces lifetime value by 3x.',
      features: [
        'Real-time order status and shipping updates',
        'Delivery coordination and customer preference management',
        'Post-purchase satisfaction surveys and feedback collection',
        'Cross-sell and upsell recommendations based on purchase history',
        'Return and exchange process guidance',
        'Loyalty program enrollment and rewards notification'
      ]
    }
  ];

  const industries = [
    { 
      name: 'Fashion & Apparel', 
      description: 'Size guidance, style recommendations, and seasonal collection marketing', 
      painPoint: 'High return rates (35%) and sizing confusion cost $550 billion annually' 
    },
    { 
      name: 'Consumer Electronics', 
      description: 'Technical specifications, compatibility, and warranty information', 
      painPoint: 'Complex product decisions require expert guidance, leading to 45% cart abandonment' 
    },
    { 
      name: 'Home & Garden', 
      description: 'Product sizing, installation guidance, and seasonal promotions', 
      painPoint: 'Large item purchases require detailed consultation, creating conversion barriers' 
    },
    { 
      name: 'Health & Beauty', 
      description: 'Ingredient consultation, subscription management, and personalized recommendations', 
      painPoint: 'Regulatory concerns and ingredient questions create purchasing hesitation' 
    },
    { 
      name: 'Sports & Outdoor', 
      description: 'Equipment sizing, activity recommendations, and performance guidance', 
      painPoint: 'Technical product knowledge requirements overwhelm customer service teams' 
    },
    { 
      name: 'Specialty Foods', 
      description: 'Dietary consultations, subscription services, and freshness guarantees', 
      painPoint: 'Subscription churn rate of 50% due to poor customer engagement and support' 
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Thompson',
      role: 'E-commerce Director',
      company: 'TrendStyle Online',
      content: 'Cart recovery went from 12% to 42% in just 3 months. The AI agent reaches every abandoned customer within an hour and has recovered over $420,000 in would-be lost sales. Our conversion rate improved from 2.1% to 3.8%.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Roberto Silva',
      role: 'Growth Manager',
      company: 'TechHub Electronics',
      content: 'Payment failure recovery increased from 15% to 67%, and customer satisfaction scores jumped to 4.7/5. The AI handles complex technical questions and payment issues flawlessly. Our revenue per visitor increased 35%.',
      image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              className="icon-badge-lg mx-auto mb-8"
            >
              <ShoppingBag className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900">E-commerce </span>
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Explore how AI voice agents maximize e-commerce conversions, recover abandoned sales, and create personalized shopping experiences that drive revenue growth.
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
          <div className="max-w-6xl mx-auto space-y-20">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="icon-badge mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Real-world Pain Point */}
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Shield className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-red-800">The Problem:</h4>
                          <p className="text-sm text-red-700 mt-1">{useCase.realWorldPainPoint}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-green-800">Results:</h4>
                          <p className="text-sm text-green-700 mt-1">{useCase.stats}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`card ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-euphoric-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized solutions for different e-commerce sectors and business models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                  <p className="text-sm text-yellow-800">{industry.painPoint}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              E-commerce companies achieving breakthrough results with AI voice agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-8"
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
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-cyan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Maximize Your E-commerce Revenue
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join e-commerce companies using AI agents to recover abandoned carts, resolve payment issues, and turn browsers into loyal customers.
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

export default EcommerceUseCase;