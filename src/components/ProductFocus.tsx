import React from 'react';
import { Bot, Boxes, Building2, Cpu, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ProductFocus: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#4A7860]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-[#4A7860]" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-[#4A7860]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4A7860]" />;
    }
  };

  return (
    <section 
      id="focus" 
      aria-label="What I'm Building & Focus" 
      className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-12 border-t border-[#2A2A22]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2A2A22] pb-6 gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-[#4A7860] flex items-center gap-2">
            <span>PILLARS // 02</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
            <span className="text-[#8C887F]">WHAT I'M BUILDING & CURRENT FOCUS</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#FAF8F5] tracking-tight">
            Product Vision & Focus
          </h2>
        </div>
        <div className="font-mono text-xs text-[#8C887F]">
          PRODUCT × AI × DATA × AEC
        </div>
      </div>

      {/* Strategic Formula & Approach Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Lifecycle Progression Formula */}
        <div className="lg:col-span-7 bg-[#191913] border border-[#2A2A22] rounded-xl p-6 space-y-4">
          <div className="font-mono text-xs text-[#4A7860] uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>OPERATIONAL FRAMEWORK</span>
          </div>

          <div className="text-base sm:text-lg font-display font-medium text-[#FAF8F5] tracking-tight leading-relaxed">
            {portfolioData.equation}
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#8C887F] font-light leading-relaxed">
            Connecting high-level strategic objectives with deep data pipelines, generative intelligence models, and reliable production engineering to deliver validated outcomes.
          </p>
        </div>

        {/* Right: Core Guiding Philosophy */}
        <div className="lg:col-span-5 bg-[#1B1B15] border border-[#2A2A22] rounded-xl p-6 space-y-3 flex flex-col justify-center">
          <div className="font-mono text-[11px] text-[#8C887F] uppercase tracking-widest flex items-center gap-2">
            <span>PHILOSOPHY</span>
            <span className="text-[#4A7860]">/ RULE 01</span>
          </div>
          <blockquote className="font-sans text-sm sm:text-base text-[#FAF8F5] italic font-normal leading-snug">
            "{portfolioData.approachQuote}"
          </blockquote>
        </div>

      </div>

      {/* 3 Pillars: What I'm Building */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider">
          CORE FOCUS PILLARS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.whatImBuilding.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#191913] border border-[#2A2A22] rounded-xl p-6 space-y-5 hover:border-[#4A7860]/60 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#22221B] border border-[#2A2A22] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-mono text-xs text-[#8C887F]">0{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-xl text-[#FAF8F5] group-hover:text-[#FAF8F5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#8C887F] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-[#2A2A22]/80 space-y-2">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 font-mono text-xs text-[#D8D4CA]">
                    <span className="w-1 h-1 rounded-full bg-[#4A7860]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Progression Ladder */}
      <div className="bg-[#191913] border border-[#2A2A22] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2A2A22] pb-4">
          <div className="font-mono text-xs text-[#4A7860] uppercase tracking-wider">
            TELESCOPIC FOCUS PROGRESSION
          </div>
          <div className="font-mono text-xs text-[#8C887F]">
            FOUNDATION → ADVANCED AGENTS
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          {portfolioData.currentFocusProgression.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#22221B] border border-[#2A2A22] rounded-lg p-3.5 space-y-1.5 flex flex-col justify-between"
            >
              <div className="font-mono text-[10px] text-[#4A7860]">
                STAGE 0{idx + 1}
              </div>
              <div className="font-display font-medium text-sm sm:text-base text-[#FAF8F5]">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
