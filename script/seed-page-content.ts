/**
 * Populates all 7 page singletons + 4 featured-topic documents with the
 * content currently hardcoded in the frontend components.
 * Also migrates existing openRole documents into careersFormPage.roles.
 *
 * Idempotent — safe to re-run.
 * Run: SANITY_API_TOKEN=... npx tsx script/seed-page-content.ts
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

let keyCounter = 0;
const key = () => `k${(++keyCounter).toString(36).padStart(4, "0")}`;

async function upsert(doc: Record<string, unknown>) {
  await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
  console.log(`  ✓ ${doc._type} / ${doc._id}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Home page
// ─────────────────────────────────────────────────────────────────────────────
async function seedHomePage() {
  console.log("\n── Home page ──");
  await upsert({
    _type: "homePage",
    _id: "homePage",
    hero: {
      line1: "Driving Growth",
      line2: "Today. Tomorrow. Beyond.",
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    },
    callout: {
      headlineBefore: "Leaders want",
      headlineAccent: "AI to work",
      headlineAfter: "by ‘next Tuesday’.",
      body: "But there are three foundations you need in place first. This is where Bain Squared comes in. Rebuild. Rewire. Reimagine. Operator judgment for the AI era.",
      ctaLabel: "Explore our capabilities",
      ctaHref: "/what-we-do",
    },
    aiInAction: {
      headlineAccent: "AI that works",
      headlineAfter: "in action",
      body: "Our clients get to focus on improving commercial results, rather than having their stack run rings around them.",
      ctaLabel: "View client work",
      ctaHref: "/insights/client-stories",
    },
    clientWorkStories: [
      {
        _key: key(),
        eyebrow: "Featured client success story",
        title: "An EPC Leader Transforms Itself Amid Intense Volatility",
        stats: [
          { _key: key(), value: "$300M", label: "saved over two years" },
          { _key: key(), value: "2.5x", label: "stock price increase over two years" },
        ],
        href: "/insights/client-stories",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      },
      {
        _key: key(),
        eyebrow: "Featured client success story",
        title: "Series B SaaS Founder Rebuilds the Operating Model in 90 Days",
        stats: [
          { _key: key(), value: "42%", label: "gross margin lift" },
          { _key: key(), value: "18mo", label: "cash runway extension" },
        ],
        href: "/insights/client-stories",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80",
      },
      {
        _key: key(),
        eyebrow: "Featured client success story",
        title: "Family-Owned Group Defends an ESOP Valuation Under Audit",
        stats: [
          { _key: key(), value: "$48M", label: "valuation defended" },
          { _key: key(), value: "0", label: "audit adjustments" },
        ],
        href: "/insights/client-stories",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    careersBand: {
      headline: "Together, let’s be extraordinary.",
      body: "Most advisory work rewards slide-counting. Ours rewards judgment. If you want to build the playbook for AI, finance transformation, and intangibles valuation alongside operators who have actually run the function, this is the team. Bain Squared is hiring real operators, not consultants.",
      ctaLabel: "Explore careers with us",
      ctaHref: "/careers",
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80",
    },
    ctaStrip: {
      text: "Bring us your hardest growth question.",
      buttonLabel: "Get in touch",
      href: "/contact",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. What we do page
// ─────────────────────────────────────────────────────────────────────────────
async function seedWhatWeDoPage() {
  console.log("\n── What we do page ──");
  await upsert({
    _type: "whatWeDoPage",
    _id: "whatWeDoPage",
    intro: {
      paragraph:
        "Everyone agrees AI matters. Fewer leaders agree on where to start, or who owns the risk when it breaks. CIOs worry about fragile cores. Functional chiefs want AI to streamline their functions. CEOs and product leaders want something new in market. Most AI programs fail by picking only one of these.",
      headlineBefore: "How Bain Squared helps every chief deliver",
      headlineAccent: "growth",
    },
    pillarSwitcher: [
      {
        _key: key(),
        tab: "Build efficiency using existing systems",
        description:
          "We rebuild operating cores so the work AI is supposed to accelerate actually has somewhere to land. Real systems, real data, real decisions.",
        card: {
          tag: "Agentic AI Automation",
          title: "Where agent pilots actually start paying off",
          source: "Squared Perspective",
          href: "/insights/agentic-ai-pilots-pay-off",
          imageUrl:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
        },
      },
      {
        _key: key(),
        tab: "Refine the financial story",
        description:
          "We rewire FP&A and reporting so the numbers move with the business, not the calendar. Operator-grade finance for the AI era.",
        card: {
          tag: "Financial Transformation",
          title: "Rewiring FP&A for the AI era",
          source: "Squared Report",
          href: "/insights/rewiring-fpa",
          imageUrl:
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
        },
      },
      {
        _key: key(),
        tab: "Reimagine value",
        description:
          "We value what balance sheets miss. Brand, IP, ESOPs, and the intangible engines that drive real enterprise worth.",
        card: {
          tag: "Intangibles Valuation",
          title: "The 90% of value most balance sheets miss",
          source: "Squared Report",
          href: "/insights/intangibles-90-percent",
          imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        },
      },
    ],
    capabilitiesHeading: "Explore our capabilities",
    perspectiveFeature: {
      headline:
        "The Squared Method. The operator’s playbook for getting AI to work.",
      body: "See how we diagnose the real bottleneck, design the system you actually need, deploy it inside your stack, and defend the valuation when the auditor or board pushes back.",
      ctaLabel: "Learn more",
      ctaHref: "/insights/the-squared-method",
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    },
    squaredMethod: {
      headlineBefore: "Operator-led delivery with",
      headlineAccent: "the Squared Method",
      body: "Four phases, run in sequence: Diagnose the real bottleneck and the risk owner. Design the operating change, not a deck. Deploy inside your stack alongside your team, not in a parallel sandbox. Defend the result when the board, the auditor, or the next AI cycle pushes back. Designed to move from boardroom decision to operating reality in weeks, not quarters.",
      steps: ["Diagnose", "Design", "Deploy", "Defend"],
    },
    ctaStrip: {
      text: "Explore what we do.",
      buttonLabel: "Speak with us",
      href: "/contact",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Who we work with page
// ─────────────────────────────────────────────────────────────────────────────
async function seedWhoWeWorkWithPage() {
  console.log("\n── Who we work with page ──");
  await upsert({
    _type: "whoWeWorkWithPage",
    _id: "whoWeWorkWithPage",
    hero: {
      title: "Who we",
      accentSuffix: "work with",
      lead: "Operators, founders, and boards who treat AI, finance, and intangibles as one connected build.",
      body: "We are selective. The work we do is operator-led, not slide-led, which means the teams we partner with have to be ready to rebuild the parts of the business that the next phase of growth depends on.",
      ctas: [
        { _key: key(), label: "Bring us your problem", href: "/contact", variant: "primary" },
        { _key: key(), label: "See what we do", href: "/what-we-do", variant: "outline" },
      ],
    },
    imageStripCards: [
      { _key: key(), image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", eyebrow: "Industry", title: "Technology" },
      { _key: key(), image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80", eyebrow: "Industry", title: "SaaS" },
      { _key: key(), image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80", eyebrow: "Industry", title: "Professional Services" },
      { _key: key(), image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80", eyebrow: "Industry", title: "Healthcare" },
    ],
    relevantCompanies: {
      introParagraph:
        "Operator-led advisory only works if the operator on the other side is ready. We work with leadership teams who treat AI, finance, and intangibles as one connected build, not three separate projects.",
      headlineBefore: "Companies that are relevant to",
      headlineAccent: "our focus",
      headlineAfter: "",
      segments: [
        {
          _key: key(),
          tab: "Funded Startups",
          description:
            "Series A through C teams under pressure to convert capital into durable revenue. We tighten the operating core, design the agentic stack, and rebuild the financial story before the next raise.",
          imageUrl:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
          imageCaption:
            "Inside the operator’s stack: AI workflows, FP&A discipline, intangible value made visible.",
        },
        {
          _key: key(),
          tab: "Growing SMEs",
          description:
            "Founder-led businesses scaling past their first inflection. We install the systems, controls, and operator playbooks that let leadership step out of the weeds without losing the edge.",
          imageUrl:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
          imageCaption:
            "Built for the next stage: tighter operations, cleaner numbers, sharper decisions.",
        },
        {
          _key: key(),
          tab: "Expanding Companies",
          description:
            "Mid-market and pre-IPO businesses entering new markets, acquiring assets, or restructuring for scale. We bring fractional CFO depth, intangibles valuation rigor, and the operator instincts boardrooms actually need.",
          imageUrl:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
          imageCaption:
            "From scale-up to enterprise: defendable numbers, real intangibles, board-grade clarity.",
        },
      ],
    },
    clientStory: {
      eyebrow: "Client story",
      headline: "Bold steps forward, taken with discipline.",
      body: "A regional SaaS operator came to us mid-raise with a story the numbers could not yet defend. We rebuilt the operating model, installed an agentic ops layer in the revenue stack, and rewrote the intangibles narrative for the data room. The round closed on the operator’s terms.",
      ctaLabel: "Read the client story",
      ctaHref: "/contact",
      imageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Operators in a working session reviewing a rebuilt operating model.",
    },
    partnerEcosystems: {
      eyebrow: "Partner ecosystems",
      before: "We build alongside the",
      accent: "partners and platforms",
      after: "our clients already trust.",
      body: "Bain Squared connects operator-grade advisory with the engineering, data, and capital partners that turn a plan into a running system. We bring the partners in early, on the client’s terms, not ours.",
    },
    whitepaper: {
      eyebrow: "Whitepaper",
      headline: "The operator’s playbook for agentic AI in the finance function.",
      body: "Most AI programs stall because the operating core was never ready. This paper lays out how we sequence agentic build-outs inside the CFO suite, the controls we install before automation goes live, and the intangibles we make visible to the board.",
      ctaLabel: "Download the paper",
      ctaHref: "/contact",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Cover of the Bain Squared whitepaper on agentic AI in finance.",
    },
    ctaStrip: {
      text: "Bring us your equivalent problem.",
      buttonLabel: "Reach out",
      href: "/contact",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. Insights page
// ─────────────────────────────────────────────────────────────────────────────
async function seedInsightsPage() {
  console.log("\n── Insights page ──");
  await upsert({
    _type: "insightsPage",
    _id: "insightsPage",
    hero: {
      title: "Insights",
      ctaLabel: "Sign up for our newsletter",
      ctaHref: "#subscribe",
      headline: "The operator-led view on what is changing in business.",
      body: "Briefs, field notes, and long-form research from the partners who sit inside the operator’s seat. One topic, one argument, no filler. Built to be used in the next decision you make, not skimmed.",
    },
    imageStripCards: [
      { _key: key(), image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", title: "Agentic AI" },
      { _key: key(), image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80", title: "Financial Transformation" },
      { _key: key(), image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80", title: "Intangibles Valuation" },
      { _key: key(), image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80", title: "Growth Strategy" },
    ],
    whitepaperPanel: {
      headline: "Bain Squared’s 2026 Operator Outlook",
      body: "Our flagship annual study. Twelve operator interviews, six data sets, and one practical thesis on where the next two years of value will be made and lost. Download the report and use it inside your next planning cycle.",
      ctaLabel: "Read the report",
      ctaHref: "/contact",
      imageUrl:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Operator reading the 2026 Outlook on a tablet.",
    },
    newsletter: {
      heading: "Stay sharp. One brief, once a month.",
      subheading:
        "Operator notes from inside the work. No filler, no forwarded decks. Unsubscribe any time.",
      ctaLabel: "Subscribe",
      successMessage: "You’re in. We’ll be in touch.",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Careers page
// ─────────────────────────────────────────────────────────────────────────────
async function seedCareersPage() {
  console.log("\n── Careers page ──");
  await upsert({
    _type: "careersPage",
    _id: "careersPage",
    hero: {
      title: "Together let’s be",
      accentSuffix: "extraordinary",
      lead: "We hire operators who have run the work, not just modeled it. The bar is high. The room is small. The work is real.",
      body: "If you have rebuilt a finance function, shipped agentic systems inside a real business, or made intangibles defendable in front of a board, we want to talk. Bain Squared is built for the operators clients can actually feel in the room.",
      ctas: [
        { _key: key(), label: "Search open roles", href: "/careers-form", variant: "primary" },
      ],
    },
    imageStripCards: [
      { _key: key(), image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80", eyebrow: "Culture", title: "Operator-led, always." },
      { _key: key(), image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", eyebrow: "Culture", title: "Build, then advise." },
      { _key: key(), image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80", eyebrow: "Culture", title: "Deep work, protected." },
      { _key: key(), image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", eyebrow: "Culture", title: "Small room, high bar." },
    ],
    whyBainSquaredTabs: [
      { _key: key(), label: "About us", body: "Bain Squared is an operator-led advisory firm built for founders, CFOs, and boards who treat AI, finance, and intangibles as one connected build. We hire operators who have run the work, not just modeled it.", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80", imageCaption: "Inside the firm: operators rebuilding the work, not just advising on it." },
      { _key: key(), label: "Our application process", body: "Every application is reviewed by a partner, not a filter. You’ll have a craft interview, a working session against a real client problem, and a conversation with the people you’ll actually work alongside. We aim to close every loop within three weeks.", imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80", imageCaption: "A real problem, a real room, a real decision." },
      { _key: key(), label: "Consultant life", body: "Consultants here own the build end to end. You’ll lead client workstreams, sit in the operator’s seat during the rebuild, and ship work the client’s team will still be running a year after you leave. Pretty decks alone do not count as delivery.", imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80", imageCaption: "Owning the work from diagnosis through to handover." },
      { _key: key(), label: "Mid-career switch", body: "Many of us joined after a decade in operating roles. If you have run finance, product, or operations inside a real business, we want to talk. We invest in translating operator instincts into advisory craft.", imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80", imageCaption: "Operator backgrounds welcome, and actively recruited." },
      { _key: key(), label: "How we care for our people", body: "Sustainable utilisation, transparent comp bands, real parental leave, and a culture that protects deep work. We staff projects to be done well, not to be billable for the sake of being billable.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80", imageCaption: "Built so the team can keep doing this work for a long time." },
      { _key: key(), label: "How we support your growth", body: "A named partner sponsor from day one, quarterly craft reviews against published rubrics, and a training budget you actually get to spend. Career paths are documented, not implied.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80", imageCaption: "Clear paths, named sponsors, real budget." },
    ],
    youMatter: {
      eyebrow: "You matter",
      headline: "Your work, your craft, your career.",
      body: "We invest in the operator behind the consultant. Named partner sponsors, quarterly craft reviews, transparent comp bands, and the kind of project staffing that lets you actually finish what you start. Career growth here is documented, not implied.",
      ctaLabel: "Learn more about life here",
      ctaHref: "/careers-form",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Two consultants in a working session, focused on the work.",
    },
    insideHQSection: {
      heading: "Inside Bain Squared HQ",
      seeAllLabel: "See all insights",
      seeAllHref: "/insights",
    },
    ctaStrip: {
      text: "Do your best work, on your terms.",
      buttonLabel: "Join our team",
      href: "/careers-form",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. Careers form page (includes migrated roles from openRole docs)
// ─────────────────────────────────────────────────────────────────────────────
async function seedCareersFormPage() {
  console.log("\n── Careers form page ──");
  await upsert({
    _type: "careersFormPage",
    _id: "careersFormPage",
    formIntro: {
      paragraph:
        "Every applicant is reviewed by a real human, always. No filters, no auto-reject. Tell us about the work you have shipped, the operating problems you have solved, and the kind of room you do your best work in.",
      headline: "Every application is read by a",
      accent: "real human.",
    },
    roles: [
      { _key: key(), label: "Consultant", description: "Own client workstreams end to end. You’ll sit in the operator’s seat during the rebuild, ship work that survives after handover, and learn craft from partners who have run the work themselves.", imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80" },
      { _key: key(), label: "Senior Consultant", description: "Lead full engagements with partner oversight. You’ll scope the work, run the diagnose phase, manage the team, and own the handover quality bar that clients keep referring us on.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80" },
      { _key: key(), label: "Associate", description: "The craft track. You’ll build the models, ship the agentic prototypes, and produce the analysis the operator on the other side actually uses. We invest heavily in your tooling and depth.", imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" },
      { _key: key(), label: "Partner", description: "Run a piece of the firm. Partners here carry client outcomes, hire the next generation of operators, and protect the craft bar that makes Bain Squared what it is. Equity track, operator background expected.", imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80" },
      { _key: key(), label: "Other", description: "Operations, finance, design, engineering, recruiting. If you would shape Bain Squared from inside the firm rather than on the client side, tell us where you’d add the most. The bar is the same.", imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" },
    ],
    formSection: {
      heading: "Apply now",
      functionOptions: [
        "Consultant",
        "Senior Consultant",
        "Associate",
        "Partner",
        "Other",
      ],
      submitSuccessHeading: "Your mail client just opened.",
      submitSuccessBody:
        "Please attach your resume to the draft and hit send. We review every application by a real human, and aim to close every loop within three weeks.",
      resubmitLabel: "Submit another application",
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. Contact page
// ─────────────────────────────────────────────────────────────────────────────
async function seedContactPage() {
  console.log("\n── Contact page ──");
  await upsert({
    _type: "contactPage",
    _id: "contactPage",
    intro: {
      headlinePart: "Bring us your",
      headlineAccent: "problem.",
      body: "Tell us where the operating core needs the rebuild. A partner will get back to you within two business days.",
    },
    form: {
      serviceOptions: [
        "Agentic AI",
        "Financial Advisory",
        "Intangibles Valuation",
        "The Squared Method (all three)",
        "Not sure yet",
      ],
      successHeading: "Message sent.",
      successBody:
        "A partner will get back to you within two business days. All inquiries are treated as confidential.",
      resubmitLabel: "Send another message",
      submitLabel: "Send message",
      privacyNoticeText:
        "I agree that Bain Squared may process this information to respond to my inquiry, and I have read the privacy notice.",
    },
    sidebarHeading: "More information",
    officeLocations: [
      {
        _key: key(),
        city: "Singapore",
        address: "7 Temasek Boulevard, Suntec Tower One, Singapore 038987",
      },
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. Featured topic pages
// ─────────────────────────────────────────────────────────────────────────────
async function seedFeaturedTopics() {
  console.log("\n── Featured topics ──");

  const topics = [
    {
      _id: "featured-topic-ai",
      slugCurrent: "ai",
      title: "Agentic AI",
      titleAccent: "Built to act, not just chat.",
      lede: "What operators actually need to know about agents, governance, and the new shape of work.",
      heroImageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
      introParagraph: "Agentic AI is moving from demo to operating system. The operators we work with are past the pilot phase and into the harder questions: which decisions should an agent own, how do you supervise a fleet of them, and what does the org chart look like when software starts doing the coordinating. The pieces below are what we are seeing inside the room.",
      introBefore: "From experiment to",
      introAccent: "operating layer",
      introAfter: ".",
      gridHeading: "What we have been thinking about",
    },
    {
      _id: "featured-topic-financial-transformation",
      slugCurrent: "financial-transformation",
      title: "Financial Transformation",
      titleAccent: "The CFO suite, rebuilt for an agentic decade.",
      lede: "Operator notes on closing faster, forecasting better, and rebuilding the finance function around real signal.",
      heroImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=80",
      introParagraph: "Finance is the function under the most pressure to change and the least permission to break. The operators we work with are compressing the close, replacing the annual plan with rolling forecasts, and installing the controls they will wish they had at the next raise. Real change, with the working papers attached.",
      introBefore: "Finance, rebuilt for the",
      introAccent: "operator",
      introAfter: ".",
      gridHeading: "What we have been thinking about",
    },
    {
      _id: "featured-topic-intangibles-valuation",
      slugCurrent: "intangibles-valuation",
      title: "Intangibles Valuation",
      titleAccent: "Putting a defensible number on what you cannot see.",
      lede: "How to price brand, IP, data, and ESOPs in a way that holds up to the audit committee.",
      heroImageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=80",
      introParagraph: "Most of the value in a modern business sits in assets the balance sheet does not see. Brand equity, customer data, IP, ESOP pools. Operators ask the same question every time: what is it worth, and can we defend the number. The pieces below are how we get from feel to figure inside the data room.",
      introBefore: "Make the intangible",
      introAccent: "defendable",
      introAfter: ".",
      gridHeading: "What we have been thinking about",
    },
    {
      _id: "featured-topic-growth-strategy",
      slugCurrent: "growth-strategy",
      title: "Growth Strategy",
      titleAccent: "Plans that compound, not plans that present well.",
      lede: "Operator views on go-to-market, pricing, and the three questions behind every growth plan worth running.",
      heroImageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
      introParagraph: "Growth strategy is mostly written for the board and rarely written for the operator who has to run it on Monday. We work the other way around. Strip the deck, three questions decide whether the plan compounds or stalls. The pieces below are what we have been seeing inside that work.",
      introBefore: "Growth that",
      introAccent: "compounds",
      introAfter: ".",
      gridHeading: "What we have been thinking about",
    },
  ];

  for (const t of topics) {
    await upsert({
      _type: "featuredTopic",
      _id: t._id,
      slug: { _type: "slug", current: t.slugCurrent },
      eyebrow: "Featured topic",
      title: t.title,
      titleAccent: t.titleAccent,
      lede: t.lede,
      heroImageUrl: t.heroImageUrl,
      introParagraph: t.introParagraph,
      introBefore: t.introBefore,
      introAccent: t.introAccent,
      introAfter: t.introAfter,
      gridHeading: t.gridHeading,
      ctaStrip: {
        text: "We’ve been through growth, let us help.",
        buttonLabel: "Talk to us",
        href: "/contact",
      },
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
  console.log("Seeding page content to Sanity…");

  await seedHomePage();
  await seedWhatWeDoPage();
  await seedWhoWeWorkWithPage();
  await seedInsightsPage();
  await seedCareersPage();
  await seedCareersFormPage();
  await seedContactPage();
  await seedFeaturedTopics();

  console.log("\nSeed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
