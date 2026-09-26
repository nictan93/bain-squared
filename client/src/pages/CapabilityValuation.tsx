import { siteImage, siteAlt } from "@/data/site-media";
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
      "Intangible asset valuations you can explain and defend.",
    sub: "Understand the value of software, intellectual property, data and customer relationships for the decision you need to make.",
    heroImage:
      siteImage("intangibles-valuation", "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80"),
    heroImageAlt:
      siteAlt("intangibles-valuation", "Abstract data visualisation representing intangible asset value."),
    introParagraphs: [
      "An intangible asset valuation starts with a purpose. The question may concern a transaction, financial reporting or a business decision, and that purpose determines the scope and approach.",
      "We assess the asset, its commercial use and the evidence available. The report explains the method and assumptions so your finance team, board and advisers can examine the conclusion.",
    ],
    splitBlocks: [
      {
        eyebrow: "Intangible assets",
        title:
          "Explain the value of your intangible assets.",
        body: "Understand the contribution of software, data, intellectual property and customer relationships to your business. We document the valuation approach, assumptions and supporting evidence for the decision at hand.",
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
        title: "Prepare an ESOP valuation for review.",
        body: "We value employee share options for the agreed reporting or equity-planning purpose. The analysis documents the grant terms, valuation inputs and supporting evidence for review.",
        tags: [
          "Grant terms",
          "Valuation assumptions",
          "Financial reporting",
          "Audit support",
          "Equity planning",
        ],
      },
    ],
    methodImage:
      siteImage("intangibles-valuation-method", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80"),
    methodImageAlt: siteAlt("intangibles-valuation-method", "A quiet modern office interior."),
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook for",
      "defensible intangibles.",
    ],
    methodBody:
      "Confirm the valuation purpose and asset scope. Select the approach, document the assumptions and prepare the report and working papers for review.",
    teamHeadline: "Talk to our valuation team.",
    teamBody:
      "Tell us what needs to be valued, why the valuation is needed and who will review it. We will discuss the scope, information requirements and timing.",
    teamCTA: "Talk to our valuation team",
  },
  "esop-valuation": {
    eyebrow: "ESOP Valuation",
    headline:
      "Independent ESOP valuations for reporting and equity decisions.",
    sub: "Document the value of employee share options, with the purpose, assumptions and relevant reporting requirements made clear.",
    heroImage:
      siteImage("esop-valuation", "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=2400&q=80"),
    heroImageAlt:
      siteAlt("esop-valuation", "Financial documents fanned across a wooden boardroom table."),
    introParagraphs: [
      "Employee share options require clear grant terms and a valuation suited to their purpose. Changes in the business, the grant conditions or the reporting requirements can change the analysis.",
      "We provide independent ESOP valuations for audit, financial reporting, and equity planning, helping companies quantify fair value and share-based compensation expenses. Documented for review by your finance team, board and auditor.",
    ],
    splitBlocks: [
      {
        eyebrow: "ESOP valuations",
        title: "Prepare an ESOP valuation for review.",
        body: "We document the valuation approach, inputs and assumptions, and prepare supporting working papers. Questions from the finance team and auditor can then be addressed against a clear record.",
        tags: [
          "Grant terms",
          "Valuation assumptions",
          "Financial reporting",
          "Audit support",
          "Equity planning",
        ],
      },
      {
        eyebrow: "Intangible assets",
        title: "Explain the value of your intangible assets.",
        body: "We assess identifiable intangible assets for a defined purpose. The report distinguishes the valuation conclusion from any separate accounting recognition or disclosure decision.",
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
      siteImage("esop-valuation-method", "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80"),
    methodImageAlt: siteAlt("esop-valuation-method", "Operator reviewing a financial model at a quiet desk."),
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook for",
      "audit-ready ESOP.",
    ],
    methodBody:
      "Confirm the grant terms and valuation purpose, select the method, prepare the analysis and support review of the assumptions and conclusion.",
    teamHeadline: "Talk to our valuation team.",
    teamBody:
      "Share the grant or reporting question, your timetable and the available information. We will discuss the valuation scope and the people who need to review it.",
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
          <h1 className="font-display text-4xl" style={{ fontSize: "var(--bs-type-page)", lineHeight: 1.1 , fontFamily: "Bitter, Georgia, serif"}}>Capability not found</h1>
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
          linkHref="/what-we-do"
        />

        <SquaredMethod />

        <TeamCTA
          headline={config.teamHeadline}
          body={config.teamBody}
          ctaLabel={config.teamCTA}
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
