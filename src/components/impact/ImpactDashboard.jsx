import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  CheckCircle2,
  Rocket,
  GraduationCap,
  Building,
  Lightbulb,
  FileCheck,
  TrendingUp,
  MapPin,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const ImpactDashboard = () => {
  const { lang } = useApp();

  const primaryMetrics = [
    { label: "People Impacted", val: "2.4 Lakh+", sub: "Verified Ground Reach", icon: <Users className="w-6 h-6 text-brand-700" />, highlight: true },
    { label: "Problems Resolved", val: "73 Solutions", sub: "Fully Deployed", icon: <CheckCircle2 className="w-6 h-6 text-emerald-700" /> },
    { label: "Universities Active", val: "42 Colleges", sub: "Engineering & Agri", icon: <GraduationCap className="w-6 h-6 text-blue-700" /> },
    { label: "Industry Partners", val: "96 Corporates", sub: "CSR & MSMEs", icon: <Building className="w-6 h-6 text-amber-700" /> },
    { label: "CSR Capital Matched", val: "₹4.8 Crore", sub: "Direct R&D Inflow", icon: <HeartHandshake className="w-6 h-6 text-purple-700" /> },
    { label: "Startups Incubated", val: "14 Ventures", sub: "Student Civic Spin-offs", icon: <Rocket className="w-6 h-6 text-pink-700" /> },
    { label: "Patents / IP Filed", val: "23 Patents", sub: "Civic Innovations", icon: <Lightbulb className="w-6 h-6 text-teal-700" /> },
    { label: "Carbon Offset", val: "420 MT/Yr", sub: "Solar & Slag Reuse", icon: <Sparkles className="w-6 h-6 text-emerald-800" /> }
  ];

  const districtImpact = [
    { district: "Ranchi", people: "64,000+", deployed: "18 solutions", focus: "Monsoon Drainage & Waterlogging Early Warning" },
    { district: "Dhanbad", people: "48,000+", deployed: "14 solutions", focus: "Mine Groundwater Fluoride & Bio-Zeolite Filtration" },
    { district: "Jamshedpur", people: "38,000+", deployed: "12 solutions", focus: "Accessible Low-Floor E-Rickshaws & Elderly Transit" },
    { district: "Dumka", people: "32,000+", deployed: "9 solutions", focus: "Solar Thermal Micro-Cold Storage for Tribal Farmers" },
    { district: "Bokaro", people: "26,000+", deployed: "8 solutions", focus: "Slag & Fly-Ash Interlocking PWD Rural Paver Roads" },
    { district: "Hazaribagh & Deoghar", people: "32,000+", deployed: "12 solutions", focus: "Pilgrim Hydration & Forest Elephant Intrusion Acoustic AI" }
  ];

  const sdgs = [
    { num: "06", title: "Clean Water & Sanitation", color: "bg-blue-600", note: "Fluoride filters & drainage IoT" },
    { num: "02", title: "Zero Hunger", color: "bg-amber-600", note: "Solar micro cold-chain storage" },
    { num: "09", title: "Industry, Innovation & Infra", color: "bg-orange-600", note: "Recycled slag paver roads" },
    { num: "11", title: "Sustainable Cities & Communities", color: "bg-emerald-600", note: "Accessible low-floor mobility" },
    { num: "13", title: "Climate Action", color: "bg-teal-600", note: "Decentralized solar micro-grids" }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            Public Accountability & Social ROI
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            “See the Change We Create Together.”
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Real ground metrics, audited civic transformations, and institutional partnerships across the State of Jharkhand.
          </p>
        </div>

        {/* 8 Big Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {primaryMetrics.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-3xl border transition-all hover:-translate-y-1 ${
                item.highlight
                  ? 'bg-gradient-to-br from-brand-700 to-emerald-800 text-white border-brand-800 shadow-xl col-span-2 sm:col-span-1'
                  : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`p-2.5 rounded-2xl ${item.highlight ? 'bg-white/20 text-white' : 'bg-slate-50'}`}>
                  {item.icon}
                </span>
                <span className={`text-[10px] font-bold ${item.highlight ? 'text-amber-300' : 'text-slate-400'}`}>
                  VERIFIED
                </span>
              </div>
              <div className={`text-2xl sm:text-3xl font-black tracking-tight ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                {item.val}
              </div>
              <div className={`text-xs font-bold mt-1 ${item.highlight ? 'text-emerald-100' : 'text-slate-700'}`}>
                {item.label}
              </div>
              <div className={`text-[11px] mt-0.5 ${item.highlight ? 'text-emerald-200' : 'text-slate-400'}`}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* District Impact Breakdown */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                District-Wise Verified Beneficiaries
              </h3>
              <p className="text-xs text-slate-500">
                Track civic impact distributed across industrial, tribal, and rural clusters.
              </p>
            </div>
            <span className="text-xs font-bold text-brand-800 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              6 Key Jharkhand Zones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {districtImpact.map((d, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 flex items-center gap-1.5 text-sm">
                    <MapPin className="w-4 h-4 text-brand-700" />
                    {d.district}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {d.deployed}
                  </span>
                </div>
                <div className="text-xl font-black text-brand-900">
                  {d.people}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {d.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UN Sustainable Development Goals (SDG) Alignment */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
              Global Impact Framework
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-1">
              United Nations Sustainable Development Goals (SDGs)
            </h3>
            <p className="text-xs text-slate-500">
              Every citizen problem in Ud-Bhavan is tagged to SDG targets for automated state sustainability reports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {sdgs.map((sdg, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className={`w-8 h-8 rounded-xl ${sdg.color} text-white font-black text-xs flex items-center justify-center shadow-xs`}>
                  {sdg.num}
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{sdg.title}</h4>
                <p className="text-[11px] text-slate-500">{sdg.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
