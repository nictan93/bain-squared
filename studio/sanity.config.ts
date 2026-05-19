import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// Singleton document IDs — one fixed document per page.
const SINGLETONS = [
  { schemaType: "homePage",          title: "Home",              id: "homePage" },
  { schemaType: "whatWeDoPage",      title: "What we do",        id: "whatWeDoPage" },
  { schemaType: "whoWeWorkWithPage", title: "Who we work with",  id: "whoWeWorkWithPage" },
  { schemaType: "insightsPage",      title: "Insights",          id: "insightsPage" },
  { schemaType: "careersPage",       title: "Careers",           id: "careersPage" },
  { schemaType: "careersFormPage",   title: "Careers form",      id: "careersFormPage" },
  { schemaType: "contactPage",       title: "Contact",           id: "contactPage" },
];

// Schema types that appear as singletons — excluded from the default list-view.
const SINGLETON_TYPES = new Set(SINGLETONS.map((s) => s.schemaType));

export default defineConfig({
  name: "bain-squared",
  title: "Bain Squared",

  projectId: "84yn8vov",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ── Page singletons ──────────────────────────────────────
            S.listItem()
              .title("Pages")
              .child(
                S.list()
                  .title("Pages")
                  .items(
                    SINGLETONS.map(({ schemaType, title, id }) =>
                      S.listItem()
                        .title(title)
                        .id(id)
                        .child(
                          S.document()
                            .schemaType(schemaType)
                            .documentId(id)
                            .title(title)
                        )
                    )
                  )
              ),

            S.divider(),

            // ── Content collections ──────────────────────────────────
            S.listItem().title("Insights").schemaType("insight").child(
              S.documentTypeList("insight").title("Insights")
            ),
            S.divider(),
            S.listItem().title("Capability pages").schemaType("capability").child(
              S.documentTypeList("capability").title("Capability pages")
            ),
            S.divider(),
            S.listItem().title("Career form roles").schemaType("openRole").child(
              S.documentTypeList("openRole").title("Career form roles")
            ),
            S.divider(),
            S.listItem().title("Review groups").schemaType("reviewGroup").child(
              S.documentTypeList("reviewGroup").title("Review groups")
            ),
            S.listItem().title("FAQ groups").schemaType("faqGroup").child(
              S.documentTypeList("faqGroup").title("FAQ groups")
            ),
            S.divider(),
            S.listItem().title("Pages (SEO)").schemaType("page").child(
              S.documentTypeList("page").title("Pages (SEO)")
            ),
          ]),

      // Prevent singleton types from appearing in the default new-document list.
      defaultDocumentNode: (S) => S.document(),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Hide singleton types from the "New document" menu.
    templates: (prev) =>
      prev.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
});
