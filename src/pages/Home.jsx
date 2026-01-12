import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown, Code, Palette, Zap } from 'lucide-react';
import portfolioAPI from '../api/portfolioService';

function Home() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [profileData, skillsData] = await Promise.all([
      portfolioAPI.fetchProfile(),
      portfolioAPI.fetchSkills()
    ]);
    
    if (profileData) setProfile(profileData);
    if (skillsData) setSkills(skillsData);
    setLoading(false);
  };

  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description: 'Creating beautiful, responsive interfaces with attention to detail'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and excellent user experience'
    }
  ];

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-2xl text-purple-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {profile?.name || 'Your Name'}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {profile?.title || 'Full Stack Developer | React Enthusiast | Python Expert'}
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            {profile?.bio || 'I build modern web applications with cutting-edge technologies.'}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12">
            {profile?.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            )}
            {profile?.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            )}
            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-slate-800 border border-purple-500 rounded-full font-semibold hover:bg-slate-700 transition-all"
            >
              Get In Touch
            </Link>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6">
              {profile?.bio || "I'm a passionate full-stack developer with expertise in building modern web applications."}
            </p>
            {profile?.location && (
              <p className="text-lg text-gray-300 mb-4">
                📍 Based in {profile.location}
              </p>
            )}
            {profile?.resume_url && (
              <a
                href={profile.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center hover:border-purple-500/50 transition-all"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          {skills.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No skills data available</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind? I'd love to hear about it and discuss how I can help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;