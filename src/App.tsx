import './App.css'
import MarqueeText from './component/MarqueeText';
import Navbar from './component/Navbar'
import AboutMeSection from './features/AboutMeSection';
import ContactSection from './features/ContactSection';
import Footer from './features/Footer';
import HeroSection from './features/HeroSection'
import ProjectList from './features/ProjectList';
import ServicesSection from './features/ServicesSection';
import Skills from './features/Skills';
import Testimonials from './features/Testimonials';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <>
      <div className="relative">
      
          <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <AboutMeSection />
            <MarqueeText />
            <Skills />
            <ProjectList />
            <Testimonials />
            <ContactSection />
            <Footer />
          </>

      </div>
    </>
  )
}

export default App;
