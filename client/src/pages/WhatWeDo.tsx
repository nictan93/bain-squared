import { Header } from "@/components/Header";
import { WhatWeDoIntro } from "@/components/WhatWeDoIntro";
import { PillarSwitcher } from "@/components/PillarSwitcher";
import { CapabilitiesCarousel } from "@/components/CapabilitiesCarousel";
import { PerspectiveFeature } from "@/components/PerspectiveFeature";
import { SquaredMethod } from "@/components/SquaredMethod";
import { CTAStrip } from "@/components/CTAStrip";
import { Footer } from "@/components/Footer";

export default function WhatWeDo() {
  return (
    <div className="bs-bg-canvas" data-testid="page-what-we-do">
      <Header />
      <main>
        <WhatWeDoIntro />
        <PillarSwitcher />
        <CapabilitiesCarousel
          heading="Explore our capabilities"
          alignLeft
          tightHeading
        />
        <PerspectiveFeature />
        <SquaredMethod />
        <CTAStrip
          text="Explore what we do."
          buttonLabel="Speak with us"
          href="#/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
