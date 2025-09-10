import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Users, Phone, CreditCard, ArrowRight, CheckCircle, TrendingUp, Clock, Shield, Star } from 'lucide-react';

const RetailConsumerUseCase = () => {
  const useCases = [
    {
      icon: ShoppingCart,
      title: 'Order Follow-up & Customer Retention',
      description: 'Proactively engage customers post-purchase with satisfaction surveys, product recommendations, and loyalty program enrollment to maximize customer lifetime value.',
      stats: 'Increase repeat purchase rate by 45% and customer lifetime value by 35%',
      realWorldPainPoint: 'Only 27% of customers make a second purchase without follow-up engagement. Manual post-purchase communication is inconsistent, leading to $890 billion in lost retail revenue annually from poor customer retention.',
      features: [
        'Post-purchase satisfaction surveys and feedback collection',
        'Personalized product recommendations based on purchase history',
        'Loyalty program enrollment and points balance notifications',
        'Replenishment reminders for consumable products',
        'Exclusive offer notifications for VIP customers',
        'Review request campaigns with incentive programs'
      ]
    },
    {
      icon: Users,
      title: 'Customer Service & Support Automation',
      description: 'Handle routine customer inquiries, process returns, track orders, and resolve common issues while escalating complex cases to human agents.',
      stats: 'Reduce support costs by 60% while improving response time by 80%',
      realWorldPainPoint: 'Customer service teams handle 75% repetitive inquiries about order status, returns, and basic product information. Average wait time of 8 minutes creates 40% customer dissatisfaction and abandoned service requests.',
      features: [
        'Order status tracking and delivery updates',
        'Return and exchange process initiation',
        'Size and fit consultation for apparel and footwear',
        'Product availability and restocking notifications',
        'Warranty and service information provision',
        'Account management and password assistance'
      ]
    },
    {
      icon: CreditCard,
      title: 'Cart Abandonment Recovery & Sales Recovery',
      description: 'Re-engage customers who abandoned their shopping carts with personalized offers, address concerns, and guide them through purchase completion.',
      stats: 'Recover 25% of abandoned carts, adding $180,000+ monthly revenue',
      realWorldPainPoint: 'Average cart abandonment rate of 69.8% costs retailers $4.6 trillion globally. Most abandoned customers never return without targeted intervention, representing massive lost revenue opportunities.',
      features: [
        'Personalized cart abandonment follow-up calls',
        'Price drop and discount offer notifications',
        'Address payment and shipping concerns',
        'Product availability confirmation and alternatives',
        'Limited-time offer creation for hesitant customers',
        'Checkout assistance and technical support'
      ]
    }
  ];

  const industries = [
    { 
      name: 'Fashion & Apparel', 
      description: 'Size guidance, style recommendations, and seasonal collection promotion', 
      painPoint: 'High return rates (30-40%) due to poor size guidance cost $761 billion annually' 
    },
    { 
      name: 'Consumer Electronics', 
      description: 'Technical support, warranty information, and product compatibility guidance', 
      painPoint: 'Complex product questions overwhelm support teams, leading to 45% call abandonment' 
    },
    { 
      name: 'Home & Garden', 
      description: 'Product installation guidance, seasonal promotions, and inventory management', 
      painPoint: 'Seasonal demand fluctuations cause 60% inventory waste or stockouts' 
    },
    { 
      name: 'Health & Beauty', 
      description: 'Product recommendations, subscription management, and ingredient consultations', 
      painPoint: 'Subscription churn rate of 40% due to poor engagement and communication' 
    },
    { 
      name: 'Sports & Outdoor', 
      description: 'Equipment sizing, activity recommendations, and seasonal gear promotion', 
      painPoint: 'Product expertise requirements overwhelm generalist customer service teams' 
    },
    { 
      name: 'Grocery & Food', 
      description: 'Delivery coordination, dietary consultations, and freshness guarantees', 
      painPoint: 'Perishable goods require immediate customer contact for delivery success' 
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Thompson',
      role: 'Retail Operations Manager',
      company: 'TrendSetter Fashion',
      content: 'Customer retention improved 40% with personalized follow-ups. The AI identifies shopping patterns and suggests relevant products, increasing our average order value by 28%. Customer satisfaction reached 4.9/5 stars.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Alex Rivera',
      role: 'Customer Experience Director',
      company: 'ElectroMart Plus',
      content: 'Support costs dropped 55% while response time improved from 12 minutes to instant. Cart recovery increased from 9% to 32%, adding $450K monthly revenue. Our team focuses on complex issues while AI handles routine inquiries.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
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
              <ShoppingCart className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900">Retail & Consumer </span>
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Explore how AI voice agents revolutionize customer engagement, recover lost sales, and create personalized shopping experiences that drive loyalty and revenue growth.
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
              Specialized solutions for different retail and consumer sectors
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
              Retail companies achieving breakthrough results with AI voice agents
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
              Revolutionize Your Customer Engagement
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join retail companies using AI agents to recover abandoned sales, enhance customer service, and build lasting customer relationships.
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

export default RetailConsumerUseCase;