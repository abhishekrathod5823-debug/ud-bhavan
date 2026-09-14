import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Award, ChevronRight, Sparkles, X, Minimize2, Maximize2 } from 'lucide-react';

export const SIHJudgeTourBar = () => {
  const { setActiveTab, setCurrentRole, setSelectedChallenge, challenges, t } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  const steps = [
    {
      step: 1,
      label: t('tour_step1'),
      action: () => {
        setActiveTab('report');
      }
    },
    {
      step: 2,
      label: t('tour_step2'),
      action: () => {
        setActiveTab('report');
      }
    },
    {
      step: 3,
      label: t('tour_step3'),
      action: () => {
        setActiveTab('challenges');
        if (challenges.length > 0) {
          setSelectedChallenge(challenges[0]);
        }
      }
    },
    {
      step: 4,
      label: t('tour_step4'),
      action: () => {
        setCurrentRole('university');
        setActiveTab('dashboard');
      }
    },
    {
      step: 5,
      label: t('tour_step5'),
      action: () => {
        setCurrentRole('industry');
        setActiveTab('dashboard');
      }
    },
    {
      step: 6,
      label: t('tour_step6'),
      action: () => {
        setActiveTab('impact');
      }
    }
  ];

  if (collapsed) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-brand-700 to-emerald-800 text-white rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-semibold border-2 border-amber-400"
        >
          <Award className="w-4 h-4 text-amber-300" />
          <span>SIH Judge Demo Walkthrough</span>
          <Maximize2 className="w-3.5 h-3.5 ml-1 text-slate-200" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white border-b border-amber-500/30 py-2 px-3 sm:px-6 relative z-40 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center p-1 bg-amber-500 text-slate-950 rounded font-bold text-[10px] tracking-wider uppercase">
            SIH 2026
          </span>
          <span className="font-semibold text-amber-300 hidden sm:inline">
            {t('tour_guide_title')}
          </span>
          <span className="text-slate-300 text-[11px] hidden md:inline">
            (Simulate full citizen to university to industry lifecycle in 1 click)
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={s.action}
              className="group flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-brand-600/90 active:bg-brand-700 text-white rounded-md text-[11px] font-medium transition-all whitespace-nowrap border border-white/10 hover:border-amber-400/50"
              title={`Jump to ${s.label}`}
            >
              <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                {s.step}
              </span>
              <span>{s.label}</span>
              {idx < steps.length - 1 && (
                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-amber-200 ml-0.5" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 hover:bg-white/10 rounded text-slate-300 hover:text-white"
            title="Minimize guide bar"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
