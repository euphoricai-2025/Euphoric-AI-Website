import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Users, Calendar, Phone, ArrowRight, CheckCircle, FileText, Heart, ShoppingBag } from 'lucide-react';

const RealEstate = () => {
  const useCases = [
    {
      icon: Users,
      title: 'Lead Qualification Agent',
      description: 'Automatically qualify inbound leads by asking pre-qualifying questions, gathering essential information, and scoring prospects based on your criteria.',
      features: [
        'Budget and financing verification',
        'Timeline and urgency assessment',
        'Property preferences collection',
        'Contact information capture',
        'CRM integration and lead scoring'
      ],
      benefits: [
        'Save 3-5 hours daily on lead qualification',
        'Increase conversion rates by 40%',
        'Never miss a lead, even after hours',
        'Consistent qualifying process'
      ]
    },
    {
      icon: Phone,
      title: 'Missed Call Responder',
      description: 'Instantly follow up on missed calls with personalized responses, ensuring no potential client slips through the cracks.',
      features: [
        'Immediate callback within 60 seconds',
        'Personalized greeting with agent info',
        'Appointment scheduling capability',
        'Information gathering and note-taking',
        'Follow-up scheduling and reminders'
      ],
      benefits: [
        'Capture 60% more leads from missed calls',
        '24/7 availability for client contact',
        'Professional first impression',
        'Reduced lead response time'
      ]
    },
    {
      icon: Calendar,
      title: 'Appointment Setting Agent',
      description: 'Manage your calendar intelligently by scheduling viewings, consultations, and follow-up meetings with qualified prospects.',
      features: [
        'Calendar integration and sync',
        'Property viewing coordination',
        'Consultation appointment booking',
        'Confirmation and reminder calls',
        'Rescheduling and cancellation handling'
      ],
      benefits: [
        'Reduce no-shows by 50%',
        'Optimize calendar utilization',
        'Streamline scheduling process',
        'Free up time for selling activities'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Real Estate Broker',
      company: 'Martinez Properties',
      content: 'AI CallAgent has transformed my lead qualification process. I now capture 3x more qualified leads and my conversion rate has increased by 45%.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Chen',
      role: 'Team Lead',
      company: 'Prime Realty Group',
      content: 'The missed call responder is a game-changer. We never lose a lead now, and clients love the immediate response. ROI was positive within the first month.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              <FileText className="w-10 h-10" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="text-euphoric-gradient">Real Estate </span>
              <br />
              <span className="text-gray-900">AI Agents</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Get a specialized Real Estate AI agent that handles outbound lead calling, understands property requirements, qualifies prospects, and books appointments directly into your CRM.
            </motion.p>
            
            {/* Audio Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="max-w-md mx-auto mb-6"
            >
              <p className="text-sm text-gray-600 mb-3 font-medium">🎧 Listen to Real Estate AI-Human Conversation:</p>
              <div className="audio-player">
                <audio controls className="w-full">
                  <source src="/audio/real-estate-conversation.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </motion.div>
            
            {/* Video Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <p className="text-sm text-gray-600 mb-3 text-center font-medium">📹 Real Estate Agent Setup Demo (2 minutes):</p>
              <div className="loom-embed">
                <iframe 
                  src="https://www.loom.com/embed/real-estate-setup-demo" 
                  frameBorder="0" 
                  allowFullScreen
                  title="Real Estate AI Agent Setup and Usage Demo"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Get This Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Customize for My Business
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Real Estate </span>
              <span className="text-euphoric-gradient">AI Agents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized AI calling agents designed specifically for real estate professionals.
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="glass p-8 card-hover">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="icon-badge-lg">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{useCase.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {useCase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {useCase.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-euphoric-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              See how real estate professionals are transforming their business with AI CallAgent.
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 tracking-tight">
              Real Estate AI Agent FAQ
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "How does the AI agent qualify real estate leads?",
                  answer: "Our AI agent asks pre-qualifying questions about budget, timeline, property preferences, and financing status. It scores leads based on your criteria and routes qualified prospects directly to you."
                },
                {
                  question: "Can it integrate with my existing CRM?",
                  answer: "Yes! Our Real Estate AI agent integrates with popular CRMs like Chime, Follow Up Boss, KvCORE, and others. All lead information and appointment bookings sync automatically."
                },
                {
                  question: "What happens if the AI can't answer a question?",
                  answer: "The AI agent is trained on real estate knowledge, but if it encounters a complex question, it will schedule a callback with you or transfer the call to your preferred number immediately."
                },
                {
                  question: "How quickly can I get started?",
                  answer: "Setup takes about 30 minutes. You'll configure your qualifying questions, connect your CRM, upload your knowledge base, and test the agent before going live."
                }
              ].map((faq, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-button">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cross-links to other domains */}
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 tracking-tight">
              Explore Other AI Agents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/healthcare" 
                className="glass-soft p-6 card-hover group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="icon-badge">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-brand-teal transition-colors">Healthcare AI Agent</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Patient appointment reminders, follow-ups, and HIPAA-compliant communications.</p>
              </Link>
              
              <Link 
                to="/ecommerce" 
                className="glass-soft p-6 card-hover group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="icon-badge">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">Ecommerce AI Agent</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Order confirmations, cart recovery, and customer feedback collection.</p>
              </Link>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight"
            >
              Ready to Transform Your Real Estate Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join hundreds of real estate professionals already using Euphoric AI to automate their calling processes and boost conversions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/signup"
                className="btn-gold inline-flex items-center justify-center gap-2 group"
              >
                Get This Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="btn-outline inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;