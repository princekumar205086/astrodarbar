import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider', // Baidu
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
        crawlDelay: 3,
      },
      {
        userAgent: 'YandexBot', // Yandex
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'facebookexternalhit', // Facebook
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'Twitterbot', // Twitter
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'LinkedInBot', // LinkedIn
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'WhatsApp', // WhatsApp
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: 'TelegramBot', // Telegram
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/auth/', '/*.pdf$'],
        crawlDelay: 2,
      },
    ],
    sitemap: [
      'https://astrodarbar.in/sitemap.xml',
      'https://astrodarbar.in/blog-sitemap.xml',
      'https://astrodarbar.in/locations-sitemap.xml',
      'https://astrodarbar.in/services-sitemap.xml'
    ],
    host: 'https://astrodarbar.in',
  }
}
