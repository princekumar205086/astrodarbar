import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AstrologersSection } from "@/components/AstrologersSection"
import { ConsultationSection } from "@/components/ConsultationSection"
import { ComingSoonModal } from "@/components/ComingSoonModal"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AstrologersSection />
        <ConsultationSection />
      </main>
      <Footer />
      <ComingSoonModal />
    </div>
  );
}
