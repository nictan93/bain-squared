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
    titleAccent: "Short essays from the operator's seat.",
    lede: "One topic, one argument, no filler. Published quarterly by the partners.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Perspectives is our quarterly essay series. Each issue is a single argument from a partner, written for an operator who has to make a real call this week. We do not run survey decks. We run point of view, with the evidence visible.",
    introBefore: "An",
    introAccent: "operator's",
    introAfter: " argument, in print.",
  },
  "squared-reports": {
    eyebrow: "Publication",
    title: "Squared Reports",
    titleAccent: "Long-form research, built to be used.",
    lede: "Twice a year, one deep study with the data, the framework, and the operator playbook behind it.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Squared Reports are our flagship research. Each report is the work of a partner team over months, with primary interviews, original data, and a working playbook on the other side. Built to land inside a planning cycle, not on a shelf.",
    introBefore: "Research that",
    introAccent: "compounds",
    introAfter: ".",
  },
  "looking-glass": {
    eyebrow: "Publication",
    title: "Looking Glass",
    titleAccent: "The signal feed we run internally, now in the open.",
    lede: "Monthly notes on what is breaking, what is working, and what the operators we talk to are quietly worried about.",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=2400&q=80",
    introParagraph:
      "Looking Glass started as the internal note our partners passed around each month. We made it public because the questions we were hearing inside the firm were the same ones our operators were asking in the field. One short note, every month, on what we are watching.",
    introBefore: "The signal,",
    introAccent: "early",
    introAfter: ".",
  },
};

type Props = {
  params: { slug: string };
};

export default function Publication({ params }: Props) {
  const slug = params.slug;
  const config = PUB_CONFIG[slug];

  if (!config) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl">Publication not found</h1>
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

        <AltFeatureRows items={altFeaturePairs} />

        <PublicationGrid tiles={perspectiveTiles} />

        <RecommendedSidebar
          featured={publicationsFeaturedHero}
          recommended={publicationsRecommended}
        />

        <NewsletterSubscribe />
      </main>
      <Footer />
    </div>
  );
}
