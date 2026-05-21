import React from 'react';
import { ActiveTabType } from '../types';
import { AGENCY_CONTACT } from '../data';
import { Mail, Phone, Clock, ArrowUpRight, TrendingUp } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: ActiveTabType) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ onNavigateTab, onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tab: ActiveTabType, anchor?: string) => {
    onNavigateTab(tab);
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-8 relative overflow-hidden font-sans light-grid">
      {/* Decorative vectors */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand block (Col span 5) */}
          <div className="md:col-span-5 space-y-6">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 text-left group"
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-cyber-green to-cyber-cyan rounded-xl flex items-center justify-center font-display font-black text-white text-lg shadow-sm">
                P
              </div>
              <div>
                <span className="font-display font-black text-slate-800 text-xl block leading-none">
                  Pixelgrowm
                </span>
                <span className="text-[9px] text-slate-400 font-bold font-mono tracking-widest uppercase">
                  Startup growth agency
                </span>
              </div>
            </button>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm font-light">
              We build brands that grow online. Creative digital solutions integrating custom websites, targeted Meta & Google Ads Campaigns, and professional social video edits.
            </p>

            {/* Timezone Indicator for Global Startups */}
            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono bg-slate-50 w-fit px-4 py-2 rounded-xl border border-slate-200/50">
              <Clock className="w-4 h-4 text-cyber-green animate-pulse" />
              <span>HQ Zone: <span className="text-slate-800 font-semibold">IST (UTC +5:30)</span></span>
            </div>
          </div>

          {/* Quick Links (Col span 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold text-slate-700 uppercase tracking-widest leading-none">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-500">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-cyber-green transition-transform flex items-center gap-1 group">
                  Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home', '#about')} className="hover:text-cyber-green transition-transform flex items-center gap-1 group">
                  About <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home', '#services')} className="hover:text-cyber-green transition-transform flex items-center gap-1 group">
                  Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home', '#works')} className="hover:text-cyber-green transition-transform flex items-center gap-1 group">
                  Works <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('home', '#contact')} className="hover:text-cyber-green transition-transform flex items-center gap-1 group">
                  Contact <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services links (Col span 2.5) */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="font-display text-xs font-bold text-slate-700 uppercase tracking-widest leading-none">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-500">
              <li>
                <button onClick={() => handleLinkClick('web-dev')} className="hover:text-cyber-green text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('meta-ads')} className="hover:text-cyber-green text-left">
                  Meta Ads
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('google-ads')} className="hover:text-cyber-green text-left">
                  Google Ads
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('video-editing')} className="hover:text-cyber-green text-left">
                  Video Editing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Methods (Col span 2.5) */}
          <div className="md:col-span-2.5 space-y-4">
            <h4 className="font-display text-xs font-bold text-slate-700 uppercase tracking-widest leading-none">
              Direct Channels
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-500">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                <div className="break-all">
                  <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">General Mail</span>
                  <a href={`mailto:${AGENCY_CONTACT.email}`} className="text-slate-700 font-semibold hover:text-cyber-cyan hover:underline">
                    {AGENCY_CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">WhatsApp Line</span>
                  <a href="tel:+919876543210" className="text-slate-700 font-semibold hover:text-cyber-cyan hover:underline">
                    {AGENCY_CONTACT.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator row */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Pixelgrowm Digital. All Rights Reserved.</p>
          <div className="flex items-center gap-2 font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-cyber-green" />
            <span>Built for High Conversion Startups.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
