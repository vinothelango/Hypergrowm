import React, { useState, useMemo } from 'react';
import { IndianRupee, CheckCircle2, TrendingUp, Sparkles, Zap, ArrowRight } from 'lucide-react';

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState<number>(50000);
  const [averageCustomerValue, setAverageCustomerValue] = useState<number>(10000);
  const [selectedChannel, setSelectedChannel] = useState<'meta' | 'google' | 'web'>('meta');

  // Interactive metrics in Indian Rupees (Rs.) based on channel choice
  const channelData = {
    meta: {
      avgCpc: 15, // Cost per click in Rs.
      standardConvRate: 1.5,
      pixelgrowmConvRate: 3.8,
      industryLabel: "Meta Ads Performance"
    },
    google: {
      avgCpc: 25, // Cost per click in Rs.
      standardConvRate: 2.0,
      pixelgrowmConvRate: 5.2,
      industryLabel: "Google Search Performance"
    },
    web: {
      avgCpc: 20, // Cost per click in Rs.
      standardConvRate: 1.2,
      pixelgrowmConvRate: 4.1,
      industryLabel: "Conversion UX Performance"
    }
  };

  const calculation = useMemo(() => {
    const data = channelData[selectedChannel];
    const totalVisits = Math.round(adSpend / data.avgCpc);
    
    // Standard performance
    const standardConversions = Math.round(totalVisits * (data.standardConvRate / 100));
    const standardRevenue = standardConversions * averageCustomerValue;
    const standardRoi = adSpend > 0 ? (standardRevenue - adSpend) / adSpend * 100 : 0;

    // Pixelgrowm performance
    const pgConversions = Math.round(totalVisits * (data.pixelgrowmConvRate / 100));
    const pgRevenue = pgConversions * averageCustomerValue;
    const pgRoi = adSpend > 0 ? (pgRevenue - adSpend) / adSpend * 100 : 0;
    const multiplier = standardConversions > 0 ? (pgConversions / standardConversions).toFixed(1) : "2.5";

    return {
      totalVisits,
      standard: {
        conversions: standardConversions,
        revenue: standardRevenue,
        roi: Math.round(standardRoi)
      },
      pixelgrowm: {
        conversions: pgConversions,
        revenue: pgRevenue,
        roi: Math.round(pgRoi)
      },
      multiplier,
      extraRevenue: pgRevenue - standardRevenue
    };
  }, [adSpend, averageCustomerValue, selectedChannel]);

  return (
    <div id="roi-calculator" className="w-full py-24 bg-zinc-50/65 relative overflow-hidden border-t border-b border-slate-200/50">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyber-green uppercase tracking-widest border border-cyber-green/20 px-3 py-1 bg-amber-50 rounded-full inline-block font-extrabold">
            Startup ROI Planner
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-mint">Growth Potential</span>
          </h2>
          <p className="font-sans text-slate-500 mt-4 text-sm md:text-base leading-relaxed font-light">
            Compare traditional agencies or DIY campaign results with Pixelgrowm&apos;s conversion-optimized systems (all values in Indian Rupees Rs.).
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs panel (Distinct Slate Card Look) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(15,23,42,0.04)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyber-green to-cyber-cyan" />
            <div>
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 font-mono">
                  1. Choose Strategy Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedChannel('meta')}
                    className={`py-3 rounded-xl border text-xs font-bold font-display transition-all duration-300 ${
                      selectedChannel === 'meta'
                        ? 'bg-cyber-green text-white border-transparent shadow-lg shadow-cyber-green/20 font-extrabold'
                        : 'bg-slate-50 text-slate-650 border-slate-200 hover:border-cyber-green hover:text-cyber-green'
                    }`}
                  >
                    Meta Ads
                  </button>
                  <button
                    onClick={() => setSelectedChannel('google')}
                    className={`py-3 rounded-xl border text-xs font-bold font-display transition-all duration-300 ${
                      selectedChannel === 'google'
                        ? 'bg-cyber-green text-white border-transparent shadow-lg shadow-cyber-green/20 font-extrabold'
                        : 'bg-slate-50 text-slate-650 border-slate-200 hover:border-cyber-green hover:text-cyber-green'
                    }`}
                  >
                    Google Ads
                  </button>
                  <button
                    onClick={() => setSelectedChannel('web')}
                    className={`py-3 rounded-xl border text-xs font-bold font-display transition-all duration-300 ${
                      selectedChannel === 'web'
                        ? 'bg-cyber-green text-white border-transparent shadow-lg shadow-cyber-green/20 font-extrabold'
                        : 'bg-slate-50 text-slate-650 border-slate-200 hover:border-cyber-green hover:text-cyber-green'
                    }`}
                  >
                    Web UX Dev
                  </button>
                </div>
              </div>

              {/* Slider 1: Ad Spend */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold uppercase font-mono text-slate-600 mb-2">
                  <span>Monthly Traffic Cost</span>
                  <span className="font-mono text-cyber-green font-bold text-sm flex items-center">
                    Rs. {adSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-cyber-green h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1 font-bold">
                  <span>Rs. 5,000</span>
                  <span>Rs. 2.5 Lakh</span>
                  <span>Rs. 5 Lakh</span>
                </div>
              </div>

              {/* Slider 2: Average Customer Value */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold uppercase font-mono text-slate-600 mb-2">
                  <span>Avg. Deal Size (ACV)</span>
                  <span className="font-mono text-cyber-cyan font-bold text-sm flex items-center">
                    Rs. {averageCustomerValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={averageCustomerValue}
                  onChange={(e) => setAverageCustomerValue(Number(e.target.value))}
                  className="w-full accent-cyber-cyan h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1 font-bold">
                  <span>Rs. 500</span>
                  <span>Rs. 50,050</span>
                  <span>Rs. 1 Lakh</span>
                </div>
              </div>
            </div>

            {/* Explainer note */}
            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100 text-xs text-slate-600 mt-4 leading-relaxed">
              <div className="flex items-center gap-2 mb-1.5 text-cyber-green font-extrabold uppercase font-mono text-[10px]">
                <Sparkles className="w-4 h-4 flex-shrink-0 text-cyber-green" />
                <span>Pixelgrowm Math Advantage</span>
              </div>
              Our websites load sub-second, and our campaign creatives achieve higher click engagement, raising target conversions from the industry average of ~1.5% up to 4%+.
            </div>
          </div>

          {/* Outputs visualization */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Standard Perform card (Light, Subtle Shadow) */}
            <div className="bg-white rounded-3xl border border-slate-200/70 p-6 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-md transition-shadow">
              <div>
                <span className="font-mono text-[9px] uppercase text-slate-400 font-bold tracking-wider">
                  Typical Performance (Average DIY / Agency)
                </span>
                <h3 className="text-lg font-bold text-slate-800 font-display mt-2">
                  Standard Campaign
                </h3>
                <div className="mt-8 space-y-4">
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Projected conversions:</span>
                    <span className="text-xl font-mono font-bold text-slate-700">
                      {calculation.standard.conversions} <span className="text-xs font-sans font-normal text-slate-400">leads/purchases</span>
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Estimated revenue:</span>
                    <span className="text-xl font-semibold text-slate-800 font-display">
                      Rs. {calculation.standard.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Marketing ROI:</span>
                    <span className="text-base font-mono font-bold text-slate-500">
                      {calculation.standard.roi > 0 ? `+${calculation.standard.roi}%` : `${calculation.standard.roi}%`}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 pt-6 border-t border-slate-100 mt-6 font-mono">
                Based on industry benchmarks: <span className="text-slate-800 font-bold">{channelData[selectedChannel].standardConvRate}%</span> conversion rate.
              </div>
            </div>

            {/* Pixelgrowm Premium card (Intense Dark, Neon Glowing Shadow) */}
            <div className="bg-slate-950 rounded-3xl border border-cyber-green p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(20,220,120,0.15)] ring-2 ring-cyber-green/10">
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-cyber-green text-white font-mono text-[8px] uppercase font-bold tracking-widest rounded-bl-xl shadow flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> Optimal Growth
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] uppercase text-cyber-mint tracking-wider font-bold block">
                    Pixelgrowm funnels
                  </span>
                  <h3 className="text-lg font-bold text-white font-display mt-2">
                    Pixelgrowm Scaled
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-xs text-slate-400">Projected conversions:</span>
                    <span className="text-2xl font-mono font-bold text-cyber-green">
                      {calculation.pixelgrowm.conversions} <span className="text-xs font-sans font-medium text-cyber-mint">active customer leads</span>
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Estimated Monthly revenue:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent font-display">
                      Rs. {calculation.pixelgrowm.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Marketing ROI:</span>
                    <span className="text-lg font-mono font-bold text-cyber-green">
                      +{calculation.pixelgrowm.roi}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <div className="text-[10px] text-slate-400 mb-1 font-mono">
                  Pixelgrowm Target rate: <span className="text-cyber-green font-bold">{channelData[selectedChannel].pixelgrowmConvRate}%</span>.
                </div>
                <div className="text-[11px] font-bold text-white mt-2 flex items-center gap-1.5 font-sans">
                  <TrendingUp className="w-4 h-4 text-cyber-green" />
                  <span>Generate <span className="text-cyber-green font-bold">Rs. {calculation.extraRevenue.toLocaleString()} more</span> each month!</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to action section below math */}
        <div className="mt-12 text-center">
          <p className="text-xs font-medium text-slate-500">
            Want to see how we guarantee custom growth metrics for your industry?
          </p>
          <div className="mt-4 flex justify-center">
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-slate-900 text-white hover:bg-cyber-green hover:text-white text-xs font-bold font-display rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-[1.01]"
            >
              Secure This Growth Rate <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
