import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { TrendingUp, Zap, Users, Clock, ArrowUp, Star } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  prefix?: string;
}

const AnimatedCounter = ({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold">
      {value === 0 ? '' : `${prefix}${displayValue.toLocaleString()}${suffix}`}
    </div>
  );
};

const StatItem: React.FC<StatItemProps> = ({ value, suffix, title, description, icon: Icon, gradient, prefix }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className={`bg-gradient-to-br ${gradient} p-8 rounded-3xl shadow-2xl transition-all duration-300 min-h-[300px] flex flex-col justify-between ${isHovered ? 'shadow-3xl' : ''}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id={`pattern-${title}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#pattern-${title})`} />
          </svg>
        </div>

        {/* Icon */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-block"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Stat Value */}
        <div className="text-white mb-2">
          <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 whitespace-nowrap">{title}</h3>

        {/* Description */}
        <p className="text-white/80 text-xs leading-relaxed whitespace-pre-line">{description}</p>

        {/* Trending Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: isHovered ? [-5, -15, -5] : [0, -10, 0],
          opacity: isHovered ? [0.6, 1, 0.6] : [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-2 -right-2 w-4 h-4 bg-brand-gold rounded-full"
      />
      <motion.div
        animate={{
          y: isHovered ? [-8, -18, -8] : [0, -12, 0],
          opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-blue rounded-full"
      />
    </motion.div>
  );
};

const AnimatedStats = () => {
  const stats = [
    {
      value: 0,
      suffix: '',
      title: 'Global',
      description: 'Phone Integration\nSeamless Twilio integration for worldwide calling',
      icon: TrendingUp,
      gradient: 'from-brand-teal via-brand-blue to-brand-gray'
    },
    {
      value: 0,
      suffix: '',
      title: 'Realtime',
      description: 'Analytics\nComprehensive insights and performance tracking',
      icon: Clock,
      gradient: 'from-brand-blue via-brand-teal to-brand-gold'
    },
    {
      value: 35,
      suffix: '+',
      title: 'Languages',
      description: 'Serve customers in their preferred language globally',
      icon: Users,
      gradient: 'from-brand-gray via-brand-teal to-brand-blue'
    },
    {
      value: 99.9,
      suffix: '%',
      title: 'Uptime',
      description: 'Always-on service with guaranteed reliability',
      icon: Zap,
      gradient: 'from-brand-gold via-brand-teal to-brand-black'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-blue/30 to-brand-gray/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-teal/30 to-brand-blue/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue/20 to-brand-gray/20 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-brand-gold" />
            <span className="text-gray-700 font-semibold">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Numbers That Speak
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-gray bg-clip-text text-transparent">
              Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real performance metrics from businesses transforming their operations with AI agents
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join These Numbers?</h3>
            <p className="text-gray-600 mb-6">Start your AI transformation today with a personalized demo</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/euphoricai-ai/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-gold text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center group"
              >
                Book Your Demo
                <ArrowUp className="ml-2 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </a>
              <a
                href="/pricing"
                className="border-2 border-gray-300 hover:border-brand-blue text-gray-700 hover:text-brand-blue px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStats;