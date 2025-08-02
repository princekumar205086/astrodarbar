import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemstone Guidance & Recommendations | ASTRODARBAR",
  description: "Get expert gemstone recommendations based on your birth chart. Discover which gemstones are beneficial for your zodiac sign and planetary positions.",
  keywords: ["gemstone astrology", "birthstone recommendations", "healing gemstones", "astrological gemstones", "gemstone consultation", "precious stones astrology"],
};

export default function GemstoneGuidancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gemstone Guidance
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the power of gemstones and find the perfect stones for your astrological needs
          </p>
        </div>

        {/* Planetary Gemstones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Planetary Gemstones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { planet: "Sun ☉", gemstone: "Ruby", benefits: "Leadership, Confidence, Vitality", color: "bg-red-500" },
              { planet: "Moon ☽", gemstone: "Pearl", benefits: "Peace, Emotions, Intuition", color: "bg-gray-200" },
              { planet: "Mars ♂", gemstone: "Red Coral", benefits: "Courage, Energy, Protection", color: "bg-red-600" },
              { planet: "Mercury ☿", gemstone: "Emerald", benefits: "Intelligence, Communication", color: "bg-green-500" },
              { planet: "Jupiter ♃", gemstone: "Yellow Sapphire", benefits: "Wisdom, Prosperity, Growth", color: "bg-yellow-500" },
              { planet: "Venus ♀", gemstone: "Diamond", benefits: "Love, Beauty, Harmony", color: "bg-blue-100" },
              { planet: "Saturn ♄", gemstone: "Blue Sapphire", benefits: "Discipline, Focus, Success", color: "bg-blue-600" },
              { planet: "Rahu ☊", gemstone: "Hessonite", benefits: "Protection, Clarity", color: "bg-orange-500" },
              { planet: "Ketu ☋", gemstone: "Cat's Eye", benefits: "Spiritual Growth, Intuition", color: "bg-yellow-600" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className={`w-6 h-6 ${item.color} rounded-full mr-3`}></div>
                  <h3 className="text-lg font-bold text-white">{item.planet}</h3>
                </div>
                <h4 className="text-purple-300 font-semibold mb-2">{item.gemstone}</h4>
                <p className="text-purple-200 text-sm">{item.benefits}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zodiac Gemstones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Gemstones by Zodiac Signs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { sign: "Aries ♈", gemstone: "Diamond, Red Coral", color: "March 21 - April 19" },
              { sign: "Taurus ♉", gemstone: "Emerald, Rose Quartz", color: "April 20 - May 20" },
              { sign: "Gemini ♊", gemstone: "Emerald, Agate", color: "May 21 - June 20" },
              { sign: "Cancer ♋", gemstone: "Pearl, Moonstone", color: "June 21 - July 22" },
              { sign: "Leo ♌", gemstone: "Ruby, Peridot", color: "July 23 - August 22" },
              { sign: "Virgo ♍", gemstone: "Emerald, Sapphire", color: "August 23 - September 22" },
              { sign: "Libra ♎", gemstone: "Diamond, Opal", color: "September 23 - October 22" },
              { sign: "Scorpio ♏", gemstone: "Red Coral, Topaz", color: "October 23 - November 21" },
              { sign: "Sagittarius ♐", gemstone: "Yellow Sapphire, Turquoise", color: "November 22 - December 21" },
              { sign: "Capricorn ♑", gemstone: "Blue Sapphire, Garnet", color: "December 22 - January 19" },
              { sign: "Aquarius ♒", gemstone: "Blue Sapphire, Amethyst", color: "January 20 - February 18" },
              { sign: "Pisces ♓", gemstone: "Yellow Sapphire, Aquamarine", color: "February 19 - March 20" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <h3 className="text-lg font-bold text-white mb-2">{item.sign}</h3>
                <p className="text-purple-300 text-sm font-medium mb-1">{item.gemstone}</p>
                <p className="text-purple-400 text-xs">{item.color}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gemstone Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Health Benefits */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-white mb-3">Health Benefits</h3>
            <p className="text-purple-200 mb-4">
              Gemstones can help improve physical and mental health through their healing energies.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Improved immunity and vitality</li>
              <li>• Stress reduction and mental peace</li>
              <li>• Better sleep and energy levels</li>
              <li>• Enhanced focus and concentration</li>
            </ul>
          </div>

          {/* Career & Success */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-white mb-3">Career & Success</h3>
            <p className="text-purple-200 mb-4">
              Boost your professional life and achieve success with the right gemstones.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Enhanced leadership qualities</li>
              <li>• Better decision-making abilities</li>
              <li>• Increased confidence and charisma</li>
              <li>• Protection from negative energies</li>
            </ul>
          </div>

          {/* Love & Relationships */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💖</div>
            <h3 className="text-xl font-bold text-white mb-3">Love & Relationships</h3>
            <p className="text-purple-200 mb-4">
              Strengthen your relationships and attract love with appropriate gemstones.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Enhanced emotional harmony</li>
              <li>• Better communication in relationships</li>
              <li>• Attraction of true love</li>
              <li>• Resolution of marital conflicts</li>
            </ul>
          </div>

          {/* Wealth & Prosperity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-3">Wealth & Prosperity</h3>
            <p className="text-purple-200 mb-4">
              Attract wealth and financial abundance with prosperity-enhancing gemstones.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Increased income opportunities</li>
              <li>• Better financial decision-making</li>
              <li>• Protection from financial losses</li>
              <li>• Long-term wealth accumulation</li>
            </ul>
          </div>

          {/* Spiritual Growth */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🕉️</div>
            <h3 className="text-xl font-bold text-white mb-3">Spiritual Growth</h3>
            <p className="text-purple-200 mb-4">
              Accelerate your spiritual journey and enhance intuition with sacred gemstones.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Enhanced meditation experiences</li>
              <li>• Stronger intuitive abilities</li>
              <li>• Protection during spiritual practices</li>
              <li>• Connection with higher consciousness</li>
            </ul>
          </div>

          {/* Protection & Healing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-3">Protection & Healing</h3>
            <p className="text-purple-200 mb-4">
              Shield yourself from negative energies and promote healing with protective stones.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Protection from evil eye</li>
              <li>• Emotional healing and balance</li>
              <li>• Removal of negative influences</li>
              <li>• Enhanced aura and energy field</li>
            </ul>
          </div>
        </div>

        {/* How to Choose */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How to Choose the Right Gemstone
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                1️⃣
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Birth Chart Analysis</h4>
              <p className="text-purple-200 text-sm">
                Get your birth chart analyzed to identify weak planets
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                2️⃣
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Expert Consultation</h4>
              <p className="text-purple-200 text-sm">
                Consult with our gemstone experts for personalized recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                3️⃣
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Quality Verification</h4>
              <p className="text-purple-200 text-sm">
                Ensure authenticity and quality through certified sources
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                4️⃣
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Proper Wearing</h4>
              <p className="text-purple-200 text-sm">
                Follow proper wearing guidelines for maximum benefits
              </p>
            </div>
          </div>
        </div>

        {/* Popular Gemstones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Most Popular Gemstones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Ruby", price: "₹5,000 - ₹50,000", rating: "⭐⭐⭐⭐⭐" },
              { name: "Emerald", price: "₹3,000 - ₹30,000", rating: "⭐⭐⭐⭐⭐" },
              { name: "Blue Sapphire", price: "₹8,000 - ₹80,000", rating: "⭐⭐⭐⭐⭐" },
              { name: "Yellow Sapphire", price: "₹4,000 - ₹40,000", rating: "⭐⭐⭐⭐⭐" },
              { name: "Pearl", price: "₹1,500 - ₹15,000", rating: "⭐⭐⭐⭐⭐" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30 text-center">
                <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                <p className="text-purple-300 text-sm mb-2">{item.price}</p>
                <p className="text-purple-400 text-xs">{item.rating}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-purple-200 mb-6">
            Ready to discover your perfect gemstone? Get personalized recommendations from our experts.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Gemstone Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
