import { sanityClient } from "./sanity";
import type { Article } from "@/data/articles";
import type { ReviewGroup, Review } from "@/data/reviews";
import type { FAQGroup } from "@/data/faq";
import type { ArticleCard } from "@/components/ArticleCardGrid";
import type { ClientStory } from "@/components/FeaturedClientStoryCarousel";

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

export async function getArticle(slug: string): Promise<Article | null> {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      "slug": slug.current,
      publication,
      headline,
      dek,
      "date": coalesce(date, ""),
      "type": contentType,
      "heroImage": coalesce(heroImageUrl, ""),
      authors[]{name, href},
      withAuthors[]{name, href},
      body[]{
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
    `*[_type == "article"] | order(date desc) {
      "slug": slug.current,
      publication,
      headline,
      dek,
      "date": coalesce(date, ""),
      "type": contentType,
      "heroImage": coalesce(heroImageUrl, ""),
      authors[]{name, href},
      withAuthors[]{name, href}
    }`
  );
}

// ---------------------------------------------------------------------------
// Insight cards (article stubs for listing pages)
// ---------------------------------------------------------------------------

export async function getInsightCards(topic?: string): Promise<ArticleCard[]> {
  const filter = topic
    ? `*[_type == "insightCard" && topic == $topic]`
    : `*[_type == "insightCard"]`;
  return sanityClient.fetch(
    `${filter} | order(date desc) {
      category,
      title,
      dek,
      "type": contentType,
      date,
      "image": coalesce(imageUrl, ""),
      href
    }`,
    topic ? { topic } : {}
  );
}

// ---------------------------------------------------------------------------
// Client stories
// ---------------------------------------------------------------------------

export async function getClientStories(): Promise<ClientStory[]> {
  return sanityClient.fetch(
    `*[_type == "clientStory"] | order(_createdAt asc) {
      headline,
      stats[]{value, label},
      ctaHref,
      "image": coalesce(imageUrl, ""),
      imageAlt
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
