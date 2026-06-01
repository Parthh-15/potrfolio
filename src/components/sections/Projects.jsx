import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import FadeUp from '../animations/FadeUp';
import { projects } from '../../data/projects';

function ProjectCard({ project }) {
  const ProjectIcon = project.icon;

  // Generate dynamic soft backgrounds based on accent color
  const iconStyle = {
    color: project.accentColor,
    backgroundColor: `${project.accentColor}0a`, // ~4% opacity
    borderColor: `${project.accentColor}25`      // ~15% opacity
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-slate-350 transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* Card Header: Icon & Top-Right GitHub */}
        <div className="flex items-center justify-between mb-6">
          <div 
            className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105"
            style={iconStyle}
          >
            <ProjectIcon size={20} />
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-800 transition-colors p-1"
            aria-label="GitHub Repository"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Card Title & Description */}
        <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[10px] font-bold bg-slate-50 text-slate-600 border border-slate-200/50 rounded-lg hover:border-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-650 hover:text-slate-950 transition-colors flex items-center gap-1"
          >
            Codebase <FaGithub size={12} />
          </a>
          
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-650 hover:text-slate-950 transition-colors flex items-center gap-1 ml-auto"
            >
              Live Demo <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#fafafa] relative border-b border-slate-200/50">
      <div className="container-custom">
        <SectionHeading
          label="My Works"
          title="Featured Projects"
          subtitle="Explore some of the applications and software systems built during my B.Tech studies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {projects.map((project) => (
            <FadeUp key={project.id} delay={project.id * 0.05}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
