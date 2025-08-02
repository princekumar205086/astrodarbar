import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ASTRODARBAR",
  description: "Get in touch with ASTRODARBAR for astrology consultations, support, or inquiries. Contact our expert astrologers through phone, email, or chat support.",
  keywords: ["contact astrologer", "astrology support", "consultation booking", "customer service", "astrology help"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Get in touch with our expert astrologers for personalized guidance and support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone Support</h3>
                    <p className="text-purple-200 mb-2">Call us for immediate consultation</p>
                    <p className="text-purple-300">+91-9876543210</p>
                    <p className="text-purple-300">+91-9876543211</p>
                    <p className="text-sm text-purple-400">Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                    <p className="text-purple-200 mb-2">Send us your queries anytime</p>
                    <p className="text-purple-300">info@astrodarbar.in</p>
                    <p className="text-purple-300">support@astrodarbar.in</p>
                    <p className="text-sm text-purple-400">Response within 24 hours</p>
                  </div>
                </div>

                {/* Live Chat */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-purple-200 mb-2">Chat with our astrologers instantly</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
                      Start Chat
                    </button>
                    <p className="text-sm text-purple-400 mt-2">Online 24/7</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-xl">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">WhatsApp Support</h3>
                    <p className="text-purple-200 mb-2">Quick support via WhatsApp</p>
                    <p className="text-purple-300">+91-9876543210</p>
                    <p className="text-sm text-purple-400">Available 9 AM - 11 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-purple-200">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 10:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-purple-600/30 rounded">
                  <p className="text-sm text-purple-200">
                    Emergency consultations available 24/7 via phone
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center text-xl transition-colors">
                  📘
                </button>
                <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center text-xl transition-colors">
                  📷
                </button>
                <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center text-xl transition-colors">
                  🐦
                </button>
                <button className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center text-xl transition-colors">
                  📺
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    placeholder="Enter your last name"
                  />
                </div>
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

              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Consultation Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white focus:outline-none focus:border-purple-400">
                  <option value="">Select consultation type</option>
                  <option value="vedic-astrology">Vedic Astrology</option>
                  <option value="kundli-analysis">Kundli Analysis</option>
                  <option value="love-compatibility">Love Compatibility</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="gemstone-guidance">Gemstone Guidance</option>
                  <option value="spiritual-healing">Spiritual Healing</option>
                </select>
              </div>

              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 resize-none"
                  placeholder="Tell us about your query or requirements..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="rounded" />
                <label htmlFor="privacy" className="text-purple-200 text-sm">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold text-white mb-2">How can I book a consultation?</h4>
              <p className="text-purple-200 text-sm">
                You can book a consultation by calling us, using our website, or through WhatsApp. Our team will help you choose the right astrologer for your needs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold text-white mb-2">What information do I need for a reading?</h4>
              <p className="text-purple-200 text-sm">
                Please provide your exact birth date, time, and place. This information is crucial for accurate astrological analysis and predictions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Are online consultations available?</h4>
              <p className="text-purple-200 text-sm">
                Yes, we offer video calls, phone consultations, and chat-based readings. All our services are available online for your convenience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold text-white mb-2">What languages are supported?</h4>
              <p className="text-purple-200 text-sm">
                Our astrologers can consult in Hindi, English, Bengali, Tamil, Telugu, Marathi, Gujarati, and Punjabi to serve you better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
