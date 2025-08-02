import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Love Compatibility & Relationship Astrology | ASTRODARBAR",
  description: "Discover your love compatibility through astrology. Get relationship guidance, marriage compatibility analysis, and love predictions from expert astrologers.",
  keywords: ["love compatibility", "relationship astrology", "marriage compatibility", "love horoscope", "zodiac compatibility", "love predictions"],
};

export default function LoveCompatibilityPage() {
  const zodiacCompatibility = [
    { sign1: "Aries", sign2: "Leo", compatibility: 95, description: "Fiery passion and mutual understanding" },
    { sign1: "Taurus", sign2: "Virgo", compatibility: 90, description: "Stable and practical relationship" },
    { sign1: "Gemini", sign2: "Libra", compatibility: 88, description: "Mental connection and harmony" },
    { sign1: "Cancer", sign2: "Pisces", compatibility: 92, description: "Deep emotional bond and intuition" },
    { sign1: "Leo", sign2: "Sagittarius", compatibility: 85, description: "Adventure and excitement together" },
    { sign1: "Virgo", sign2: "Capricorn", compatibility: 91, description: "Goal-oriented and supportive partnership" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Love Compatibility
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover your perfect match through the wisdom of astrology and find lasting love
          </p>
        </div>

        {/* Compatibility Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Free Love Compatibility Calculator
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Partner 1 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Your Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Time of Birth
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Place of Birth
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                        placeholder="City, State, Country"
                      />
                    </div>
                  </div>
                </div>

                {/* Partner 2 */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Partner&apos;s Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Partner&apos;s Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                        placeholder="Enter partner's name"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Time of Birth
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-200 text-sm font-medium mb-2">
                        Place of Birth
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                        placeholder="City, State, Country"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Calculate Compatibility
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Compatibility Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Love Score */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💖</div>
            <h3 className="text-xl font-bold text-white mb-3">Love Score Analysis</h3>
            <p className="text-purple-200 mb-4">
              Get a detailed compatibility percentage based on your birth charts and planetary positions.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Overall compatibility percentage</li>
              <li>• Love and attraction score</li>
              <li>• Emotional bonding analysis</li>
              <li>• Long-term potential</li>
            </ul>
          </div>

          {/* Relationship Timing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-white mb-3">Relationship Timing</h3>
            <p className="text-purple-200 mb-4">
              Discover the best times for love, marriage, and important relationship milestones.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Best time to meet someone</li>
              <li>• Marriage timing predictions</li>
              <li>• Favorable periods for love</li>
              <li>• Relationship challenges timing</li>
            </ul>
          </div>

          {/* Marriage Compatibility */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💍</div>
            <h3 className="text-xl font-bold text-white mb-3">Marriage Analysis</h3>
            <p className="text-purple-200 mb-4">
              Comprehensive marriage compatibility analysis including dosha matching and remedies.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Kundli matching (36 points)</li>
              <li>• Manglik dosha analysis</li>
              <li>• Family harmony predictions</li>
              <li>• Children and fertility insights</li>
            </ul>
          </div>

          {/* Communication Style */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-3">Communication Analysis</h3>
            <p className="text-purple-200 mb-4">
              Understand how you and your partner communicate and resolve conflicts.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Communication compatibility</li>
              <li>• Conflict resolution style</li>
              <li>• Emotional expression patterns</li>
              <li>• Understanding levels</li>
            </ul>
          </div>

          {/* Sexual Compatibility */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-white mb-3">Intimacy & Passion</h3>
            <p className="text-purple-200 mb-4">
              Analyze physical and emotional intimacy compatibility between partners.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Physical attraction analysis</li>
              <li>• Emotional intimacy levels</li>
              <li>• Passion and romance factors</li>
              <li>• Long-term attraction potential</li>
            </ul>
          </div>

          {/* Life Goals */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Life Goals Alignment</h3>
            <p className="text-purple-200 mb-4">
              Discover how well your life goals, ambitions, and values align with your partner.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Career ambition compatibility</li>
              <li>• Family planning alignment</li>
              <li>• Financial goals matching</li>
              <li>• Spiritual growth together</li>
            </ul>
          </div>
        </div>

        {/* Zodiac Compatibility Chart */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Best Zodiac Matches
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {zodiacCompatibility.map((match, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-white">{match.sign1} + {match.sign2}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{match.compatibility}%</div>
                    <div className="text-xs text-purple-300">Compatibility</div>
                  </div>
                </div>
                <p className="text-purple-200 text-sm">{match.description}</p>
                <div className="mt-4">
                  <div className="w-full bg-purple-900/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      style={{ width: `${match.compatibility}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Love Prediction Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Love Prediction Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Basic Love Reading</h3>
              <div className="text-3xl font-bold text-purple-300 mb-2">₹999</div>
              <ul className="text-purple-200 text-sm space-y-2 mb-6">
                <li>• Love compatibility analysis</li>
                <li>• Relationship timing</li>
                <li>• Basic remedies</li>
                <li>• Written report</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
                Book Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Complete Love Analysis</h3>
              <div className="text-3xl font-bold text-purple-300 mb-2">₹1,999</div>
              <ul className="text-purple-200 text-sm space-y-2 mb-6">
                <li>• Detailed compatibility report</li>
                <li>• Marriage timing predictions</li>
                <li>• Relationship challenges & solutions</li>
                <li>• 30-min consultation call</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
                Book Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Premium Love Package</h3>
              <div className="text-3xl font-bold text-purple-300 mb-2">₹4,999</div>
              <ul className="text-purple-200 text-sm space-y-2 mb-6">
                <li>• Complete relationship analysis</li>
                <li>• Kundli matching (if marriage)</li>
                <li>• Remedies & gemstone suggestions</li>
                <li>• 1-hour personal consultation</li>
                <li>• 6-month follow-up support</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Love Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Astrological Love Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-3xl mb-3">🌹</div>
              <h4 className="text-lg font-bold text-white mb-2">Venus Worship</h4>
              <p className="text-purple-200 text-sm">
                Worship Venus on Fridays to enhance love and attraction in your life.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-lg font-bold text-white mb-2">Love Gemstones</h4>
              <p className="text-purple-200 text-sm">
                Wear rose quartz or diamond to attract love and strengthen relationships.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-3xl mb-3">🕯️</div>
              <h4 className="text-lg font-bold text-white mb-2">Love Mantras</h4>
              <p className="text-purple-200 text-sm">
                Chant &quot;Om Shrim Hreem Shrim Kamale Kamalalaye Praseed Praseed&quot; for love.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-3xl mb-3">🌙</div>
              <h4 className="text-lg font-bold text-white mb-2">Moon Timing</h4>
              <p className="text-purple-200 text-sm">
                New moon nights are perfect for attracting new love into your life.
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Love Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  💑
                </div>
                <h4 className="text-lg font-bold text-white">Raj & Priya</h4>
                <p className="text-purple-300 text-sm">Married 2 years ago</p>
              </div>
              <p className="text-purple-200 text-sm italic text-center">
                &quot;Our compatibility analysis showed 89% match. We followed the suggested remedies and our relationship became stronger. Now we&apos;re happily married!&quot;
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  💕
                </div>
                <h4 className="text-lg font-bold text-white">Amit & Neha</h4>
                <p className="text-purple-300 text-sm">Found love in arranged marriage</p>
              </div>
              <p className="text-purple-200 text-sm italic text-center">
                &quot;Kundli matching showed perfect compatibility. We trusted the stars and now we can&apos;t imagine life without each other.&quot;
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  💖
                </div>
                <h4 className="text-lg font-bold text-white">Suresh & Kavya</h4>
                <p className="text-purple-300 text-sm">Overcame relationship issues</p>
              </div>
              <p className="text-purple-200 text-sm italic text-center">
                &quot;We were facing many problems in our relationship. The astrologer&apos;s guidance and remedies helped us understand each other better.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-purple-200 mb-6">
            Ready to find your perfect match? Get personalized love guidance from our relationship experts.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Love Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
