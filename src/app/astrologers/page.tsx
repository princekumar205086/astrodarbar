import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Astrologers | ASTRODARBAR",
  description: "Meet our team of expert astrologers with years of experience in Vedic astrology, kundli analysis, and spiritual guidance. Book consultation with certified astrologers.",
  keywords: ["expert astrologers", "vedic astrologers", "online astrologer consultation", "certified astrologers India", "best astrologers"],
};

export default function AstrologersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Expert Astrologers
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Connect with our certified astrologers who have years of experience in providing accurate predictions and spiritual guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Astrologer 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍🏫
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pandit Rajesh Sharma</h3>
              <p className="text-purple-300 text-sm">15+ Years Experience</p>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p>• Vedic Astrology Expert</p>
              <p>• Kundli Analysis Specialist</p>
              <p>• Marriage Compatibility</p>
              <p>• Career Guidance</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-300 text-sm">Rating: ⭐⭐⭐⭐⭐</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Consult Now
              </button>
            </div>
          </div>

          {/* Astrologer 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍🏫
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dr. Priya Agarwal</h3>
              <p className="text-purple-300 text-sm">12+ Years Experience</p>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p>• Numerology Expert</p>
              <p>• Palmistry Specialist</p>
              <p>• Love Relationships</p>
              <p>• Gemstone Consultation</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-300 text-sm">Rating: ⭐⭐⭐⭐⭐</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Consult Now
              </button>
            </div>
          </div>

          {/* Astrologer 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍🏫
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Acharya Suresh Kumar</h3>
              <p className="text-purple-300 text-sm">20+ Years Experience</p>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p>• Vastu Shastra Expert</p>
              <p>• Spiritual Healing</p>
              <p>• Muhurat Consultation</p>
              <p>• Remedial Astrology</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-300 text-sm">Rating: ⭐⭐⭐⭐⭐</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Consult Now
              </button>
            </div>
          </div>

          {/* Astrologer 4 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍🏫
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Guru Maa Shakti</h3>
              <p className="text-purple-300 text-sm">18+ Years Experience</p>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p>• Tarot Card Reading</p>
              <p>• Crystal Healing</p>
              <p>• Meditation Guidance</p>
              <p>• Chakra Balancing</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-300 text-sm">Rating: ⭐⭐⭐⭐⭐</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Consult Now
              </button>
            </div>
          </div>

          {/* Astrologer 5 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👨‍🏫
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pandit Amit Joshi</h3>
              <p className="text-purple-300 text-sm">14+ Years Experience</p>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p>• KP Astrology</p>
              <p>• Business Astrology</p>
              <p>• Financial Predictions</p>
              <p>• Stock Market Guidance</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-300 text-sm">Rating: ⭐⭐⭐⭐⭐</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Consult Now
              </button>
            </div>
          </div>

          {/* Astrologer 6 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👩‍🏫
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dr. Meera Singh</h3>
              <p className="text-purple-300 text-sm">16+ Years Experience</p>
            </div>
            <div className="space-y-2 text-purple-200 text-sm">
              <p>• Medical Astrology</p>
              <p>• Health Predictions</p>
              <p>• Ayurvedic Consultation</p>
              <p>• Herbal Remedies</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-purple-300 text-sm">Rating: ⭐⭐⭐⭐⭐</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Consult Now
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-purple-200 mb-6">
            Can&apos;t find the right astrologer? Let us help you choose based on your requirements.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Find My Astrologer
          </button>
        </div>
      </div>
    </div>
  );
}
