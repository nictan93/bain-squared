import { siteImage } from "@/data/site-media";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsightsHero } from "@/components/InsightsHero";
import { ImageStripCarousel } from "@/components/ImageStripCarousel";
import { WhitepaperPanel } from "@/components/WhitepaperPanel";
import { ExplorePublications } from "@/components/ExplorePublications";
import { RecommendedSidebar } from "@/components/RecommendedSidebar";
import { NewsletterSubscribe } from "@/components/NewsletterSubscribe";
import {
  insightsHeroStrip,
  explorePublicationsTabs,
  publicationsFeaturedHero,
  publicationsRecommended,
} from "@/data/insights-content";

import { launchCards, launchFeatured, launchRecommended } from "@/data/launch";
import { MiniArticleGrid } from "@/components/MiniArticleGrid";

export default function Insights() {
  return (
    <div className="min-h-screen bs-bg-canvas">
      <Header />
      <main>
        <InsightsHero
          title="Insights"
          ctaLabel="Sign up for our newsletter"
          ctaHref="/newsletter"
          headline="Ideas for the decisions that shape your business."
          body="Explore perspectives, practical methods and deeper analysis across AI, finance and enterprise value."
        />

        <div className="pb-20 md:pb-28">
          <ImageStripCarousel cards={insightsHeroStrip} />
        </div>

        <RecommendedSidebar
          featured={launchFeatured}
          recommended={launchRecommended}
        />

        <ExplorePublications tabs={explorePublicationsTabs} />
        <MiniArticleGrid heading="The latest from Bain Squared" articles={launchCards} />

        <WhitepaperPanel
          headline={launchFeatured.title}
          body={launchFeatured.dek}
          ctaLabel="Read the report"
          ctaHref={launchFeatured.href}
          image={siteImage("insights-01", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80")}
          imageAlt=""
        />

        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
}
