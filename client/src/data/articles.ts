import type { Block } from "@/components/ArticleBody";

export type Article = {
  slug: string;
  publication: string;        // eyebrow over hero headline
  headline: string;
  dek: string;                // lead paragraph under byline
  date: string;
  type: string;               // "Field Note" / "Perspective" / "Article" / etc
  heroImage: string;
  authors: { name: string; href?: string }[];
  withAuthors?: { name: string; href?: string }[];
  blocks: Block[];
};

export const ARTICLES: Record<string, Article> = {
  "operators-playbook-agentic-ai": {
    slug: "operators-playbook-agentic-ai",
    publication: "Bain Squared Field Notes",
    headline: "The operator's playbook for agentic AI",
    dek: "Most agent pilots stall in week six. Three patterns we see from the teams that actually ship to production, hold the line on cost, and put real revenue on the board.",
    date: "May 14, 2026",
    type: "Field Note",
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2400&q=80",
    authors: [
      { name: "Nicholas Tan", href: "#/who-we-work-with" },
      { name: "Priya Raman", href: "#/who-we-work-with" },
    ],
    withAuthors: [{ name: "the Bain Squared AI team" }],
    blocks: [
      {
        type: "p",
        dropcap: true,
        text: "**For most operators**, agentic AI has moved from a curiosity to a budget line in under twelve months. The boardroom has decided. The CFO has signed. The first agent is in flight. And then, six weeks in, the program quietly stalls. The demo works. Production does not. Nobody is sure who owns the agent. Cost is climbing. The pilot becomes a poster, and the next one starts behind.",
      },
      {
        type: "p",
        text: "We sit in those rooms. We have watched the same failure pattern repeat across sales, customer service, operations, and the back office. It is rarely a model problem. It is almost always an operating problem: an agent dropped on top of a process nobody owns, with data nobody trusts, and a metric nobody is held to.",
      },
      {
        type: "p",
        text: "This is the playbook the teams that actually ship are using. Three patterns. No magic. The work is operator work.",
      },

      { type: "h2", text: "Pattern one: Pick the seat, not the use case" },
      {
        type: "p",
        text: "The mistake we see most often is starting with the use case. *Summarize tickets. Draft outreach. Reconcile invoices.* That framing puts the agent on a horizontal shelf, available to everyone, owned by no one. Six weeks later it is a Slack channel of complaints and a quietly rising bill.",
      },
      {
        type: "p",
        text: "The teams that ship start with a **seat**. A named person, with a named KPI, who today does work that an agent can plausibly take. The SDR who must book twelve qualified meetings a week. The CS lead whose queue resolution time has not moved in two quarters. The collections analyst chasing the same eighty accounts on a spreadsheet. That person becomes the operator of the agent. They define the bar for shipping. They own the reversal when it goes wrong.",
      },
      {
        type: "quote",
        text: "An agent without a seat is a science project. An agent with a seat is a coworker.",
        attribution: "Operating partner, Bain Squared",
      },
      {
        type: "p",
        text: "This sounds obvious. It is not how most programs are run. Pick the seat first. Build the agent to it. Promote it only after that one seat hits the bar.",
      },

      { type: "h2", text: "Pattern two: Build the retrieval layer before the agent" },
      {
        type: "p",
        text: "Every team we have helped scale agents has, at some point, hit the same wall: the agent is smart, the data is not. Records are duplicated. Schemas drift between systems. The CRM disagrees with the billing system. The agent answers confidently from the wrong row, and a customer is told something that is not true.",
      },
      {
        type: "p",
        text: "The fix is unglamorous. You build the retrieval layer your agents need before you build the second agent. That means:",
      },
      {
        type: "list",
        items: [
          "**One system of record per object.** Accounts, contacts, contracts, tickets, invoices. One source of truth, written down, with the agent forbidden from reading the others.",
          "**Embeddings on the documents that matter**, refreshed on a schedule the operator controls.",
          "**A grounding contract.** The agent cites every claim it makes, and the operator can click through to the row, the doc, the line.",
          "**An eval set with real failure cases**, not just happy paths. Run it nightly. Break the build on regressions.",
        ],
      },
      {
        type: "p",
        text: "None of this is new. All of it is skipped. The teams that ship treat the retrieval layer as the product, and the agent as the interface on top of it.",
      },

      { type: "h2", text: "Pattern three: Put cost in the same dashboard as outcome" },
      {
        type: "p",
        text: "The third stall point is financial. The first agent is cheap. The second is fine. By the fifth, the bill has compounded, the operator does not know which agent is responsible for which line item, and finance is the first to ring the alarm. The program gets paused for a quarter while somebody builds a usage dashboard. Momentum is lost.",
      },
      {
        type: "p",
        text: "Teams that hold the line do one thing differently from day one. They put **cost per outcome** in the same dashboard as the outcome itself. Not cost per call. Not cost per token. Cost per qualified meeting, cost per resolved ticket, cost per dollar collected. The operator sees both numbers at the same time, every day, and is held to the ratio.",
      },
      {
        type: "p",
        text: "When the ratio breaks, the operator has the authority to throttle, to swap models, to fall back to a simpler workflow. They do not file a ticket. They act. That is the difference between a program and a poster.",
      },

      { type: "h2", text: "What to do on Monday" },
      {
        type: "p",
        text: "If you are six weeks into a program that has gone quiet, you do not need a new model. You need to do three things, in order.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**Name the seat.** Pick one person whose KPI the agent owns. Write it down. Tell the team.",
          "**Audit the retrieval layer.** Pick the single object the agent reads from most. Make it the system of record. Kill the others for that agent.",
          "**Put cost and outcome on one screen.** If your operator cannot see both numbers at once, the program is not ready to scale. Build that screen this week.",
        ],
      },
      {
        type: "p",
        text: "None of this is exotic. All of it is operator work. The teams that do it ship agents that survive contact with production. The ones that skip it run the same pilot four times in a row, with four different vendors, and wonder why the board has stopped asking about AI.",
      },

      {
        type: "p",
        text: "If you want a second opinion on where your program is stalling, we will tell you on the first call. That is what we do. [Talk to our AI team](#/contact).",
      },
    ],
  },

  "epc-leader-transforms": {
    slug: "epc-leader-transforms",
    publication: "Bain Squared Client Stories",
    headline: "An EPC leader transforms itself amid intense volatility",
    dek: "Commodity swings, FX shocks, and a backlog that no longer matched the operating model. We rebuilt the finance function around live data, and the operator held the line on cash and price for two full years.",
    date: "April 30, 2026",
    type: "Client Story",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80",
    authors: [{ name: "Nicholas Tan", href: "#/who-we-work-with" }],
    blocks: [
      {
        type: "p",
        dropcap: true,
        text: "**A regional EPC leader** came to us with a problem the boardroom already knew about. Margin had been drifting for six quarters. Commodity exposure was no longer hedged in a way the CFO could explain. The operating model still belonged to a smaller, simpler company. The brief was direct: hold cash, hold price, and do it without freezing the business.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "list",
        items: [
          "**Rebuilt the cost stack** from contract level upward, so every line item traced back to a hedgeable exposure.",
          "**Stood up a live margin desk** that the COO and CFO read together every Monday — same numbers, same screen, no reconciliation calls.",
          "**Renegotiated the top fifteen supplier contracts** against a model the operator could defend in any commercial review.",
          "**Trained the project controllers** to run the desk themselves inside ninety days. We left before the second annual planning cycle.",
        ],
      },
      { type: "h2", text: "The impact" },
      {
        type: "p",
        text: "Across two years of operating the new model, the business retained **$300M of cash** that would otherwise have leaked through margin and working capital. The share price tracked the operating story: **2.5x** across the same window. The CFO closed the engagement with a finance function that no longer needed us in the room.",
      },
      {
        type: "quote",
        text: "They did not sell us a transformation. They sold us an operating habit, and they left when the habit stuck.",
        attribution: "CFO, regional EPC operator",
      },
      {
        type: "p",
        text: "If your finance function still cannot answer margin questions in the same room as the operator, [we should talk](#/contact).",
      },
    ],
  },

  "saas-operating-model-90-days": {
    slug: "saas-operating-model-90-days",
    publication: "Bain Squared Client Stories",
    headline: "A Series B SaaS founder rebuilds the operating model in 90 days",
    dek: "Revenue had tripled. The operating model had not moved. We sat with the founder for one quarter and rebuilt the way the company plans, prices, and pays itself.",
    date: "March 18, 2026",
    type: "Client Story",
    heroImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2400&q=80",
    authors: [{ name: "Priya Raman", href: "#/who-we-work-with" }],
    blocks: [
      {
        type: "p",
        dropcap: true,
        text: "**A Series B SaaS founder** had outrun her operating model. ARR had tripled in eighteen months. Headcount had doubled. Cash burn had not improved. Pricing was three years old and nobody on the commercial team could explain it without an apology. The board wanted a path to default-alive inside two quarters.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "list",
        items: [
          "**Rewrote the pricing page** against a model that tied each tier to the value the customer measured themselves.",
          "**Rebuilt the planning stack** so the founder could see ARR, gross margin, and cash on one screen, refreshed daily.",
          "**Cut twelve products to four**, killed two integrations, and gave the engineering org back roughly a third of its capacity.",
          "**Stood up a weekly operating cadence** — one hour, one document, one decision — that survived our departure.",
        ],
      },
      { type: "h2", text: "The impact" },
      {
        type: "p",
        text: "Gross margin lifted **42%** inside the same quarter the new pricing went live. Cash runway extended by **18 months** with no headcount reduction. The founder closed her next round on the operating story, not the deck.",
      },
      {
        type: "quote",
        text: "They did not run a process. They sat with me, made the calls, and left a company that knew how to run itself.",
        attribution: "Founder & CEO, Series B SaaS operator",
      },
      {
        type: "p",
        text: "If you have outrun your operating model, [we should talk](#/contact).",
      },
    ],
  },

  "family-owned-esop-defense": {
    slug: "family-owned-esop-defense",
    publication: "Bain Squared Client Stories",
    headline: "A family-owned group defends an ESOP valuation under audit",
    dek: "A third-generation family business needed an ESOP valuation that would survive both an external audit and the family's own scrutiny. We delivered a defendable number and walked it through every stakeholder until it stuck.",
    date: "February 12, 2026",
    type: "Client Story",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
    authors: [{ name: "Nicholas Tan", href: "#/who-we-work-with" }],
    blocks: [
      {
        type: "p",
        dropcap: true,
        text: "**A third-generation family-owned operator** was rolling out an ESOP. The board had drafted a number. The auditor had questions. The family had more. The brief was simple and the bar was high: a valuation that survived audit, board, and family in the same week.",
      },
      { type: "h2", text: "What we did" },
      {
        type: "list",
        items: [
          "**Rebuilt the valuation model** from the underlying contracts, not the prior memo. Every number traceable to a source the auditor could click into.",
          "**Stress-tested the intangibles**, including brand, customer concentration, and the founder's own residual operating role.",
          "**Walked the family through the model** in person, in their language, with the disagreements named openly rather than papered over.",
          "**Coordinated directly with the audit team** so the questions were resolved before the formal review, not during it.",
        ],
      },
      { type: "h2", text: "The impact" },
      {
        type: "p",
        text: "The ESOP closed at a **$48M defended valuation** with **zero audit adjustments**. The family signed in the same room. The auditor closed without an extension. The operator now uses the same model for annual reviews.",
      },
      {
        type: "quote",
        text: "They did the work the auditor was going to ask for, before the auditor asked. That is a rare habit.",
        attribution: "Chair, family-owned operating group",
      },
      {
        type: "p",
        text: "If you have an ESOP valuation that needs to survive scrutiny, [we should talk](#/contact).",
      },
    ],
  },
};
