import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin, Phone, ArrowRight, CheckCircle, TrendingUp, Clock, Shield, Navigation } from 'lucide-react';

const LogisticsUseCase = () => {
  const useCases = [
    {
      icon: Package,
      title: 'Delivery Status & Notification Management',
      description: 'Proactively communicate delivery status, schedule updates, and coordinate with customers to ensure successful deliveries while reducing missed delivery attempts.',
      stats: 'Reduce missed deliveries by 65% and improve customer satisfaction by 40%',
      realWorldPainPoint: 'Failed delivery attempts cost logistics companies $2.8 billion annually. Customers miss 20-25% of deliveries due to poor communication, requiring expensive re-delivery attempts and storage costs.',
      features: [
        'Real-time delivery status updates with GPS tracking integration',
        'Proactive delivery window confirmation and rescheduling',
        'Address verification and correction before dispatch',
        'Delivery preference collection (safe drop, neighbor, pickup location)',
        'Failed delivery immediate rescheduling and alternative arrangements',
        'Customer availability confirmation for high-value or signature-required items'
      ]
    },
    {
      icon: Navigation,
      title: 'Route Optimization & Driver Communication',
      description: 'Coordinate between dispatch, drivers, and customers to optimize routes, handle last-minute changes, and manage delivery exceptions in real-time.',
      stats: 'Improve delivery efficiency by 35% and reduce fuel costs by 25%',
      realWorldPainPoint: 'Traffic delays, address changes, and customer unavailability create route inefficiencies costing companies 15-20% in additional fuel and labor costs. Manual coordination leads to confused drivers and frustrated customers.',
      features: [
        'Dynamic route adjustment based on real-time conditions',
        'Customer-driver communication bridge for delivery coordination',
        'Traffic delay notifications with updated ETAs',
        'Priority delivery escalation and express handling',
        'Multi-stop delivery coordination and sequencing',
        'Driver break scheduling and compliance monitoring'
      ]
    },
    {
      icon: Phone,
      title: 'Customer Service & Issue Resolution',
      description: 'Handle shipping inquiries, track packages, resolve delivery issues, and provide comprehensive support for all logistics-related customer concerns.',
      stats: 'Reduce support call volume by 50% and resolve 80% of issues on first contact',
      realWorldPainPoint: 'Customer service teams spend 60% of time on repetitive tracking inquiries and delivery status questions. Complex routing information and package locations are difficult to explain, leading to poor customer experiences.',
      features: [
        'Real-time package tracking and status explanations',
        'Automated inquiry resolution for common questions',
        'Delivery exception handling and alternative solutions',
        'Claims processing initiation for damaged or lost packages',
        'Service escalation for complex issues requiring human intervention',
        'Customer feedback collection and satisfaction monitoring'
      ]
    }
  ];

  const industries = [
    { 
      name: 'E-commerce Fulfillment', 
      description: 'Last-mile delivery coordination for online retail orders', 
      painPoint: 'Processing 50,000+ daily deliveries with 25% requiring customer contact for successful completion' 
    },
    { 
      name: 'Freight & Transportation', 
      description: 'Long-haul and LTL shipment tracking and customer communication', 
      painPoint: 'Customers call 3-4 times per shipment for status updates, overwhelming support teams' 
    },
    { 
      name: 'Food & Grocery Delivery', 
      description: 'Time-sensitive delivery coordination with freshness requirements', 
      painPoint: 'Perishable goods require precise timing - 15% spoilage due to delivery coordination failures' 
    },
    { 
      name: 'Medical & Pharmaceutical', 
      description: 'Temperature-controlled and urgent medical supply delivery', 
      painPoint: 'Critical medications delayed due to communication gaps, affecting patient care' 
    },
    { 
      name: 'B2B Industrial Supply', 
      description: 'Business-to-business delivery scheduling and coordination', 
      painPoint: 'Receiving dock scheduling conflicts cause 30% of deliveries to be refused or delayed' 
    },
    { 
      name: 'White Glove Services', 
      description: 'High-value item delivery with installation and setup services', 
      painPoint: 'Complex scheduling for delivery + installation requires multiple customer touchpoints' 
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Operations Director',
      company: 'QuickShip Logistics',
      content: 'Our delivery success rate went from 75% to 92% in first attempt. The AI agent handles all customer communications perfectly, and our drivers love the real-time coordination. We\'ve saved $180,000 in redelivery costs this quarter.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Customer Service Manager',
      company: 'Metro Delivery Solutions',
      content: 'Customer complaints dropped by 60% and satisfaction scores increased from 3.1 to 4.6. The AI handles 80% of tracking inquiries automatically, letting our team focus on complex issues that really need human attention.',
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
              <Truck className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900">Logistics </span>
              <span className="text-euphoric-gradient">Use Cases</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Discover how AI voice agents transform logistics operations, reduce delivery failures, and enhance customer satisfaction across the supply chain.
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
              Specialized solutions for different sectors of the logistics industry
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
              Logistics companies achieving breakthrough results with AI voice agents
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
              Transform Your Logistics Operations
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join logistics companies using AI agents to reduce delivery failures, optimize routes, and deliver exceptional customer service.
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

export default LogisticsUseCase;