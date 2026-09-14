import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AIBadge } from '../common/AIBadge';
import {
  Building2,
  Handshake,
  Sparkles,
  Award,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';

export const IndustryDashboard = () => {
  const { challenges, setSelectedChallenge, pledgeSupport, triggerConfetti } = useApp();

  // Recommended challenges matching CSR Water & CleanTech
  const recommended = challenges.slice(0, 3);
  const supported = challenges.slice(0, 2);

  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [targetChallenge, setTargetChallenge] = useState(null);
  const [selectedSupportType, setSelectedSupportType] = useState('₹5 Lakh Equipment Grant');
  const [pledgedSuccess, setPledgedSuccess] = useState(false);

  const handleOpenPledge = (challenge) => {
    setTargetChallenge(challenge);
    setSupportModalOpen(true);
    setPledgedSuccess(false);
  };

  const handleConfirmPledge = () => {
    if (targetChallenge) {
      pledgeSupport(targetChallenge.id, {
        partnerName: "Tata Steel Foundation (CSR)",
        supportType: selectedSupportType,
        amount: selectedSupportType
      });
      setPledgedSuccess(true);
      triggerConfetti();
      setTimeout(() => {
        setSupportModalOpen(false);
      }, 1200);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Corporate & CSR Innovation Cell
            </span>
            <span className="text-xs bg-amber-800 text-amber-200 px-2 py-0.5 rounded-full">
              Sec. 135 Companies Act Compliant
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Tata Steel CSR & Foundation
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 max-w-lg">
            Welcome, <strong>Vikram Sengupta</strong> (Head of CSR Partnerships). 6 high-impact challenges matched to your mandate.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-3 rounded-2xl border border-white/10 text-xs">
          <Building2 className="w-6 h-6 text-amber-300 flex-shrink-0" />
          <div>
            <div className="text-[10px] text-amber-200">Active Mandate</div>
            <div className="font-extrabold text-white">Water, Mobility & CleanTech</div>
          </div>
        </div>
      </div>

      {/* 5 Key Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { label: "Recommended Projects", value: "6", sub: "AI High Alignment", color: "text-amber-800" },
          { label: "Projects Supported", value: "5", sub: "Active Grant Pledges", color: "text-slate-900" },
          { label: "Mentorship Hours", value: "140 hrs", sub: "By Senior Engineers", color: "text-blue-700" },
          { label: "Funding Committed", value: "₹48.5 L", sub: "Audited CSR Tranche", color: "text-emerald-700" },
          { label: "Solutions Deployed", value: "4", sub: "Field Running", color: "text-purple-700" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">{item.label}</span>
            <div className={`text-2xl font-black mt-1 ${item.color}`}>{item.value}</div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">{item.sub}</span>
          </div>
        ))}
      </div>

      {/* AI Recommended Projects for CSR */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-black text-slate-900">
                AI Recommended High-Impact Projects
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Ranked by synergy with your organization's CSR mandate (Water Technology + IoT + Rural Infrastructure).
            </p>
          </div>
          <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-300">
            Top 3 High Alignment
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommended.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-slate-500">{item.id}</span>
                  <AIBadge type="match" score={item.matchScore} />
                </div>

                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="text-[11px] font-bold text-brand-800">
                    Why AI Recommended:
                  </p>
                  <p className="text-[11px] leading-relaxed">
                    Matches your Water Tech & Civic Infrastructure allocation. Assigned to {item.assignedUni}.
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Beneficiaries:</span>
                  <strong className="text-slate-800">{item.affectedCount}</strong>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedChallenge(item)}
                    className="py-2 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-100"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleOpenPledge(item)}
                    className="py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-xs"
                  >
                    Offer Support
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Projects & Tranche Milestones */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-slate-900">
            Currently Supported Projects & Live ROI
          </h3>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            5 Active CSR Grants
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {supported.map((item) => (
            <div key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-700">{item.id}</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-400">• Lead: {item.assignedUni}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500">
                  Pledged: <strong>₹4.5 Lakh Grant + 40 Mentorship Hours</strong>
                </p>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div className="text-right">
                  <div className="text-xs font-bold text-brand-700">{item.progress}% Milestone Met</div>
                  <div className="w-28 bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1">
                    <div className="bg-brand-600 h-full rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
                <button
                  onClick={() => setSelectedChallenge(item)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Support Modal */}
      {supportModalOpen && targetChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Handshake className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-black text-slate-900">Offer CSR Partnership</h3>
              </div>
              <button
                onClick={() => setSupportModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            {pledgedSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-slate-900">Support Pledged Successfully!</h4>
                <p className="text-xs text-slate-500">
                  Notification dispatched to {targetChallenge.assignedUni} faculty mentors.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-bold text-slate-400 block mb-1">Target Project</span>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-slate-900">{targetChallenge.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Assigned University: {targetChallenge.assignedUni}</p>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">Select Support Mechanism</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "₹5 Lakh Equipment Grant",
                      "Technical Mentorship (40h)",
                      "Hardware Device Donation",
                      "Pilot Field Testing Site",
                      "Manufacturing Scale-Up",
                      "Commercialization Seed"
                    ].map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSupportType(opt)}
                        className={`p-2.5 rounded-xl border text-left font-semibold transition-all ${
                          selectedSupportType === opt
                            ? 'bg-amber-50 border-amber-500 text-amber-950 ring-1 ring-amber-400'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-950 leading-relaxed">
                  Your pledge will be recorded under Ministry of Corporate Affairs CSR Category VII (Promoting Education & Technology Incubators).
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={handleConfirmPledge}
                    className="flex-1 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-md"
                  >
                    Confirm CSR Pledge
                  </button>
                  <button
                    onClick={() => setSupportModalOpen(false)}
                    className="py-3 px-4 border border-slate-300 rounded-xl text-slate-700 font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
