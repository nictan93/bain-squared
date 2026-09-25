import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoOverlayHero } from "@/components/VideoOverlayHero";
import { CenteredIntro } from "@/components/CenteredIntro";
import {
  BusinessAreaSwitcher,
  type SwitcherItem,
} from "@/components/BusinessAreaSwitcher";
import { WhitepaperFeature } from "@/components/WhitepaperFeature";
import { SquaredMethod } from "@/components/SquaredMethod";
import { TeamCTA } from "@/components/TeamCTA";

type FinanceConfig = {
  eyebrow: string;
  headline: string;
  sub: string;
  heroImage: string;
  heroImageAlt: string;
  introParagraph: string;
  introBefore: string;
  introAccent: string;
  introAfter?: string;
  switcherEyebrow: string;
  switcherHeading: string;
  switcherItems: SwitcherItem[];
  whitepaperHeadline: string;
  whitepaperBody: string;
  whitepaperImage: string;
};

const FINANCE_CONFIG: Record<string, FinanceConfig> = {
  "fractional-cfo": {
    eyebrow: "Fractional CFO",
    headline:
      "Fractional CFO leadership for your next stage of growth.",
    sub: "Senior finance leadership across planning, cash flow and board reporting.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Operator reviewing a financial model in front of a quiet office window.",
    introParagraph:
      "Growing businesses need financial leadership before every role can be filled internally. We work alongside founders and finance teams on planning, cash flow, reporting and the financial decisions behind the next stage of growth.",
    introBefore: "A finance partner who",
    introAccent: "runs the work",
    introAfter: ".",
    switcherEyebrow: "How the engagement looks",
    switcherHeading: "Choose where you need finance leadership.",
    switcherItems: [
      {
        label: "Budgeting",
        title: "Build a budget around operating priorities.",
        body: "Develop budgets with the people responsible for delivery. Connect spending and revenue assumptions to business priorities, then establish a regular process for review.",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operator team reviewing a budget on a whiteboard.",
        caption: "Built bottom-up, defended top-down.",
      },
      {
        label: "Forecasting",
        title: "Keep forecasts current as conditions change.",
        body: "Maintain cash and operating forecasts as new information arrives. We help define the inputs, responsibilities and scenarios your team needs to update the outlook.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Forecast dashboard on a high-resolution monitor.",
        caption: "Updated weekly, owned daily.",
      },
      {
        label: "Board reporting",
        title: "Bring the decisions into focus.",
        body: "Organize financial results, operating measures and forward-looking commentary around the questions the board needs to resolve. Keep the supporting detail available for review.",
        image:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Board members reviewing a printed financial pack.",
        caption: "The pack that retires the data-quality conversation.",
      },
      {
        label: "Investor communication",
        title: "Keep investors informed with consistent reporting.",
        body: "Prepare financial updates, performance measures and supporting records around a consistent reporting process. Make changes in the business and its assumptions easy to follow.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Founder drafting an investor update on a laptop.",
        caption: "The investor sees the company you are actually building.",
      },
      {
        label: "Cash flow management",
        title: "Make cash requirements visible early.",
        body: "Build a view of receipts, payments and funding needs, with scenarios for timing changes. Give the team a repeatable way to understand its cash position.",
        image:
          "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operator reviewing a printed cash schedule.",
        caption: "Cash, surfaced before it becomes a question.",
      },
      {
        label: "Strategic decisions",
        title: "Test the financial implications of the decision.",
        body: "Evaluate pricing, hiring, investment and financing choices against the financial plan. Set out the assumptions, alternatives and consequences so leadership can make an informed call.",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Founders in conversation around a kitchen table.",
        caption: "Judgment, not just the model output.",
      },
    ],
    whitepaperHeadline:
      "The operator's playbook for agentic AI in the finance function.",
    whitepaperBody:
      "Most AI programs stall because the operating core was never ready. This paper lays out how we sequence agentic build-outs inside the CFO suite, the controls we install before automation goes live, and the intangibles we make visible to the board.",
    whitepaperImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
  "financial-transformation": {
    eyebrow: "Financial Transformation",
    headline:
      "Financial transformation that improves how decisions get made.",
    sub: "Rebuild reporting, planning and controls around the way your business operates.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Finance team reviewing a multi-screen dashboard in a modern office.",
    introParagraph:
      "Finance needs reliable information, clear responsibilities and a repeatable way to support decisions. We improve the reporting, planning and control processes together, working with the team that will run them.",
    introBefore: "Build a finance function",
    introAccent: "you can rely on",
    introAfter: ".",
    switcherEyebrow: "What gets rebuilt",
    switcherHeading: "Choose the part of the function you want rebuilt first.",
    switcherItems: [
      {
        label: "Budgeting",
        title: "Connect planning with the people who run the business.",
        body: "Connect budgets, operating drivers and ownership in one planning process. We improve the source data, model and review responsibilities together.",
        image:
          "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Finance team planning on a digital whiteboard.",
        caption: "Continuous planning, with the controls re-platformed at the same time.",
      },
      {
        label: "Forecasting",
        title: "Build a shared view of expected performance.",
        body: "Bring cash, profit and operating measures into a consistent forecasting process. Make differences between expected and actual performance visible and explainable.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Forecast variance dashboard on multiple monitors.",
        caption: "One forecast, owned across finance and ops.",
      },
      {
        label: "Board reporting",
        title: "Make reporting useful for the next decision.",
        body: "Improve the close, reporting workflow and management commentary. Give finance more capacity to explain performance and support decisions.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Modern boardroom mid-discussion.",
        caption: "The commentary, not the cleanup.",
      },
      {
        label: "Investor communication",
        title: "Prepare consistent information for investors.",
        body: "Establish a reliable process for financial updates, dashboards and supporting documentation. Keep the information consistent across investor conversations.",
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Investor reviewing materials on a tablet.",
        caption: "Each investor conversation starts thirty minutes ahead.",
      },
      {
        label: "Cash flow management",
        title: "Connect working capital with everyday operations.",
        body: "Connect receivables, payables and inventory decisions with cash forecasting. Establish responsibilities and controls that help the team sustain the changes.",
        image:
          "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operator inspecting a printed cash position summary.",
        caption: "Wired into the cadence the operating team already runs.",
      },
      {
        label: "Strategic decisions",
        title: "Bring finance into decisions earlier.",
        body: "Build financial analysis into pricing, investment and resource-allocation decisions. Clarify when finance should be involved and what information leadership needs.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Leadership team in a planning session.",
        caption: "Finance earns the strategic seat, then defends it.",
      },
    ],
    whitepaperHeadline:
      "The operator's playbook for agentic AI in the finance function.",
    whitepaperBody:
      "Most AI programs stall because the operating core was never ready. This paper lays out how we sequence agentic build-outs inside the CFO suite, the controls we install before automation goes live, and the intangibles we make visible to the board.",
    whitepaperImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
};

type Props = {
  params: { slug: string };
};

export default function CapabilityFinance({ params }: Props) {
  const slug = params.slug;
  const config = FINANCE_CONFIG[slug];

  if (!config) {
    return (
      <div className="min-h-screen bs-bg-canvas">
        <Header />
        <main className="bs-container py-32">
          <h1 className="font-display text-4xl">Capability not found</h1>
          <p className="mt-4">
            We could not find that capability. Head back to{" "}
            <a href="#/what-we-do" className="underline">
              What we do
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
        <VideoOverlayHero
          eyebrow={config.eyebrow}
          headline={config.headline}
          sub={config.sub}
          image={config.heroImage}
          imageAlt={config.heroImageAlt}
        />

        <CenteredIntro
          paragraph={config.introParagraph}
          before={config.introBefore}
          accent={config.introAccent}
          after={config.introAfter}
        />

        <BusinessAreaSwitcher
          eyebrow={config.switcherEyebrow}
          heading={config.switcherHeading}
          items={config.switcherItems}
          layout="horizontal"
        />

        <WhitepaperFeature
          headline={config.whitepaperHeadline}
          body={config.whitepaperBody}
          ctaLabel="Download the paper"
          ctaHref="#/contact"
          image={config.whitepaperImage}
          imageAlt="Operator working through the finance playbook in print."
        />

        <SquaredMethod />

        <TeamCTA
          headline="Speak with a Bain Squared CFO."
          body="Bring the question your team has been arguing about. We will tell you on the first call whether a fractional partner or a full transformation is the right next move."
          ctaLabel="Speak with a Bain Squared CFO"
          ctaHref="#/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
