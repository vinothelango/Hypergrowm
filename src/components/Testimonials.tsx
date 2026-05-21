import React from 'react';
import { TESTIMONIALS_LIST } from '../data';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white font-sans border-t border-slate-100 relative overflow-hidden light-grid">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 -right-1/4 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/30 bg-amber-50 px-3 py-1 rounded-full font-bold">
            Social Proof
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Clients Say
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto font-light">
            Discover how founders and local brands use Pixelgrowm to establish authoritative websites and scale campaign ROAS.
          </p>
        </div>

        {/* Testimonials Grid layouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_LIST.map((val, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.03)] hover:border-cyber-green/45 hover:shadow-[0_20px_45px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cyber-green/10 pointer-events-none" />

              <div className="space-y-6">
                {/* 5 Stars rated checklist */}
                <div className="flex gap-1">
                  {[...Array(val.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-3.5 h-3.5 text-cyber-green fill-current animate-pulse" />
                  ))}
                </div>

                <p className="text-sm italic text-slate-700 font-sans leading-relaxed font-light">
                  &ldquo;{val.quote}&rdquo;
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold font-display text-cyber-cyan text-xs">
                  {val.company.slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs text-slate-800 leading-none">
                    {val.author}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold font-mono tracking-wide mt-1 block">
                    {val.role}, {val.company}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
