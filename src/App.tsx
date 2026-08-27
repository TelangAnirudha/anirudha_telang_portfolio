import React, { useEffect, useState } from 'react';
import { About } from './components/About';
import { CaseStudyDrawer } from './components/CaseStudyDrawer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MarginRuler } from './components/MarginRuler';
import { Navigation } from './components/Navigation';
import { ProductFocus } from './components/ProductFocus';
import { SelectedWork } from './components/SelectedWork';
import { SkillsSection } from './components/SkillsSection';
import { CaseStudy } from './types';
import { BlogSection } from './components/BlogSection';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('01');

  // Handle Opening and Closing of Case Study Drawer
  const handleOpenCaseStudy = (project: CaseStudy) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  // Smooth scroll handler for "Let's Talk" CTA
  const handleTalkClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll handler for "Explore Selected Work"
  const handleExploreClick = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section observer for Margin Ruler
  useEffect(() => {
    const sections = [
  { id: 'hero', code: '01' },
  { id: 'work', code: '02' },
  { id: 'focus', code: '03' },
  { id: 'skills', code: '04' },
  { id: 'insights', code: '05' },
    { id: 'about', code: '06' },
  { id: 'contact', code: '07' },
];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(section.code);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#14140F] text-[#FAF8F5] selection:bg-[#4A7860]/40 selection:text-[#FAF8F5] relative overflow-x-hidden font-sans">
      
      {/* Margin Ruler (Visible index system running along grid) */}
      <MarginRuler currentSection={currentSection} />

      {/* Floating Pill Navigation */}
      <Navigation onTalkClick={handleTalkClick} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 01: Hero */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Section 02: Selected Work */}
        <SelectedWork onSelectProject={handleOpenCaseStudy} />

        {/* Section 03: What I'm Building & Focus */}
        <ProductFocus />

        {/* Section 04: Technical Stack & Capabilities */}
        <SkillsSection />

       {/* Section 04: Insights & Writing */}
        <BlogSection /> 

        {/* Section 05: About & Leadership */}
        <About />

        {/* Section 06: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Signature Interaction: Full-Bleed Case Study Drawer */}
      <CaseStudyDrawer 
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseCaseStudy}
      />

    </div>
  );
}

