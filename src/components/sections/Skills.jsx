import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import FadeUp from '../animations/FadeUp';
import { skillCategories } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white relative border-b border-slate-200/50 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary-100/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="My Skills"
          title="Technical Competencies"
          subtitle="A carefully selected stack focused on clean frontends, structured backends, and algorithmic problem-solving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="bg-[#fafafa] p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-card hover:border-slate-300 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900">
                      {category.title}
                    </h3>
                    <span className="text-[9px] font-accent font-extrabold text-slate-400 uppercase tracking-widest bg-white px-2.5 py-1 rounded-full border border-slate-200/80 shadow-sm">
                      {category.skills.length} Items
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Flexible wrap of skills badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200/60 text-slate-800 rounded-xl hover:border-slate-350 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
                      >
                        <span 
                          className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                          style={{ color: skill.color }}
                        >
                          <Icon size={15} />
                        </span>
                        <span className="text-xs font-semibold text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
