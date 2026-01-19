import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

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

// Multi-language Option - Static (Original)
const multiLanguageOption = {
  name: "Multiple Languages",
  flag: "🌐",
  description: "For multilingual campaigns"
};

const LanguageCard = ({
  flag,
  name,
  region,
  native,
  accent,
}: {
  flag: string;
  name: string;
  region: string;
  native?: string;
  accent?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4",
        // Much wider to accommodate full text - significantly increased mobile width
        "w-72 sm:w-64 md:w-60",
        // Force white background with important
        "border-gray-400 !bg-white hover:!bg-gray-50",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // Enhanced hover effects
        "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-brand-teal/50",
        // Strong shadow for visibility
        "shadow-lg"
      )}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="flex flex-col space-y-2">
        {/* First Line: Flag + Language Name */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Large Flag - responsive size */}
          <div className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0">
            {flag}
          </div>
          
          {/* Language Name - responsive text */}
          <h3 className="text-sm sm:text-base font-bold !text-black dark:text-white flex-1 leading-tight" style={{ color: '#000000' }}>
            {name}
          </h3>
        </div>
        
        {/* Second Line: Native Name/Accent + Region */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Native Name or Accent */}
          <p className="text-xs font-medium !text-black dark:text-brand-cyan flex-1" style={{ color: '#000000' }}>
            {native || accent || ''}
          </p>
          
          {/* Region */}
          <p className="text-xs !text-black dark:text-gray-400 font-medium uppercase tracking-wide flex-shrink-0" style={{ color: '#000000' }}>
            {region}
          </p>
        </div>
      </div>
    </figure>
  );
};

// English Variants Marquee
export function EnglishVariantsMarquee() {
  const firstRow = englishVariants.slice(0, Math.ceil(englishVariants.length / 2));
  const secondRow = englishVariants.slice(Math.ceil(englishVariants.length / 2));
  
  // Same duration for all sections regardless of content - fixed pace
  const duration = `40s`;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">English Variants</h3>
        <p className="text-gray-600">Natural accents and regional variations</p>
      </div>
      
      <div className="flex w-full flex-col overflow-hidden">
        <Marquee pauseOnHover className={`[--duration:${duration}]`}>
          {firstRow.map((language) => (
            <LanguageCard key={`${language.name}-1`} {...language} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className={`[--duration:${duration}]`}>
          {secondRow.map((language) => (
            <LanguageCard key={`${language.name}-2`} {...language} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// European Languages Marquee  
export function EuropeanLanguagesMarquee() {
  const firstRow = europeanLanguages.slice(0, Math.ceil(europeanLanguages.length / 2));
  const secondRow = europeanLanguages.slice(Math.ceil(europeanLanguages.length / 2));
  
  // Same duration for all sections regardless of content - fixed pace
  const duration = `40s`;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">European Languages</h3>
        <p className="text-gray-600">Authentic European language support</p>
      </div>
      
      <div className="flex w-full flex-col overflow-hidden">
        <Marquee pauseOnHover className={`[--duration:${duration}]`}>
          {firstRow.map((language) => (
            <LanguageCard key={`${language.name}-1`} {...language} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className={`[--duration:${duration}]`}>
          {secondRow.map((language) => (
            <LanguageCard key={`${language.name}-2`} {...language} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// Asian & Middle Eastern Languages Marquee
export function AsianMiddleEasternMarquee() {
  const firstRow = asianMiddleEasternLanguages.slice(0, Math.ceil(asianMiddleEasternLanguages.length / 2));
  const secondRow = asianMiddleEasternLanguages.slice(Math.ceil(asianMiddleEasternLanguages.length / 2));
  
  // Same duration for all sections regardless of content - fixed pace
  const duration = `40s`;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Asian & Middle Eastern Languages</h3>
        <p className="text-gray-600">Comprehensive Asian and Middle Eastern coverage</p>
      </div>
      
      <div className="flex w-full flex-col overflow-hidden">
        <Marquee pauseOnHover className={`[--duration:${duration}]`}>
          {firstRow.map((language) => (
            <LanguageCard key={`${language.name}-1`} {...language} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className={`[--duration:${duration}]`}>
          {secondRow.map((language) => (
            <LanguageCard key={`${language.name}-2`} {...language} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// Multi-language Option - Static Card with Same Styling
export function MultiLanguageOption() {
  return (
    <div className="mb-16">
      <div className="flex justify-center">
        <figure
          className={cn(
            "relative h-full w-54 cursor-pointer overflow-hidden rounded-xl border p-4",
            // Force white background with important
            "border-gray-400 !bg-white hover:!bg-gray-50",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            // Enhanced hover effects
            "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-brand-teal/50",
            // Strong shadow for visibility
            "shadow-lg"
          )}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="flex flex-col space-y-2">
            {/* First Line: Flag + Language Name */}
            <div className="flex items-center space-x-3">
              {/* Large Flag */}
              <div className="text-4xl flex-shrink-0">
                {multiLanguageOption.flag}
              </div>
              
              {/* Language Name */}
              <h3 className="text-base font-bold !text-black dark:text-white flex-1" style={{ color: '#000000' }}>
                {multiLanguageOption.name}
              </h3>
            </div>
            
            {/* Second Line: Description + Global */}
            <div className="flex items-center justify-between gap-4">
              {/* Description */}
              <p className="text-xs font-medium !text-black dark:text-brand-cyan" style={{ color: '#000000' }}>
                {multiLanguageOption.description}
              </p>
              
              {/* Region */}
              <p className="text-xs !text-black dark:text-gray-400 font-medium uppercase tracking-wide ml-4" style={{ color: '#000000' }}>
                GLOBAL
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

// Combined Languages Showcase Component
export function LanguagesShowcase() {
  // Select a few representative languages to display on mobile
  const featuredLanguages = [
    englishVariants[0], // English (United States)
    englishVariants[2], // English (United Kingdom)
    europeanLanguages[1], // Spanish (Spain)
    europeanLanguages[5], // French (France)
    asianMiddleEasternLanguages[0], // Hindi (India)
    asianMiddleEasternLanguages[1], // Japanese (Japan)
    asianMiddleEasternLanguages[2], // Chinese (China)
  ];

  return (
    <section className="py-20 bg-euphoric-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-teal via-brand-blue to-brand-gold bg-clip-text text-transparent">
              We support over 52+ languages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global multilingual support across English variants, European languages,<br />
            Asian & Middle Eastern languages, and multi-language campaigns.
          </p>
        </div>

        {/* MOBILE VIEW - Simple List */}
        <div className="md:hidden w-full max-w-2xl mx-auto px-2 sm:px-0">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-200">
            {/* Card Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Language Support</h3>
              <p className="text-sm sm:text-base text-gray-600">Popular languages we support</p>
            </div>
            
            {/* Featured Languages - Stacked Vertically */}
            <div className="space-y-3 mb-8">
              {featuredLanguages.map((language, index) => (
                <div key={`${language.name}-featured`} className="w-full">
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
                          {language.flag}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900">
                            {language.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {language.native || language.accent || ''}
                          </p>
                        </div>
                      </div>
                      
                      {/* Right side: Region */}
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-brand-teal bg-brand-teal/10 rounded-full whitespace-nowrap">
                          {language.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Languages Button - Mobile Only */}
            <div className="text-center">
              <Link
                to="/languages"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-teal to-brand-blue text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Globe className="w-5 h-5 mr-2" />
                View All 52+ Languages
              </Link>
            </div>

            {/* Multi-language Option - Mobile */}
            <div className="text-center pt-6 mt-6 border-t border-gray-100">
              <div className="inline-block">
                <div
                  className={cn(
                    "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                    "w-full max-w-sm mx-auto",
                    "border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100",
                    "transition-all duration-300"
                  )}
                >
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          Multiple Languages
                        </h4>
                        <p className="text-sm text-gray-600">
                          For multilingual campaigns
                        </p>
                        <div className="mt-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full">
                            GLOBAL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW - Original Marquee */}
        <div className="hidden md:block w-11/12 mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            {/* Card Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Language Support</h3>
              <p className="text-gray-600">Scroll through our supported languages</p>
            </div>
            
            {/* Languages Grid - Inside Card */}
            <div className="space-y-16 overflow-hidden">
              <div className="relative">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">English Variants</h4>
                <div className="flex w-full flex-col overflow-hidden rounded-xl">
                  <Marquee pauseOnHover className="[--duration:40s]">
                    {englishVariants.map((language) => (
                      <LanguageCard key={`${language.name}-1`} {...language} />
                    ))}
                  </Marquee>
                </div>
              </div>

              <div className="relative">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">European Languages</h4>
                <div className="flex w-full flex-col overflow-hidden rounded-xl">
                  <Marquee pauseOnHover className="[--duration:40s]">
                    {europeanLanguages.slice(0, Math.ceil(europeanLanguages.length / 2)).map((language) => (
                      <LanguageCard key={`${language.name}-1`} {...language} />
                    ))}
                  </Marquee>
                  <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {europeanLanguages.slice(Math.ceil(europeanLanguages.length / 2)).map((language) => (
                      <LanguageCard key={`${language.name}-2`} {...language} />
                    ))}
                  </Marquee>
                </div>
              </div>

              <div className="relative">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Asian & Middle Eastern Languages</h4>
                <div className="flex w-full flex-col overflow-hidden rounded-xl">
                  <Marquee pauseOnHover className="[--duration:40s]">
                    {asianMiddleEasternLanguages.map((language) => (
                      <LanguageCard key={`${language.name}-1`} {...language} />
                    ))}
                  </Marquee>
                </div>
              </div>

              {/* Multi-language Option - Desktop */}
              <div className="text-center pt-4">
                <div className="inline-block">
                  <figure
                    className={cn(
                      "relative h-full cursor-pointer overflow-hidden rounded-xl border p-4",
                      // Responsive width - wider for Multiple Languages card
                      "w-80",
                      "border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100"
                    )}
                  >
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <figcaption className="text-lg font-bold text-gray-900 leading-tight">
                            Multiple Languages
                          </figcaption>
                          <p className="text-sm text-gray-600 truncate">
                            For multilingual campaigns
                          </p>
                          <div className="mt-2">
                            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-blue bg-brand-blue/10 rounded-full">
                              GLOBAL
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            {/* Get Started Button - Desktop Only */}
            <div className="text-center mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-teal to-brand-blue text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Globe className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}