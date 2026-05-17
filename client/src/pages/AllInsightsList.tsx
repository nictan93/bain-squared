import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsightsHero } from "@/components/InsightsHero";
import { FeaturedArticleLayout } from "@/components/FeaturedArticleLayout";
import { MiniArticleGrid } from "@/components/MiniArticleGrid";
import { ClosingExtraordinaryCTA } from "@/components/ClosingExtraordinaryCTA";
import type { MiniArticle } from "@/components/MiniArticleGrid";
import {
  fieldNotesFeatured,
  fieldNotesSecondary,
  moreArticlesMini,
} from "@/data/insights-content";

type ListConfig = {
  title: string;
  headline: string;
  body: string;
};

const LIST_CONFIG: Record<string, ListConfig> = {
  "field-notes": {
    title: "Field Notes",
    headline: "Short reads from inside the operator's seat.",
    body: "Working notes from the partners, written between the meetings. What we are seeing, what is changing, and what we are testing right now with the operators in our portfolio.",
  },
  "client-stories": {
    title: "Client Stories",
    headline: "The work, told straight, with the numbers attached.",
    body: "How operators we work with closed rounds on their own terms, steadied margins through volatility, and made intangibles defendable to the board. Names changed on request, results not.",
  },
  "inside-hq": {
    title: "Inside Bain Squared HQ",
    headline: "The shop floor at 7 Temasek Boulevard.",
    body: "Notes from inside the firm. How we hire, how we run engagements, what we believe about the operator's craft, and what we are arguing about in the partners' room this week.",
  },
};

/**
 * Build extra mini articles for the "Load more" reveal so list pages
 * have a believable second page of content.
 */
function buildExtraArticles(slug: string): MiniArticle[] {
  const base = moreArticlesMini;
  return base.map((a, i) => ({
    ...a,
    title: `${a.title} — Part ${i + 2}`,
  }));
}

type Props = {
  params: { slug: string };
};

export default function AllInsightsList({ params }: Props) {
  const slug = params.slug;
  const config = LIST_CONFIG[slug];
  const [showMore, setShowMore] = useState(false);

  if (!config) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl">Section not found</h1>
          <p className="mt-4">
            We could not find that section. Head back to{" "}
            <a href="#/insights" className="underline">
              Insights
            </a>
            .
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const articles = showMore
    ? [...moreArticlesMini, ...buildExtraArticles(slug)]
    : moreArticlesMini;

  return (
    <div className="min-h-screen bs-bg-canvas">
      <Header />
      <main>
        <InsightsHero
          title={config.title}
          ctaLabel="Sign up for our newsletter"
          ctaHref="#subscribe"
          headline={config.headline}
          body={config.body}
        />

        <FeaturedArticleLayout
          lead={fieldNotesFeatured}
          secondary={fieldNotesSecondary}
        />

        <MiniArticleGrid heading="More from the desk" articles={articles} />

        {!showMore && (
          <section className="bs-bg-canvas pb-20 md:pb-28">
            <div className="bs-container flex justify-center">
              <button
                type="button"
                onClick={() => setShowMore(true)}
                className="px-8 py-4 text-[15px] font-medium transition-colors"
                style={{
                  backgroundColor: "hsl(var(--bs-forest-deep))",
                  color: "#fff",
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "hsl(var(--bs-forest-deep-hover))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "hsl(var(--bs-forest-deep))";
                }}
                data-testid="load-more-articles"
              >
                Load more
              </button>
            </div>
          </section>
        )}

        <ClosingExtraordinaryCTA />
      </main>
      <Footer />
    </div>
  );
}
