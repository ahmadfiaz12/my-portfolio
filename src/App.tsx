import { useEffect } from 'react';
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
import AOS from "aos"
import Animation from "./component/Animation"

function App() {
  useLenis();

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <>
      <div className="relative">

        <>
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <Skills />
          <AboutMeSection />
          {/* <MarqueeText /> */}
          <Animation />
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
