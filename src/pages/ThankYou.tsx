import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MessageCircle, Clock, Globe, Zap, Shield, TrendingUp, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { TextAnimate } from '../components/magicui/text-animate';
import SEO from '../components/SEO';

const ThankYou = () => {
  // Inject Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: 'Natural Conversations',
      description: 'AI agents that understand context and respond naturally in 52+ languages',
      gradient: 'from-brand-teal to-brand-blue'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a lead or customer inquiry with round-the-clock AI coverage',
      gradient: 'from-brand-blue to-brand-teal'
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get your AI voice agent up and running in just 30 minutes',
      gradient: 'from-brand-gold to-brand-teal'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance and data encryption',
      gradient: 'from-brand-teal to-brand-gold'
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '250ms', label: 'Response Time' },
    { value: '52+', label: 'Languages' },
    { value: '24/7', label: 'Always Active' }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      <SEO
        title="Thank You - Euphoric AI"
        description="Thank you for your interest in Euphoric AI. Book a demo call to see how our AI voice agents can transform your business communication."
        canonicalUrl="/thank-you"
      />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-gold/30 to-brand-teal/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <CheckCircle className="w-14 h-14 text-white" />
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Thank You!
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                We're Excited to Connect
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                Your information has been received. Book a personalized demo below to see how Euphoric AI can transform your business communication.
              </TextAnimate>
            </motion.p>

            {/* CTA Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-gold/20 backdrop-blur-md border border-brand-teal/40 text-brand-teal text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-4 h-4 mr-3 text-brand-gold animate-pulse" />
                Limited Time: 30-Minute Free Consultation
              </div>
            </motion.div>
          </div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-2xl"></div>

              {/* Calendly Container */}
              <div className="relative glass rounded-3xl p-8 border border-brand-teal/30 shadow-2xl overflow-hidden">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold rounded-2xl shadow-lg mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Demo Call</h2>
                  <p className="text-gray-600">Choose a time that works best for you</p>
                </div>

                {/* Calendly Inline Widget */}
                <div
                  className="calendly-inline-widget rounded-xl overflow-hidden bg-white"
                  data-url="https://calendly.com/euphoricai-ai/demo?hide_gdpr_banner=1&primary_color=6498a0"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                    {/* Card Content */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                      <div className="text-4xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-blue to-brand-teal bg-clip-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">{stat.label}</div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Euphoric AI Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white/40 via-white/20 to-white/40">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 left-20 w-40 h-40 bg-gradient-to-br from-brand-blue/30 to-brand-teal/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-brand-gold/30 to-brand-blue/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl">
                <TrendingUp className="w-4 h-4 mr-3 text-brand-teal animate-pulse" />
                About Euphoric AI
              </div>

              <h2 className="font-bold mb-6 leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                  Transform Your Business with
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">
                  AI-Powered Voice Agents
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Euphoric AI delivers intelligent voice agents that handle calls, qualify leads, book appointments, and integrate seamlessly with your existing tools—all while providing a human-like experience.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                  >
                    <div className="relative">
                      {/* Animated Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>

                      {/* Card Content */}
                      <div className="relative glass rounded-2xl p-8 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-2xl"></div>

              {/* Content */}
              <div className="relative glass rounded-3xl p-10 md:p-12 border border-brand-teal/30 shadow-2xl text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold rounded-2xl shadow-xl mb-8">
                    <Globe className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Trusted by Businesses Worldwide
                  </h3>

                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    From startups to enterprises, companies across industries rely on Euphoric AI to automate customer interactions, increase conversions, and scale their operations without adding headcount.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/pricing"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                      View Pricing
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href="https://calendly.com/euphoricai-ai/demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-brand-teal text-brand-teal font-bold rounded-xl shadow-lg hover:bg-brand-teal hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      Book Another Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions Before Your Demo?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team is here to help. Reach out anytime for quick answers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-teal text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
