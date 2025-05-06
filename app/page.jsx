import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="space-y-24 px-6 md:px-16 lg:px-32 py-12">
      <Hero />
      <About />
      <Highlights />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}
