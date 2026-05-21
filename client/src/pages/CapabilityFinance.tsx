import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoOverlayHero } from "@/components/VideoOverlayHero";
import { CenteredIntro } from "@/components/CenteredIntro";
import {
  BusinessAreaSwitcher,
  type SwitcherItem,
} from "@/components/BusinessAreaSwitcher";
import { WhitepaperFeature } from "@/components/WhitepaperFeature";
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
      "A CFO in the room when you need one. None of the overhead when you do not.",
    sub: "Operator-grade finance leadership, plugged into your stack from week one.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Operator reviewing a financial model in front of a quiet office window.",
    introParagraph:
      "We sit alongside founders and operating teams on budgeting, forecasting, board reporting, investor communication, cash flow management, and the strategic financial decisions that decide the next twelve months. Hands on the model, not just hands on the slide.",
    introBefore: "A finance partner who",
    introAccent: "runs the work",
    introAfter: ".",
    switcherEyebrow: "How the engagement looks",
    switcherHeading: "Pick the surface you want covered first.",
    switcherItems: [
      {
        label: "Budgeting",
        title: "A budget the operating team will actually use.",
        body: "We build the budget from the floor up with the operators who own the numbers, install the cadence to maintain it, and tie it back to the metrics the board cares about. The plan survives first contact because the people on the floor helped write it.",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operator team reviewing a budget on a whiteboard.",
        caption: "Built bottom-up, defended top-down.",
      },
      {
        label: "Forecasting",
        title: "Rolling forecasts that flex with the business.",
        body: "Replace the annual plan with a 13-week cash forecast and a rolling 18-month P&L view that updates as new signal comes in. We instrument the inputs so finance is not the bottleneck on every revision.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Forecast dashboard on a high-resolution monitor.",
        caption: "Updated weekly, owned daily.",
      },
      {
        label: "Board reporting",
        title: "Board packs that answer the question before it is asked.",
        body: "A clean monthly pack with the three or four metrics that decide the next decision, a forward-looking commentary section, and a working appendix the board can pressure-test. Built so the meeting moves to the strategic conversation, not the data clean-up.",
        image:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Board members reviewing a printed financial pack.",
        caption: "The pack that retires the data-quality conversation.",
      },
      {
        label: "Investor communication",
        title: "Updates that compound investor confidence.",
        body: "Monthly investor notes, KPI dashboards, and the data-room hygiene that turns the next round from a scramble into a process. Tone calibrated for the audience: operator-honest, finance-tight.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Founder drafting an investor update on a laptop.",
        caption: "The investor sees the company you are actually building.",
      },
      {
        label: "Cash flow management",
        title: "A 13-week cash view you can stake the company on.",
        body: "Direct-method cash forecast updated weekly, with the working scenarios for the upside and the failure modes for the downside. We install the discipline so the founder stops carrying the cash position in their head.",
        image:
          "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operator reviewing a printed cash schedule.",
        caption: "Cash, surfaced before it becomes a question.",
      },
      {
        label: "Strategic decisions",
        title: "Financial judgment in the room when the call gets made.",
        body: "Pricing changes, hiring plans, M&A look-throughs, financing trade-offs. A partner who has run the work argues the both sides with you, then writes the memo that goes to the board.",
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
      "Rebuild the finance function for the decade you are about to operate in.",
    sub: "Re-platform the close, the controls, and the operating model behind them.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Finance team reviewing a multi-screen dashboard in a modern office.",
    introParagraph:
      "We rebuild finance functions around budgeting, forecasting, board reporting, investor communication, cash flow management, and the strategic financial decisions that decide the next twelve months. Real change, with the working papers, the close cadence, and the controls all updated in lock-step.",
    introBefore: "Finance, rebuilt for the",
    introAccent: "agentic decade",
    introAfter: ".",
    switcherEyebrow: "What gets rebuilt",
    switcherHeading: "Choose the part of the function you want rebuilt first.",
    switcherItems: [
      {
        label: "Budgeting",
        title: "A planning cycle that operates at the speed of the business.",
        body: "Replace the annual budget theatre with a continuous planning model. Driver-based, owned by the operating team, with the system of record finance actually trusts. We re-platform the inputs and the controls in the same engagement.",
        image:
          "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Finance team planning on a digital whiteboard.",
        caption: "Continuous planning, with the controls re-platformed at the same time.",
      },
      {
        label: "Forecasting",
        title: "A forecast finance and operations can both stake on.",
        body: "A single shared forecast across cash, P&L, and unit economics. We unify the source data, install the cadence, and instrument the variance so the next conversation is about the why, not the what.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Forecast variance dashboard on multiple monitors.",
        caption: "One forecast, owned across finance and ops.",
      },
      {
        label: "Board reporting",
        title: "Reporting that answers the strategic question.",
        body: "Re-platform the close, automate the pack, and free the finance team to write the commentary that decides the next decision. The board moves from chasing numbers to interrogating strategy.",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Modern boardroom mid-discussion.",
        caption: "The commentary, not the cleanup.",
      },
      {
        label: "Investor communication",
        title: "An investor surface that closes the next round on its own terms.",
        body: "Data room, dashboards, monthly notes, and the cadence between them. We build the surface so each investor conversation starts thirty minutes ahead of where it would have started before.",
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Investor reviewing materials on a tablet.",
        caption: "Each investor conversation starts thirty minutes ahead.",
      },
      {
        label: "Cash flow management",
        title: "Cash discipline installed into the operating model.",
        body: "Direct-method cash, working-capital levers wired to the operating cadence, and the controls to keep the gains. We do not leave a binder, we leave a function that knows where its cash is on any given Wednesday.",
        image:
          "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operator inspecting a printed cash position summary.",
        caption: "Wired into the cadence the operating team already runs.",
      },
      {
        label: "Strategic decisions",
        title: "An operating model that earns its seat at the table.",
        body: "Finance moves from after-the-fact reporting to up-front decision support. Pricing, M&A, capital allocation, organisational design. The function becomes a place strategy is argued, not just measured.",
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
