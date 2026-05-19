import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InsightsHero } from "@/components/InsightsHero";
import { FeaturedArticleLayout } from "@/components/FeaturedArticleLayout";
import { MiniArticleGrid } from "@/components/MiniArticleGrid";
import { ClosingExtraordinaryCTA } from "@/components/ClosingExtraordinaryCTA";
import type { FeaturedArticle } from "@/components/FeaturedArticleLayout";
import type { MiniArticle } from "@/components/MiniArticleGrid";
import {
  fieldNotesFeatured,
  fieldNotesSecondary,
  moreArticlesMini,
} from "@/data/insights-content";
import { getInsightsByType } from "@/lib/queries";

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

type Props = {
  params: { slug: string };
};

export default function AllInsightsList({ params }: Props) {
  const slug = params.slug;
  const config = LIST_CONFIG[slug];
  const [showMore, setShowMore] = useState(false);
  const [lead, setLead] = useState<FeaturedArticle>(fieldNotesFeatured);
  const [secondary, setSecondary] = useState<[FeaturedArticle, FeaturedArticle]>([fieldNotesSecondary[0], fieldNotesSecondary[1]] as [FeaturedArticle, FeaturedArticle]);
  const [mini, setMini] = useState<MiniArticle[]>(moreArticlesMini);

  useEffect(() => {
    if (!config) return;
    getInsightsByType(slug).then((data) => {
      if (data.length < 3) return;
      const toFeatured = (d: typeof data[0]): FeaturedArticle => ({
        category: d.category,
        title: d.title,
        date: d.date,
        dek: d.dek,
        image: d.image,
        href: d.href,
      });
      const toMini = (d: typeof data[0]): MiniArticle => ({
        category: d.category,
        title: d.title,
        dek: d.dek,
        image: d.image,
        href: d.href,
      });
      setLead(toFeatured(data[0]));
      setSecondary([toFeatured(data[1]), toFeatured(data[2])]);
      setMini(data.slice(3).map(toMini));
    });
  }, [slug, config]);

  if (!config) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl">Section not found</h1>
          <p className="mt-4">
            We could not find that section. Head back to{" "}
            <a href="/insights" className="underline">
              Insights
            </a>
            .
          </p>
        </main>
        <Footer />
      </div>
    );
  }

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
          lead={lead}
          secondary={secondary}
        />

        <MiniArticleGrid heading="More from the desk" articles={showMore ? mini : mini.slice(0, 6)} />

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
