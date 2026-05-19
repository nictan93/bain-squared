import { insight } from "./insight";
import { capability } from "./capability";
import { reviewGroup } from "./reviewGroup";
import { faqGroup } from "./faqGroup";

// article, insightCard, clientStory are superseded by the unified insight schema.
// Their documents were migrated and deleted via script/migrate-insights-unified.ts.

export const schemaTypes = [insight, capability, reviewGroup, faqGroup];
