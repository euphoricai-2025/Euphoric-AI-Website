import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, DollarSign, Home, Truck, ShoppingBag, Plane, Shield, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompactIndustries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      gradient: 'from-brand-gold to-brand-teal',
      description: 'HIPAA-compliant appointment booking and patient follow-ups',
      stats: '65% fewer no-shows',
      path: '/healthcare'
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: DollarSign,
      gradient: 'from-brand-teal to-brand-blue',
      description: 'Automated lead qualification and client onboarding',
      stats: '3x more qualified leads',
      path: '/financial-services'
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      icon: Home,
      gradient: 'from-brand-blue to-brand-gray',
      description: 'Property inquiries and showing scheduling',
      stats: '40% faster sales cycle',
      path: '/real-estate'
    },
    {
      id: 'logistics',
      name: 'Logistics',
      icon: Truck,
      gradient: 'from-brand-gold to-brand-blue',
      description: 'Delivery updates and route optimization',
      stats: '90% customer satisfaction',
      path: '/logistics'
    },
    {
      id: 'retail',
      name: 'Retail',
      icon: ShoppingBag,
      gradient: 'from-brand-gray to-brand-teal',
      description: 'Order tracking and customer support',
      stats: '50% faster resolution',
      path: '/retail-consumer'
    },
    {
      id: 'travel',
      name: 'Travel',
      icon: Plane,
      gradient: 'from-brand-blue to-brand-gold',
      description: 'Booking assistance and travel support',
      stats: '24/7 availability',
      path: '/travel-hospitality'
    },
    {
      id: 'insurance',
      name: 'Insurance',
      icon: Shield,
      gradient: 'from-brand-teal to-brand-gray',
      description: 'Claims processing and policy inquiries',
      stats: '80% automated resolution',
      path: '/insurance'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Building,
      gradient: 'from-gray-600 to-gray-800',
      description: 'Custom solutions for large organizations',
      stats: 'Unlimited scale',
      path: '/pricing'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-blue/30 to-brand-gray/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Dynamic Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue/20 to-brand-gray/20 rounded-full px-6 py-2 mb-6"
            >
              <Building className="w-5 h-5 text-brand-blue" />
              <span className="text-gray-700 font-semibold">Industry Solutions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 3.8vw, 3.2rem)' }}
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Built for Every</span>
              <br />
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                Industry
              </span>
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mb-8"
              >
                <div className={`bg-gradient-to-r ${industries[activeIndustry].gradient} p-6 rounded-2xl text-white mb-6`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {React.createElement(industries[activeIndustry].icon, { className: "w-8 h-8" })}
                    <h3 className="text-2xl font-bold leading-tight tracking-tight">{industries[activeIndustry].name}</h3>
                  </div>
                  <p className="text-white/90 mb-4">{industries[activeIndustry].description}</p>
                  <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                    <span className="font-semibold">{industries[activeIndustry].stats}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={industries[activeIndustry].path}
                className={`bg-gradient-to-r ${industries[activeIndustry].gradient} hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center group`}
              >
                View {industries[activeIndustry].name} Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-gray-300 hover:border-brand-blue text-gray-700 hover:text-brand-blue px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                See All Industries
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Industry Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = index === activeIndustry;
              
              return (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveIndustry(index)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-3 sm:p-6 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${industry.gradient} text-white shadow-2xl`
                      : 'bg-white hover:bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl border border-gray-200'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${isActive ? 'text-white' : 'text-brand-blue'}`} />
                  <h3 className={`font-bold text-lg mb-2 leading-tight tracking-tight ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {industry.name}
                  </h3>
                  <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                    {industry.description.split(' ').slice(0, 5).join(' ')}...
                  </p>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactIndustries;