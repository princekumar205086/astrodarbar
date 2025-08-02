import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://astrodarbar.in'),
  title: {
    default: "ASTRODARBAR | #1 Best Online Astrology Platform in India | Expert Astrologers Near Me",
    template: "%s | ASTRODARBAR - India's #1 Astrology Platform"
  },
  description:
    "🏆 ASTRODARBAR - India's #1 ranked astrology platform with 50,000+ satisfied customers. Get instant consultations from 500+ certified Vedic astrologers across India. Expert horoscope predictions, kundli analysis, love compatibility, career guidance. Available 24/7 in Hindi, English & all regional languages. Trusted by celebrities & millions. ⭐4.9/5 rating.",
  keywords: [
    // CORE BRAND & PREMIUM KEYWORDS
    "Astrodarbar", "#1 Astrology Platform India", "Best Online Astrology India", "Top Astrologer India",
    "Famous Astrologer India", "Celebrity Astrologer India", "Most Accurate Astrologer India", "Trusted Astrology Platform",
    "India's Leading Astrology Website", "Premium Astrology Services", "Expert Vedic Astrology", "Professional Astrology Consultation",
    "Authentic Astrology Predictions", "Certified Astrologers India", "24/7 Astrology Services", "Instant Astrology Consultation",
    "Live Astrology Chat", "Video Call Astrology", "Phone Astrology Consultation", "WhatsApp Astrology Services",
    
    // PRIMARY "NEAR ME" KEYWORDS - CORE DOMINANCE
    "Astro near me", "Astrology near me", "Astrologer near me", "Best astrologer near me", "Famous astrologer near me",
    "Top astrologer near me", "Expert astrologer near me", "Professional astrologer near me", "Certified astrologer near me",
    "Trusted astrologer near me", "Accurate astrologer near me", "Genuine astrologer near me", "Reliable astrologer near me",
    "Authentic astrologer near me", "Experienced astrologer near me", "Skilled astrologer near me", "Qualified astrologer near me",
    "Licensed astrologer near me", "Registered astrologer near me", "Verified astrologer near me", "Recommended astrologer near me",
    "Renowned astrologer near me", "Popular astrologer near me", "Highly rated astrologer near me", "5 star astrologer near me",
    "Award winning astrologer near me", "Celebrity astrologer near me", "Government certified astrologer near me",
    
    // SERVICE-SPECIFIC "NEAR ME" KEYWORDS
    "Vedic astrologer near me", "Jyotish near me", "Pandit ji near me", "Kundli expert near me", "Horoscope reader near me",
    "Birth chart analyst near me", "Palm reader near me", "Numerologist near me", "Vastu expert near me", "Gemstone consultant near me",
    "Spiritual healer near me", "Love marriage specialist near me", "Career astrologer near me", "Business astrologer near me",
    "Marriage astrologer near me", "Compatibility expert near me", "Relationship counselor near me", "Life coach astrologer near me",
    "Health astrologer near me", "Financial astrologer near me", "Legal astrologer near me", "Education astrologer near me",
    "Property astrologer near me", "Travel astrologer near me", "Child astrologer near me", "Family astrologer near me",
    
    // PROBLEM-SOLVING "NEAR ME" KEYWORDS
    "Love problem astrologer near me", "Marriage problem astrologer near me", "Divorce astrologer near me", "Breakup astrologer near me",
    "Relationship astrologer near me", "Family problem astrologer near me", "Career problem astrologer near me", "Job problem astrologer near me",
    "Business problem astrologer near me", "Health problem astrologer near me", "Money problem astrologer near me", "Legal problem astrologer near me",
    "Property dispute astrologer near me", "Court case astrologer near me", "Enemy problem astrologer near me", "Black magic removal near me",
    "Negative energy removal near me", "Evil eye removal near me", "Vashikaran specialist near me", "Tantrik near me",
    
    // DOSHA & REMEDY "NEAR ME" KEYWORDS
    "Manglik dosha solution near me", "Kaal sarp dosha remedy near me", "Shani sade sati solution near me", "Rahu ketu dosha remedy near me",
    "Pitra dosha solution near me", "Graha dosha remedy near me", "Nadi dosha solution near me", "Bhakoot dosha remedy near me",
    "Gana dosha solution near me", "Guna milan expert near me", "Kundli matching expert near me", "Horoscope matching near me",
    "Marriage compatibility near me", "Love compatibility near me", "Partner compatibility near me", "Ashtakoota matching near me",
    
    // TIMING & MUHURAT "NEAR ME" KEYWORDS
    "Muhurat expert near me", "Auspicious timing near me", "Wedding muhurat near me", "Griha pravesh muhurat near me",
    "Business opening muhurat near me", "Vehicle purchase muhurat near me", "Property purchase muhurat near me", "Investment muhurat near me",
    "Surgery timing near me", "Travel muhurat near me", "Exam timing astrologer near me", "Interview timing astrologer near me",
    
    // TIER 1 CITIES - COMPREHENSIVE COVERAGE
    "Astrologer in Mumbai", "Best astrologer Mumbai", "Famous astrologer Mumbai", "Top astrologer Mumbai", "Mumbai astrologer consultation",
    "Mumbai astrology services", "Mumbai kundli expert", "Mumbai jyotish", "Astrologer near Mumbai", "Mumbai pandit ji", "Mumbai vastu expert",
    "Astrologer in Delhi", "Best astrologer Delhi", "Famous astrologer Delhi", "Top astrologer Delhi", "Delhi astrologer consultation",
    "Delhi astrology services", "Delhi kundli expert", "Delhi jyotish", "Astrologer near Delhi", "Delhi pandit ji", "Delhi vastu expert",
    "Astrologer in Bangalore", "Best astrologer Bangalore", "Famous astrologer Bangalore", "Top astrologer Bangalore", "Bangalore astrologer consultation",
    "Bangalore astrology services", "Bangalore kundli expert", "Bangalore jyotish", "Astrologer near Bangalore", "Bangalore pandit ji", "Bangalore vastu expert",
    "Astrologer in Hyderabad", "Best astrologer Hyderabad", "Famous astrologer Hyderabad", "Top astrologer Hyderabad", "Hyderabad astrologer consultation",
    "Hyderabad astrology services", "Hyderabad kundli expert", "Hyderabad jyotish", "Astrologer near Hyderabad", "Hyderabad pandit ji", "Hyderabad vastu expert",
    "Astrologer in Chennai", "Best astrologer Chennai", "Famous astrologer Chennai", "Top astrologer Chennai", "Chennai astrologer consultation",
    "Chennai astrology services", "Chennai kundli expert", "Chennai jyotish", "Astrologer near Chennai", "Chennai pandit ji", "Chennai vastu expert",
    "Astrologer in Kolkata", "Best astrologer Kolkata", "Famous astrologer Kolkata", "Top astrologer Kolkata", "Kolkata astrologer consultation",
    "Kolkata astrology services", "Kolkata kundli expert", "Kolkata jyotish", "Astrologer near Kolkata", "Kolkata pandit ji", "Kolkata vastu expert",
    "Astrologer in Pune", "Best astrologer Pune", "Famous astrologer Pune", "Top astrologer Pune", "Pune astrologer consultation",
    "Pune astrology services", "Pune kundli expert", "Pune jyotish", "Astrologer near Pune", "Pune pandit ji", "Pune vastu expert",
    "Astrologer in Ahmedabad", "Best astrologer Ahmedabad", "Famous astrologer Ahmedabad", "Top astrologer Ahmedabad", "Ahmedabad astrologer consultation",
    "Ahmedabad astrology services", "Ahmedabad kundli expert", "Ahmedabad jyotish", "Astrologer near Ahmedabad", "Ahmedabad pandit ji", "Ahmedabad vastu expert",
    
    // TIER 2 CITIES - COMPLETE COVERAGE
    "Astrologer in Jaipur", "Best astrologer Jaipur", "Jaipur astrology consultation", "Jaipur kundli expert", "Astrologer near Jaipur",
    "Astrologer in Lucknow", "Best astrologer Lucknow", "Lucknow astrology consultation", "Lucknow kundli expert", "Astrologer near Lucknow",
    "Astrologer in Surat", "Best astrologer Surat", "Surat astrology consultation", "Surat kundli expert", "Astrologer near Surat",
    "Astrologer in Kanpur", "Best astrologer Kanpur", "Kanpur astrology consultation", "Kanpur kundli expert", "Astrologer near Kanpur",
    "Astrologer in Nagpur", "Best astrologer Nagpur", "Nagpur astrology consultation", "Nagpur kundli expert", "Astrologer near Nagpur",
    "Astrologer in Indore", "Best astrologer Indore", "Indore astrology consultation", "Indore kundli expert", "Astrologer near Indore",
    "Astrologer in Thane", "Best astrologer Thane", "Thane astrology consultation", "Thane kundli expert", "Astrologer near Thane",
    "Astrologer in Bhopal", "Best astrologer Bhopal", "Bhopal astrology consultation", "Bhopal kundli expert", "Astrologer near Bhopal",
    "Astrologer in Visakhapatnam", "Best astrologer Visakhapatnam", "Vizag astrology consultation", "Vizag kundli expert", "Astrologer near Vizag",
    "Astrologer in Patna", "Best astrologer Patna", "Patna astrology consultation", "Patna kundli expert", "Astrologer near Patna",
    "Astrologer in Vadodara", "Best astrologer Vadodara", "Vadodara astrology consultation", "Vadodara kundli expert", "Astrologer near Vadodara",
    "Astrologer in Ghaziabad", "Best astrologer Ghaziabad", "Ghaziabad astrology consultation", "Ghaziabad kundli expert", "Astrologer near Ghaziabad",
    "Astrologer in Ludhiana", "Best astrologer Ludhiana", "Ludhiana astrology consultation", "Ludhiana kundli expert", "Astrologer near Ludhiana",
    "Astrologer in Agra", "Best astrologer Agra", "Agra astrology consultation", "Agra kundli expert", "Astrologer near Agra",
    "Astrologer in Nashik", "Best astrologer Nashik", "Nashik astrology consultation", "Nashik kundli expert", "Astrologer near Nashik",
    "Astrologer in Faridabad", "Best astrologer Faridabad", "Faridabad astrology consultation", "Faridabad kundli expert", "Astrologer near Faridabad",
    "Astrologer in Meerut", "Best astrologer Meerut", "Meerut astrology consultation", "Meerut kundli expert", "Astrologer near Meerut",
    "Astrologer in Rajkot", "Best astrologer Rajkot", "Rajkot astrology consultation", "Rajkot kundli expert", "Astrologer near Rajkot",
    "Astrologer in Varanasi", "Best astrologer Varanasi", "Varanasi astrology consultation", "Varanasi kundli expert", "Astrologer near Varanasi",
    "Astrologer in Srinagar", "Best astrologer Srinagar", "Srinagar astrology consultation", "Srinagar kundli expert", "Astrologer near Srinagar",
    "Astrologer in Aurangabad", "Best astrologer Aurangabad", "Aurangabad astrology consultation", "Aurangabad kundli expert", "Astrologer near Aurangabad",
    "Astrologer in Dhanbad", "Best astrologer Dhanbad", "Dhanbad astrology consultation", "Dhanbad kundli expert", "Astrologer near Dhanbad",
    "Astrologer in Amritsar", "Best astrologer Amritsar", "Amritsar astrology consultation", "Amritsar kundli expert", "Astrologer near Amritsar",
    "Astrologer in Navi Mumbai", "Best astrologer Navi Mumbai", "Navi Mumbai astrology consultation", "Navi Mumbai kundli expert", "Astrologer near Navi Mumbai",
    "Astrologer in Allahabad", "Best astrologer Allahabad", "Allahabad astrology consultation", "Allahabad kundli expert", "Astrologer near Allahabad",
    "Astrologer in Ranchi", "Best astrologer Ranchi", "Ranchi astrology consultation", "Ranchi kundli expert", "Astrologer near Ranchi",
    "Astrologer in Howrah", "Best astrologer Howrah", "Howrah astrology consultation", "Howrah kundli expert", "Astrologer near Howrah",
    "Astrologer in Coimbatore", "Best astrologer Coimbatore", "Coimbatore astrology consultation", "Coimbatore kundli expert", "Astrologer near Coimbatore",
    "Astrologer in Jabalpur", "Best astrologer Jabalpur", "Jabalpur astrology consultation", "Jabalpur kundli expert", "Astrologer near Jabalpur",
    
    // COMPLETE STATE COVERAGE WITH VARIATIONS
    "Best astrologer in Maharashtra", "#1 astrologer Maharashtra", "Top astrology services Maharashtra", "Maharashtra astrologer near me",
    "Best astrologer in Delhi", "#1 astrologer Delhi NCR", "Top astrology services Delhi", "Delhi astrologer near me",
    "Best astrologer in Karnataka", "#1 astrologer Karnataka", "Top astrology services Karnataka", "Karnataka astrologer near me",
    "Best astrologer in Tamil Nadu", "#1 astrologer Tamil Nadu", "Top astrology services Tamil Nadu", "Tamil Nadu astrologer near me",
    "Best astrologer in Gujarat", "#1 astrologer Gujarat", "Top astrology services Gujarat", "Gujarat astrologer near me",
    "Best astrologer in Rajasthan", "#1 astrologer Rajasthan", "Top astrology services Rajasthan", "Rajasthan astrologer near me",
    "Best astrologer in Uttar Pradesh", "#1 astrologer UP", "Top astrology services UP", "UP astrologer near me",
    "Best astrologer in West Bengal", "#1 astrologer West Bengal", "Top astrology services West Bengal", "West Bengal astrologer near me",
    "Best astrologer in Andhra Pradesh", "#1 astrologer Andhra Pradesh", "Top astrology services AP", "AP astrologer near me",
    "Best astrologer in Telangana", "#1 astrologer Telangana", "Top astrology services Telangana", "Telangana astrologer near me",
    "Best astrologer in Kerala", "#1 astrologer Kerala", "Top astrology services Kerala", "Kerala astrologer near me",
    "Best astrologer in Punjab", "#1 astrologer Punjab", "Top astrology services Punjab", "Punjab astrologer near me",
    "Best astrologer in Haryana", "#1 astrologer Haryana", "Top astrology services Haryana", "Haryana astrologer near me",
    "Best astrologer in Bihar", "#1 astrologer Bihar", "Top astrology services Bihar", "Bihar astrologer near me",
    "Best astrologer in Madhya Pradesh", "#1 astrologer MP", "Top astrology services MP", "MP astrologer near me",
    "Best astrologer in Odisha", "#1 astrologer Odisha", "Top astrology services Odisha", "Odisha astrologer near me",
    "Best astrologer in Jharkhand", "#1 astrologer Jharkhand", "Top astrology services Jharkhand", "Jharkhand astrologer near me",
    "Best astrologer in Assam", "#1 astrologer Assam", "Top astrology services Assam", "Assam astrologer near me",
    "Best astrologer in Chhattisgarh", "#1 astrologer Chhattisgarh", "Top astrology services Chhattisgarh", "Chhattisgarh astrologer near me",
    "Best astrologer in Himachal Pradesh", "#1 astrologer HP", "Top astrology services HP", "HP astrologer near me",
    "Best astrologer in Uttarakhand", "#1 astrologer Uttarakhand", "Top astrology services Uttarakhand", "Uttarakhand astrologer near me",
    "Best astrologer in Goa", "#1 astrologer Goa", "Top astrology services Goa", "Goa astrologer near me",
    "Best astrologer in Tripura", "#1 astrologer Tripura", "Top astrology services Tripura", "Tripura astrologer near me",
    "Best astrologer in Meghalaya", "#1 astrologer Meghalaya", "Top astrology services Meghalaya", "Meghalaya astrologer near me",
    "Best astrologer in Manipur", "#1 astrologer Manipur", "Top astrology services Manipur", "Manipur astrologer near me",
    "Best astrologer in Nagaland", "#1 astrologer Nagaland", "Top astrology services Nagaland", "Nagaland astrologer near me",
    "Best astrologer in Sikkim", "#1 astrologer Sikkim", "Top astrology services Sikkim", "Sikkim astrologer near me",
    "Best astrologer in Arunachal Pradesh", "#1 astrologer Arunachal", "Top astrology services Arunachal", "Arunachal astrologer near me",
    "Best astrologer in Mizoram", "#1 astrologer Mizoram", "Top astrology services Mizoram", "Mizoram astrologer near me",
    
    // UNION TERRITORIES
    "Best astrologer in Jammu Kashmir", "#1 astrologer J&K", "J&K astrologer near me", "Kashmir astrologer near me",
    "Best astrologer in Ladakh", "#1 astrologer Ladakh", "Ladakh astrologer near me", "Leh astrologer near me",
    "Best astrologer in Puducherry", "#1 astrologer Puducherry", "Puducherry astrologer near me", "Pondicherry astrologer near me",
    "Best astrologer in Andaman Nicobar", "#1 astrologer Port Blair", "Port Blair astrologer near me", "Islands astrologer near me",
    "Best astrologer in Chandigarh UT", "#1 astrologer Chandigarh Union Territory", "Chandigarh UT astrologer near me",
    "Best astrologer in Dadra Nagar Haveli", "#1 astrologer DNH", "DNH astrologer near me", "Silvassa astrologer near me",
    "Best astrologer in Lakshadweep", "#1 astrologer Lakshadweep", "Lakshadweep astrologer near me", "Kavaratti astrologer near me",
    
    // LANGUAGE-SPECIFIC KEYWORDS
    "Hindi astrologer near me", "English astrologer near me", "Bengali astrologer near me", "Tamil astrologer near me",
    "Telugu astrologer near me", "Marathi astrologer near me", "Gujarati astrologer near me", "Punjabi astrologer near me",
    "Kannada astrologer near me", "Malayalam astrologer near me", "Odia astrologer near me", "Assamese astrologer near me",
    "Urdu astrologer near me", "Sindhi astrologer near me", "Nepali astrologer near me", "Bhojpuri astrologer near me",
    
    // PREMIUM & CELEBRITY KEYWORDS
    "Celebrity astrologer near me", "Famous astrologer near me", "Award winning astrologer near me", "Media featured astrologer near me",
    "Book author astrologer near me", "Research scholar astrologer near me", "University professor astrologer near me",
    "International astrologer near me", "World renowned astrologer near me", "Globally recognized astrologer near me",
    
    // TECHNOLOGY & MODERN KEYWORDS
    "AI astrology near me", "Digital astrology platform near me", "Astrology app near me", "Online astrology software near me",
    "Virtual astrology consultation near me", "Video astrology near me", "Live astrology near me", "Real-time astrology near me",
    "Instant astrology near me", "Quick astrology near me", "Emergency astrology near me", "24x7 astrology near me",
    
    // COST & AFFORDABILITY KEYWORDS
    "Cheap astrologer near me", "Affordable astrologer near me", "Budget astrologer near me", "Free astrologer near me",
    "Low cost astrologer near me", "Reasonable astrologer near me", "Economic astrologer near me", "Value astrologer near me",
    
    // TIMING & URGENCY KEYWORDS
    "Same day astrologer near me", "Today astrologer near me", "Tonight astrologer near me", "Weekend astrologer near me",
    "Holiday astrologer near me", "Late night astrologer near me", "Early morning astrologer near me", "Immediate consultation near me",
    
    // SPECIALTY DEMOGRAPHICS
    "Women astrologer near me", "Female astrologer near me", "Lady astrologer near me", "Male astrologer near me",
    "Young astrologer near me", "Senior astrologer near me", "Traditional astrologer near me", "Modern astrologer near me",
    
    // HEALTH & WELLNESS
    "Medical astrology near me", "Health prediction near me", "Disease astrology near me", "Mental health astrology near me",
    "Wellness astrology near me", "Fitness astrology near me", "Diet astrology near me", "Weight loss astrology near me",
    
    // FINANCIAL & WEALTH
    "Wealth astrology near me", "Money astrology near me", "Prosperity astrology near me", "Fortune astrology near me",
    "Success astrology near me", "Profit astrology near me", "Income astrology near me", "Promotion astrology near me",
    
    // SPIRITUAL & RELIGIOUS
    "Spiritual astrology near me", "Religious astrology near me", "Meditation astrology near me", "Yoga astrology near me",
    "Mantra astrology near me", "Yantra astrology near me", "Rudraksha astrology near me", "Gemstone astrology near me",
    
    // ULTRA-LONG TAIL VOICE SEARCH KEYWORDS
    "Tell me about my future through astrology near me", "What does my horoscope say about my love life near me",
    "When will I get married according to astrology near me", "Which career is best for me astrologically near me",
    "How to improve my financial situation with astrology near me", "What gemstone should I wear for good luck near me",
    "When is the best time to start a business astrologically near me", "How to solve my marriage problems with astrology near me",
    "What does my birth chart say about my personality near me", "When will I have children according to astrology near me",
    "How to choose a life partner through astrology near me", "What career should I choose based on my zodiac sign near me",
    "How to improve my health through astrological remedies near me", "When is the best time to buy property astrologically near me",
    "What does my future hold according to Vedic astrology near me", "How to overcome financial problems with astrology near me",
    "What are the astrological remedies for success near me", "How to find true love through astrology near me",
    "What does my horoscope say about my career near me", "When will my bad time end according to astrology near me",
    
    // TIER 3 & TIER 4 CITIES
    "Astrologer in Gwalior", "Astrologer in Vijayawada", "Astrologer in Jodhpur", "Astrologer in Madurai",
    "Astrologer in Raipur", "Astrologer in Kota", "Astrologer in Chandigarh", "Astrologer in Gurgaon",
    "Astrologer in Noida", "Astrologer in Moradabad", "Astrologer in Aligarh", "Astrologer in Saharanpur",
    "Astrologer in Bareilly", "Astrologer in Muzaffarnagar", "Astrologer in Firozabad", "Astrologer in Mathura",
    "Astrologer in Vrindavan", "Astrologer in Ayodhya", "Astrologer in Gorakhpur", "Astrologer in Dehradun",
    "Astrologer in Haridwar", "Astrologer in Rishikesh", "Astrologer in Nainital", "Astrologer in Mussoorie",
    "Astrologer in Shimla", "Astrologer in Manali", "Astrologer in Dharamshala", "Astrologer in Jalandhar",
    "Astrologer in Patiala", "Astrologer in Mohali", "Astrologer in Bathinda", "Astrologer in Pathankot",
    
    // DISTRICT-WISE COVERAGE
    "Astrologer in Ahmednagar", "Astrologer in Akola", "Astrologer in Amravati", "Astrologer in Beed",
    "Astrologer in Bhandara", "Astrologer in Buldhana", "Astrologer in Chandrapur", "Astrologer in Dhule",
    "Astrologer in Gadchiroli", "Astrologer in Gondia", "Astrologer in Hingoli", "Astrologer in Jalgaon",
    "Astrologer in Jalna", "Astrologer in Kolhapur", "Astrologer in Latur", "Astrologer in Mumbai City",
    "Astrologer in Mumbai Suburban", "Astrologer in Nanded", "Astrologer in Nandurbar", "Astrologer in Osmanabad",
    "Astrologer in Palghar", "Astrologer in Parbhani", "Astrologer in Raigad", "Astrologer in Ratnagiri",
    "Astrologer in Sangli", "Astrologer in Satara", "Astrologer in Sindhudurg", "Astrologer in Solapur",
    "Astrologer in Wardha", "Astrologer in Washim", "Astrologer in Yavatmal", "Astrologer in Bid",
    
    // REGIONAL VARIATIONS & SPELLINGS
    "Jyotish near me", "Jyotishi near me", "Hora shastra near me", "Panchang near me", "Muhurat near me",
    "Nakshatra near me", "Graha near me", "Rashi near me", "Bhava near me", "Dasha near me", "Yoga near me",
    "Dosha near me", "Astrologi near me", "Jyotish vidya near me", "Vedic jyotish near me", "Hindu astrology near me",
    "Indian astrology near me", "Sanskrit astrology near me", "Traditional astrology near me", "Ancient astrology near me",
    "Classical astrology near me", "Spiritual astrology near me", "Divine astrology near me", "Sacred astrology near me"
  ],
  authors: [{ name: "Astrodarbar Team", url: "https://astrodarbar.in" }],
  creator: "Astrodarbar Team",
  publisher: "Astrodarbar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "-N7EGdN2odl110-wU-YASwVu8GPWprbEqEsFvxHnGEc",
  },
  category: "Astrology",
  classification: "Astrology Services",
  openGraph: {
    title: "ASTRODARBAR | #1 Best Online Astrology Platform in India",
    description:
      "🏆 India's #1 ranked astrology platform with 50,000+ satisfied customers. Expert consultations from 500+ certified Vedic astrologers. Instant horoscope predictions, kundli analysis & spiritual guidance. ⭐4.9/5 rating.",
    url: "https://astrodarbar.in",
    siteName: "Astrodarbar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Astrodarbar - #1 Best Online Astrology Platform in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRODARBAR | #1 Best Online Astrology Platform in India",
    description:
      "🏆 India's #1 ranked astrology platform with 50,000+ satisfied customers. Expert consultations from certified Vedic astrologers. Instant predictions & spiritual guidance. ⭐4.9/5 rating.",
    images: ["/og-image.png"],
    site: "@astrodarbar",
    creator: "@astrodarbar",
  },
  alternates: {
    canonical: "https://astrodarbar.in",
    languages: {
      'en-IN': 'https://astrodarbar.in',
      'hi-IN': 'https://astrodarbar.in/hi',
      'bn-IN': 'https://astrodarbar.in/bn',
      'ta-IN': 'https://astrodarbar.in/ta',
      'te-IN': 'https://astrodarbar.in/te',
    },
  },
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English, Hindi",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "all",
    "subject": "Astrology, Spiritual Services, Online Consultation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Astrodarbar",
    description: "India's #1 ranked online astrology platform providing expert consultations, Vedic astrology, horoscope predictions, and spiritual guidance across all Indian cities and states with 500+ certified astrologers.",
    url: "https://astrodarbar.in",
    logo: "https://astrodarbar.in/logo.png",
    image: "https://astrodarbar.in/og-image.png",
    telephone: "+91-9876543210",
    email: "info@astrodarbar.in",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
      addressLocality: "All Indian Cities",
      streetAddress: "Online Services Available Nationwide"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5937",
      longitude: "78.9629"
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India"
      },
      {
        "@type": "State",
        name: "Maharashtra"
      },
      {
        "@type": "State", 
        name: "Delhi"
      },
      {
        "@type": "State",
        name: "Karnataka"
      },
      {
        "@type": "State",
        name: "Tamil Nadu"
      },
      {
        "@type": "State",
        name: "Gujarat"
      },
      {
        "@type": "State",
        name: "Rajasthan"
      },
      {
        "@type": "State",
        name: "Uttar Pradesh"
      },
      {
        "@type": "State",
        name: "West Bengal"
      },
      {
        "@type": "State",
        name: "Andhra Pradesh"
      },
      {
        "@type": "State",
        name: "Telangana"
      },
      {
        "@type": "State",
        name: "Kerala"
      },
      {
        "@type": "State",
        name: "Punjab"
      },
      {
        "@type": "State",
        name: "Haryana"
      },
      {
        "@type": "State",
        name: "Bihar"
      },
      {
        "@type": "State",
        name: "Madhya Pradesh"
      },
      {
        "@type": "State",
        name: "Odisha"
      },
      {
        "@type": "State",
        name: "Jharkhand"
      },
      {
        "@type": "State",
        name: "Assam"
      },
      {
        "@type": "State",
        name: "Chhattisgarh"
      },
      {
        "@type": "City",
        name: "Mumbai"
      },
      {
        "@type": "City",
        name: "Delhi"
      },
      {
        "@type": "City", 
        name: "Bangalore"
      },
      {
        "@type": "City",
        name: "Hyderabad"
      },
      {
        "@type": "City",
        name: "Chennai"
      },
      {
        "@type": "City",
        name: "Kolkata"
      },
      {
        "@type": "City",
        name: "Pune"
      },
      {
        "@type": "City",
        name: "Ahmedabad"
      },
      {
        "@type": "City",
        name: "Jaipur"
      },
      {
        "@type": "City",
        name: "Lucknow"
      }
    ],
    serviceType: "Professional Astrology Services",
    priceRange: "₹100-₹5000",
    openingHours: "Mo-Su 00:00-23:59",
    availableLanguage: [
      "Hindi",
      "English", 
      "Bengali",
      "Tamil",
      "Telugu",
      "Marathi",
      "Gujarati",
      "Punjabi",
      "Kannada",
      "Malayalam",
      "Odia",
      "Assamese"
    ],
    keywords: "astro near me, astrology near me, astrologer near me, best astrologer near me, vedic astrologer near me, online astrology consultation, kundli analysis, horoscope predictions, love compatibility, career guidance, gemstone consultation, spiritual healing, #1 astrology platform India",
    sameAs: [
      "https://facebook.com/astrodarbar",
      "https://twitter.com/astrodarbar", 
      "https://instagram.com/astrodarbar",
      "https://youtube.com/astrodarbar"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Premium Astrology Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Expert Vedic Astrology Consultation",
            description: "Traditional Vedic astrology readings and predictions by certified astrologers"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Kundli Analysis",
            description: "Detailed birth chart analysis and interpretation by expert astrologers"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accurate Horoscope Predictions",
            description: "Daily, weekly, monthly, and yearly horoscope predictions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Love Compatibility Matching",
            description: "Relationship compatibility analysis and guidance for couples"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Career Guidance & Predictions",
            description: "Professional career guidance based on astrological insights"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spiritual Healing & Remedies",
            description: "Spiritual healing and astrological remedy services"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50000",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "Excellent astrology consultation. Very accurate predictions and helpful guidance. Best astrologer platform in India!"
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya Sharma"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5"
        },
        reviewBody: "Amazing service! The astrologer was very knowledgeable and provided great insights. Highly recommended!"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://astrodarbar.in" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Astrodarbar" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Astrodarbar" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="-N7EGdN2odl110-wU-YASwVu8GPWprbEqEsFvxHnGEc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
