import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Phone, Calendar, Users, Settings, PlayCircle, BookOpen } from 'lucide-react';
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
      title: 'Understanding Your Business & Use-Case',
      description: 'We dive deep into your specific needs and challenges'
    },
    {
      icon: CheckCircle,
      title: 'Confirming Compatibility With Euphoric AI',
      description: 'Ensure our solution is the perfect fit for your workflow'
    },
    {
      icon: Settings,
      title: 'Activating Your 7-Day Trial Account',
      description: 'Get immediate access to your personalized trial environment'
    },
    {
      icon: PlayCircle,
      title: 'Showing How The Test Environment Works',
      description: 'Live walkthrough of features and capabilities'
    },
    {
      icon: Calendar,
      title: 'Scheduling Your Onboarding Call',
      description: 'Book your dedicated implementation session'
    }
  ];

  const afterCallItems = [
    {
      icon: CheckCircle,
      title: 'Trial Account Credentials',
      description: 'Secure login details for your personalized dashboard'
    },
    {
      icon: Calendar,
      title: 'Onboarding Calendar Link',
      description: 'Schedule your full implementation session'
    },
    {
      icon: BookOpen,
      title: 'Steps To Prepare Your FAQs And Call Flows',
      description: 'Guidance to get the most from your trial period'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-euphoric-50">
      <SEO
        title="Activate Your 7-Day Free Trial - Euphoric AI"
        description="Join the Trial Activation Call to unlock your Euphoric AI account and explore how AI Voice Agents can transform your lead conversions and customer support."
        canonicalUrl="/trial"
      />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-brand-blue/20 via-brand-teal/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-gold/20 via-brand-teal/15 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-brand-teal/10 via-brand-blue/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading with Static Gradient */}
            <h1
              className="font-bold mb-8 leading-tight tracking-tight bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold bg-clip-text text-transparent"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
            >
              Activate Your <span className="whitespace-nowrap">7-Day</span> Free Trial
            </h1>

            {/* Countdown Timer with Premium Styling */}
            <div className="mb-10 relative">
              <div className="relative inline-block">
                {/* Glow effect behind timer */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 via-brand-teal/30 to-brand-gold/30 blur-2xl rounded-3xl scale-110"></div>

                {/* Timer with glass morphism effect */}
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/40 shadow-2xl">
                  <a href="https://link.quickadpro.com/email-tracking/b91232f2088?contactId={{contact.id}}" target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', width: '100%' }}
                      src="https://services.leadconnectorhq.com/countdown-timer/render/69217669d182b6093efee823?uniqueId={{contact.id}}"
                      alt="Limited Time Offer - Countdown Timer"
                      className="rounded-2xl"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Subheading with Black Font */}
            <p className="text-xl md:text-2xl text-black leading-relaxed mb-16 max-w-4xl mx-auto font-medium">
              Join the Trial Activation Call to unlock your Euphoric AI account and explore how AI Voice Agents can transform your lead conversions and customer support.
            </p>

            {/* What This Call Covers Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold bg-clip-text text-transparent">
                  What This Call Covers
                </span>
              </h2>
              <p className="text-lg text-brand-gray mb-12 max-w-2xl mx-auto">
                A comprehensive walkthrough designed to set you up for success
              </p>

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
                        {/* Animated Gradient Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold rounded-2xl opacity-75 group-hover:opacity-100 blur group-hover:blur-lg transition duration-500 animate-gradient-xy"></div>

                        {/* Card Content */}
                        <div className="relative h-full bg-white rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-2">
                          <div className="flex items-start gap-4">
                            {/* Gradient Icon Container */}
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-blue via-brand-teal to-brand-gold rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Hover Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 rounded-2xl"></div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-gold via-brand-teal to-brand-blue bg-clip-text text-transparent">
                  What Happens After the Call
                </span>
              </h2>

              <p className="text-xl text-brand-teal mb-10 max-w-3xl mx-auto font-medium">
                You will receive:
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                        {/* Animated Gradient Border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold via-brand-teal to-brand-blue rounded-3xl opacity-75 group-hover:opacity-100 blur group-hover:blur-lg transition duration-500 animate-gradient-x"></div>

                        {/* Card Content */}
                        <div className="relative h-full bg-white rounded-3xl p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                          <div className="flex flex-col items-center text-center">
                            {/* Icon with Gradient Background and Pulse Animation */}
                            <div className="relative mb-6">
                              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-teal to-brand-blue rounded-full opacity-20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                              <div className="relative w-20 h-20 bg-gradient-to-br from-brand-gold via-brand-teal to-brand-blue rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                <Icon className="w-10 h-10 text-white" />
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-black mb-3">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Number Badge */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-brand-gold via-brand-teal to-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            {index + 1}
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-euphoric-50 via-white to-gray-50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 via-brand-teal/10 to-brand-gold/10 border border-brand-teal/20 mb-6">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span className="text-sm font-semibold bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold bg-clip-text text-transparent">
                  Limited Time Offer
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold bg-clip-text text-transparent">
                  Book Your Trial Activation Call
                </span>
              </h2>
              <p className="text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto">
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
                {/* Animated Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold rounded-3xl opacity-75 blur-lg animate-gradient-x"></div>

                {/* Calendly Widget Container with Glass Effect */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl">
                  <div
                    className="calendly-inline-widget rounded-2xl overflow-hidden"
                    data-url="https://calendly.com/euphoricai-ai-voiceagents-demo/45?hide_gdpr_banner=1&primary_color=42a4bf"
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Alternative Contact with Enhanced Styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 via-brand-teal/20 to-brand-gold/20 blur-xl rounded-2xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-teal/20">
                  <p className="text-brand-teal mb-6 text-lg font-medium">
                    Prefer to speak with our sales team directly?
                  </p>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-gold text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></div>

                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Contact Sales Team</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trial;
