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

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <div className="space-y-24 px-6 md:px-16 lg:px-32 py-12">
        <About />
        <Highlights />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Teaching />
        <ResearchGrants />
        <Publications />
        <Awards />
        <Contact />
      </div>
    </main>
  );
}
