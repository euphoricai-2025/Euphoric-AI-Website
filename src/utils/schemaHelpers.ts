// Schema helpers for domain-specific pages and GEO optimization

export interface LocalBusinessSchema {
  name: string;
  description: string;
  address: {
    country: string;
    region?: string;
    city?: string;
  };
  telephone?: string;
  email?: string;
}

export const generateLocalBusinessSchema = (business: LocalBusinessSchema) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://euphoricai.io/#organization',
  name: business.name,
  description: business.description,
  url: 'https://euphoricai.io',
  telephone: business.telephone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: business.address.country,
    addressRegion: business.address.region,
    addressLocality: business.address.city,
  },
  priceRange: '$$',
  image: 'https://euphoricai.io/euphoric-logo-final.png',
  logo: 'https://euphoricai.io/euphoric-logo-final.png',
});

export const generateServiceSchema = (
  serviceName: string,
  description: string,
  provider: string = 'Euphoric AI',
  serviceType: string = 'AI Voice Agent Service'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: provider,
  },
  serviceType: serviceType,
  areaServed: {
    '@type': 'Country',
    name: ['United States', 'United Arab Emirates', 'India']
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${serviceName} Plans`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Starter',
          description: 'Includes 2,000 calling minutes per month, up to 15 concurrent calls, self-setup, Twilio number integration, basic analytics dashboard, email support, and post-call analysis.'
        },
        price: '399',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard',
          description: 'Includes 3,000 calling minutes per month (then $0.16/min thereafter), up to 25 concurrent calls, advanced analytics & reporting, and email support.'
        },
        price: '599',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Growth (Most Popular)',
          description: 'Includes 5,000 calling minutes per month (then $0.16/min thereafter), up to 50 concurrent calls, real-time analytics dashboard, priority email support, Multilingual Agent.'
        },
        price: '999',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pro',
          description: 'Includes 7,500 calling minutes per month (then $0.16/min thereafter), up to 80 concurrent calls, SIP trunk integration, guaranteed uptime (SLA), custom integrations, SOC2/HIPAA/GDPR compliance, and premium onboarding.'
        },
        price: '1499',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise',
          description: 'Tailored for high-volume, multi-country operations with flexible minute-based pricing, unlimited concurrent calls, dedicated solution architect, advanced SIP trunk and API integrations, enterprise-grade compliance, and 24/7 premium support.'
        },
        price: '1999',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1999',
          priceCurrency: 'USD',
          description: 'Starts from $1,999/month'
        }
      }
    ]
  }
});

export const generateProductSchema = (
  productName: string,
  description: string,
  category: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: productName,
  description: description,
  brand: {
    '@type': 'Brand',
    name: 'Euphoric AI'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Euphoric AI',
    url: 'https://euphoricai.io'
  },
  category: category,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '399',
    highPrice: '1999',
    offerCount: '5',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  }
});

// Industry-specific schema generators
export const generateIndustrySchema = (industry: string, description: string) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `AI Voice Agents for ${industry}`,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'Euphoric AI'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Euphoric AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://euphoricai.com/euphoric-logo-final.png'
      }
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };

  // Add industry-specific mentions for better GEO
  const industryMentions = {
    '@type': 'mentions',
    about: [
      {
        '@type': 'Thing',
        name: `${industry} automation`,
        description: `Automated solutions for ${industry}`
      },
      {
        '@type': 'Thing',
        name: 'AI voice technology',
        description: 'Advanced conversational AI for business'
      },
      {
        '@type': 'Thing',
        name: 'Euphoric AI platform',
        description: 'Leading AI voice agent platform'
      }
    ]
  };

  return { ...baseSchema, ...industryMentions };
};

// HowTo Schema for use cases
export const generateHowToSchema = (
  title: string,
  description: string,
  steps: Array<{ name: string; text: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description: description,
  image: 'https://euphoricai.io/euphoric-logo-final.png',
  totalTime: 'PT15M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0'
  },
  supply: [],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'Euphoric AI Platform'
    }
  ],
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
    position: index + 1
  }))
});

// Event Schema for webinars/demos
export const generateEventSchema = (
  eventName: string,
  description: string,
  startDate: string,
  endDate: string,
  isOnline: boolean = true
) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: eventName,
  description: description,
  startDate: startDate,
  endDate: endDate,
  eventAttendanceMode: isOnline ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: isOnline ? {
    '@type': 'VirtualLocation',
    url: 'https://euphoricai.io/demo'
  } : {
    '@type': 'Place',
    name: 'Euphoric AI Office',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  },
  organizer: {
    '@type': 'Organization',
    name: 'Euphoric AI',
    url: 'https://euphoricai.io'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://euphoricai.io/demo',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
});
