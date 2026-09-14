import React from 'react';
import { useApp } from '../../context/AppContext';
import { PlusCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const HomeCTA = () => {
  const { t, setActiveTab } = useApp();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-800 via-emerald-800 to-brand-900 text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/10 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Civic Participation Guarantee</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {t('cta_title')}
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              {t('cta_subtitle')} Every validated problem is paired with university research grants and CSR funding to ensure real ground deployment.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveTab('report');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <PlusCircle className="w-5 h-5" />
                <span>{t('btn_report_problem')}</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('challenges');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-all"
              >
                <span>{t('btn_explore_challenges')}</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
