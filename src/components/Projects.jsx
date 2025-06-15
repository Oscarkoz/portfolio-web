import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  fetch('https://projectapi-oscar-bdejdmfshugaftay.westeurope-01.azurewebsites.net/api/projects')
    .then(res => res.json())
    .then(data => {
      console.log("API-data:", data);
      setProjects(data);
    })
    .catch(err => console.error("Fel vid hämtning:", err));
}, []);


  return (
    <section id="projects" className="section">
      <h2 className="text-3xl font-bold mb-4">Projekt</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(proj => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
