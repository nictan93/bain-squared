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
            S.listItem().title("Articles").schemaType("article").child(S.documentTypeList("article").title("Articles")),
            S.listItem().title("Insight cards").schemaType("insightCard").child(S.documentTypeList("insightCard").title("Insight cards")),
            S.listItem().title("Client stories").schemaType("clientStory").child(S.documentTypeList("clientStory").title("Client stories")),
            S.divider(),
            S.listItem().title("Review groups").schemaType("reviewGroup").child(S.documentTypeList("reviewGroup").title("Review groups")),
            S.listItem().title("FAQ groups").schemaType("faqGroup").child(S.documentTypeList("faqGroup").title("FAQ groups")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
