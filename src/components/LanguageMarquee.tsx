import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

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
            {flag}
          </div>
          
          {/* Language Name */}
          <h3 className="text-base font-bold !text-black dark:text-white flex-1" style={{ color: '#000000' }}>
            {name}
          </h3>
        </div>
        
        {/* Second Line: Native Name/Accent + Region */}
        <div className="flex items-center justify-between gap-4">
          {/* Native Name or Accent */}
          <p className="text-xs font-medium !text-black dark:text-brand-cyan" style={{ color: '#000000' }}>
            {native || accent || ''}
          </p>
          
          {/* Region */}
          <p className="text-xs !text-black dark:text-gray-400 font-medium uppercase tracking-wide ml-4" style={{ color: '#000000' }}>
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
  return (
    <section className="py-20 bg-white">
      {/* Title Section - Contained */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            We support over 35+ languages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global multilingual support across English variants, European languages,<br />
            Asian & Middle Eastern languages, and multi-language campaigns.
          </p>
        </div>
      </div>

      {/* Marquees Section - Full Width */}
      <div className="w-full">
        <EnglishVariantsMarquee />
        <EuropeanLanguagesMarquee />
        <AsianMiddleEasternMarquee />
      </div>
      
      {/* Static Multi-language Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MultiLanguageOption />
      </div>
    </section>
  );
}