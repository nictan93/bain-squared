/**
 * Insights content fixtures.
 *
 * One central source of placeholder articles so every Insights-family page
 * (overview, featured topics, publications, all-insights lists) shares a
 * consistent voice and look. All hrefs point to "#/contact" since article
 * detail pages are not built yet.
 */

import type { ArticleCard } from "@/components/ArticleCardGrid";
import type { MiniArticle } from "@/components/MiniArticleGrid";
import type { FeaturedArticle } from "@/components/FeaturedArticleLayout";
import type { ClientStory } from "@/components/FeaturedClientStoryCarousel";
import type {
  FeaturedHero,
  RecommendedItem,
} from "@/components/RecommendedSidebar";
import type { PublicationTile } from "@/components/PublicationGrid";
import type { AltFeatureItem } from "@/components/AltFeatureRows";

const PLACEHOLDER_HREF = "#/contact";

/** Stable Unsplash images (free, no auth). */
const IMG = {
  ai_neon:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
  ai_circuit:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  ai_data:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  finance_dashboard:
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
  finance_calc:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  finance_office:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
  intangibles_glass:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  intangibles_curves:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  growth_team:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
  growth_meeting:
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
  growth_strategy:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  reading_tablet:
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1600&q=80",
  publications_hero:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80",
  client_chips:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  client_factory:
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80",
  client_lab:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  field_notes:
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1600&q=80",
  inside_hq:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  perspectives:
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
  squared_reports:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  looking_glass:
    "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1600&q=80",
};

/** ---------------- Featured client stories (Insights overview) ---------------- */

export const featuredClientStories: ClientStory[] = [
  {
    headline: "A SaaS Operator Closes a Round on Its Own Terms",
    stats: [
      { value: "$42M", label: "raised at the operator's target price" },
      { value: "3.1x", label: "ARR multiple defended in committee" },
    ],
    ctaHref: PLACEHOLDER_HREF,
    image: IMG.client_chips,
    imageAlt: "Inside a SaaS operator's workspace during diligence prep.",
  },
  {
    headline: "An EPC Leader Steadies Margins Through Intense Volatility",
    stats: [
      { value: "$300M", label: "cash retained over two years" },
      { value: "2.5x", label: "share price across the same window" },
    ],
    ctaHref: PLACEHOLDER_HREF,
    image: IMG.client_factory,
    imageAlt: "An industrial control room overseeing live operations.",
  },
  {
    headline: "A Healthcare Group Makes Intangibles Defendable to the Board",
    stats: [
      { value: "$110M", label: "of intangible value newly disclosed" },
      { value: "9 mo", label: "from kickoff to audit-ready model" },
    ],
    ctaHref: PLACEHOLDER_HREF,
    image: IMG.client_lab,
    imageAlt: "Clinicians and analysts reviewing intangibles documentation.",
  },
];

/** ---------------- Insights overview: 4-image industries strip ---------------- */

export const insightsHeroStrip = [
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    title: "Agentic AI",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    title: "Financial Transformation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    title: "Intangibles Valuation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    title: "Growth Strategy",
  },
];

/** ---------------- Explore publications switcher ---------------- */

export const explorePublicationsTabs = [
  {
    label: "Perspectives",
    body: "Perspectives is our quarterly essay series. Short, opinionated reads from the partners on what we are seeing inside the operator's seat. One topic, one argument, no filler.",
    ctaLabel: "Explore the latest issue",
    ctaHref: "#/insights/perspectives",
    image: IMG.perspectives,
  },
  {
    label: "Squared Reports",
    body: "Squared Reports are our long-form research. Twice a year we publish a single deep study with the data, the framework, and the operator playbook behind it. Built to be used, not skimmed.",
    ctaLabel: "Read the latest report",
    ctaHref: "#/insights/squared-reports",
    image: IMG.squared_reports,
  },
  {
    label: "Looking Glass",
    body: "Looking Glass is the signal feed we run internally, now made public. Monthly notes on what is breaking, what is working, and what the operators we talk to are quietly worried about.",
    ctaLabel: "See this month's signals",
    ctaHref: "#/insights/looking-glass",
    image: IMG.looking_glass,
  },
];

/** ---------------- Article card grids (Featured Topic pages) ---------------- */

export const aiArticles: ArticleCard[] = [
  {
    category: "Agentic AI",
    title: "Agentic AI in Retail: How Autonomous Shopping Rewires the Customer Journey",
    dek: "As agentic AI transforms retail economics, leaders will compete for shoppers and agents alike.",
    type: "Brief",
    date: "May 14, 2026",
    image: IMG.ai_neon,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Operations",
    title: "The Future of Opex in the Agent Economy",
    dek: "AI's real impact is not efficiency. It is a fundamental rewrite of how decisions are made and how work gets done.",
    type: "Brief",
    date: "May 14, 2026",
    image: IMG.ai_circuit,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Digital",
    title: "From AI Pilots to an Operating Model: A 2026 Roadmap",
    dek: "Operators centred their AI argument on sovereignty, agent governance, and a quantum-and-AI flywheel.",
    type: "Brief",
    date: "May 13, 2026",
    image: IMG.ai_data,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Technology",
    title: "How Technology Operating Models Are Evolving for AI",
    dek: "Companies are beginning to make the organisational changes necessary to scale and capture real value.",
    type: "Infographic",
    date: "May 12, 2026",
    image: IMG.ai_circuit,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Consumer",
    title: "Rewiring Demand Generation in the Age of AI Agents",
    dek: "When consumers delegate shopping to AI, brands must win the algorithm or disappear from consideration.",
    type: "Brief",
    date: "May 8, 2026",
    image: IMG.ai_neon,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Technology",
    title: "The $100B SaaS Opportunity Hiding in Cross-System Labor",
    dek: "Agentic AI can automate the coordination work between systems, creating a new market for software companies.",
    type: "Brief",
    date: "May 7, 2026",
    image: IMG.ai_data,
    href: PLACEHOLDER_HREF,
  },
];

export const financeArticles: ArticleCard[] = [
  {
    category: "Finance Transformation",
    title: "Rebuilding the CFO Suite for an Agentic Decade",
    dek: "The next finance function is built on real-time data, agentic ops, and operators who can read both ledgers and code.",
    type: "Brief",
    date: "May 15, 2026",
    image: IMG.finance_dashboard,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "FP&A",
    title: "Why Rolling Forecasts Beat the Annual Plan Every Time",
    dek: "The annual plan is a snapshot. Operators steer the business off rolling forecasts that update with real signal.",
    type: "Brief",
    date: "May 12, 2026",
    image: IMG.finance_calc,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Controllership",
    title: "Closing the Books in Five Days, Then Three",
    dek: "A practical sequence for compressing the close cycle without breaking controls or burning out the team.",
    type: "Playbook",
    date: "May 10, 2026",
    image: IMG.finance_office,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Capital",
    title: "Inside a Mid-Raise Pivot: When the Story Has to Hold",
    dek: "How an operator team rewrote the equity story between term sheet and signing, with the working papers attached.",
    type: "Field note",
    date: "May 6, 2026",
    image: IMG.finance_dashboard,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Fractional CFO",
    title: "What an Operator-Grade Fractional CFO Actually Owns",
    dek: "Not the deck. Not the dashboard. The operating decisions on the other side of both.",
    type: "Brief",
    date: "May 4, 2026",
    image: IMG.finance_calc,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Controls",
    title: "Installing the Controls You Will Wish You Had at Series C",
    dek: "Six controls that take a week to install and save quarters of pain when the next raise turns serious.",
    type: "Checklist",
    date: "May 1, 2026",
    image: IMG.finance_office,
    href: PLACEHOLDER_HREF,
  },
];

export const intangiblesArticles: ArticleCard[] = [
  {
    category: "Intangibles",
    title: "How Are Companies Really Valued in 2026?",
    dek: "Three Bain Squared partners explain what really drives valuation and where leaders most often get it wrong.",
    type: "Explainer",
    date: "May 14, 2026",
    image: IMG.intangibles_glass,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "ESOP",
    title: "ESOP Valuations That Hold Up to a Board Audit",
    dek: "A working sequence for ESOP work that lands inside the audit committee without rework.",
    type: "Playbook",
    date: "May 11, 2026",
    image: IMG.intangibles_curves,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "IP",
    title: "Pricing Brand Equity Without Hand-Waving",
    dek: "Real brand value is defensible. A practical method for getting from feel to figure inside the data room.",
    type: "Brief",
    date: "May 9, 2026",
    image: IMG.intangibles_glass,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Data Assets",
    title: "Putting a Number on Your Data Asset",
    dek: "If you sell, license, or move the business, the data set has a price. We show our work.",
    type: "Brief",
    date: "May 7, 2026",
    image: IMG.intangibles_curves,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "M&A",
    title: "Intangibles Inside an Acquisition Thesis",
    dek: "How acquirers should value the assets they cannot see on a balance sheet, with worked examples.",
    type: "Playbook",
    date: "May 4, 2026",
    image: IMG.intangibles_glass,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Disclosure",
    title: "What to Tell the Board About Intangibles, and When",
    dek: "A short template for surfacing intangibles risk and value at the right point in the board calendar.",
    type: "Template",
    date: "May 1, 2026",
    image: IMG.intangibles_curves,
    href: PLACEHOLDER_HREF,
  },
];

export const growthArticles: ArticleCard[] = [
  {
    category: "Growth Strategy",
    title: "Takeaways from Bain Squared's 2026 B2B Growth Agenda",
    dek: "Partners share insights on navigating volatility from the 2026 B2B Growth Agenda.",
    type: "Webinar",
    date: "May 7, 2026",
    image: IMG.growth_meeting,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Go-to-Market",
    title: "Rebuilding the Sales Org Around the Operator, Not the Pipeline",
    dek: "Pipelines lie. Operators do not. A working model for a sales org that compounds.",
    type: "Brief",
    date: "May 5, 2026",
    image: IMG.growth_team,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Pricing",
    title: "Pricing in the Agent Economy: What Survives the Negotiation",
    dek: "When the buyer is partly an agent, the pricing motion has to change. Here is the new shape.",
    type: "Brief",
    date: "May 3, 2026",
    image: IMG.growth_strategy,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Strategy",
    title: "The Three Operating Questions Behind Every Growth Plan",
    dek: "Strip the deck. Three questions decide whether the plan compounds or stalls.",
    type: "Brief",
    date: "May 1, 2026",
    image: IMG.growth_meeting,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "GTM",
    title: "A Quiet Channel That Is Outperforming Paid in 2026",
    dek: "Operator-led syndication is doing what paid used to do, at a fraction of the spend.",
    type: "Field note",
    date: "April 28, 2026",
    image: IMG.growth_team,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Strategy",
    title: "When to Walk Away From a Segment",
    dek: "A simple test for spotting segments that drain the operating system and never repay.",
    type: "Brief",
    date: "April 24, 2026",
    image: IMG.growth_strategy,
    href: PLACEHOLDER_HREF,
  },
];

/** Map of topic -> article set, for FeaturedTopic page. */
export const articlesByTopic: Record<string, ArticleCard[]> = {
  ai: aiArticles,
  "financial-transformation": financeArticles,
  "intangibles-valuation": intangiblesArticles,
  "growth-strategy": growthArticles,
};

/** ---------------- Alt feature rows (Perspective page) ---------------- */

export const altFeaturePairs: [AltFeatureItem, AltFeatureItem] = [
  {
    title: "Agentic AI Explained: When Machines Don't Just Chat, but Act",
    date: "March 25, 2026",
    dek: "Three Bain Squared operators explain how agentic AI reshapes workflows, decision-making, and the way humans and machines collaborate on real work.",
    ctaLabel: "Discover what makes agentic different",
    ctaHref: PLACEHOLDER_HREF,
    image: IMG.ai_neon,
  },
  {
    title: "What Is the Future of Finance?",
    date: "April 12, 2026",
    dek: "This series of Squared Reports explores what is around the next corner for the CFO suite, with practical operator notes from inside the engagements.",
    ctaLabel: "See the whole series",
    ctaHref: PLACEHOLDER_HREF,
    image: IMG.finance_dashboard,
  },
];

/** ---------------- Publication tile grid ---------------- */

export const perspectiveTiles: PublicationTile[] = [
  {
    category: "Tech & AI",
    title: "Where AI Is Creating Real Value in Real Operations",
    href: PLACEHOLDER_HREF,
    dek: "Four operators on where AI has already moved past the demo and started moving the P&L.",
  },
  {
    category: "Tech & AI",
    title: "What Is Sovereign AI for an Operator?",
    href: PLACEHOLDER_HREF,
    dek: "What control of the stack actually buys you, and where the line between sovereignty and theatre sits.",
  },
  {
    category: "Healthcare",
    title: "What Is the Health Span of a Business?",
    href: PLACEHOLDER_HREF,
    dek: "Borrowing a frame from medicine to read whether a company can keep performing, not just keep going.",
  },
  {
    category: "People & Organization",
    title: "How Are Companies Valued?",
    href: PLACEHOLDER_HREF,
    dek: "Three Bain Squared partners explain what really drives valuation, and where leaders often get it wrong.",
  },
  {
    category: "People & Organization",
    title: "The Brain Economy: Why Strong Brains Power Strong Economies",
    href: PLACEHOLDER_HREF,
    dek: "Why the talent pipeline is the real macro story, and what operators do when the supply curve refuses to move.",
  },
  {
    category: "Digital & Technology",
    title: "Agentic AI Explained: When Machines Don't Just Chat, but Act",
    href: PLACEHOLDER_HREF,
    dek: "The difference between a chatbot and an agent, and what changes inside the org chart once software starts doing the coordinating.",
  },
];

/** ---------------- Mini article grid (All-insights list bottom) ---------------- */

export const moreArticlesMini: MiniArticle[] = [
  {
    category: "Explainers",
    title: "What Is Sovereign AI?",
    dek: "Three operators explain what sovereign AI really means, and why control over the AI stack is becoming strategic.",
    image: IMG.ai_circuit,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Lives & Legacies",
    title: "A Maestro of Management, a Pension Fund Strategist, a Game Changer",
    dek: "Our latest field notes include the operators behind the operators, and the playbooks they leave behind.",
    image: IMG.inside_hq,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Week in Charts",
    title: "Aviation's Talent Turbulence",
    dek: "The maintenance pipeline is thinning. Without intervention, the technician deficit could reach 60,000.",
    image: IMG.growth_meeting,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Themes",
    title: "Support for Working Parents Is Closer Than Many Realise",
    dek: "Paid parental leave is available for many parents, yet it often goes unused. A short note on what to do about it.",
    image: IMG.inside_hq,
    href: PLACEHOLDER_HREF,
  },
];

/** ---------------- Featured + secondary articles (all-insights list top) ---------------- */

export const fieldNotesFeatured: FeaturedArticle = {
  category: "Article",
  title: "Quantum's Bold Promise: What Operators Need to Know",
  date: "May 8, 2026",
  dek: "Quantum computing could optimise portfolios, simulate molecules, and model supply chains. That is just a start. As the technology matures, early operators may unlock real value.",
  image: IMG.ai_data,
  href: PLACEHOLDER_HREF,
};

export const fieldNotesSecondary: [FeaturedArticle, FeaturedArticle] = [
  {
    category: "Report - MGI Research",
    title: "Agents, Robots, and Us: How AI Reshapes Work and Skills in the Field",
    date: "May 12, 2026",
    dek: "Most skills will still be needed. How people use them changes as they work alongside intelligent systems on the line.",
    image: IMG.ai_circuit,
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Field note",
    title: "Tanguy Catlin on Finding Strategic Focus in the AI Era",
    date: "May 12, 2026",
    dek: "An operator perspective on the key questions CEOs are facing, and why going deep beats spreading thin.",
    image: IMG.finance_office,
    href: PLACEHOLDER_HREF,
  },
];

/** ---------------- Publication page: Recommended sidebar ---------------- */

export const publicationsFeaturedHero: FeaturedHero = {
  category: "People and Organization",
  title: "An Operating Model for the Age of AI",
  dek: "By breaking the link between headcount and output, AI forces operators to rethink how work is structured, how roles are defined, and how real value is created.",
  type: "Brief",
  date: "May 8, 2026",
  image: IMG.ai_data,
  href: PLACEHOLDER_HREF,
};

export const publicationsRecommended: RecommendedItem[] = [
  {
    category: "Consumer Products",
    title: "Rewiring Demand Generation in the Age of AI Agents",
    type: "Brief",
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Mergers and Acquisitions",
    title: "Global M&A Deal Trends: What's Happening Now",
    type: "Interactive",
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Sales and Marketing",
    title: "Your Next Customer Will Find You Using AI. Now What?",
    type: "Brief",
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Cybersecurity",
    title: "Operator Notes on the AI Cybersecurity Wake-Up Call",
    type: "Brief",
    href: PLACEHOLDER_HREF,
  },
  {
    category: "Retail",
    title: "US Consumer Health Update",
    type: "Snap Chart",
    href: PLACEHOLDER_HREF,
  },
];
