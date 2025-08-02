import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kundli Analysis & Birth Chart Reading | ASTRODARBAR",
  description: "Get detailed Kundli analysis and birth chart reading by expert astrologers. Understand your planetary positions, doshas, remedies, and life predictions.",
  keywords: ["kundli analysis", "birth chart reading", "janam kundli", "horoscope analysis", "astrological chart", "vedic astrology chart"],
};

export default function KundliPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kundli Analysis
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Unlock the secrets of your destiny with detailed Kundli analysis and birth chart readings
          </p>
        </div>

        {/* Kundli Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Basic Kundli */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Basic Kundli Reading</h3>
            <p className="text-purple-200 mb-4">
              Complete birth chart analysis with planetary positions and basic predictions.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Planetary positions analysis</li>
              <li>• House-wise predictions</li>
              <li>• Basic remedies</li>
              <li>• Life overview</li>
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-purple-300 font-bold">₹999</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Get Reading
              </button>
            </div>
          </div>

          {/* Detailed Kundli */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Most Popular</span>
            </div>
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-3">Detailed Kundli Analysis</h3>
            <p className="text-purple-200 mb-4">
              Comprehensive analysis including doshas, yogas, and detailed life predictions.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Complete dosha analysis</li>
              <li>• Raj yoga identification</li>
              <li>• Mahadasha predictions</li>
              <li>• Detailed remedies</li>
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-purple-300 font-bold">₹1,999</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Get Reading
              </button>
            </div>
          </div>

          {/* Premium Kundli */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Kundli Package</h3>
            <p className="text-purple-200 mb-4">
              Complete astrological consultation with personal astrologer discussion.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• 1-hour personal consultation</li>
              <li>• Written detailed report</li>
              <li>• Gemstone recommendations</li>
              <li>• Annual predictions</li>
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-purple-300 font-bold">₹4,999</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Get Reading
              </button>
            </div>
          </div>
        </div>

        {/* Kundli Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What&apos;s Included in Your Kundli Analysis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "Birth Chart", 
                description: "Visual representation of planetary positions at birth",
                icon: "🎯"
              },
              { 
                title: "Planetary Strengths", 
                description: "Analysis of each planet's power and influence",
                icon: "💪"
              },
              { 
                title: "House Analysis", 
                description: "Detailed examination of all 12 astrological houses",
                icon: "🏠"
              },
              { 
                title: "Dosha Analysis", 
                description: "Identification of Manglik, Kaal Sarp and other doshas",
                icon: "⚖️"
              },
              { 
                title: "Mahadasha", 
                description: "Major planetary periods and their influences",
                icon: "⏰"
              },
              { 
                title: "Yogas", 
                description: "Auspicious and inauspicious planetary combinations",
                icon: "🔗"
              },
              { 
                title: "Remedies", 
                description: "Personalized remedies and solutions",
                icon: "🔮"
              },
              { 
                title: "Predictions", 
                description: "Life predictions for various aspects",
                icon: "🔭"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-purple-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Doshas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Important Doshas We Analyze
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-white mb-3">Manglik Dosha</h3>
              <p className="text-purple-200 mb-4">
                Analysis of Mars position and its effects on marriage and relationships.
              </p>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Marriage compatibility check</li>
                <li>• Remedies for Manglik dosha</li>
                <li>• Timing for marriage</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-xl font-bold text-white mb-3">Kaal Sarp Dosha</h3>
              <p className="text-purple-200 mb-4">
                Identification and remedies for the challenging Kaal Sarp yoga formation.
              </p>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Complete dosha analysis</li>
                <li>• Puja and remedy suggestions</li>
                <li>• Timeline for relief</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-white mb-3">Shani Sade Sati</h3>
              <p className="text-purple-200 mb-4">
                Analysis of Saturn&apos;s 7.5-year transit and its impact on your life.
              </p>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Current phase analysis</li>
                <li>• Precautions and remedies</li>
                <li>• Beneficial periods</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Pitra Dosha</h3>
              <p className="text-purple-200 mb-4">
                Analysis of ancestral karma and its effects on current life.
              </p>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Ancestral influence check</li>
                <li>• Pitra paksha remedies</li>
                <li>• Family lineage healing</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Nazar Dosha</h3>
              <p className="text-purple-200 mb-4">
                Protection from evil eye and negative energies affecting your aura.
              </p>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Evil eye detection</li>
                <li>• Protection remedies</li>
                <li>• Aura cleansing techniques</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Grahan Dosha</h3>
              <p className="text-purple-200 mb-4">
                Analysis of eclipse effects and their impact on life events.
              </p>
              <ul className="text-purple-300 text-sm space-y-1">
                <li>• Eclipse influence analysis</li>
                <li>• Spiritual remedies</li>
                <li>• Timing considerations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Kundli Matching */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Kundli Matching for Marriage
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">8-Point Compatibility Check</h3>
                <div className="space-y-3">
                  {[
                    { point: "Varna", description: "Caste compatibility" },
                    { point: "Vashya", description: "Mutual attraction" },
                    { point: "Tara", description: "Health & longevity" },
                    { point: "Yoni", description: "Physical compatibility" },
                    { point: "Graha Maitri", description: "Mental compatibility" },
                    { point: "Gana", description: "Behavioral compatibility" },
                    { point: "Bhakoot", description: "Love & affection" },
                    { point: "Nadi", description: "Health of children" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-purple-200">{item.point}:</span>
                      <span className="text-purple-300 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <ul className="text-purple-200 space-y-2">
                  <li>• Compatibility score out of 36</li>
                  <li>• Detailed matching report</li>
                  <li>• Dosha cancellation analysis</li>
                  <li>• Marriage timing predictions</li>
                  <li>• Remedies for better compatibility</li>
                  <li>• Children predictions</li>
                </ul>
                <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Kundli Matching - ₹1,499
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Kundli */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Sample Kundli Chart
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-2 aspect-square">
              {/* Sample Kundli Grid */}
              {[
                "12", "1", "2", "3",
                "11", "", "", "4",
                "10", "", "", "5",
                "9", "8", "7", "6"
              ].map((house, index) => (
                <div 
                  key={index} 
                  className={`border border-purple-400/50 flex items-center justify-center text-purple-200 font-bold ${
                    house === "" ? "bg-purple-600/20" : "bg-white/5"
                  }`}
                >
                  {house && (
                    <div className="text-center">
                      <div className="text-lg">{house}</div>
                      {house === "1" && <div className="text-xs">As,Su</div>}
                      {house === "4" && <div className="text-xs">Mo</div>}
                      {house === "7" && <div className="text-xs">Ve,Me</div>}
                      {house === "10" && <div className="text-xs">Ma,Ju</div>}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-purple-300 text-center mt-4 text-sm">
              Sample Birth Chart (Planets: Su=Sun, Mo=Moon, Ma=Mars, Me=Mercury, Ju=Jupiter, Ve=Venus, Sa=Saturn, Ra=Rahu, Ke=Ketu, As=Ascendant)
            </p>
          </div>
        </div>

        {/* Free Kundli Form */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Get Your Free Basic Kundli
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Gender *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                    Time of Birth *
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your birth place (City, State, Country)"
                />
              </div>

              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Generate Free Kundli
              </button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <p className="text-purple-200 mb-6">
            Need detailed analysis? Book a consultation with our expert astrologers for comprehensive Kundli reading.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Detailed Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
