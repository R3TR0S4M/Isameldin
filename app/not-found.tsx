import { ArrowUpRight } from 'lucide-react';
import { Footer, SiteHeader } from './components';

export default function NotFound() {
  return <main><SiteHeader /><section className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This page is<br /><em>not in my archive.</em></h1><p>The page you requested does not exist or may have moved. I can take you back to the project archive.</p><a className="button button-primary" href="/projects">Browse my projects <ArrowUpRight size={17} /></a></section><Footer /></main>;
}
