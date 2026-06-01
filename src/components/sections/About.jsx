import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Calendar, Compass } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import FadeUp from '../animations/FadeUp';
import StaggerChildren, { StaggerItem } from '../animations/StaggerChildren';
import { experiences } from '../../data/experience';

export default function About() {
  const stats = [
    { label: 'Projects Built', value: 6, suffix: '' },
    { label: 'GitHub Repos', value: 25, suffix: '+' },
    { label: 'LinkedIn Connections', value: 430, suffix: '+' },
    { label: 'Technologies Learned', value: 12, suffix: '+' },
  ];

  const coursework = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Structures & Algorithms',
    'Database Management (DBMS)',
    'Object Oriented Programming',
    'Web Technologies',
  ];

  return (
    <section id="about" className="section-padding bg-[#fafafa] relative border-b border-slate-200/50">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Bridging AI & Software Development"
          subtitle="A passionate developer driven by building practical applications and designing elegant user experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Left Column: Personal Narrative, Stats & Education Card */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-slate-650 text-base sm:text-lg leading-relaxed">
              <FadeUp delay={0.05}>
                <p>
                  I'm a <strong className="text-slate-900 font-semibold">B.Tech Artificial Intelligence student</strong> at ITM Group of Institutions with a passion for building software that solves real-world problems.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  My journey started with Python and problem-solving, which gradually led me into web development, user experience design, and full-stack applications.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p>
                  I enjoy turning ideas into products, exploring new technologies, and continuously improving my development skills through hands-on projects and open-source learning.
                </p>
              </FadeUp>
            </div>

            {/* Quick Metrics Grid */}
            <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="p-5 bg-white border border-slate-200/60 rounded-2xl text-center hover:border-slate-350 hover:shadow-card transition-all duration-300">
                    <p className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-955 mb-1">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-[9px] font-accent font-extrabold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Redesigned Education Card */}
            <FadeUp delay={0.2} className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-card hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-4 pb-5 border-b border-slate-200/50">
                <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-accent font-extrabold uppercase tracking-widest text-primary-600">Education</span>
                  <h4 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                    B.Tech in Artificial Intelligence
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                    ITM Group of Institutions • Active Student
                  </p>
                </div>
              </div>

              {/* Coursework & Focus Areas */}
              <div className="pt-5 space-y-4">
                <h5 className="font-heading font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-2">
                  <BookOpen size={14} className="text-slate-400" />
                  Key Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50/50 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold hover:border-slate-350 hover:bg-white transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Clean Vertical Timeline Journey */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block" />
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Programming Journey
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200/80 space-y-8 py-2">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <FadeUp key={exp.id} delay={idx * 0.05} className="relative group">
                    {/* Timeline dot marker */}
                    <div 
                      className="absolute -left-[32px] top-1.5 w-4.5 h-4.5 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center transition-all duration-300 group-hover:border-slate-800"
                    >
                      <div className="w-2 h-2 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-slate-800" />
                    </div>

                    <div className="space-y-1.5 pl-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 font-accent tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="font-heading font-extrabold text-slate-800 text-base leading-tight">
                        {exp.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
