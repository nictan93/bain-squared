import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoOverlayHero } from "@/components/VideoOverlayHero";
import { IntroStatsRow } from "@/components/IntroStatsRow";
import { IntangiblesSplit } from "@/components/IntangiblesSplit";
import { MethodOverlay } from "@/components/MethodOverlay";
import { SquaredMethod } from "@/components/SquaredMethod";
import { TeamCTA } from "@/components/TeamCTA";

type ValuationConfig = {
  eyebrow: string;
  headline: string;
  sub: string;
  heroImage: string;
  heroImageAlt: string;
  /** Intro left-column prose, two paragraphs. */
  introParagraphs: string[];
  splitBlocks: [
    {
      eyebrow: string;
      title: string;
      body: string;
      tags?: string[];
    },
    {
      eyebrow: string;
      title: string;
      body: string;
      tags?: string[];
    },
  ];
  methodImage: string;
  methodImageAlt: string;
  methodHeadlineLines: string[];
  methodBody: string;
  teamHeadline: string;
  teamBody: string;
  teamCTA: string;
};

const VALUATION_CONFIG: Record<string, ValuationConfig> = {
  "intangibles-valuation": {
    eyebrow: "Intangible Asset Valuation",
    headline:
      "The value you have built lives in intangibles. We make it defensible.",
    sub: "We help founders preparing for exit, ESOP rounds, intangible-heavy companies, and PE sponsors who need defensible valuations.",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Abstract data visualisation representing intangible asset value.",
    introParagraphs: [
      "The value you have built lives in intangibles, options, and operating leverage. We make that value defensible on paper and in the room.",
      "We value data, software, IP, brand, customer relationships, and proprietary systems to help companies make hidden enterprise value visible and defensible. Independent, audit-ready, and tied back to the operating story the board has been telling all year.",
    ],
    splitBlocks: [
      {
        eyebrow: "Intangible assets",
        title:
          "Show a defensible valuation when you fundraise.",
        body: "Increase the potential value of your company by adding tangible value to your intangible assets, while decreasing the risk of leakage. Here are some examples of undervalued assets we make visible on the balance sheet and in the data room.",
        tags: [
          "Brand",
          "IP",
          "Data",
          "Patents",
          "Trademarks",
          "Customer relationships",
        ],
      },
      {
        eyebrow: "ESOP valuations",
        title: "Be prepared for stock-option audit requirements.",
        body: "We provide independent ESOP valuations for audit, financial reporting, and equity planning, helping companies quantify fair value and share-based compensation expenses. Built for the auditor, defensible to the board.",
        tags: [
          "409A",
          "IFRS 2",
          "ASC 718",
          "Audit support",
          "Equity planning",
        ],
      },
    ],
    methodImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A quiet modern office interior.",
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook for",
      "defensible intangibles.",
    ],
    methodBody:
      "Diagnose where value is hiding. Design the valuation approach the auditor will accept. Deploy the working papers inside your stack. Defend the number when the board, the auditor, or the next round pushes back.",
    teamHeadline: "Talk to our valuation team.",
    teamBody:
      "Bring the question your team has been arguing about. We will tell you on the first call whether the right next move is a single valuation, a portfolio of intangibles, or the full audit-ready package.",
    teamCTA: "Talk to our valuation team",
  },
  "esop-valuation": {
    eyebrow: "ESOP Valuation",
    headline:
      "Independent ESOP valuations the auditor accepts and the board can defend.",
    sub: "Built for founders preparing for exit, ESOP rounds, intangible-heavy companies, and PE sponsors who need defensible valuations.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Financial documents fanned across a wooden boardroom table.",
    introParagraphs: [
      "Stock-option grants are part of the operating system of a modern company. The valuation that sits behind them is where the audit and the board ask their hardest questions. We make sure the answer is ready before they ask.",
      "We provide independent ESOP valuations for audit, financial reporting, and equity planning, helping companies quantify fair value and share-based compensation expenses. Built to the standard the auditor accepts and the operator can defend.",
    ],
    splitBlocks: [
      {
        eyebrow: "ESOP valuations",
        title: "Be prepared for stock-option audit requirements.",
        body: "We provide independent ESOP valuations for audit, financial reporting, and equity planning, helping companies quantify fair value and share-based compensation expenses. Each report comes with the working papers the auditor will request before they request them.",
        tags: [
          "409A",
          "IFRS 2",
          "ASC 718",
          "Audit support",
          "Equity planning",
        ],
      },
      {
        eyebrow: "Intangible assets",
        title: "Show a defensible valuation when you fundraise.",
        body: "We value data, software, IP, brand, customer relationships, and proprietary systems to help companies make hidden enterprise value visible and defensible. The number lands in the data room with the working papers behind it.",
        tags: [
          "Brand",
          "IP",
          "Data",
          "Patents",
          "Trademarks",
          "Customer relationships",
        ],
      },
    ],
    methodImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "Operator reviewing a financial model at a quiet desk.",
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook for",
      "audit-ready ESOP.",
    ],
    methodBody:
      "Diagnose the equity story. Design the valuation approach the auditor will accept. Deploy the working papers and the comp expense. Defend the number when the board, the auditor, or the next round pushes back.",
    teamHeadline: "Talk to our valuation team.",
    teamBody:
      "Bring the equity question your team has been arguing about. We will tell you on the first call whether the right next move is an ESOP valuation, a full intangibles report, or the audit-ready package.",
    teamCTA: "Talk to our valuation team",
  },
};

type Props = {
  params: { slug: string };
};

export default function CapabilityValuation({ params }: Props) {
  const slug = params.slug;
  const config = VALUATION_CONFIG[slug];

  if (!config) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl">Capability not found</h1>
          <p className="mt-4">
            We could not find that capability. Head back to{" "}
            <a href="/what-we-do" className="underline">
              What we do
            </a>
            .
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const stats = [
    {
      value: "100%",
      body: "of ESOP reports we issue ship with the audit working papers attached, ready for the first auditor request.",
      color: "rose" as const,
    },
    {
      value: "45%",
      body: "average uplift in defensible enterprise value once intangibles are correctly recognised and supported.",
      color: "amber" as const,
    },
    {
      value: "12d",
      body: "median turnaround from kickoff to defensible draft on a standard intangibles package.",
      color: "teal" as const,
    },
  ];

  return (
    <div className="min-h-screen bs-bg-canvas">
      <Header />
      <main>
        <VideoOverlayHero
          eyebrow={config.eyebrow}
          headline={config.headline}
          sub={config.sub}
          image={config.heroImage}
          imageAlt={config.heroImageAlt}
        />

        <IntroStatsRow paragraphs={config.introParagraphs} stats={stats} />

        <IntangiblesSplit blocks={config.splitBlocks} />

        <MethodOverlay
          image={config.methodImage}
          imageAlt={config.methodImageAlt}
          headlineLines={config.methodHeadlineLines}
          body={config.methodBody}
          linkLabel="Learn more"
          linkHref="#/what-we-do"
        />

        <SquaredMethod />

        <TeamCTA
          headline={config.teamHeadline}
          body={config.teamBody}
          ctaLabel={config.teamCTA}
          ctaHref="#/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
