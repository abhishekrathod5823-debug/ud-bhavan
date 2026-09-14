import React from 'react';
import { Sparkles, Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const AIBadge = ({ type = 'validated', score = null, text = null, size = 'sm' }) => {
  const getBadgeDetails = () => {
    switch (type) {
      case 'validated':
        return {
          icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />,
          label: text || 'AI Validated',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        };
      case 'match':
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-brand-600" />,
          label: text || (score ? `AI Match: ${score}%` : 'AI Matched'),
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold'
        };
      case 'categorized':
        return {
          icon: <Cpu className="w-3.5 h-3.5 text-blue-600" />,
          label: text || 'AI Categorized',
          bg: 'bg-blue-50 text-blue-800 border-blue-200'
        };
      case 'priority':
        return {
          icon: <Zap className="w-3.5 h-3.5 text-amber-600" />,
          label: text || 'AI Priority: High',
          bg: 'bg-amber-50 text-amber-800 border-amber-200'
        };
      case 'team':
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />,
          label: text || 'AI Team Suggestion',
          bg: 'bg-purple-50 text-purple-800 border-purple-200'
        };
      case 'partner':
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-indigo-600" />,
          label: text || 'AI Partner Recommendation',
          bg: 'bg-indigo-50 text-indigo-800 border-indigo-200'
        };
      case 'impact':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />,
          label: text || 'AI Impact Analysis',
          bg: 'bg-teal-50 text-teal-800 border-teal-200'
        };
      default:
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-emerald-600" />,
          label: text || 'AI Verified',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        };
    }
  };

  const { icon, label, bg } = getBadgeDetails();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs border font-medium transition-all duration-200 shadow-sm ${bg} ${
        size === 'lg' ? 'text-sm px-3.5 py-1.5' : ''
      }`}
    >
      {icon}
      <span>{label}</span>
    </span>
  );
};
