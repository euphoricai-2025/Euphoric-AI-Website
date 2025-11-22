import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react';
import { TextAnimate } from '../components/magicui/text-animate';
import SEO from '../components/SEO';

const Trial = () => {
  const benefits = [
    'Full access to all AI voice agent features',
    'Unlimited calls during trial period',
    'Integration with your existing tools',
    'Dedicated onboarding support',
    'No credit card required',
    'Cancel anytime'
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      <SEO
        title="Claim Your Trial - Euphoric AI"
        description="Start your free trial of Euphoric AI voice agents. Experience the power of AI-driven customer conversations with no commitment required."
        canonicalUrl="/trial"
      />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-gold/30 to-brand-teal/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-gold/20 backdrop-blur-md border border-brand-teal/40 text-brand-teal text-sm font-semibold shadow-xl">
                <Sparkles className="w-4 h-4 mr-3 text-brand-gold animate-pulse" />
                Limited Time Offer
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Claim Your Trial
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                Experience the power of AI voice agents with a free trial. Transform your customer conversations and scale your business with intelligent automation.
              </TextAnimate>
            </motion.p>

            {/* Main CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-2xl"></div>

                {/* Card Content */}
                <div className="relative glass rounded-3xl p-8 md:p-12 border border-brand-teal/30 shadow-2xl">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold rounded-2xl shadow-xl mb-6">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Start Your Free Trial Today
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Get instant access to our AI voice agents and see the difference in your customer engagement.
                  </p>

                  {/* Benefits List */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Your Demo Call
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-brand-teal text-brand-teal font-bold rounded-xl shadow-lg hover:bg-brand-teal hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '250ms', label: 'Response Time' },
                { value: '35+', label: 'Languages' },
                { value: '24/7', label: 'Always Active' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                    {/* Card Content */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                      <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-blue to-brand-teal bg-clip-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-700 font-semibold text-xs md:text-sm uppercase tracking-wide">{stat.label}</div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white/40 via-white/20 to-white/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join hundreds of businesses already using Euphoric AI to automate their customer conversations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-teal text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-xl shadow-lg hover:border-brand-teal hover:text-brand-teal hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trial;
