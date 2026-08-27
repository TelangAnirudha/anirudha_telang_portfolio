import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sliders, X } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyDrawerProps {
  project: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({ project, isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Keyboard dismiss (Esc) listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div 
          id="case-study-drawer-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="fixed inset-0 z-50 flex justify-end"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#14140F]/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Full-bleed Editorial Slide-in Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#14140F] border-l border-[#2A2A22] h-full overflow-y-auto z-10 flex flex-col shadow-2xl"
          >
            {/* Sticky Header Bar */}
            <div className="sticky top-0 bg-[#14140F]/95 backdrop-blur-md border-b border-[#2A2A22] px-6 sm:px-10 py-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#4A7860] font-semibold">{project.index}</span>
                <span className="text-[#2A2A22]">/</span>
                <span className="font-mono text-xs text-[#8C887F] tracking-wide uppercase">CASE STUDY ARCHITECTURE</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline font-mono text-[11px] text-[#8C887F]">ESC TO CLOSE</span>
                <button
                  id="close-drawer-btn"
                  onClick={onClose}
                  aria-label="Close Case Study"
                  className="w-8 h-8 rounded-full bg-[#1B1B15] border border-[#2A2A22] flex items-center justify-center text-[#8C887F] hover:text-[#FAF8F5] hover:border-[#4A7860] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Drawer Body Content */}
            <div className="px-6 sm:px-10 py-8 sm:py-12 space-y-12 flex-1">
              
              {/* Meta & Title Block */}
              <div className="space-y-4 border-b border-[#2A2A22] pb-8">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#8C887F]">
                  <span className="text-[#FAF8F5] font-medium">{project.organization}</span>
                  <span>·</span>
                  <span>{project.period}</span>
                  <span>·</span>
                  <span className="text-[#4A7860]">{project.role}</span>
                </div>

                <h2 id="drawer-title" className="font-display font-semibold text-2xl sm:text-3xl text-[#FAF8F5] leading-tight">
                  {project.title}
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#D8D4CA] font-light leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Quantified Metrics Highlight Bar */}
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider">
                  KEY QUANTIFIED OUTCOMES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#191913] border border-[#2A2A22] rounded-lg p-4 space-y-1"
                    >
                      <div className="font-display font-semibold text-2xl sm:text-3xl text-[#FAF8F5]">
                        {metric.value}
                      </div>
                      <div className="font-mono text-xs text-[#4A7860] font-medium">
                        {metric.label}
                      </div>
                      {metric.subtext && (
                        <div className="font-sans text-xs text-[#8C887F] pt-0.5">
                          {metric.subtext}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Narrative Flow: Problem & Solution in Detail */}
              <div className="space-y-6">
                <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
                  <span>EXECUTIVE PROBLEM & STRATEGIC APPROACH</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#191913] border border-[#2A2A22] rounded-lg p-5 space-y-2">
                    <h3 className="font-mono text-xs text-[#8C887F] uppercase">The Core Challenge</h3>
                    <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/90 font-light leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="bg-[#191913] border border-[#2A2A22] rounded-lg p-5 space-y-2">
                    <h3 className="font-mono text-xs text-[#8C887F] uppercase">Engineered Approach</h3>
                    <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/90 font-light leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>
              </div>
              {/* Technology Stack Taxonomy */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider">
                  TECHNOLOGY & DATA STACK
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.stack.map((stackGroup, idx) => (
                    <div key={idx} className="bg-[#191913] border border-[#2A2A22] rounded-lg p-4 space-y-2">
                      <div className="font-mono text-[11px] text-[#8C887F] font-medium">
                        {stackGroup.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {stackGroup.items.map((tech, techIdx) => (
                          <span 
                            key={techIdx}
                            className="font-mono text-xs text-[#FAF8F5] bg-[#14140F] px-2 py-1 rounded border border-[#2A2A22]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 bg-[#14140F]/95 backdrop-blur-md border-t border-[#2A2A22] px-6 sm:px-10 py-4 flex items-center justify-between">
              <span className="font-mono text-xs text-[#8C887F]">
                {project.index} OF 03
              </span>
              <button
                onClick={onClose}
                className="bg-[#FAF8F5] text-[#14140F] font-sans font-medium text-xs sm:text-sm px-5 py-2 rounded-full hover:bg-[#FAF8F5]/90 transition-all cursor-pointer"
              >
                Close Drawer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
