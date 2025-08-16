import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, FileText, Heart, ShoppingBag, Phone, CreditCard, Globe, BarChart3, Languages, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { TypingAnimation } from '../components/magicui/typing-animation';
import { TextAnimate } from '../components/magicui/text-animate';
import { Highlighter } from '../components/magicui/highlighter';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-soft text-brand-teal text-sm font-medium mb-6">
                • AI-Powered Voice Agents
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-euphoric-gradient">Deploy AI Voice Agents</span>
                <br />
                <span className="text-gray-900">
                  <TypingAnimation startOnView={true} duration={150} className="text-gray-900">
                    in 30 Minutes
                  </TypingAnimation>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed no-word-break">
                <TextAnimate animation="blurInUp" by="word" once>
                  Get specialized AI voice agents that handle outbound calling, qualify leads, answer from your knowledge base, route to humans when needed, book appointments, and update your CRM - all available 24/7.
                </TextAnimate>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/signup"
                  className="btn-gold inline-flex items-center justify-center gap-2 group"
                >
                  Start Building Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="glass p-8 card-hover">
                <div className="aspect-video bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="icon-badge-lg mx-auto mb-4">
                      <Phone className="w-8 h-8" />
                    </div>
                    <p className="text-gray-600 font-medium">Interactive Demo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-teal mb-2">30min</div>
              <div className="text-gray-600 font-medium">Setup Time</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-blue mb-2">Twilio</div>
              <div className="text-gray-600 font-medium">Ready Integration</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-gold mb-2">Stripe</div>
              <div className="text-gray-600 font-medium">Secure Billing</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-brand-teal mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Always Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-moss text-sm font-medium mb-4 uppercase tracking-wide">Industry Solutions</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Choose Your </span>
              <span className="text-euphoric-gradient">AI Agents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Domain-specific AI voice agents with proven conversation flows and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real Estate */}
            <div className="glass p-8 card-hover">
              <div className="icon-badge-lg mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Outbound lead calling & qualification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Property requirements understanding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-gray-600">Appointment booking & CRM updates</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/real-estate"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Healthcare */}
            <div className="glass p-8 card-hover">
              <div className="icon-badge-lg mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-600">Patient appointment reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-600">Follow-up care & medication checks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-600">HIPAA-compliant communications</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/healthcare"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Ecommerce */}
            <div className="glass p-8 card-hover">
              <div className="icon-badge-lg mb-6">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecommerce</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">Order confirmations & support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">Abandoned cart recovery calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">Customer feedback & reviews</span>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  to="/ecommerce"
                  className="btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-brand-moss text-sm font-medium mb-4 uppercase tracking-wide">Advanced Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Enterprise-</span>
              <span className="text-euphoric-gradient">Grade Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to launch and scale AI calling agents across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Setup in 30 Minutes</h3>
              <p className="text-gray-600">Get your AI agent running with our intuitive setup process</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payment Processing</h3>
              <p className="text-gray-600">Enterprise-grade security with Stripe integration</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Phone Integration</h3>
              <p className="text-gray-600">Seamless Twilio integration for worldwide calling</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Comprehensive insights and performance tracking</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-language Support</h3>
              <p className="text-gray-600">Serve customers in their preferred language</p>
            </div>

            <div className="text-center glass-soft p-6 card-hover">
              <div className="icon-badge mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Reliability</h3>
              <p className="text-gray-600">Always-on service with 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 text-center gradient-border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              <br /> Ready to Transform Your Business Communication?
            </h3>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join{" "}
              <Highlighter action="underline" color="#a98064" className="font-bold">
                hundreds of businesses
              </Highlighter>{" "}
              already using{" "}
              <span className="font-bold text-brand-teal">
                Euphoric AI
              </span>{" "}
              to automate their calling processes and boost conversions.
            </p>
            <Link to="/signup" className="btn-gold">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gray-900">Scale </span>
              <span className="text-gray-500">as </span>
              <span className="text-euphoric-gradient">You Grow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Self-setup from dashboard. Twilio numbers. Stripe billing. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Starter Plan */}
            <div className="glass p-8 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter AI Calling Agent</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">$299</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Includes 24 hours/mo of calling</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Self-setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Twilio number purchase & assignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Stripe payment integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Access to all domain agents</span>
                </div>
              </div>

              <Link to="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Standard AI Calling Agent */}
            <div className="glass p-12 card-hover relative transform scale-110">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="popular-badge">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard AI Calling Agent</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">$449</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Includes 48 hours/mo of calling</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Self-setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Twilio number purchase & assignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Stripe payment integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Access to all domain agents</span>
                </div>
              </div>

              <Link to="/signup" className="btn-gold w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="glass p-8 card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium AI Calling Agent</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-euphoric-gradient">$599</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Includes 60 hours/mo of calling</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Self-setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Twilio number purchase & assignment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Stripe payment integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  <span className="text-gray-700">Access to all domain agents</span>
                </div>
              </div>

              <Link to="/signup" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;