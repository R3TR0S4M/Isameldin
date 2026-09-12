'use client';

import { ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Footer, ProjectCard, SiteHeader } from '../components';
import { projects } from '../portfolio-data';

const categories = ['All', 'Robotics', 'Electronics', 'Programming', 'CAD', 'Automation', 'Embedded Systems', 'Mechanical Design'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => active === 'All' ? projects : projects.filter(project => project.category === active), [active]);
  return <main><SiteHeader /><section className="page-hero page-hero-projects"><div><span className="eyebrow">My project archive</span><h1>Systems in<br /><em>practice.</em></h1></div><p>I build and study systems across robotics, automation, embedded systems, electronics, and mechanical design.</p></section><section className="archive-section"><div className="filter-bar" role="group" aria-label="Filter my projects">{categories.map(category => <button key={category} className={active === category ? 'is-active' : ''} type="button" onClick={() => setActive(category)}>{category}</button>)}</div><div className="archive-grid">{filtered.map(project => <div className="archive-item" key={project.slug}><ProjectCard project={project} compact />{project.external && <a className="external-project-link" href={project.external} target="_blank" rel="noreferrer">Open my repository <ExternalLink size={14} /></a>}</div>)}</div>{filtered.length === 0 && <div className="empty-state">I do not have project records in this category yet.</div>}</section><Footer /></main>;
}
