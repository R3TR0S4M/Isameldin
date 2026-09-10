'use client';

import { ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Footer, ProjectCard, SiteHeader } from '../components';
import { projects } from '../portfolio-data';

const categories = ['All', 'Robotics', 'Electronics', 'Programming', 'CAD', 'Automation', 'Embedded Systems', 'Mechanical Design'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => active === 'All' ? projects : projects.filter(project => project.category === active), [active]);
  return <main><SiteHeader /><section className="page-hero page-hero-projects"><div><span className="eyebrow">Project archive</span><h1>Systems in<br /><em>practice.</em></h1></div><p>Builds, studies, and technical experiments across robotics, automation, embedded systems, electronics, and mechanical design.</p></section><section className="archive-section"><div className="filter-bar" aria-label="Filter projects">{categories.map(category => <button key={category} className={active === category ? 'is-active' : ''} type="button" onClick={() => setActive(category)}>{category}</button>)}</div><div className="archive-grid">{filtered.map(project => <div className="archive-item" key={project.slug}><ProjectCard project={project} compact />{project.external && <a className="external-project-link" href={project.external} target="_blank" rel="noreferrer">Repository link <ExternalLink size={14} /></a>}</div>)}</div>{filtered.length === 0 && <div className="empty-state">No project records in this category yet.</div>}</section><Footer /></main>;
}
