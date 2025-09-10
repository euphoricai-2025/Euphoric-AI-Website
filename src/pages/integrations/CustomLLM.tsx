import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Brain, Settings, Zap, ArrowRight, CheckCircle, TrendingUp, Code } from 'lucide-react';

const CustomLLMIntegration = () => {
  const features = [
    {
      icon: Brain,
      title: 'Industry-Specific Models',
      description: 'Deploy custom language models trained on your industry\'s specific terminology, regulations, and best practices.',
      realWorldBenefit: 'Improve response accuracy by 85% with domain-specific knowledge'
    },
    {
      icon: Code,
      title: 'Custom Training Data',
      description: 'Train models using your company\'s proprietary knowledge base, procedures, and historical customer interactions.',
      realWorldBenefit: 'Reduce training time for new AI agents from weeks to hours'
    },
    {
      icon: Settings,
      title: 'Advanced Model Configuration',
      description: 'Fine-tune model parameters, response styles, and behavior patterns to match your brand voice and requirements.',
      realWorldBenefit: 'Achieve 95% brand voice consistency across all interactions'
    },
    {
      icon: Zap,
      title: 'Real-time Model Switching',
      description: 'Dynamically switch between different custom models based on conversation context, customer type, or business rules.',
      realWorldBenefit: 'Handle complex scenarios with 60% better resolution rates'
    }
  ];

  const useCases = [
    {
      industry: 'Legal Services',
      scenario: 'Custom model trained on legal terminology and case law for client intake',
      improvement: 'Reduced paralegal time by 70% on initial consultations'
    },
    {
      industry: 'Medical Practice',
      scenario: 'Healthcare-specific model for symptom assessment and appointment triage',
      improvement: 'Improved triage accuracy by 80% compared to general models'
    },
    {
      industry: 'Financial Advisory',
      scenario: 'Model trained on investment terminology and compliance requirements',
      improvement: '90% compliance accuracy with financial regulations'
    },
    {
      industry: 'Technical Support',
      scenario: 'Product-specific model with deep technical knowledge base integration',
      improvement: 'First-call resolution improved from 45% to 78%'
    }
  ];

  const testimonials = [
    {
      name: 'Kevin Zhang',
      role: 'E-commerce Director',
      company: 'TechVault Electronics',
      content: 'Cart abandonment recovery increased our revenue by 28%. The AI agent personalizes each interaction and customers appreciate the helpful follow-up. Conversion rates are phenomenal.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Rachel Stevens',
      role: 'Portfolio Manager',
      company: 'Capital Growth Advisors',
      content: 'The follow-up system maintains perfect client relationships. We\'ve seen 50% more referrals and virtually zero client churn. Compliance documentation is automated and flawless.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face'
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
              className="flex items-center justify-center mb-6"
            >
              <div className="icon-badge-lg mr-4">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-gray-900">Custom LLM</span><br />
                  <span className="text-euphoric-gradient">Integration</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Unlock the full potential of your AI voice agents with custom language models tailored to your industry, brand, and specific business needs.
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
                Deploy Custom Model
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Custom LLM Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Go beyond generic AI with models built specifically for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="icon-badge mr-6 mt-1">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700 font-medium">{feature.realWorldBenefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Applications
            </h2>
            <p className="text-lg text-gray-600">
              Custom models delivering exceptional results across specialized fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-brand-teal rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-brand-teal">{useCase.industry}</h3>
                </div>
                <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                <div className="bg-gold/10 rounded-lg p-3">
                  <p className="text-gold font-semibold text-sm">Result: {useCase.improvement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from custom LLM integration users
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
              Ready for Industry-Leading AI?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Deploy custom language models that understand your business like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Start Custom Development
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-teal inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomLLMIntegration;