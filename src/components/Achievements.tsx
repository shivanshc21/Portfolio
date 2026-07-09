import { Trophy, Star, Award, Medal, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Achievements = () => {
  const iconMap = {
    trophy: Trophy,
    star: Star,
    award: Award,
    medal: Medal,
  };

  return (
    <section className="py-20 bg-gray-950/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.achievements.map((achievement, idx) => {
            const Icon =
              iconMap[achievement.icon as keyof typeof iconMap] || Trophy;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/35 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 reveal-scale"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl duration-500"></div>

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="text-white" size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 hover:scale-105 transform transition-all"
                          title="Visit profile"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
