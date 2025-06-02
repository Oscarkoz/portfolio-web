import React from 'react';

const skills = ['C#', '.NET', 'Entity Framework', 'React', 'Tailwind CSS', 'SQL', 'Azure', 'Git', 'PostgreSQL'];

const Skills = () => (
  <section id="skills" className="py-16 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold mb-4">Färdigheter</h2>
    <ul className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <li key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded shadow-sm">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
