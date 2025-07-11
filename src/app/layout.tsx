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
  title: "ASTRODARBAR | Astrologer in Purnia, Bihar, India",
  description:
    "Astrodarbar is a platform for sharing and exploring astrological insights in Purnia, Bihar, India. Connect with astrologers, share your experiences, and discover the cosmic connections that shape our lives.",
  keywords: [
    "Astrodarbar",
    "Astrology",
    "Astrologer",
    "Purnia",
    "Bihar",
    "India",
    "Horoscope",
    "Kundli",
    "Vedic Astrology",
    "Astrological Consultation",
    "Online Astrology",
    "Astrology Services",
    "Astrology Platform",
    "Astrology Community",
    "Best Astrologer in Purnia",
    "Astrology Predictions",
    "Astrology Blog",
    "Astrology Events",
    "Astrology Remedies",
    "Astrology Tips",
    "Astrology Experience",
    "Cosmic Connections",
    "Indian Astrology",
    "Astrology Forum",
    "Astrology Advice",
  ],
  authors: [{ name: "Astrodarbar Team", url: "https://astrodarbar.com" }],
  creator: "Astrodarbar Team",
  publisher: "Astrodarbar",
  openGraph: {
    title: "ASTRODARBAR | Astrologer in Purnia, Bihar, India",
    description:
      "Connect with expert astrologers in Purnia, Bihar, India. Explore astrological insights, share experiences, and discover cosmic connections.",
    url: "https://astrodarbar.com",
    siteName: "Astrodarbar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Astrodarbar - Astrologer in Purnia, Bihar, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRODARBAR | Astrologer in Purnia, Bihar, India",
    description:
      "Astrodarbar is your destination for astrology insights in Purnia, Bihar, India. Connect, share, and discover cosmic connections.",
    images: ["/og-image.png"],
    site: "@astrodarbar",
    creator: "@astrodarbar",
  },
  other: {
    "google-site-verification": "-N7EGdN2odl110-wU-YASwVu8GPWprbEqEsFvxHnGEc",
    "geo.region": "IN-BR",
    "geo.placename": "Purnia",
    "geo.position": "25.7781;87.4753",
    "ICBM": "25.7781, 87.4753",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
