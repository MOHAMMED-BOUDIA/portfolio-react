import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import BackgroundEffects from './components/ui/BackgroundEffects';
import ScrollToTopButton from './components/ui/ScrollToTopButton';

function App() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className='relative'>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
