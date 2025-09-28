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
  '@id': 'https://euphoricai.com/#organization',
  name: business.name,
  description: business.description,
  url: 'https://euphoricai.com',
  telephone: business.telephone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: business.address.country,
    addressRegion: business.address.region,
    addressLocality: business.address.city,
  },
  priceRange: '$$',
  image: 'https://euphoricai.com/euphoric-logo-final.png',
  logo: 'https://euphoricai.com/euphoric-logo-final.png',
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
          name: 'Starter Plan',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Plan',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise Plan',
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
    url: 'https://euphoricai.com'
  },
  category: category,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '0',
    highPrice: '999',
    offerCount: '3',
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
  image: 'https://euphoricai.com/euphoric-logo-final.png',
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
    url: 'https://euphoricai.com/demo'
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
    url: 'https://euphoricai.com'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://euphoricai.com/demo',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
});