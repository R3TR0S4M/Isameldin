import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { EducationPreview, ExperiencePreview, FeaturedProjects, Footer, Headshot, HomeSections, SiteHeader } from './components';
import { profile } from './portfolio-data';

export default function Home() {
  return <main><SiteHeader /><section className="hero section-shell"><div className="hero-gridline" aria-hidden="true" /><div className="hero-copy"><span className="eyebrow hero-eyebrow">MECHATRONICS ENGINEERING / E-PORTFOLIO</span><h1>Isameldin<br /><em>Ahmed.</em></h1><p className="hero-tagline">{profile.title}</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><Link className="button button-primary" href="/projects">View my projects <ArrowDownRight size={17} /></Link><a className="button button-secondary" href={`mailto:${profile.email}?subject=Resume request`}>Request resume <ArrowUpRight size={17} /></a><a className="button button-secondary" href={`mailto:${profile.email}?subject=CV request`}>Request CV <ArrowUpRight size={17} /></a></div></div><div className="hero-visual"><Headshot /><div className="hero-visual-note"><span>PORTRAIT / 001</span><strong>Official headshot</strong><span>ALT TEXT: Professional headshot of Isameldin Ahmed</span></div></div><div className="hero-meta"><span>MECHATRONICS / SYSTEMS</span><span>OPEN TO OPPORTUNITIES</span><span>KUALA LUMPUR / MALAYSIA</span></div></section><FeaturedProjects /><ExperiencePreview /><EducationPreview /><HomeSections /><Footer /></main>;
}
