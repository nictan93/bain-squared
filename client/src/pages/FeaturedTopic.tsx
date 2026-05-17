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
    titleAccent: "Built to act, not just chat.",
    lede: "What operators actually need to know about agents, governance, and the new shape of work.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Agentic AI is moving from demo to operating system. The operators we work with are past the pilot phase and into the harder questions: which decisions should an agent own, how do you supervise a fleet of them, and what does the org chart look like when software starts doing the coordinating. The pieces below are what we are seeing inside the room.",
    introBefore: "From experiment to",
    introAccent: "operating layer",
    introAfter: ".",
    gridHeading: "What we have been thinking about",
  },
  "financial-transformation": {
    eyebrow: "Featured topic",
    title: "Financial Transformation",
    titleAccent: "The CFO suite, rebuilt for an agentic decade.",
    lede: "Operator notes on closing faster, forecasting better, and rebuilding the finance function around real signal.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Finance is the function under the most pressure to change and the least permission to break. The operators we work with are compressing the close, replacing the annual plan with rolling forecasts, and installing the controls they will wish they had at the next raise. Real change, with the working papers attached.",
    introBefore: "Finance, rebuilt for the",
    introAccent: "operator",
    introAfter: ".",
    gridHeading: "What we have been thinking about",
  },
  "intangibles-valuation": {
    eyebrow: "Featured topic",
    title: "Intangibles Valuation",
    titleAccent: "Putting a defensible number on what you cannot see.",
    lede: "How to price brand, IP, data, and ESOPs in a way that holds up to the audit committee.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Most of the value in a modern business sits in assets the balance sheet does not see. Brand equity, customer data, IP, ESOP pools. Operators ask the same question every time: what is it worth, and can we defend the number. The pieces below are how we get from feel to figure inside the data room.",
    introBefore: "Make the intangible",
    introAccent: "defendable",
    introAfter: ".",
    gridHeading: "What we have been thinking about",
  },
  "growth-strategy": {
    eyebrow: "Featured topic",
    title: "Growth Strategy",
    titleAccent: "Plans that compound, not plans that present well.",
    lede: "Operator views on go-to-market, pricing, and the three questions behind every growth plan worth running.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Growth strategy is mostly written for the board and rarely written for the operator who has to run it on Monday. We work the other way around. Strip the deck, three questions decide whether the plan compounds or stalls. The pieces below are what we have been seeing inside that work.",
    introBefore: "Growth that",
    introAccent: "compounds",
    introAfter: ".",
    gridHeading: "What we have been thinking about",
  },
};

type Props = {
  params: { slug: string };
};

export default function FeaturedTopic({ params }: Props) {
  const slug = params.slug;
  const config = TOPIC_CONFIG[slug];
  const articles = articlesByTopic[slug];

  if (!config || !articles) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl">Topic not found</h1>
          <p className="mt-4">
            We could not find that topic. Head back to{" "}
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

  return (
    <div className="min-h-screen bs-bg-canvas">
      <Header />
      <main>
        <TopicVideoHero
          eyebrow={config.eyebrow}
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
          text="We've been through growth, let us help."
          buttonLabel="Talk to us"
          href="#/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
