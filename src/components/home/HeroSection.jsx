import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowRight,
  PlusCircle,
  Sparkles,
  Users,
  GraduationCap,
  Building2,
  CheckCircle2,
  Activity,
  Cpu
} from 'lucide-react';

export const HeroSection = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-50/70 via-white to-slate-50">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-ping" />
              <span className="text-xs font-bold text-brand-900 tracking-wide uppercase">
                AI-Driven Civic Action Platform
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-amber-700">Jharkhand State Model</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {t('hero_headline')}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t('hero_subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setActiveTab('report');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-bold text-base shadow-lg shadow-brand-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <PlusCircle className="w-5 h-5 text-amber-300" />
                <span>{t('btn_report_problem')}</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('challenges');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-base shadow-sm transition-all hover:border-slate-400"
              >
                <span>{t('btn_explore_challenges')}</span>
                <ArrowRight className="w-4 h-4 text-brand-700" />
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm font-semibold text-brand-950 bg-brand-50/80 p-3.5 rounded-2xl border border-brand-200/80">
              <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-amber-300" />
              </div>
              <p className="italic">
                “{t('trust_quote')}”
              </p>
            </div>
          </div>

          {/* Right Column: Visual Process Diagram */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/90 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-slate-500 ml-2">Ud-Bhavan Orchestration Engine</span>
                </div>
                <span className="text-[10px] font-bold bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full">
                  LIVE PIPELINE
                </span>
              </div>

              {/* 6-Node Ecosystem Flow Graphic */}
              <div className="space-y-3">
                {/* Node 1: Citizen */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-400 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900">1. Citizen Reports Issue</p>
                    <p className="text-[11px] text-slate-500 truncate">Waterlogging, agri-spoilage, broken transit</p>
                  </div>
                  <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                    Civic Input
                  </span>
                </div>

                {/* Node 2: AI Workflow */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-r from-brand-50 to-emerald-50/80 border border-brand-300 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-brand-700 text-white flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-extrabold text-brand-950">2. AI Validation Engine</p>
                      <Sparkles className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-[11px] text-brand-800 truncate">Spam check • Dedup • Priority score (94%)</p>
                  </div>
                  <span className="text-[10px] font-bold text-white bg-brand-700 px-2 py-0.5 rounded animate-pulse">
                    Auto-Matched
                  </span>
                </div>

                {/* Node 3: University */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900">3. University Mentors & Team</p>
                    <p className="text-[11px] text-slate-500 truncate">BIT Sindri, BIT Mesra, NIT Jamshedpur</p>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    R&D Labs
                  </span>
                </div>

                {/* Node 4: Industry CSR */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900">4. Industry & CSR Sponsorship</p>
                    <p className="text-[11px] text-slate-500 truncate">Tata Steel, SAIL, CCL CSR Capital</p>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    Grants & Labs
                  </span>
                </div>

                {/* Node 5: Real Deployment */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900">5. Pilot Prototype & Field Testing</p>
                    <p className="text-[11px] text-slate-500 truncate">Ward 26 Harmu, Shikaripara, Jharia</p>
                  </div>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    Field Tested
                  </span>
                </div>

                {/* Node 6: Measured Social Impact */}
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-300">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-emerald-950">6. Verified Civic Impact</p>
                    <p className="text-[11px] text-emerald-800 truncate">2.4 Lakh+ Citizens benefited across Jharkhand</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                    Target Met
                  </span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Decentralized Civic Tech</span>
                <span className="font-semibold text-brand-700">100% Transparent Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
