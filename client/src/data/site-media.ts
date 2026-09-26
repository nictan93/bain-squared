import snapshot from "./site-media.json";
type MediaItem = { slot: string; url: string; alt?: string };
const items = new Map((snapshot as MediaItem[]).map(item => [item.slot, item]));
export const siteImage = (slot: string, fallback: string) => items.get(slot)?.url || fallback;
export const siteAlt = (slot: string, fallback: string) => items.has(slot) ? (items.get(slot)?.alt || "") : fallback;
