#!/usr/bin/env node

import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import chalk from 'chalk';

const testUrl = process.argv[2] || 'http://localhost:5173';

console.log(chalk.blue.bold('\n🔍 SEO Implementation Test\n'));
console.log(chalk.gray(`Testing: ${testUrl}\n`));

async function testSEO() {
  try {
    // Test main page
    const response = await fetch(testUrl);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check meta tags
    console.log(chalk.yellow.bold('📋 Meta Tags:'));
    const title = document.querySelector('title');
    console.log(title ? chalk.green('✓ Title found:') + ` ${title.textContent}` : chalk.red('✗ Title missing'));

    const metaDesc = document.querySelector('meta[name="description"]');
    console.log(metaDesc ? chalk.green('✓ Description found') : chalk.red('✗ Description missing'));

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    console.log(metaKeywords ? chalk.green('✓ Keywords found') : chalk.red('✗ Keywords missing'));

    const canonical = document.querySelector('link[rel="canonical"]');
    console.log(canonical ? chalk.green('✓ Canonical URL found') : chalk.red('✗ Canonical missing'));

    // Check Open Graph
    console.log(chalk.yellow.bold('\n📱 Social Media Tags:'));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    console.log(ogTitle ? chalk.green('✓ OG Title found') : chalk.red('✗ OG Title missing'));

    const ogImage = document.querySelector('meta[property="og:image"]');
    console.log(ogImage ? chalk.green('✓ OG Image found') : chalk.red('✗ OG Image missing'));

    const twitterCard = document.querySelector('meta[property="twitter:card"]');
    console.log(twitterCard ? chalk.green('✓ Twitter Card found') : chalk.red('✗ Twitter Card missing'));

    // Check Schema
    console.log(chalk.yellow.bold('\n🏗️  Structured Data:'));
    const schemas = document.querySelectorAll('script[type="application/ld+json"]');
    if (schemas.length > 0) {
      console.log(chalk.green(`✓ ${schemas.length} Schema blocks found`));
      schemas.forEach((schema, i) => {
        try {
          const data = JSON.parse(schema.textContent);
          console.log(chalk.gray(`  - ${data['@type'] || 'Unknown type'}`));
        } catch (e) {
          console.log(chalk.red(`  - Invalid JSON in schema ${i + 1}`));
        }
      });
    } else {
      console.log(chalk.red('✗ No structured data found'));
    }

    // Check AI meta tags
    console.log(chalk.yellow.bold('\n🤖 AI/GEO Tags:'));
    const aiDesc = document.querySelector('meta[name="ai-description"]');
    console.log(aiDesc ? chalk.green('✓ AI Description found') : chalk.red('✗ AI Description missing'));

    const aiCompany = document.querySelector('meta[name="ai-company"]');
    console.log(aiCompany ? chalk.green('✓ AI Company found') : chalk.red('✗ AI Company missing'));

    // Check geo tags
    console.log(chalk.yellow.bold('\n🌍 Geographic Tags:'));
    const geoRegion = document.querySelector('meta[name="geo.region"]');
    console.log(geoRegion ? chalk.green('✓ Geo Region found') : chalk.red('✗ Geo Region missing'));

    // Test robots.txt
    console.log(chalk.yellow.bold('\n📄 Additional Files:'));
    const robotsResponse = await fetch(`${testUrl}/robots.txt`);
    console.log(robotsResponse.ok ? chalk.green('✓ robots.txt accessible') : chalk.red('✗ robots.txt not found'));

    // Test sitemap
    const sitemapResponse = await fetch(`${testUrl}/sitemap.xml`);
    console.log(sitemapResponse.ok ? chalk.green('✓ sitemap.xml accessible') : chalk.red('✗ sitemap.xml not found'));

    console.log(chalk.green.bold('\n✅ SEO Test Complete!\n'));

  } catch (error) {
    console.error(chalk.red('Error testing SEO:'), error.message);
    console.log(chalk.yellow('\nMake sure the dev server is running: npm run dev'));
  }
}

testSEO();