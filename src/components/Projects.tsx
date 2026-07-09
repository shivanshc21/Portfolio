import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/35 hover:-translate-y-1.5 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden ${
                idx % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-gray-950/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/20 border border-transparent transition-all"
                    >
                      <Github size={20} />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-gray-950/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/20 border border-transparent transition-all"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 tracking-wider uppercase">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-gray-400 flex items-start gap-2.5">
                        <span className="text-cyan-400 mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-sm shadow-cyan-400/50"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-gray-800/80">
                  {project.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-xs bg-cyan-500/5 text-cyan-400/90 rounded-full border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300 transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
