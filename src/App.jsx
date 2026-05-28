import { useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a]">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-[#f8f5f0]/95 backdrop-blur-lg border-b border-[#e5e0d8] z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-medium">TM</div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#7c3aed]">About</a>
            <a href="#skills" className="hover:text-[#7c3aed]">Skills</a>
            <a href="#projects" className="hover:text-[#7c3aed]">Projects</a>
            <a href="#contact" className="hover:text-[#7c3aed]">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero - More like your original */}
      <section className="min-h-screen pt-28 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-[#e5e0d8] text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available 2026
            </div>

            <h1 className="hero-name text-6xl md:text-7xl leading-none font-medium tracking-tighter">
              Thejaswini M
            </h1>

            <p className="text-2xl text-[#6b5f5a]">
              Engineer by degree, Developer &amp; AI Enthusiast by passion
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-white border border-[#e5e0d8] px-5 py-2 rounded-full text-sm">SWE</span>
              <span className="bg-[#f3e8ff] text-[#6d28d9] px-5 py-2 rounded-full text-sm">AI/ML</span>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="bg-[#7c3aed] text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-[#6d28d9]">
                <Mail size={20} /> Get in touch
              </a>
              <a href="https://github.com/ThejaswiniM02" target="_blank" className="border-2 border-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black hover:text-white">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed] via-[#14b8a6] to-[#60a5fa] rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center text-8xl font-serif shadow-inner">
                  TM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About, Skills, Projects, Contact sections remain the same as previous version */}
      {/* ... (keeping it short here - copy the rest from my previous message) */}

      {/* I'll give you the full file if needed, but try this first */}
    </div>
  );
}

export default App;
