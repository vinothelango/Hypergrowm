import React from 'react';
import { PROCESS_TIMELINE } from '../data';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-zinc-50 font-sans border-t border-b border-zinc-200/50 relative overflow-hidden light-grid">
      {/* Decorative center accent line glow split */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyber-green/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 font-sans">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/30 bg-amber-50 px-3 py-1 rounded-full font-bold">
            Our Flow
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Working Process
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto font-light leading-relaxed">
            From initial goals calibration up to active launch marketing, we keep execution loops crystal clear, fast, and transparent.
          </p>
        </div>

        {/* Stepper Timeline representation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="absolute top-14 left-10 right-10 h-[2px] bg-gradient-to-r from-cyber-mint/30 via-cyber-cyan/30 to-white hidden md:block z-0" />

          {PROCESS_TIMELINE.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-slate-200/70 p-6 relative z-10 hover:border-cyber-cyan/55 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_25px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)]"
            >
              <div>
                {/* Number circle badge */}
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200/50 flex items-center justify-center font-mono font-black text-cyber-cyan mb-6 text-sm relative z-10 shadow-sm">
                  {step.step}
                </div>

                <h3 className="font-display font-extrabold text-base text-slate-800 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                  {step.description}
                </p>
              </div>

              {/* Connecting indicators on mobile */}
              {idx < 4 && (
                <div className="block md:hidden text-center py-4 text-cyber-cyan text-xs font-bold font-mono">
                  ↓ NEXT STEP
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
