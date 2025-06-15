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

      <section className="bg-[#1e293b] text-white">
        <Hero />
      </section>

      <section className="bg-[#312e81] text-white">
        <AboutMe />
      </section>

      <section className="bg-[#3730a3] text-white">
        <Skills />
      </section>

      <section className="bg-[#4338ca] text-white">
        <Projects />
      </section>

      <section className="bg-[#312e81] text-white">
        <References />
      </section>

      <section className="bg-[#1e3a8a] text-white">
        <ContactForm />
      </section>

      <section className="bg-[#0f172a] text-white">
        <Footer />
      </section>
    </>
  );
};

export default App;
