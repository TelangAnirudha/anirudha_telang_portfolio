import React from 'react';

interface MarginRulerProps {
  currentSection?: string;
  activeProject?: string | null;
}

export const MarginRuler: React.FC<MarginRulerProps> = ({ currentSection = '01' }) => {
  const rulerTicks = [
    { label: '01', title: 'HERO' },
    { label: '02', title: 'WORK' },
    { label: '03', title: 'FOCUS' },
    { label: '04', title: 'STACK' },
    { label: '05', title: 'ABOUT' },
    { label: '06', title: 'CONTACT' },
  ];

  return (
    <aside 
      aria-hidden="true"
      className="hidden xl:flex fixed left-6 top-0 bottom-0 z-20 flex-col justify-between py-12 pointer-events-none select-none text-[#8C887F]/40"
    >
      {/* Top Header */}
      <div className="font-mono text-[10px] tracking-widest uppercase rotate-180 [writing-mode:vertical-rl]">
        INDEX SYSTEM · ED. 2026
      </div>

      {/* Center Ticks */}
      <div className="flex flex-col gap-8 my-auto font-mono text-[10px]">
        {rulerTicks.map((tick) => {
          const isActive = currentSection === tick.label;
          return (
            <div key={tick.label} className="flex items-center gap-3">
              <span className={`w-3 h-px transition-colors duration-300 ${isActive ? 'bg-[#4A7860] w-6' : 'bg-[#2A2A22]'}`} />
              <span className={`transition-colors duration-300 ${isActive ? 'text-[#FAF8F5] font-medium' : 'text-[#8C887F]/60'}`}>
                {tick.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Coordinate */}
      <div className="font-mono text-[10px] tracking-widest text-[#8C887F]/50">
        18.5204° N · 73.8567° E
      </div>
    </aside>
  );
};
