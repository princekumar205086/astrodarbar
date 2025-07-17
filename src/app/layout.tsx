import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://astrodarbar.in'),
  title: "ASTRODARBAR | Best Online Astrology Platform in India | Expert Astrologers",
  description:
    "ASTRODARBAR - India's leading astrology platform. Get expert consultations from certified astrologers across India. Vedic astrology, horoscope predictions, kundli analysis, and spiritual guidance. Available in Hindi, English & regional languages.",
  keywords: [
    // Core Brand & Services
    "Astrodarbar",
    "Online Astrology India",
    "Best Astrologer India",
    "Vedic Astrology",
    "Horoscope Predictions",
    "Kundli Analysis",
    "Astrological Consultation",
    "Astrology Services India",
    
    // Location-based (All India)
    "Astrologer in Mumbai",
    "Astrologer in Delhi",
    "Astrologer in Bangalore",
    "Astrologer in Hyderabad",
    "Astrologer in Chennai",
    "Astrologer in Kolkata",
    "Astrologer in Pune",
    "Astrologer in Ahmedabad",
    "Astrologer in Jaipur",
    "Astrologer in Lucknow",
    "Astrologer in Purnia",
    "Astrologer in Bihar",
    
    // Service Types
    "Birth Chart Analysis",
    "Love Marriage Astrology",
    "Career Astrology",
    "Health Astrology",
    "Financial Astrology",
    "Vastu Shastra",
    "Gemstone Consultation",
    "Muhurat Timing",
    "Panchang",
    "Rashifal",
    
    // Languages & Regional
    "Astrology in Hindi",
    "Astrology in English",
    "Astrology in Bengali",
    "Astrology in Tamil",
    "Astrology in Telugu",
    "Astrology in Marathi",
    "Astrology in Gujarati",
    "Astrology in Punjabi",
    
    // Trending Keywords
    "Free Horoscope",
    "Daily Horoscope",
    "Monthly Horoscope",
    "Yearly Horoscope",
    "Kundli Matching",
    "Marriage Compatibility",
    "Manglik Dosha",
    "Shani Sade Sati",
    "Rahu Ketu Transit",
    "Numerology",
    "Palmistry",
    "Tarot Reading",
    "Spiritual Healing",
    "Astrology Remedies",
    "Mantras and Yantras",
    
    // Technology & Platform
    "Online Astrology Consultation",
    "Video Call Astrology",
    "Chat with Astrologer",
    "Astrology App India",
    "Digital Astrology Platform",
  ],
  authors: [{ name: "Astrodarbar Team", url: "https://astrodarbar.in" }],
  creator: "Astrodarbar Team",
  publisher: "Astrodarbar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "-N7EGdN2odl110-wU-YASwVu8GPWprbEqEsFvxHnGEc",
  },
  category: "Astrology",
  classification: "Astrology Services",
  openGraph: {
    title: "ASTRODARBAR | Best Online Astrology Platform in India",
    description:
      "India's leading astrology platform. Expert consultations from certified astrologers across India. Vedic astrology, horoscope predictions, kundli analysis & spiritual guidance.",
    url: "https://astrodarbar.in",
    siteName: "Astrodarbar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Astrodarbar - Best Online Astrology Platform in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRODARBAR | Best Online Astrology Platform in India",
    description:
      "India's leading astrology platform. Expert consultations from certified astrologers. Vedic astrology, horoscope predictions & spiritual guidance.",
    images: ["/og-image.png"],
    site: "@astrodarbar",
    creator: "@astrodarbar",
  },
  alternates: {
    canonical: "https://astrodarbar.in",
    languages: {
      'en-IN': 'https://astrodarbar.in',
      'hi-IN': 'https://astrodarbar.in/hi',
      'bn-IN': 'https://astrodarbar.in/bn',
      'ta-IN': 'https://astrodarbar.in/ta',
      'te-IN': 'https://astrodarbar.in/te',
    },
  },
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English, Hindi",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "all",
    "subject": "Astrology, Spiritual Services, Online Consultation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Astrodarbar",
    description: "India's leading online astrology platform providing expert consultations, Vedic astrology, horoscope predictions, and spiritual guidance.",
    url: "https://astrodarbar.in",
    logo: "https://astrodarbar.in/logo.png",
    image: "https://astrodarbar.in/og-image.png",
    telephone: "+91-9876543210",
    email: "info@astrodarbar.in",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5937",
      longitude: "78.9629"
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    serviceType: "Astrology Services",
    priceRange: "₹100-₹5000",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [
      "https://facebook.com/astrodarbar",
      "https://twitter.com/astrodarbar",
      "https://instagram.com/astrodarbar",
      "https://youtube.com/astrodarbar"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Astrology Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vedic Astrology Consultation",
            description: "Traditional Vedic astrology readings and predictions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kundli Analysis",
            description: "Detailed birth chart analysis and interpretation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Horoscope Predictions",
            description: "Daily, weekly, monthly, and yearly horoscope predictions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Love Compatibility",
            description: "Relationship compatibility analysis and guidance"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Career Guidance",
            description: "Professional career guidance based on astrological insights"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spiritual Healing",
            description: "Spiritual healing and guidance services"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "Excellent astrology consultation. Very accurate predictions and helpful guidance."
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya Sharma"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "Amazing service! The astrologer was very knowledgeable and provided great insights."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Astrodarbar" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Astrodarbar" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
