import React from 'react';
import { Bot, BarChart3, Building2, Cpu, Code2, Database, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      aria-label="Known and Enhancing Technologies" 
      className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-12 border-t border-[#2A2A22]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2A2A22] pb-6 gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-[#4A7860] flex items-center gap-2">
            <span>TECHNICAL // 04</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
            <span className="text-[#8C887F]">KNOWN & ENHANCING CAPABILITIES</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#FAF8F5] tracking-tight">
            Technical Stack & Ecosystem
          </h2>
        </div>
        <div className="font-mono text-xs text-[#8C887F]">
          MODELS · DATA PIPELINES · TOOLING
        </div>
      </div>

      {/* 4 Core Technology Matrices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skillCategories.map((cat, idx) => (
          <div 
            key={idx}
            className="bg-[#191913] border border-[#2A2A22] rounded-xl p-6 space-y-5 hover:border-[#4A7860]/40 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-[#2A2A22] pb-3">
              <div className="space-y-1">
                <div className="font-display font-semibold text-base sm:text-lg text-[#FAF8F5]">
                  {cat.title}
                </div>
              </div>
              <span className="font-mono text-xs bg-[#22221B] text-[#4A7860] px-2.5 py-1 rounded border border-[#2A2A22]">
                {cat.badge}
              </span>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="font-mono text-xs text-[#D8D4CA] bg-[#22221B] hover:bg-[#2A2A22] hover:text-[#FAF8F5] border border-[#2A2A22] px-3 py-1.5 rounded-md transition-colors cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Areas of Interest Matrix */}
      <div className="space-y-4 pt-4">
        <div className="font-mono text-xs text-[#4A7860] uppercase tracking-wider">
          AREAS OF ACTIVE DOMAIN DEPTH
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.interestAreas.map((area, idx) => (
            <div key={idx} className="bg-[#191913] border border-[#2A2A22] rounded-xl p-5 space-y-3">
              <div className="font-display font-medium text-sm text-[#FAF8F5] border-b border-[#2A2A22] pb-2 flex items-center justify-between">
                <span>{area.title}</span>
                <span className="font-mono text-[10px] text-[#4A7860]">0{idx + 1}</span>
              </div>
              <ul className="space-y-1.5">
                {area.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="font-sans text-xs text-[#8C887F] flex items-start gap-2">
                    <span className="text-[#4A7860] text-[10px] leading-none mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning / Actively Enhancing Tech */}
      <div className="bg-[#191913] border border-[#2A2A22] rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#2A2A22] pb-3">
          <div className="font-mono text-xs text-[#4A7860] uppercase tracking-wider flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>ACTIVELY EXPANDING & MODERNIZING</span>
          </div>
          <span className="font-mono text-xs text-[#8C887F]">LANGUAGES & WEB CORE</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {portfolioData.learningTechnologies.map((tech, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#22221B] border border-[#2A2A22]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
              <span className="font-mono text-xs text-[#FAF8F5] font-medium">{tech.name}</span>
              <span className="text-[10px] font-mono text-[#8C887F]">({tech.level})</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
