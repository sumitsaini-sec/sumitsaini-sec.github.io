export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { portfolio } from '@/data/portfolio';
export default function sitemap():MetadataRoute.Sitemap{return [{url:portfolio.seo.url,changeFrequency:'monthly',priority:1}]}
