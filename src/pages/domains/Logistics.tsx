import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, MapPin, Calendar, Phone, ArrowRight, CheckCircle, TrendingUp, Package, Clock } from 'lucide-react';

const Logistics = () => {
  const useCases = [
    {
      icon: Package,
      title: 'Delivery Notification Agent',
      description: 'Automatically notify customers about delivery status, estimated arrival times, and coordinate delivery preferences.',
      features: [
        'Real-time delivery updates and tracking',
        'Estimated arrival time notifications',
        'Delivery preference coordination',
        'Address verification and updates',
        'Failed delivery rescheduling',
        'Customer availability confirmation'
      ],
      benefits: [
        'Reduce missed deliveries by 60%',
        'Improve customer satisfaction scores',
        'Decrease delivery costs significantly',
        'Enhance communication efficiency'
      ]
    },
    {
      icon: MapPin,
      title: 'Route Optimization Agent',
      description: 'Coordinate with drivers and customers to optimize delivery routes and handle scheduling changes efficiently.',
      features: [
        'Dynamic route planning coordination',
        'Driver-customer communication bridge',
        'Schedule change management',
        'Traffic and delay notifications',
        'Priority delivery handling',
        'Multi-stop coordination assistance'
      ],
      benefits: [
        'Improve delivery efficiency by 35%',
        'Reduce fuel and operational costs',
        'Minimize delivery delays',
        'Better resource utilization'
      ]
    },
    {
      icon: Phone,
      title: 'Customer Service Agent',
      description: 'Handle shipping inquiries, tracking requests, and provide support for logistics-related customer concerns.',
      features: [
        'Package tracking assistance and updates',
        'Shipping inquiry resolution',
        'Damage claim processing support',
        'Return and exchange coordination',
        'Delivery issue escalation',
        'Customer feedback collection'
      ],
      benefits: [
        'Reduce call center workload by 50%',
        'Faster issue resolution times',
        'Improved customer experience',
        '24/7 support availability'
      ]
    }
  ];

  const painPoints = [
    {
      title: 'Missed Delivery Problem',
      description: '30% of deliveries fail on first attempt due to poor customer communication',
      impact: 'Each failed delivery costs $15-25 in additional resources and delays'
    },
    {
      title: 'Inefficient Route Planning',
      description: 'Manual route coordination leads to 25% longer delivery times and higher fuel costs',
      impact: 'Increased operational costs and reduced driver productivity'
    },
    {
      title: 'Customer Service Overload',
      description: '70% of logistics calls are basic tracking inquiries that overwhelm support staff',
      impact: 'Higher staffing costs and slower response times for complex issues'
    }
  ];

  const results = [
    { metric: '60%', label: 'Fewer Missed Deliveries', description: 'Reduction in failed delivery attempts' },
    { metric: '35%', label: 'More Efficient Routes', description: 'Improvement in delivery efficiency' },
    { metric: '50%', label: 'Less Call Volume', description: 'Reduction in customer service calls' },
    { metric: '$25K+', label: 'Monthly Savings', description: 'Cost reduction per delivery route' }
  ];

  const testimonials = [
    {
      name: 'Nathan Phillips',
      role: 'Logistics Manager',
      company: 'Swift Transport Solutions',
      content: 'Delivery coordination is seamless with automatic customer notifications. Missed deliveries dropped 55% and customer complaints are virtually non-existent.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emma Wilson',
      role: 'Operations Director',
      company: 'Global Freight Partners',
      content: 'Shipment tracking updates are delivered proactively to customers. Our customer service workload decreased 40% while satisfaction increased significantly.',
      image: 'https://images.unsplash.com/photo-1594824154493-f8bcfe19bba4?w=150&h=150&fit=crop&crop=face'
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
              <Truck className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Logistics </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Streamline logistics operations with AI agents that handle delivery notifications, route optimization, and customer service calls.
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
                to="/use-cases/logistics"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Logistics Use Cases
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
              <span className="text-gray-900"> in Logistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Logistics companies face operational challenges that impact delivery success and cost efficiency
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
              <span className="text-gray-900">Logistics </span>
              <span className="text-euphoric-gradient">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized AI agents designed specifically for shipping, delivery, and logistics companies
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
              <span className="text-gray-900"> for Logistics Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real impact on delivery efficiency and operational costs
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
              <span className="text-euphoric-gradient">Enterprise Grade</span>
              <span className="text-gray-900"> & Reliable</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built with logistics industry standards and scalability requirements in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Fleet Integration',
                description: 'Seamless integration with popular fleet management systems and tracking platforms.',
                icon: '🚚'
              },
              {
                title: 'Scalable Infrastructure',
                description: 'Handle thousands of deliveries and customer interactions simultaneously.',
                icon: '⚡'
              },
              {
                title: 'Real-time Updates',
                description: 'Live tracking integration and instant notification delivery across all channels.',
                icon: '📱'
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
              Logistics companies transforming their operations with AI agents
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
              Ready to Optimize Your Logistics Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join logistics companies using AI agents to improve delivery success, reduce costs, and enhance customer satisfaction.
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
                to="/use-cases/logistics"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                View Logistics use case
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;