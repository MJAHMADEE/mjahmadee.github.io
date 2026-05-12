'use client';

import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Teaching from '../components/Teaching';
import ResearchGrants from '../components/ResearchGrants';
import Awards from '../components/Awards';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen">
      <Navigation />
      <Hero />
      <div className="space-y-0 px-6 md:px-16 lg:px-32 py-16">
        <SectionDivider />
        <About />
        <SectionDivider variant="accent" />
        <Highlights />
        <SectionDivider />
        <Experience />
        <SectionDivider variant="accent" />
        <Education />
        <SectionDivider />
        <Skills />
        <SectionDivider variant="accent" />
        <Projects />
        <SectionDivider />
        <Teaching />
        <SectionDivider variant="accent" />
        <ResearchGrants />
        <SectionDivider />
        <Publications />
        <SectionDivider variant="accent" />
        <Awards />
        <SectionDivider />
        <Contact />
      </div>
    </main>
  );
}
