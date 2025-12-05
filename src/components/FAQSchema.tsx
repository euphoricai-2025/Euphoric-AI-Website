import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageTitle?: string;
  pageDescription?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({
  faqs,
  pageTitle,
  pageDescription
}) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  // Additional Q&A schema for better AI understanding
  const qaSchema = {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      text: pageTitle || faqs[0]?.question,
      answerCount: faqs.length,
      acceptedAnswer: faqs.map(faq => ({
        '@type': 'Answer',
        text: faq.answer,
        author: {
          '@type': 'Organization',
          name: 'Euphoric AI'
        }
      }))
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {pageTitle && (
        <script type="application/ld+json">
          {JSON.stringify(qaSchema)}
        </script>
      )}
    </Helmet>
  );
};

// Common FAQs for AI Voice Agents (for GEO optimization)
export const commonFAQs: FAQItem[] = [
  {
    question: "What are AI voice agents?",
    answer: "AI voice agents are intelligent software systems that use natural language processing and machine learning to conduct human-like phone conversations. Euphoric AI's voice agents can handle customer support, lead qualification, appointment booking, and various business communications automatically."
  },
  {
    question: "How does Euphoric AI compare to other AI voice agent platforms?",
    answer: "Euphoric AI stands out with its advanced conversational capabilities, multi-language support, seamless CRM integrations, and industry-specific customization. Our platform offers superior voice quality, lower latency, and more natural conversations compared to traditional IVR systems."
  },
  {
    question: "What industries can benefit from Euphoric AI voice agents?",
    answer: "Euphoric AI serves multiple industries including real estate, healthcare, e-commerce, financial services, insurance, logistics, retail, and travel/hospitality. Our AI voice agents are customized for each industry's specific needs and compliance requirements."
  },
  {
    question: "What is the pricing model for Euphoric AI?",
    answer: "Euphoric AI offers five flexible plans: Trial ($99/month with 500 minutes), Starter ($349/month with 2,000 minutes), Standard ($549/month with 3,000 minutes), Growth ($849/month with 5,000 minutes - Most Popular), Pro ($1,249/month with 7,500 minutes), and Enterprise (starts from $1,999/month with flexible pricing). Overages are billed at $0.16/min. All plans are monthly with no long-term contracts required."
  },
  {
    question: "How quickly can I deploy Euphoric AI voice agents?",
    answer: "Euphoric AI voice agents can be deployed within 24-48 hours for standard use cases. Our platform provides pre-built templates and easy integration options with popular CRMs and phone systems like Twilio, Telnyx, and Airtel."
  },
  {
    question: "Does Euphoric AI support multiple languages?",
    answer: "Yes, Euphoric AI supports over 30 languages with native-level fluency. Our AI voice agents can seamlessly switch between languages during conversations and handle regional accents and dialects."
  },
  {
    question: "What integrations does Euphoric AI offer?",
    answer: "Euphoric AI integrates with popular platforms including Cal.com, Make, n8n, GoHighLevel, custom LLMs, and major telephony providers like Twilio, Telnyx, and Airtel. We also offer API access for custom integrations."
  },
  {
    question: "How does Euphoric AI ensure data security and compliance?",
    answer: "Euphoric AI is SOC 2 Type II compliant and follows GDPR, HIPAA, and other industry-specific regulations. We use end-to-end encryption, secure data storage, and regular security audits to protect customer data."
  },
  {
    question: "Can Euphoric AI voice agents handle complex conversations?",
    answer: "Yes, Euphoric AI uses advanced LLMs and contextual understanding to handle complex, multi-turn conversations. Our agents can remember context, handle interruptions, and provide intelligent responses based on the conversation flow."
  },
  {
    question: "What is concurrency in AI voice agents?",
    answer: "Concurrency refers to the ability to handle multiple simultaneous calls. Euphoric AI offers unlimited concurrency, meaning your AI agents can handle thousands of calls at the same time without any performance degradation."
  }
];

export default FAQSchema;