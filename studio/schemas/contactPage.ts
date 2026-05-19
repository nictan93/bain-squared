import { defineType, defineField, defineArrayMember } from "sanity";

const officeLocation = defineArrayMember({
  type: "object",
  name: "officeLocation",
  title: "Office location",
  fields: [
    defineField({ name: "city", type: "string", title: "City", validation: (Rule) => Rule.required() }),
    defineField({ name: "address", type: "text", title: "Full address", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: "email", type: "string", title: "Office email (optional)" }),
    defineField({ name: "phone", type: "string", title: "Office phone (optional)" }),
  ],
  preview: { select: { title: "city", subtitle: "address" } },
});

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  fields: [
    // ── Intro section ─────────────────────────────────────────────────
    defineField({
      name: "intro",
      type: "object",
      title: "Intro section",
      description: "Large headline at the top of the page, above the form.",
      fields: [
        defineField({
          name: "headlinePart",
          type: "string",
          title: "Headline plain part",
          description: 'e.g. "Bring us your"',
        }),
        defineField({
          name: "headlineAccent",
          type: "string",
          title: "Headline accent (Forest Deep colour)",
          description: 'e.g. "problem."',
        }),
        defineField({
          name: "body",
          type: "text",
          title: "Supporting paragraph",
          rows: 2,
          description: 'e.g. "Tell us where the operating core needs the rebuild…"',
        }),
      ],
    }),

    // ── Contact form config ───────────────────────────────────────────
    defineField({
      name: "form",
      type: "object",
      title: "Contact form",
      fields: [
        defineField({
          name: "serviceOptions",
          type: "array",
          title: "Service dropdown options",
          description: "Options for the 'Which service is this about?' field.",
          of: [{ type: "string" }],
          initialValue: [
            "Agentic AI",
            "Financial Advisory",
            "Intangibles Valuation",
            "The Squared Method (all three)",
            "Not sure yet",
          ],
        }),
        defineField({
          name: "successHeading",
          type: "string",
          title: "Success heading",
          description: 'Shown after form submission. e.g. "Message sent."',
        }),
        defineField({
          name: "successBody",
          type: "text",
          title: "Success body",
          rows: 3,
        }),
        defineField({
          name: "resubmitLabel",
          type: "string",
          title: "Re-submit link label",
          description: 'e.g. "Send another message"',
        }),
        defineField({
          name: "submitLabel",
          type: "string",
          title: "Submit button label",
          description: 'e.g. "Send message"',
        }),
        defineField({
          name: "privacyNoticeText",
          type: "text",
          title: "Privacy notice checkbox text",
          rows: 2,
        }),
      ],
    }),

    // ── Office locations sidebar ──────────────────────────────────────
    defineField({
      name: "sidebarHeading",
      type: "string",
      title: "Sidebar heading",
      description: 'e.g. "More information"',
    }),
    defineField({
      name: "officeLocations",
      type: "array",
      title: "Office locations",
      of: [officeLocation],
    }),

    // ── SEO ───────────────────────────────────────────────────────────
    defineField({
      name: "seo",
      type: "object",
      title: "SEO",
      fields: [
        defineField({ name: "title", type: "string", title: "Meta title" }),
        defineField({ name: "description", type: "text", title: "Meta description", rows: 3 }),
        defineField({ name: "ogImage", type: "image", title: "OG image", options: { hotspot: true } }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact page" }) },
});
