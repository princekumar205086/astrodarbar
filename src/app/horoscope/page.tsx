import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Horoscope & Predictions | ASTRODARBAR",
  description: "Get accurate daily, weekly, monthly and yearly horoscope predictions for all zodiac signs. Free horoscope readings by expert astrologers.",
  keywords: ["daily horoscope", "weekly horoscope", "monthly horoscope", "zodiac predictions", "astrology forecast", "rashifal"],
};

export default function HoroscopePage() {
  const currentDate = new Date().toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const zodiacSigns = [
    { sign: "Aries", dates: "Mar 21 - Apr 19", emoji: "♈", color: "from-red-500 to-orange-500" },
    { sign: "Taurus", dates: "Apr 20 - May 20", emoji: "♉", color: "from-green-500 to-emerald-500" },
    { sign: "Gemini", dates: "May 21 - Jun 20", emoji: "♊", color: "from-yellow-500 to-amber-500" },
    { sign: "Cancer", dates: "Jun 21 - Jul 22", emoji: "♋", color: "from-blue-500 to-cyan-500" },
    { sign: "Leo", dates: "Jul 23 - Aug 22", emoji: "♌", color: "from-orange-500 to-red-500" },
    { sign: "Virgo", dates: "Aug 23 - Sep 22", emoji: "♍", color: "from-green-500 to-teal-500" },
    { sign: "Libra", dates: "Sep 23 - Oct 22", emoji: "♎", color: "from-pink-500 to-rose-500" },
    { sign: "Scorpio", dates: "Oct 23 - Nov 21", emoji: "♏", color: "from-red-500 to-purple-500" },
    { sign: "Sagittarius", dates: "Nov 22 - Dec 21", emoji: "♐", color: "from-purple-500 to-indigo-500" },
    { sign: "Capricorn", dates: "Dec 22 - Jan 19", emoji: "♑", color: "from-gray-500 to-slate-500" },
    { sign: "Aquarius", dates: "Jan 20 - Feb 18", emoji: "♒", color: "from-blue-500 to-sky-500" },
    { sign: "Pisces", dates: "Feb 19 - Mar 20", emoji: "♓", color: "from-purple-500 to-violet-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Daily Horoscope
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-4">
            Discover what the stars have in store for you today
          </p>
          <p className="text-purple-300">{currentDate}</p>
        </div>

        {/* Horoscope Period Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-purple-500/30">
            <div className="flex space-x-1">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Daily
              </button>
              <button className="text-purple-200 hover:text-white px-6 py-2 rounded-md font-medium transition-colors">
                Weekly
              </button>
              <button className="text-purple-200 hover:text-white px-6 py-2 rounded-md font-medium transition-colors">
                Monthly
              </button>
              <button className="text-purple-200 hover:text-white px-6 py-2 rounded-md font-medium transition-colors">
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Zodiac Signs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {zodiacSigns.map((zodiac, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${zodiac.color} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {zodiac.emoji}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{zodiac.sign}</h3>
                <p className="text-purple-300 text-sm mb-4">{zodiac.dates}</p>
                
                {/* Sample Horoscope Preview */}
                <div className="text-left space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Love:</span>
                    <span className="text-yellow-400">⭐⭐⭐⭐</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Career:</span>
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Health:</span>
                    <span className="text-yellow-400">⭐⭐⭐</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">Finance:</span>
                    <span className="text-yellow-400">⭐⭐⭐⭐</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-purple-600/50 hover:bg-purple-600 text-white py-2 rounded transition-colors">
                  Read Full Horoscope
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Today&apos;s Astrological Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-white mb-3">Moon Phase</h3>
              <p className="text-purple-200 mb-2">Waxing Crescent</p>
              <p className="text-purple-300 text-sm">
                Perfect time for new beginnings and setting intentions. The growing moon energy supports manifestation.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3">Lucky Signs Today</h3>
              <p className="text-purple-200 mb-2">Leo, Sagittarius, Aries</p>
              <p className="text-purple-300 text-sm">
                Fire signs are especially favored today with Jupiter&apos;s positive influence bringing opportunities.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🔢</div>
              <h3 className="text-xl font-bold text-white mb-3">Lucky Numbers</h3>
              <p className="text-purple-200 mb-2">3, 7, 12, 21, 45</p>
              <p className="text-purple-300 text-sm">
                These numbers carry positive energy today. Consider them for important decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Planetary Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Today&apos;s Planetary Positions
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { planet: "Sun ☉", position: "Leo 15°", influence: "Strong leadership energy" },
                { planet: "Moon ☽", position: "Gemini 8°", influence: "Enhanced communication" },
                { planet: "Mercury ☿", position: "Virgo 22°", influence: "Analytical thinking" },
                { planet: "Venus ♀", position: "Cancer 3°", influence: "Emotional harmony" },
                { planet: "Mars ♂", position: "Scorpio 18°", influence: "Intense passion" },
                { planet: "Jupiter ♃", position: "Taurus 27°", influence: "Material abundance" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-bold text-white mb-1">{item.planet}</h4>
                  <p className="text-purple-300 text-sm mb-1">{item.position}</p>
                  <p className="text-purple-400 text-xs">{item.influence}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horoscope Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Specialized Horoscopes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">💕</div>
              <h3 className="text-lg font-bold text-white mb-2">Love Horoscope</h3>
              <p className="text-purple-200 text-sm mb-4">
                Daily love predictions for all zodiac signs
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-bold text-white mb-2">Career Horoscope</h3>
              <p className="text-purple-200 text-sm mb-4">
                Professional guidance and career insights
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-white mb-2">Health Horoscope</h3>
              <p className="text-purple-200 text-sm mb-4">
                Health and wellness predictions
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Money Horoscope</h3>
              <p className="text-purple-200 text-sm mb-4">
                Financial predictions and money guidance
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                Read More →
              </button>
            </div>
          </div>
        </div>

        {/* Astrological Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Today&apos;s Astrological Tips
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Morning Ritual</h4>
                  <p className="text-purple-200 text-sm">
                    Start your day by facing east and expressing gratitude. The sun&apos;s energy will boost your confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Lucky Color</h4>
                  <p className="text-purple-200 text-sm">
                    Wear yellow or golden colors today to enhance Jupiter&apos;s positive influence on your life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Avoid Conflicts</h4>
                  <p className="text-purple-200 text-sm">
                    Mars is in a challenging position. Avoid arguments and maintain patience in all interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-purple-200 mb-6">
            Want a personalized horoscope reading? Consult with our expert astrologers for detailed insights.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Personal Reading
          </button>
        </div>
      </div>
    </div>
  );
}
