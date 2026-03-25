import { GraduationCap, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

            {portfolioData.experience.map((item, idx) => (
              <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  {item.type === 'education' ? (
                    <GraduationCap className="text-white" size={28} />
                  ) : (
                    <Briefcase className="text-white" size={28} />
                  )}
                </div>

                <div className="group p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-3">{item.organization}</p>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            {portfolioData.volunteer.map((item, idx) => (
              <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Briefcase className="text-white" size={28} />
                </div>

                <div className="group p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
