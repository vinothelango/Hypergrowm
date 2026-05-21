import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, Laptop, Video, Target, Landmark } from 'lucide-react';
import { ActiveTabType } from '../types';

interface NavbarProps {
  activeTab: ActiveTabType;
  onNavigateTab: (tab: ActiveTabType) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ activeTab, onNavigateTab, onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', tab: 'home' as ActiveTabType, anchor: '#home' },
    { label: 'Web Dev', tab: 'web-dev' as ActiveTabType, anchor: '#web-dev' },
    { label: 'Meta Ads', tab: 'meta-ads' as ActiveTabType, anchor: '#meta-ads' },
    { label: 'Google Ads', tab: 'google-ads' as ActiveTabType, anchor: '#google-ads' },
    { label: 'Video Edit', tab: 'video-editing' as ActiveTabType, anchor: '#video-editing' }
  ];

  const handleLinkClick = (tab: ActiveTabType, anchor: string) => {
    onNavigateTab(tab);
    setIsOpen(false);
    
    // Smooth scroll if heading to home anchor
    if (tab === 'home') {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:py-4 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Branding Logo */}
        <button 
          onClick={() => handleLinkClick('home', '#home')}
          className="flex items-center gap-2 text-left group animate-fade-in"
        >
          <div className="w-9 h-9 bg-gradient-to-tr from-cyber-green via-cyber-mint to-cyber-cyan rounded-xl flex items-center justify-center shadow-md shadow-orange-500/10 group-hover:rotate-6 transition-all duration-300">
            <span className="font-display font-extrabold text-white text-base leading-none">P</span>
          </div>
          <div>
            <span className="font-display font-bold text-slate-800 tracking-tight text-lg group-hover:text-cyber-green transition-colors">
              Pixelgrowm
            </span>
            <span className="block text-[8px] text-slate-400 font-bold font-mono tracking-wider -mt-1 leading-none uppercase">
              GROWTH AGENCY
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/50">
          {navLinks.map((link) => (
            <button
              key={link.tab}
              onClick={() => handleLinkClick(link.tab, link.anchor)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === link.tab
                  ? 'bg-white text-cyber-green font-bold shadow-sm'
                  : 'text-slate-500 hover:text-cyber-green'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigateTab('home');
              setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-500 hover:text-cyber-green transition-all"
          >
            About
          </a>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              onNavigateTab('home');
              setTimeout(() => {
                document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-500 hover:text-cyber-green transition-all"
          >
            Works
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-green text-white text-xs font-bold font-display rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-md shadow-orange-500/10 hover:scale-[1.02]"
          >
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-500 hover:text-slate-800 bg-slate-50 border border-slate-200 p-2 rounded-full transition-all"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full bg-white border-b border-slate-200/80 p-6 space-y-6 block md:hidden shadow-2xl relative z-40"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest pl-3">Navigations</span>
              {navLinks.map((link) => (
                <button
                  key={link.tab}
                  onClick={() => handleLinkClick(link.tab, link.anchor)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                    activeTab === link.tab
                      ? 'bg-amber-55/40 border-l-4 border-cyber-green text-cyber-green font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pl-3">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home', '#about');
                }}
                className="text-xs font-semibold text-slate-500 hover:text-cyber-green block py-1"
              >
                ✦ About Agency
              </a>
              <a
                href="#works"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home', '#works');
                }}
                className="text-xs font-semibold text-slate-500 hover:text-cyber-green block py-1"
              >
                ✦ Case Studies
              </a>
              <a
                href="#roi-calculator"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onNavigateTab('home');
                  setTimeout(() => {
                    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-xs font-semibold text-slate-500 hover:text-cyber-green block py-1"
              >
                ✦ ROI Calculator
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home', '#testimonials');
                }}
                className="text-xs font-semibold text-slate-500 hover:text-cyber-green block py-1"
              >
                ✦ Client Reviews
              </a>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-gradient-to-r from-cyber-green to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-green text-white font-bold font-display rounded-full text-center shadow-lg shadow-orange-500/15 transition-all flex items-center justify-center gap-1"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Inline mini icon helper
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
