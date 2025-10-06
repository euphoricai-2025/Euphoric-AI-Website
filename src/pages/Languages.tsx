import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowLeft, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const Languages = () => {
  // English Variants - Original Languages Only
  const englishVariants = [
    {
      name: "English (United States)",
      flag: "🇺🇸",
      region: "North America",
      accent: "American",
    },
    {
      name: "English (India)",
      flag: "🇮🇳",
      region: "South Asia",
      accent: "Indian",
    },
    {
      name: "English (United Kingdom)",
      flag: "🇬🇧", 
      region: "Europe",
      accent: "British",
    },
    {
      name: "English (Australia)",
      flag: "🇦🇺",
      region: "Oceania", 
      accent: "Australian",
    },
    {
      name: "English (New Zealand)",
      flag: "🇳🇿",
      region: "Oceania",
      accent: "Kiwi",
    },
  ];

  // European Languages - Original Languages Only
  const europeanLanguages = [
    {
      name: "German (Germany)",
      flag: "🇩🇪",
      region: "Central Europe",
      native: "Deutsch",
    },
    {
      name: "Spanish (Spain)",
      flag: "🇪🇸",
      region: "Southern Europe",
      native: "Español",
    },
    {
      name: "Spanish (Latin America)",
      flag: "🌎",
      region: "Latin America",
      native: "Español",
    },
    {
      name: "Portuguese (Portugal)",
      flag: "🇵🇹",
      region: "Southern Europe",
      native: "Português",
    },
    {
      name: "Portuguese (Brazil)",
      flag: "🇧🇷",
      region: "South America",
      native: "Português",
    },
    {
      name: "French (France)",
      flag: "🇫🇷",
      region: "Western Europe",
      native: "Français",
    },
    {
      name: "Italian (Italy)",
      flag: "🇮🇹",
      region: "Southern Europe",
      native: "Italiano",
    },
    {
      name: "Dutch (Netherlands)",
      flag: "🇳🇱",
      region: "Western Europe",
      native: "Nederlands",
    },
    {
      name: "Dutch (Belgium)",
      flag: "🇧🇪",
      region: "Western Europe",
      native: "Nederlands",
    },
    {
      name: "Polish (Poland)",
      flag: "🇵🇱",
      region: "Central Europe",
      native: "Polski",
    },
    {
      name: "Romanian (Romania)",
      flag: "🇷🇴",
      region: "Eastern Europe",
      native: "Română",
    },
    {
      name: "Bulgarian (Bulgaria)",
      flag: "🇧🇬",
      region: "Eastern Europe",
      native: "български",
    },
    {
      name: "Danish (Denmark)",
      flag: "🇩🇰",
      region: "Northern Europe",
      native: "Dansk",
    },
    {
      name: "Finnish (Finland)",
      flag: "🇫🇮",
      region: "Northern Europe", 
      native: "Suomi",
    },
    {
      name: "Greek (Greece)",
      flag: "🇬🇷",
      region: "Southern Europe",
      native: "Ελληνικά",
    },
    {
      name: "Hungarian (Hungary)",
      flag: "🇭🇺",
      region: "Central Europe",
      native: "Magyar",
    },
    {
      name: "Norwegian (Norway)",
      flag: "🇳🇴",
      region: "Northern Europe",
      native: "Norsk",
    },
    {
      name: "Slovak (Slovakia)",
      flag: "🇸🇰",
      region: "Central Europe",
      native: "Slovenčina",
    },
    {
      name: "Swedish (Sweden)",
      flag: "🇸🇪",
      region: "Northern Europe",
      native: "Svenska",
    },
    {
      name: "Catalan (Spain)",
      flag: "🇪🇸",
      region: "Southern Europe",
      native: "Català",
    },
  ];

  // Asian & Middle Eastern Languages - Original Languages Only
  const asianMiddleEasternLanguages = [
    {
      name: "Hindi (India)",
      flag: "🇮🇳",
      region: "South Asia",
      native: "हिन्दी",
    },
    {
      name: "Japanese (Japan)",
      flag: "🇯🇵",
      region: "East Asia",
      native: "日本語",
    },
    {
      name: "Chinese (China)",
      flag: "🇨🇳",
      region: "East Asia",
      native: "中文",
    },
    {
      name: "Korean (South Korea)",
      flag: "🇰🇷",
      region: "East Asia",
      native: "한국어",
    },
    {
      name: "Russian (Russia)",
      flag: "🇷🇺",
      region: "Eastern Europe",
      native: "Русский",
    },
    {
      name: "Turkish (Turkey)",
      flag: "🇹🇷",
      region: "Western Asia",
      native: "Türkçe",
    },
    {
      name: "Vietnamese (Vietnam)",
      flag: "🇻🇳",
      region: "Southeast Asia",
      native: "Tiếng Việt",
    },
    {
      name: "Indonesian (Indonesia)",
      flag: "🇮🇩",
      region: "Southeast Asia",
      native: "Bahasa Indonesia",
    },
    {
      name: "Thai (Thailand)",
      flag: "🇹🇭",
      region: "Southeast Asia",
      native: "ไทย",
    },
    {
      name: "Malay (Malaysia)",
      flag: "🇲🇾",
      region: "Southeast Asia",
      native: "Bahasa Melayu",
    },
  ];

  const LanguageCard = ({ flag, name, region, native, accent }: {
    flag: string;
    name: string;
    region: string;
    native?: string;
    accent?: string;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div
          className={cn(
            "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-200 !bg-white hover:!bg-gray-50",
            "transition-all duration-300 hover:shadow-md hover:border-brand-teal/30",
            "shadow-sm"
          )}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="flex items-center justify-between">
            {/* Left side: Flag + Language Name */}
            <div className="flex items-center space-x-3">
              <div className="text-2xl flex-shrink-0">
                {flag}
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">
                  {name}
                </h4>
                <p className="text-sm text-gray-600">
                  {native || accent || ''}
                </p>
              </div>
            </div>
            
            {/* Right side: Region */}
            <div className="text-right">
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-teal bg-brand-teal/10 rounded-full whitespace-nowrap">
                {region}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-16 bg-euphoric-surface min-h-screen md:hidden">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="icon-badge-lg mx-auto mb-6"
            >
              <Globe className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-bold mb-6 leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
            >
              <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
                All Supported Languages
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Explore our comprehensive language support across English variants, European languages, and Asian & Middle Eastern languages.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Languages Sections */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* English Variants */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">English Variants</h2>
              <p className="text-gray-600">Natural accents and regional variations</p>
            </div>
            <div className="space-y-3">
              {englishVariants.map((language, index) => (
                <LanguageCard key={`english-${index}`} {...language} />
              ))}
            </div>
          </div>

          {/* European Languages */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">European Languages</h2>
              <p className="text-gray-600">Authentic European language support</p>
            </div>
            <div className="space-y-3">
              {europeanLanguages.map((language, index) => (
                <LanguageCard key={`european-${index}`} {...language} />
              ))}
            </div>
          </div>

          {/* Asian & Middle Eastern Languages */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Asian & Middle Eastern Languages</h2>
              <p className="text-gray-600">Comprehensive Asian and Middle Eastern coverage</p>
            </div>
            <div className="space-y-3">
              {asianMiddleEasternLanguages.map((language, index) => (
                <LanguageCard key={`asian-${index}`} {...language} />
              ))}
            </div>
          </div>

          {/* Multi-language Option */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Special Options</h2>
              <p className="text-gray-600">Advanced multilingual capabilities</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div
                className={cn(
                  "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4",
                  "border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100",
                  "transition-all duration-300 shadow-sm"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">
                        Multiple Languages
                      </h4>
                      <p className="text-sm text-gray-600">
                        For multilingual campaigns
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full">
                      GLOBAL
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Ready to Use Our AI in Your Language?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/90 mb-8"
            >
              Get started with AI voice agents that speak your customers' language fluently.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <a
                href="https://calendly.com/euphoricai-ai-voiceagents-demo/45"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-teal hover:bg-gray-100 inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                <CheckCircle className="mr-2 w-5 h-5" />
                Book a Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Languages;