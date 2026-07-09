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
    <section id="about" className="py-20 bg-gray-950/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative reveal-left">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/50 p-8 flex items-center justify-center transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/5 group">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold text-white shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-all duration-500">
                  SC
                </div>
                <p className="text-2xl text-white font-bold tracking-wide">
                  {portfolioData.personal.name}
                </p>
                <p className="text-cyan-400 font-medium mt-1">Software Developer</p>
              </div>
            </div>
            <div className="absolute -z-10 -top-2 -left-2 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-sm"></div>
          </div>

          <div className="space-y-6 reveal-right">
            <p className="text-gray-350 text-lg leading-relaxed font-light">
              {portfolioData.about.description}
            </p>

            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800/80 hover:border-cyan-500/40 hover:bg-gray-850/40 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all">
                      <Icon className="text-cyan-400" size={20} />
                    </div>
                    <p className="text-gray-300 font-normal pt-2">{item.text}</p>
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
