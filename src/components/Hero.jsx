import React from 'react';
import portrait from '../assets/portrait.jpg';

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4"
  >
    <img
      src={portrait}
      alt="Oscar Turell"
      className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
    />
    <h1 className="text-4xl font-bold mb-2">Oscar Turells Portfölj</h1>
    <p className="text-lg text-gray-700">Utvecklare och problemlösare</p>
    <a
      href="/cv.pdf"
      download
      className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Ladda ner CV
    </a>
  </section>
);

export default Hero;
