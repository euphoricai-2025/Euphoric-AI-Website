import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Shield, ArrowRight, Briefcase, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TextAnimate } from '../components/magicui/text-animate';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to deliver cutting-edge voice solutions that transform businesses.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every feature we build is designed with our customers\' success in mind, ensuring maximum value and ease of use.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'We measure our success by the tangible results our AI agents deliver for your business operations.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and reliability form the foundation of everything we build and deliver.'
    }
  ];

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-gold/30 to-brand-teal/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Briefcase className="w-4 h-4 mr-3 text-brand-teal animate-pulse" />
                About Our Mission
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-8 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">About Euphoric AI</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Voice AI Agents</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                We're revolutionizing how businesses communicate with their customers through intelligent AI voice agents that work 24/7, handling calls, qualifying leads, and booking appointments with human-like conversation.
              </TextAnimate>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Ready in 30 minutes. Serving customers in 35+ languages. Trusted by businesses worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-brand-blue/30 to-brand-gray/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5 text-brand-teal" />
                <span className="text-gray-700 font-semibold">Our Mission</span>
              </div>

              <h2 className="font-bold mb-8 leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}>
                <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Democratizing AI for</span>
                <br />
                <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Every Business</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At Euphoric AI, we believe that every business deserves access to intelligent, automated communication solutions. Our platform eliminates the complexity typically associated with AI deployment, enabling you to launch sophisticated voice agents in just 30 minutes.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're not just building software – we're crafting the future of business communication, where AI agents handle routine interactions so your team can focus on what matters most: growing your business and serving your customers.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 glass-soft rounded-xl border border-brand-teal/20 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-blue rounded-xl flex items-center justify-center shadow-md">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-gray-900">30min Setup</span>
                </div>
                
                <div className="flex items-center space-x-3 p-4 glass-soft rounded-xl border border-brand-blue/20 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-gray rounded-xl flex items-center justify-center shadow-md">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-gray-900">Enterprise Security</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-gold/20 rounded-3xl blur-xl"></div>
                
                {/* Card Content */}
                <div className="relative glass rounded-3xl p-10 border border-brand-teal/30 shadow-2xl">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-gold/25 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-cyan/25 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="text-6xl font-black text-transparent bg-gradient-to-br from-brand-teal via-brand-blue to-brand-gold bg-clip-text mb-3">
                        99.9%
                      </div>
                      <div className="text-gray-700 font-bold text-lg uppercase tracking-wide">Uptime Guarantee</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="glass-soft rounded-xl p-4">
                        <div className="text-3xl font-bold text-brand-teal mb-2">35+</div>
                        <div className="text-sm font-medium text-gray-600">Languages</div>
                      </div>
                      <div className="glass-soft rounded-xl p-4">
                        <div className="text-3xl font-bold text-brand-blue mb-2">24/7</div>
                        <div className="text-sm font-medium text-gray-600">Active</div>
                      </div>
                      <div className="glass-soft rounded-xl p-4">
                        <div className="text-3xl font-bold text-brand-gold mb-2">250ms</div>
                        <div className="text-sm font-medium text-gray-600">Latency</div>
                      </div>
                      <div className="glass-soft rounded-xl p-4">
                        <div className="text-3xl font-bold text-brand-gray mb-2">Global</div>
                        <div className="text-sm font-medium text-gray-600">Reach</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-tl from-brand-gold/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-gold/20 to-brand-teal/20 rounded-full px-6 py-2 mb-8"
            >
              <Shield className="w-5 h-5 text-brand-gold" />
              <span className="text-gray-700 font-semibold">Our Values</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Principles That</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Drive Us Forward</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The core beliefs that guide everything we do and every decision we make in building the future of AI communication.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative">
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-blue/15 to-brand-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-teal/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center h-80 flex flex-col">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl p-4 mb-6 inline-block shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      </div>
                      
                      <div className="flex-grow flex items-center">
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-brand-blue/30 to-brand-teal/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-brand-gold/30 to-brand-blue/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue/20 to-brand-gray/20 rounded-full px-6 py-2 mb-8"
            >
              <Users className="w-5 h-5 text-brand-blue" />
              <span className="text-gray-700 font-semibold">Our Team</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Meet the Visionaries</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Behind Euphoric AI</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Industry experts passionate about transforming business communication through AI innovation and cutting-edge technology.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Imran Mehdi',
                role: 'Founder & CEO',
                bio: 'Former VP of AI at leading tech company with 15+ years in AI and machine learning.',
                image: '/images/team/imran-mehdi.jpg'
              },
              {
                name: 'Monil Dawda',
                role: 'Co-Founder & COO',
                bio: 'Ex-Google engineer specializing in voice AI and real-time communication systems.',
                image: '/images/team/monil-dawda.jpg'
              },
              {
                name: 'Pavitar Singh Arneja',
                role: 'Head of Product',
                bio: 'Product leader with expertise in SaaS platforms and enterprise AI solutions.',
                image: '/images/team/pavitar-singh-arneja.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="relative">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-teal/15 to-brand-gold/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-blue/30 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                    <div className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image doesn't load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback initials */}
                      <div className="w-full h-full bg-gradient-to-br from-brand-teal to-brand-blue flex items-center justify-center text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-brand-teal font-semibold text-lg">{member.role}</p>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-blue/20 to-brand-gray/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-teal text-sm font-semibold mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Bot className="w-4 h-4 mr-3 text-brand-blue animate-pulse" />
                Join the Revolution
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bold mb-8 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">Ready to Transform</span>
              <br />
              <span className="bg-gradient-to-r from-gray-600 via-gray-700 to-brand-gold bg-clip-text text-transparent">Your Business?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              <TextAnimate animation="blurInUp" by="word" once>
                Be part of the AI communication revolution. Transform your business with intelligent voice agents that work 24/7, handle customer inquiries, and boost your team's productivity.
              </TextAnimate>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                to="/signup"
                className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group text-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-brand-teal text-brand-teal font-bold py-4 px-8 rounded-xl hover:bg-brand-teal hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg"
              >
                Book Demo
              </a>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm text-gray-700 font-medium text-center max-w-md mx-auto mt-8"
            >
              Join thousands of businesses already using AI voice agents to scale their operations.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;