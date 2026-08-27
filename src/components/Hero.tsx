import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onCollaborateClick: () => void;
}

// Add any number of hero images to:
// src/assets/images/hero/
//
// Supported formats:
// jpg, jpeg, png, webp
const heroImageModules = import.meta.glob('../assets/images/hero/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const heroImages = Object.entries(heroImageModules)
  .filter(([path]) => /\.(jpg|jpeg|png|webp)$/i.test(path))
  .map(([, url]) => url);

const slideshowImages = heroImages;

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onCollaborateClick,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  // Automatic hero slideshow
  useEffect(() => {
    if (slideshowImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % slideshowImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* =========================================================
          FULL HERO BACKGROUND IMAGE
          ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          {slideshowImages.length > 0 && (
            <motion.img
              key={slideshowImages[activeImage]}
              src={slideshowImages[activeImage]}
              alt="Anirudha Telang"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 0.34, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{
                duration: 1.1,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-110 brightness-90"
            />
          )}
        </AnimatePresence>

        {/* Dark overall overlay */}
        <div className="absolute inset-0 bg-[#14140F]/45" />

        {/* Stronger bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#14140F] via-[#14140F]/65 to-transparent" />

        {/* Subtle side fade to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14140F]/55 via-transparent to-[#14140F]/35" />
      </div>

      {/* =========================================================
          MAIN HERO CONTENT
          ========================================================= */}
      <div className="relative my-auto py-4 sm:py-8 z-10">

        {/* Giant Name */}
        <div className="text-center sm:text-left select-none relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-x-6 gap-y-1 w-full"
          >
            <span className="font-display font-extrabold tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[132px] leading-[0.88] text-stroke-outline uppercase">
              {portfolioData.name.first}
            </span>

            <span className="font-display font-black tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[132px] leading-[0.88] text-[#FAF8F5] uppercase">
              {portfolioData.name.last}
            </span>
          </motion.div>
        </div>

        {/* =========================================================
            LOWER HERO CONTENT
            ========================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-6 sm:mt-8 z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="lg:col-span-4 space-y-5 z-20 order-2 lg:order-1 pt-4 lg:pt-0"
          >
            <div className="space-y-2.5">

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A7860] animate-pulse" />

                <span className="font-mono text-xs text-[#4A7860] tracking-wider uppercase font-medium">
                  {portfolioData.availability.status}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF8F5] tracking-tight">
                {portfolioData.role}
              </h2>

              <div className="font-mono text-xs sm:text-sm text-[#8C887F]">
                {portfolioData.subtitle}
              </div>

              <p className="font-sans text-sm sm:text-base text-[#D8D4CA] font-light leading-relaxed max-w-md pt-1">
                {portfolioData.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                id="hero-collaborate-cta"
                onClick={onCollaborateClick}
                className="inline-flex items-center gap-2.5 bg-[#FAF8F5] text-[#14140F] font-sans font-medium text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-[#FAF8F5]/90 transition-all cursor-pointer shadow-lg"
              >
                <span>Let's collaborate</span>

                <ArrowUpRight className="w-4 h-4 text-[#14140F]" />
              </button>
            </div>
          </motion.div>

          {/* CENTER SPACE */}
          <div className="lg:col-span-5 hidden lg:block pointer-events-none lg:order-2" />

          {/* RIGHT SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap gap-2.5 justify-start lg:justify-end items-stretch z-20 order-3 lg:order-3"
          >

            <a
              id="hero-social-linkedin"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#191913]/75 backdrop-blur-md border border-[#2A2A22] hover:border-[#4A7860] hover:bg-[#22221B] text-xs font-sans text-[#FAF8F5] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#4A7860] transition-colors" />

                <span>LinkedIn</span>
              </div>

              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#FAF8F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              id="hero-social-github"
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#191913]/75 backdrop-blur-md border border-[#2A2A22] hover:border-[#4A7860] hover:bg-[#22221B] text-xs font-sans text-[#FAF8F5] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#4A7860] transition-colors" />

                <span>GitHub</span>
              </div>

              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#FAF8F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              id="hero-social-email"
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#191913]/75 backdrop-blur-md border border-[#2A2A22] hover:border-[#4A7860] hover:bg-[#22221B] text-xs font-sans text-[#FAF8F5] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#4A7860] transition-colors" />

                <span>Email Direct</span>
              </div>

              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#FAF8F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </motion.div>
        </div>

        {/* =========================================================
            SLIDESHOW INDICATORS
            ========================================================= */}
        {slideshowImages.length > 1 && (
          <div
            className="relative z-20 flex items-center justify-center gap-2 pt-6 sm:pt-8"
            aria-label="Hero image slides"
          >
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
                aria-current={activeImage === index ? 'true' : undefined}
                onClick={() => setActiveImage(index)}
                className={`h-px transition-all duration-300 cursor-pointer ${
                  activeImage === index
                    ? 'w-7 bg-[#4A7860]'
                    : 'w-4 bg-[#8C887F]/50 hover:bg-[#FAF8F5]'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* =========================================================
          HERO BOTTOM BAR
          ========================================================= */}
      {/* <div className="pt-8 flex items-center justify-between font-mono text-xs text-[#8C887F] border-t border-[#2A2A22]/60 z-20 relative">

        <div />

        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          <span>EXPLORE WORK [03]</span>

          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#4A7860]" />
        </button>

      </div> */}
    </section>
  );
};