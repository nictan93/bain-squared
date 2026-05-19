import { insight } from "./insight";
import { capability } from "./capability";
import { openRole } from "./openRole";
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
// openRole (career form roles) remains as a collection of individual role documents.

export const schemaTypes = [
  // Content collections
  insight,
  capability,
  openRole,
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
];
