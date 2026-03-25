import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Developer passionate about building scalable web applications and solving complex problems.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="text-red-500" size={16} fill="currentColor" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
