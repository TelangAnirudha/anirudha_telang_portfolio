import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section 
      id="contact"
      aria-label="Contact"
      className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 border-t border-[#2A2A22]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2A2A22] pb-6 gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-[#4A7860] flex items-center gap-2">
            <span>INDEX // 04</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7860]" />
            <span className="text-[#8C887F]">DIRECT INQUIRIES</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] tracking-tight">
            Initiate Conversation
          </h2>
        </div>
        <div className="font-mono text-xs text-[#8C887F]">
          {portfolioData.availability.status}
        </div>
      </div>

      {/* Main Contact Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Email Direct Action Card (7 cols) */}
        <div className="lg:col-span-7 bg-[#191913] border border-[#2A2A22] rounded-xl p-6 sm:p-10 flex flex-col justify-between space-y-8">
          
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#8C887F] uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#4A7860]" />
              <span>PRIMARY CHANNEL</span>
            </div>

            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#FAF8F5]">
              {portfolioData.contact.email}
            </h3>

            <p className="font-sans text-sm text-[#8C887F] font-light leading-relaxed max-w-lg">
              Reach out for executive product advisory, AI strategy engagements, or speaking opportunities. Direct inbox monitored daily.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Click to Copy */}
            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 bg-[#FAF8F5] text-[#14140F] font-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full hover:bg-[#FAF8F5]/90 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#4A7860]" />
                  <span className="font-mono text-xs">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#14140F]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>

            {/* Direct Mailto */}
            <a
              id="mailto-link"
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14140F] border border-[#2A2A22] text-xs sm:text-sm font-mono text-[#FAF8F5] hover:border-[#4A7860] transition-colors"
            >
              <span>Open Mail Client</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4A7860]" />
            </a>
          </div>

        </div>

        {/* Channels & Location (5 cols) */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          {/* LinkedIn Link */}
          <a
            id="contact-linkedin-link"
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#191913] border border-[#2A2A22] rounded-xl p-5 flex items-center justify-between hover:border-[#4A7860] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#14140F] border border-[#2A2A22] flex items-center justify-center text-[#8C887F] group-hover:text-[#FAF8F5] transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#FAF8F5] group-hover:text-[#4A7860] transition-colors">
                  LinkedIn Profile
                </div>
                <div className="font-mono text-[11px] text-[#8C887F]">
                  /in/anirudhatelang
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#8C887F] group-hover:text-[#4A7860] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* GitHub Link */}
          <a
            id="contact-github-link"
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#191913] border border-[#2A2A22] rounded-xl p-5 flex items-center justify-between hover:border-[#4A7860] transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#14140F] border border-[#2A2A22] flex items-center justify-center text-[#8C887F] group-hover:text-[#FAF8F5] transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#FAF8F5] group-hover:text-[#4A7860] transition-colors">
                  GitHub Profile
                </div>
                <div className="font-mono text-[11px] text-[#8C887F]">
                  /anirudhatelang
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#8C887F] group-hover:text-[#4A7860] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Location & Direct Phone Note */}
          <div className="bg-[#191913] border border-[#2A2A22] rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#8C887F]">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4A7860]" />
                <span>LOCATION</span>
              </span>
              <span className="text-[#FAF8F5]">{portfolioData.contact.location}</span>
            </div>
            <div className="flex items-center justify-between font-mono text-xs text-[#8C887F] border-t border-[#2A2A22]/50 pt-2">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4A7860]" />
                <span>TELEPHONE</span>
              </span>
              <span className="text-[#FAF8F5]">{portfolioData.contact.phone}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
