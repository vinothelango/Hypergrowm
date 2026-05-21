import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw, CheckCircle2, ChevronRight, Send, HelpCircle, Laptop, Landmark, Video, Target, Phone, X } from 'lucide-react';
import { AGENCY_CONTACT } from '../data';

interface WizardState {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  goal: string;
  budget: string;
  notes: string;
}

const GOALS = [
  { id: 'web-dev', title: 'World-Class Website', desc: 'Custom, blazing-fast, high-converting UX layout.', icon: Laptop },
  { id: 'meta-ads', title: 'Meta Ads Automation', desc: 'Targeted lead generation campaigns on IG & FB.', icon: Target },
  { id: 'google-ads', title: 'Google Search Domination', desc: 'Intent-matched search clicks that buy raw.', icon: Landmark },
  { id: 'video-editing', title: 'Viral Video Content', desc: 'High-engaging Reels, Promo Video and visual ads.', icon: Video },
  { id: 'all-inclusive', title: 'All-In Growth Package', desc: 'Website, ads, reels and branding assets combined.', icon: Sparkles }
];

const BUDGETS = [
  { id: 'starter', label: 'Startup Friendly (Rs. 25,000 - Rs. 50,000/mo)', value: 'Rs. 25,000 - Rs. 50,000', scope: 'Focuses on 1 core channel and quick-win ads.' },
  { id: 'growth', label: 'Scale-up Speed (Rs. 50,000 - Rs. 1,00,000/mo)', value: 'Rs. 50,000 - Rs. 1,00,000', scope: 'Combines website development with active Meta Ads campaigns.' },
  { id: 'market-leader', label: 'Aggressive Aggregator (Rs. 1,00,000 - Rs. 2,00,000+/mo)', value: 'Rs. 1,00,000 - Rs. 2,00,000+', scope: 'Meta ads + Google ads + professional social reel packages.' }
];

export default function GrowthWizard({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<WizardState>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    goal: GOALS[0].id,
    budget: BUDGETS[0].id,
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleGoalSelect = (goalId: string) => {
    setFormData(prev => ({ ...prev, goal: goalId }));
  };

  const handleBudgetSelect = (budgetId: string) => {
    setFormData(prev => ({ ...prev, budget: budgetId }));
  };

  const selectedGoalData = GOALS.find(g => g.id === formData.goal);
  const selectedBudgetData = BUDGETS.find(b => b.id === formData.budget);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.companyName) {
      alert("Please fill in your name, company name, and email address to receive your blueprint.");
      return;
    }
    setIsSubmitting(true);

    // Build a well-formatted inquiry email to Pixelgrowm
    const selectedGoal  = GOALS.find(g => g.id === formData.goal)?.title   || formData.goal   || 'Not specified';
    const selectedBudgetLabel = BUDGETS.find(b => b.id === formData.budget)?.label || formData.budget || 'Not specified';

    const subject = encodeURIComponent(
      `New Inquiry from ${formData.companyName} — ${selectedGoal}`
    );

    const body = encodeURIComponent(
      `Hello Pixelgrowm Team,\n\n` +
      `You have received a new inquiry via the Growth Wizard on your website.\n\n` +
      `─────────────────────────────\n` +
      `CONTACT DETAILS\n` +
      `─────────────────────────────\n` +
      `Name         : ${formData.name}\n` +
      `Company      : ${formData.companyName}\n` +
      `Email        : ${formData.email}\n` +
      `Phone        : ${formData.phone || 'Not provided'}\n\n` +
      `─────────────────────────────\n` +
      `PROJECT REQUIREMENTS\n` +
      `─────────────────────────────\n` +
      `Primary Goal : ${selectedGoal}\n` +
      `Budget Range : ${selectedBudgetLabel}\n` +
      `Notes        : ${formData.notes || 'None'}\n\n` +
      `─────────────────────────────\n` +
      `Submitted on : ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST\n\n` +
      `Please reply to the client at: ${formData.email}\n\n` +
      `Regards,\nPixelgrowm Growth Wizard`
    );

    const mailtoLink = `mailto:${AGENCY_CONTACT.email}?subject=${subject}&body=${body}`;

    // Open the mail client then mark as completed
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 800);
  };

  // Generate dynamic growth insights based on selections
  const growthBlueprint = () => {
    switch (formData.goal) {
      case 'web-dev':
        return [
          "Responsive, light-weight design optimized for direct lead acquisitions",
          "Setup of custom analytics to monitor scrolling behavior and conversions",
          "Core Web Vitals acceleration to secure a 95+ performance ranking score",
          "Targeted Call-to-Actions (CTAs) paired with lead collection modals"
        ];
      case 'meta-ads':
        return [
          "Laser-precise lookalike and interest-based audience building",
          "Daily tracking and budget scaling algorithms to maximize high Return on Ad Spend (ROAs)",
          "A/B split testing of creative video templates and persuasive caption angles",
          "Retargeting funnels designed to reengage lookers and drive direct checkouts"
        ];
      case 'google-ads':
        return [
          "Surgical-grade keyword search mapping targeting buying intent first",
          "Strategic bid structuring to outpace legacy competitors in key regions",
          "Engaging dynamic ad copy matching user searches for lower cost per acquisition",
          "Advanced phone call and web submission lead tracking configuration"
        ];
      case 'video-editing':
        return [
          "Custom edit styles aligned with viral visual trends across social platforms",
          "Highly engaging caption layouts, subtle motion graphics, and background tracks",
          "Stated focus on hook retention metrics within the first 3 seconds",
          "Export in premium formats compatible with YouTube Shorts, TikTok and Instagram Reels"
        ];
      default:
        return [
          "Complete multi-channel startup starter strategy mapping out key milestones",
          "Polished high-performance business website with landing templates",
          "Co-occurring Search and Social campaigns building compounding authority",
          "Pack of professional ad creatives and promotional video clips"
        ];
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200/80 rounded-3xl shadow-2xl p-6 md:p-8 relative overflow-hidden font-sans">
      {/* Decorative gradient corners */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-cyber-green/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-cyber-cyan/10 rounded-full blur-xl pointer-events-none" />

      {/* Close button if provided */}
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 p-2 rounded-full border border-slate-200 transition-all cursor-pointer shadow-sm z-20"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Progress header */}
      {!isCompleted && (
        <div className="mb-6">
          <div className="flex justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>PIXELGROWM GROWTH ENGINE</span>
            <span>STEP {step} OF 4</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Wizard contents */}
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <div>
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyber-green animate-pulse" />
                    What is your primary growth goal?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 font-light">
                    Select the key digital channel where we should initiate campaign or design optimization.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {GOALS.map((goal) => {
                    const Icon = goal.icon;
                    const isSelected = formData.goal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        onClick={() => handleGoalSelect(goal.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                          isSelected
                            ? 'bg-amber-50/50 border-cyber-green shadow-md shadow-orange-550/5'
                            : 'bg-slate-50/50 border-slate-200/50 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl border flex-shrink-0 transition-all ${
                          isSelected ? 'bg-white border-cyber-green/30 text-cyber-green shadow-sm' : 'bg-white border-slate-200 text-slate-450'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
                            {goal.title}
                            {isSelected && <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 font-light">{goal.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-xs font-bold font-display rounded-full shadow-lg shadow-orange-500/10 hover:scale-[1.01] transition-all flex items-center gap-1.5"
                  >
                    Select Budget <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                    What is your approximate budget scale?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 font-light">
                    We offer startup-focused, value-driven tiers designed for early-stage companies.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {BUDGETS.map((tier) => {
                    const isSelected = formData.budget === tier.id;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => handleBudgetSelect(tier.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                          isSelected
                            ? 'bg-amber-50/50 border-cyber-cyan shadow-md shadow-orange-550/5'
                            : 'bg-slate-50/50 border-slate-200/50 hover:bg-white hover:border-slate-350'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-sm text-slate-800">
                            {tier.label}
                          </span>
                          {isSelected && <span className="text-[9px] bg-cyber-cyan/10 text-cyber-cyan px-2 py-0.5 rounded-full border border-cyber-cyan/30 font-bold font-mono">SELECTED</span>}
                        </div>
                        <p className="text-xs text-slate-550 mt-1 font-sans font-light">
                          {tier.scope}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    onClick={handleBack}
                    className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 text-xs font-bold font-display border border-slate-200 rounded-full transition-all flex items-center gap-1 shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-xs font-bold font-display rounded-full shadow-lg shadow-orange-500/10 hover:scale-[1.01] transition-all flex items-center gap-1.5"
                  >
                    Your Brand Info <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-slate-900">
                    Tell us about your brand
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1 font-light">
                    This lets us customize the proposal metrics to your exact industry metrics.
                  </p>
                </div>

                <div className="space-y-4 font-sans text-slate-800 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1">Company / Startup Name*</label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="e.g. Acme Tech"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:border-cyber-green outline-none font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:border-cyber-green outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1">Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:border-cyber-green outline-none font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1">Phone / WhatsApp Line</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:border-cyber-green outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div>
                     <label className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1">Any specific requirements? (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you sell, who is your core customer, or link your current website if any."
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-205 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:border-cyber-green outline-none resize-none font-medium"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center text-left">
                  <button
                    onClick={handleBack}
                    className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 text-xs font-bold font-display border border-slate-200 rounded-full transition-all flex items-center gap-1 shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-xs font-bold font-display rounded-full shadow-lg shadow-orange-500/10 hover:scale-[1.01] transition-all flex items-center gap-1.5"
                  >
                    Build Growth Blueprint <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6 animate-fade-in"
              >
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                    Review Your Custom Strategy
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-light">
                    We developed a blueprint mapped to your startup targets. Submit to confirm.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4 text-xs font-sans text-slate-700 text-left shadow-sm">
                  <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-200/60">
                    <div>
                      <span className="text-slate-400 font-bold font-mono block text-[9px]">CLIENT</span>
                      <span className="font-semibold text-slate-800 text-xs">{formData.companyName || 'Anonymous Start'} ({formData.name || 'Anonymous'})</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold font-mono block text-[9px]">EMAIL</span>
                      <span className="font-semibold text-slate-800 text-xs truncate block">{formData.email || 'Not provided'}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-200/60">
                    <div>
                      <span className="text-slate-400 font-bold font-mono block text-[9px]">STRATEGY CHANNEL</span>
                      <span className="font-black text-cyber-green text-xs">{selectedGoalData?.title}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold font-mono block text-[9px]">BUDGET RANGE</span>
                      <span className="font-black text-cyber-cyan text-xs">{selectedBudgetData?.label}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-bold font-mono block mb-1.5 text-[9px]">PROPOSED SPRINT MILESTONES</span>
                    <ul className="space-y-2 text-xs text-slate-650 font-light ready-list">
                      {growthBlueprint().map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center text-left">
                  <button
                    onClick={handleBack}
                    className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 text-xs font-bold font-display border border-slate-200 rounded-full transition-all flex items-center gap-1 shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-xs font-bold font-display rounded-full shadow-lg shadow-orange-500/15 hover:scale-[1.01] transition-all flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Analyzing Targets...
                      </>
                    ) : (
                      <>
                        Request Free Strategy Call <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            key="completed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-16 h-16 bg-amber-50 text-cyber-green border border-amber-100 rounded-full flex items-center justify-center mx-auto text-3xl font-black shadow-sm select-none">
              ✓
            </div>
            <div>
              <h3 className="font-display text-2xl font-extrabold text-slate-900 leading-tight">
                Blueprint Structured Successfully!
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed font-light">
                Thanks, <strong>{formData.name}</strong>. We saved your custom <strong>{selectedGoalData?.title}</strong> strategy for <strong>{formData.companyName}</strong>. 
                Our strategy lead will review your requirements and reach out via <strong>{formData.email}</strong> within 12 business hours.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-sm mx-auto space-y-2 text-xs font-sans text-left shadow-sm">
              <span className="font-bold text-slate-800 block border-b border-slate-200/60 pb-1 text-[10px] uppercase tracking-wider">Direct Contact:</span>
              <div className="flex items-center gap-2 text-slate-650 mt-2 font-medium">
                <Send className="w-4 h-4 text-cyber-cyan" />
                <span>Email: <a href={`mailto:${AGENCY_CONTACT.email}`} className="text-cyber-cyan font-bold hover:underline">{AGENCY_CONTACT.email}</a></span>
              </div>
              <div className="flex items-center gap-2 text-slate-650 font-medium">
                <Phone className="w-4 h-4 text-cyber-cyan" />
                <span>Mobile : {AGENCY_CONTACT.phone}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => {
                  setStep(1);
                  setIsCompleted(false);
                }}
                className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-full transition-all flex items-center gap-1 shadow-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Rebuild Strategy
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyber-green to-cyber-cyan text-white text-xs font-bold font-display rounded-full shadow-md shadow-orange-500/10 transition-all leading-none"
                >
                  Return to Site
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
