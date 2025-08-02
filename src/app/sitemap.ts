import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://astrodarbar.in'
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/consultation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/astrologers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career-guidance`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/gemstone-guidance`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/horoscope`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kundli`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/love-compatibility`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // HIGH-PRIORITY LOCAL SEO PAGES
    {
      url: `${baseUrl}/near-me`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/mumbai-astrologer`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add more city pages programmatically
    ...generateCityPages(baseUrl, currentDate),
    // Add state pages
    ...generateStatePages(baseUrl, currentDate),
    // Add service-specific near me pages
    ...generateServiceNearMePages(baseUrl, currentDate),
  ]
}

function generateCityPages(baseUrl: string, currentDate: string) {
  const majorCities = [
    'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad',
    'jaipur', 'lucknow', 'surat', 'kanpur', 'nagpur', 'indore', 'thane', 'bhopal',
    'visakhapatnam', 'patna', 'vadodara', 'ghaziabad', 'ludhiana', 'agra', 'nashik',
    'faridabad', 'meerut', 'rajkot', 'varanasi', 'srinagar', 'aurangabad', 'dhanbad',
    'amritsar', 'navi-mumbai', 'allahabad', 'ranchi', 'howrah', 'coimbatore', 'jabalpur'
  ];

  return majorCities.map(city => ({
    url: `${baseUrl}/${city}-astrologer`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));
}

function generateStatePages(baseUrl: string, currentDate: string) {
  const states = [
    'maharashtra', 'uttar-pradesh', 'karnataka', 'tamil-nadu', 'gujarat', 'rajasthan',
    'west-bengal', 'andhra-pradesh', 'telangana', 'kerala', 'punjab', 'haryana',
    'bihar', 'madhya-pradesh', 'odisha', 'jharkhand', 'assam', 'chhattisgarh'
  ];

  return states.map(state => ({
    url: `${baseUrl}/${state}-astrologer`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
}

function generateServiceNearMePages(baseUrl: string, currentDate: string) {
  const services = [
    'kundli-analysis-near-me', 'marriage-astrology-near-me', 'love-compatibility-near-me',
    'career-guidance-near-me', 'gemstone-consultation-near-me', 'vastu-consultant-near-me',
    'spiritual-healing-near-me', 'numerology-near-me', 'palmistry-near-me'
  ];

  return services.map(service => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));
}
