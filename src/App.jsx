import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, ArrowRight } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'dark bg-[#0a0a0f] text-white' : 'bg-[#f8f5f0] text-[#1a1a1a]'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b ${darkMode ? 'bg-[#0a0a0f]/95 border-gray-800' : 'bg-[#f8f5f0]/95 border-[#e5e0d8]'}`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-medium tracking-tight">TM</div>
          <div className="flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-[#7c3aed] transition-colors">About</a>
              <a href="#skills" className="hover:text-[#7c3aed] transition-colors">Skills</a>
              <a href="#projects" className="hover:text-[#7c3aed] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#7c3aed] transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen pt-28 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border border-[#e5e0d8] dark:border-gray-700 rounded-full px-5 py-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for Internships • 2026
            </div>

            <h1 className="hero-name text-7xl md:text-[5.5rem] leading-[1.05] font-medium tracking-tighter">
              Thejaswini M
            </h1>

            <p className="text-2xl text-[#6b5f5a] dark:text-gray-400">
              Engineer by degree, Developer &amp; AI Enthusiast by passion
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white dark:bg-gray-900 border border-[#e5e0d8] dark:border-gray-700 px-5 py-2 rounded-full text-sm font-medium">SWE</div>
              <div className="bg-[#f3e8ff] dark:bg-purple-950 text-[#6d28d9] dark:text-purple-300 px-5 py-2 rounded-full text-sm font-medium">AI/ML</div>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-medium">
                <Mail size={20} /> Get in touch
              </a>
              <a href="https://github.com/ThejaswiniM02" target="_blank" className="border-2 border-black dark:border-white hover:bg-black hover:text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-medium">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          {/* TM Circle */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c6fcd] via-[#2dd4bf] to-[#60a5fa] rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-8xl font-serif shadow-inner">
                  TM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 border-t border-b border-[#e5e0d8] dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 bg-white dark:bg-gray-900 border border-[#e5e0d8] dark:border-gray-700 rounded-3xl p-10">
              <div className="uppercase tracking-widest text-sm text-[#6b5f5a] mb-4">CHAPTER 2026</div>
              <h2 className="text-5xl font-serif leading-tight">Building at the intersection of software &amp; intelligence</h2>
              <p className="mt-8 text-lg text-[#6b5f5a] dark:text-gray-400">
                Final year engineering student with hands-on experience in full stack development and AI/ML. I love turning ideas into real, working products — from Chrome extensions to disease detection systems.
              </p>
            </div>
            <div className="md:col-span-5 bg-gradient-to-br from-[#f3e8ff] to-[#ecfdf5] dark:from-purple-950 dark:to-teal-950 rounded-3xl p-10 flex flex-col justify-center">
              <div className="text-7xl font-semibold text-[#6b21a8]">26</div>
              <div className="text-2xl mt-2">Actively seeking SWE &amp; AI/ML internships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
<section id="skills" className="py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <div className="uppercase tracking-widest text-sm text-[#6b5f5a] dark:text-gray-400">ARSENAL</div>
      <h2 className="text-5xl font-serif mt-3">Skills</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Programming", skills: ["Python", "Java", "JavaScript", "TypeScript"] },
        { title: "AI & ML", skills: ["OpenCV", "scikit-learn", "NLP", "Deep Learning", "Whisper WASM"] },
        { title: "Backend", skills: ["Spring Boot", "Node.js", "Express.js"] },
        { title: "Frontend", skills: ["React", "Vite", "Tailwind CSS"] },
        { title: "Databases", skills: ["MongoDB", "MySQL"] },
        { title: "Tools", skills: ["Git", "Docker", "Postman", "Tableau", "Power BI"] }
      ].map((group, i) => (
        <div key={i} className="bg-white dark:bg-gray-900 border border-[#e5e0d8] dark:border-gray-700 rounded-3xl p-8 hover:-translate-y-1 transition-all">
          <div className="text-[#7c3aed] uppercase text-xs tracking-widest mb-6 font-medium">{group.title}</div>
          <div className="flex flex-wrap gap-3">
            {group.skills.map(skill => (
              <span key={skill} className="bg-[#f8f5f0] dark:bg-gray-800 px-5 py-2.5 rounded-2xl text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white dark:bg-gray-900 border-t border-b border-[#e5e0d8] dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-widest text-sm text-[#6b5f5a] dark:text-gray-400">SELECTED WORK</div>
            <h2 className="text-5xl font-serif mt-3">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 border border-[#e5e0d8] dark:border-gray-700 rounded-3xl p-8 group">
              <div className="text-4xl mb-6">👁️</div>
              <h3 className="text-2xl font-medium mb-2">VisionForAll</h3>
              <p className="text-[#6b5f5a] dark:text-gray-400">Real-time color detection &amp; accessibility Chrome extension (Python + OpenCV)</p>
              <a href="https://github.com/ThejaswiniM02/VisionForAll" target="_blank" className="mt-6 inline-flex items-center gap-2 text-[#7c3aed] hover:underline">
                View on GitHub <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-[#e5e0d8] dark:border-gray-700 rounded-3xl p-8 group">
              <div className="text-4xl mb-6">🩺</div>
              <h3 className="text-2xl font-medium mb-2">Disease Detector</h3>
              <p className="text-[#6b5f5a] dark:text-gray-400">Symptom-based disease prediction using JavaScript &amp; ML</p>
              <a href="https://github.com/ThejaswiniM02/Disease_Detector" target="_blank" className="mt-6 inline-flex items-center gap-2 text-[#7c3aed] hover:underline">
                View on GitHub <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-[#1a1a1a] text-white border border-[#444] rounded-3xl p-8 flex flex-col">
              <div className="text-4xl mb-6">📚</div>
              <h3 className="text-2xl font-medium mb-2">+11 More Projects</h3>
              <p className="text-gray-400 flex-1">Full-stack, automation, and AI experiments</p>
              <a href="https://github.com/ThejaswiniM02" target="_blank" className="text-[#c4b5fd] inline-flex items-center gap-2 mt-auto">
                Browse all repositories <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-[#0f172a] text-white">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-5xl font-serif">Let's build something meaningful together</h2>
          <p className="mt-6 text-xl text-gray-400">Open to SWE and AI/ML internship opportunities in 2026</p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:thejaswinim029@gmail.com" 
               className="bg-white text-black px-10 py-5 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-gray-100">
              <Mail size={22} /> Email Me
            </a>
            <a href="https://github.com/ThejaswiniM02" target="_blank"
               className="border border-gray-600 hover:border-white px-10 py-5 rounded-2xl font-medium flex items-center justify-center gap-3">
              <Github size={22} /> GitHub
            </a>
            <a href="https://linkedin.com/in/thejaswini-m" target="_blank"
               className="border border-gray-600 hover:border-white px-10 py-5 rounded-2xl font-medium flex items-center justify-center gap-3">
              <Linkedin size={22} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-[#6b5f5a] dark:text-gray-400">
        © 2026 Thejaswini M • Built with Vite + Vercel
      </footer>
    </div>
  );
}

export default App;