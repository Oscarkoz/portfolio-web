import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="card" data-aos="fade-up">
    <h3>{project.name}</h3>
    
    {/* Teknikstack */}
    <p className="tech">{project.techStack}</p>
    
    {/* Beskrivning */}
    <p className="description">{project.description}</p>
    
    {/* Länkar */}
    <div className="links">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github">
          GitHub
        </a>
      )}
      {project.liveDemoUrl && (
        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="demo">
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
