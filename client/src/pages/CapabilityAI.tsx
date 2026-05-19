import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoOverlayHero } from "@/components/VideoOverlayHero";
import { IntroStatsRow } from "@/components/IntroStatsRow";
import {
  BusinessAreaSwitcher,
  type SwitcherItem,
} from "@/components/BusinessAreaSwitcher";
import { MethodOverlay } from "@/components/MethodOverlay";
import { GrowthPartnerRecommender } from "@/components/GrowthPartnerRecommender";
import { SquaredMethod } from "@/components/SquaredMethod";
import { TeamCTA } from "@/components/TeamCTA";

type Stat = {
  value: string;
  body: string;
  color?: "rose" | "amber" | "teal" | "forest";
};

type AIConfig = {
  eyebrow: string;
  headline: string;
  sub: string;
  heroImage: string;
  heroImageAlt: string;
  introParagraphs: string[];
  stats: Stat[];
  switcherHeading: string;
  switcherItems: SwitcherItem[];
  methodImage: string;
  methodImageAlt: string;
  methodHeadlineLines: string[];
  methodBody: string;
  recommenderCards: { title: string; body: string }[];
};

const AI_CONFIG: Record<string, AIConfig> = {
  "agentic-ai-automation": {
    eyebrow: "Agentic AI Automation",
    headline: "Stop stalling, start scaling. Deliver real AI value.",
    sub: "We design, ship, and defend agents that earn their seat at the operating table.",
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Agentic AI infrastructure visualised over a city skyline.",
    introParagraphs: [
      "Modernising core systems while scaling AI can stall pilots, drive complexity, and burn ROI. Most agent programs die in the gap between the demo and the operating reality.",
      "We change that. With the Squared Method, we connect modern architecture with production-ready agents that power intelligent workflows, copilots, and revenue motions. Together, they form an operating layer where data, services, and models are reused, helping your teams move past experimentation and deliver lasting AI impact.",
    ],
    stats: [
      {
        value: "60%",
        body: "faster build cycles after we wire your agentic stack into the operating core.",
        color: "rose",
      },
      {
        value: "90%",
        body: "reduction in manual data search with a multi-agent retrieval system for a healthcare operator.",
        color: "amber",
      },
      {
        value: "95%",
        body: "target precision achieved on an upgraded demand-forecasting model in under five weeks.",
        color: "teal",
      },
    ],
    switcherHeading: "Which part of the business do you want to start with?",
    switcherItems: [
      {
        label: "Sales",
        title: "Agents that compound pipeline.",
        body: "Triage inbound, qualify with operator-grade scoring, draft outreach in the rep's voice, and book meetings without a human in the loop. Hand-off to a closer happens with the full context the agent has gathered, not a one-line note.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Sales operators reviewing a pipeline dashboard.",
        caption:
          "Pipeline tooling, rebuilt with agent retrieval and operator-grade scoring.",
      },
      {
        label: "Customer Service",
        title: "Resolve the ticket, save the relationship.",
        body: "A supervised agent fleet that triages, drafts, and resolves the majority of tickets, escalates the right cases, and writes the postmortem the team will actually read. Built to lower handle time without lowering NPS.",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Customer service operators on a real-time queue.",
        caption: "Tier-1 and tier-2 coverage with a human in the loop where it matters.",
      },
      {
        label: "Operations",
        title: "Take the manual work off the floor.",
        body: "Order-to-cash, invoice reconciliation, vendor onboarding, exception routing. We map the bottleneck, deploy the agent, and install the controls before the next audit cycle so the savings are defensible.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operations team running a live workflow.",
        caption: "Operating change inside your stack, not a parallel sandbox.",
      },
      {
        label: "Marketing",
        title: "From campaign briefs to compounding content.",
        body: "Brief intake, creative production, landing pages, A/B variants, and reporting handled by a co-ordinated agent team. Brand-safe by design with editor approval at the points that matter.",
        image:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Marketing team reviewing campaign creative.",
        caption: "Brand-safe creative, shipped at the cadence the market actually moves.",
      },
    ],
    methodImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "An empty modern office corridor.",
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook",
      "for getting AI to work.",
    ],
    methodBody:
      "See how we diagnose the real bottleneck, design the system you actually need, deploy it inside your stack, and defend the result when the board or auditor pushes back.",
    recommenderCards: [
      {
        title: "Static boxes",
        body: "The decisioning is hard-coded in spreadsheets and tribal knowledge. We replace it with a small set of supervised agents that learn the rules and write them back.",
      },
      {
        title: "Manual work",
        body: "Hours lost to copy-paste, reconciliations, and inbox triage. We map the highest-volume tasks, automate inside your stack, and instrument the outcome so it never silently regresses.",
      },
      {
        title: "Messy data",
        body: "Disconnected systems, duplicated records, no system of record. We stand up the retrieval layer and the schema agents need, then ship the first agent on top of it in weeks.",
      },
    ],
  },
  "managed-services": {
    eyebrow: "Managed Service",
    headline: "Let us drive ROI with results, not retainers.",
    sub: "Operator-led delivery for the work you do not want to staff in-house.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Operator team running a managed service desk in real time.",
    introParagraphs: [
      "Hiring full-time for every operating motion is slow, expensive, and the wrong instinct for work that compounds quickly. Most growth teams already know what needs shipping. They just do not have the bench.",
      "We run the bench for you. A managed pod of operators, engineers, and designers, plugged into your stack with weekly outcomes you can audit. Priced on results we are accountable to, not hours we bill.",
    ],
    stats: [
      {
        value: "3.2x",
        body: "more qualified leads delivered each month after the first 60 days of the managed program.",
        color: "rose",
      },
      {
        value: "92%",
        body: "of inbound callbacks handled within the SLA, with full transcript and outcome handed back to the team.",
        color: "amber",
      },
      {
        value: "40%",
        body: "lower cost per finished design mockup versus an in-house creative team carrying the same volume.",
        color: "teal",
      },
    ],
    switcherHeading: "Pick the outcome you want us accountable to.",
    switcherItems: [
      {
        label: "Sales leads delivered",
        title: "Pipeline you can forecast against.",
        body: "Inbound triage, outbound sequencing, enrichment, and SDR-grade follow-up handled by a dedicated pod. Your reps inherit briefed meetings with a context note attached, not a calendar invite and a vague hope.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Sales pod working through a pipeline review.",
        caption: "Pipeline owned end to end and reported against a single weekly target.",
      },
      {
        label: "Callbacks handled on time",
        title: "Coverage your customers can feel.",
        body: "A trained customer pod takes the queue across business hours and beyond. Full case history, escalation paths, and a tight handover loop with your in-house team so nothing falls through.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Customer success pod monitoring a live queue.",
        caption: "Live SLAs reported back to you each week, not buried in a portal.",
      },
      {
        label: "Backend operations efficient",
        title: "The unsexy work, done right.",
        body: "Order ops, invoice reconciliation, vendor onboarding, returns, and the long tail of finance ops. We map the workflow, take it on, and shrink the cost curve with automation as soon as the volume justifies it.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operations pod reviewing a backend workflow.",
        caption: "Run the work, then automate it. In that order.",
      },
      {
        label: "Design mockups done",
        title: "A creative pod that ships.",
        body: "Brand-safe mockups, landing pages, and campaign creative produced inside your design system. Briefed daily, reviewed weekly, shipped at the cadence the market actually moves.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Designer mocking up a landing page.",
        caption: "Inside your design system, on your file structure, on your brand.",
      },
    ],
    methodImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A modern open-plan office.",
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook for",
      "managed delivery that lands.",
    ],
    methodBody:
      "Diagnose the real bottleneck. Design the operating change. Deploy the pod inside your stack. Defend the outcome with weekly numbers that survive board scrutiny.",
    recommenderCards: [
      {
        title: "Static boxes",
        body: "Org charts that look complete on paper but leave critical work uncovered. We slot a pod into the gaps and bring the operating cadence with us.",
      },
      {
        title: "Manual work",
        body: "Hours lost to tasks the team should not be doing. The pod takes the work, runs it to SLA, and automates the long tail so the cost curve bends.",
      },
      {
        title: "Headcount heavy",
        body: "Plans that depend on hiring you cannot make happen fast enough. The pod gives you the capacity in weeks, with a clean off-ramp when in-house is ready.",
      },
    ],
  },
  "llm-optimization": {
    eyebrow: "LLM Optimization (LLMO)",
    headline: "Get seen in the age of AI. GEO and AEO on top of SEO.",
    sub: "Rank in answer engines, win the recommendation, and grow organic the operator way.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Abstract circuit pattern representing answer-engine retrieval.",
    introParagraphs: [
      "Search is no longer a list of blue links. Answer engines, copilots, and recommender models decide which brands get seen, named, and trusted. Most marketing teams are still optimising for the previous decade.",
      "We help you win the new surface. Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), and the SEO foundation underneath. Auditable, defensible, and tied back to traffic the CFO will recognise.",
    ],
    stats: [
      {
        value: "5x",
        body: "more brand mentions across answer engines after the first quarter of structured retrieval work.",
        color: "rose",
      },
      {
        value: "47%",
        body: "growth in qualified organic traffic across the operators we worked with last calendar year.",
        color: "amber",
      },
      {
        value: "78%",
        body: "of priority queries return your brand as a recommended answer after the GEO/AEO program ships.",
        color: "teal",
      },
    ],
    switcherHeading: "Where do you want to show up first?",
    switcherItems: [
      {
        label: "Rank and get recommended",
        title: "Win the recommendation, not just the click.",
        body: "Map the answer-engine queries that matter for your category, build the retrievable content that earns the citation, and instrument the lift. Get named by ChatGPT, Claude, Perplexity, and Gemini for the questions your buyers are already asking.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Marketer reviewing answer-engine rankings.",
        caption: "Citations tracked weekly across the answer engines your buyers use.",
      },
      {
        label: "Grow organic traffic",
        title: "An SEO foundation that still works in the AI era.",
        body: "Technical SEO, schema, content architecture, and the editorial cadence that compounds. Built so the same pages that rank for humans also earn the retrieval pass from the answer engines.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Analytics dashboard showing organic traffic growth.",
        caption: "Compound growth, measured against the metrics finance accepts.",
      },
      {
        label: "Website optimization",
        title: "Pages that load fast and convert fast.",
        body: "Core Web Vitals, conversion architecture, structured data, and the editorial workflow to keep the gains. We work inside your stack so the gains do not regress the next time marketing ships a campaign.",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Engineer reviewing site performance metrics.",
        caption: "Performance and conversion treated as one engineering surface.",
      },
    ],
    methodImage:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A quiet modern interior with neutral lighting.",
    methodHeadlineLines: [
      "The Squared Method.",
      "The operator's playbook",
      "for being found by AI.",
    ],
    methodBody:
      "Diagnose what is breaking discovery today. Design the retrieval and content stack. Deploy across answer engines and classic search. Defend the lift with traffic the CFO recognises.",
    recommenderCards: [
      {
        title: "Static boxes",
        body: "A site map and content calendar that no longer reflects how buyers search. We rebuild the architecture around the queries you actually need to win.",
      },
      {
        title: "Manual work",
        body: "Hours lost to keyword spreadsheets and ad-hoc audits. We replace it with an instrumented loop that surfaces the next move every week.",
      },
      {
        title: "Messy data",
        body: "Conversion and traffic data scattered across analytics, CRM, and the CMS. We unify the signal so the same dashboard answers marketing's question and finance's question.",
      },
    ],
  },
};

type Props = {
  params: { slug: string };
};

export default function CapabilityAI({ params }: Props) {
  const slug = params.slug;
  const config = AI_CONFIG[slug];

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

        <IntroStatsRow
          paragraphs={config.introParagraphs}
          stats={config.stats}
        />

        <BusinessAreaSwitcher
          heading={config.switcherHeading}
          items={config.switcherItems}
        />

        <MethodOverlay
          image={config.methodImage}
          imageAlt={config.methodImageAlt}
          headlineLines={config.methodHeadlineLines}
          body={config.methodBody}
          linkLabel="Learn more"
          linkHref="#/what-we-do"
        />

        <GrowthPartnerRecommender cards={config.recommenderCards} />

        <SquaredMethod />

        <TeamCTA
          headline="Talk to our AI team."
          body="Bring the question your team has been arguing about. We will tell you on the first call whether agents, a managed pod, or an LLMO program is the right next move."
          ctaLabel="Talk to our AI team"
          ctaHref="#/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
