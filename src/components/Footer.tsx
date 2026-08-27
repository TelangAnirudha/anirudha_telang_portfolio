import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-[#2A2A22] py-12 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-[#8C887F]">
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="text-[#FAF8F5] font-display font-medium tracking-tight">
            {portfolioData.name.first} {portfolioData.name.last}
          </span>
          <span className="text-[#2A2A22]">/</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Center */}
        <div className="text-center text-[#8C887F]/80">
          DARK MATTE EDITORIAL SYSTEM · SET IN APTOS & PLUS JAKARTA SANS
        </div>

        {/* Right */}
        <button
          onClick={scrollToTop}
          className="text-[#FAF8F5] hover:text-[#4A7860] transition-colors cursor-pointer"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};
