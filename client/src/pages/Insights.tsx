import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsightsHero } from "@/components/InsightsHero";
import { ImageStripCarousel } from "@/components/ImageStripCarousel";
import { WhitepaperPanel } from "@/components/WhitepaperPanel";
import { ExplorePublications } from "@/components/ExplorePublications";
import { FeaturedClientStoryCarousel } from "@/components/FeaturedClientStoryCarousel";
import { NewsletterSubscribe } from "@/components/NewsletterSubscribe";
import {
  featuredClientStories,
  insightsHeroStrip,
  explorePublicationsTabs,
} from "@/data/insights-content";

export default function Insights() {
  return (
    <div className="min-h-screen bs-bg-canvas">
      <Header />
      <main>
        <InsightsHero
          title="Insights"
          ctaLabel="Sign up for our newsletter"
          ctaHref="#subscribe"
          headline="The operator-led view on what is changing in business."
          body="Briefs, field notes, and long-form research from the partners who sit inside the operator's seat. One topic, one argument, no filler. Built to be used in the next decision you make, not skimmed."
        />

        <div className="pb-20 md:pb-28">
          <ImageStripCarousel cards={insightsHeroStrip} />
        </div>

        <WhitepaperPanel
          headline="Bain Squared's 2026 Operator Outlook"
          body="Our flagship annual study. Twelve operator interviews, six data sets, and one practical thesis on where the next two years of value will be made and lost. Download the report and use it inside your next planning cycle."
          ctaLabel="Read the report"
          ctaHref="#/contact"
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
          imageAlt="Operator reading the 2026 Outlook on a tablet."
        />

        <ExplorePublications tabs={explorePublicationsTabs} />

        <FeaturedClientStoryCarousel stories={featuredClientStories} />

        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
}
