import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const StoriesPreview = () => {
  const { successStories, setActiveTab, t, lang } = useApp();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase mb-2">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>Ground Realities Transformed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t('stories_title')}
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              {t('stories_subtitle')}
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-300 hover:border-brand-700 text-slate-800 hover:text-brand-700 font-bold text-sm transition-all bg-white"
          >
            <span>{lang === 'hi' ? 'सभी सफलता की कहानियाँ' : 'Explore All Case Studies'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stories Before -> Solution -> After Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.slice(0, 3).map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Header Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow">
                    {story.district}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-extrabold text-white leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-[11px] text-amber-300 font-medium mt-0.5">
                    {story.leadInstitute}
                  </p>
                </div>
              </div>

              {/* Before -> Solution -> After Flow */}
              <div className="p-6 space-y-4 flex-1">
                {/* Before */}
                <div className="p-3 rounded-2xl bg-red-50/60 border border-red-100">
                  <span className="text-[10px] font-extrabold uppercase text-red-700 tracking-wider">
                    Before Intervention:
                  </span>
                  <p className="text-xs text-slate-700 font-medium mt-1 leading-snug">
                    {story.before.metrics}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <span className="text-[10px] font-extrabold uppercase text-blue-700 tracking-wider">
                    Student-Developed Solution:
                  </span>
                  <p className="text-xs text-slate-700 font-medium mt-1 leading-snug">
                    {story.solution.tag} — {story.solution.description}
                  </p>
                </div>

                {/* After Impact */}
                <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <span className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Measured Result (After):</span>
                  </span>
                  <p className="text-xs text-emerald-950 font-bold mt-1 leading-snug">
                    {story.after.metrics}
                  </p>
                </div>
              </div>

              {/* Card Bottom */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Sponsored by: <strong className="text-slate-800">{story.partner}</strong></span>
                <span className="font-mono text-[11px] text-slate-400">{story.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
