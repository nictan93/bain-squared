import { defineType, defineField } from "sanity";

export const insightCard = defineType({
  name: "insightCard",
  title: "Insight card",
  type: "document",
  description: "Article stub shown in listing grids. Add a full Article document when the content is ready.",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({ name: "dek", type: "text", title: "Dek", rows: 2 }),
    defineField({ name: "category", type: "string", title: "Category label" }),
    defineField({
      name: "contentType",
      type: "string",
      title: "Content type",
      options: {
        list: ["Brief", "Field note", "Playbook", "Report", "Infographic", "Webinar", "Checklist", "Template", "Explainer", "Interactive", "Snap Chart"],
      },
    }),
    defineField({ name: "date", type: "date", title: "Date" }),
    defineField({
      name: "topic",
      type: "string",
      title: "Topic",
      options: {
        list: [
          { title: "Agentic AI", value: "ai" },
          { title: "Financial Transformation", value: "financial-transformation" },
          { title: "Intangibles Valuation", value: "intangibles-valuation" },
          { title: "Growth Strategy", value: "growth-strategy" },
        ],
      },
    }),
    defineField({ name: "imageUrl", type: "url", title: "Image URL" }),
    defineField({
      name: "href",
      type: "string",
      title: "Link",
      description: "Internal path (e.g. /insights/article-slug) or external URL.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
