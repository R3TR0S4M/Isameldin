import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { EducationPreview, ExperiencePreview, FeaturedProjects, Footer, Headshot, HomeSections, SiteHeader } from './components';
import { profile } from './portfolio-data';

export default function Home() {
  return <main><SiteHeader /><section className="hero section-shell"><div className="hero-copy"><span className="eyebrow hero-eyebrow">MECHATRONICS ENGINEERING / E-PORTFOLIO</span><h1>Isameldin<br /><em>Ahmed.</em></h1><p className="hero-tagline">{profile.title}</p><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><Link className="button button-primary" href="/projects">View my projects <ArrowDownRight size={17} /></Link><a className="button button-secondary" href={`mailto:${profile.email}?subject=Resume request`}>Request resume <ArrowUpRight size={17} /></a></div></div><div className="hero-visual"><Headshot /><div className="hero-supporting-graphic"><img src="/images/engineering-graphic.png" alt="Abstract technical drawing with mechanical rings and circuit traces" /><span>Engineering systems / visual study</span></div></div></section><FeaturedProjects /><ExperiencePreview /><EducationPreview /><HomeSections /><Footer /></main>;
}
