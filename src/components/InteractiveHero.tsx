import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Zap, MessageCircle, Target, Headphones } from 'lucide-react';

const InteractiveHero = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const demoScenarios = [
    {
      id: 'appointment',
      title: 'Appointment Booking',
      description: 'AI books appointments 24/7',
      icon: '📅',
      gradient: 'from-brand-blue to-brand-teal',
      stats: '95% booking rate'
    },
    {
      id: 'lead',
      title: 'Lead Qualification', 
      description: 'Qualify leads instantly',
      icon: <Target className="w-5 h-5" />,
      gradient: 'from-brand-teal to-brand-gold',
      stats: '3x more qualified leads'
    },
    {
      id: 'support',
      title: 'Customer Support',
      description: 'Handle inquiries naturally',
      icon: <Headphones className="w-5 h-5" />, 
      gradient: 'from-brand-gray to-brand-gold',
      stats: '85% resolution rate'
    }
  ];

  const conversationExample = {
    appointment: [
      { speaker: 'AI', text: "Hi! I'm calling to confirm your appointment tomorrow at 2 PM." },
      { speaker: 'Customer', text: "Actually, can we reschedule? I have a conflict." },
      { speaker: 'AI', text: "Of course! I have availability Thursday at 10 AM or Friday at 3 PM." },
      { speaker: 'Customer', text: "Thursday at 10 AM works perfect." },
      { speaker: 'AI', text: "Great! I've updated your appointment. You'll receive a confirmation shortly." }
    ],
    lead: [
      { speaker: 'AI', text: "Thanks for your interest! What's your main business challenge right now?" },
      { speaker: 'Customer', text: "We're struggling with customer service response times." },
      { speaker: 'AI', text: "I understand. How many customer inquiries do you handle daily?" },
      { speaker: 'Customer', text: "About 200-300 calls and emails per day." },
      { speaker: 'AI', text: "Perfect fit! I'll connect you with our enterprise specialist for a custom demo." }
    ],
    support: [
      { speaker: 'AI', text: "Hi! How can I help you today?" },
      { speaker: 'Customer', text: "I can't access my account after the password reset." },
      { speaker: 'AI', text: "I can help with that. Can you confirm the email address on your account?" },
      { speaker: 'Customer', text: "It's john.smith@email.com" },
      { speaker: 'AI', text: "Found your account! I'm sending a new verification link now. Check your inbox in 2 minutes." }
    ]
  };

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!activeDemo) return;

    const conversation = conversationExample[activeDemo];
    if (!conversation || currentMessageIndex >= conversation.length) return;

    const message = conversation[currentMessageIndex];
    let textIndex = 0;
    setDisplayedText('');

    const typeEffect = setInterval(() => {
      if (textIndex < message.text.length) {
        setDisplayedText(message.text.substring(0, textIndex + 1));
        textIndex++;
      } else {
        clearInterval(typeEffect);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => 
            prev + 1 < conversation.length ? prev + 1 : 0
          );
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeEffect);
  }, [activeDemo, currentMessageIndex]);

  const startDemo = (demoId: string) => {
    setActiveDemo(demoId);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
  };

  const stopDemo = () => {
    setActiveDemo(null);
    setIsPlaying(false);
    setCurrentMessageIndex(0);
    setDisplayedText('');
  };

  return (
    <div className="relative bg-gradient-to-br from-brand-black via-brand-gray to-brand-teal overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * 400,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, -100],
              opacity: [0.7, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">AI Voice Agents</span>
                <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Your AI Staff
              <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Never Sleeps
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Watch AI agents handle appointments, qualify leads, and support customers with human-like conversations. No scripts. No limits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="https://calendly.com/euphoricai-aivoiceagents-demo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-teal hover:to-brand-gold text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-brand-blue/25 inline-flex items-center justify-center group"
              >
                Book Live Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => activeDemo ? stopDemo() : startDemo('appointment')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white/20 inline-flex items-center justify-center"
              >
                {activeDemo ? (
                  <>
                    <Pause className="mr-2 w-5 h-5" />
                    Stop Demo
                  </>
                ) : (
                  <>
                    <Play className="mr-2 w-5 h-5" />
                    See It Work
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: '24/7', label: 'Always Available' },
                { value: '95%', label: 'Success Rate' },
                { value: '< 30s', label: 'Setup Time' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Interactive Demo */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
              {/* Demo Selector */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {demoScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => startDemo(scenario.id)}
                    className={`p-4 rounded-xl text-center transition-all duration-200 ${
                      activeDemo === scenario.id 
                        ? `bg-gradient-to-br ${scenario.gradient} text-white shadow-lg transform scale-105` 
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    <div className="text-2xl mb-2">{scenario.icon}</div>
                    <div className="font-semibold text-sm mb-1">{scenario.title}</div>
                    <div className="text-xs opacity-80">{scenario.stats}</div>
                  </button>
                ))}
              </div>

              {/* Conversation Display */}
              <div className="bg-black/30 rounded-2xl p-6 min-h-[300px]">
                <AnimatePresence mode="wait">
                  {activeDemo ? (
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      {conversationExample[activeDemo]?.slice(0, currentMessageIndex + 1).map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: message.speaker === 'AI' ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.3 }}
                          className={`flex ${message.speaker === 'AI' ? 'justify-start' : 'justify-end'}`}
                        >
                          <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                            message.speaker === 'AI' 
                              ? 'bg-gradient-to-r from-brand-blue to-brand-teal text-white' 
                              : 'bg-white/20 text-gray-100'
                          }`}>
                            <div className="text-xs opacity-80 mb-1">{message.speaker}</div>
                            <div className="text-sm">
                              {index === currentMessageIndex ? displayedText : message.text}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* Typing Indicator */}
                      {currentMessageIndex < conversationExample[activeDemo]?.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white/10 px-4 py-3 rounded-2xl">
                            <div className="flex space-x-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center h-full text-center"
                    >
                      <div>
                        <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">See AI in Action</h3>
                        <p className="text-gray-400">Select a scenario above to watch real AI conversations</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Demo Controls */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div>
                  <span>Live AI Demo</span>
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHero;