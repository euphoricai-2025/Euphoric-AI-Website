// Vercel Edge Middleware for Prerender.io integration
// Works with Vite/React SPA on Vercel

const BOT_AGENTS = [
  'googlebot',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'qwantify',
  'pinterestbot',
  'bitrix',
  'chrome-lighthouse',
  'telegrambot',
  // AI/LLM crawlers
  'gptbot',
  'chatgpt-user',
  'ccbot',
  'anthropic-ai',
  'claude-web',
  'claudebot',
  'cohere-ai',
  'perplexitybot',
  'youbot',
  'petalbot',
  'bytespider',
  'omgili',
  'omgilibot',
  'diffbot',
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some(bot => ua.includes(bot));
}

export default async function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const prerenderToken = process.env.PRERENDER_TOKEN;
  const url = new URL(request.url);

  // Skip if no Prerender token configured
  if (!prerenderToken) {
    return;
  }

  // Skip if not a bot
  if (!isBot(userAgent)) {
    return;
  }

  // Skip static files
  const pathname = url.pathname;
  if (
    pathname.startsWith('/assets') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp|mp4|webm|json|xml|txt)$/)
  ) {
    return;
  }

  try {
    // Fetch pre-rendered content from Prerender.io
    const prerenderUrl = `https://service.prerender.io/${request.url}`;

    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': prerenderToken,
        'User-Agent': userAgent,
      },
    });

    if (response.ok) {
      const html = await response.text();

      return new Response(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Prerender': 'true',
          'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        },
      });
    }
  } catch (error) {
    // Fallback to normal response if Prerender fails
    console.error('Prerender error:', error);
  }

  // Return undefined to continue to the normal response
  return;
}

export const config = {
  matcher: ['/((?!_vercel|.*\\..*).*)'],
};
