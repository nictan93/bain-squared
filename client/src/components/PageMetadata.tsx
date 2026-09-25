import { useEffect } from "react";
import { useLocation } from "wouter";
import { metadata } from "@/data/seo";
export function PageMetadata() {
 const [path]=useLocation();
 useEffect(()=>{const m=metadata(path);
 document.title=m.title;
 const set=(key:string,value:string,property=false)=>{const attr=property?"property":"name";let el=document.head.querySelector(`meta[${attr}="${key}"]`);if(!el){el=document.createElement("meta");el.setAttribute(attr,key);document.head.appendChild(el);}el.setAttribute("content",value);};
 set("description",m.description);set("robots",m.index?"index, follow, max-image-preview:large":"noindex, follow");
 for(const [key,value] of Object.entries({title:m.title,description:m.description,url:m.url,image:m.image,type:m.type}))set("og:"+key,value,true);
 for(const [key,value] of Object.entries({title:m.title,description:m.description,image:m.image,card:"summary_large_image"}))set("twitter:"+key,value);
 let canonical=document.head.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement("link");canonical.setAttribute("rel","canonical");document.head.appendChild(canonical);}canonical.setAttribute("href",m.url);
 let schema=document.getElementById("page-schema");if(!schema){schema=document.createElement("script");schema.id="page-schema";schema.setAttribute("type","application/ld+json");document.head.appendChild(schema);}schema.textContent=JSON.stringify(m.schema);
 },[path]);
 return null;
}
