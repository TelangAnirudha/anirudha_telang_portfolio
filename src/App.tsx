import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { About } from './components/About';
import { BlogSection } from './components/BlogSection';
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

/*
 * ============================================================
 * GLOBAL HERO BACKGROUND IMAGES
 *
 * Add ANY number of images to:
 *
 * src/assets/images/hero/
 *
 * Supported formats:
 * jpg
 * jpeg
 * png
 * webp
 * ============================================================
 */

const heroImageModules = import.meta.glob(
  './assets/images/hero/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

const heroImages = Object.entries(heroImageModules)
  .filter(([path]) =>
    /\.(jpg|jpeg|png|webp)$/i.test(path)
  )
  .map(([, url]) => url);

export default function App() {
  const [selectedProject, setSelectedProject] =
    useState<CaseStudy | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] =
    useState(false);

  const [currentSection, setCurrentSection] =
    useState('01');

  /*
   * ============================================================
   * GLOBAL BACKGROUND SLIDESHOW STATE
   * ============================================================
   */

  const [activeBackgroundImage, setActiveBackgroundImage] =
    useState(0);

  /*
   * ============================================================
   * AUTOMATIC BACKGROUND SLIDESHOW
   *
   * Same behavior as before:
   * - 3 seconds per image
   * - supports any number of images
   * ============================================================
   */

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveBackgroundImage(
        (current) =>
          (current + 1) % heroImages.length
      );
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * ============================================================
   * CASE STUDY DRAWER
   * ============================================================
   */

  const handleOpenCaseStudy = (
    project: CaseStudy
  ) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsDrawerOpen(false);

    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  /*
   * ============================================================
   * LET'S TALK
   * ============================================================
   */

  const handleTalkClick = () => {
    const contactElement =
      document.getElementById('contact');

    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  /*
   * ============================================================
   * EXPLORE SELECTED WORK
   * ============================================================
   */

  const handleExploreClick = () => {
    const workElement =
      document.getElementById('work');

    if (workElement) {
      workElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  /*
   * ============================================================
   * ACTIVE SECTION OBSERVER
   * ============================================================
   */

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
      const scrollPosition =
        window.scrollY + 250;

      for (const section of sections) {
        const el =
          document.getElementById(section.id);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setCurrentSection(
              section.code
            );

            break;
          }
        }
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-[#14140F]
        text-[#FAF8F5]
        selection:bg-[#4A7860]/40
        selection:text-[#FAF8F5]
        relative
        overflow-x-hidden
        font-sans
      "
    >

      {/* ========================================================
          GLOBAL FIXED BACKGROUND SLIDESHOW

          This is intentionally OUTSIDE Hero.

          The image is fixed to the viewport while all
          portfolio content scrolls normally above it.
      ======================================================== */}

      {heroImages.length > 0 && (
        <div
          className="
            fixed
            inset-0
            z-0
            pointer-events-none
            overflow-hidden
          "
        >

          <AnimatePresence
            mode="sync"
            initial={false}
          >

            <motion.img
              key={
                heroImages[
                  activeBackgroundImage
                ]
              }
              src={
                heroImages[
                  activeBackgroundImage
                ]
              }
              alt=""
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 0.34,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.01,
              }}
              transition={{
                duration: 1.1,
                ease: 'easeInOut',
              }}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
                filter
                contrast-110
                brightness-90
              "
            />

          </AnimatePresence>


          {/* Dark overall overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[#14140F]/45
            "
          />


          {/* Stronger bottom fade */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[45%]
              bg-gradient-to-t
              from-[#14140F]
              via-[#14140F]/65
              to-transparent
            "
          />


          {/* Subtle side fade */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#14140F]/55
              via-transparent
              to-[#14140F]/35
            "
          />

        </div>
      )}


      {/* ========================================================
          MARGIN RULER
      ======================================================== */}

      <MarginRuler
        currentSection={currentSection}
      />


      {/* ========================================================
          NAVIGATION
      ======================================================== */}

      <Navigation
        onTalkClick={handleTalkClick}
      />


      {/* ========================================================
          MAIN CONTENT
          z-10 keeps all portfolio content above the fixed image.
      ======================================================== */}

      <main className="relative z-10">

        {/* Section 01: Hero */}

        <Hero
          onExploreClick={
            handleExploreClick
          }
          onCollaborateClick={
            handleTalkClick
          }
          activeImage={
            activeBackgroundImage
          }
          onImageSelect={
            setActiveBackgroundImage
          }
          imageCount={
            heroImages.length
          }
        />


        {/* Section 02: Selected Work */}

        <SelectedWork
          onSelectProject={
            handleOpenCaseStudy
          }
        />


        {/* Section 03: Product Vision & Focus */}

        <ProductFocus />


        {/* Section 04: Technical Stack */}

        <SkillsSection />


        {/* Section 05: Insights & Writing */}

        <BlogSection />


        {/* Section 06: About & Leadership */}

        <About />


        {/* Section 07: Contact */}

        <Contact />

      </main>


      {/* ========================================================
          FOOTER
      ======================================================== */}

      <Footer />


      {/* ========================================================
          CASE STUDY DRAWER
      ======================================================== */}

      <CaseStudyDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseCaseStudy}
      />

    </div>
  );
}