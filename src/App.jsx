import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Shield, Cpu, ExternalLink, Calendar, Download, Trophy, Award, Network, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. PRELOADER ---
const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center font-mono"
    >
      <div className="text-cyan-500 text-xs mb-4 tracking-[0.2em] animate-pulse">SYSTEM_INIT</div>
      <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
        />
      </div>
    </motion.div>
  );
};

// --- 2. NAVBAR ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.2, duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-tighter cursor-pointer">
          <span className="text-cyan-400">SR</span>
          <span className="text-purple-500">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-slate-300 font-medium text-sm">
          {['Experience', 'Projects', 'Achievements', 'Certifications'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
              {item}
            </a>
          ))}
          <a href="https://drive.google.com/drive/u/5/folders/1m0rR1NSt9mdz6J_xdDUAe9JU3WB_iuJV" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all">
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

// --- 3. HERO SECTION (Reduced Image Size) ---
const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white relative flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 px-6 lg:px-12 gap-4">
        
        {/* LEFT: Name */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-3 text-center lg:text-right order-2 lg:order-1 flex flex-col items-center lg:items-end"
        >
          <p className="text-gray-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase">Hello, I'm</p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-none text-white mb-8">
            Shambhavi <br />
            <span className="text-slate-600">Raj</span>
          </h1>
          
          <div className="flex gap-6 text-slate-500">
            <a href="https://www.linkedin.com/in/shambhavi-raj/" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="https://github.com/shambhaviraj20" target="_blank" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="mailto:rajshambhavi13@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        {/* CENTER: Image (REDUCED SIZE) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          // Changed height from h-[700px] to h-[550px]
          className="lg:col-span-6 relative flex justify-center order-1 lg:order-2 h-[350px] lg:h-[550px] items-end"
        >
          <img 
            src="/profile_transparent.png" 
            alt="Shambhavi Raj" 
            className="h-full w-auto object-contain z-10"
            style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* RIGHT: Role */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-3 text-center lg:text-left order-3 flex flex-col items-center lg:items-start"
        >
          <p className="text-gray-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase">Role</p>
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Developer</span>
          </h2>
          <a 
            href="https://drive.google.com/drive/u/5/folders/1m0rR1NSt9mdz6J_xdDUAe9JU3WB_iuJV" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 hover:text-white transition-colors border-b border-slate-800 pb-2 hover:border-white"
          >
            DOWNLOAD RESUME <Download size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// --- 4. EXPERIENCE ---
const Experience = () => {
  const experiences = [
    {
      company: "Infosys Springboard - Virtual Internship 6.0",
      role: "AI Intern",
      period: "Nov 2025 - Present",
      desc: "Developed an end-to-end RAG system using embeddings, vector search, and prompt tuning.",
      tech: ["Python", "FAISS", "LLMs"]
    },
    {
      company: "Cybrainyx Technologies + Nagpur Police",
      role: "Intern",
      period: "Jun 2025 - Present",
      desc: "Developed 'Garuda Drishti', a surveillance tool monitoring 30,000+ posts. Assisted police in identifying harmful content on social media.",
      tech: ["Python", "OSINT", "APIs"]
    },
    {
      company: "BlockseBlock",
      role: "AI & Blockchain Intern",
      period: "Aug 2025 - Sep 2025",
      desc: "Researched decentralized systems and documented modules. Gained hands-on experience in practical blockchain implementation workflows.",
      tech: ["Blockchain", "AI", "Research"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-16 flex items-center gap-3">
          <Terminal className="text-cyan-400" /> Work Experience
        </h2>
        
        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-[16px] h-[16px] rounded-full bg-slate-950 border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
              <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-mono mt-1 md:mt-0">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <p className="text-purple-400 font-medium mb-4">{exp.company}</p>
                <p className="text-slate-400 leading-relaxed mb-6">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tech.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-950 border border-slate-700 text-slate-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. PROJECTS ---
const Projects = () => {
  const projects = [
    {
      title: "Garuda Drishti",
      category: "Cybersecurity",
      desc: "A surveillance dashboard for Nagpur Police. Monitors 30k+ posts using RapidAPI & Apify to flag harmful content.",
      stack: ["Flask", "MongoDB", "React", "Python"],
      color: "border-cyan-500/50"
    },
    {
      title: "ProofMint",
      category: "Web3 / Blockchain",
      desc: "Decentralized IP protection on ICP. Uses on-chain NLP to detect plagiarism and mints Soulbound NFTs.",
      stack: ["Motoko", "React", "ICP", "NLP"],
      color: "border-purple-500/50"
    },
    {
      title: "PulseMed+",
      category: "IoT & AI",
      desc: "AI-based rural health assistant. Uses sensors for vitals and connects to hospitals via SMS. BITS Pilani Finalist.",
      stack: ["IoT", "Python", "Twilio", "Sensors"],
      color: "border-green-500/50"
    },
    {
      title: "Galaxy Evolution",
      category: "AI Research",
      desc: "Simulating galaxy morphologies using VAE-PINN architectures. Achieved 89.87% accuracy on Galaxy Zoo.",
      stack: ["TensorFlow", "NumPy", "Physics-ML"],
      color: "border-pink-500/50"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center justify-center gap-3">
          <Cpu className="text-purple-400" /> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`group relative bg-slate-900 rounded-2xl p-8 border hover:border-opacity-100 transition-all duration-300 ${project.color} border-slate-800 hover:-translate-y-1 shadow-lg`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-bold text-slate-100 mt-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
                <div className="p-2 bg-slate-800 rounded-full text-slate-400 group-hover:text-white transition-colors">
                    <ExternalLink size={20} />
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-950/50 border border-slate-700 text-slate-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. HACKATHONS & SKILLS ---
const HackathonsAndSkills = () => {
  const achievements = [
    {
      title: "Garuda Dhristi",
      org: "Cybrainyx Technologies + Nagpur Police",
      badge: "",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/50",
      desc: "
      desc: "Felicitated by Hon. CM of Maharashtra, Shri. Devendra Fadnavis. Developed 'Garuda Drishti', a surveillance tool monitoring 30,000+ posts. Assisted police in identifying harmful content on social media.",
      tags: ["Python", "OSINT", "APIs"]
    },
    {
      title: "World Computer Hackher's League",
      org: "ICP Hubs",
      badge: "Regional Finalist (Asia)",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/50",
      desc: "Selected for Regionals (Asia) out of 5000+ entries from India and more than 10K submissions from around the globe. Built 'ProofMint', a decentralized copyright management platform on the Internet Computer Protocol.",
      tags: ["Web3", "Copyright", "Top 10%"]
    },
    {
      title: "APOGEE '25",
      org: "BITS Pilani",
      badge: "Top 5 Finalist",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/50",
      desc: "Recognized for 'PulseMed+', an AI-powered rural healthcare assistant. Demonstrated IoT integration for real-time vitals monitoring in low-resource settings.",
      tags: ["IoT", "Healthcare", "Innovation"]
    },
    {
      title: "Breaking Case 8.0",
      org: "IIM Trichy",
      badge: "Top 11 Finalist",
      badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/50",
      desc: "Competed in a national-level case study competition. Solved complex business problems focusing on strategy and market innovation.",
      tags: ["Strategy", "Business", "Problem Solving"]
    },
    {
      title: "Smart India Hackathon 2025",
      org: "Govt of India",
      badge: "Internal Round",
      badgeColor: "bg-green-500/10 text-green-400 border-green-500/50",
      desc: "Selected in the Internal Round (College Level) for proposing innovative digital solutions for public sector problems.",
      tags: ["National", "Social Impact"]
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HACKATHONS */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3 justify-center">
              <Trophy className="text-yellow-400" /> Recognition & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {achievements.map((item, index) => (
                <div key={index} className="bg-slate-900/40 rounded-2xl p-8 border border-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-1">{item.org}</div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                    {item.desc}
                  </p>
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* SKILLS */}
        <div id="skills">
            <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3 justify-center">
              <Terminal className="text-green-400" /> Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
                { title: "Languages", items: ["Python", "Java", "JavaScript", "Solidity/Motoko", "SQL"] },
                { title: "Frameworks", items: ["React.js", "Node.js", "Flask", "TensorFlow", "Tailwind"] },
                { title: "Tools", items: ["Git/GitHub", "Docker", "MongoDB", "Linux"] }
            ].map((cat, i) => (
                <div key={i} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
                <h3 className="text-lg font-bold text-slate-100 mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {cat.items.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-950 border border-slate-700 text-slate-300 text-sm rounded cursor-default hover:text-cyan-400 transition-colors">
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. NEW CERTIFICATIONS SECTION ---
const Certifications = () => {
    const certs = [
        { name: "CCNAv7: Introduction to Networks", issuer: "Cisco NetAcad", date: "2024", icon: <Network size={20} className="text-blue-400" /> },
        { name: "Cybersecurity Essentials", issuer: "Cisco NetAcad", date: "2025", icon: <Shield size={20} className="text-green-400" /> },
        { name: "Introduction to OpenAI GPT Models", issuer: "Infosys Springboard", date: "2025", icon: <Bot size={20} className="text-purple-400" /> }
    ];

    return (
        <section id="certifications" className="py-20 bg-slate-950/50 border-t border-slate-900">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-slate-100 mb-10 flex items-center justify-center gap-3">
                    <Award className="text-orange-400" /> Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors flex flex-col items-center text-center">
                            <div className="p-3 bg-slate-950 rounded-full mb-4 border border-slate-800">
                                {cert.icon}
                            </div>
                            <h3 className="font-bold text-slate-200 text-sm mb-1">{cert.name}</h3>
                            <p className="text-xs text-slate-500 mb-2">{cert.issuer}</p>
                            <span className="text-[10px] font-mono text-slate-600 bg-slate-950 px-2 py-1 rounded border border-slate-800">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 8. MAIN APP ---
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <HackathonsAndSkills />
          <Certifications />
          
          <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>Designed & Built by Shambhavi Raj.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
