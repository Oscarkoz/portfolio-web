import React from 'react';
import { motion } from 'framer-motion';
import awcJacka from '../assets/awc-jacka.jpg';
import familjOscar from '../assets/familj-oscar.jpg';

const AboutMe = () => (
  <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <h2 className="text-4xl font-bold mb-16 text-center">Om mig</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">

      {/* Vänster: AWC */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={awcJacka}
          alt="AWC Jacka"
          className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-xl font-semibold mb-2">Tävlingsanda & driv</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Jag tävlar i World of Warcrafts Arena World Championship (AWC) och har vunnit prispengar i officiella turneringar. 
          Den här jackan är ett bevis på hårt arbete, fokus och teamwork på hög nivå.
        </p>
      </motion.div>

      {/* Mitten: Om mig */}
      <div className="text-center md:text-left">
        <p className="text-lg leading-relaxed mb-4">
          Jag heter Oscar Turell och är en passionerad fullstackutvecklare med fokus på modern webbutveckling. 
          Med erfarenhet av både backend i C#/.NET och frontend i React och Tailwind CSS, bygger jag användarvänliga 
          och funktionella applikationer från grunden.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Jag gillar problemlösning, tydlig kodstruktur och att lära mig nya tekniker. 
          Mitt mål är alltid att skapa stabila lösningar som inte bara fungerar – utan känns professionella och genomtänkta.
        </p>
        <p className="text-lg leading-relaxed">
          När jag inte kodar tävlar jag i e-sport, tränar på gymmet eller umgås med min hund Atlas.
        </p>
      </div>

      {/* Höger: Familj */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={familjOscar}
          alt="Oscar med Molly och hundarna"
          className="w-full h-[300px] object-cover rounded-lg shadow-lg mb-4 hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-xl font-semibold mb-2">Familj & balans</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          När jag inte bygger appar eller tävlar i e-sport hittar du mig med min sambo Molly, vår Corgi Atlas och vår lilla terrier. 
          De ger mig balans, skratt och motivation varje dag.
        </p>
      </motion.div>

    </div>
  </section>
);

export default AboutMe;
