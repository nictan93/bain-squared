import { sanityClient } from "./sanity";
import type { Article } from "@/data/articles";
import type { ReviewGroup } from "@/data/reviews";
import type { FAQGroup } from "@/data/faq";
import type { ArticleCard } from "@/components/ArticleCardGrid";
import type { ClientStory } from "@/components/FeaturedClientStoryCarousel";

// ---------------------------------------------------------------------------
// Articles (unified insight schema)
// ---------------------------------------------------------------------------

export async function getArticle(slug: string): Promise<Article | null> {
  return sanityClient.fetch(
    `*[_type == "insight" && slug.current == $slug][0]{
      "slug": slug.current,
      "publication": coalesce(publication, "Bain Squared"),
      "headline": title,
      dek,
      "date": coalesce(publishedAt, ""),
      "type": coalesce(contentFormat, type, ""),
      "heroImage": coalesce(heroImageUrl, ""),
      authors[]{name, href},
      withAuthors[]{name, href},
      "blocks": body[]{
        type,
        text,
        dropcap,
        attribution,
        items,
        ordered
      }
    }`,
    { slug }
  );
}

export async function getAllArticles(): Promise<Article[]> {
  return sanityClient.fetch(
    `*[_type == "insight" && type != "client-story"] | order(publishedAt desc) {
      "slug": slug.current,
      "publication": coalesce(publication, "Bain Squared"),
      "headline": title,
      dek,
      "date": coalesce(publishedAt, ""),
      "type": coalesce(contentFormat, type, ""),
      "heroImage": coalesce(heroImageUrl, ""),
      authors[]{name, href},
      withAuthors[]{name, href}
    }`
  );
}

// ---------------------------------------------------------------------------
// Insight cards (listing pages)
// ---------------------------------------------------------------------------

export async function getInsightCards(topic?: string): Promise<ArticleCard[]> {
  const filter = topic
    ? `*[_type == "insight" && type != "client-story" && $topic in practiceTags]`
    : `*[_type == "insight" && type != "client-story"]`;
  return sanityClient.fetch(
    `${filter} | order(publishedAt desc) {
      "category": coalesce(category, ""),
      "title": title,
      dek,
      "type": coalesce(contentFormat, type, ""),
      "date": coalesce(publishedAt, ""),
      "image": coalesce(heroImageUrl, ""),
      "href": "/insights/" + slug.current
    }`,
    topic ? { topic } : {}
  );
}

// ---------------------------------------------------------------------------
// Client stories
// ---------------------------------------------------------------------------

export async function getClientStories(): Promise<ClientStory[]> {
  return sanityClient.fetch(
    `*[_type == "insight" && type == "client-story"] | order(order asc) {
      "headline": title,
      stats[]{value, label},
      ctaHref,
      "image": coalesce(heroImageUrl, ""),
      "imageAlt": coalesce(imageAlt, "")
    }`
  );
}

// ---------------------------------------------------------------------------
// Capabilities
// ---------------------------------------------------------------------------

export async function getCapability(slug: string) {
  return sanityClient.fetch(
    `*[_type == "capability" && slug.current == $slug][0]{
      "slug": slug.current,
      practice,
      eyebrow,
      headline,
      sub,
      "heroImage": coalesce(heroImageUrl, ""),
      "heroImageAlt": coalesce(heroImageAlt, ""),
      introParagraphs,
      introParagraph,
      introBefore,
      introAccent,
      introAfter,
      stats[]{value, body, color},
      switcherEyebrow,
      switcherHeading,
      switcherItems[]{
        label,
        title,
        body,
        "image": coalesce(imageUrl, ""),
        imageAlt,
        caption
      },
      "methodImage": coalesce(methodImageUrl, ""),
      "methodImageAlt": coalesce(methodImageAlt, ""),
      methodHeadlineLines,
      methodBody,
      recommenderCards[]{title, body},
      splitBlocks[]{eyebrow, title, body, tags},
      whitepaperHeadline,
      whitepaperBody,
      "whitepaperImage": coalesce(whitepaperImageUrl, ""),
      teamHeadline,
      teamBody,
      "teamCTA": coalesce(teamCta, "")
    }`,
    { slug }
  );
}

// ---------------------------------------------------------------------------
// Featured insights (home page)
// ---------------------------------------------------------------------------

export async function getFeaturedInsights(): Promise<{ category: string; title: string; excerpt: string; type: string; image: string; href: string }[]> {
  return sanityClient.fetch(
    `*[_type == "insight" && featured == true && type != "client-story"] | order(publishedAt desc)[0...2] {
      "category": coalesce(category, ""),
      "title": title,
      "excerpt": coalesce(dek, ""),
      "type": coalesce(contentFormat, type, ""),
      "image": coalesce(heroImageUrl, ""),
      "href": "/insights/" + slug.current
    }`
  );
}

// ---------------------------------------------------------------------------
// Insights by type (AllInsightsList pages)
// ---------------------------------------------------------------------------

const TYPE_SLUG_MAP: Record<string, string> = {
  "field-notes": "field-note",
  "client-stories": "client-story",
  "inside-hq": "inside-hq",
  "squared-reports": "squared-report",
  "looking-glass": "whitepaper",
};

export async function getInsightsByType(typeSlug: string): Promise<{ category: string; title: string; dek: string; date: string; image: string; href: string }[]> {
  const sanityType = TYPE_SLUG_MAP[typeSlug] ?? typeSlug;
  return sanityClient.fetch(
    `*[_type == "insight" && type == $type] | order(publishedAt desc) {
      "category": coalesce(category, ""),
      "title": title,
      "dek": coalesce(dek, ""),
      "date": coalesce(publishedAt, ""),
      "image": coalesce(heroImageUrl, ""),
      "href": "/insights/" + slug.current
    }`,
    { type: sanityType }
  );
}

// ---------------------------------------------------------------------------
// Open roles (CareersForm role switcher)
// ---------------------------------------------------------------------------

export async function getOpenRoles(): Promise<{ label: string; description: string; image: string }[]> {
  return sanityClient.fetch(
    `*[_type == "openRole"] | order(order asc) {
      label,
      description,
      "image": coalesce(imageUrl, "")
    }`
  );
}

// ---------------------------------------------------------------------------
// Inside HQ insights (Careers page editorial section)
// ---------------------------------------------------------------------------

export async function getInsideHQInsights(): Promise<{ eyebrow: string; title: string; href: string; image: string }[]> {
  return sanityClient.fetch(
    `*[_type == "insight" && type == "inside-hq"] | order(order asc, publishedAt desc)[0...2] {
      "eyebrow": coalesce(category, "Inside HQ"),
      "title": title,
      "href": "/insights/" + slug.current,
      "image": coalesce(heroImageUrl, "")
    }`
  );
}

// ---------------------------------------------------------------------------
// Reviews
// ---------------------------------------------------------------------------

export async function getReviewGroups(): Promise<ReviewGroup[]> {
  return sanityClient.fetch(
    `*[_type == "reviewGroup"] | order(order asc) {
      id,
      title,
      intro,
      reviews[]{
        quote,
        reviewer,
        companyType,
        service,
        problem,
        outcome
      }
    }`
  );
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export async function getFAQGroups(): Promise<FAQGroup[]> {
  return sanityClient.fetch(
    `*[_type == "faqGroup"] | order(order asc) {
      id,
      title,
      intro,
      items[]{q, a}
    }`
  );
}
