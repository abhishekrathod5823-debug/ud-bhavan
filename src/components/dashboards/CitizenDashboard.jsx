import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  CheckCircle,
  Clock,
  Rocket,
  MapPin,
  ArrowRight,
  PlusCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const CitizenDashboard = () => {
  const { challenges, setSelectedChallenge, setActiveTab, t } = useApp();

  // Filter citizen's reports (Ranchi or reported by Rahul)
  const myReports = challenges.filter(c => c.district === 'Ranchi' || c.reportedBy?.includes('Rahul'));
  const nearbyChallenges = challenges.filter(c => c.district === 'Ranchi').slice(0, 3);

  const activeTracking = myReports[0] || challenges[0];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-800 to-emerald-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Citizen Grievance & Tracking Portal
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">
            Welcome back, Rahul 👋
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-lg">
            Harmu Basin Ward Committee, Ranchi. Your reported issues are actively paired with BIT Sindri and supported by Tata Steel CSR.
          </p>
        </div>

        <button
          onClick={() => {
            setActiveTab('report');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg transition-all self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Report New Problem</span>
        </button>
      </div>

      {/* 4 Summary Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="p-2 rounded-xl bg-slate-100 text-slate-700">
              <FileText className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-bold text-slate-400">Total Filed</span>
          </div>
          <div className="text-2xl font-black text-slate-900">{myReports.length}</div>
          <div className="text-xs font-semibold text-slate-600 mt-1">Problems Reported</div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <CheckCircle className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-bold text-emerald-700">AI Passed</span>
          </div>
          <div className="text-2xl font-black text-emerald-700">{myReports.length}</div>
          <div className="text-xs font-semibold text-slate-600 mt-1">Challenges Approved</div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="p-2 rounded-xl bg-purple-50 text-purple-700">
              <Clock className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-bold text-purple-700">Prototyping</span>
          </div>
          <div className="text-2xl font-black text-purple-700">2</div>
          <div className="text-xs font-semibold text-slate-600 mt-1">In R&D Lab / Progress</div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="p-2 rounded-xl bg-brand-50 text-brand-800">
              <Rocket className="w-4 h-4" />
            </span>
            <span className="text-[10px] font-bold text-brand-800">Deployed</span>
          </div>
          <div className="text-2xl font-black text-brand-800">1</div>
          <div className="text-xs font-semibold text-slate-600 mt-1">Resolved on Ground</div>
        </div>
      </div>

      {/* Live Resolution Tracker */}
      {activeTracking && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                Live Status Tracker
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-0.5">
                {activeTracking.title}
              </h3>
              <p className="text-xs text-slate-500">
                Ticket ID: <strong className="font-mono text-slate-700">{activeTracking.id}</strong> • Matched with: <strong className="text-slate-800">{activeTracking.assignedUni}</strong>
              </p>
            </div>
            <button
              onClick={() => setSelectedChallenge(activeTracking)}
              className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold hover:bg-slate-50 self-start sm:self-auto"
            >
              View Full Timeline
            </button>
          </div>

          {/* 6 Step Citizen Tracker */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2">
            {[
              { label: "Submitted", state: "done", date: "Jul 18" },
              { label: "AI Validated", state: "done", date: "Jul 18" },
              { label: "University Match", state: "done", date: "Jul 21" },
              { label: "Solution Dev", state: "active", date: "In Lab" },
              { label: "Ward Pilot", state: "pending", date: "Oct 2026" },
              { label: "Resolved", state: "pending", date: "Target Nov" }
            ].map((step, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl text-center border ${
                  step.state === 'done'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : step.state === 'active'
                    ? 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-300/40'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <span className="text-[10px] font-bold block opacity-70">0{idx + 1}</span>
                <span className="text-xs font-bold block mt-0.5">{step.label}</span>
                <span className="text-[10px] mt-1 block opacity-80">{step.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Reports Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-slate-900">
            My Submissions & Community Grievances
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            {myReports.length} problems registered
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {myReports.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedChallenge(item)}
              className="py-4 hover:bg-slate-50 px-2 rounded-xl transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {item.id}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {item.status}
                  </span>
                  <span className="text-xs text-slate-400">{item.reportedDate}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-1">{item.location}</p>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
                  {item.progress}% Done
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Challenges in Ranchi */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              Nearby Challenges in Ranchi District
            </h3>
            <p className="text-xs text-slate-500">
              Other citizen-reported bottlenecks in your municipal jurisdiction
            </p>
          </div>
          <button
            onClick={() => setActiveTab('challenges')}
            className="text-xs font-bold text-brand-700 hover:text-brand-900 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nearbyChallenges.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedChallenge(item)}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-500 cursor-pointer transition-all shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-slate-500">{item.id}</span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                  {item.status}
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-900 line-clamp-2">{item.title}</h4>
              <p className="text-[11px] text-slate-500 truncate">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
