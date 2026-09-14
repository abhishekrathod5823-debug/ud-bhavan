import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Eye,
  ExternalLink
} from 'lucide-react';

export const AIValidationModal = ({
  isOpen,
  onClose,
  formData,
  onCompleteApproval,
  simulationMode = 'approved', // 'approved' | 'duplicate' | 'rejected'
  setSimulationMode
}) => {
  const { triggerConfetti, setSelectedChallenge, challenges, setActiveTab } = useApp();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(true);
  const [createdChallenge, setCreatedChallenge] = useState(null);

  const steps = [
    "Checking content quality & syntactic clarity...",
    "Detecting spam, toxic language & inappropriate content...",
    "Analyzing civic category & domain classification...",
    "Validating GPS coordinates & district mapping...",
    "Checking database for duplicate challenges & existing civic tickets...",
    "Calculating community impact score & prioritization weighting..."
  ];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStepIndex(0);
      setIsProcessing(true);
      setCreatedChallenge(null);
      return;
    }

    // Step-by-step scanner progression
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setCurrentStepIndex(current);
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        if (simulationMode === 'approved') {
          const newCh = onCompleteApproval();
          setCreatedChallenge(newCh);
        }
      }
    }, 600);

    return () => clearInterval(interval);
  }, [isOpen, simulationMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Simulation Edge-Case Switcher (for SIH Judges) */}
        <div className="mb-4 pb-3 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>AI Simulation Mode:</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
            <button
              onClick={() => {
                setSimulationMode('approved');
                setCurrentStepIndex(0);
                setIsProcessing(true);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                simulationMode === 'approved' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Approval Flow
            </button>
            <button
              onClick={() => {
                setSimulationMode('duplicate');
                setCurrentStepIndex(0);
                setIsProcessing(true);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                simulationMode === 'duplicate' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Duplicate Warning
            </button>
            <button
              onClick={() => {
                setSimulationMode('rejected');
                setCurrentStepIndex(0);
                setIsProcessing(true);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                simulationMode === 'rejected' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Flagged Content
            </button>
          </div>
        </div>

        {/* PROCESSING STATE */}
        {isProcessing ? (
          <div className="text-center py-8 space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-brand-200 border-t-brand-700 animate-spin" />
              <div className="absolute inset-2 rounded-full bg-brand-50 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-brand-700 animate-pulse" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                AI Engine Analyzing Submission...
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Deep NLP classification & spatial civic verification
              </p>
            </div>

            {/* Checklist of steps */}
            <div className="space-y-2.5 max-w-md mx-auto text-left bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {steps.map((st, idx) => {
                const isPassed = idx < currentStepIndex;
                const isCurrent = idx === currentStepIndex;
                return (
                  <div key={idx} className="flex items-center gap-2.5 text-xs transition-colors">
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    ) : isCurrent ? (
                      <RefreshCw className="w-4 h-4 text-brand-600 animate-spin flex-shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-300 flex-shrink-0" />
                    )}
                    <span className={`font-medium ${isPassed ? 'text-slate-800' : isCurrent ? 'text-brand-900 font-bold' : 'text-slate-400'}`}>
                      {st}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* RESULT STATES */
          <div>
            {simulationMode === 'approved' && (
              <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="text-center space-y-1">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    AI Validation Complete
                  </h3>
                  <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider">
                    Status: APPROVED
                  </div>
                </div>

                {/* Score Matrix Card */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Assigned Category</span>
                    <span className="font-bold text-slate-800 text-xs">{formData.category || 'Water Management'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Priority Rating</span>
                    <span className="font-bold text-amber-600 text-xs">{formData.priority || 'High'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Duplicate Risk</span>
                    <span className="font-bold text-emerald-700 text-xs">8% (Unique Ticket)</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Location Confidence</span>
                    <span className="font-bold text-slate-800 text-xs">96% ({formData.district || 'Ranchi'})</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-slate-100 col-span-2 sm:col-span-2">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">AI University Match</span>
                    <span className="font-bold text-brand-800 text-xs">Birsa Institute of Technology (BIT Sindri) — 94%</span>
                  </div>
                </div>

                {/* Generated Challenge Box */}
                <div className="p-4 rounded-2xl bg-brand-50 border border-brand-300 text-center">
                  <p className="text-xs text-brand-900 font-medium">
                    Your problem has been converted into an official public challenge:
                  </p>
                  <div className="text-2xl font-mono font-black text-brand-900 my-1 tracking-wider">
                    {createdChallenge?.id || 'UB-2026-00482'}
                  </div>
                  <p className="text-[11px] text-brand-700">
                    Matched with academic faculty labs and broadcast to state CSR sponsors.
                  </p>
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      if (createdChallenge) {
                        setSelectedChallenge(createdChallenge);
                        setActiveTab('challenges');
                      } else if (challenges.length > 0) {
                        setSelectedChallenge(challenges[0]);
                        setActiveTab('challenges');
                      }
                    }}
                    className="flex-1 py-3.5 px-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-lg shadow-brand-700/20 flex items-center justify-center gap-2"
                  >
                    <span>View Challenge Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      setActiveTab('challenges');
                    }}
                    className="py-3.5 px-4 rounded-2xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm"
                  >
                    Explore All
                  </button>
                </div>
              </div>
            )}

            {/* DUPLICATE WARNING STATE */}
            {simulationMode === 'duplicate' && (
              <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="text-center space-y-1">
                  <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Possible Duplicate Found
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Our AI similarity algorithm detected an existing challenge with 87% semantic and geographic overlap in the same ward.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                    <span>Matched Existing Challenge:</span>
                    <span className="font-mono">UB-2026-00391</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Low-Cost Micro-Storage & Drainage Overhaul
                  </h4>
                  <p className="text-xs text-slate-600">
                    Reported 14 days ago in the same jurisdiction. Currently assigned to BIT Mesra with active student prototyping.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      if (challenges.length > 0) {
                        setSelectedChallenge(challenges.find(c => c.id === 'UB-2026-00391') || challenges[0]);
                        setActiveTab('challenges');
                      }
                    }}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Existing Challenge</span>
                  </button>

                  <button
                    onClick={() => {
                      setSimulationMode('approved');
                      onCompleteApproval();
                    }}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs"
                  >
                    Continue Anyway (Unique Aspect)
                  </button>
                </div>
              </div>
            )}

            {/* REJECTED / SPAM STATE */}
            {simulationMode === 'rejected' && (
              <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="text-center space-y-1">
                  <div className="w-14 h-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <XCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Submission Requires Citizen Revision
                  </h3>
                  <div className="inline-block px-3 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-black uppercase">
                    Status: FLAGGED FOR REVIEW
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs text-red-900 space-y-1.5">
                  <p className="font-bold">Reason for Flag:</p>
                  <p className="text-slate-700">
                    Insufficient photographic evidence or vague problem boundaries. AI could not pinpoint GPS coordinates or quantify citizen impact.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow"
                  >
                    Back to Edit Form
                  </button>
                  <button
                    onClick={() => {
                      setSimulationMode('approved');
                      onCompleteApproval();
                    }}
                    className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50"
                  >
                    Override Demo to Approved
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
