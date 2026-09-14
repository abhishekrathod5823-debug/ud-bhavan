import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AIValidationModal } from './AIValidationModal';
import {
  MapPin,
  Camera,
  FileText,
  Video,
  Sparkles,
  Send,
  Zap,
  Info,
  Check,
  AlertCircle
} from 'lucide-react';

export const ReportProblemForm = () => {
  const { t, lang, addChallenge } = useApp();

  const categories = [
    "Water Management",
    "Healthcare",
    "Agriculture",
    "Accessibility",
    "Sanitation",
    "Environment",
    "Clean Energy",
    "Roads & Transport",
    "Urban Infrastructure",
    "Rural Livelihood",
    "Education",
    "Public Services",
    "Disaster Management",
    "Other"
  ];

  const districts = [
    "Ranchi",
    "Jamshedpur (East Singhbhum)",
    "Dhanbad",
    "Bokaro",
    "Hazaribagh",
    "Deoghar",
    "Dumka",
    "Giridih",
    "Chaibasa (West Singhbhum)",
    "Khunti",
    "Palamu",
    "Ramgarh",
    "Koderma",
    "Latehar"
  ];

  const [formData, setFormData] = useState({
    title: "",
    category: "Water Management",
    district: "Ranchi",
    location: "",
    affectedCount: "12,000+",
    description: "",
    impactDescription: "",
    date: new Date().toISOString().split('T')[0],
    name: "Rahul Sharma",
    contact: "98351-XXXXX",
    anonymous: false,
    priority: "High"
  });

  const [locationDetecting, setLocationDetecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [simulationMode, setSimulationMode] = useState('approved');
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "harmu_waterlogging_culvert_01.jpg", size: "2.4 MB", type: "photo" }
  ]);

  // 1-Click Demo Auto-fill for SIH presenters
  const handleAutoFillDemo = () => {
    setFormData({
      title: "Monsoon Stormwater Inundation & Silt Choking in Harmu Basin Drainage",
      category: "Water Management",
      district: "Ranchi",
      location: "Harmu Housing Colony, Near Vidhan Sabha Link Road, Ward 26",
      affectedCount: "12,000+",
      description: "During continuous rains, storm runoff backs up over 3.5 feet deep around culvert outfalls, flooding basements, cutting off residential access, and causing sewage overflows into local drinking borewells.",
      impactDescription: "School buses and ambulances cannot pass for up to 18 hours. Stagnant water generates dengue vector hotspots within 48 hours.",
      date: new Date().toISOString().split('T')[0],
      name: "Rahul Sharma",
      contact: "98351-XXXXX",
      anonymous: false,
      priority: "High"
    });
    setUploadedFiles([
      { name: "harmu_waterlogging_culvert_01.jpg", size: "2.4 MB", type: "photo" },
      { name: "drain_blockage_evidence.mp4", size: "14.2 MB", type: "video" }
    ]);
  };

  const handleUseMyLocation = () => {
    setLocationDetecting(true);
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        district: "Ranchi",
        location: "GPS: 23.3441° N, 85.3096° E (Harmu Ward 26, Ranchi, Jharkhand)"
      }));
      setLocationDetecting(false);
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("Please provide a problem title.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCompleteApproval = () => {
    return addChallenge(formData);
  };

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-700" />
            <span>Citizen Grievance to Innovation Challenge</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('report_title')}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            “{t('report_subtitle')}”
          </p>

          {/* Quick Demo Helper Button */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleAutoFillDemo}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md transition-transform hover:scale-105"
              title="One-click autofill with real Ranchi problem data for SIH judges"
            >
              <Zap className="w-4 h-4 text-slate-950 fill-current" />
              <span>⚡ 1-Click Auto-Fill Demo Data (For SIH Presentation)</span>
            </button>
          </div>
        </div>

        {/* Main Form Box */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 space-y-8"
        >
          {/* Section 1: Problem Basics */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Problem Description & Category
              </h2>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Problem Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Severe Monsoon Waterlogging & Drain Bottlenecks in Ward 26"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Civic Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all bg-white"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  How Many People Are Affected?
                </label>
                <input
                  type="text"
                  value={formData.affectedCount}
                  onChange={(e) => setFormData({ ...formData, affectedCount: e.target.value })}
                  placeholder="e.g. 5,000+ residents / 450 farmers"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Detailed Problem Description *
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe what exactly is happening, since how long, and what fails during daily routine..."
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Direct Community Impact
              </label>
              <input
                type="text"
                value={formData.impactDescription}
                onChange={(e) => setFormData({ ...formData, impactDescription: e.target.value })}
                placeholder="e.g. Ambulances delayed, crops rotting, high dengue prevalence"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Section 2: Location & Coordinates */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Location & Geotagging
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  District (Jharkhand) *
                </label>
                <select
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all bg-white"
                >
                  {districts.map((d) => (
                    <option key={d} value={d.split(' ')[0]}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  GPS Location
                </label>
                <button
                  type="button"
                  onClick={handleUseMyLocation}
                  disabled={locationDetecting}
                  className="w-full px-4 py-3 rounded-xl border border-brand-300 bg-brand-50 hover:bg-brand-100/70 text-brand-900 text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-700" />
                  <span>{locationDetecting ? "Detecting GPS..." : "📍 Use My Current Location"}</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Address / Landmark *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Harmu Housing Colony, Ratu Road Overbridge, Ranchi"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all"
              />
            </div>

            {/* Small Map Placeholder */}
            <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 relative overflow-hidden h-36 flex flex-col justify-end">
              <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="relative z-10 flex items-center justify-between bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xs border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-red-500 fill-current" />
                  <span>{formData.location || "Ranchi Central Coordinates (23.3441° N, 85.3096° E)"}</span>
                </div>
                <span className="text-[10px] bg-brand-100 text-brand-800 font-bold px-2 py-0.5 rounded">
                  Spatial Verified
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Evidence Upload */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Evidence & Ground Documentation
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-brand-500 text-center cursor-pointer transition-colors bg-slate-50/50">
                <Camera className="w-6 h-6 text-brand-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-800 block">Upload Photos</span>
                <span className="text-[10px] text-slate-400">JPG, PNG (up to 10MB)</span>
              </div>

              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-brand-500 text-center cursor-pointer transition-colors bg-slate-50/50">
                <Video className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-800 block">Upload Video</span>
                <span className="text-[10px] text-slate-400">MP4 clip (max 60s)</span>
              </div>

              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-brand-500 text-center cursor-pointer transition-colors bg-slate-50/50">
                <FileText className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-800 block">Upload Documents</span>
                <span className="text-[10px] text-slate-400">Panchayat letter, notice</span>
              </div>
            </div>

            {/* Attached file chips */}
            {uploadedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{f.name}</span>
                    <span className="text-[10px] text-slate-400">({f.size})</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 4: Citizen Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                4
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Contact & Verification
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Citizen Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={formData.anonymous}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all disabled:bg-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile / Email for Updates
                </label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  disabled={formData.anonymous}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200 text-sm outline-none transition-all disabled:bg-slate-100"
                />
              </div>
            </div>

            <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
              <span className="text-xs font-bold text-slate-700">
                Submit Anonymously (Hide identity on public challenge dashboard)
              </span>
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-brand-700 hover:bg-brand-800 active:bg-brand-900 text-white font-black text-base shadow-xl shadow-brand-700/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5 text-amber-300" />
              <span>Submit Problem for AI Validation</span>
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">
              Instant automated AI verification: content check, duplicate scan, and university routing.
            </p>
          </div>
        </form>
      </div>

      {/* AI Validation Simulation Modal */}
      <AIValidationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        onCompleteApproval={handleCompleteApproval}
        simulationMode={simulationMode}
        setSimulationMode={setSimulationMode}
      />
    </div>
  );
};
