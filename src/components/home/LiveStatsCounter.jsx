import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  CheckCircle,
  GraduationCap,
  Building,
  Layers,
  Rocket,
  Users
} from 'lucide-react';

export const LiveStatsCounter = () => {
  const { lang } = useApp();

  const stats = [
    {
      value: "1,248",
      label: lang === 'hi' ? "समस्याएं दर्ज" : "Problems Reported",
      sub: "From 24 Districts",
      icon: <FileText className="w-5 h-5 text-slate-700" />,
      color: "bg-slate-100 text-slate-800"
    },
    {
      value: "864",
      label: lang === 'hi' ? "चुनौतियाँ स्वीकृत" : "Challenges Approved",
      sub: "AI Validated",
      icon: <CheckCircle className="w-5 h-5 text-emerald-700" />,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      value: "42",
      label: lang === 'hi' ? "विश्वविद्यालय जुड़े" : "Universities Connected",
      sub: "Engineering & Agri",
      icon: <GraduationCap className="w-5 h-5 text-blue-700" />,
      color: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      value: "96",
      label: lang === 'hi' ? "उद्योग भागीदार" : "Industry Partners",
      sub: "CSR & MSMEs",
      icon: <Building className="w-5 h-5 text-amber-700" />,
      color: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      value: "178",
      label: lang === 'hi' ? "सक्रिय परियोजनाएं" : "Projects in Progress",
      sub: "Prototypes & Labs",
      icon: <Layers className="w-5 h-5 text-purple-700" />,
      color: "bg-purple-50 text-purple-800 border-purple-200"
    },
    {
      value: "73",
      label: lang === 'hi' ? "समाधान लागू" : "Solutions Deployed",
      sub: "On-field Reality",
      icon: <Rocket className="w-5 h-5 text-brand-700" />,
      color: "bg-brand-50 text-brand-900 border-brand-300"
    },
    {
      value: "2.4 Lakh+",
      label: lang === 'hi' ? "लाभान्वित नागरिक" : "People Impacted",
      sub: "Verified Social ROI",
      icon: <Users className="w-5 h-5 text-emerald-800" />,
      color: "bg-emerald-600 text-white shadow-md border-emerald-700 font-bold",
      highlight: true
    }
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-200/80 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold text-brand-700 uppercase tracking-widest">
              Platform Vital Statistics
            </span>
            <h2 className="text-lg font-extrabold text-slate-900">
              {lang === 'hi' ? 'धरातल पर वास्तविक प्रगति एवं प्रभाव' : 'Live Ecosystem Pulse & Verified Reach'}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Updated in Real-Time</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                item.highlight
                  ? 'bg-gradient-to-br from-brand-700 to-emerald-800 text-white border-brand-800 col-span-2 sm:col-span-1 shadow-lg'
                  : 'bg-slate-50/70 hover:bg-white hover:shadow-md border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`p-2 rounded-xl ${item.highlight ? 'bg-white/20 text-white' : 'bg-white shadow-sm'}`}>
                  {item.icon}
                </span>
                <span className={`text-[10px] font-bold ${item.highlight ? 'text-amber-300' : 'text-slate-400'}`}>
                  #{idx + 1}
                </span>
              </div>
              <div className={`text-2xl font-black tracking-tight ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                {item.value}
              </div>
              <div className={`text-xs font-bold mt-0.5 line-clamp-1 ${item.highlight ? 'text-emerald-100' : 'text-slate-700'}`}>
                {item.label}
              </div>
              <div className={`text-[10px] mt-1 ${item.highlight ? 'text-emerald-200' : 'text-slate-400'}`}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
