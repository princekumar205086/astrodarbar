import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Astrology Services | ASTRODARBAR",
  description: "Comprehensive astrology services including Vedic astrology, horoscope predictions, kundli analysis, love compatibility, career guidance, and spiritual healing.",
  keywords: ["astrology services", "vedic astrology", "horoscope predictions", "kundli analysis", "love compatibility", "career guidance"],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Astrology Services
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover comprehensive astrology services designed to guide you through life&apos;s journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vedic Astrology */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold text-white mb-3">Vedic Astrology</h3>
            <p className="text-purple-200 mb-4">
              Traditional Vedic astrology readings based on ancient Indian scriptures and planetary positions.
            </p>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• Birth chart analysis</li>
              <li>• Planetary period predictions</li>
              <li>• Remedial measures</li>
            </ul>
          </div>

          {/* Horoscope Predictions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-white mb-3">Horoscope Predictions</h3>
            <p className="text-purple-200 mb-4">
              Daily, weekly, monthly, and yearly horoscope predictions for all zodiac signs.
            </p>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• Daily horoscope</li>
              <li>• Monthly forecasts</li>
              <li>• Yearly predictions</li>
            </ul>
          </div>

          {/* Kundli Analysis */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Kundli Analysis</h3>
            <p className="text-purple-200 mb-4">
              Detailed birth chart analysis including planetary positions, doshas, and remedies.
            </p>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• Dosha analysis</li>
              <li>• Planetary strengths</li>
              <li>• Life predictions</li>
            </ul>
          </div>

          {/* Love Compatibility */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💕</div>
            <h3 className="text-xl font-bold text-white mb-3">Love Compatibility</h3>
            <p className="text-purple-200 mb-4">
              Relationship compatibility analysis and guidance for love, marriage, and partnerships.
            </p>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• Compatibility matching</li>
              <li>• Marriage timing</li>
              <li>• Relationship guidance</li>
            </ul>
          </div>

          {/* Career Guidance */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-white mb-3">Career Guidance</h3>
            <p className="text-purple-200 mb-4">
              Professional career guidance based on your planetary positions and life path.
            </p>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• Career selection</li>
              <li>• Job timing</li>
              <li>• Business guidance</li>
            </ul>
          </div>

          {/* Spiritual Healing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🕉️</div>
            <h3 className="text-xl font-bold text-white mb-3">Spiritual Healing</h3>
            <p className="text-purple-200 mb-4">
              Spiritual healing services including meditation guidance, chakra balancing, and energy healing.
            </p>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• Chakra balancing</li>
              <li>• Meditation guidance</li>
              <li>• Energy healing</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-purple-200 mb-6">
            Ready to explore your destiny? Book a consultation with our expert astrologers.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
