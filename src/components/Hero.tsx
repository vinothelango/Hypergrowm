import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Video, Target, Landmark, Laptop, CheckCircle, TrendingUp } from 'lucide-react';
import { ActiveTabType } from '../types';
import { HERO_SECTION } from '../data';

interface HeroProps {
  onOpenWizard: () => void;
  onNavigateTab: (tab: ActiveTabType) => void;
}

export default function Hero({ onOpenWizard, onNavigateTab }: HeroProps) {
  const quickMetrics = [
    { label: "Completion Speed", value: "Sub-Second UX", icon: Laptop },
    { label: "Meta Campaign ROI", value: "4.8x Active ROAS", icon: Target },
    { label: "Search High Intent", value: "Buying Traffic First", icon: Landmark },
    { label: "Content Engagement", value: "3s Hook Focus", icon: Video }
  ];

  return (
    <section id="home" className="relative bg-white pt-32 pb-24 md:py-40 overflow-hidden light-grid font-sans">
      {/* Absolute Decorative Glow Spots (Soft warm orange glowing background vibes) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyber-green/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyber-mint/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Texts block (Col Span 7) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Animated floating agency badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50/80 border border-amber-200/50 py-1.5 px-3.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyber-green animate-spin" />
            <span className="font-mono text-[10px] md:text-xs text-cyber-cyan tracking-wider font-extrabold uppercase">
              INDIA&apos;S PREMIER STARTUP GROWTH ENGINE
            </span>
          </div>

          {/* Heading with elegant typography */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
            We Build Brands <br />
            That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-mint to-cyber-cyan">Grow Online</span>
          </h1>

          {/* Hero Subheading copy */}
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl font-light">
            {HERO_SECTION.subHeading}
          </p>

          {/* Short description copy */}
          <p className="font-sans text-xs md:text-sm text-slate-500 leading-normal max-w-xl border-l-2 border-cyber-green/30 pl-4">
            {HERO_SECTION.shortDescription}
          </p>

          {/* Core CTA actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={onOpenWizard}
              className="px-8 py-3.5 bg-gradient-to-r from-cyber-green to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-green text-white font-bold text-xs font-display rounded-full shadow-lg shadow-cyber-green/25 hover:shadow-cyber-cyan/30 hover:scale-[1.02] transition-all duration-305 flex items-center justify-center gap-2"
            >
              {HERO_SECTION.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenWizard}
              className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs font-display rounded-full transition-all border border-slate-200 hover:border-slate-300 flex items-center justify-center gap-2 shadow-sm"
            >
              {HERO_SECTION.ctaSecondary}
            </button>
          </div>

          {/* Startup proof list */}
          <div className="pt-6 grid grid-cols-2 gap-y-2.5 gap-x-4 max-w-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle className="w-4 h-4 text-cyber-green" /> Startup Friendly Operations
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle className="w-4 h-4 text-cyber-green" /> Sub-Second Speeds
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle className="w-4 h-4 text-cyber-green" /> 100% Custom Layouts
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle className="w-4 h-4 text-cyber-green" /> Dedicated Support Matrix
            </div>
          </div>
        </div>

        {/* Interactive metrics cards stack (Col Span 5) */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          
          {/* Neon back glow circles */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyber-green to-cyber-mint rounded-3xl blur-2xl opacity-10 animate-pulse" />
          
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest block">PIXELGROWM CORE METRICS</span>
                <span className="font-display text-sm font-bold text-slate-800">Interactive Sprints Checklist</span>
              </div>
              <TrendingUp className="w-5 h-5 text-cyber-green animate-bounce" />
            </div>

            {/* Render 4 core metrics linked to service tabs */}
            <div className="grid grid-cols-1 gap-3">
              {quickMetrics.map((item, idx) => {
                const Icon = item.icon;
                const pathArray: ActiveTabType[] = ['web-dev', 'meta-ads', 'google-ads', 'video-editing'];
                const targetPath = pathArray[idx] || 'home';
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onNavigateTab(targetPath);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-3.5 bg-slate-50/50 hover:bg-amber-50/45 rounded-2xl border border-slate-200/50 hover:border-cyber-green/40 group transition-all duration-200 flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white rounded-xl text-cyber-green border border-slate-100 group-hover:bg-cyber-green group-hover:text-white transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400 font-bold font-mono uppercase">{item.label}</span>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-cyber-green transition-colors">{item.value}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-cyber-green transition-all flex items-center gap-0.5">
                      EXPLORE <ArrowRight className="w-3 h-3 block" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
