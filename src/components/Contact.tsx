import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-gray-950/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 reveal-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/35 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-455 text-sm">Email</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">{portfolioData.personal.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/35 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-455 text-sm">Phone</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">{portfolioData.personal.phone}</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/35 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group"
                >
                  <Github className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-cyan-500/35 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group"
                >
                  <Linkedin className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/40 backdrop-blur-md border border-gray-800 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
