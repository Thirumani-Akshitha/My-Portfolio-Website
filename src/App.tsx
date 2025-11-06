import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import { BackgroundEffects } from './components/BackgroundEffects';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Timeline />
        <Certifications />
        <Projects />
        <Contact />
        <BackToTop />
      </div>
    </div>
  );
}
