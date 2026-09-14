import React from 'react';
import { useApp } from '../../context/AppContext';
import { AIBadge } from '../common/AIBadge';
import {
  MapPin,
  Users,
  Building2,
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export const FeaturedChallenges = () => {
  const { challenges, setSelectedChallenge, setActiveTab, t, lang } = useApp();

  const featured = challenges.slice(0, 6);

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'High':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'Medium':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Looking for Team':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'University Matched':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'In Progress':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'Prototype':
        return 'bg-indigo-100 text-indigo-900 border-indigo-300';
      case 'Pilot':
        return 'bg-teal-100 text-teal-900 border-teal-300';
      case 'Deployed':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const handleOpenChallenge = (challenge) => {
    setSelectedChallenge(challenge);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase mb-2">
              High Priority Citizen Bottlenecks
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t('featured_challenges')}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              {t('featured_subtitle')}
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('challenges');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-brand-700 text-brand-700 hover:bg-brand-50 font-bold text-sm transition-all"
          >
            <span>{t('btn_view_all')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {item.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getPriorityBadge(item.priority)}`}>
                      {item.priority}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-800 transition-colors line-clamp-2 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* District & Category */}
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-brand-600" />
                    {item.district}
                  </span>
                  <span className="bg-brand-50 text-brand-900 font-semibold px-2 py-0.5 rounded border border-brand-200">
                    {item.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Section */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                {/* Metrics */}
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.affectedCount}</span>
                  </span>
                  <AIBadge type="match" score={item.matchScore} />
                </div>

                {/* University Assigned */}
                <div className="text-[11px] text-slate-600 truncate flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
                  <span className="font-semibold text-slate-800 truncate">{item.assignedUni}</span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1 font-semibold">
                    <span className="text-slate-500">Project Progress</span>
                    <span className="text-brand-700">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-brand-600 to-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>

                {/* View Details Action */}
                <button
                  onClick={() => handleOpenChallenge(item)}
                  className="w-full py-2.5 rounded-xl bg-white group-hover:bg-brand-700 group-hover:text-white border border-slate-200 group-hover:border-brand-700 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>{t('btn_view_challenge')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-700 group-hover:text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
