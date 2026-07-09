import { useState, useEffect } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = portfolioData.personal.tagline;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/15 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/15 rounded-full blur-[100px] animate-float-delayed"></div>
        <div className="absolute w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500/8 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <p className="text-cyan-400 text-sm sm:text-base font-semibold mb-2 tracking-widest uppercase">
              WELCOME TO MY PORTFOLIO
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-white to-blue-500 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>

          <div className="h-16 sm:h-20 mb-8 animate-fade-in-up delay-200">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide">
              {typedText}
              <span className="animate-blink text-cyan-400">|</span>
            </p>
          </div>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
            {portfolioData.personal.intro}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up delay-400">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 bg-gray-900/60 backdrop-blur-md text-white rounded-xl font-semibold border border-gray-800 hover:border-cyan-500/80 hover:bg-gray-800/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download="Shivansh_Chaurasiya_Resume.pdf"
              className="px-8 py-3.5 bg-gray-900/60 backdrop-blur-md text-white rounded-xl font-semibold border border-gray-800 hover:border-cyan-500/80 hover:bg-gray-800/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-500">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
