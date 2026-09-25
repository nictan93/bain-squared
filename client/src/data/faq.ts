/**
 * FAQ content.
 * Grouped by topic. Plain Q&A, operator voice, no marketing fluff.
 */

export type FAQItem = {
  q: string;
  a: string;
};

export type FAQGroup = {
  id: string;
  title: string;
  intro: string;
  items: FAQItem[];
};

export const FAQ_GROUPS: FAQGroup[] = [
  {
    id: "general",
    title: "About Bain Squared",
    intro:
      "The firm, how it's structured, and what kind of work we actually take on.",
    items: [
      {
        q: "What is Bain Squared?",
        a: "Bain Squared is a Singapore-based advisory and delivery firm. We help businesses put AI into operations, strengthen their finance function, and understand the value of intangible assets and employee equity. Our work combines analysis, implementation and support for the teams responsible for the result.",
      },
      {
        q: "Where are you based and which markets do you cover?",
        a: "We are based in Singapore. For work in other markets, we agree the delivery arrangements and any local specialist requirements during scoping.",
      },
      {
        q: "Are you a consulting firm or an advisory firm?",
        a: "We provide both advice and implementation. An engagement can include assessing a problem, building a financial model or workflow, supporting its introduction, and documenting how your team will use it.",
      },
      {
        q: "How is the team structured?",
        a: "We agree the engagement lead, responsibilities and specialist support with you before work begins. The team is shaped around the scope and the expertise it requires.",
      },
      {
        q: "How do I get in touch?",
        a: "Email hello@bainsquared.com or use the contact page. Tell us about the business, the problem you want to solve and any timing requirements.",
      },
    ],
  },
  {
    id: "valuation",
    title: "Intangibles & ESOP Valuation",
    intro:
      "Common questions on ESOPs, intangible asset valuation, and audit-related work.",
    items: [
      {
        q: "Do you handle ESOP valuations for early-stage startups?",
        a: "Yes. The starting point is the purpose of the valuation, the grant terms and the available company information. We distinguish the value of the underlying equity from the fair value of the options, and agree the required outputs with you.",
      },
      {
        q: "What standards do your valuations follow?",
        a: "The purpose of the valuation determines the applicable standards and reporting requirements. We agree these at the outset and discuss the proposed methods and assumptions with your finance team and, where relevant, your auditor.",
      },
      {
        q: "How long does an ESOP valuation typically take?",
        a: "Timing depends on the grant structure, available financial information and review requirements. We confirm a schedule after reviewing the brief and data requirements.",
      },
      {
        q: "Can you support a purchase price allocation after an acquisition?",
        a: "We can support the valuation of identifiable intangible assets, such as customer relationships, technology and brands, as part of a purchase price allocation. The accounting treatment and residual goodwill are considered with your finance team and auditor.",
      },
      {
        q: "Do you provide expert witness or litigation support?",
        a: "Dispute-related work requires a separate assessment of the subject matter, independence requirements and relevant expertise. Contact us with the brief so we can establish whether we are a suitable fit.",
      },
    ],
  },
  {
    id: "cfo",
    title: "Fractional CFO & Financial Transformation",
    intro:
      "Questions on how the CFO engagements run, what they cost, and when to hire one.",
    items: [
      {
        q: "When should I hire a fractional CFO versus a full-time hire?",
        a: "A fractional CFO can suit a business that needs senior finance support before the role warrants a full-time appointment, or during a transition. The right arrangement depends on the decisions, workload and continuity the business needs.",
      },
      {
        q: "What does a typical fractional CFO engagement cover?",
        a: "The scope can include planning and forecasting, cash management, board reporting, finance processes and fundraising preparation. We agree priorities, responsibilities and deliverables before the engagement starts.",
      },
      {
        q: "How many days a week does the fractional CFO commit?",
        a: "The commitment is agreed around the workload, meeting schedule and decisions that need support. We also define how your team can reach us between scheduled working sessions.",
      },
      {
        q: "Do you help with fundraising?",
        a: "We support fundraising preparation through financial models, management information, data-room preparation and responses to financial due diligence. We do not act as a placement agent or arrange investments.",
      },
      {
        q: "What's the handover plan at the end of the engagement?",
        a: "We agree the handover or ongoing support arrangements as part of the scope. Handover can include documentation, training and a clear allocation of responsibilities to your internal team.",
      },
    ],
  },
  {
    id: "ai",
    title: "Agentic AI & Workflow Automation",
    intro:
      "Questions on what we actually build, where it goes in the business, and how risk and compliance are handled.",
    items: [
      {
        q: "What does 'agentic AI' mean in your work?",
        a: "It means AI that can carry out defined tasks in a business workflow, such as reviewing information, preparing a response or updating a system. We specify its access, permitted actions and the decisions that require human approval.",
      },
      {
        q: "Where do you typically deploy agents first?",
        a: "Potential starting points include reconciliation, expense review, lead qualification and customer-service triage. We assess the process, data quality, risk and expected benefit before selecting a workflow.",
      },
      {
        q: "How do you handle compliance and risk for regulated workflows?",
        a: "We agree permitted actions, access controls, review points and escalation with the people responsible for the workflow. Where sector-specific requirements apply, your risk, compliance and legal teams help establish the requirements for deployment.",
      },
      {
        q: "Do you build on a specific platform or stack?",
        a: "We assess the workflow and your existing systems before recommending tools. The options can include configuring existing software, connecting services or building a custom component. Cost, security, maintainability and handover all inform the choice.",
      },
      {
        q: "What's the smallest engagement you'll take on?",
        a: "A focused assessment can help you decide which workflow to address first. We agree its scope and duration, then assess feasibility, information requirements, risks and the next steps before you commit to implementation.",
      },
    ],
  },
  {
    id: "engagement",
    title: "Engagement, Pricing, and Confidentiality",
    intro:
      "How engagements are structured, priced, and protected.",
    items: [
      {
        q: "How do you price your work?",
        a: "We propose a fee structure that fits the work, such as a fixed fee for a defined project or a retainer for ongoing support. The proposal sets out scope, deliverables, fees and how changes will be agreed.",
      },
      {
        q: "Do you sign NDAs?",
        a: "We can agree a confidentiality arrangement before you share sensitive information. Let us know if you have an NDA or particular access requirements.",
      },
      {
        q: "Can you work with our existing advisors and auditors?",
        a: "Yes. We can coordinate with your finance team, auditor, tax adviser, legal counsel and technology providers. Their roles and review points should be clear in the engagement scope.",
      },
      {
        q: "What's the typical engagement length?",
        a: "Duration depends on the scope, available information and review process. We set out milestones and dependencies in the proposal, including any support required after delivery.",
      },
      {
        q: "Do you publish client names?",
        a: "We seek permission before identifying a client in published work. Any case study also needs an agreed description of the engagement and a clear basis for its results.",
      },
    ],
  },
];
