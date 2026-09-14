import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  Sliders,
  Sparkles,
  BarChart3,
  PieChart,
  Award,
  Users,
  CheckCircle,
  AlertTriangle,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const AdminDashboard = () => {
  const { adminSettings, setAdminSettings, universities } = useApp();

  const handleSliderChange = (field, value) => {
    setAdminSettings(prev => ({
      ...prev,
      [field]: Number(value)
    }));
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-brand-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              State Administrative Operations & SIH Steering Cell
            </span>
            <span className="text-xs bg-purple-800 text-purple-200 px-2 py-0.5 rounded-full">
              Mission Director
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Ud-Bhavan Administration
          </h2>
          <p className="text-xs sm:text-sm text-purple-200 max-w-lg">
            Administrator: <strong>Shri Rajeshwar Sinha, IAS</strong>. Oversight across 24 Jharkhand districts, 42 universities, and 96 industry sponsors.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-3 rounded-2xl border border-white/10 text-xs">
          <ShieldCheck className="w-6 h-6 text-amber-300 flex-shrink-0" />
          <div>
            <div className="text-[10px] text-purple-200">System Health</div>
            <div className="font-extrabold text-emerald-400">99.8% AI Node Uptime</div>
          </div>
        </div>
      </div>

      {/* 8 Metric KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {[
          { label: "Total Reports", val: "1,248", color: "text-slate-900" },
          { label: "AI Approved", val: "864", color: "text-emerald-700" },
          { label: "AI Rejected", val: "42", color: "text-red-600" },
          { label: "Duplicates Detected", val: "184", color: "text-amber-600" },
          { label: "Universities", val: "42", color: "text-blue-700" },
          { label: "Industry Partners", val: "96", color: "text-purple-700" },
          { label: "Active Projects", val: "178", color: "text-brand-800" },
          { label: "Deployed Solutions", val: "73", color: "text-teal-700" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs text-center">
            <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">{item.label}</span>
            <div className={`text-xl font-black mt-1 ${item.color}`}>{item.val}</div>
          </div>
        ))}
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Category Breakdown (Donut Chart simulation) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-brand-700" />
              <span>Challenges by Category</span>
            </h3>
            <span className="text-[11px] font-bold text-slate-400">Total: 864 Approved</span>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { label: "Water Management & Drainage", pct: 32, count: 276, color: "bg-blue-600" },
              { label: "Agriculture & Cold Storage", pct: 24, count: 207, color: "bg-emerald-600" },
              { label: "Clean Energy & Irrigation", pct: 16, count: 138, color: "bg-amber-500" },
              { label: "Rural Transit & Accessibility", pct: 14, count: 121, color: "bg-purple-600" },
              { label: "Healthcare & Mine Water", pct: 14, count: 122, color: "bg-teal-600" },
            ].map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-700">{cat.label}</span>
                  <span className="text-slate-900 font-bold">{cat.pct}% ({cat.count})</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${cat.color} h-full rounded-full`} style={{ width: `${cat.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* District Distribution (Bar Chart simulation) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-600" />
              <span>Challenges by District (Top 6 Clusters)</span>
            </h3>
            <span className="text-[11px] font-bold text-slate-400">Regional Coverage</span>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { district: "Ranchi (Harmu, Ratu, Kanke)", count: 240, max: 240 },
              { district: "Dhanbad (Jharia, Katras, Sindri)", count: 184, max: 240 },
              { district: "Jamshedpur (Sakchi, Bistupur, Golmuri)", count: 165, max: 240 },
              { district: "Bokaro (Chas, Chandankiyari)", count: 110, max: 240 },
              { district: "Dumka (Shikaripara, Kathikund)", count: 95, max: 240 },
              { district: "Hazaribagh & Giridih", count: 70, max: 240 },
            ].map((d, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-700">{d.district}</span>
                  <span className="text-slate-900 font-bold">{d.count} tickets</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-brand-600 h-full rounded-full"
                    style={{ width: `${(d.count / d.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Validation Accuracy & Tuning Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* AI Performance Metrics */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-600" />
              <span>AI Engine Verification Metrics</span>
            </h3>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
              Benchmarked
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-[10px] font-bold text-emerald-800 block">Approval Accuracy</span>
              <span className="text-2xl font-black text-emerald-700 mt-1 block">96.4%</span>
              <span className="text-[10px] text-emerald-600">Ground Verified</span>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-[10px] font-bold text-amber-800 block">Duplicate Filter</span>
              <span className="text-2xl font-black text-amber-700 mt-1 block">184 Flagged</span>
              <span className="text-[10px] text-amber-600">Saved ~₹1.2 Cr redundant R&D</span>
            </div>

            <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
              <span className="text-[10px] font-bold text-purple-800 block">Spam & Flagged</span>
              <span className="text-2xl font-black text-purple-700 mt-1 block">3.3%</span>
              <span className="text-[10px] text-purple-600">Auto-Filtered</span>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200">
              <span className="text-[10px] font-bold text-blue-800 block">Avg Match Speed</span>
              <span className="text-2xl font-black text-blue-700 mt-1 block">4.2 sec</span>
              <span className="text-[10px] text-blue-600">Per Citizen Submission</span>
            </div>
          </div>
        </div>

        {/* AI Algorithm Tuning Sliders (Interactive Demo Controls) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border-2 border-brand-300 shadow-md space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-brand-700" />
                <span>AI Orchestration Parameter Tuning (Demo Controls)</span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Adjust confidence weights for validation, duplicate thresholding, and university matching algorithms.
              </p>
            </div>
            <span className="text-[10px] font-bold bg-brand-100 text-brand-900 px-2 py-0.5 rounded-full">
              Live Interactive
            </span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between font-bold text-slate-800 mb-1">
                <span>Validation Confidence Threshold</span>
                <span className="text-brand-700 font-mono">{adminSettings.validationThreshold}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                value={adminSettings.validationThreshold}
                onChange={(e) => handleSliderChange('validationThreshold', e.target.value)}
                className="w-full accent-brand-600 cursor-pointer"
              />
              <p className="text-[10px] text-slate-400 mt-0.5">Minimum AI confidence required to auto-approve without human escalation.</p>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between font-bold text-slate-800 mb-1">
                <span>Duplicate Detection Sensitivity</span>
                <span className="text-amber-700 font-mono">{adminSettings.duplicateThreshold}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="90"
                value={adminSettings.duplicateThreshold}
                onChange={(e) => handleSliderChange('duplicateThreshold', e.target.value)}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <p className="text-[10px] text-slate-400 mt-0.5">Semantic cosine similarity threshold to trigger duplicate report alert.</p>
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex justify-between font-bold text-slate-800 mb-1">
                <span>University Domain Matching Floor</span>
                <span className="text-blue-700 font-mono">{adminSettings.matchingThreshold}%</span>
              </div>
              <input
                type="range"
                min="60"
                max="95"
                value={adminSettings.matchingThreshold}
                onChange={(e) => handleSliderChange('matchingThreshold', e.target.value)}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[10px] text-slate-400 mt-0.5">Minimum departmental syllabus & lab compatibility to dispatch challenge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* University Performance Leaderboard */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Jharkhand Technical Universities Performance Ranking</span>
          </h3>
          <span className="text-xs font-semibold text-slate-500">SIH Institutional Index</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Rank</th>
                <th className="p-3">Institution</th>
                <th className="p-3">District</th>
                <th className="p-3">Active Projects</th>
                <th className="p-3">Completed Deployments</th>
                <th className="p-3">Students</th>
                <th className="p-3 text-right">Impact Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {universities.map((uni, idx) => (
                <tr key={uni.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">
                    <span className={`w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] ${
                      idx === 0 ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {idx + 1}
                    </span>
                  </td>
                  <td className="p-3 font-bold text-slate-900">{uni.name}</td>
                  <td className="p-3 text-slate-500">{uni.district}</td>
                  <td className="p-3 font-semibold text-blue-700">{uni.activeChallenges}</td>
                  <td className="p-3 font-semibold text-emerald-700">{uni.completedProjects}</td>
                  <td className="p-3 text-slate-600">{uni.studentsInvolved}</td>
                  <td className="p-3 text-right font-black text-brand-800">{uni.impactScore} / 100</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
