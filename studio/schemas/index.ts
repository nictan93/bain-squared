import { insight } from "./insight";
import { capability } from "./capability";
import { openRole } from "./openRole";
import { featuredTopic } from "./featuredTopic";
import { page } from "./page";
import { reviewGroup } from "./reviewGroup";
import { faqGroup } from "./faqGroup";

// Page-level singleton schemas
import { homePage } from "./homePage";
import { whatWeDoPage } from "./whatWeDoPage";
import { whoWeWorkWithPage } from "./whoWeWorkWithPage";
import { insightsPage } from "./insightsPage";
import { careersPage } from "./careersPage";
import { careersFormPage } from "./careersFormPage";
import { contactPage } from "./contactPage";

// article, insightCard, clientStory are superseded by the unified insight schema.
// Their documents were migrated and deleted via script/migrate-insights-unified.ts.
// openRole is kept in the schema registry for existing documents but is no longer
// shown in the Studio sidebar — roles are now managed inline in careersFormPage.

export const schemaTypes = [
  // Content collections
  insight,
  capability,
  featuredTopic,
  reviewGroup,
  faqGroup,

  // Page singletons
  homePage,
  whatWeDoPage,
  whoWeWorkWithPage,
  insightsPage,
  careersPage,
  careersFormPage,
  contactPage,

  // SEO metadata (studio-only until head management is wired)
  page,

  // Kept for existing data; not shown in Studio sidebar.
  openRole,
];
