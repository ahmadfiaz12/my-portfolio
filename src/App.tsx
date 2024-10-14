import './App.css'
import Navbar from './component/Navbar'
import Preloader from './component/Preloader';
import AboutMeSection from './features/AboutMeSection';
import ContactSection from './features/ContactSection';
import Footer from './features/Footer';
import HeroSection from './features/HeroSection'
import ServicesSection from './features/ServicesSection';
import Testimonials from './features/Testimonials';
import { useLenis } from './hooks/useLenis';
import { useState, useEffect } from 'react';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false); // Tracks whether preloading is finished
  useLenis();

  // This function will be called when the preloader completes loading
  const handlePreloaderComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <>
      <div className="relative">
        {/* Render Preloader */}
        {!isLoadingComplete && <Preloader onComplete={handlePreloaderComplete} />}

        {/* Render the rest of the content only when preloading is done */}
        {isLoadingComplete && (
          <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <AboutMeSection />
            <Testimonials />
            <ContactSection />
            <Footer />
          </>
        )}
      </div>
    </>
  )
}

export default App;
