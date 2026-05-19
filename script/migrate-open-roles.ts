/**
 * Pushes the 5 career role tracks into Sanity as openRole documents.
 * Run: SANITY_API_TOKEN=... npx tsx script/migrate-open-roles.ts
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
  console.log(`  ✓ openRole / ${doc._id}`);
}

async function main() {
  console.log("Migrating open roles to Sanity...\n");

  await upsert({
    _type: "openRole", _id: "open-role-consultant",
    label: "Consultant",
    description: "Own client workstreams end to end. You'll sit in the operator's seat during the rebuild, ship work that survives after handover, and learn craft from partners who have run the work themselves.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    order: 1,
  });

  await upsert({
    _type: "openRole", _id: "open-role-senior-consultant",
    label: "Senior Consultant",
    description: "Lead full engagements with partner oversight. You'll scope the work, run the diagnose phase, manage the team, and own the handover quality bar that clients keep referring us on.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80",
    order: 2,
  });

  await upsert({
    _type: "openRole", _id: "open-role-associate",
    label: "Associate",
    description: "The craft track. You'll build the models, ship the agentic prototypes, and produce the analysis the operator on the other side actually uses. We invest heavily in your tooling and depth.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    order: 3,
  });

  await upsert({
    _type: "openRole", _id: "open-role-partner",
    label: "Partner",
    description: "Run a piece of the firm. Partners here carry client outcomes, hire the next generation of operators, and protect the craft bar that makes Bain Squared what it is. Equity track, operator background expected.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
    order: 4,
  });

  await upsert({
    _type: "openRole", _id: "open-role-other",
    label: "Other",
    description: "Operations, finance, design, engineering, recruiting. If you would shape Bain Squared from inside the firm rather than on the client side, tell us where you'd add the most. The bar is the same.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
    order: 5,
  });

  console.log("\nOpen roles migration complete.");
}

main().catch((err) => { console.error(err); process.exit(1); });
