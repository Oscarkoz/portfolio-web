import React from 'react';
import { motion } from 'framer-motion';

const skills = ['C#', '.NET', 'Entity Framework', 'React', 'Tailwind CSS', 'SQL', 'Azure', 'Git', 'PostgreSQL'];

const Skills = () => (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="section"
  >
    <h2 className="text-3xl font-bold mb-4 text-center">Färdigheter</h2>
    <ul className="flex flex-wrap justify-center gap-3">
      {skills.map((skill, i) => (
        <motion.li
          key={i}
          className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.section>
);

export default Skills;
