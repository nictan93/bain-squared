import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopicVideoHero } from "@/components/TopicVideoHero";
import { CenteredIntro } from "@/components/CenteredIntro";
import { AltFeatureRows } from "@/components/AltFeatureRows";
import { PublicationGrid } from "@/components/PublicationGrid";
import { RecommendedSidebar } from "@/components/RecommendedSidebar";
import { NewsletterSubscribe } from "@/components/NewsletterSubscribe";
import {
  altFeaturePairs,
  perspectiveTiles,
  publicationsFeaturedHero,
  publicationsRecommended,
} from "@/data/insights-content";

import { byPublication, launchCards, launchFeatured, launchRecommended } from "@/data/launch";

type PublicationConfig = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lede: string;
  image: string;
  introParagraph: string;
  introBefore: string;
  introAccent: string;
  introAfter?: string;
};

const PUB_CONFIG: Record<string, PublicationConfig> = {
  perspectives: {
    eyebrow: "Publication",
    title: "Perspectives",
    titleAccent: "A point of view on the decisions ahead.",
    lede: "Essays on technology, finance and enterprise value, with a clear argument and evidence you can examine.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Perspectives examines a business question and takes a position on it. Each essay connects the evidence to a decision, explains the tradeoffs and sets out where the argument applies.",
    introBefore: "A clearer view of",
    introAccent: "the decision",
    introAfter: ".",
  },
  "squared-reports": {
    eyebrow: "Publication",
    title: "Squared Reports",
    titleAccent: "Deeper analysis for consequential decisions.",
    lede: "Research, analytical frameworks and practical tools for business leaders.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Squared Reports examines complex questions through structured analysis. Each report brings together evidence, assumptions and a practical framework that readers can use in planning and review.",
    introBefore: "Evidence for",
    introAccent: "the decision ahead",
    introAfter: ".",
  },
  "looking-glass": {
    eyebrow: "Publication",
    title: "Looking Glass",
    titleAccent: "Emerging changes and what they mean in practice.",
    lede: "A considered view of developments in technology, business models and the economics of growth.",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Looking Glass examines changes that could affect how businesses operate and create value. Each analysis separates what is observable today from what remains uncertain, and identifies what leaders should watch next.",
    introBefore: "Understand what",
    introAccent: "comes next",
    introAfter: ".",
  },
};

type Props = {
  params: { slug: string };
};

export default function Publication({ params }: Props) {
  const slug = params.slug;
  const config = PUB_CONFIG[slug];
  const articles = byPublication(config?.title || "");

  if (!config) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl" style={{ fontSize: "var(--bs-type-page)", lineHeight: 1.1 , fontFamily: "Bitter, Georgia, serif"}}>Publication not found</h1>
          <p className="mt-4">
            We could not find that publication. Head back to{" "}
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

        <AltFeatureRows items={articles.map(a=>({...a,ctaLabel:"Read "+a.type.toLowerCase(),ctaHref:a.href}))} />

        <PublicationGrid tiles={launchCards.filter(a=>a.category!==config.title).slice(0,3)} />

        <RecommendedSidebar
          featured={launchFeatured}
          recommended={launchRecommended}
        />

        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
}
