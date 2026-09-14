import React from 'react';
import { useApp } from '../../context/AppContext';
import { User, GraduationCap, Building2, ShieldCheck, X, Check } from 'lucide-react';

export const DemoLoginModal = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, currentRole, setCurrentRole, setActiveTab, triggerConfetti } = useApp();

  if (!isLoginModalOpen) return null;

  const roles = [
    {
      id: 'citizen',
      title: 'Citizen / Community Reporter',
      name: 'Rahul Sharma',
      org: 'Harmu Basin Ward Committee, Ranchi',
      desc: 'Report civic issues, track real-time resolution timeline, see nearby local challenges.',
      icon: <User className="w-5 h-5 text-emerald-600" />,
      badge: 'Civic Reporter',
      color: 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/40'
    },
    {
      id: 'university',
      title: 'University / Faculty & Student Team',
      name: 'Dr. Ananya Singh',
      org: 'Birsa Institute of Technology (BIT Sindri)',
      desc: 'Receive AI-matched challenges, review AI-suggested interdisciplinary student teams, upload prototype milestones.',
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      badge: 'Academic Mentor',
      color: 'border-blue-200 hover:border-blue-500 bg-blue-50/40'
    },
    {
      id: 'industry',
      title: 'Industry & CSR Partner',
      name: 'Vikram Sengupta',
      org: 'Tata Steel CSR & Foundation',
      desc: 'Browse high-impact projects matching CSR domains, pledge funding, provide field testing & technical mentorship.',
      icon: <Building2 className="w-5 h-5 text-amber-600" />,
      badge: 'CSR Sponsor',
      color: 'border-amber-200 hover:border-amber-500 bg-amber-50/40'
    },
    {
      id: 'admin',
      title: 'State Mission Directorate & Administration',
      name: 'Shri Rajeshwar Sinha, IAS',
      org: 'Higher Education & Public Welfare Dept',
      desc: 'State-wide civic analytics, university rankings, duplicate detection rates, and tune AI matching weighting algorithms.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      badge: 'Mission Director',
      color: 'border-purple-200 hover:border-purple-500 bg-purple-50/40'
    }
  ];

  const handleSelectRole = (roleId) => {
    setCurrentRole(roleId);
    setIsLoginModalOpen(false);
    setActiveTab('dashboard');
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-2">
            <span>Platform Persona Mode</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Select Your Prototype Persona
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Switch between real stakeholders in the Ud-Bhavan ecosystem to test role-specific dashboards and privileges.
          </p>
        </div>

        <div className="space-y-3">
          {roles.map((r) => {
            const isSelected = currentRole === r.id;
            return (
              <div
                key={r.id}
                onClick={() => handleSelectRole(r.id)}
                className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                  isSelected ? 'border-brand-600 bg-brand-50/70 shadow-md ring-2 ring-brand-400/30' : r.color
                }`}
              >
                <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
                  {r.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {r.title}
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                      {r.badge}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-700 mt-0.5">
                    {r.name} • <span className="text-slate-500 font-normal">{r.org}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
                {isSelected && (
                  <div className="self-center p-1.5 rounded-full bg-brand-600 text-white flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>No passwords or backend authentication required.</span>
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="text-slate-600 hover:text-slate-900 font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
