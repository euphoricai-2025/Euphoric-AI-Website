import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define all routes with their metadata
const routes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.9, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/faq', priority: 0.8, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/partner', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations', priority: 0.75, changefreq: 'weekly' },
  { path: '/automations', priority: 0.75, changefreq: 'weekly' },
  { path: '/privacy-policy', priority: 0.5, changefreq: 'monthly' },
  { path: '/terms-conditions', priority: 0.5, changefreq: 'monthly' },

  // Domain pages
  { path: '/domains/real-estate', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/healthcare', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/ecommerce', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/customer-support', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/debt-collection', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/financial-services', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/home-services', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/insurance', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/logistics', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/retail-consumer', priority: 0.85, changefreq: 'weekly' },
  { path: '/domains/travel-hospitality', priority: 0.85, changefreq: 'weekly' },

  // Use cases
  { path: '/use-cases/lead-qualification', priority: 0.8, changefreq: 'weekly' },
  { path: '/use-cases/appointment-booking', priority: 0.8, changefreq: 'weekly' },
  { path: '/use-cases/customer-support-agent', priority: 0.8, changefreq: 'weekly' },

  // Integrations
  { path: '/integrations/cal-com', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/custom-llm', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/make', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/twilio', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/telnyx', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/airtel', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/n8n', priority: 0.7, changefreq: 'monthly' },
  { path: '/integrations/go-high-level', priority: 0.7, changefreq: 'monthly' },

  // Automations
  { path: '/automations/lead-management-nurturing', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/billing-collections', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/recruitment-hr-workflows', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/marketing-social-media', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/crm-data-sync', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/analytics-reporting', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/contracts-workflow', priority: 0.7, changefreq: 'monthly' },
  { path: '/automations/ecommerce-retention', priority: 0.7, changefreq: 'monthly' },
];

const baseUrl = 'https://euphoricai.com';
const currentDate = new Date().toISOString().split('T')[0];

// Generate XML sitemap
const generateSitemap = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  const urlsetClose = '</urlset>';

  const urls = routes.map(route => {
    return `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `${xmlHeader}
${urlsetOpen}
${urls}
${urlsetClose}`;

  // Write sitemap to public directory
  const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
};

// Generate sitemap index for multiple sitemaps (for future use)
const generateSitemapIndex = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const sitemapIndex = `${xmlHeader}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  const publicPath = path.resolve(__dirname, '../public/sitemap-index.xml');
  fs.writeFileSync(publicPath, sitemapIndex);
  console.log('✅ Sitemap index generated at public/sitemap-index.xml');
};

// Run the generation
generateSitemap();
generateSitemapIndex();

console.log(`📅 Generated on ${currentDate}`);
console.log(`📍 Total URLs: ${routes.length}`);