import { Header } from "@/components/Header";
import { HomeHero } from "@/components/HomeHero";
import { CalloutAI } from "@/components/CalloutAI";
import { CapabilitiesCarousel } from "@/components/CapabilitiesCarousel";
import { AIInActionHeader } from "@/components/AIInActionHeader";
import { ClientWorkCarousel } from "@/components/ClientWorkCarousel";
import { FeaturedInsights } from "@/components/FeaturedInsights";
import { CareersBand } from "@/components/CareersBand";
import { CTAStrip } from "@/components/CTAStrip";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bs-bg-canvas" data-testid="page-home">
      <Header />
      <main>
        <HomeHero />
        <CalloutAI />
        <CapabilitiesCarousel />
        <AIInActionHeader />
        <ClientWorkCarousel />
        <FeaturedInsights />
        <CareersBand />
        <CTAStrip
          text="Bring us your hardest growth question."
          buttonLabel="Get in touch"
          href="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
