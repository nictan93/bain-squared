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
    headline: "Agentic AI built for the work your business runs.",
    sub: "We design, deploy and operate supervised AI workflows across sales, marketing and operations.",
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Agentic AI infrastructure visualised over a city skyline.",
    introParagraphs: [
      "AI becomes useful when it fits a specific workflow and the people responsible for it. Start with the work to be improved, the information it depends on and the decisions a system can safely take.",
      "We design and implement supervised AI workflows within your existing systems. The engagement includes integration, testing, human review and ongoing operation, with measures agreed around the business need.",
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
        title: "Support the work between enquiry and meeting.",
        body: "Connect enquiry intake, qualification, follow-up and meeting preparation. Define what the agent can do, when a person should review it and what context passes to your sales team.",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Sales operators reviewing a pipeline dashboard.",
        caption:
          "Pipeline tooling, rebuilt with agent retrieval and operator-grade scoring.",
      },
      {
        label: "Customer Service",
        title: "Resolve routine enquiries with clear escalation.",
        body: "Use approved information to triage and respond to routine enquiries. Route exceptions to the right people and review the quality of responses against your service standards.",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Customer service operators on a real-time queue.",
        caption: "Tier-1 and tier-2 coverage with a human in the loop where it matters.",
      },
      {
        label: "Operations",
        title: "Connect the handoffs in everyday operations.",
        body: "Improve workflows such as order processing, invoice reconciliation and vendor onboarding. Build in exception handling, ownership and checks before putting automation into use.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operations team running a live workflow.",
        caption: "Operating change inside your stack, not a parallel sandbox.",
      },
      {
        label: "Marketing",
        title: "Keep content production connected to review.",
        body: "Connect briefing, drafting, design and reporting within your existing marketing workflow. Keep editorial approval and brand requirements explicit at each handoff.",
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
        title: "Rigid processes",
        body: "Decision rules are spread across spreadsheets and individual know-how. We document the rules and exceptions, then build supervised workflows around them.",
      },
      {
        title: "Manual work",
        body: "Copying data, reconciling records and sorting inboxes take time away from higher-value work. We automate suitable tasks in your existing systems, with checks and a named owner.",
      },
      {
        title: "Disconnected data",
        body: "When systems hold conflicting or incomplete records, automation becomes unreliable. We connect the information a workflow needs and establish how it will be maintained.",
      },
    ],
  },
  "managed-services": {
    eyebrow: "Managed Service",
    headline: "Managed services with ownership of the outcome.",
    sub: "A dedicated operating team, measured against the work you need delivered.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Operator team running a managed service desk in real time.",
    introParagraphs: [
      "A growing workload does not always justify building every capability in-house. Managed services provide operating capacity around a defined process, with responsibilities and service expectations agreed at the outset.",
      "Our teams work within your tools and processes, manage the day-to-day delivery and review performance with you. The scope can develop as the work changes or your internal team takes on more responsibility.",
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
    switcherHeading: "Choose the work you need us to run.",
    switcherItems: [
      {
        label: "Sales leads delivered",
        title: "Support a consistent sales follow-up process.",
        body: "A dedicated team manages enquiry handling, qualification and follow-up against agreed criteria. Your sales team receives the relevant background and a clear next action.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Sales pod working through a pipeline review.",
        caption: "Pipeline owned end to end and reported against a single weekly target.",
      },
      {
        label: "Callbacks handled on time",
        title: "Provide customer support with clear handovers.",
        body: "Agree the coverage, service expectations and escalation routes your customers need. Maintain case history and clear handovers with your internal team.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Customer success pod monitoring a live queue.",
        caption: "Live SLAs reported back to you each week, not buried in a portal.",
      },
      {
        label: "Backend operations efficient",
        title: "Keep recurring operations moving.",
        body: "Take on defined workflows across orders, reconciliation, vendor administration and finance operations. Improve the process and introduce automation where it is useful.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Operations pod reviewing a backend workflow.",
        caption: "Run the work, then automate it. In that order.",
      },
      {
        label: "Design mockups done",
        title: "Add capacity to your design and marketing team.",
        body: "Produce design and campaign assets within your brand system. Agree the brief, review process and delivery schedule so your team can manage the work confidently.",
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
        title: "Rigid processes",
        body: "Org charts that look complete on paper but leave critical work uncovered. We slot a pod into the gaps and bring the operating cadence with us.",
      },
      {
        title: "Manual work",
        body: "Hours lost to tasks the team should not be doing. The pod takes the work, runs it to SLA, and automates the long tail so the cost curve bends.",
      },
      {
        title: "Limited capacity",
        body: "Plans that depend on hiring you cannot make happen fast enough. The pod gives you the capacity in weeks, with a clean off-ramp when in-house is ready.",
      },
    ],
  },
  "llm-optimization": {
    eyebrow: "LLM Optimization (LLMO)",
    headline: "Help buyers find your business through AI search.",
    sub: "LLM Optimization connects clear content, sound search fundamentals and ongoing visibility monitoring.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt:
      "Abstract circuit pattern representing answer-engine retrieval.",
    introParagraphs: [
      "Buyers discover businesses through search results, AI answers and recommendations. Buyers still need reliable information about what a company does and why it fits their needs.",
      "We improve the material buyers and search systems use to understand your company, then track visibility and enquiries over time. The work combines technical search fundamentals, clear service information and evidence your team can maintain.",
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
        title: "Make your business easier to understand and cite.",
        body: "Identify the questions buyers ask and improve the information that answers them. Track mentions, citations and enquiries over time without treating visibility in any particular AI answer as guaranteed.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Marketer reviewing answer-engine rankings.",
        caption: "Citations tracked weekly across the answer engines your buyers use.",
      },
      {
        label: "Grow organic traffic",
        title: "Strengthen the search foundations.",
        body: "Improve technical search accessibility, page structure and useful content. Keep service information clear, consistent and easy for people and search systems to find.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Analytics dashboard showing organic traffic growth.",
        caption: "Compound growth, measured against the metrics finance accepts.",
      },
      {
        label: "Website optimization",
        title: "Help visitors find the information they need.",
        body: "Improve page performance, content structure and the steps from interest to enquiry. Make the site straightforward to maintain as your services and campaigns change.",
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
        title: "Rigid processes",
        body: "A site map and content calendar that no longer reflects how buyers search. We rebuild the architecture around the queries you actually need to win.",
      },
      {
        title: "Manual work",
        body: "Hours lost to keyword spreadsheets and ad-hoc audits. We replace it with an instrumented loop that surfaces the next move every week.",
      },
      {
        title: "Disconnected data",
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
