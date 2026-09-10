import { EducationPageBody, Footer, PageHeader, SiteHeader } from '../components';

export default function EducationPage() {
  return <main><SiteHeader /><PageHeader code="Education" title="My academic" emphasis="foundation." copy="My qualification, institution, relevant coursework, academic achievements, and the places where my engineering work began." /><EducationPageBody /><Footer /></main>;
}
