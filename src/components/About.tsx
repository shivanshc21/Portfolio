import { CheckCircle2, Code2, Zap, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const highlights = [
    { icon: Code2, text: portfolioData.about.highlights[0] },
    { icon: Zap, text: portfolioData.about.highlights[1] },
    { icon: CheckCircle2, text: portfolioData.about.highlights[2] },
    { icon: Users, text: portfolioData.about.highlights[3] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl shadow-cyan-500/50">
                  SC
                </div>
                <p className="text-xl text-gray-300 font-semibold">
                  {portfolioData.personal.name}
                </p>
                <p className="text-cyan-400">Software Developer</p>
              </div>
            </div>
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {portfolioData.about.description}
            </p>

            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all hover:scale-105 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                      <Icon className="text-cyan-400" size={20} />
                    </div>
                    <p className="text-gray-300 pt-2">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
