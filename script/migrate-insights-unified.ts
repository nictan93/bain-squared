/**
 * Migrates article + insightCard + clientStory → unified insight schema.
 * Then deletes the old documents.
 * Safe to re-run (createOrReplace is idempotent).
 *
 * Run: SANITY_API_TOKEN=... tsx script/migrate-insights-unified.ts
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
dotenv.config();

const client = createClient({
  projectId: "84yn8vov",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function upsert(doc: Record<string, unknown>) {
  await client.createOrReplace(doc);
  console.log(`  ✓ insight / ${doc._id}`);
}

async function deleteDoc(id: string) {
  await client.delete(id);
  console.log(`  ✗ deleted ${id}`);
}

// ---------------------------------------------------------------------------
// 1. Full article → insight
// ---------------------------------------------------------------------------

async function migrateArticles() {
  console.log("\n── Converting articles → insights ──");

  await upsert({
    _type: "insight",
    _id: "insight-operators-playbook-agentic-ai",
    slug: { _type: "slug", current: "operators-playbook-agentic-ai" },
    title: "The operator's playbook for agentic AI",
    dek: "Most agent pilots stall in week six. Three patterns we see from the teams that actually ship to production, hold the line on cost, and put real revenue on the board.",
    summary: "Most agent programs stall six weeks in, not because of the model but because of operating gaps: no named owner, untrustworthy data, and no cost-per-outcome visibility. This piece sets out the three patterns that separate teams that ship from teams that run the same pilot four times.",
    type: "field-note",
    contentFormat: "Field Note",
    practiceTags: ["ai"],
    audienceTags: ["founders", "cfos"],
    category: "Agentic AI",
    publishedAt: "2026-05-14",
    featured: true,
    authors: [{ _key: "a1", name: "Nicholas Tan", href: "/who-we-work-with" }, { _key: "a2", name: "Priya Raman", href: "/who-we-work-with" }],
    withAuthors: [{ _key: "w1", name: "the Bain Squared AI team" }],
    heroImageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    body: [
      { _key: "b1", type: "p", dropcap: true, text: "**For most operators**, agentic AI has moved from a curiosity to a budget line in under twelve months. The boardroom has decided. The CFO has signed. The first agent is in flight. And then, six weeks in, the program quietly stalls. The demo works. Production does not. Nobody is sure who owns the agent. Cost is climbing. The pilot becomes a poster, and the next one starts behind." },
      { _key: "b2", type: "p", text: "We sit in those rooms. We have watched the same failure pattern repeat across sales, customer service, operations, and the back office. It is rarely a model problem. It is almost always an operating problem: an agent dropped on top of a process nobody owns, with data nobody trusts, and a metric nobody is held to." },
      { _key: "b3", type: "p", text: "This is the playbook the teams that actually ship are using. Three patterns. No magic. The work is operator work." },
      { _key: "b4", type: "h2", text: "Pattern one: Pick the seat, not the use case" },
      { _key: "b5", type: "p", text: "The mistake we see most often is starting with the use case. *Summarize tickets. Draft outreach. Reconcile invoices.* That framing puts the agent on a horizontal shelf, available to everyone, owned by no one. Six weeks later it is a Slack channel of complaints and a quietly rising bill." },
      { _key: "b6", type: "p", text: "The teams that ship start with a **seat**. A named person, with a named KPI, who today does work that an agent can plausibly take." },
      { _key: "b7", type: "quote", text: "An agent without a seat is a science project. An agent with a seat is a coworker.", attribution: "Operating partner, Bain Squared" },
      { _key: "b8", type: "h2", text: "Pattern two: Build the retrieval layer before the agent" },
      { _key: "b9", type: "p", text: "Every team we have helped scale agents has hit the same wall: the agent is smart, the data is not. Records are duplicated. Schemas drift between systems. The agent answers confidently from the wrong row, and a customer is told something that is not true." },
      { _key: "b10", type: "list", ordered: false, items: ["**One system of record per object.** Accounts, contacts, contracts, tickets, invoices.", "**Embeddings on the documents that matter**, refreshed on a schedule the operator controls.", "**A grounding contract.** The agent cites every claim it makes.", "**An eval set with real failure cases**, not just happy paths."] },
      { _key: "b11", type: "h2", text: "Pattern three: Put cost in the same dashboard as outcome" },
      { _key: "b12", type: "p", text: "Teams that hold the line put **cost per outcome** in the same dashboard as the outcome itself. Not cost per call. Not cost per token. Cost per qualified meeting, cost per resolved ticket, cost per dollar collected." },
      { _key: "b13", type: "h2", text: "What to do on Monday" },
      { _key: "b14", type: "list", ordered: true, items: ["**Name the seat.** Pick one person whose KPI the agent owns. Write it down.", "**Audit the retrieval layer.** Make one object the system of record.", "**Put cost and outcome on one screen.** Build that screen this week."] },
      { _key: "b15", type: "p", text: "If you want a second opinion on where your program is stalling, we will tell you on the first call. [Talk to our AI team](/contact)." },
    ],
    seo: {
      title: "The Operator's Playbook for Agentic AI | Bain Squared Field Notes",
      description: "Most agent pilots stall in week six. Three patterns from the teams that actually ship to production, hold the line on cost, and put real revenue on the board.",
    },
  });
}

// ---------------------------------------------------------------------------
// 2. Insight cards → insights
// ---------------------------------------------------------------------------

const INSIGHT_CARDS = [
  { id: "agentic-ai-retail", type: "field-note", practiceTags: ["ai"], category: "Agentic AI", title: "Agentic AI in Retail: How Autonomous Shopping Rewires the Customer Journey", dek: "As agentic AI transforms retail economics, leaders will compete for shoppers and agents alike.", contentFormat: "Brief", date: "2026-05-14", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80" },
  { id: "future-opex-agent-economy", type: "field-note", practiceTags: ["ai"], category: "Operations", title: "The Future of Opex in the Agent Economy", dek: "AI's real impact is not efficiency. It is a fundamental rewrite of how decisions are made.", contentFormat: "Brief", date: "2026-05-14", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "ai-pilots-to-operating-model", type: "field-note", practiceTags: ["ai"], category: "Digital", title: "From AI Pilots to an Operating Model: A 2026 Roadmap", dek: "Operators centred their AI argument on sovereignty, agent governance, and a quantum-and-AI flywheel.", contentFormat: "Brief", date: "2026-05-13", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" },
  { id: "technology-operating-models-ai", type: "field-note", practiceTags: ["ai"], category: "Technology", title: "How Technology Operating Models Are Evolving for AI", dek: "Companies are beginning to make the organizational changes necessary to scale and capture real value.", contentFormat: "Infographic", date: "2026-05-12", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "demand-generation-ai-agents", type: "field-note", practiceTags: ["ai"], category: "Consumer", title: "Rewiring Demand Generation in the Age of AI Agents", dek: "When consumers delegate shopping to AI, brands must win the algorithm or disappear from consideration.", contentFormat: "Brief", date: "2026-05-08", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80" },
  { id: "100b-saas-cross-system-labor", type: "field-note", practiceTags: ["ai"], category: "Technology", title: "The $100B SaaS Opportunity Hiding in Cross-System Labor", dek: "Agentic AI can automate the coordination work between systems.", contentFormat: "Brief", date: "2026-05-07", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" },
  { id: "rebuilding-cfo-suite-agentic", type: "field-note", practiceTags: ["financial-transformation"], category: "Finance Transformation", title: "Rebuilding the CFO Suite for an Agentic Decade", dek: "The next finance function is built on real-time data, agentic ops, and operators who can read both ledgers and code.", contentFormat: "Brief", date: "2026-05-15", imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80" },
  { id: "rolling-forecasts-annual-plan", type: "field-note", practiceTags: ["financial-transformation"], category: "FP&A", title: "Why Rolling Forecasts Beat the Annual Plan Every Time", dek: "The annual plan is a snapshot. Operators steer the business off rolling forecasts that update with real signal.", contentFormat: "Brief", date: "2026-05-12", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" },
  { id: "closing-books-five-days", type: "field-note", practiceTags: ["financial-transformation"], category: "Controllership", title: "Closing the Books in Five Days, Then Three", dek: "A practical sequence for compressing the close cycle without breaking controls.", contentFormat: "Playbook", date: "2026-05-10", imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" },
  { id: "mid-raise-pivot", type: "field-note", practiceTags: ["financial-transformation"], category: "Capital", title: "Inside a Mid-Raise Pivot: When the Story Has to Hold", dek: "How an operator team rewrote the equity story between term sheet and signing.", contentFormat: "Field Note", date: "2026-05-06", imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80" },
  { id: "fractional-cfo-owns", type: "field-note", practiceTags: ["financial-transformation"], category: "Fractional CFO", title: "What an Operator-Grade Fractional CFO Actually Owns", dek: "Not the deck. Not the dashboard. The operating decisions on the other side of both.", contentFormat: "Brief", date: "2026-05-04", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" },
  { id: "controls-series-c", type: "field-note", practiceTags: ["financial-transformation"], category: "Controls", title: "Installing the Controls You Will Wish You Had at Series C", dek: "Six controls that take a week to install and save quarters of pain.", contentFormat: "Checklist", date: "2026-05-01", imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" },
  { id: "how-companies-valued-2026", type: "perspective", practiceTags: ["intangibles-valuation"], category: "Intangibles", title: "How Are Companies Really Valued in 2026?", dek: "Three Bain Squared partners explain what really drives valuation.", contentFormat: "Explainer", date: "2026-05-14", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "esop-valuations-board-audit", type: "field-note", practiceTags: ["intangibles-valuation"], category: "ESOP", title: "ESOP Valuations That Hold Up to a Board Audit", dek: "A working sequence for ESOP work that lands inside the audit committee without rework.", contentFormat: "Playbook", date: "2026-05-11", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" },
  { id: "pricing-brand-equity", type: "field-note", practiceTags: ["intangibles-valuation"], category: "IP", title: "Pricing Brand Equity Without Hand-Waving", dek: "Real brand value is defensible. A practical method for getting from feel to figure.", contentFormat: "Brief", date: "2026-05-09", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "number-on-data-asset", type: "field-note", practiceTags: ["intangibles-valuation"], category: "Data Assets", title: "Putting a Number on Your Data Asset", dek: "If you sell, license, or move the business, the data set has a price.", contentFormat: "Brief", date: "2026-05-07", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" },
  { id: "intangibles-acquisition-thesis", type: "field-note", practiceTags: ["intangibles-valuation"], category: "M&A", title: "Intangibles Inside an Acquisition Thesis", dek: "How acquirers should value the assets they cannot see on a balance sheet.", contentFormat: "Playbook", date: "2026-05-04", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "what-to-tell-board-intangibles", type: "field-note", practiceTags: ["intangibles-valuation"], category: "Disclosure", title: "What to Tell the Board About Intangibles, and When", dek: "A short template for surfacing intangibles risk and value.", contentFormat: "Template", date: "2026-05-01", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" },
  { id: "b2b-growth-agenda-2026", type: "field-note", practiceTags: ["growth-strategy"], category: "Growth Strategy", title: "Takeaways from Bain Squared's 2026 B2B Growth Agenda", dek: "Partners share insights on navigating volatility.", contentFormat: "Webinar", date: "2026-05-07", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80" },
  { id: "sales-org-around-operator", type: "field-note", practiceTags: ["growth-strategy"], category: "Go-to-Market", title: "Rebuilding the Sales Org Around the Operator, Not the Pipeline", dek: "Pipelines lie. Operators do not.", contentFormat: "Brief", date: "2026-05-05", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" },
  { id: "pricing-agent-economy", type: "field-note", practiceTags: ["growth-strategy"], category: "Pricing", title: "Pricing in the Agent Economy: What Survives the Negotiation", dek: "When the buyer is partly an agent, the pricing motion has to change.", contentFormat: "Brief", date: "2026-05-03", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
  { id: "three-operating-questions-growth", type: "field-note", practiceTags: ["growth-strategy"], category: "Strategy", title: "The Three Operating Questions Behind Every Growth Plan", dek: "Strip the deck. Three questions decide whether the plan compounds or stalls.", contentFormat: "Brief", date: "2026-05-01", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80" },
  { id: "quiet-channel-outperforming-paid", type: "field-note", practiceTags: ["growth-strategy"], category: "GTM", title: "A Quiet Channel That Is Outperforming Paid in 2026", dek: "Operator-led syndication is doing what paid used to do.", contentFormat: "Field Note", date: "2026-04-28", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" },
  { id: "when-to-walk-away-segment", type: "field-note", practiceTags: ["growth-strategy"], category: "Strategy", title: "When to Walk Away From a Segment", dek: "A simple test for spotting segments that drain the operating system.", contentFormat: "Brief", date: "2026-04-24", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
];

async function migrateInsightCards() {
  console.log("\n── Converting insight cards → insights ──");
  for (const card of INSIGHT_CARDS) {
    await upsert({
      _type: "insight",
      _id: `insight-${card.id}`,
      slug: { _type: "slug", current: card.id },
      title: card.title,
      dek: card.dek,
      type: card.type,
      contentFormat: card.contentFormat,
      practiceTags: card.practiceTags,
      category: card.category,
      publishedAt: card.date,
      heroImageUrl: card.imageUrl,
      ctaHref: "/contact",
      featured: false,
    });
  }
}

// ---------------------------------------------------------------------------
// 3. Client stories → insights
// ---------------------------------------------------------------------------

async function migrateClientStories() {
  console.log("\n── Converting client stories → insights ──");

  const stories = [
    { id: "saas-operator-closes-round", order: 1, title: "A SaaS Operator Closes a Round on Its Own Terms", stats: [{ value: "$42M", label: "raised at the operator's target price" }, { value: "3.1x", label: "ARR multiple defended in committee" }], imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80", imageAlt: "Inside a SaaS operator's workspace during diligence prep.", ctaHref: "/contact" },
    { id: "epc-leader-steadies-margins", order: 2, title: "An EPC Leader Steadies Margins Through Intense Volatility", stats: [{ value: "$300M", label: "cash retained over two years" }, { value: "2.5x", label: "share price across the same window" }], imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80", imageAlt: "An industrial control room overseeing live operations.", ctaHref: "/contact" },
    { id: "healthcare-intangibles-board", order: 3, title: "A Healthcare Group Makes Intangibles Defendable to the Board", stats: [{ value: "$110M", label: "of intangible value newly disclosed" }, { value: "9 mo", label: "from kickoff to audit-ready model" }], imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80", imageAlt: "Clinicians and analysts reviewing intangibles documentation.", ctaHref: "/contact" },
  ];

  for (const story of stories) {
    await upsert({
      _type: "insight",
      _id: `insight-story-${story.id}`,
      slug: { _type: "slug", current: `client-story-${story.id}` },
      title: story.title,
      type: "client-story",
      contentFormat: "Case Story",
      featured: false,
      heroImageUrl: story.imageUrl,
      imageAlt: story.imageAlt,
      ctaHref: story.ctaHref,
      order: story.order,
      stats: story.stats.map((s, i) => ({ ...s, _key: `stat-${i}` })),
    });
  }
}

// ---------------------------------------------------------------------------
// 4. Delete old documents
// ---------------------------------------------------------------------------

async function deleteOldDocs() {
  console.log("\n── Deleting superseded documents ──");

  const oldIds = [
    "article-operators-playbook-agentic-ai",
    ...INSIGHT_CARDS.map((c) => `insight-card-${c.id}`),
    "client-story-saas-operator-closes-round",
    "client-story-epc-leader-steadies-margins",
    "client-story-healthcare-intangibles-board",
  ];

  for (const id of oldIds) {
    try {
      await deleteDoc(id);
    } catch {
      console.log(`  (skipped ${id} — already deleted or not found)`);
    }
  }
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

async function main() {
  console.log("Migrating to unified insight schema...\n");
  await migrateArticles();
  await migrateInsightCards();
  await migrateClientStories();
  await deleteOldDocs();
  console.log("\nDone.");
}

main().catch((err) => { console.error(err); process.exit(1); });
