import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import portfolioAPI from '../api/portfolioService';

function Projects() {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  useEffect(() => {
    loadProjects();
  }, [filter]);

  const loadProjects = async () => {
    setLoading(true);
    const category = filter === 'All' ? null : filter;
    const data = await portfolioAPI.fetchProjects(category);
    setProjects(data || []);
    setLoading(false);
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my development journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <p className="text-xl text-purple-400">Loading projects...</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && projects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* No Projects Message */}
        {!loading && projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/nithiyan25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-800 border border-purple-500 rounded-full font-semibold hover:bg-slate-700 transition-all"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;