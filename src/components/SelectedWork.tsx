import React from 'react';
import { ArrowUpRight, ChevronRight, Layers } from 'lucide-react';
import { CaseStudy } from '../types';
import { portfolioData } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section 
      id="work"
      aria-label="Selected Work"
      className="py-10 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-6"
    >
      {/* Section Header with Ruler Motif */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2A2A22] pb-4 gap-4">
        <div className="space-y-1">
          <div className="font-mono text-xs uppercase tracking-widest text-[#4A7860] flex items-center gap-2">
            <span>INDEX // 02</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
            <span className="text-[#8C887F]">FEATURED ENGAGEMENTS</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#FAF8F5] tracking-tight">
            Selected Work
          </h2>
        </div>
        <div className="font-mono text-[11px] text-[#8C887F] max-w-xs">
          3 real enterprise & public sector initiatives. Click any project for the full architecture case study.
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {portfolioData.projects.map((project) => (
          <article 
            key={project.id}
            id={`project-${project.id}`}
            className="group relative border-b border-[#2A2A22] py-4 space-y-2"
          >
            {/* Top Index & Organization Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#8C887F]">
              <div className="flex items-center gap-3">
                <span className="text-lg sm:text-xl font-display font-medium text-[#4A7860]">{project.index}</span>
                <span className="text-[#2A2A22]">/</span>
                <span className="text-[#FAF8F5] uppercase tracking-wider font-mono">{project.organization}</span>
              </div>
              <div className="flex items-center gap-4">
                <span>{project.period}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline text-[#D8D4CA]">{project.role}</span>
              </div>
            </div>

            {/* Title & Interactive Trigger Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              
              <div className="lg:col-span-8 space-y-1">
                <h3 
                  onClick={() => onSelectProject(project)}
                  className="font-display font-semibold text-lg sm:text-xl text-[#FAF8F5] leading-snug cursor-pointer group-hover:text-[#FAF8F5] transition-colors"
                >
                  <span className="group-hover:underline decoration-[#4A7860] decoration-1 underline-offset-8">
                    {project.title}
                  </span>
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-[#8C887F] font-light leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Button to Open Signature Drawer */}
              <div className="lg:col-span-4 flex lg:justify-end">
                <button
                  id={`open-case-study-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  aria-label={`View Case Study for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1B1B15] border border-[#2A2A22] text-[11px] font-mono text-[#FAF8F5] group-hover:border-[#4A7860] hover:bg-[#22221B] transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-[#4A7860] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
