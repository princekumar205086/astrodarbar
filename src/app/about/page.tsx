import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ASTRODARBAR - Leading Astrology Platform",
  description: "Learn about ASTRODARBAR, India's leading online astrology platform. Our mission, expert astrologers, and commitment to providing authentic Vedic astrology services.",
  keywords: ["about astrodarbar", "astrology platform", "vedic astrology experts", "online astrology", "certified astrologers"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About ASTRODARBAR
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            India&apos;s Leading Online Astrology Platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-purple-200 max-w-4xl mx-auto leading-relaxed">
                At ASTRODARBAR, we are dedicated to making authentic Vedic astrology accessible to everyone. 
                Our mission is to provide accurate, insightful, and transformative astrological guidance that 
                helps people understand their life&apos;s journey, make informed decisions, and find their path 
                to happiness and success.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-purple-200 mb-4">
                Founded with the vision of bridging ancient wisdom with modern technology, ASTRODARBAR was 
                born from the belief that everyone deserves access to authentic astrological guidance.
              </p>
              <p className="text-purple-200 mb-4">
                Our platform brings together certified astrologers from across India, each with years of 
                experience in Vedic astrology, to provide personalized consultations and insights.
              </p>
              <p className="text-purple-200">
                We have successfully guided over 1,250 individuals on their life journeys, maintaining 
                a 4.8-star rating through our commitment to accuracy and genuine care for our clients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-purple-400 text-xl">✨</div>
                  <div>
                    <h3 className="text-white font-semibold">Certified Astrologers</h3>
                    <p className="text-purple-200 text-sm">All our astrologers are certified and have years of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-purple-400 text-xl">🌍</div>
                  <div>
                    <h3 className="text-white font-semibold">Pan-India Coverage</h3>
                    <p className="text-purple-200 text-sm">Serving clients across all states and major cities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-purple-400 text-xl">🗣️</div>
                  <div>
                    <h3 className="text-white font-semibold">Multiple Languages</h3>
                    <p className="text-purple-200 text-sm">Consultations in Hindi, English, and regional languages</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-purple-400 text-xl">⏰</div>
                  <div>
                    <h3 className="text-white font-semibold">24/7 Availability</h3>
                    <p className="text-purple-200 text-sm">Round-the-clock support and consultation booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Accuracy</h3>
                <p className="text-purple-200">
                  We are committed to providing the most accurate readings based on authentic Vedic principles.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-white mb-3">Compassion</h3>
                <p className="text-purple-200">
                  Every consultation is delivered with empathy, understanding, and genuine care for your well-being.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Privacy</h3>
                <p className="text-purple-200">
                  Your personal information and consultation details are kept strictly confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-300 mb-2">1,250+</div>
                <div className="text-purple-200">Happy Clients</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-purple-300 mb-2">4.8★</div>
                <div className="text-purple-200">Average Rating</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
                <div className="text-purple-200">Expert Astrologers</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-purple-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
