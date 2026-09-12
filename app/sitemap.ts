import type { MetadataRoute } from 'next';
import { experience, projects } from './portfolio-data';

const siteUrl = 'https://isameldin.eldeenisam.workers.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/projects', '/experience', '/education'].map(path => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));
  const projectPages = projects.map(project => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: 'monthly' as const, priority: project.slug === 'fyp' || project.slug === 'gdp' ? 0.9 : 0.7 }));
  const experiencePages = experience.map(item => ({ url: `${siteUrl}/experience/${item.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }));
  return [...pages, ...projectPages, ...experiencePages];
}
