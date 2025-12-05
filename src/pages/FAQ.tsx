import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { TextAnimate } from '../components/magicui/text-animate';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How quickly can I set up my AI voice agent?',
          answer: 'You can have your AI voice agent fully operational in just 30 minutes using our intuitive self-setup process. No technical expertise or coding knowledge is required.'
        },
        {
          question: 'What do I need to get started?',
          answer: 'All you need is an email address to create your account. Our platform handles everything else, including phone number setup through Twilio integration and secure payment processing.'
        },
        {
          question: 'Can I try the service before purchasing?',
          answer: 'Yes! You can book a live demo call to experience our AI agent firsthand. We also offer flexible monthly plans that you can start and stop anytime.'
        }
      ]
    },
    {
      category: 'AI Voice Capabilities',
      questions: [
        {
          question: 'What can my AI voice agent do?',
          answer: 'Our AI agents can handle inbound and outbound calls, qualify leads, book appointments, answer customer questions, provide product information, collect feedback, and seamlessly transfer to human agents when needed.'
        },
        {
          question: 'How natural do the AI voices sound?',
          answer: 'Our AI agents use advanced voice synthesis technology with natural-sounding voices in 35+ languages. Customers often cannot tell they are speaking with an AI agent.'
        },
        {
          question: 'Can I customize my AI agent\'s personality and responses?',
          answer: 'Absolutely! You can customize voice tone, personality, conversation scripts, knowledge base, and response patterns to perfectly match your brand and business needs.'
        },
        {
          question: 'Does the AI understand complex customer requests?',
          answer: 'Yes, our AI agents are powered by advanced language models that understand context, handle interruptions, and can engage in natural, multi-turn conversations with customers.'
        }
      ]
    },
    {
      category: 'Integrations & Setup',
      questions: [
        {
          question: 'Which phone systems work with Euphoric AI?',
          answer: 'We integrate seamlessly with Twilio, Telnyx, and other major phone carriers. You can use your existing business phone number or get a new one through our platform.'
        },
        {
          question: 'Can I connect my CRM and other business tools?',
          answer: 'Yes! We integrate with popular CRMs like Salesforce, HubSpot, Pipedrive, and GoHighLevel. We also connect with calendars, email systems, and workflow automation tools.'
        },
        {
          question: 'How do I train the AI on my business information?',
          answer: 'Simply upload your knowledge base, FAQs, product information, or website content. Our AI automatically learns from your materials and can answer customer questions accurately.'
        }
      ]
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          question: 'How much does Euphoric AI cost?',
          answer: 'We offer five flexible plans: Trial ($99/mo with 500 mins), Starter ($349/mo with 2,000 mins), Standard ($549/mo with 3,000 mins), Growth ($849/mo with 5,000 mins), Pro ($1,249/mo with 7,500 mins), and Enterprise (from $1,999/mo with flexible pricing). Overages are billed at $0.16/min. Check our pricing page for complete details.'
        },
        {
          question: 'Are there any setup fees or hidden costs?',
          answer: 'No setup fees or hidden costs. All plans include platform access, basic integrations, and support. You only pay for the plan and actual calling minutes used.'
        },
        {
          question: 'Can I change or cancel my plan anytime?',
          answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.'
        }
      ]
    },
    {
      category: 'Security & Reliability',
      questions: [
        {
          question: 'Is my business data secure?',
          answer: 'Yes, we use enterprise-grade security with end-to-end encryption, secure data storage, and compliance with industry standards including GDPR, CCPA, and SOC 2.'
        },
        {
          question: 'How reliable is the service?',
          answer: 'We maintain 99.9% uptime with 24/7 monitoring and automatic failover systems. All plans include human backup support to ensure your calls are never missed.'
        },
        {
          question: 'Are customer calls recorded?',
          answer: 'Call recording is optional and fully configurable. When enabled, all recordings are encrypted, stored securely, and accessible only to authorized users with proper retention policies.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <HelpCircle className="w-4 h-4 mr-3 text-brand-teal animate-pulse" />
                Questions & Answers
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-8 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Questions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                Find answers to common questions about Euphoric AI voice agents. Can't find what you're looking for? Contact our support team.
              </TextAnimate>
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-lg mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input w-full pl-12 pr-4 py-4 text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-5xl mx-auto">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <div className="w-2 h-8 bg-gradient-to-b from-brand-teal to-brand-blue rounded-full mr-4"></div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <div className="space-y-6">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: questionIndex * 0.05 }}
                        className="glass-soft rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover group"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300 group-hover:bg-white/60"
                        >
                          <span className="text-gray-900 font-semibold text-lg pr-4">{faq.question}</span>
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-white" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-8 pb-6"
                          >
                            <div className="pt-4 border-t border-white/30">
                              <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="glass-soft rounded-2xl p-12 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 text-xl mb-4">
                    No questions found matching "{searchTerm}"
                  </p>
                  <p className="text-gray-500">
                    Try a different search term or{' '}
                    <a href="/contact" className="text-brand-teal hover:text-brand-blue transition-colors font-semibold">
                      contact our support team
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-xl"></div>
              
              {/* Card Content */}
              <div className="relative glass rounded-3xl p-12 border border-brand-teal/30 shadow-2xl">
                <div className="max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Still have questions?
                  </h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Our support team is here to help you get the most out of Euphoric AI. 
                    Get personalized assistance and expert guidance for your voice agent setup.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="/contact"
                      className="btn-gold inline-flex items-center justify-center gap-2 group text-lg px-8 py-4"
                    >
                      Contact Support
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="mailto:hello@euphoricai.io"
                      className="btn-outline inline-flex items-center justify-center gap-2 group text-lg px-8 py-4"
                    >
                      <Mail className="w-5 h-5" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;