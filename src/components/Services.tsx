import React from 'react';
import { motion } from 'motion/react';
import { CORE_SERVICES } from '../data';
import { ActiveTabType } from '../types';
import { ChevronRight, ArrowRight, Laptop, Target, Landmark, Video } from 'lucide-react';

interface ServicesProps {
  onNavigateTab: (tab: ActiveTabType) => void;
}

export default function Services({ onNavigateTab }: ServicesProps) {

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Laptop className="w-6 h-6 text-cyber-green" />;
      case 'Facebook': return <Target className="w-6 h-6 text-cyber-green" />;
      case 'Search': return <Landmark className="w-6 h-6 text-cyber-green" />;
      case 'Video': return <Video className="w-6 h-6 text-cyber-green" />;
      default: return null;
    }
  };

  return (
    <section id="services" className="py-24 bg-white font-sans border-t border-slate-100 relative overflow-hidden light-grid">
      {/* Visual background lights */}
      <div className="absolute top-1/4 -left-1/4 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-cyber-cyan tracking-widest uppercase border border-cyber-cyan/30 bg-amber-50 px-3 py-1 rounded-full font-bold">
            Our Offerings
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Core Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto font-light">
            Providing modern, scalable digital growth models designed to acquire more customers and scale startup brand visibility.
          </p>
        </div>

        {/* Services mapping grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((val) => (
            <div
              key={val.id}
              className="group p-8 bg-white rounded-3xl border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)] hover:-translate-y-1 hover:border-cyber-green/50 transition-all duration-350 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200/60 group-hover:border-cyber-green/40 group-hover:shadow-md rounded-2xl flex items-center justify-center transition-all">
                    {getServiceIcon(val.iconName)}
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-widest bg-white px-2.5 py-1 rounded-full border border-slate-200/60">
                    STARTUP LEVEL ACTIVE
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-cyber-green transition-colors">
                  {val.title}
                </h3>
                
                <span className="block text-xs text-cyber-cyan font-semibold font-mono mb-4">
                  ✦ {val.tagline}
                </span>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-light">
                  {val.description}
                </p>
              </div>

              {/* Navigate and launch page triggers */}
              <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    onNavigateTab(val.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-display text-xs font-bold text-slate-800 hover:text-cyber-cyan transition-colors flex items-center gap-1.5"
                >
                  Configure Channels & View Proof <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-[10px] text-slate-400 font-mono">
                  Sprints Focused
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
