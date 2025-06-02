import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import References from './components/References';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      {/* Spacer för att navbaren inte ska överlappa Hero */}
      <div className="h-20" />

      <div data-aos="fade-up" data-aos-duration="800">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <AboutMe />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <Skills />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <Projects />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <References />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <ContactForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <Footer />
      </div>
    </>
  );
};

export default App;
