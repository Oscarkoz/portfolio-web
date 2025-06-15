import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => (
  <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <h2 className="text-4xl font-bold mb-10 text-center">Om mig</h2>

    {/* Tidningslayout: bild – text – bild */}
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">

      {/* Vänster: AWC-bild */}
      <motion.div
        className="flex flex-col items-center md:w-1/3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/awc-jacka.jpg"
          alt="AWC Jacka"
          className="rounded-lg shadow-md w-full mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Tävlingsanda & driv</h3>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Jag tävlar i World of Warcrafts Arena World Championship (AWC) och har vunnit prispengar i officiella turneringar. 
          Den här jackan är ett bevis på hårt arbete, fokus och teamwork på hög nivå.
        </p>
      </motion.div>

      {/* Mitten: Om mig-text */}
      <div className="md:w-1/3">
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

      {/* Höger: Familjebild */}
      <motion.div
        className="flex flex-col items-center md:w-1/3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/familj-oscar.jpg"
          alt="Oscar med Molly och hundarna"
          className="rounded-lg shadow-md w-full mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Familj & balans</h3>
        <p className="text-center text-gray-600 dark:text-gray-300">
          När jag inte bygger appar eller tävlar i e-sport hittar du mig med min sambo Molly, vår Corgi Atlas och vår lilla terrier. 
          De ger mig balans, skratt och motivation varje dag.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutMe;
