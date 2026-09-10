import { AboutPageBody, Footer, PageHeader, SiteHeader } from '../components';

export default function AboutPage() {
  return <main><SiteHeader /><PageHeader code="01 / ABOUT" title="The person" emphasis="behind the systems." copy="A separate space for your life story, personal interests, values, and the experiences that shaped your engineering perspective." /><AboutPageBody /><Footer /></main>;
}
