export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { portfolio } from '@/data/portfolio';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:`${portfolio.seo.url}/sitemap.xml`}}
