import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Phone, Calendar, Users, Settings, PlayCircle, BookOpen } from 'lucide-react';
import { TextAnimate } from '../components/magicui/text-animate';
import SEO from '../components/SEO';

const Trial = () => {
  // Load Calendly widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const callCovers = [
    {
      icon: Users,
      title: 'Understanding your business & use-case',
      description: 'We dive deep into your specific needs and challenges'
    },
    {
      icon: CheckCircle,
      title: 'Confirming compatibility with Euphoric AI',
      description: 'Ensure our solution is the perfect fit for your workflow'
    },
    {
      icon: Settings,
      title: 'Activating your 7-day trial account',
      description: 'Get immediate access to your personalized trial environment'
    },
    {
      icon: PlayCircle,
      title: 'Showing how the test environment works',
      description: 'Live walkthrough of features and capabilities'
    },
    {
      icon: Calendar,
      title: 'Scheduling your onboarding call',
      description: 'Book your dedicated implementation session'
    }
  ];

  const afterCallItems = [
    {
      icon: CheckCircle,
      title: 'Trial account credentials',
      description: 'Secure login details for your personalized dashboard'
    },
    {
      icon: Calendar,
      title: 'Onboarding calendar link',
      description: 'Schedule your full implementation session'
    },
    {
      icon: BookOpen,
      title: 'Steps to prepare your FAQs and call flows',
      description: 'Guidance to get the most from your trial period'
    }
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
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-8 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Activate Your 7-Day Free Trial
              </span>
            </motion.h1>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10"
            >
              <a href="https://link.quickadpro.com/email-tracking/b91232f2088?contactId={{contact.id}}" target="_blank" rel="noopener noreferrer">
                <img
                  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', width: '100%' }}
                  src="https://services.leadconnectorhq.com/countdown-timer/render/69217669d182b6093efee823?uniqueId={{contact.id}}"
                  alt="Limited Time Offer - Countdown Timer"
                />
              </a>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-4xl mx-auto font-medium"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                Join the Trial Activation Call to unlock your Euphoric AI account and explore how AI Voice Agents can transform your lead conversions and customer support.
              </TextAnimate>
            </motion.p>

            {/* What This Call Covers Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                What This Call Covers
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {callCovers.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative h-full">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                        {/* Card Content */}
                        <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold rounded-xl flex items-center justify-center shadow-lg">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* What Happens After the Call Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Happens After the Call
              </h2>

              <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                You will receive:
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {afterCallItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="relative h-full">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-brand-teal/15 to-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                        {/* Card Content */}
                        <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-brand-gold/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-brand-gold via-brand-teal to-brand-blue rounded-full flex items-center justify-center shadow-lg mb-4">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white/40 via-white/20 to-white/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Book Your Trial Activation Call
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Choose a time that works best for you. Our team will guide you through the activation process and answer all your questions.
              </p>
            </motion.div>

            {/* Calendly Inline Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-2xl"></div>

                {/* Calendly Widget Container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-brand-teal/30 shadow-2xl">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/euphoricai-ai-voiceagents-demo/45?hide_gdpr_banner=1&primary_color=3dd8d8"
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Alternative Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-6">
                Prefer to speak with our sales team directly?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-brand-teal text-brand-teal font-bold rounded-xl shadow-lg hover:bg-brand-teal hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Contact Sales Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trial;
