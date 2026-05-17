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
};
