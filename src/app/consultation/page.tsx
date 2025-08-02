import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Astrology Consultation | ASTRODARBAR",
  description: "Book online astrology consultation with certified astrologers. Get personalized guidance on love, career, health, and spiritual growth.",
  keywords: ["astrology consultation", "online astrologer", "book consultation", "astrology session", "personal astrologer"],
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Connect with our expert astrologers for personalized guidance and insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Consultation Types */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Consultation Types</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📹</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Video Call</h3>
                    <p className="text-purple-200 text-sm">Face-to-face consultation via video call</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Voice Call</h3>
                    <p className="text-purple-200 text-sm">Audio consultation over phone</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Chat</h3>
                    <p className="text-purple-200 text-sm">Text-based consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Consultation Packages</h2>
              
              <div className="space-y-4">
                <div className="border-b border-purple-500/30 pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Basic (30 min)</h3>
                      <p className="text-purple-200 text-sm">General reading & guidance</p>
                    </div>
                    <span className="text-xl font-bold text-purple-300">₹500</span>
                  </div>
                </div>
                
                <div className="border-b border-purple-500/30 pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Standard (45 min)</h3>
                      <p className="text-purple-200 text-sm">Detailed chart analysis</p>
                    </div>
                    <span className="text-xl font-bold text-purple-300">₹750</span>
                  </div>
                </div>
                
                <div className="pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Premium (60 min)</h3>
                      <p className="text-purple-200 text-sm">Complete life analysis + remedies</p>
                    </div>
                    <span className="text-xl font-bold text-purple-300">₹1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Book Your Session</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Birth Time</label>
                  <input 
                    type="time" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Birth Place</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="City, State, Country"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Consultation Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400">
                    <option value="">Select consultation type</option>
                    <option value="video">Video Call</option>
                    <option value="voice">Voice Call</option>
                    <option value="chat">Chat</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white mb-2">Package</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400">
                    <option value="">Select package</option>
                    <option value="basic">Basic (30 min) - ₹500</option>
                    <option value="standard">Standard (45 min) - ₹750</option>
                    <option value="premium">Premium (60 min) - ₹1000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Questions/Concerns</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                  placeholder="Please describe your questions or areas of concern..."
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
