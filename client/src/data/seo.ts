import { ARTICLES } from "./articles";
import { launchRecords } from "./launch";
export const SITE = "https://bain-squared.vercel.app";
const pages: Record<string,[string,string]> = {
"/": ["AI, finance and valuation advisory", "Bain Squared helps growing businesses put AI into operation, strengthen finance and assess enterprise value. Explore our services and practical insights."],
"/what-we-do": ["What we do", "Explore Bain Squared's services in agentic AI, financial transformation and valuation, from defining the problem to implementation and ongoing operation."],
"/who-we-work-with": ["Who we work with", "Bain Squared works with founders, finance leaders and operating teams. Explore the business situations and decisions our work supports."],
"/careers": ["Careers", "Explore opportunities to work with Bain Squared across AI, finance and valuation. Learn about our approach and express your interest."],
"/careers-form": ["Apply to Bain Squared", "Tell us about your experience and the work you want to do at Bain Squared."],
"/contact": ["Contact Bain Squared", "Discuss a business challenge in AI, finance or valuation. Contact Bain Squared at hello@bainsquared.com."],
"/faq": ["Frequently asked questions", "Answers about Bain Squared engagements, project scope, delivery and ongoing support across AI, finance and valuation."],
"/reviews": ["Reviews", "Read feedback about working with Bain Squared."],
"/newsletter": ["The Bain Squared newsletter", "Practical reading on AI, finance and enterprise value. Learn about the Bain Squared newsletter and the ideas we share."],
"/privacy": ["Privacy notice", "How Bain Squared handles personal information, enquiries and your privacy choices."],
"/terms": ["Terms of use", "Terms governing use of the Bain Squared website and its published material."],
"/insights": ["Insights", "Explore practical guides, perspectives and research across AI, finance and valuation. Read the latest Bain Squared articles and download working tools."],
"/insights/perspectives": ["Perspectives", "Essays on the operating and financial decisions facing growing businesses, with arguments and evidence you can examine."],
"/insights/squared-reports": ["Squared Reports", "Deeper analysis and practical decision tools from Bain Squared. Start with the AI readiness scorecard and companion worksheets."],
"/insights/looking-glass": ["Looking Glass", "Analysis of emerging changes in AI, technology and business models, distinguishing what is observable from what remains uncertain."],
"/insights/field-notes": ["Field Notes", "Practical checklists, templates and worked examples for AI deployment, cash forecasting, ESOP valuation and intangible assets."],
"/insights/inside-hq": ["Inside Bain Squared HQ", "Explore Bain Squared's approach to scoping, delivery and operating decisions, with practical notes on how we structure the work."],
"/insights/client-stories": ["Client Stories", "The context, decisions and outcomes behind client engagements."],
};
const services: Record<string,[string,string]> = {
"agentic-ai-automation":["Agentic AI automation","Scope, build and operate bounded AI workflows with clear permissions, human review and measurable operating outcomes."],
"managed-services":["AI managed services","Keep AI workflows useful after launch with monitoring, exception handling and controlled improvements."],
"llm-optimization":["LLM optimization","Improve the clarity, accessibility and usefulness of business information for search and AI discovery."],
"fractional-cfo":["Fractional CFO","Finance leadership for forecasting, performance review and the decisions facing a growing business."],
"financial-transformation":["Financial transformation","Strengthen reporting, forecasting and finance processes with clear definitions, controls and responsibilities."],
"intangibles-valuation":["Intangible asset valuation","Define the purpose, evidence and assumptions behind the valuation of software, intellectual property and other intangible assets."],
"esop-valuation":["ESOP valuation","Prepare a defensible employee share option valuation with clear plan terms, measurement purpose and supporting evidence."],
};
for (const [slug,value] of Object.entries(services)) pages["/what-we-do/"+slug]=value;
for (const [slug,title] of Object.entries({ai:"Agentic AI","financial-transformation":"Financial transformation","intangibles-valuation":"Intangible asset valuation","growth-strategy":"Growth strategy"})) pages["/insights/topics/"+slug]=[title+" insights",`Practical reading and analysis on ${title.toLowerCase()} from Bain Squared.`];
export const routes = [...Object.keys(pages),...Object.keys(ARTICLES).map(slug=>"/insights/"+slug),...launchRecords.map(a=>"/insights/"+a.slug.current)];
export function metadata(path: string) {
 const article=launchRecords.find(a=>path==="/insights/"+a.slug.current);
 const legacy=ARTICLES[path.replace(/^\/insights\//,"")];
 const known=!!pages[path] || !!article;
 const title=article?.seo.title || (pages[path]?.[0] || legacy?.headline || "Page not found")+" | Bain Squared";
 const description=article?.seo.description || pages[path]?.[1] || legacy?.dek || "The page you requested could not be found. Explore Bain Squared's services and insights.";
 // Unfinished client evidence is retained for owner review, not submitted for discovery.
 const index=known && !["/reviews","/insights/client-stories","/careers-form"].includes(path);
 const url=SITE+path;
 const image=SITE+"/og-image.png";
 const organization={"@type":"Organization","@id":SITE+"/#organization",name:"Bain Squared",url:SITE+"/",logo:SITE+"/brand/bain-squared-lockup.png",email:"hello@bainsquared.com"};
 const schema:any={"@context":"https://schema.org","@graph":[organization,{"@type":"WebSite","@id":SITE+"/#website",name:"Bain Squared",url:SITE+"/",publisher:{"@id":organization["@id"]}}]};
 if(article) schema["@graph"].push({"@type":"Article",headline:article.title,description,datePublished:(article as any).publishedAt,dateModified:(article as any)._updatedAt || (article as any).publishedAt,mainEntityOfPage:url,url,image:[image],author:{"@type":"Organization",name:"Bain Squared",url:SITE+"/who-we-work-with"},publisher:{"@id":organization["@id"]}});
 return {title,description,url,image,index,schema,type:article?"article":"website"};
}
