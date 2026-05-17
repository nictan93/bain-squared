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
        a: "Bain Squared is a Singapore-headquartered growth consultancy. We work with founders, CFOs, and boards across three areas: intangible asset and ESOP valuation, fractional CFO and financial transformation, and agentic AI automation. Every engagement is led by someone who has done the work inside an operating company, not someone managing it from a distance.",
      },
      {
        q: "Where are you based and which markets do you cover?",
        a: "Our office is at 7 Temasek Boulevard, Suntec Tower One, Singapore 038987. The team is active across Singapore, Indonesia, Vietnam, Malaysia, and the Philippines. We take on work in other markets only when the engagement context fits.",
      },
      {
        q: "Are you a consulting firm or an advisory firm?",
        a: "Neither label fits cleanly. We sit in the seat with our clients. We build the model, write the memo, ship the workflow, and hand it over. We are paid for outcomes that show up in the operating business, not for slides.",
      },
      {
        q: "How is the team structured?",
        a: "Senior practitioners only. Every engagement is led by a partner-level operator with hands-on delivery. We don't pyramid work down to junior teams. If you hire us, the person you met in the first conversation is the person doing the work.",
      },
      {
        q: "How do I get in touch?",
        a: "Email hello@bainsquared.com for project enquiries or use the contact form on the site. We respond to qualified enquiries within two business days.",
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
        a: "Yes. We work with companies from seed stage through pre-IPO. For early-stage clients, the deliverable is usually a defensible strike price for new option grants, supported by a memo that holds up under auditor and investor review.",
      },
      {
        q: "What standards do your valuations follow?",
        a: "We work to IVS (International Valuation Standards) and align with the relevant local accounting frameworks, including IFRS and SFRS(I). For ESOP grants, the methodology is consistent with what auditors in Singapore and the wider region expect.",
      },
      {
        q: "How long does an ESOP valuation typically take?",
        a: "Two to four weeks from kickoff for a standard refresh. Faster turnarounds are possible when the underlying financials and cap table are clean. We will tell you if your timeline is unrealistic before you sign.",
      },
      {
        q: "Can you support a purchase price allocation after an acquisition?",
        a: "Yes. We handle PPA work across customer relationships, technology, brand, and goodwill. The output is built to sit inside an audit file and survive review without rework.",
      },
      {
        q: "Do you provide expert witness or litigation support?",
        a: "Selectively. We take this work on when the underlying engagement matches our domain. We do not run pure forensic practices.",
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
        a: "Hire fractional when the finance function needs senior thinking right now but the company is not ready to support a full-time CFO. A common pattern is six to twelve months of fractional work that sets up the cadence and systems, followed by a permanent hire we help you scope and interview.",
      },
      {
        q: "What does a typical fractional CFO engagement cover?",
        a: "Board and investor reporting, financial planning and analysis, cash and runway management, close-cycle redesign, fundraising support, and team build-out. The exact scope is set in the first two weeks based on what the business actually needs, not a templated checklist.",
      },
      {
        q: "How many days a week does the fractional CFO commit?",
        a: "Engagements run between one and three days a week depending on stage. We do not stretch the same partner across so many engagements that none of them get real attention.",
      },
      {
        q: "Do you help with fundraising?",
        a: "Yes. We prepare the data room, the model, the narrative, and the diligence responses. We sit in investor sessions when it helps. We do not act as a placement agent.",
      },
      {
        q: "What's the handover plan at the end of the engagement?",
        a: "Every engagement is designed to end. We document the operating cadence, train the in-house team, and step out cleanly. If you want to retain us on a lighter footprint after, we'll discuss it. We do not push for it.",
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
        a: "It means AI systems that take a defined action inside an operating workflow, not chatbots and not dashboards. The agent reads a system, makes a decision inside a documented envelope, takes an action, and writes back. Humans stay in the loop where it matters.",
      },
      {
        q: "Where do you typically deploy agents first?",
        a: "Finance ops (AR follow-up, expense triage, reconciliation), sales ops (lead qualification, CRM hygiene), and customer ops (status enquiries, claims triage). These are the places where the work is repetitive enough to automate and important enough to be worth doing well.",
      },
      {
        q: "How do you handle compliance and risk for regulated workflows?",
        a: "We start by documenting what the agent will not do, then what it will. The control framework is written down and reviewed with the client's risk function before code ships. For regulated clients, we align with MAS expectations and the firm's internal model risk policy.",
      },
      {
        q: "Do you build on a specific platform or stack?",
        a: "We are platform-agnostic. The choice of LLM, orchestration layer, and integration pattern is driven by the workflow and the client's existing stack, not by a vendor relationship. We will tell you when an off-the-shelf tool beats a custom build.",
      },
      {
        q: "What's the smallest engagement you'll take on?",
        a: "A scoping sprint, usually two to three weeks. The output is a written assessment of which workflows are worth automating, in what order, and what the expected return looks like. Clients use this to make a build-or-don't-build call without committing to a full engagement.",
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
        a: "Fixed fee for defined scope. Day rates for advisory and fractional CFO retainers. We send a written scope and fee letter before any work starts and we don't bill outside it without a documented change.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, as standard. We can work to your template or provide ours. For sensitive engagements, we structure access controls inside the team so only named individuals see named data.",
      },
      {
        q: "Can you work with our existing advisors and auditors?",
        a: "Routinely. Most of our valuation and CFO work runs alongside an external auditor, tax advisor, or legal counsel. We coordinate directly with them when the client asks us to.",
      },
      {
        q: "What's the typical engagement length?",
        a: "Valuation work runs two to six weeks. CFO engagements run six to twelve months. AI automation work runs four to twelve weeks for a first deployment. Anything shorter is a scoping sprint.",
      },
      {
        q: "Do you publish client names?",
        a: "Only when the client has explicitly approved it in writing. The reviews on our site are anonymized to company type and role unless we have that approval on file.",
      },
    ],
  },
];
