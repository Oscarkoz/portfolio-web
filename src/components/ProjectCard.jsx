import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>

    <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">
      {project.techStack}
    </p>

    <p className="text-gray-700 dark:text-gray-300 mb-4">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-900 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          GitHub
        </a>
      )}
      {project.liveDemoUrl ? (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Live Demo
        </a>
      ) : (
        <span className="text-sm text-gray-400 italic mt-2">Ingen Live Demo</span>
      )}
    </div>
  </div>
);

export default ProjectCard;
