import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Mail, 
  Phone, 
  Send, 
  ArrowUp,
  MessageSquare,
  Clock
} from 'lucide-react';

import { ActiveTabType } from './types';
import { AGENCY_CONTACT, HERO_SECTION } from './data';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ROICalculator from './components/ROICalculator';
import Features from './components/Features';
import Works from './components/Works';
import Statistics from './components/Statistics';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GrowthWizard from './components/GrowthWizard';
import ServicePage from './components/ServicePage';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('home');
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [quickContactForm, setQuickContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [quickFormSuccess, setQuickFormSuccess] = useState(false);

  const handleNavigateTab = (tab: ActiveTabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickContactForm.name || !quickContactForm.email || !quickContactForm.message) {
      alert("Please fill in all general contact fields.");
      return;
    }
    
    // Save lead capture data
    const existingLeads = JSON.parse(localStorage.getItem('pixelgrowm_contact_leads') || '[]');
    existingLeads.unshift({
      ...quickContactForm,
      id: 'C-' + Math.floor(Math.random() * 10000),
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem('pixelgrowm_contact_leads', JSON.stringify(existingLeads));
    
    setQuickFormSuccess(true);
    setTimeout(() => {
      setQuickContactForm({ name: '', email: '', company: '', message: '' });
      setQuickFormSuccess(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased selection:bg-cyber-green/10 selection:text-cyber-green">
      
      {/* Universal Floater Header */}
      <Navbar 
        activeTab={activeTab} 
        onNavigateTab={handleNavigateTab} 
        onOpenConsultation={() => setIsWizardOpen(true)} 
      />

      {/* Main Routing Views Switcher */}
      <AnimatePresence mode="wait">
        {activeTab === 'home' ? (
          <motion.div
            key="home-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 1. Hero Block */}
            <Hero 
              onOpenWizard={() => setIsWizardOpen(true)} 
              onNavigateTab={handleNavigateTab} 
            />

            {/* 2. About Details Section */}
            <About />

            {/* 3. Services Grid */}
            <Services onNavigateTab={handleNavigateTab} />

            {/* Interactive Calculator Section (Value Driven SEO & Conversion math) */}
            <ROICalculator />

            {/* 4. Features Checklist Section (What Makes Us Different) */}
            <Features />

            {/* 5. Works Case Studies (Filterable portfolio list) */}
            <Works />

            {/* 6. Dynamic Highlight Statistics */}
            <Statistics />

            {/* 7. Timeline Work Steps */}
            <Process />

            {/* 8. Client Testimonials */}
            <Testimonials />

            {/* 9. Core Contact & CTA Section (Start standard project campaign) */}
            <section id="contact" className="py-24 bg-slate-50 font-sans border-t border-slate-200/50 relative overflow-hidden light-grid">
              <div className="absolute top-1/4 -left-1/4 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  
                  {/* Left block CTA text */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                      <span className="font-mono text-xs text-cyber-green tracking-widest uppercase border border-cyber-green/20 bg-amber-50 px-3 py-1 rounded-full w-fit block">
                        Get In Touch
                      </span>
                      <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                        Ready to Grow <br />Your Business?
                      </h2>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Let’s build your online presence with powerful websites, creative marketing, and performance-driven ad strategies.
                      </p>
                    </div>

                    {/* Channel Cards Info lists */}
                    <div className="space-y-4">
                      <div className="p-4 bg-white border border-slate-200/60 rounded-2xl flex items-center gap-4 shadow-sm">
                        <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-cyber-green text-sm flex-shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-400 font-mono tracking-wider font-bold">OFFICIAL MAIL</span>
                          <a href={`mailto:${AGENCY_CONTACT.email}`} className="text-sm font-bold text-slate-800 hover:text-cyber-green hover:underline">
                            {AGENCY_CONTACT.email}
                          </a>
                        </div>
                      </div>

                      <div className="p-4 bg-white border border-slate-200/60 rounded-2xl flex items-center gap-4 shadow-sm">
                        <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-cyber-green text-sm flex-shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-400 font-mono tracking-wider font-bold">PHONE WHATSAPP</span>
                          <a href="tel:+919876543210" className="text-sm font-bold text-slate-800 hover:text-cyber-green hover:underline">
                            {AGENCY_CONTACT.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right block Contact Form */}
                  <div className="lg:col-span-6 bg-white border border-slate-200/80 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyber-green animate-pulse" />
                        Quick Inquiries Form
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mb-6">
                        Fill this out or launch the interactive blueprint strategy constructor above.
                      </p>

                      <form onSubmit={handleQuickContactSubmit} className="space-y-4 font-sans text-xs">
                        <div>
                          <label className="block text-slate-600 mb-1 font-semibold">Your Full Name*</label>
                          <input 
                            type="text" 
                            required
                            placeholder="e.g. Alexis Carter"
                            value={quickContactForm.name}
                            onChange={(e) => setQuickContactForm(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-cyber-green outline-none rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-slate-600 mb-1 font-semibold">Business Email*</label>
                            <input 
                              type="email" 
                              required
                              placeholder="alexis@company.com"
                              value={quickContactForm.email}
                              onChange={(e) => setQuickContactForm(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 focus:border-cyber-green outline-none rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400"
                            />
                          </div>
                          <div>
                            <label className="block text-slate-600 mb-1 font-semibold">Company (Optional)</label>
                            <input 
                              type="text" 
                              placeholder="e.g. SaaS Hub Ltd"
                              value={quickContactForm.company}
                              onChange={(e) => setQuickContactForm(prev => ({ ...prev, company: e.target.value }))}
                              className="w-full bg-slate-50 border border-slate-200 focus:border-cyber-green outline-none rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-slate-600 mb-1 font-semibold">Tell us about your digital targets*</label>
                          <textarea 
                            rows={3}
                            required
                            placeholder="Describe your service preferences, budget constraints or project timing goals..."
                            value={quickContactForm.message}
                            onChange={(e) => setQuickContactForm(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-cyber-green outline-none rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 resize-none"
                          />
                        </div>

                        {quickFormSuccess ? (
                          <div className="p-3 bg-cyber-green/10 rounded-xl border border-cyber-green/20 text-cyber-green text-center font-semibold">
                            Inquiry received! We will connect shortly.
                          </div>
                        ) : (
                          <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                              type="submit"
                              className="flex-1 py-3 bg-slate-950 text-white font-bold hover:bg-cyber-green hover:text-white transition-all rounded-full flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                            >
                              Send Message <Send className="w-3 h-3" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setIsWizardOpen(true)}
                              className="py-3 px-5 bg-white text-cyber-green border border-cyber-green/30 font-bold hover:bg-amber-50 transition-all rounded-full cursor-pointer"
                            >
                              Launch Growth Wizard ✨
                            </button>
                          </div>
                        )}
                      </form>
                    </div>

                    <div className="text-[10px] text-slate-400 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between font-mono">
                      <span>PIXELGROWM CONTACT PROTOCOL</span>
                      <span>12H REPLY TIME</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="service-detail-route"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Dynamic Specific Sub-page detail view */}
            <ServicePage 
              serviceId={activeTab as Exclude<ActiveTabType, 'home'>}
              onBackToHome={() => handleNavigateTab('home')}
              onNavigate={handleNavigateTab}
              onOpenConsultation={() => setIsWizardOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overarching footer */}
      <Footer 
        onNavigateTab={handleNavigateTab} 
        onOpenConsultation={() => setIsWizardOpen(true)} 
      />

      {/* Floating CTA Bubble for free Consultation */}
      <button
        onClick={() => setIsWizardOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-cyber-green to-cyber-cyan text-white px-4 py-3 rounded-full flex items-center gap-2 font-display font-bold shadow-2xl hover:scale-105 transition-all outline-none"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="text-xs tracking-wide">Builder Wizard</span>
      </button>

      {/* Complete Immersive Consultation Strategy Wizard Modal Overlay */}
      <AnimatePresence>
        {isWizardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-2xl"
            >
              <GrowthWizard onClose={() => setIsWizardOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
