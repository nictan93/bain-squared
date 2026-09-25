import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopicVideoHero } from "@/components/TopicVideoHero";
import { CenteredIntro } from "@/components/CenteredIntro";
import { ArticleCardGrid } from "@/components/ArticleCardGrid";
import { FeaturedClientStoryCarousel } from "@/components/FeaturedClientStoryCarousel";
import { CTAStrip } from "@/components/CTAStrip";
import {
  articlesByTopic,
  featuredClientStories,
} from "@/data/insights-content";

import { launchCards } from "@/data/launch";

type TopicConfig = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lede: string;
  image: string;
  introParagraph: string;
  introBefore: string;
  introAccent: string;
  introAfter?: string;
  gridHeading: string;
};

const TOPIC_CONFIG: Record<string, TopicConfig> = {
  ai: {
    eyebrow: "Featured topic",
    title: "Agentic AI",
    titleAccent: "Putting AI into operation.",
    lede: "Practical analysis of AI workflows, oversight and the decisions behind deployment.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Putting AI into operation requires decisions about access, responsibility and review. Explore how to choose suitable work, prepare reliable information and assess a system once people depend on it.",
    introBefore: "From experiment to",
    introAccent: "operating layer",
    introAfter: ".",
    gridHeading: "Explore the topic",
  },
  "financial-transformation": {
    eyebrow: "Featured topic",
    title: "Financial Transformation",
    titleAccent: "Finance built around better decisions.",
    lede: "Practical reading on reporting, forecasting, controls and finance leadership.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "A useful finance function connects reliable information with the people making decisions. Explore ways to improve the close, maintain forecasts and clarify the responsibilities behind reporting and control.",
    introBefore: "Finance, rebuilt for the",
    introAccent: "operator",
    introAfter: ".",
    gridHeading: "Explore the topic",
  },
  "intangibles-valuation": {
    eyebrow: "Featured topic",
    title: "Intangible Asset Valuation",
    titleAccent: "Understanding the value behind the business.",
    lede: "Analysis of intangible assets and employee share options, with attention to purpose, assumptions and evidence.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Software, intellectual property, data and customer relationships can contribute to business value in different ways. Explore how to identify those assets and examine a valuation. Related reading on employee share options addresses a separate reporting and equity-planning question.",
    introBefore: "Make the intangible",
    introAccent: "defensible",
    introAfter: ".",
    gridHeading: "Explore the topic",
  },
  "growth-strategy": {
    eyebrow: "Featured topic",
    title: "Growth Strategy",
    titleAccent: "Connecting growth plans with operating decisions.",
    lede: "Perspectives on pricing, resource allocation and the capacity needed to support growth.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Growth depends on choices about customers, pricing and how work gets delivered. Explore the financial and operating implications of those choices, including the assumptions that need to be tested before resources are committed.",
    introBefore: "Growth that",
    introAccent: "compounds",
    introAfter: ".",
    gridHeading: "Explore the topic",
  },
};

type Props = {
  params: { slug: string };
};

export default function FeaturedTopic({ params }: Props) {
  const slug = params.slug;
  const config = TOPIC_CONFIG[slug];
  const articles = launchCards.filter(a=>a.tags.includes(slug));

  if (!config || !articles) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl" style={{ fontSize: "var(--bs-type-page)", lineHeight: 1.1 , fontFamily: "Bitter, Georgia, serif"}}>Topic not found</h1>
          <p className="mt-4">
            We could not find that topic. Head back to{" "}
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
        <TopicVideoHero
          title={config.title}
          titleAccent={config.titleAccent}
          lede={config.lede}
          image={config.image}
        />

        <CenteredIntro
          paragraph={config.introParagraph}
          before={config.introBefore}
          accent={config.introAccent}
          after={config.introAfter}
        />

        <ArticleCardGrid heading={config.gridHeading} articles={articles} />

        <FeaturedClientStoryCarousel stories={featuredClientStories} />

        <CTAStrip
          text="Discuss the decision facing your business."
          buttonLabel="Talk to us"
          href="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
