/**
 * One-time migration: pushes all hardcoded content into Sanity.
 * Run with: SANITY_API_TOKEN=... tsx script/migrate-to-sanity.ts
 *
 * Safe to re-run: uses createOrReplace so it's idempotent.
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

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function upsert(doc: Record<string, unknown>) {
  const result = await client.createOrReplace(doc);
  console.log(`  ✓ ${doc._type} / ${doc._id}`);
  return result;
}

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

async function migrateArticles() {
  console.log("\n── Articles ──");

  await upsert({
    _type: "article",
    _id: "article-operators-playbook-agentic-ai",
    slug: { _type: "slug", current: "operators-playbook-agentic-ai" },
    publication: "Bain Squared Field Notes",
    headline: "The operator's playbook for agentic AI",
    dek: "Most agent pilots stall in week six. Three patterns we see from the teams that actually ship to production, hold the line on cost, and put real revenue on the board.",
    date: "2026-05-14",
    contentType: "Field Note",
    publicationSeries: "field-notes",
    topic: "ai",
    heroImageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    authors: [
      { _key: "a1", name: "Nicholas Tan", href: "/who-we-work-with" },
      { _key: "a2", name: "Priya Raman", href: "/who-we-work-with" },
    ],
    withAuthors: [{ _key: "w1", name: "the Bain Squared AI team" }],
    body: [
      { _key: "b1", type: "p", dropcap: true, text: "**For most operators**, agentic AI has moved from a curiosity to a budget line in under twelve months. The boardroom has decided. The CFO has signed. The first agent is in flight. And then, six weeks in, the program quietly stalls. The demo works. Production does not. Nobody is sure who owns the agent. Cost is climbing. The pilot becomes a poster, and the next one starts behind." },
      { _key: "b2", type: "p", text: "We sit in those rooms. We have watched the same failure pattern repeat across sales, customer service, operations, and the back office. It is rarely a model problem. It is almost always an operating problem: an agent dropped on top of a process nobody owns, with data nobody trusts, and a metric nobody is held to." },
      { _key: "b3", type: "p", text: "This is the playbook the teams that actually ship are using. Three patterns. No magic. The work is operator work." },
      { _key: "b4", type: "h2", text: "Pattern one: Pick the seat, not the use case" },
      { _key: "b5", type: "p", text: "The mistake we see most often is starting with the use case. *Summarize tickets. Draft outreach. Reconcile invoices.* That framing puts the agent on a horizontal shelf, available to everyone, owned by no one. Six weeks later it is a Slack channel of complaints and a quietly rising bill." },
      { _key: "b6", type: "p", text: "The teams that ship start with a **seat**. A named person, with a named KPI, who today does work that an agent can plausibly take. The SDR who must book twelve qualified meetings a week. The CS lead whose queue resolution time has not moved in two quarters. The collections analyst chasing the same eighty accounts on a spreadsheet. That person becomes the operator of the agent. They define the bar for shipping. They own the reversal when it goes wrong." },
      { _key: "b7", type: "quote", text: "An agent without a seat is a science project. An agent with a seat is a coworker.", attribution: "Operating partner, Bain Squared" },
      { _key: "b8", type: "p", text: "This sounds obvious. It is not how most programs are run. Pick the seat first. Build the agent to it. Promote it only after that one seat hits the bar." },
      { _key: "b9", type: "h2", text: "Pattern two: Build the retrieval layer before the agent" },
      { _key: "b10", type: "p", text: "Every team we have helped scale agents has, at some point, hit the same wall: the agent is smart, the data is not. Records are duplicated. Schemas drift between systems. The CRM disagrees with the billing system. The agent answers confidently from the wrong row, and a customer is told something that is not true." },
      { _key: "b11", type: "p", text: "The fix is unglamorous. You build the retrieval layer your agents need before you build the second agent. That means:" },
      { _key: "b12", type: "list", ordered: false, items: ["**One system of record per object.** Accounts, contacts, contracts, tickets, invoices. One source of truth, written down, with the agent forbidden from reading the others.", "**Embeddings on the documents that matter**, refreshed on a schedule the operator controls.", "**A grounding contract.** The agent cites every claim it makes, and the operator can click through to the row, the doc, the line.", "**An eval set with real failure cases**, not just happy paths. Run it nightly. Break the build on regressions."] },
      { _key: "b13", type: "p", text: "None of this is new. All of it is skipped. The teams that ship treat the retrieval layer as the product, and the agent as the interface on top of it." },
      { _key: "b14", type: "h2", text: "Pattern three: Put cost in the same dashboard as outcome" },
      { _key: "b15", type: "p", text: "The third stall point is financial. The first agent is cheap. The second is fine. By the fifth, the bill has compounded, the operator does not know which agent is responsible for which line item, and finance is the first to ring the alarm. The program gets paused for a quarter while somebody builds a usage dashboard. Momentum is lost." },
      { _key: "b16", type: "p", text: "Teams that hold the line do one thing differently from day one. They put **cost per outcome** in the same dashboard as the outcome itself. Not cost per call. Not cost per token. Cost per qualified meeting, cost per resolved ticket, cost per dollar collected. The operator sees both numbers at the same time, every day, and is held to the ratio." },
      { _key: "b17", type: "p", text: "When the ratio breaks, the operator has the authority to throttle, to swap models, to fall back to a simpler workflow. They do not file a ticket. They act. That is the difference between a program and a poster." },
      { _key: "b18", type: "h2", text: "What to do on Monday" },
      { _key: "b19", type: "p", text: "If you are six weeks into a program that has gone quiet, you do not need a new model. You need to do three things, in order." },
      { _key: "b20", type: "list", ordered: true, items: ["**Name the seat.** Pick one person whose KPI the agent owns. Write it down. Tell the team.", "**Audit the retrieval layer.** Pick the single object the agent reads from most. Make it the system of record. Kill the others for that agent.", "**Put cost and outcome on one screen.** If your operator cannot see both numbers at once, the program is not ready to scale. Build that screen this week."] },
      { _key: "b21", type: "p", text: "None of this is exotic. All of it is operator work. The teams that do it ship agents that survive contact with production. The ones that skip it run the same pilot four times in a row, with four different vendors, and wonder why the board has stopped asking about AI." },
      { _key: "b22", type: "p", text: "If you want a second opinion on where your program is stalling, we will tell you on the first call. That is what we do. [Talk to our AI team](/contact)." },
    ],
  });
}

// ---------------------------------------------------------------------------
// Insight cards (article stubs)
// ---------------------------------------------------------------------------

const INSIGHT_CARDS = [
  // AI
  { id: "agentic-ai-retail", topic: "ai", category: "Agentic AI", title: "Agentic AI in Retail: How Autonomous Shopping Rewires the Customer Journey", dek: "As agentic AI transforms retail economics, leaders will compete for shoppers and agents alike.", contentType: "Brief", date: "2026-05-14", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80" },
  { id: "future-opex-agent-economy", topic: "ai", category: "Operations", title: "The Future of Opex in the Agent Economy", dek: "AI's real impact is not efficiency. It is a fundamental rewrite of how decisions are made and how work gets done.", contentType: "Brief", date: "2026-05-14", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "ai-pilots-to-operating-model", topic: "ai", category: "Digital", title: "From AI Pilots to an Operating Model: A 2026 Roadmap", dek: "Operators centred their AI argument on sovereignty, agent governance, and a quantum-and-AI flywheel.", contentType: "Brief", date: "2026-05-13", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" },
  { id: "technology-operating-models-ai", topic: "ai", category: "Technology", title: "How Technology Operating Models Are Evolving for AI", dek: "Companies are beginning to make the organizational changes necessary to scale and capture real value.", contentType: "Infographic", date: "2026-05-12", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "demand-generation-ai-agents", topic: "ai", category: "Consumer", title: "Rewiring Demand Generation in the Age of AI Agents", dek: "When consumers delegate shopping to AI, brands must win the algorithm or disappear from consideration.", contentType: "Brief", date: "2026-05-08", imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80" },
  { id: "100b-saas-cross-system-labor", topic: "ai", category: "Technology", title: "The $100B SaaS Opportunity Hiding in Cross-System Labor", dek: "Agentic AI can automate the coordination work between systems, creating a new market for software companies.", contentType: "Brief", date: "2026-05-07", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" },
  // Finance
  { id: "rebuilding-cfo-suite-agentic", topic: "financial-transformation", category: "Finance Transformation", title: "Rebuilding the CFO Suite for an Agentic Decade", dek: "The next finance function is built on real-time data, agentic ops, and operators who can read both ledgers and code.", contentType: "Brief", date: "2026-05-15", imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80" },
  { id: "rolling-forecasts-annual-plan", topic: "financial-transformation", category: "FP&A", title: "Why Rolling Forecasts Beat the Annual Plan Every Time", dek: "The annual plan is a snapshot. Operators steer the business off rolling forecasts that update with real signal.", contentType: "Brief", date: "2026-05-12", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" },
  { id: "closing-books-five-days", topic: "financial-transformation", category: "Controllership", title: "Closing the Books in Five Days, Then Three", dek: "A practical sequence for compressing the close cycle without breaking controls or burning out the team.", contentType: "Playbook", date: "2026-05-10", imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" },
  { id: "mid-raise-pivot", topic: "financial-transformation", category: "Capital", title: "Inside a Mid-Raise Pivot: When the Story Has to Hold", dek: "How an operator team rewrote the equity story between term sheet and signing, with the working papers attached.", contentType: "Field note", date: "2026-05-06", imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80" },
  { id: "fractional-cfo-owns", topic: "financial-transformation", category: "Fractional CFO", title: "What an Operator-Grade Fractional CFO Actually Owns", dek: "Not the deck. Not the dashboard. The operating decisions on the other side of both.", contentType: "Brief", date: "2026-05-04", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" },
  { id: "controls-series-c", topic: "financial-transformation", category: "Controls", title: "Installing the Controls You Will Wish You Had at Series C", dek: "Six controls that take a week to install and save quarters of pain when the next raise turns serious.", contentType: "Checklist", date: "2026-05-01", imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" },
  // Intangibles
  { id: "how-companies-valued-2026", topic: "intangibles-valuation", category: "Intangibles", title: "How Are Companies Really Valued in 2026?", dek: "Three Bain Squared partners explain what really drives valuation and where leaders most often get it wrong.", contentType: "Explainer", date: "2026-05-14", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "esop-valuations-board-audit", topic: "intangibles-valuation", category: "ESOP", title: "ESOP Valuations That Hold Up to a Board Audit", dek: "A working sequence for ESOP work that lands inside the audit committee without rework.", contentType: "Playbook", date: "2026-05-11", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" },
  { id: "pricing-brand-equity", topic: "intangibles-valuation", category: "IP", title: "Pricing Brand Equity Without Hand-Waving", dek: "Real brand value is defensible. A practical method for getting from feel to figure inside the data room.", contentType: "Brief", date: "2026-05-09", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "number-on-data-asset", topic: "intangibles-valuation", category: "Data Assets", title: "Putting a Number on Your Data Asset", dek: "If you sell, license, or move the business, the data set has a price. We show our work.", contentType: "Brief", date: "2026-05-07", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" },
  { id: "intangibles-acquisition-thesis", topic: "intangibles-valuation", category: "M&A", title: "Intangibles Inside an Acquisition Thesis", dek: "How acquirers should value the assets they cannot see on a balance sheet, with worked examples.", contentType: "Playbook", date: "2026-05-04", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" },
  { id: "what-to-tell-board-intangibles", topic: "intangibles-valuation", category: "Disclosure", title: "What to Tell the Board About Intangibles, and When", dek: "A short template for surfacing intangibles risk and value at the right point in the board calendar.", contentType: "Template", date: "2026-05-01", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" },
  // Growth
  { id: "b2b-growth-agenda-2026", topic: "growth-strategy", category: "Growth Strategy", title: "Takeaways from Bain Squared's 2026 B2B Growth Agenda", dek: "Partners share insights on navigating volatility from the 2026 B2B Growth Agenda.", contentType: "Webinar", date: "2026-05-07", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80" },
  { id: "sales-org-around-operator", topic: "growth-strategy", category: "Go-to-Market", title: "Rebuilding the Sales Org Around the Operator, Not the Pipeline", dek: "Pipelines lie. Operators do not. A working model for a sales org that compounds.", contentType: "Brief", date: "2026-05-05", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" },
  { id: "pricing-agent-economy", topic: "growth-strategy", category: "Pricing", title: "Pricing in the Agent Economy: What Survives the Negotiation", dek: "When the buyer is partly an agent, the pricing motion has to change. Here is the new shape.", contentType: "Brief", date: "2026-05-03", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
  { id: "three-operating-questions-growth", topic: "growth-strategy", category: "Strategy", title: "The Three Operating Questions Behind Every Growth Plan", dek: "Strip the deck. Three questions decide whether the plan compounds or stalls.", contentType: "Brief", date: "2026-05-01", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80" },
  { id: "quiet-channel-outperforming-paid", topic: "growth-strategy", category: "GTM", title: "A Quiet Channel That Is Outperforming Paid in 2026", dek: "Operator-led syndication is doing what paid used to do, at a fraction of the spend.", contentType: "Field note", date: "2026-04-28", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" },
  { id: "when-to-walk-away-segment", topic: "growth-strategy", category: "Strategy", title: "When to Walk Away From a Segment", dek: "A simple test for spotting segments that drain the operating system and never repay.", contentType: "Brief", date: "2026-04-24", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
];

async function migrateInsightCards() {
  console.log("\n── Insight cards ──");
  for (const card of INSIGHT_CARDS) {
    await upsert({
      _type: "insightCard",
      _id: `insight-card-${card.id}`,
      title: card.title,
      dek: card.dek,
      category: card.category,
      contentType: card.contentType,
      date: card.date,
      topic: card.topic,
      imageUrl: card.imageUrl,
      href: "/contact",
    });
  }
}

// ---------------------------------------------------------------------------
// Client stories
// ---------------------------------------------------------------------------

async function migrateClientStories() {
  console.log("\n── Client stories ──");

  const stories = [
    { id: "saas-operator-closes-round", order: 1, headline: "A SaaS Operator Closes a Round on Its Own Terms", stats: [{ value: "$42M", label: "raised at the operator's target price" }, { value: "3.1x", label: "ARR multiple defended in committee" }], imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80", imageAlt: "Inside a SaaS operator's workspace during diligence prep.", ctaHref: "/contact" },
    { id: "epc-leader-steadies-margins", order: 2, headline: "An EPC Leader Steadies Margins Through Intense Volatility", stats: [{ value: "$300M", label: "cash retained over two years" }, { value: "2.5x", label: "share price across the same window" }], imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80", imageAlt: "An industrial control room overseeing live operations.", ctaHref: "/contact" },
    { id: "healthcare-intangibles-board", order: 3, headline: "A Healthcare Group Makes Intangibles Defendable to the Board", stats: [{ value: "$110M", label: "of intangible value newly disclosed" }, { value: "9 mo", label: "from kickoff to audit-ready model" }], imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80", imageAlt: "Clinicians and analysts reviewing intangibles documentation.", ctaHref: "/contact" },
  ];

  for (const story of stories) {
    await upsert({
      _type: "clientStory",
      _id: `client-story-${story.id}`,
      headline: story.headline,
      stats: story.stats.map((s, i) => ({ ...s, _key: `stat-${i}` })),
      imageUrl: story.imageUrl,
      imageAlt: story.imageAlt,
      ctaHref: story.ctaHref,
      order: story.order,
    });
  }
}

// ---------------------------------------------------------------------------
// Reviews
// ---------------------------------------------------------------------------

async function migrateReviews() {
  console.log("\n── Reviews ──");

  const groups = [
    {
      id: "valuation", order: 1,
      title: "Reviews for Intangible Asset & ESOP Valuation",
      intro: "Founders and CFOs typically engage us when an ESOP grant, an audit, or a tax position needs a valuation that holds up under questioning. Below is feedback from companies we've supported across Singapore, Indonesia, and Vietnam.",
      reviews: [
        { quote: "Bain Squared helped us turn a messy investor narrative into a finance pack we could confidently use in board and fundraising discussions. The ESOP valuation memo was the cleanest piece of governance work we'd produced as a company.", reviewer: "Founder & CEO", companyType: "Singapore B2B SaaS, Series A", service: "ESOP valuation, 409A-equivalent memo", problem: "Pre-Series A grant pool needed defensible strike pricing for new option holders and audit sign-off.", outcome: "Strike price accepted by auditor without rework. ESOP rolled out to first 18 hires inside three weeks." },
        { quote: "We came in expecting a templated report. We left with a working model we still use internally to test grant sizing every quarter. They actually explained the math instead of hiding behind it.", reviewer: "Group CFO", companyType: "Indonesian family-owned consumer group", service: "Intangible asset valuation for restructuring", problem: "Brand and customer-list intangibles needed to be carved out for an internal restructuring ahead of a holding-company transfer.", outcome: "Restructuring closed on schedule. Tax position survived first review by counsel with no adjustments requested." },
        { quote: "Most valuation work we'd seen was a number with a story bolted on. This was a story with a number that fell out of it. That difference mattered when we walked the board through it.", reviewer: "Audit Committee Chair", companyType: "Singapore-listed industrial group", service: "Purchase price allocation, post-acquisition", problem: "Recently acquired subsidiary required PPA across customer relationships, technology, and goodwill ahead of FY close.", outcome: "PPA delivered inside the close calendar. External auditor signed off in a single review cycle." },
        { quote: "They challenged our own assumptions before the auditor did. That was the whole point of hiring them.", reviewer: "Finance Director", companyType: "Vietnamese fintech, Series B", service: "ESOP valuation refresh, annual", problem: "Annual refresh of fair value for option grants, with material change in trading multiples since prior cycle.", outcome: "Refreshed strike accepted at AGM. Used the model to size a top-up grant for senior hires in the same quarter." },
      ],
    },
    {
      id: "cfo", order: 2,
      title: "Reviews for Fractional CFO & Financial Transformation",
      intro: "We sit in the CFO seat for founders who need senior-level finance thinking without hiring it full time. Engagements typically run six to twelve months, with a clear handover plan to an in-house team at the end.",
      reviews: [
        { quote: "The reporting cadence shifted from monthly surprises to weekly clarity. Our board chair stopped asking for backup files because the pack already had them.", reviewer: "Founder & CEO", companyType: "Singapore healthtech, Series A", service: "Fractional CFO, 9-month engagement", problem: "Founder-led finance function. No FP&A. Cash runway visibility was monthly at best and the board was losing patience.", outcome: "Weekly cash and KPI pack live by week four. Hired a permanent Head of Finance in month seven with a clean handover." },
        { quote: "We'd been told we needed a new ERP. They told us we needed a new chart of accounts and a real close calendar first. They were right and it saved us a six-figure implementation.", reviewer: "COO", companyType: "Southeast Asian logistics SME", service: "Financial transformation, close redesign", problem: "12-day month-end close, three reconciliations failing every cycle, ERP migration paused mid-scope.", outcome: "Close cut to four days. Reconciliations automated. ERP scope re-baselined to a smaller, faster rollout." },
        { quote: "I'd hired fractional CFOs before. This was the first one who acted like an owner instead of a vendor. They flagged things I should have been flagging myself.", reviewer: "Founder", companyType: "Singapore e-commerce, pre-Series B", service: "Fractional CFO, fundraising support", problem: "Pre-Series B preparation with no investor-grade data room and unclear unit economics across three markets.", outcome: "Data room ready in seven weeks. Round closed at top of target range with two unsolicited inbound term sheets." },
        { quote: "They came in, they fixed the boring parts of finance that everyone else avoids, and then they left. That's what I paid for. That's what I got.", reviewer: "Group CFO", companyType: "Malaysian manufacturing group", service: "Financial transformation, 6-month engagement", problem: "Multi-entity consolidation taking 15 working days. Manual journal volume rising each quarter.", outcome: "Consolidation cut to five days. Manual journals down 60%. Internal team trained and running it solo by month six." },
      ],
    },
    {
      id: "ai", order: 3,
      title: "Reviews for AI Automation & Workflow Design",
      intro: "We build agentic AI into the parts of the business where it actually moves a number, finance ops, sales ops, customer ops. The work below is in production today.",
      reviews: [
        { quote: "We'd run two AI pilots before that went nowhere. Bain Squared shipped a working agent into our AR process in five weeks. It's been running for six months and we've stopped calling it a pilot.", reviewer: "CFO", companyType: "Singapore B2B services firm", service: "Agentic AI for accounts receivable", problem: "AR aging creeping past 70 days. Two FTEs running follow-ups manually with patchy coverage.", outcome: "AR DSO down 18 days inside one quarter. Both FTEs redeployed to higher-margin work." },
        { quote: "They were the first team that didn't try to sell us a chatbot. They mapped the actual workflow first, then told us which two steps were worth automating. Refreshing.", reviewer: "Head of Operations", companyType: "Indonesian insurtech, Series B", service: "Workflow design + agent build, claims triage", problem: "Claims intake taking 48 hours to first response. Triage rules sitting in three different spreadsheets.", outcome: "First-response time down to under four hours. Triage logic now lives in one place and one team owns it." },
        { quote: "What I valued most was that they wrote down what the agent would not do, not just what it would. That made it easy to put in front of risk and compliance.", reviewer: "Chief Risk Officer", companyType: "Singapore-licensed financial services firm", service: "Agentic AI scoping + guardrails design", problem: "Internal pressure to deploy AI into a regulated workflow with no clear risk envelope.", outcome: "Approved scope shipped into one workflow. Documented control framework reused for two follow-on use cases." },
        { quote: "They built it, they handed it over, they trained two of my people, and they didn't try to sell us a maintenance contract on the way out. That alone made me a reference.", reviewer: "Founder", companyType: "Vietnamese D2C brand", service: "AI workflow build, customer service", problem: "Customer service team drowning in repetitive order-status enquiries. CSAT dropping.", outcome: "70% of order-status enquiries resolved without human touch. CSAT recovered to pre-growth-spike levels." },
      ],
    },
  ];

  for (const group of groups) {
    await upsert({
      _type: "reviewGroup",
      _id: `review-group-${group.id}`,
      id: group.id,
      title: group.title,
      intro: group.intro,
      order: group.order,
      reviews: group.reviews.map((r, i) => ({ ...r, _key: `review-${i}` })),
    });
  }
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

async function migrateFAQ() {
  console.log("\n── FAQ ──");

  const groups = [
    {
      id: "general", order: 1,
      title: "About Bain Squared",
      intro: "The firm, how it's structured, and what kind of work we actually take on.",
      items: [
        { q: "What is Bain Squared?", a: "Bain Squared is a Singapore-headquartered growth consultancy. We work with founders, CFOs, and boards across three areas: intangible asset and ESOP valuation, fractional CFO and financial transformation, and agentic AI automation. Every engagement is led by someone who has done the work inside an operating company, not someone managing it from a distance." },
        { q: "Where are you based and which markets do you cover?", a: "Our office is at 7 Temasek Boulevard, Suntec Tower One, Singapore 038987. The team is active across Singapore, Indonesia, Vietnam, Malaysia, and the Philippines. We take on work in other markets only when the engagement context fits." },
        { q: "Are you a consulting firm or an advisory firm?", a: "Neither label fits cleanly. We sit in the seat with our clients. We build the model, write the memo, ship the workflow, and hand it over. We are paid for outcomes that show up in the operating business, not for slides." },
        { q: "How is the team structured?", a: "Senior practitioners only. Every engagement is led by a partner-level operator with hands-on delivery. We don't pyramid work down to junior teams. If you hire us, the person you met in the first conversation is the person doing the work." },
        { q: "How do I get in touch?", a: "Email hello@bainsquared.com for project inquiries or use the contact form on the site. We respond to qualified inquiries within two business days." },
      ],
    },
    {
      id: "valuation", order: 2,
      title: "Intangibles & ESOP Valuation",
      intro: "Common questions on ESOPs, intangible asset valuation, and audit-related work.",
      items: [
        { q: "Do you handle ESOP valuations for early-stage startups?", a: "Yes. We work with companies from seed stage through pre-IPO. For early-stage clients, the deliverable is usually a defensible strike price for new option grants, supported by a memo that holds up under auditor and investor review." },
        { q: "What standards do your valuations follow?", a: "We work to IVS (International Valuation Standards) and align with the relevant local accounting frameworks, including IFRS and SFRS(I). For ESOP grants, the methodology is consistent with what auditors in Singapore and the wider region expect." },
        { q: "How long does an ESOP valuation typically take?", a: "Two to four weeks from kickoff for a standard refresh. Faster turnarounds are possible when the underlying financials and cap table are clean. We will tell you if your timeline is unrealistic before you sign." },
        { q: "Can you support a purchase price allocation after an acquisition?", a: "Yes. We handle PPA work across customer relationships, technology, brand, and goodwill. The output is built to sit inside an audit file and survive review without rework." },
        { q: "Do you provide expert witness or litigation support?", a: "Selectively. We take this work on when the underlying engagement matches our domain. We do not run pure forensic practices." },
      ],
    },
    {
      id: "cfo", order: 3,
      title: "Fractional CFO & Financial Transformation",
      intro: "Questions on how the CFO engagements run, what they cost, and when to hire one.",
      items: [
        { q: "When should I hire a fractional CFO versus a full-time hire?", a: "Hire fractional when the finance function needs senior thinking right now but the company is not ready to support a full-time CFO. A common pattern is six to twelve months of fractional work that sets up the cadence and systems, followed by a permanent hire we help you scope and interview." },
        { q: "What does a typical fractional CFO engagement cover?", a: "Board and investor reporting, financial planning and analysis, cash and runway management, close-cycle redesign, fundraising support, and team build-out. The exact scope is set in the first two weeks based on what the business actually needs, not a templated checklist." },
        { q: "How many days a week does the fractional CFO commit?", a: "Engagements run between one and three days a week depending on stage. We do not stretch the same partner across so many engagements that none of them get real attention." },
        { q: "Do you help with fundraising?", a: "Yes. We prepare the data room, the model, the narrative, and the diligence responses. We sit in investor sessions when it helps. We do not act as a placement agent." },
        { q: "What's the handover plan at the end of the engagement?", a: "Every engagement is designed to end. We document the operating cadence, train the in-house team, and step out cleanly. If you want to retain us on a lighter footprint after, we'll discuss it. We do not push for it." },
      ],
    },
    {
      id: "ai", order: 4,
      title: "Agentic AI & Workflow Automation",
      intro: "Questions on what we actually build, where it goes in the business, and how risk and compliance are handled.",
      items: [
        { q: "What does 'agentic AI' mean in your work?", a: "It means AI systems that take a defined action inside an operating workflow, not chatbots and not dashboards. The agent reads a system, makes a decision inside a documented envelope, takes an action, and writes back. Humans stay in the loop where it matters." },
        { q: "Where do you typically deploy agents first?", a: "Finance ops (AR follow-up, expense triage, reconciliation), sales ops (lead qualification, CRM hygiene), and customer ops (status inquiries, claims triage). These are the places where the work is repetitive enough to automate and important enough to be worth doing well." },
        { q: "How do you handle compliance and risk for regulated workflows?", a: "We start by documenting what the agent will not do, then what it will. The control framework is written down and reviewed with the client's risk function before code ships. For regulated clients, we align with MAS expectations and the firm's internal model risk policy." },
        { q: "Do you build on a specific platform or stack?", a: "We are platform-agnostic. The choice of LLM, orchestration layer, and integration pattern is driven by the workflow and the client's existing stack, not by a vendor relationship. We will tell you when an off-the-shelf tool beats a custom build." },
        { q: "What's the smallest engagement you'll take on?", a: "A scoping sprint, usually two to three weeks. The output is a written assessment of which workflows are worth automating, in what order, and what the expected return looks like. Clients use this to make a build-or-don't-build call without committing to a full engagement." },
      ],
    },
    {
      id: "engagement", order: 5,
      title: "Engagement, Pricing, and Confidentiality",
      intro: "How engagements are structured, priced, and protected.",
      items: [
        { q: "How do you price your work?", a: "Fixed fee for defined scope. Day rates for advisory and fractional CFO retainers. We send a written scope and fee letter before any work starts and we don't bill outside it without a documented change." },
        { q: "Do you sign NDAs?", a: "Yes, as standard. We can work to your template or provide ours. For sensitive engagements, we structure access controls inside the team so only named individuals see named data." },
        { q: "Can you work with our existing advisors and auditors?", a: "Routinely. Most of our valuation and CFO work runs alongside an external auditor, tax advisor, or legal counsel. We coordinate directly with them when the client asks us to." },
        { q: "What's the typical engagement length?", a: "Valuation work runs two to six weeks. CFO engagements run six to twelve months. AI automation work runs four to twelve weeks for a first deployment. Anything shorter is a scoping sprint." },
        { q: "Do you publish client names?", a: "Only when the client has explicitly approved it in writing. The reviews on our site are anonymized to company type and role unless we have that approval on file." },
      ],
    },
  ];

  for (const group of groups) {
    await upsert({
      _type: "faqGroup",
      _id: `faq-group-${group.id}`,
      id: group.id,
      title: group.title,
      intro: group.intro,
      order: group.order,
      items: group.items.map((item, i) => ({ ...item, _key: `faq-${i}` })),
    });
  }
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

async function main() {
  console.log("Starting migration to Sanity...");
  console.log(`Project: 84yn8vov / dataset: production\n`);

  await migrateArticles();
  await migrateInsightCards();
  await migrateClientStories();
  await migrateReviews();
  await migrateFAQ();

  console.log("\nMigration complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
