/**
 * Reviews / client feedback content.
 * Grouped by service line. Each review carries:
 * quote, reviewer role, company type, service used, problem solved, outcome.
 *
 * Voice: operator, direct, US English. No em dashes.
 */

export type Review = {
  quote: string;
  reviewer: string;
  companyType: string;
  service: string;
  problem: string;
  outcome: string;
};

export type ReviewGroup = {
  id: string;
  title: string;
  intro: string;
  reviews: Review[];
};

export const REVIEW_GROUPS: ReviewGroup[] = [
  {
    id: "valuation",
    title: "Reviews for Intangible Asset & ESOP Valuation",
    intro:
      "Founders and CFOs typically engage us when an ESOP grant, an audit, or a tax position needs a valuation that holds up under questioning. Below is feedback from companies we've supported across Singapore, Indonesia, and Vietnam.",
    reviews: [
      {
        quote:
          "Bain Squared helped us turn a messy investor narrative into a finance pack we could confidently use in board and fundraising discussions. The ESOP valuation memo was the cleanest piece of governance work we'd produced as a company.",
        reviewer: "Founder & CEO",
        companyType: "Singapore B2B SaaS, Series A",
        service: "ESOP valuation, 409A-equivalent memo",
        problem:
          "Pre-Series A grant pool needed defensible strike pricing for new option holders and audit sign-off.",
        outcome:
          "Strike price accepted by auditor without rework. ESOP rolled out to first 18 hires inside three weeks.",
      },
      {
        quote:
          "We came in expecting a templated report. We left with a working model we still use internally to test grant sizing every quarter. They actually explained the math instead of hiding behind it.",
        reviewer: "Group CFO",
        companyType: "Indonesian family-owned consumer group",
        service: "Intangible asset valuation for restructuring",
        problem:
          "Brand and customer-list intangibles needed to be carved out for an internal restructuring ahead of a holding-company transfer.",
        outcome:
          "Restructuring closed on schedule. Tax position survived first review by counsel with no adjustments requested.",
      },
      {
        quote:
          "Most valuation work we'd seen was a number with a story bolted on. This was a story with a number that fell out of it. That difference mattered when we walked the board through it.",
        reviewer: "Audit Committee Chair",
        companyType: "Singapore-listed industrial group",
        service: "Purchase price allocation, post-acquisition",
        problem:
          "Recently acquired subsidiary required PPA across customer relationships, technology, and goodwill ahead of FY close.",
        outcome:
          "PPA delivered inside the close calendar. External auditor signed off in a single review cycle.",
      },
      {
        quote:
          "They challenged our own assumptions before the auditor did. That was the whole point of hiring them.",
        reviewer: "Finance Director",
        companyType: "Vietnamese fintech, Series B",
        service: "ESOP valuation refresh, annual",
        problem:
          "Annual refresh of fair value for option grants, with material change in trading multiples since prior cycle.",
        outcome:
          "Refreshed strike accepted at AGM. Used the model to size a top-up grant for senior hires in the same quarter.",
      },
    ],
  },
  {
    id: "cfo",
    title: "Reviews for Fractional CFO & Financial Transformation",
    intro:
      "We sit in the CFO seat for founders who need senior-level finance thinking without hiring it full time. Engagements typically run six to twelve months, with a clear handover plan to an in-house team at the end.",
    reviews: [
      {
        quote:
          "The reporting cadence shifted from monthly surprises to weekly clarity. Our board chair stopped asking for backup files because the pack already had them.",
        reviewer: "Founder & CEO",
        companyType: "Singapore healthtech, Series A",
        service: "Fractional CFO, 9-month engagement",
        problem:
          "Founder-led finance function. No FP&A. Cash runway visibility was monthly at best and the board was losing patience.",
        outcome:
          "Weekly cash and KPI pack live by week four. Hired a permanent Head of Finance in month seven with a clean handover.",
      },
      {
        quote:
          "We'd been told we needed a new ERP. They told us we needed a new chart of accounts and a real close calendar first. They were right and it saved us a six-figure implementation.",
        reviewer: "COO",
        companyType: "Southeast Asian logistics SME",
        service: "Financial transformation, close redesign",
        problem:
          "12-day month-end close, three reconciliations failing every cycle, ERP migration paused mid-scope.",
        outcome:
          "Close cut to four days. Reconciliations automated. ERP scope re-baselined to a smaller, faster rollout.",
      },
      {
        quote:
          "I'd hired fractional CFOs before. This was the first one who acted like an owner instead of a vendor. They flagged things I should have been flagging myself.",
        reviewer: "Founder",
        companyType: "Singapore e-commerce, pre-Series B",
        service: "Fractional CFO, fundraising support",
        problem:
          "Pre-Series B preparation with no investor-grade data room and unclear unit economics across three markets.",
        outcome:
          "Data room ready in seven weeks. Round closed at top of target range with two unsolicited inbound term sheets.",
      },
      {
        quote:
          "They came in, they fixed the boring parts of finance that everyone else avoids, and then they left. That's what I paid for. That's what I got.",
        reviewer: "Group CFO",
        companyType: "Malaysian manufacturing group",
        service: "Financial transformation, 6-month engagement",
        problem:
          "Multi-entity consolidation taking 15 working days. Manual journal volume rising each quarter.",
        outcome:
          "Consolidation cut to five days. Manual journals down 60%. Internal team trained and running it solo by month six.",
      },
    ],
  },
  {
    id: "ai",
    title: "Reviews for AI Automation & Workflow Design",
    intro:
      "We build agentic AI into the parts of the business where it actually moves a number, finance ops, sales ops, customer ops. The work below is in production today.",
    reviews: [
      {
        quote:
          "We'd run two AI pilots before that went nowhere. Bain Squared shipped a working agent into our AR process in five weeks. It's been running for six months and we've stopped calling it a pilot.",
        reviewer: "CFO",
        companyType: "Singapore B2B services firm",
        service: "Agentic AI for accounts receivable",
        problem:
          "AR aging creeping past 70 days. Two FTEs running follow-ups manually with patchy coverage.",
        outcome:
          "AR DSO down 18 days inside one quarter. Both FTEs redeployed to higher-margin work.",
      },
      {
        quote:
          "They were the first team that didn't try to sell us a chatbot. They mapped the actual workflow first, then told us which two steps were worth automating. Refreshing.",
        reviewer: "Head of Operations",
        companyType: "Indonesian insurtech, Series B",
        service: "Workflow design + agent build, claims triage",
        problem:
          "Claims intake taking 48 hours to first response. Triage rules sitting in three different spreadsheets.",
        outcome:
          "First-response time down to under four hours. Triage logic now lives in one place and one team owns it.",
      },
      {
        quote:
          "What I valued most was that they wrote down what the agent would not do, not just what it would. That made it easy to put in front of risk and compliance.",
        reviewer: "Chief Risk Officer",
        companyType: "Singapore-licensed financial services firm",
        service: "Agentic AI scoping + guardrails design",
        problem:
          "Internal pressure to deploy AI into a regulated workflow with no clear risk envelope.",
        outcome:
          "Approved scope shipped into one workflow. Documented control framework reused for two follow-on use cases.",
      },
      {
        quote:
          "They built it, they handed it over, they trained two of my people, and they didn't try to sell us a maintenance contract on the way out. That alone made me a reference.",
        reviewer: "Founder",
        companyType: "Vietnamese D2C brand",
        service: "AI workflow build, customer service",
        problem:
          "Customer service team drowning in repetitive order-status enquiries. CSAT dropping.",
        outcome:
          "70% of order-status enquiries resolved without human touch. CSAT recovered to pre-growth-spike levels.",
      },
    ],
  },
];

export const WHY_CLIENTS_POINTS: { title: string; body: string }[] = [
  {
    title: "Senior thinking, no consulting overhead",
    body:
      "Clients typically engage Bain Squared when they need partner-level judgement on valuation, finance, or AI without the layered teams and slide decks that come with traditional consulting. Every engagement is led by someone who has done the work, not managed it from a distance.",
  },
  {
    title: "Operator pace, not advisory pace",
    body:
      "We move at the speed of the operating business, not the speed of a quarterly steering committee. First drafts inside weeks. Working artifacts, not deliverables. Calendar time is treated as a real cost.",
  },
  {
    title: "Built to be handed over",
    body:
      "Every engagement has a defined end. We build models, workflows, and operating cadences that the in-house team owns once we step out. Recurring retainer work happens only when the client asks for it.",
  },
  {
    title: "Singapore-anchored, regionally fluent",
    body:
      "Headquartered in Singapore with active work across Indonesia, Vietnam, Malaysia, and the Philippines. The team reads the regulatory and audit context the way operators in the region read it, not the way a global template reads it.",
  },
];
