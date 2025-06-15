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
      {/* Spacer för att navbaren inte ska överlappa Hero */}
      <div className="h-20" />

      <div data-aos="fade-up" data-aos-duration="800">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <section className="pt-24 pb-24 bg-[#1a1c24] text-white">
          <AboutMe />
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <section className="pt-24 pb-24 bg-[#181920] text-white">
          <Skills />
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <section className="pt-24 pb-24 bg-[#20222b] text-white">
          <Projects />
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <section className="pt-24 pb-24 bg-[#1a1c24] text-white">
          <References />
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <section className="pt-24 pb-24 bg-[#15161c] text-white">
          <ContactForm />
        </section>
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <section className="pt-10 pb-10 bg-[#0f1015] text-white">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
