import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import portraitImg from "../assets/images/profie_picture.jpeg";
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section 
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Main Reference Composition Area */}
      <div className="relative my-auto py-4 sm:py-8 z-10">
        {/* Background Portrait Image (Subtle & behind texts) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 0.40, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[550px] aspect-[4/5] flex items-end justify-center"
          >
            <img 
              src={portraitImg} 
              alt="Anirudha Telang"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-bottom portrait-blend-mask filter contrast-110 brightness-95"
            />
            {/* Bottom linear dark matte gradient fade into website canvas */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#14140F] via-[#14140F]/80 to-transparent pointer-events-none" />
          </motion.div>
        </div>
        
        {/* Giant Edge-to-Edge Two-Tone Display Headline (Background Layer) */}
        <div className="text-center sm:text-left select-none relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-x-6 gap-y-1 w-full"
          >
            {/* First Name: Stroke / Outline Only */}
            <span className="font-display font-extrabold tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[132px] leading-[0.88] text-stroke-outline uppercase">
              {portfolioData.name.first}
            </span>

            {/* Last Name: Solid Off-White Fill */}
            <span className="font-display font-black tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[132px] leading-[0.88] text-[#FAF8F5] uppercase">
              {portfolioData.name.last}
            </span>
          </motion.div>
        </div>

        {/* Center Merged Portrait & Lower Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-4 sm:mt-6 z-10">
          
          {/* Left Column: Role, Statement & Primary CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 bg-[#FAF8F5] text-[#14140F] font-sans font-medium text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-[#FAF8F5]/90 transition-all cursor-pointer shadow-lg"
              >
                <span>Let's collaborate</span>
                <ArrowUpRight className="w-4 h-4 text-[#14140F]" />
              </button>
            </div>
          </motion.div>

          {/* Center Column: Spacer on desktop to leave room for the background image */}
          <div className="lg:col-span-5 hidden lg:block pointer-events-none lg:order-2" />

          {/* Right Column: Social Pills Stack (Reference Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap gap-2.5 justify-start lg:justify-end items-stretch z-20 order-3 lg:order-3"
          >
            <a
              id="hero-social-linkedin"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#191913]/90 backdrop-blur-sm border border-[#2A2A22] hover:border-[#4A7860] hover:bg-[#22221B] text-xs font-sans text-[#FAF8F5] transition-all cursor-pointer group"
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
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#191913]/90 backdrop-blur-sm border border-[#2A2A22] hover:border-[#4A7860] hover:bg-[#22221B] text-xs font-sans text-[#FAF8F5] transition-all cursor-pointer group"
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
              className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-[#191913]/90 backdrop-blur-sm border border-[#2A2A22] hover:border-[#4A7860] hover:bg-[#22221B] text-xs font-sans text-[#FAF8F5] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#4A7860] transition-colors" />
                <span>Email Direct</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8C887F] group-hover:text-[#FAF8F5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>

      {/* Hero Bottom Bar */}
      <div className="pt-8 flex items-center justify-between font-mono text-xs text-[#8C887F] border-t border-[#2A2A22]/60 z-20 relative">
        {/* Spacer to keep EXPLORE WORK button aligned to the right */}
        <div />
        <button
          onClick={onExploreClick}
          className="flex items-center gap-2 hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          <span>EXPLORE WORK [03]</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#4A7860]" />
        </button>
      </div>
    </section>
  );
};
