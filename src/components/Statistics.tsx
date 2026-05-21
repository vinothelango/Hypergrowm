import React, { useState } from 'react';
import { HIGHLIGHTS_SECTION } from '../data';
import { Laptop, Target, Video, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';

export default function Statistics() {
  const [activeTab, setActiveTab] = useState<'highlights' | 'growth'>('highlights');

  const highlightIcons = [
    <Laptop key="0" className="w-5 h-5 text-cyber-cyan" />,
    <Target key="1" className="w-5 h-5 text-cyber-cyan" />,
    <Video key="2" className="w-5 h-5 text-cyber-cyan" />,
    <Sparkles key="3" className="w-5 h-5 text-cyber-cyan" />
  ];

  return (
    <section id="statistics" className="py-24 bg-slate-50/70 border-t border-b border-slate-200/30 relative overflow-hidden font-sans light-grid">
      {/* Glow shapes */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 font-sans">
        
        {/* Top layouts row splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/30 bg-amber-50 px-3 py-1 rounded-full font-bold">
              Agency Highlights
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {HIGHLIGHTS_SECTION.title}
            </h2>
            
            {/* Tab switchers to filter statistics depth */}
            <div className="flex gap-2 pt-4">
              <button
                onClick={() => setActiveTab('highlights')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === 'highlights' ? 'bg-cyber-cyan text-white font-bold shadow-md shadow-orange-500/20' : 'bg-slate-50 text-slate-500 border border-slate-200'
                }`}
              >
                Core Values
              </button>
              <button
                onClick={() => setActiveTab('growth')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === 'growth' ? 'bg-cyber-cyan text-white font-bold shadow-md shadow-orange-500/20' : 'bg-slate-50 text-slate-500 border border-slate-200'
                }`}
              >
                Delivery Models
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              {HIGHLIGHTS_SECTION.description1}
            </p>
            <div className="p-4 bg-white rounded-2xl border border-slate-202/60 text-xs text-slate-500 shadow-sm">
              <span className="font-bold text-slate-800 block mb-0.5">Value Guarantee:</span>
              Professional digital growth, minus superfluous administrative fees or boilerplate code repositories. Structured strictly for early-stage startup validation.
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        {activeTab === 'highlights' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS_SECTION.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-cyber-green/45 shadow-[0_5px_15px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs text-cyber-cyan font-bold block">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-800 leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS_SECTION.models.map((model, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white border border-slate-200 hover:border-cyber-cyan/45 rounded-2xl flex flex-col justify-between space-y-6 shadow-[0_5px_15px_rgba(15,23,42,0.02)] hover:shadow-[0_18px_35px_rgba(8,145,178,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-200/50 flex items-center justify-center mb-4">
                    {highlightIcons[idx] || <TrendingUp className="w-5 h-5 text-cyber-cyan" />}
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-800 leading-tight mb-2">
                    {model.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-105 flex justify-between items-center font-mono text-[10px]">
                  <span className="text-slate-400 font-bold">PROVEN SCALE</span>
                  <span className="text-cyber-green font-black">{model.stat}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
