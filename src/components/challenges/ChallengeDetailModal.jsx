import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AIBadge } from '../common/AIBadge';
import {
  X,
  MapPin,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  Circle,
  Share2,
  Handshake,
  Check,
  ChevronRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export const ChallengeDetailModal = () => {
  const {
    selectedChallenge,
    setSelectedChallenge,
    currentRole,
    acceptUniversityTeam,
    pledgeSupport,
    lang
  } = useApp();

  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [pledgeForm, setPledgeForm] = useState({
    partnerName: "Tata Steel Foundation (CSR)",
    supportType: "CSR Funding & Mentorship",
    amount: "₹5.0 Lakhs Equipment Grant"
  });

  if (!selectedChallenge) return null;

  const item = selectedChallenge;

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'High': return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Looking for Team': return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'University Matched': return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'In Progress': return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'Prototype': return 'bg-indigo-100 text-indigo-900 border-indigo-300';
      case 'Pilot': return 'bg-teal-100 text-teal-900 border-teal-300';
      case 'Deployed': return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    pledgeSupport(item.id, pledgeForm);
    setIsPledgeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                {item.id}
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getPriorityBadge(item.priority)}`}>
                Priority: {item.priority}
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                {item.status}
              </span>
              <AIBadge type="match" score={item.matchScore} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {item.title}
            </h2>
          </div>

          <button
            onClick={() => setSelectedChallenge(null)}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-400 font-bold text-[10px] uppercase block">District</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-brand-700" />
                {item.district}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-bold text-[10px] uppercase block">Affected Headcount</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                {item.affectedCount}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-bold text-[10px] uppercase block">Reported By</span>
              <span className="font-bold text-slate-900 mt-0.5 block truncate">
                {item.reportedBy}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-bold text-[10px] uppercase block">Registration Date</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {item.reportedDate}
              </span>
            </div>
          </div>

          {/* 1. Problem Description & Evidence Gallery */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
              <span>Ground Problem Statement & Context</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200">
              {item.description}
            </p>

            {/* Evidence Gallery */}
            {item.evidenceImages && item.evidenceImages.length > 0 && (
              <div>
                <span className="text-xs font-bold text-slate-500 mb-2 block uppercase tracking-wider">
                  Citizen Uploaded Photographic Evidence:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.evidenceImages.map((img, idx) => (
                    <div key={idx} className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                      <img src={img} alt="Ground Evidence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md text-[10px] text-white font-medium px-2 py-1 rounded">
                        Ward 26 Field Capture • Geotagged
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. AI Analysis & Verification Summary */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-brand-50/80 to-emerald-50 border border-brand-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-700" />
                <h3 className="text-sm font-extrabold text-brand-950">
                  AI Validation & Orchestration Analysis
                </h3>
              </div>
              <AIBadge type="validated" text="AI Verified 98.4%" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-brand-100">
                <span className="text-slate-400 text-[10px] font-bold block">Duplicate Risk</span>
                <span className="font-extrabold text-emerald-700">{item.duplicateScore}% (Unique)</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-brand-100">
                <span className="text-slate-400 text-[10px] font-bold block">Impact Index</span>
                <span className="font-extrabold text-brand-800">{item.impactScore} / 100</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-brand-100">
                <span className="text-slate-400 text-[10px] font-bold block">AI Domain Match</span>
                <span className="font-extrabold text-blue-700">{item.matchScore}% Compatibility</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-brand-100">
                <span className="text-slate-400 text-[10px] font-bold block">Verification Node</span>
                <span className="font-extrabold text-slate-800">Ranchi Geo-Cluster</span>
              </div>
            </div>

            <div className="text-xs text-brand-900 bg-white/70 p-3 rounded-xl border border-brand-200/60 leading-relaxed">
              <strong className="text-brand-950">AI Recommendation: </strong>
              {item.aiRecommendation}
            </div>
          </div>

          {/* 3. University Matching & Suggested Departments */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Assigned University & Academic Mentorship</span>
              </h3>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                94% Domain Fit
              </span>
            </div>

            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    {item.assignedUni}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Lead Faculty Mentor: <strong className="text-slate-800">{item.team?.faculty || "Faculty Lead Pending"}</strong>
                  </p>
                </div>
                {item.status === 'University Matched' && (
                  <button
                    onClick={() => acceptUniversityTeam(item.id)}
                    className="px-4 py-2 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs shadow-md"
                  >
                    Accept & Form Team
                  </button>
                )}
              </div>

              {/* Suggested Departments */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Interdisciplinary Departments Engaged:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.suggestedDepts?.map((dept, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Student Team Grid */}
              {item.team?.students && item.team.students.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Student Innovation Taskforce:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.team.students.map((st, idx) => (
                      <div key={idx} className="p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800">{st.name}</span>
                        <span className="text-[11px] font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {st.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 4. Industry & CSR Partners Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span>Industry & CSR Capital Support</span>
              </h3>
              <button
                onClick={() => setIsPledgeModalOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-sm flex items-center gap-1.5"
              >
                <Handshake className="w-4 h-4" />
                <span>Pledge Industry Support</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.industryPartners?.map((p, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{p.name}</span>
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{p.type}</p>
                  <p className="text-xs font-bold text-brand-800 pt-1 border-t border-slate-100">
                    {p.support}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. 9-Stage Visual Project Lifecycle Timeline */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <span>Full 9-Stage Project Execution Timeline</span>
            </h3>

            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2">
                {item.timeline?.map((step, idx) => {
                  const isCompleted = step.status === 'completed';
                  const isCurrent = step.status === 'current';
                  return (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl text-center border transition-all ${
                        isCompleted
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : isCurrent
                          ? 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-300/40 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-1">
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : isCurrent ? (
                          <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
                        ) : (
                          <Circle className="w-3 h-3 text-slate-300" />
                        )}
                      </div>
                      <p className="text-[11px] font-bold leading-tight">
                        {step.name}
                      </p>
                      <p className="text-[9px] mt-0.5 opacity-70">
                        {step.date}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 6. Chronological Project Field Updates */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">
              Chronological Deployment Feed
            </h3>
            <div className="space-y-2">
              {item.updates?.map((u, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3 text-xs">
                  <span className="font-mono text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                    {u.date}
                  </span>
                  <p className="text-slate-700 leading-snug flex-1">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Public Challenge ID: <strong className="text-slate-800">{item.id}</strong>
          </div>
          <button
            onClick={() => setSelectedChallenge(null)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
          >
            Close Details
          </button>
        </div>
      </div>

      {/* Industry Pledge Modal */}
      {isPledgeModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-2">
              <h4 className="text-base font-black text-slate-900">Pledge Industry CSR Support</h4>
              <button onClick={() => setIsPledgeModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handlePledgeSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Organization / Enterprise</label>
                <input
                  type="text"
                  value={pledgeForm.partnerName}
                  onChange={(e) => setPledgeForm({ ...pledgeForm, partnerName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Support Category</label>
                <select
                  value={pledgeForm.supportType}
                  onChange={(e) => setPledgeForm({ ...pledgeForm, supportType: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                >
                  <option value="CSR Grant & Equipment">CSR Grant & Equipment</option>
                  <option value="Technical Mentorship & Lab Access">Technical Mentorship & Lab Access</option>
                  <option value="Pilot Field Testing & Permits">Pilot Field Testing & Permits</option>
                  <option value="Hardware Device Donation">Hardware Device Donation</option>
                  <option value="Scale-Up & Manufacturing">Scale-Up & Manufacturing</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Commitment Details</label>
                <input
                  type="text"
                  value={pledgeForm.amount}
                  onChange={(e) => setPledgeForm({ ...pledgeForm, amount: e.target.value })}
                  placeholder="e.g. ₹5.0 Lakhs Equipment Grant + 40 Mentorship Hours"
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                  required
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-brand-700 text-white rounded-xl font-bold hover:bg-brand-800"
                >
                  Confirm Support Pledge
                </button>
                <button
                  type="button"
                  onClick={() => setIsPledgeModalOpen(false)}
                  className="py-2.5 px-4 border rounded-xl font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
