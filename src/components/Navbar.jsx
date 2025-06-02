import React from 'react';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 fixed top-0 w-full z-50 flex justify-between items-center">
    <h1 className="text-xl font-bold">Oscar Turell</h1>
    <div className="space-x-4">
      <a href="#about" className="hover:underline">Om mig</a>
      <a href="#skills" className="hover:underline">Färdigheter</a>
      <a href="#projects" className="hover:underline">Projekt</a>
      <a href="#references" className="hover:underline">Referenser</a>
      <a href="#contact" className="hover:underline">Kontakt</a>
    </div>
  </nav>
);

export default Navbar;
