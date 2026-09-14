import React from 'react';
import { useApp } from '../../context/AppContext';
import { Award, Heart, Shield, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const { t, setActiveTab } = useApp();

  const handleLink = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
                              <img
                  src="/logo.png"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/logo.svg"; }}
                  alt="Ud-Bhavan Logo"
                  className="w-10 h-10 object-contain"
                />
              
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Ud<span className="text-brand-400">-Bhavan</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {t('footer_tagline')} An AI-orchestrated public interest technology framework matching citizen pain points with academic engineering and CSR capital.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-emerald-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{t('footer_platform_note')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Platform Modules
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('nav_home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('report')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('nav_report')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('challenges')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('nav_challenges')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('stories')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('nav_stories')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('impact')}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t('nav_impact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Civic Compliance & Tech */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Governance & Standards
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-400" />
                <span>AI Ethics & Citizen Data Privacy</span>
              </li>
              <li>GIGW 3.0 Accessibility Ready</li>
              <li>Smart City Mission Interoperability</li>
              <li>National Innovation & Startup Policy</li>
              <li>UN SDGs: 6, 9, 11, 13 Aligned</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Ud-Bhavan Ecosystem. All rights reserved. Transforming civic challenges into verified solutions.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Engineered with dedication for</span>
            <span className="font-semibold text-brand-400">Digital India & Viksit Bharat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
