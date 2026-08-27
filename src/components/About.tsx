import React from 'react';
import { Award, BookOpen, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section 
      id="about"
      aria-label="About"
      className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 border-t border-[#2A2A22]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2A2A22] pb-6 gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-[#4A7860] flex items-center gap-2">
            {/* <span>INDEX // 03</span> */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
            <span className="text-[#8C887F]">BACKGROUND & COMPETENCIES</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#FAF8F5] tracking-tight">
            About & Leadership
          </h2>
        </div>
        <div className="font-mono text-xs text-[#8C887F]">
          10+ YEARS DRIVING AI, BI & ENTERPRISE PRODUCTS
        </div>
      </div>

      {/* Grid: Narrative Bio & Static Compact Capability List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Narrative Bio (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="font-mono text-xs text-[#4A7860] uppercase tracking-wider">
            NARRATIVE
          </div>

          <div className="space-y-5 font-sans text-base sm:text-lg text-[#FAF8F5]/90 font-light leading-relaxed">
            {portfolioData.bio.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Education & Academic Credentials */}
          <div className="pt-6 border-t border-[#2A2A22] space-y-4">
            <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#4A7860]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolioData.credentials.education.map((edu, idx) => (
                <div key={idx} className="bg-[#191913] border border-[#2A2A22] rounded-lg p-3.5 space-y-1">
                  <div className="font-mono text-[11px] text-[#4A7860]">{edu.year}</div>
                  <div className="font-sans text-xs font-medium text-[#FAF8F5]">{edu.degree}</div>
                  <div className="font-sans text-xs text-[#8C887F]">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="pt-4 space-y-3">
            <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#4A7860]" />
              <span>EXECUTIVE CERTIFICATIONS</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolioData.credentials.certifications.map((cert, idx) => (
                <span 
                  key={idx}
                  className="font-mono text-xs text-[#D8D4CA] bg-[#191913] border border-[#2A2A22] px-3 py-1 rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Static Compact Capability Matrix (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-xs text-[#4A7860] uppercase tracking-wider">
            CORE CAPABILITIES
          </div>

          <div className="space-y-6">
            {portfolioData.capabilities.map((group, idx) => (
              <div key={idx} className="bg-[#191913] border border-[#2A2A22] rounded-lg p-5 space-y-3">
                <div className="font-mono text-xs text-[#FAF8F5] uppercase tracking-wider border-b border-[#2A2A22] pb-2 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-[#4A7860]">[0{idx + 1}]</span>
                </div>

                <ul className="space-y-2.5">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 font-sans text-sm text-[#D8D4CA] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
