import React from 'react';

const AboutMe = () => (
  <section id="about" className="section py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Om mig</h2>
      <p className="text-lg leading-relaxed">
        Jag heter Oscar Turell och är en passionerad fullstackutvecklare med fokus på modern webbutveckling. 
        Med erfarenhet av både backend i C#/.NET och frontend i React och Tailwind CSS, bygger jag användarvänliga 
        och funktionella applikationer från grunden.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Jag gillar problemlösning, tydlig kodstruktur och att lära mig nya tekniker. 
        Mitt mål är alltid att skapa stabila lösningar som inte bara fungerar – utan känns professionella och genomtänkta.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        När jag inte kodar tävlar jag i e-sport, tränar på gymmet eller umgås med min hund Atlas.
      </p>
    </div>
  </section>
);

export default AboutMe;
