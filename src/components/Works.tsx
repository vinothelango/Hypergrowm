import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../data';
import { PortfolioItem } from '../types';
import { Sparkles, CheckCircle2, ChevronRight, BarChart3, Target, Laptop, Video, MailOpen } from 'lucide-react';

export default function Works() {
  const [activeTab, setActiveTab] = useState<'Website' | 'Advertising' | 'Video' | 'Content'>('Website');
  const [inspectedItem, setInspectedItem] = useState<PortfolioItem | null>(null);

  const tabs: { id: 'Website' | 'Advertising' | 'Video' | 'Content'; label: string }[] = [
    { id: 'Website', label: 'Website Projects' },
    { id: 'Advertising', label: 'Advertising Campaigns' },
    { id: 'Video', label: 'Video Editing' },
    { id: 'Content', label: 'Content Creation' }
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter(item => item.category === activeTab);

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'Website': return <Laptop className="w-4 h-4" />;
      case 'Advertising': return <Target className="w-4 h-4" />;
      case 'Video': return <Video className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="works" className="py-24 bg-white font-sans border-t border-slate-100 relative overflow-hidden light-grid">
      {/* Absolute vectors */}
      <div className="absolute top-1/4 -right-1/4 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/30 bg-amber-50 px-3 py-1 rounded-full font-bold">
            Case Studies
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Works
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto font-light">
            Review detailed live results and custom-built visual templates designed for conversions.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setInspectedItem(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-display tracking-wide transition-all flex items-center gap-2 border ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyber-green to-cyber-cyan text-white border-transparent shadow shadow-cyber-green/20 font-bold'
                  : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-cyber-green hover:text-slate-900 shadow-sm'
              }`}
            >
              {getTabIcon(tab.id)}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects grid displays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                onClick={() => setInspectedItem(project)}
                className="group p-6 bg-slate-50/20 rounded-3xl border border-slate-200 hover:border-cyber-cyan/55 hover:bg-white transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-[0_4px_25px_rgba(15,23,42,0.01)] hover:shadow-[0_20px_45px_rgba(8,145,178,0.12)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[9px] text-cyber-cyan font-bold uppercase tracking-widest border border-cyber-cyan/30 px-2.5 py-1 rounded bg-amber-50">
                      {project.clientType}
                    </span>
                    <BarChart3 className="w-4 h-4 text-cyber-green animate-pulse" />
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-800 mb-2 group-hover:text-cyber-green transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>

                {/* Quantitative highlight specs */}
                <div className="mt-8 pt-4 border-t border-slate-200/50 flex flex-col gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider block uppercase font-bold">OUTCOME METRIC</span>
                    <span className="font-mono text-xs font-black text-cyber-green">{project.metrics}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider block uppercase font-bold">DELIVERABLES INCLUDED</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.details.slice(0, 2).map((detail, idx) => (
                        <span key={idx} className="text-[9px] bg-white text-slate-600 border border-slate-200/60 px-2 py-0.5 rounded font-medium">
                          {detail}
                        </span>
                      ))}
                      {project.details.length > 2 && <span className="text-[9px] text-slate-400 inline-block font-mono mt-0.5">+{project.details.length - 2} more</span>}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Mockup Modal details drawer */}
        {inspectedItem && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-12 p-6 bg-slate-50 border border-cyber-cyan/30 rounded-3xl relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 py-1.5 px-4 bg-cyber-cyan text-white font-mono text-[9px] uppercase font-bold rounded-bl-xl shadow flex items-center">
              Detailed Case Study Highlight
            </div>
            
            <button 
              onClick={() => setInspectedItem(null)}
              className="absolute top-4 left-4 text-slate-500 hover:text-slate-800 bg-white p-1.5 rounded-full border border-slate-200 transition-all text-xs font-bold"
            >
              ✕ Close Detail View
            </button>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-4 space-y-4">
                <span className="text-[10px] font-mono text-cyber-green uppercase tracking-wider block font-bold">KEY SPEC</span>
                <h4 className="font-display font-extrabold text-lg text-slate-800 leading-tight">
                  {inspectedItem.title}
                </h4>
                <div className="bg-white p-4 rounded-xl border border-slate-200/50 space-y-2">
                  <div>
                    <span className="text-[8px] text-slate-400 font-bold font-mono block">CLIENT DEMOGRAPHIC</span>
                    <span className="text-xs font-semibold text-slate-700">{inspectedItem.clientType}</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-slate-400 font-bold font-mono block">MEASURED OUTCOME</span>
                    <span className="text-xs font-mono font-bold text-cyber-green">{inspectedItem.metrics}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider block font-bold">CLIENT CAPABILITIES METRIC DELIVERY</span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Every asset, visual, or budget line was engineered specifically for this startup. Here is the custom design scope delivered by our agency:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {inspectedItem.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-slate-250/30">
                      <div className="w-5 h-5 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green rounded-full flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </div>
                      <span className="text-xs text-slate-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
