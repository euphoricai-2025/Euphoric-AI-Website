import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How quickly can I set up my AI calling agent?',
          answer: 'You can have your AI calling agent fully operational in just 30 minutes using our intuitive self-setup process. No technical expertise or coding knowledge is required.'
        },
        {
          question: 'What do I need to get started?',
          answer: 'All you need is an email address to create your account. Our platform handles everything else, including phone number setup through Twilio integration and payment processing via Stripe.'
        },
        {
          question: 'Can I try the service before committing?',
          answer: 'Yes! You can begin with our Starter pack which costs $29 per month to get hands-on experience with the service. This allows you to test all core features with 50 minutes of calling included.'
        }
      ]
    },
    {
      category: 'Features & Functionality',
      questions: [
        {
          question: 'What industries does AI CallAgent support?',
          answer: 'We specialize in three core domains: Real Estate (lead qualification, missed call response, appointment setting), Healthcare (appointment reminders, patient follow-up, test results), and Ecommerce (order confirmation, cart recovery, customer feedback).'
        },
        {
          question: 'How does the Twilio integration work?',
          answer: 'Our platform seamlessly integrates with Twilio, allowing you to purchase and manage phone numbers directly from your dashboard. The setup is automatic and requires no technical configuration.'
        },
        {
          question: 'Can I customize the AI voice and conversation flow?',
          answer: 'Absolutely! You can customize voice personalities, conversation scripts, and response patterns to match your brand. Premium plans include advanced voice training and custom conversation flows.'
        },
        {
          question: 'What languages are supported?',
          answer: 'Our AI agents support multiple languages with natural-sounding voices. The exact languages available depend on your plan level, with Premium plans offering the most comprehensive language support.'
        }
      ]
    },
    {
      category: 'Pricing & Billing',
      questions: [
        {
          question: 'How does the calling hour limit work?',
          answer: 'Each plan includes a monthly allocation of calling hours. Starter includes 24 hours, Standard includes 48 hours, and Premium includes 60 hours. Additional hours can be purchased at $12.50 per hour.'
        },
        {
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated based on the remaining time in your billing cycle.'
        },
        {
          question: 'Are there any setup fees or hidden costs?',
          answer: 'No setup fees or hidden costs. All plans include self-setup tools, onboarding support, and access to core features. The only additional costs are optional extra calling hours or premium add-ons.'
        },
        {
          question: 'How does billing work?',
          answer: 'Billing is handled securely through Stripe with monthly recurring charges. You can save payment methods, view invoices, and manage billing directly from your dashboard.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What kind of support do you provide?',
          answer: 'All plans include email support. Standard plans get priority email support, and Premium plans include a dedicated support manager with phone support availability.'
        },
        {
          question: 'Is there API access available?',
          answer: 'Yes, Standard and Premium plans include API access for integrating with your existing systems. Full API documentation and developer resources are available in your dashboard.'
        },
        {
          question: 'How reliable is the service?',
          answer: 'We maintain 99.9% uptime with 24/7 monitoring. All plans include human fallback support, ensuring your calls are handled even in the rare event of system issues.'
        },
        {
          question: 'Can I integrate with my existing CRM?',
          answer: 'Yes, our platform supports integrations with popular CRM systems. Premium plans include priority integration support and custom API development assistance.'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      questions: [
        {
          question: 'How secure is my data?',
          answer: 'We use enterprise-grade security with end-to-end encryption, secure data storage, and compliance with industry standards. All payment processing is handled through Stripe with PCI compliance.'
        },
        {
          question: 'Are calls recorded?',
          answer: 'Call recording is optional and can be configured per agent. When enabled, all recordings are encrypted and stored securely with access controls and retention policies.'
        },
        {
          question: 'Do you comply with privacy regulations?',
          answer: 'Yes, we are compliant with GDPR, CCPA, and other major privacy regulations. Our privacy policy details how we handle and protect user data.'
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
    <div className="pt-16 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-[#a98064]">Frequently </span>
              <span className="bg-gradient-to-r from-[#6498a0] to-[#42a4bf] bg-clip-text text-transparent">Asked Questions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Find answers to common questions about AI CallAgent. Can't find what you're looking for? Contact our support team.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-md mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#42a4bf] focus:border-transparent transition-all duration-200"
              />
            </motion.div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#6498a0] to-[#42a4bf] rounded-full mr-3"></div>
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div
                        key={questionIndex}
                        className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-black font-medium pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#42a4bf] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#42a4bf] flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <div className="pt-2 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No questions found matching "{searchTerm}". Try a different search term or{' '}
                  <a href="/contact" className="text-[#42a4bf] hover:text-[#6498a0] transition-colors">
                    contact our support team
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16 p-8 rounded-2xl bg-white border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of AI CallAgent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-[#a98064] text-white rounded-xl font-medium hover:bg-[#868c82] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@euphoricai.com"
                className="px-6 py-3 border-2 border-[#a98064] text-[#a98064] bg-transparent rounded-xl font-medium hover:bg-[#a98064] hover:text-white transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;