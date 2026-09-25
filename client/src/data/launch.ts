import records from "./launch-articles.json";
import type { Block } from "@/components/ArticleBody";
export const launchRecords = records;
export const dateLabel = (value: string) => new Date(value).toLocaleDateString("en-GB", {day:"numeric",month:"long",year:"numeric",timeZone:"Asia/Singapore"});
export const launchCards = records.map(a => ({id:a.launchId,category:a.publication,title:a.title,dek:a.dek,type:a.contentFormat,date:dateLabel((a as any).publishedAt || a.updatedAt),image:a.heroImageUrl,href:`/insights/${a.slug.current}`,tags:a.practiceTags}));
export const byPublication = (name: string) => launchCards.filter(a=>a.category===name);
export const launchArticles = Object.fromEntries(records.map(a=>[a.slug.current, {slug:a.slug.current,publication:a.publication,headline:a.title,dek:a.dek,date:dateLabel((a as any).publishedAt || a.updatedAt),type:a.contentFormat,heroImage:a.heroImageUrl,authorBio:a.authorBio,authors:a.authors,withAuthors:undefined,blocks:a.body as Block[],downloadUrl:a.downloadUrl,downloadLabel:a.downloadLabel}]));
export const launchFeatured = launchCards.find(a=>a.id==="R01") || launchCards[0];
export const launchRecommended = ["F03","F01","F05"].flatMap(id=>launchCards.filter(a=>a.id===id));
