import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

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
            S.listItem().title("Insights").schemaType("insight").child(
              S.documentTypeList("insight").title("Insights")
            ),
            S.divider(),
            S.listItem().title("Capability pages").schemaType("capability").child(
              S.documentTypeList("capability").title("Capability pages")
            ),
            S.divider(),
            S.listItem().title("Review groups").schemaType("reviewGroup").child(
              S.documentTypeList("reviewGroup").title("Review groups")
            ),
            S.listItem().title("FAQ groups").schemaType("faqGroup").child(
              S.documentTypeList("faqGroup").title("FAQ groups")
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
