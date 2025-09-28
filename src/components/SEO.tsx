import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  article?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schemaMarkup?: any;
  noindex?: boolean;
  hreflang?: Array<{
    lang: string;
    url: string;
  }>;
  geo?: {
    region?: string;
    placename?: string;
    position?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = 'Euphoric AI - AI Voice Agents for Business Automation',
  description = 'Transform your business with Euphoric AI\'s intelligent voice agents. Automate customer support, lead qualification, appointment booking, and more with cutting-edge AI technology.',
  keywords = 'AI voice agents, AI call automation, voice AI platform, business automation, AI customer support, lead qualification AI, appointment booking AI, conversational AI, voice bots, AI SDR, agentic AI, voice agent concurrency',
  canonicalUrl,
  ogImage = '/euphoric-logo-final.png',
  article = false,
  author = 'Euphoric AI',
  publishedTime,
  modifiedTime,
  schemaMarkup,
  noindex = false,
  hreflang = [],
  geo,
}) => {
  const siteUrl = 'https://euphoricai.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : typeof window !== 'undefined' ? window.location.href : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Default Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Euphoric AI',
    url: 'https://euphoricai.com',
    logo: 'https://euphoricai.com/euphoric-logo-final.png',
    description: 'Euphoric AI is a leading AI Voice Agent platform that automates business communications through intelligent conversational AI.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Imran',
        jobTitle: 'Founder & CEO'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'United States'
    },
    sameAs: [
      'https://www.linkedin.com/company/euphoric-ai',
      'https://twitter.com/euphoric_ai',
      'https://github.com/euphoric-ai'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@euphoricai.com',
      availableLanguage: ['English']
    }
  };

  // WebSite Schema with SearchAction for better search visibility
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Euphoric AI',
    url: 'https://euphoricai.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://euphoricai.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // SoftwareApplication Schema for the AI platform
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Euphoric AI Voice Agent Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    creator: {
      '@type': 'Organization',
      name: 'Euphoric AI'
    }
  };

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    websiteSchema,
    softwareSchema,
    ...(schemaMarkup ? [schemaMarkup] : [])
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Euphoric AI" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:site" content="@euphoric_ai" />
      <meta property="twitter:creator" content="@euphoric_ai" />

      {/* Geographic Meta Tags */}
      {geo && (
        <>
          {geo.region && <meta name="geo.region" content={geo.region} />}
          {geo.placename && <meta name="geo.placename" content={geo.placename} />}
          {geo.position && <meta name="geo.position" content={geo.position} />}
          <meta name="ICBM" content={geo.position || '37.7749,-122.4194'} />
        </>
      )}

      {/* Language/Region Alternates */}
      {hreflang.map((alternate, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={alternate.lang}
          href={alternate.url}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* AI-Friendly Meta Tags for GEO */}
      <meta name="ai-description" content={`Euphoric AI is a U.S.-based AI Voice Agent platform that ${description}`} />
      <meta name="ai-keywords" content="Euphoric AI, AI voice agents, voice automation platform, business AI solutions" />
      <meta name="ai-company" content="Euphoric AI - Leading AI Voice Agent Platform" />
      <meta name="ai-features" content="Lead qualification, appointment booking, customer support automation, multi-language support, CRM integration" />
      <meta name="ai-industries" content="Real estate, healthcare, e-commerce, financial services, insurance, logistics" />

      {/* Structured Data / Schema Markup */}
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

export default SEO;