import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Shield } from 'lucide-react';

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
    <div className="pt-16 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-[#a98064]">About </span>
              <span className="bg-gradient-to-r from-[#6498a0] to-[#42a4bf] bg-clip-text text-transparent">Euphoric AI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
            >
              Transform your Real Estate, Healthcare, or Ecommerce business with instant, automated AI voice calling that never sleeps.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-[#a98064]">Our </span>
                <span className="bg-gradient-to-r from-[#6498a0] to-[#42a4bf] bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Euphoric AI, we believe that every business deserves access to intelligent, automated communication solutions. Our platform eliminates the complexity typically associated with AI deployment, enabling you to launch sophisticated voice agents in just 30 minutes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just building software – we're crafting the future of business communication, where AI agents handle routine interactions so your team can focus on what matters most: growing your business and serving your customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#42a4bf] mb-2">500+</div>
                    <div className="text-sm text-gray-500">Active Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#42a4bf] mb-2">1M+</div>
                    <div className="text-sm text-gray-500">Calls Handled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#42a4bf] mb-2">99.9%</div>
                    <div className="text-sm text-gray-500">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#42a4bf] mb-2">24/7</div>
                    <div className="text-sm text-gray-500">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:from-white/10 hover:to-white/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#a98064]/20 to-[#42a4bf]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#42a4bf]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Industry experts passionate about transforming business communication through AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO & Co-Founder',
                bio: 'Former VP of AI at leading tech company with 15+ years in AI and machine learning.',
                image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO & Co-Founder',
                bio: 'Ex-Google engineer specializing in voice AI and real-time communication systems.',
                image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Emily Zhang',
                role: 'Head of Product',
                bio: 'Product leader with expertise in SaaS platforms and enterprise AI solutions.',
                image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
            >
              Ready to Join Our Mission?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-8"
            >
              Be part of the AI communication revolution. Transform your business with intelligent voice agents today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/signup"
                className="px-8 py-4 bg-[#a98064] text-white rounded-xl font-semibold text-lg hover:bg-[#868c82] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-[#a98064] text-[#a98064] bg-transparent rounded-xl font-semibold text-lg hover:bg-[#a98064] hover:text-white transition-all duration-200"
              >
                Contact Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;