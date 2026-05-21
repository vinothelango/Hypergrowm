import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Briefcase,
  Target,
  Smartphone,
  Layout,
  Zap,
  ShieldCheck,
  Users,
  Eye,
  Instagram,
  RefreshCw,
  Palette,
  Search,
  Image,
  BarChart3,
  Tv,
  Clapperboard,
  DollarSign,
  Compass,
  Play,
  Pause,
  Layers,
  Flame,
  Volume2
} from 'lucide-react';
import { SERVICE_PAGES_DATA } from '../data';
import { ActiveTabType } from '../types';
import LucideIcon from './LucideIcon';

interface ServicePageProps {
  serviceId: Exclude<ActiveTabType, 'home'>;
  onBackToHome: () => void;
  onNavigate: (tab: ActiveTabType) => void;
  onOpenConsultation: () => void;
}

export default function ServicePage({ serviceId, onBackToHome, onNavigate, onOpenConsultation }: ServicePageProps) {
  const data = SERVICE_PAGES_DATA[serviceId];
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [googleQuery, setGoogleQuery] = useState("best growth agency near me");
  const [activeOfferIdx, setActiveOfferIdx] = useState<number | null>(0);

  if (!data) return null;

  // Render a simulated interactive showcase based on service type
  const renderInteractiveShowcase = () => {
    switch (serviceId) {
      case 'web-dev':
        return (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
            {/* Window chrome */}
            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-400 rounded-full inline-block" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block" />
                <span className="w-3 h-3 bg-green-400 rounded-full inline-block" />
              </div>
              <div className="bg-slate-100 px-3 py-1 rounded text-[10px] text-slate-500 font-mono flex items-center gap-1.5 max-w-xs truncate">
                <span className="text-cyber-green text-xs">🔐</span> https://pixelgrowm.com/preview
              </div>
              <div className="text-[10px] text-slate-400 font-mono font-semibold">React v19</div>
            </div>

            {/* Code Body */}
            <div className="p-4 md:p-6 font-mono text-[11px] md:text-xs leading-relaxed text-slate-600 space-y-4 max-h-[300px] overflow-y-auto bg-slate-50">
              <div>
                <span className="text-indigo-600 font-bold">import</span> React <span className="text-indigo-600 font-bold">from</span> <span className="text-amber-600">&apos;react&apos;</span>;
                <br />
                <span className="text-indigo-600 font-bold">import</span> &#123; motion &#125; <span className="text-indigo-600 font-bold">from</span> <span className="text-amber-600">&apos;motion/react&apos;</span>;
              </div>

              <div>
                <span className="text-blue-600 font-bold">export default function</span> <span className="text-orange-600 font-bold">StartupHero</span>() &#123;
                <div className="pl-4">
                  <span className="text-indigo-600 font-bold">return</span> (
                  <div className="pl-4">
                    <span className="text-slate-400">&lt;</span><span className="text-cyan-600 font-bold">section</span> <span className="text-pink-600">className</span><span className="text-slate-400">=</span><span className="text-amber-600">&quot;relative flex justify-center py-20 bg-white&quot;</span><span className="text-slate-400">&gt;</span>
                    <div className="pl-4">
                      <span className="text-slate-400">&lt;</span><span className="text-cyan-600 font-bold">h1</span> <span className="text-pink-600">className</span><span className="text-slate-400">=</span><span className="text-amber-600">&quot;font-display text-5xl font-extrabold text-slate-900&quot;</span><span className="text-slate-400">&gt;</span>
                      <div className="pl-4 text-slate-800 font-bold font-sans">
                        We Scale Your Startup Brand 🚀
                      </div>
                      <span className="text-slate-400">&lt;/</span><span className="text-cyan-600 font-bold">h1</span><span className="text-slate-400">&gt;</span>
                      <br />
                      <span className="text-slate-400">&lt;</span><span className="text-cyan-600 font-bold">button</span> <span className="text-pink-600">onClick</span><span className="text-slate-400">=</span>&#123;bookStrategy&#125; <span className="text-pink-600">className</span><span className="text-slate-400">=</span><span className="text-amber-600">&quot;px-6 py-2 bg-brand-orange text-white rounded-lg&quot;</span><span className="text-slate-400">&gt;</span>
                      <div className="pl-4 text-cyber-green font-bold">Book Consultation</div>
                      <span className="text-slate-400">&lt;/</span><span className="text-cyan-600 font-bold">button</span><span className="text-slate-400">&gt;</span>
                    </div>
                    <span className="text-slate-400">&lt;/</span><span className="text-cyan-600 font-bold">section</span><span className="text-slate-400">&gt;</span>
                  </div>
                  );
                </div>
                &#125;
              </div>
            </div>

            {/* Simulated Live View from compiler */}
            <div className="p-4 bg-white border-t border-slate-200 flex flex-col items-center justify-center text-center py-6">
              <span className="text-[10px] font-mono text-slate-450 font-bold mb-2 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-ping inline-block" /> Live Compiler Rendering
              </span>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-sm space-y-4 shadow-inner">
                <h4 className="font-display text-base font-extrabold text-slate-800 leading-tight">
                  We Scale Your Startup Brand 🚀
                </h4>
                <p className="text-[11px] text-slate-500 font-sans font-light">
                  React 19 responsive SPA built for high client acquisitions.
                </p>
                <button 
                  onClick={onOpenConsultation}
                  className="px-4 py-1.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-[10px] font-bold rounded-lg shadow-sm"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        );
      case 'meta-ads':
        return (
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xl flex justify-center">
            {/* Instagram Mock Post */}
            <div className="w-full max-w-xs bg-white border border-slate-200 rounded-2xl overflow-hidden font-sans text-xs">
              {/* Post Header */}
              <div className="p-3 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyber-green to-cyber-cyan p-[1px] flex justify-center items-center font-bold">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-black text-[9px] text-cyber-green">
                      Pg
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-[11px] leading-3">pixelgrowm</div>
                    <span className="text-[9px] text-slate-400">Sponsored</span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-800 font-bold">•••</button>
              </div>

              {/* Mock Creative Image */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 h-56 relative flex flex-col justify-between p-4 border-b border-slate-100">
                <div className="text-[10px] font-mono text-slate-400 font-bold tracking-wider leading-none">META AD NETWORK</div>
                
                <div className="space-y-2">
                  <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest bg-gradient-to-r from-cyber-green to-cyber-cyan px-2.5 py-0.5 rounded-full inline-block shadow-sm">
                    4.5x Avg ROAS
                  </span>
                  <p className="text-base font-display font-black text-slate-800 leading-tight">
                    Stop Losing Leads To Competitors.
                  </p>
                  <p className="text-[10px] text-slate-500 font-light">
                    Get custom Facebook & Instagram funnels that bring quality conversions.
                  </p>
                </div>

                <div className="flex justify-between items-center bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow">
                  <div>
                    <span className="block text-[8px] text-slate-400 font-bold font-mono tracking-wider">PIXELGROWM DIGITAL</span>
                    <span className="text-[10px] font-bold text-slate-800">Unlock Free Consultation Call</span>
                  </div>
                  <span 
                    onClick={onOpenConsultation}
                    className="text-[9px] font-bold bg-gradient-to-r from-cyber-green to-cyber-cyan text-white px-2.5 py-1.5 rounded-lg uppercase tracking-wide cursor-pointer text-center"
                  >
                    Learn More
                  </span>
                </div>
              </div>

              {/* Feed Action Bar */}
              <div className="p-3 text-slate-800 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                <div className="flex gap-3 text-xs">
                  <span className="text-red-500 hover:scale-110 cursor-pointer">❤</span>
                  <span className="text-slate-400 hover:text-slate-800 cursor-pointer">💬</span>
                  <span className="text-slate-400 hover:text-slate-800 cursor-pointer">➔</span>
                </div>
                <span className="text-cyber-green font-mono text-[10px] font-bold">981 Leads Saved</span>
              </div>

              {/* Comments block */}
              <div className="p-3 text-[10px] space-y-1 bg-white">
                <p className="text-slate-600 leading-normal">
                  <strong className="text-slate-800">pixelgrowm</strong> Startups shouldn&apos;t depend on word-of-mouth alone. Scalable Meta Lead Acquisition starts here...
                </p>
                <div className="text-slate-400 text-[8px] uppercase font-mono tracking-wider">12 HOURS AGO</div>
              </div>
            </div>
          </div>
        );
      case 'google-ads':
        return (
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xl space-y-3 font-sans">
            {/* Search Input simulation */}
            <div className="bg-slate-100 p-2 rounded-xl flex items-center justify-between border border-slate-200">
              <div className="flex items-center gap-2 overflow-hidden w-4/5 text-xs text-slate-800">
                <Search className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
                <input
                  type="text"
                  value={googleQuery}
                  onChange={(e) => setGoogleQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-slate-800 text-xs"
                />
              </div>
              <span className="text-[9px] font-mono font-bold text-white bg-cyber-cyan px-2 py-0.5 rounded shadow">LIVE</span>
            </div>

            {/* SERP result */}
            <div className="bg-slate-50/75 p-4 rounded-2xl border border-slate-200/80 space-y-3">
              <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest flex items-center gap-1.5 font-sans">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full inline-block animate-pulse" /> Sponsored Ad
              </span>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1a0dab] font-semibold text-xs">www.pixelgrowm.com</span>
                  <span className="text-slate-450 text-xs font-semibold">/google-ads</span>
                </div>
                <h4 className="text-sm font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug font-display">
                  High-Converting Google Ads Agencies — Scaled Growth For Startups
                </h4>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                Stop wasting budget on clicks that bounce. We research local high-intent keywords for your niche. Target actual buyers searching directly for &quot;<span className="text-slate-800 font-bold">{googleQuery}</span>&quot;. Complete conversions tracking.
              </p>

              {/* Callouts links mockup */}
              <div className="grid grid-cols-2 gap-2 text-[10px] pt-3 border-t border-slate-200/60 font-semibold">
                <div onClick={onOpenConsultation} className="text-[#1a0dab] hover:underline cursor-pointer">
                  ✦ Startup Friendly Pricing
                </div>
                <div onClick={onOpenConsultation} className="text-[#1a0dab] hover:underline cursor-pointer">
                  ✦ Get Free Keywords Analysis
                </div>
                <div onClick={onOpenConsultation} className="text-[#1a0dab] hover:underline cursor-pointer">
                  ✦ Live Metrics Reports
                </div>
                <div onClick={onOpenConsultation} className="text-[#1a0dab] hover:underline cursor-pointer">
                  ✦ ROI-focused Ads Plan
                </div>
              </div>
            </div>
          </div>
        );
      case 'video-editing':
        return (
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
            {/* Player viewport - Keep Dark Context for Cinematic Immersion */}
            <div className="aspect-video bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-950 relative flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors pointer-events-none" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 font-sans">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30 font-bold">
                    REEL EDIT / 1080x1920 / 60 FPS
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>

                <div className="text-center space-y-2 max-w-xs mx-auto">
                  <span className="text-[10px] text-cyber-mint font-bold uppercase tracking-widest bg-slate-905/90 px-2 py-0.5 rounded-full inline-block border border-cyber-mint/40">
                    Hook Level: 3s Focus
                  </span>
                  <h4 className="font-display font-black text-xl text-white leading-tight uppercase tracking-wide">
                    Build. Edit. Scale. ⚡
                  </h4>
                  <p className="text-xs text-slate-200 font-sans font-medium">
                    Snappy cinematic text effects & trend background loops.
                  </p>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-350">
                  <span className="font-mono">00:08 / 00:30s</span>
                  <Volume2 className="w-4 h-4 text-cyber-green cursor-pointer" />
                </div>
              </div>

              {/* Play overlay button */}
              <button 
                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                className="w-14 h-14 bg-cyber-green/95 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-cyber-green/20 z-20"
              >
                {isPlayingVideo ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>
            </div>

            {/* Editing timeline controller */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 space-y-4 font-mono text-[10px]">
              <div className="flex items-center justify-between text-slate-450 font-bold">
                <span>TIMELINE CHANNELS</span>
                <span className="text-cyber-green font-bold">✓ AUDIO SYNC ACTIVE</span>
              </div>
              
              {/* Graphic timeline track bars */}
              <div className="space-y-2">
                {/* Track 1: Transitions */}
                <div className="flex items-center gap-2">
                  <span className="w-14 flex-shrink-0 text-slate-450 font-bold text-[9px]">VIDEO_FX</span>
                  <div className="flex-1 h-4 bg-slate-200 rounded border border-slate-300/40 flex overflow-hidden">
                    <span className="w-1/4 bg-violet-600/30 text-violet-500 flex items-center justify-center font-bold">Cinematic Hook</span>
                    <span className="w-2/4 bg-cyber-cyan/30 text-cyber-cyan flex items-center justify-center font-bold">Smooth Zoom Spin</span>
                    <span className="w-1/4 bg-emerald-600/30 text-emerald-500 flex items-center justify-center">Outro Logo</span>
                  </div>
                </div>

                {/* Track 2: Caption text */}
                <div className="flex items-center gap-2">
                  <span className="w-14 flex-shrink-0 text-slate-450 font-bold text-[9px]">CAPTION</span>
                  <div className="flex-1 h-4 bg-slate-200 rounded border border-slate-300/40 flex overflow-hidden">
                    <span className="w-1/3 bg-cyber-green/20 text-cyber-green flex items-center justify-center font-bold">&quot;Build.&quot;</span>
                    <span className="w-1/3 bg-cyber-green/20 text-cyber-green flex items-center justify-center font-bold">&quot;Edit.&quot;</span>
                    <span className="w-1/3 bg-cyber-green/20 text-cyber-green flex items-center justify-center font-bold">&quot;Scale!&quot;</span>
                  </div>
                </div>

                {/* Track 3: Audio waveform */}
                <div className="flex items-center gap-2">
                  <span className="w-14 flex-shrink-0 text-slate-450 font-bold text-[9px]">AUDIO_TRK</span>
                  <div className="flex-1 h-3 bg-slate-200 rounded border border-slate-300/40 flex items-center px-1">
                    <div className="w-full h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 pb-20 pt-32 relative overflow-hidden light-grid">
      {/* Decorative vector blooms */}
      <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation / Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-all bg-slate-50 px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Pixelgrowm Home
          </button>

          {/* Quick toggle to other service pages */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[9px] font-mono font-bold text-slate-400">QUICK PORT:</span>
            {Object.keys(SERVICE_PAGES_DATA).map((key) => (
              <button
                key={key}
                onClick={() => onNavigate(key as ActiveTabType)}
                className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded transition-all ${
                  serviceId === key 
                    ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/30' 
                    : 'text-slate-450 hover:text-slate-600'
                }`}
              >
                {key.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/30 bg-amber-50 px-3 py-1 rounded-full font-bold">
              {data.title} Focus
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-none tracking-tight">
              {data.heroHeading}
            </h1>
            <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed font-light">
              {data.heroSubheading}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-cyan hover:from-cyber-cyan hover:to-cyber-green text-white font-bold text-xs font-display rounded-full transition-all shadow-lg shadow-orange-500/20 hover:scale-[1.02] flex items-center gap-1.5"
              >
                Start Your Project <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a 
                href="#roi-calculator" 
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 hover:border-slate-350 font-bold text-xs font-display rounded-full transition-all flex items-center gap-1 shadow-sm"
              >
                Calculate ROI
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 col-span-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-cyan rounded-3xl blur-xl opacity-20" />
              <div className="relative z-10 bg-white p-1 rounded-3xl border border-slate-200 shadow-sm">
                {renderInteractiveShowcase()}
              </div>
            </div>
          </div>
        </div>

        {/* Core Offers split grids */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              What We Offer in Detail
            </h2>
            <p className="text-slate-550 mt-2 text-sm font-light">
              Professional services engineered designed uniquely to match your brand and scale conversion funnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.offers.map((offer, index) => (
              <div
                key={index}
                onClick={() => setActiveOfferIdx(index)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeOfferIdx === index
                    ? 'bg-white border-cyber-green/50 shadow-lg shadow-orange-950/5'
                    : 'bg-slate-50/50 border-slate-200/50 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className={`p-3 rounded-xl border w-fit mb-6 transition-all ${
                    activeOfferIdx === index ? 'bg-amber-50 border-amber-105 text-cyber-green' : 'bg-white border-slate-200 text-slate-450'
                  }`}>
                    <LucideIcon name={offer.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-slate-800 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed font-light">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-6 font-mono text-[10px] text-slate-400 font-bold uppercase flex items-center justify-between">
                  <span>METRIC SPEC</span>
                  <span className={activeOfferIdx === index ? 'text-cyber-green' : 'text-slate-400'}>
                    {activeOfferIdx === index ? 'Active Highlight' : 'Click to inspect'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Specifications checklist */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50/50 border border-slate-200/50 rounded-3xl p-6 md:p-10 mb-20 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-36 h-36 bg-cyber-green/5 rounded-full blur-2xl" />
          
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 leading-tight">
              Standard Quality Checklist
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-light">
              Every deliverable is triple-audited against our extreme growth criteria to ensure non-bouncing campaigns and sub-second Web speeds.
            </p>
            <div className="p-4 bg-white rounded-2xl border border-slate-200/60 text-[11px] text-slate-550 leading-relaxed">
              <span className="font-bold text-slate-800 block mb-1 uppercase tracking-wider text-[10px]">Our Commitment</span>
              No canned templates. No shared generic setups. Every asset is customized to your direct target demographics.
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all shadow-sm">
                <div className="w-7 h-7 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-cyber-green text-xs font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA */}
        <div className="relative text-center bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 md:p-14 border border-slate-200/60 overflow-hidden shadow-sm">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent" />
          <div className="absolute inset-0 bg-cyber-green/5 mix-blend-color-dodge blur-3xl rounded-full" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="font-mono text-[9px] text-cyber-cyan uppercase tracking-widest border border-cyber-cyan/30 bg-amber-50 px-2.5 py-1 rounded-full font-bold inline-block">
              Immediate Onboarding Available
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {data.ctaText}
            </h2>
            <div className="pt-4 flex justify-center gap-4">
              <button 
                onClick={onOpenConsultation}
                className="px-6 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-xs font-bold font-display rounded-full shadow hover:scale-[1.02] transition-all flex items-center gap-1.5"
              >
                Start Strategy Proposal <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={onBackToHome}
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-full transition-all border border-slate-200 shadow-sm"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
