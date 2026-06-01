import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';
import Button from '../ui/Button';
import FloatingElement from '../animations/FloatingElement';
import FadeUp from '../animations/FadeUp';

export default function Hero() {
  const focusAreas = ['React', 'Python', 'Full Stack Development', 'AI Applications'];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const monoStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa] pt-20">
      {/* Dynamic background glow blobs for depth */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-12 lg:py-20">
        
        {/* Left Column: Premium Typography & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <FadeUp delay={0.05}>
            <span className="font-accent inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-800 text-xs font-bold border border-slate-950/5 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              B.Tech AI Student • Software Developer
            </span>
          </FadeUp>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7.5xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Parth Pathari
          </h1>

          <FadeUp delay={0.12}>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl mb-8">
              Building software that transforms ideas into useful digital experiences. Specializing in Artificial Intelligence and Full Stack development.
            </p>
          </FadeUp>

          <FadeUp delay={0.18} className="mb-10 max-w-lg">
            <h3 className="font-accent text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Core Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {focusAreas.map((focus, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-white text-slate-700 border border-slate-200/80 rounded-xl hover:border-slate-350 hover:shadow-sm transition-all duration-200"
                >
                  {focus}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.25} className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" onClick={() => scrollToSection('projects')}>
              View Projects <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" size="lg" href="/resume.pdf" target="_blank">
              Download Resume <Download size={16} />
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollToSection('contact')}>
              Contact <Mail size={16} />
            </Button>
          </FadeUp>
        </div>

        {/* Right Column: Sleek Glowing Code Terminal Card */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          {/* Faint ambient glow behind terminal */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-primary-500/5 rounded-[40px] blur-3xl -z-10" />
          
          <FloatingElement duration={6} y={8} className="w-full max-w-[420px]">
            <div className="w-full bg-[#0d111b] rounded-3xl border border-slate-800/80 shadow-elevated overflow-hidden text-xs text-slate-300">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#07090e] border-b border-slate-800/50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1.5 tracking-wide">
                  <Terminal size={12} className="text-slate-500" /> developer.json
                </span>
                <span className="w-4" /> {/* Spacer */}
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-3.5 leading-relaxed text-slate-400" style={monoStyle}>
                <div>
                  <span className="text-indigo-400 font-semibold">const</span> <span className="text-blue-400">developer</span> = &#123;
                </div>
                
                <div className="pl-4">
                  <span className="text-slate-500">name</span>: <span className="text-emerald-400">"Parth Pathari"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-500">education</span>: <span className="text-emerald-400">"B.Tech in Artificial Intelligence"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-500">location</span>: <span className="text-emerald-400">"Mumbai, India"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-500">skills</span>: [
                  <div className="pl-4 text-sky-400">
                    "Python", "JavaScript", "React.js",
                  </div>
                  <div className="pl-4 text-sky-400">
                    "Node.js", "C++", "Machine Learning"
                  </div>
                  <span className="text-slate-400">],</span>
                </div>

                <div className="pl-4">
                  <span className="text-slate-500">status</span>: <span className="text-emerald-400">"Active Student"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-500">openToWork</span>: <span className="text-amber-400">true</span>
                </div>

                <div>&#125;;</div>

                {/* Simulated CLI prompt */}
                <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 text-slate-500 text-[10px]">
                  <span className="text-emerald-500">~</span>
                  <span className="text-sky-500">git</span> log -n 1 --oneline
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-300">"Initial commit: premium redesign"</span>
                </div>
              </div>

            </div>
          </FloatingElement>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
        <span className="text-[9px] font-accent font-bold text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-3.5 bg-slate-300 rounded-full"
        />
      </div>
    </section>
  );
}
