import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  MapPin,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const SuccessStoriesPage = () => {
  const { successStories, setActiveTab, lang } = useApp();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Field Proven Deployments</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Proven Civic Impact & Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Real societal bottlenecks solved through university faculty-student teams, sponsored by industry CSR, and deployed in Jharkhand communities.
          </p>
        </div>

        {/* Detailed Story Cards */}
        <div className="space-y-10">
          {successStories.map((story, idx) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:shadow-xl transition-all duration-300"
            >
              {/* Image & Header Column */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-700" />
                    {story.district}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold shadow-sm">
                    {story.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[11px] font-mono text-amber-300 font-bold">CASE STUDY #{idx + 1}</span>
                  <h2 className="text-xl sm:text-2xl font-black leading-tight">
                    {story.title}
                  </h2>
                  <p className="text-xs text-slate-200">
                    Lead: {story.leadInstitute}
                  </p>
                </div>
              </div>

              {/* 4 Pillars Breakdown (Problem, Solution, Implementation, Impact) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Problem */}
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-red-800 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      <span>The Ground Problem (Before)</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {story.before.situation}
                    </p>
                    <p className="text-xs font-bold text-red-900 pt-1">
                      Pain Metric: {story.before.metrics}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-blue-600" />
                      <span>Student-Developed Solution</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {story.solution.description}
                    </p>
                  </div>

                  {/* After Impact */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Measurable Civic Result (After)</span>
                    </div>
                    <p className="text-sm font-black text-emerald-950">
                      {story.after.metrics}
                    </p>
                    <p className="text-xs text-emerald-800 leading-relaxed mt-1">
                      {story.after.situation}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div>
                    <span>CSR Sponsor: </span>
                    <strong className="text-slate-900">{story.partner}</strong>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Deployment Cycle: {story.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={() => {
              setActiveTab('report');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md"
          >
            <span>Have a local problem in your community? Start the next success story</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>

      </div>
    </div>
  );
};
