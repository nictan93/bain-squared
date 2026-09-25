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
    headline: "Practical methods for the work in front of you.",
    body: "Field Notes turns a focused operating question into an approach you can use. Explore workflows, checklists and working examples across AI, finance and valuation.",
  },
  "client-stories": {
    title: "Client Stories",
    headline: "The decisions, the work and the outcome.",
    body: "Explore the context behind an engagement, the choices made during delivery and the evidence used to assess the result.",
  },
  "inside-hq": {
    title: "Inside Bain Squared HQ",
    headline: "How we approach the work.",
    body: "A closer look at our methods, working practices and the people who contribute to them.",
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
          <h1 className="font-display text-4xl" style={{ fontSize: "var(--bs-type-page)", lineHeight: 1.1 , fontFamily: "Bitter, Georgia, serif"}}>Section not found</h1>
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
          ctaHref="#/newsletter"
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
