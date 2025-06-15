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
      <div className="h-20" />

      <section className="bg-[#0f1015] text-white">
        <Hero />
      </section>

      <section className="bg-[#16171e] text-white">
        <AboutMe />
      </section>

      <section className="bg-[#1c1d25] text-white">
        <Skills />
      </section>

      <section className="bg-[#23242d] text-white">
        <Projects />
      </section>

      <section className="bg-[#1c1d25] text-white">
        <References />
      </section>

      <section className="bg-[#16171e] text-white">
        <ContactForm />
      </section>

      <section className="bg-[#0f1015] text-white">
        <Footer />
      </section>
    </>
  );
};

export default App;
