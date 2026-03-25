import { Code2, Server, Database, Wrench, Cloud, Brain, FileCode } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: portfolioData.skills.frontend,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: portfolioData.skills.backend,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: portfolioData.skills.aiml,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: portfolioData.skills.databases,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: portfolioData.skills.tools,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Services',
      icon: Cloud,
      skills: portfolioData.skills.services,
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Languages',
      icon: FileCode,
      skills: portfolioData.skills.languages,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 text-sm bg-gray-800/70 text-gray-300 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
