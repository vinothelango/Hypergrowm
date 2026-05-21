import React, { useState } from 'react';
import { FEATURES_LIST } from '../data';
import { 
  Layout, 
  Smartphone, 
  Zap, 
  Target, 
  Sparkles, 
  TrendingUp, 
  SearchCode, 
  MessageSquareHeart 
} from 'lucide-react';

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-cyber-green" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-cyber-green" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyber-green" />;
      case 'Target': return <Target className="w-5 h-5 text-cyber-green" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyber-green" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-cyber-green" />;
      case 'SearchCode': return <SearchCode className="w-5 h-5 text-cyber-green" />;
      case 'MessageSquareHeart': return <MessageSquareHeart className="w-5 h-5 text-cyber-green" />;
      default: return <Zap className="w-5 h-5 text-cyber-green" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-slate-50/35 font-sans border-t border-b border-slate-200/55 relative overflow-hidden">
      <div className="absolute top-1/2 -left-1/4 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/20 bg-amber-50 px-3 py-1 rounded-full inline-block">
            Strategic Advantages
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Makes Pixelgrowm Different?
          </h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            We bypass cookie-cutter models. From SEO checks and speeds to lead targeting and creative layout structures, our work fuels measurable conversions.
          </p>
        </div>

        {/* 8 points grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_LIST.map((feat, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={feat.id}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[190px] ${
                  isHovered 
                    ? 'bg-white border-cyber-green/50 shadow-[0_15px_40px_rgba(16,185,129,0.12)] -translate-y-1.5' 
                    : 'bg-white border-slate-200 shadow-[0_6px_20px_rgba(15,23,42,0.02)]'
                }`}
              >
                {/* Thin top gradient glow */}
                {isHovered && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyber-green to-cyber-mint" />
                )}

                <div>
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center mb-5 shadow-sm">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-800 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                <span className="font-mono text-[9px] text-slate-400 block pt-4 text-right">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
