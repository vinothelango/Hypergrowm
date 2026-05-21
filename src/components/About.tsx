import React from 'react';
import { ABOUT_SECTION } from '../data';
import { CheckCircle2, Award, Zap, Heart, ShieldCheck, HelpCircle } from 'lucide-react';

export default function About() {
  const iconLoader = (idx: number) => {
    const icons = [ShieldCheck, Award, Zap, Heart, CheckCircle2, HelpCircle];
    const Icon = icons[idx] || CheckCircle2;
    return <Icon className="w-5 h-5 text-cyber-green" />;
  };

  return (
    <section id="about" className="py-24 bg-slate-50/75 font-sans border-t border-slate-200/30 relative overflow-hidden">
      {/* Background neon dots */}
      <div className="absolute top-1/2 -right-1/4 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Title splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/20 bg-amber-50 px-3 py-1 rounded-full inline-block">
              Establishing Core Presence
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {ABOUT_SECTION.title}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed font-light">
              {ABOUT_SECTION.description1}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-cyber-green pl-4">
              {ABOUT_SECTION.description2}
            </p>
          </div>
        </div>

        {/* Why Choose Us grids */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-display text-xs font-bold text-cyber-green uppercase tracking-wider">
              Why Choose Pixelgrowm?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_SECTION.whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white rounded-2xl border border-slate-200/60 hover:border-cyber-green/40 shadow-[0_10px_25px_rgba(148,163,184,0.05)] hover:shadow-[0_15px_30px_rgba(148,163,184,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex gap-4"
              >
                <div className="w-10 h-10 bg-amber-50 rounded-xl border border-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {iconLoader(idx)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-sm text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
