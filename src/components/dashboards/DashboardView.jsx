import React from 'react';
import { useApp } from '../../context/AppContext';
import { CitizenDashboard } from './CitizenDashboard';
import { UniversityDashboard } from './UniversityDashboard';
import { IndustryDashboard } from './IndustryDashboard';
import { AdminDashboard } from './AdminDashboard';
import { User, GraduationCap, Building2, ShieldCheck, Sparkles } from 'lucide-react';

export const DashboardView = () => {
  const { currentRole, setCurrentRole, triggerConfetti } = useApp();

  const roles = [
    { id: 'citizen', label: 'Citizen View', icon: <User className="w-4 h-4" /> },
    { id: 'university', label: 'University Innovation', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'industry', label: 'Industry & CSR', icon: <Building2 className="w-4 h-4" /> },
    { id: 'admin', label: 'SIH Admin & AI Tuning', icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  const handleSwitchRole = (roleId) => {
    setCurrentRole(roleId);
    triggerConfetti();
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Role Switcher Toolbar */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <span className="p-1 rounded-lg bg-brand-50 text-brand-700">
              <Sparkles className="w-4 h-4" />
            </span>
            <span>Switch Prototype Dashboard View:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {roles.map((r) => {
              const active = currentRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => handleSwitchRole(r.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-brand-700 text-white shadow-sm ring-1 ring-amber-400'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  {r.icon}
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Render Selected Dashboard */}
        {currentRole === 'citizen' && <CitizenDashboard />}
        {currentRole === 'university' && <UniversityDashboard />}
        {currentRole === 'industry' && <IndustryDashboard />}
        {currentRole === 'admin' && <AdminDashboard />}
      </div>
    </div>
  );
};
