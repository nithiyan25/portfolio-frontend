import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
      {/* Project Image */}
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      
      {/* Project Description */}
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex space-x-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={20} className="mr-1" /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ExternalLink size={20} className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;