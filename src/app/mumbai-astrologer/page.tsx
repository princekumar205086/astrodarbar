import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Astrologer in Mumbai | Vedic Astrology Services Mumbai | ASTRODARBAR",
  description: "Find the best astrologer in Mumbai. Expert Vedic astrology, kundli analysis, horoscope predictions, love compatibility services in Mumbai, Maharashtra. Online & offline consultation available.",
  keywords: [
    "astrologer in Mumbai", "best astrologer Mumbai", "vedic astrologer Mumbai", "Mumbai astrology services",
    "kundli analysis Mumbai", "horoscope Mumbai", "astro near Mumbai", "astrology near Mumbai",
    "jyotish Mumbai", "pandit ji Mumbai", "famous astrologer Mumbai", "astrologer in Maharashtra"
  ],
};

export default function MumbaiAstrologerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Best Astrologer in Mumbai
          </h1>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Connect with Mumbai&apos;s most trusted Vedic astrologers. Expert astrology services in Mumbai, Navi Mumbai, Thane, and all areas of Maharashtra. Get instant consultation in Hindi, Marathi, and English.
          </p>
        </div>

        {/* Mumbai Areas Covered */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Astrology Services Across Mumbai
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              "Andheri", "Bandra", "Borivali", "Dadar", "Goregaon", "Juhu",
              "Kandivali", "Malad", "Powai", "Santacruz", "Vile Parle", "Worli",
              "Colaba", "Fort", "Marine Drive", "Nariman Point", "Chembur", "Ghatkopar",
              "Kurla", "Mulund", "Vikhroli", "Airoli", "Belapur", "Vashi",
              "Panvel", "Kalyan", "Dombivli", "Thane", "Bhiwandi", "Ulhasnagar"
            ].map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30 text-center">
                <p className="text-purple-200 text-sm">Astrologer in {area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mumbai Specific Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-3">Business Astrology Mumbai</h3>
            <p className="text-purple-200 mb-4">
              Specialized business astrology for Mumbai&apos;s corporate sector, stock market guidance, and financial planning.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-white mb-3">Bollywood Career Astrology</h3>
            <p className="text-purple-200 mb-4">
              Career guidance for film industry professionals, actors, directors, and entertainment sector.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-white mb-3">Mumbai Property Vastu</h3>
            <p className="text-purple-200 mb-4">
              Vastu consultation for Mumbai real estate, apartments, offices, and commercial spaces.
            </p>
          </div>
        </div>

        {/* Local Temples & Spiritual Places */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Spiritual Remedies at Mumbai Sacred Places
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Siddhivinayak Temple</h4>
              <p className="text-purple-200 text-sm">Special puja recommendations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Haji Ali Dargah</h4>
              <p className="text-purple-200 text-sm">Spiritual healing guidance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center">
              <h4 className="text-lg font-bold text-white mb-2">Mahalakshmi Temple</h4>
              <p className="text-purple-200 text-sm">Wealth and prosperity remedies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center">
              <h4 className="text-lg font-bold text-white mb-2">ISKCON Mumbai</h4>
              <p className="text-purple-200 text-sm">Spiritual guidance programs</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-purple-200 mb-6">
            Ready to consult with Mumbai&apos;s top astrologers? Get personalized guidance for your life in the city of dreams.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Mumbai Astrologer Now
          </button>
        </div>
      </div>
    </div>
  );
}
