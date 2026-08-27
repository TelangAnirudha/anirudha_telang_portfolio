import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface NavigationProps {
  onTalkClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onTalkClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
      <nav 
        id="main-navigation"
        aria-label="Main Navigation"
        className="max-w-5xl mx-auto pointer-events-auto bg-[#14140F]/95 backdrop-blur-md border border-[#2A2A22] rounded-full px-3 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300"
      >
        {/* Left: Spacer to keep Let's Talk button aligned to the right on mobile */}
        <div />

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-5 font-mono text-xs text-[#FAF8F5]/80">
          <button
            id="nav-work"
            onClick={() => scrollToSection('work')}
            className="hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer"
          >
            Work <span className="text-[#4A7860] font-medium">[03]</span>
          </button>
          <button
            id="nav-focus"
            onClick={() => scrollToSection('focus')}
            className="hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer"
          >
            Vision
          </button>
          <button
            id="nav-skills"
            onClick={() => scrollToSection('skills')}
            className="hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer"
          >
            Stack
          </button>
          <button
            id="nav-about"
            onClick={() => scrollToSection('about')}
            className="hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer"
          >
            About
          </button>
          <button
            id="nav-contact"
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Right: Solid off-white CTA */}
        <button
          id="nav-talk-cta"
          onClick={onTalkClick}
          className="bg-[#FAF8F5] text-[#14140F] font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-1.5 rounded-full hover:bg-[#FAF8F5]/90 transition-all cursor-pointer whitespace-nowrap tracking-tight"
        >
          Let's Talk
        </button>
      </nav>
    </header>
  );
};
