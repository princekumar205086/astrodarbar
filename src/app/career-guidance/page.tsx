import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guidance & Astrology | ASTRODARBAR",
  description: "Get expert career guidance based on your birth chart. Professional astrology consultation for career selection, job timing, business guidance, and success predictions.",
  keywords: ["career astrology", "job astrology", "business astrology", "career guidance", "professional success astrology", "job timing predictions"],
};

export default function CareerGuidancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Career Guidance Through Astrology
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover your professional path with astrological insights and expert guidance for career success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Career Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Career Selection</h3>
            <p className="text-purple-200 mb-4">
              Identify the most suitable career path based on your planetary positions and natural talents.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Birth chart analysis for career</li>
              <li>• Planetary strength assessment</li>
              <li>• Suitable field identification</li>
              <li>• Natural talent discovery</li>
            </ul>
          </div>

          {/* Job Timing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-white mb-3">Job Timing Predictions</h3>
            <p className="text-purple-200 mb-4">
              Get accurate predictions about the best time to apply for jobs or make career changes.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Favorable periods for job search</li>
              <li>• Interview success timing</li>
              <li>• Promotion predictions</li>
              <li>• Salary increment timing</li>
            </ul>
          </div>

          {/* Business Astrology */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-3">Business Guidance</h3>
            <p className="text-purple-200 mb-4">
              Start and grow your business with astrological insights for maximum success potential.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Business launch timing</li>
              <li>• Partnership compatibility</li>
              <li>• Investment predictions</li>
              <li>• Growth opportunities</li>
            </ul>
          </div>

          {/* Professional Growth */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-3">Professional Growth</h3>
            <p className="text-purple-200 mb-4">
              Accelerate your career growth with strategic astrological guidance and timing.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Skill development guidance</li>
              <li>• Leadership potential analysis</li>
              <li>• Career milestone timing</li>
              <li>• Success strategies</li>
            </ul>
          </div>

          {/* Financial Success */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-3">Financial Success</h3>
            <p className="text-purple-200 mb-4">
              Understand your wealth potential and the best ways to achieve financial prosperity.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Wealth accumulation potential</li>
              <li>• Investment timing</li>
              <li>• Income source analysis</li>
              <li>• Financial stability periods</li>
            </ul>
          </div>

          {/* Career Remedies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold text-white mb-3">Career Remedies</h3>
            <p className="text-purple-200 mb-4">
              Overcome career obstacles with powerful astrological remedies and mantras.
            </p>
            <ul className="text-purple-300 text-sm space-y-2">
              <li>• Gemstone recommendations</li>
              <li>• Career mantras</li>
              <li>• Puja and rituals</li>
              <li>• Lucky directions</li>
            </ul>
          </div>
        </div>

        {/* Career by Zodiac Signs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Career Guidance by Zodiac Signs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { sign: "Aries ♈", career: "Leadership, Military, Sports, Entrepreneurship" },
              { sign: "Taurus ♉", career: "Finance, Banking, Agriculture, Arts" },
              { sign: "Gemini ♊", career: "Communication, Media, Teaching, Writing" },
              { sign: "Cancer ♋", career: "Healthcare, Hospitality, Real Estate" },
              { sign: "Leo ♌", career: "Entertainment, Politics, Management" },
              { sign: "Virgo ♍", career: "Healthcare, Research, Analysis, Service" },
              { sign: "Libra ♎", career: "Law, Diplomacy, Fashion, Arts" },
              { sign: "Scorpio ♏", career: "Investigation, Research, Psychology" },
              { sign: "Sagittarius ♐", career: "Travel, Education, Publishing" },
              { sign: "Capricorn ♑", career: "Government, Architecture, Mining" },
              { sign: "Aquarius ♒", career: "Technology, Innovation, Social Work" },
              { sign: "Pisces ♓", career: "Arts, Spirituality, Healthcare" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <h4 className="text-lg font-bold text-white mb-2">{item.sign}</h4>
                <p className="text-purple-200 text-sm">{item.career}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Career Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <h4 className="text-lg font-bold text-white">Raj Kumar</h4>
                <p className="text-purple-300 text-sm">Software Engineer → CEO</p>
              </div>
              <p className="text-purple-200 text-sm italic">
                &quot;Astrodarbar helped me time my career transition perfectly. I started my own tech company during my favorable Jupiter period and now it&apos;s valued at 50 crores!&quot;
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👩‍⚕️
                </div>
                <h4 className="text-lg font-bold text-white">Dr. Priya Singh</h4>
                <p className="text-purple-300 text-sm">Medical Student → Top Surgeon</p>
              </div>
              <p className="text-purple-200 text-sm italic">
                &quot;The career guidance helped me choose the right specialization. I&apos;m now one of the youngest successful cardiac surgeons in the country.&quot;
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👨‍🎨
                </div>
                <h4 className="text-lg font-bold text-white">Amit Sharma</h4>
                <p className="text-purple-300 text-sm">Bank Job → Successful Artist</p>
              </div>
              <p className="text-purple-200 text-sm italic">
                &quot;Left my banking job to pursue art after the consultation. Now my paintings are exhibited in galleries worldwide. Best decision ever!&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-purple-200 mb-6">
            Ready to unlock your career potential? Get personalized career guidance from our expert astrologers.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Career Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
