import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrologer Near Me | Best Astrology Services Near You | ASTRODARBAR",
  description: "Find the best astrologer near you with ASTRODARBAR. Expert astrology services available in your city across India. Vedic astrology, kundli analysis, horoscope predictions near me.",
  keywords: [
    "astrologer near me", "astro near me", "astrology near me", "best astrologer near me",
    "vedic astrologer near me", "famous astrologer near me", "online astrologer near me",
    "kundli expert near me", "horoscope reader near me", "jyotish near me", "pandit ji near me"
  ],
};

export default function AstrologerNearMePage() {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh", "Puducherry"
  ];

  const majorCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
    "Jaipur", "Lucknow", "Surat", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Chandigarh", "Gurgaon", "Noida"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Expert Astrologer Near You
          </h1>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Looking for &quot;astrologer near me&quot;? ASTRODARBAR provides expert astrology services across all Indian cities and states. Get instant consultation from certified Vedic astrologers in your location.
          </p>
        </div>

        {/* Location Search */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Enter Your Location
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your city, state or pincode..."
                className="w-full px-6 py-4 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 text-lg"
              />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors">
                Find Astrologers Near Me
              </button>
            </div>
            <p className="text-purple-300 text-center mt-4 text-sm">
              Or use GPS to automatically detect your location
            </p>
          </div>
        </div>

        {/* Why Choose Us for Local Astrology */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose ASTRODARBAR for Local Astrology Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Pan-India Coverage</h3>
              <p className="text-purple-200 text-sm">
                Available in all 28 states, 8 union territories, and 4000+ cities across India
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Connect</h3>
              <p className="text-purple-200 text-sm">
                Connect with expert astrologers in your city within 2 minutes
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-lg font-bold text-white mb-2">Local Language</h3>
              <p className="text-purple-200 text-sm">
                Consultations in Hindi, English, and 10+ regional languages
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Local Pricing</h3>
              <p className="text-purple-200 text-sm">
                Affordable pricing adapted to local economic conditions
              </p>
            </div>
          </div>
        </div>

        {/* Services Available Near You */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Astrology Services Available Near You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { service: "Vedic Astrology Near Me", icon: "🔮", desc: "Traditional Vedic astrology consultation in your local area" },
              { service: "Kundli Analysis Near Me", icon: "📊", desc: "Detailed birth chart analysis by local astrology experts" },
              { service: "Love Compatibility Near Me", icon: "💕", desc: "Relationship matching and compatibility analysis locally" },
              { service: "Career Guidance Near Me", icon: "💼", desc: "Professional career astrology consultation in your city" },
              { service: "Marriage Astrology Near Me", icon: "💍", desc: "Marriage timing and compatibility analysis nearby" },
              { service: "Gemstone Consultation Near Me", icon: "💎", desc: "Personalized gemstone recommendations in your area" },
              { service: "Vastu Shastra Near Me", icon: "🏠", desc: "Vastu consultation for homes and offices locally" },
              { service: "Spiritual Healing Near Me", icon: "🕉️", desc: "Spiritual guidance and healing services in your vicinity" },
              { service: "Numerology Near Me", icon: "🔢", desc: "Numerology consultation and name analysis locally" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.service}</h3>
                <p className="text-purple-200 text-sm mb-4">{item.desc}</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                  Find Near Me →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available in Major Cities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Expert Astrologers Available in Major Cities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {majorCities.slice(0, 48).map((city, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 text-center">
                <p className="text-purple-200 text-sm font-medium">Astrologer in {city}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              View All Cities →
            </button>
          </div>
        </div>

        {/* Available in All States */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Astrology Services Available in All Indian States
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {indianStates.map((state, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 text-center">
                <p className="text-purple-200 text-sm font-medium">Astrologer in {state}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How to Find Astrologer Near You
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Enter Location</h3>
              <p className="text-purple-200 text-sm">
                Enter your city, state, or pincode to find astrologers near you
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Choose Astrologer</h3>
              <p className="text-purple-200 text-sm">
                Browse and select from verified astrologers in your local area
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Book Consultation</h3>
              <p className="text-purple-200 text-sm">
                Schedule instant or future consultation via call, chat, or video
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Guidance</h3>
              <p className="text-purple-200 text-sm">
                Receive personalized astrological guidance and solutions
              </p>
            </div>
          </div>
        </div>

        {/* Local Astrology Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Benefits of Local Astrology Consultation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Local Cultural Understanding</h3>
              <p className="text-purple-200 text-sm">
                Astrologers who understand your local culture, traditions, and family values for more relevant guidance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-3">Same Time Zone</h3>
              <p className="text-purple-200 text-sm">
                Convenient consultation timing as astrologers are in your time zone for better scheduling.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-white mb-3">Regional Language Support</h3>
              <p className="text-purple-200 text-sm">
                Consultation in your native language for better understanding and communication.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Local Remedies</h3>
              <p className="text-purple-200 text-sm">
                Remedies and solutions that are practically implementable in your local environment.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Connection</h3>
              <p className="text-purple-200 text-sm">
                Build long-term relationships with astrologers who understand your local context.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Local Pricing</h3>
              <p className="text-purple-200 text-sm">
                Affordable consultation fees adapted to your local economic conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Searched Near Me Queries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Popular &quot;Near Me&quot; Searches
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Astrology Services Near Me</h3>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li>• Best astrologer near me</li>
                  <li>• Vedic astrologer near me</li>
                  <li>• Famous astrologer near me</li>
                  <li>• Kundli expert near me</li>
                  <li>• Horoscope reader near me</li>
                  <li>• Jyotish near me</li>
                  <li>• Pandit ji near me</li>
                  <li>• Palm reader near me</li>
                  <li>• Numerologist near me</li>
                  <li>• Vastu expert near me</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Specialized Services Near Me</h3>
                <ul className="space-y-2 text-purple-200 text-sm">
                  <li>• Marriage astrologer near me</li>
                  <li>• Love problem solution near me</li>
                  <li>• Career astrologer near me</li>
                  <li>• Gemstone consultant near me</li>
                  <li>• Spiritual healer near me</li>
                  <li>• Manglik dosha solution near me</li>
                  <li>• Kaal sarp dosha expert near me</li>
                  <li>• Business astrologer near me</li>
                  <li>• Health astrologer near me</li>
                  <li>• Online astrologer near me</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Connect with Expert Astrologers Near You?
          </h2>
          <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who have found their perfect astrologer through ASTRODARBAR. 
            Get instant access to verified astrologers in your city.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Find Astrologer Near Me
            </button>
            <button className="border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Call Now: +91-9876543210
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
