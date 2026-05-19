/**
 * Pushes all 7 capability page configs into Sanity.
 * Run: SANITY_API_TOKEN=... tsx script/migrate-capabilities.ts
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
  console.log(`  ✓ capability / ${doc._id}`);
}

function keys<T extends object>(arr: T[]): (T & { _key: string })[] {
  return arr.map((item, i) => ({ ...item, _key: `k${i}` }));
}

async function main() {
  console.log("Migrating capability pages to Sanity...\n");

  // ── AI: Agentic AI Automation ──────────────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-agentic-ai-automation",
    slug: { _type: "slug", current: "agentic-ai-automation" },
    practice: "ai",
    eyebrow: "Agentic AI Automation",
    headline: "Stop stalling, start scaling. Deliver real AI value.",
    sub: "We design, ship, and defend agents that earn their seat at the operating table.",
    heroImageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Agentic AI infrastructure visualised over a city skyline.",
    introParagraphs: [
      "Modernising core systems while scaling AI can stall pilots, drive complexity, and burn ROI. Most agent programs die in the gap between the demo and the operating reality.",
      "We change that. With the Squared Method, we connect modern architecture with production-ready agents that power intelligent workflows, copilots, and revenue motions.",
    ],
    stats: keys([
      { value: "60%", body: "faster build cycles after we wire your agentic stack into the operating core.", color: "rose" },
      { value: "90%", body: "reduction in manual data search with a multi-agent retrieval system for a healthcare operator.", color: "amber" },
      { value: "95%", body: "target precision achieved on an upgraded demand-forecasting model in under five weeks.", color: "teal" },
    ]),
    switcherHeading: "Which part of the business do you want to start with?",
    switcherItems: keys([
      { label: "Sales", title: "Agents that compound pipeline.", body: "Triage inbound, qualify with operator-grade scoring, draft outreach in the rep's voice, and book meetings without a human in the loop.", imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80", imageAlt: "Sales operators reviewing a pipeline dashboard.", caption: "Pipeline tooling, rebuilt with agent retrieval and operator-grade scoring." },
      { label: "Customer Service", title: "Resolve the ticket, save the relationship.", body: "A supervised agent fleet that triages, drafts, and resolves the majority of tickets, escalates the right cases, and writes the postmortem the team will actually read.", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80", imageAlt: "Customer service operators on a real-time queue.", caption: "Tier-1 and tier-2 coverage with a human in the loop where it matters." },
      { label: "Operations", title: "Take the manual work off the floor.", body: "Order-to-cash, invoice reconciliation, vendor onboarding, exception routing. We map the bottleneck, deploy the agent, and install the controls before the next audit cycle.", imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80", imageAlt: "Operations team running a live workflow.", caption: "Operating change inside your stack, not a parallel sandbox." },
      { label: "Marketing", title: "From campaign briefs to compounding content.", body: "Brief intake, creative production, landing pages, A/B variants, and reporting handled by a co-ordinated agent team.", imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80", imageAlt: "Marketing team reviewing campaign creative.", caption: "Brand-safe creative, shipped at the cadence the market actually moves." },
    ]),
    methodImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "An empty modern office corridor.",
    methodHeadlineLines: ["The Squared Method.", "The operator's playbook", "for getting AI to work."],
    methodBody: "See how we diagnose the real bottleneck, design the system you actually need, deploy it inside your stack, and defend the result when the board or auditor pushes back.",
    recommenderCards: keys([
      { title: "Static boxes", body: "The decisioning is hard-coded in spreadsheets and tribal knowledge. We replace it with a small set of supervised agents." },
      { title: "Manual work", body: "Hours lost to copy-paste, reconciliations, and inbox triage. We map the highest-volume tasks and automate inside your stack." },
      { title: "Messy data", body: "Disconnected systems, duplicated records, no system of record. We stand up the retrieval layer agents need, then ship the first agent on top." },
    ]),
    teamHeadline: "Talk to our AI team.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether agents, a managed pod, or an LLMO program is the right next move.",
    teamCta: "Talk to our AI team",
    seo: { title: "Agentic AI Automation | Bain Squared", description: "We design, ship, and defend agents that earn their seat at the operating table. Production-ready AI for sales, ops, customer service, and marketing." },
  });

  // ── AI: Managed Services ───────────────────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-managed-services",
    slug: { _type: "slug", current: "managed-services" },
    practice: "ai",
    eyebrow: "Managed Service",
    headline: "Let us drive ROI with results, not retainers.",
    sub: "Operator-led delivery for the work you do not want to staff in-house.",
    heroImageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Operator team running a managed service desk in real time.",
    introParagraphs: [
      "Hiring full-time for every operating motion is slow, expensive, and the wrong instinct for work that compounds quickly. Most growth teams already know what needs shipping. They just do not have the bench.",
      "We run the bench for you. A managed pod of operators, engineers, and designers, plugged into your stack with weekly outcomes you can audit.",
    ],
    stats: keys([
      { value: "3.2x", body: "more qualified leads delivered each month after the first 60 days of the managed program.", color: "rose" },
      { value: "92%", body: "of inbound callbacks handled within the SLA, with full transcript and outcome handed back to the team.", color: "amber" },
      { value: "40%", body: "lower cost per finished design mockup versus an in-house creative team carrying the same volume.", color: "teal" },
    ]),
    switcherHeading: "Pick the outcome you want us accountable to.",
    switcherItems: keys([
      { label: "Sales leads delivered", title: "Pipeline you can forecast against.", body: "Inbound triage, outbound sequencing, enrichment, and SDR-grade follow-up handled by a dedicated pod.", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80", imageAlt: "Sales pod working through a pipeline review.", caption: "Pipeline owned end to end and reported against a single weekly target." },
      { label: "Callbacks handled on time", title: "Coverage your customers can feel.", body: "A trained customer pod takes the queue across business hours and beyond.", imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80", imageAlt: "Customer success pod monitoring a live queue.", caption: "Live SLAs reported back to you each week, not buried in a portal." },
      { label: "Backend operations efficient", title: "The unsexy work, done right.", body: "Order ops, invoice reconciliation, vendor onboarding, returns, and the long tail of finance ops.", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80", imageAlt: "Operations pod reviewing a backend workflow.", caption: "Run the work, then automate it. In that order." },
      { label: "Design mockups done", title: "A creative pod that ships.", body: "Brand-safe mockups, landing pages, and campaign creative produced inside your design system.", imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1600&q=80", imageAlt: "Designer mocking up a landing page.", caption: "Inside your design system, on your file structure, on your brand." },
    ]),
    methodImageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A modern open-plan office.",
    methodHeadlineLines: ["The Squared Method.", "The operator's playbook for", "managed delivery that lands."],
    methodBody: "Diagnose the real bottleneck. Design the operating change. Deploy the pod inside your stack. Defend the outcome with weekly numbers that survive board scrutiny.",
    recommenderCards: keys([
      { title: "Static boxes", body: "Org charts that look complete on paper but leave critical work uncovered. We slot a pod into the gaps and bring the operating cadence with us." },
      { title: "Manual work", body: "Hours lost to tasks the team should not be doing. The pod takes the work, runs it to SLA, and automates the long tail." },
      { title: "Headcount heavy", body: "Plans that depend on hiring you cannot make happen fast enough. The pod gives you the capacity in weeks, with a clean off-ramp when in-house is ready." },
    ]),
    teamHeadline: "Talk to our AI team.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether agents, a managed pod, or an LLMO program is the right next move.",
    teamCta: "Talk to our AI team",
    seo: { title: "Managed Services | Bain Squared", description: "Operator-led delivery for the work you do not want to staff in-house. Results-based pods for sales, ops, customer service, and creative." },
  });

  // ── AI: LLM Optimization ───────────────────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-llm-optimization",
    slug: { _type: "slug", current: "llm-optimization" },
    practice: "ai",
    eyebrow: "LLM Optimization (LLMO)",
    headline: "Get seen in the age of AI. GEO and AEO on top of SEO.",
    sub: "Rank in answer engines, win the recommendation, and grow organic the operator way.",
    heroImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Abstract circuit pattern representing answer-engine retrieval.",
    introParagraphs: [
      "Search is no longer a list of blue links. Answer engines, copilots, and recommender models decide which brands get seen, named, and trusted. Most marketing teams are still optimising for the previous decade.",
      "We help you win the new surface. Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), and the SEO foundation underneath.",
    ],
    stats: keys([
      { value: "5x", body: "more brand mentions across answer engines after the first quarter of structured retrieval work.", color: "rose" },
      { value: "47%", body: "growth in qualified organic traffic across the operators we worked with last calendar year.", color: "amber" },
      { value: "78%", body: "of priority queries return your brand as a recommended answer after the GEO/AEO program ships.", color: "teal" },
    ]),
    switcherHeading: "Where do you want to show up first?",
    switcherItems: keys([
      { label: "Rank and get recommended", title: "Win the recommendation, not just the click.", body: "Map the answer-engine queries that matter for your category, build the retrievable content that earns the citation.", imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80", imageAlt: "Marketer reviewing answer-engine rankings.", caption: "Citations tracked weekly across the answer engines your buyers use." },
      { label: "Grow organic traffic", title: "An SEO foundation that still works in the AI era.", body: "Technical SEO, schema, content architecture, and the editorial cadence that compounds.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", imageAlt: "Analytics dashboard showing organic traffic growth.", caption: "Compound growth, measured against the metrics finance accepts." },
      { label: "Website optimization", title: "Pages that load fast and convert fast.", body: "Core Web Vitals, conversion architecture, structured data, and the editorial workflow to keep the gains.", imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80", imageAlt: "Engineer reviewing site performance metrics.", caption: "Performance and conversion treated as one engineering surface." },
    ]),
    methodImageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A quiet modern interior with neutral lighting.",
    methodHeadlineLines: ["The Squared Method.", "The operator's playbook", "for being found by AI."],
    methodBody: "Diagnose what is breaking discovery today. Design the retrieval and content stack. Deploy across answer engines and classic search. Defend the lift with traffic the CFO recognises.",
    recommenderCards: keys([
      { title: "Static boxes", body: "A site map and content calendar that no longer reflects how buyers search. We rebuild the architecture around the queries you actually need to win." },
      { title: "Manual work", body: "Hours lost to keyword spreadsheets and ad-hoc audits. We replace it with an instrumented loop that surfaces the next move every week." },
      { title: "Messy data", body: "Conversion and traffic data scattered across analytics, CRM, and the CMS. We unify the signal so the same dashboard answers marketing's question and finance's question." },
    ]),
    teamHeadline: "Talk to our AI team.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether agents, a managed pod, or an LLMO program is the right next move.",
    teamCta: "Talk to our AI team",
    seo: { title: "LLM Optimization (LLMO) | Bain Squared", description: "Rank in answer engines, win the recommendation, and grow organic. GEO, AEO, and SEO for operators who want to be found by AI." },
  });

  // ── Finance: Fractional CFO ────────────────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-fractional-cfo",
    slug: { _type: "slug", current: "fractional-cfo" },
    practice: "finance",
    eyebrow: "Fractional CFO",
    headline: "A CFO in the room when you need one. None of the overhead when you do not.",
    sub: "Operator-grade finance leadership, plugged into your stack from week one.",
    heroImageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Operator reviewing a financial model in front of a quiet office window.",
    introParagraph: "We sit alongside founders and operating teams on budgeting, forecasting, board reporting, investor communication, cash flow management, and the strategic financial decisions that decide the next twelve months. Hands on the model, not just hands on the slide.",
    introBefore: "A finance partner who",
    introAccent: "runs the work",
    introAfter: ".",
    switcherEyebrow: "How the engagement looks",
    switcherHeading: "Pick the surface you want covered first.",
    switcherItems: keys([
      { label: "Budgeting", title: "A budget the operating team will actually use.", body: "We build the budget from the floor up with the operators who own the numbers, install the cadence to maintain it, and tie it back to the metrics the board cares about.", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80", imageAlt: "Operator team reviewing a budget on a whiteboard.", caption: "Built bottom-up, defended top-down." },
      { label: "Forecasting", title: "Rolling forecasts that flex with the business.", body: "Replace the annual plan with a 13-week cash forecast and a rolling 18-month P&L view that updates as new signal comes in.", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", imageAlt: "Forecast dashboard on a high-resolution monitor.", caption: "Updated weekly, owned daily." },
      { label: "Board reporting", title: "Board packs that answer the question before it is asked.", body: "A clean monthly pack with the three or four metrics that decide the next decision, a forward-looking commentary section, and a working appendix the board can pressure-test.", imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80", imageAlt: "Board members reviewing a printed financial pack.", caption: "The pack that retires the data-quality conversation." },
      { label: "Investor communication", title: "Updates that compound investor confidence.", body: "Monthly investor notes, KPI dashboards, and the data-room hygiene that turns the next round from a scramble into a process.", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80", imageAlt: "Founder drafting an investor update on a laptop.", caption: "The investor sees the company you are actually building." },
      { label: "Cash flow management", title: "A 13-week cash view you can stake the company on.", body: "Direct-method cash forecast updated weekly, with the working scenarios for the upside and the failure modes for the downside.", imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1600&q=80", imageAlt: "Operator reviewing a printed cash schedule.", caption: "Cash, surfaced before it becomes a question." },
      { label: "Strategic decisions", title: "Financial judgment in the room when the call gets made.", body: "Pricing changes, hiring plans, M&A look-throughs, financing trade-offs. A partner who has run the work argues both sides with you, then writes the memo that goes to the board.", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80", imageAlt: "Founders in conversation around a kitchen table.", caption: "Judgment, not just the model output." },
    ]),
    whitepaperHeadline: "The operator's playbook for agentic AI in the finance function.",
    whitepaperBody: "Most AI programs stall because the operating core was never ready. This paper lays out how we sequence agentic build-outs inside the CFO suite, the controls we install before automation goes live, and the intangibles we make visible to the board.",
    whitepaperImageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    teamHeadline: "Speak with a Bain Squared CFO.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether a fractional partner or a full transformation is the right next move.",
    teamCta: "Speak with a Bain Squared CFO",
    seo: { title: "Fractional CFO | Bain Squared", description: "Operator-grade finance leadership plugged into your stack from week one. Budgeting, forecasting, board reporting, and fundraising support." },
  });

  // ── Finance: Financial Transformation ─────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-financial-transformation",
    slug: { _type: "slug", current: "financial-transformation" },
    practice: "finance",
    eyebrow: "Financial Transformation",
    headline: "Rebuild the finance function for the decade you are about to operate in.",
    sub: "Re-platform the close, the controls, and the operating model behind them.",
    heroImageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Finance team reviewing a multi-screen dashboard in a modern office.",
    introParagraph: "We rebuild finance functions around budgeting, forecasting, board reporting, investor communication, cash flow management, and the strategic financial decisions that decide the next twelve months. Real change, with the working papers, the close cadence, and the controls all updated in lock-step.",
    introBefore: "Finance, rebuilt for the",
    introAccent: "agentic decade",
    introAfter: ".",
    switcherEyebrow: "What gets rebuilt",
    switcherHeading: "Choose the part of the function you want rebuilt first.",
    switcherItems: keys([
      { label: "Budgeting", title: "A planning cycle that operates at the speed of the business.", body: "Replace the annual budget theatre with a continuous planning model. Driver-based, owned by the operating team, with the system of record finance actually trusts.", imageUrl: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80", imageAlt: "Finance team planning on a digital whiteboard.", caption: "Continuous planning, with the controls re-platformed at the same time." },
      { label: "Forecasting", title: "A forecast finance and operations can both stake on.", body: "A single shared forecast across cash, P&L, and unit economics. We unify the source data, install the cadence, and instrument the variance.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", imageAlt: "Forecast variance dashboard on multiple monitors.", caption: "One forecast, owned across finance and ops." },
      { label: "Board reporting", title: "Reporting that answers the strategic question.", body: "Re-platform the close, automate the pack, and free the finance team to write the commentary that decides the next decision.", imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80", imageAlt: "Modern boardroom mid-discussion.", caption: "The commentary, not the cleanup." },
      { label: "Investor communication", title: "An investor surface that closes the next round on its own terms.", body: "Data room, dashboards, monthly notes, and the cadence between them.", imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80", imageAlt: "Investor reviewing materials on a tablet.", caption: "Each investor conversation starts thirty minutes ahead." },
      { label: "Cash flow management", title: "Cash discipline installed into the operating model.", body: "Direct-method cash, working-capital levers wired to the operating cadence, and the controls to keep the gains.", imageUrl: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1600&q=80", imageAlt: "Operator inspecting a printed cash position summary.", caption: "Wired into the cadence the operating team already runs." },
      { label: "Strategic decisions", title: "An operating model that earns its seat at the table.", body: "Finance moves from after-the-fact reporting to up-front decision support. Pricing, M&A, capital allocation, organisational design.", imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80", imageAlt: "Leadership team in a planning session.", caption: "Finance earns the strategic seat, then defends it." },
    ]),
    whitepaperHeadline: "The operator's playbook for agentic AI in the finance function.",
    whitepaperBody: "Most AI programs stall because the operating core was never ready. This paper lays out how we sequence agentic build-outs inside the CFO suite, the controls we install before automation goes live, and the intangibles we make visible to the board.",
    whitepaperImageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    teamHeadline: "Speak with a Bain Squared CFO.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether a fractional partner or a full transformation is the right next move.",
    teamCta: "Speak with a Bain Squared CFO",
    seo: { title: "Financial Transformation | Bain Squared", description: "Re-platform your close, controls, and operating model. Finance transformation for founders, CFOs, and operators who need real change." },
  });

  // ── Valuation: Intangibles Valuation ──────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-intangibles-valuation",
    slug: { _type: "slug", current: "intangibles-valuation" },
    practice: "valuation",
    eyebrow: "Intangible Asset Valuation",
    headline: "The value you have built lives in intangibles. We make it defensible.",
    sub: "We help founders preparing for exit, ESOP rounds, intangible-heavy companies, and PE sponsors who need defensible valuations.",
    heroImageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Abstract data visualisation representing intangible asset value.",
    introParagraphs: [
      "The value you have built lives in intangibles, options, and operating leverage. We make that value defensible on paper and in the room.",
      "We value data, software, IP, brand, customer relationships, and proprietary systems to help companies make hidden enterprise value visible and defensible.",
    ],
    splitBlocks: keys([
      { eyebrow: "Intangible assets", title: "Show a defensible valuation when you fundraise.", body: "Increase the potential value of your company by adding tangible value to your intangible assets, while decreasing the risk of leakage.", tags: ["Brand", "IP", "Data", "Patents", "Trademarks", "Customer relationships"] },
      { eyebrow: "ESOP valuations", title: "Be prepared for stock-option audit requirements.", body: "We provide independent ESOP valuations for audit, financial reporting, and equity planning, helping companies quantify fair value and share-based compensation expenses.", tags: ["409A", "IFRS 2", "ASC 718", "Audit support", "Equity planning"] },
    ]),
    methodImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A quiet modern office interior.",
    methodHeadlineLines: ["The Squared Method.", "The operator's playbook for", "defensible intangibles."],
    methodBody: "Diagnose where value is hiding. Design the valuation approach the auditor will accept. Deploy the working papers inside your stack. Defend the number when the board, the auditor, or the next round pushes back.",
    teamHeadline: "Talk to our valuation team.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether the right next move is a single valuation, a portfolio of intangibles, or the full audit-ready package.",
    teamCta: "Talk to our valuation team",
    seo: { title: "Intangible Asset Valuation | Bain Squared", description: "Defensible valuations for brand, IP, data, customer relationships, and ESOP pools. Built for audit, board review, and fundraising." },
  });

  // ── Valuation: ESOP Valuation ──────────────────────────────────────
  await upsert({
    _type: "capability", _id: "capability-esop-valuation",
    slug: { _type: "slug", current: "esop-valuation" },
    practice: "valuation",
    eyebrow: "ESOP Valuation",
    headline: "Independent ESOP valuations the auditor accepts and the board can defend.",
    sub: "Built for founders preparing for exit, ESOP rounds, intangible-heavy companies, and PE sponsors who need defensible valuations.",
    heroImageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=2400&q=80",
    heroImageAlt: "Financial documents fanned across a wooden boardroom table.",
    introParagraphs: [
      "Stock-option grants are part of the operating system of a modern company. The valuation that sits behind them is where the audit and the board ask their hardest questions.",
      "We provide independent ESOP valuations for audit, financial reporting, and equity planning, helping companies quantify fair value and share-based compensation expenses.",
    ],
    splitBlocks: keys([
      { eyebrow: "ESOP valuations", title: "Be prepared for stock-option audit requirements.", body: "We provide independent ESOP valuations for audit, financial reporting, and equity planning. Each report comes with the working papers the auditor will request before they request them.", tags: ["409A", "IFRS 2", "ASC 718", "Audit support", "Equity planning"] },
      { eyebrow: "Intangible assets", title: "Show a defensible valuation when you fundraise.", body: "We value data, software, IP, brand, and customer relationships to help companies make hidden enterprise value visible and defensible inside the data room.", tags: ["Brand", "IP", "Data", "Patents", "Customer relationships"] },
    ]),
    methodImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    methodImageAlt: "A quiet modern office interior.",
    methodHeadlineLines: ["The Squared Method.", "The operator's playbook for", "defensible ESOP valuations."],
    methodBody: "Diagnose the grant cycle and audit exposure. Design the valuation approach that meets IFRS 2 and the board's bar. Deploy the working papers in weeks, not quarters. Defend the number when the auditor and investor push back.",
    teamHeadline: "Talk to our valuation team.",
    teamBody: "Bring the question your team has been arguing about. We will tell you on the first call whether the right next move is a single ESOP valuation, an annual refresh, or the full audit-ready package.",
    teamCta: "Talk to our valuation team",
    seo: { title: "ESOP Valuation | Bain Squared", description: "Independent ESOP valuations the auditor accepts and the board can defend. Built for Singapore, Indonesia, Vietnam, and the wider region." },
  });

  console.log("\nCapability migration complete.");
}

main().catch((err) => { console.error(err); process.exit(1); });
