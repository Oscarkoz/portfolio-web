import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

      <section className="bg-[#0f1015] text-white">
        <Hero />
      </section>

      <section className="bg-[#121218] text-white">
        <AboutMe />
      </section>

      <section className="bg-[#15151c] text-white">
        <Skills />
      </section>

      <section className="bg-[#191a21] text-white">
        <Projects />
      </section>

      <section className="bg-[#121218] text-white">
        <References />
      </section>

      <section className="bg-[#0f1015] text-white">
        <ContactForm />
      </section>

      <section className="bg-[#0d0e13] text-white">
        <Footer />
      </section>
    </>
  );
};

export default App;
