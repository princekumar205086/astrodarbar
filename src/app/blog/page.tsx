import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrology Blog | ASTRODARBAR",
  description: "Read latest astrology articles, horoscope predictions, planetary transits, and spiritual guidance from expert astrologers. Stay updated with astrological insights.",
  keywords: ["astrology blog", "horoscope articles", "astrological insights", "planetary transits", "vedic astrology articles", "spiritual guidance"],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Astrology Blog
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover insights, predictions, and spiritual wisdom from our expert astrologers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Blog Post 1 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-sm text-purple-300 mb-2">August 2, 2025</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Mercury Retrograde in August 2025: What to Expect
            </h2>
            <p className="text-purple-200 mb-4 text-sm">
              Understanding the effects of Mercury retrograde and how to navigate through this challenging period with practical remedies and precautions.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">By Pandit Rajesh Sharma</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-sm text-purple-300 mb-2">July 30, 2025</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Leo Season 2025: Embrace Your Inner Fire
            </h2>
            <p className="text-purple-200 mb-4 text-sm">
              Discover how Leo season influences all zodiac signs and learn to harness the powerful energy of the Sun for personal growth and success.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">By Dr. Priya Agarwal</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-sm text-purple-300 mb-2">July 28, 2025</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Powerful Mantras for Spiritual Protection
            </h2>
            <p className="text-purple-200 mb-4 text-sm">
              Learn ancient Sanskrit mantras that provide spiritual protection and help maintain positive energy in your daily life.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">By Acharya Suresh Kumar</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 4 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-sm text-purple-300 mb-2">July 25, 2025</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Understanding Your Birth Chart: A Beginner&apos;s Guide
            </h2>
            <p className="text-purple-200 mb-4 text-sm">
              Learn to read your birth chart and understand the significance of planetary positions in your life path and destiny.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">By Guru Maa Shakti</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 5 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-sm text-purple-300 mb-2">July 22, 2025</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Gemstones for Each Zodiac Sign: Complete Guide
            </h2>
            <p className="text-purple-200 mb-4 text-sm">
              Discover which gemstones are most beneficial for your zodiac sign and how to use them for maximum astrological benefits.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">By Pandit Amit Joshi</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 6 */}
          <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-sm text-purple-300 mb-2">July 20, 2025</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Saturn&apos;s Transit 2025: Impact on Your Career
            </h2>
            <p className="text-purple-200 mb-4 text-sm">
              Learn how Saturn&apos;s current transit affects different zodiac signs and what career changes to expect in the coming months.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">By Dr. Meera Singh</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </article>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600/50 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
              Horoscope Predictions
            </button>
            <button className="bg-purple-600/50 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
              Planetary Transits
            </button>
            <button className="bg-purple-600/50 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
              Spiritual Guidance
            </button>
            <button className="bg-purple-600/50 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
              Vedic Astrology
            </button>
            <button className="bg-purple-600/50 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
              Remedies & Mantras
            </button>
            <button className="bg-purple-600/50 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-colors">
              Love & Relationships
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-purple-200 mb-6">
            Want personalized insights? Consult with our expert astrologers for detailed guidance.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Personal Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
