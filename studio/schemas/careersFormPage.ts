import { defineType, defineField, defineArrayMember } from "sanity";

// Inline role cards for the RoleSwitcher component.
// These mirror the openRole document type but are embedded in the page singleton
// so editors can manage page content from one place.
const roleItem = defineArrayMember({
  type: "object",
  name: "roleItem",
  title: "Role",
  fields: [
    defineField({ name: "label", type: "string", title: "Role label", description: 'e.g. "Consultant", "Senior Consultant"', validation: (Rule) => Rule.required() }),
    defineField({ name: "description", type: "text", title: "Description shown in the role switcher", rows: 4, validation: (Rule) => Rule.required() }),
    defineField({ name: "imageUrl", type: "url", title: "Role image URL" }),
  ],
  preview: { select: { title: "label" } },
});

export const careersFormPage = defineType({
  name: "careersFormPage",
  title: "Careers form page",
  type: "document",
  fields: [
    // ── Form intro ────────────────────────────────────────────────────
    defineField({
      name: "formIntro",
      type: "object",
      title: "Form intro",
      description: "Centred intro paragraph + headline displayed above the role switcher.",
      fields: [
        defineField({
          name: "paragraph",
          type: "text",
          title: "Intro paragraph",
          rows: 3,
          description: 'Shown above the headline. e.g. "Every applicant is reviewed by a real human…"',
        }),
        defineField({
          name: "headline",
          type: "string",
          title: "Headline (plain part)",
          description: 'e.g. "Every application is read by a"',
        }),
        defineField({
          name: "accent",
          type: "string",
          title: "Headline accent (Forest Deep colour)",
          description: 'e.g. "real human."',
        }),
      ],
    }),

    // ── Role switcher ─────────────────────────────────────────────────
    defineField({
      name: "roles",
      type: "array",
      title: "Role switcher tabs",
      description: "Each entry becomes a tab in the role switcher. Order controls display order.",
      of: [roleItem],
    }),

    // ── Application form ──────────────────────────────────────────────
    defineField({
      name: "formSection",
      type: "object",
      title: "Application form section",
      fields: [
        defineField({
          name: "heading",
          type: "string",
          title: "Section heading",
          description: 'e.g. "Apply now"',
        }),
        defineField({
          name: "functionOptions",
          type: "array",
          title: "Desired function dropdown options",
          description: "Options shown in the 'Desired function' select field on the application form.",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "submitSuccessHeading",
          type: "string",
          title: "Submit success heading",
          description: 'Shown after form submission. e.g. "Your mail client just opened."',
        }),
        defineField({
          name: "submitSuccessBody",
          type: "text",
          title: "Submit success body",
          rows: 3,
          description: "Follow-up instruction after submission.",
        }),
        defineField({
          name: "resubmitLabel",
          type: "string",
          title: "Re-submit link label",
          description: 'e.g. "Submit another application"',
        }),
      ],
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
  preview: { prepare: () => ({ title: "Careers form page" }) },
});
