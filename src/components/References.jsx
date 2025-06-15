import React from "react";
import { motion } from "framer-motion";

const references = [
  {
    id: 1,
    avatar: "🧑‍💻",
    comment: "Oscar levererade ett snyggt och stabilt projekt på kort tid. Väldigt imponerande!",
    author: "Anna Lindgren",
    role: "Handledare, Yrkesakademin",
    rating: 5,
  },
  {
    id: 2,
    avatar: "🎨",
    comment: "Designen var ren och modern. Responsivitet och struktur var helt on point.",
    author: "Elias Friberg",
    role: "Webbdesigner",
    rating: 4,
  },
  {
    id: 3,
    avatar: "🧠",
    comment: "Kodstrukturen var lätt att följa och lösningarna visade på stor teknisk förståelse.",
    author: "Maja Karlsson",
    role: "Systemutvecklare",
    rating: 5,
  },
];

const References = () => {
  return (
    <motion.section
      id="references"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Referenser</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Här är några omdömen från personer som sett mitt arbete.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="text-5xl mb-4">{ref.avatar}</div>
              <p className="italic text-gray-600 dark:text-gray-300">"{ref.comment}"</p>
              <h3 className="font-bold mt-3 text-gray-900 dark:text-white">{ref.author}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{ref.role}</p>
              <div className="text-yellow-400 text-lg mt-2">
                {"⭐".repeat(ref.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default References;
