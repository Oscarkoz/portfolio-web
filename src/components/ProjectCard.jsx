import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="border p-4 rounded shadow-md">
    <h3 className="text-xl font-semibold">{project.name}</h3>
    <p className="text-sm text-gray-500">{project.techStack}</p>
    <p className="my-2">{project.description}</p>
    <div className="flex gap-3">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" className="text-blue-500 underline">GitHub</a>
      )}
      {project.liveDemoUrl && (
        <a href={project.liveDemoUrl} target="_blank" className="text-green-600 underline">Live Demo</a>
      )}
    </div>
  </div>
);

export default ProjectCard;
