import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { AIBadge } from '../common/AIBadge';
import { ChallengeDetailModal } from './ChallengeDetailModal';
import {
  Search,
  Filter,
  MapPin,
  Users,
  Building2,
  ArrowRight,
  LayoutGrid,
  List,
  Map,
  Sparkles,
  SlidersHorizontal,
  X
} from 'lucide-react';

export const ChallengesList = () => {
  const { challenges, setSelectedChallenge, t, lang } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list' | 'map'

  const categories = [
    "All",
    "Water Management",
    "Agriculture",
    "Accessibility",
    "Healthcare",
    "Clean Energy",
    "Urban Infrastructure",
    "Rural Livelihood",
    "Environment",
    "Sanitation",
    "Public Services"
  ];

  const districts = [
    "All",
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Hazaribagh",
    "Deoghar",
    "Dumka",
    "Giridih",
    "Chaibasa",
    "Khunti"
  ];

  const statuses = [
    "All",
    "Looking for Team",
    "University Matched",
    "In Progress",
    "Prototype",
    "Pilot",
    "Deployed"
  ];

  const priorities = ["All", "Critical", "High", "Medium", "Low"];

  // Filtering logic
  const filteredChallenges = useMemo(() => {
    return challenges.filter((c) => {
      const matchSearch =
        !searchQuery.trim() ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.assignedUni.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory = selectedCategory === 'All' || c.category === selectedCategory;
      const matchDistrict = selectedDistrict === 'All' || c.district.toLowerCase().includes(selectedDistrict.toLowerCase());
      const matchStatus = selectedStatus === 'All' || c.status === selectedStatus;
      const matchPriority = selectedPriority === 'All' || c.priority === selectedPriority;

      return matchSearch && matchCategory && matchDistrict && matchStatus && matchPriority;
    });
  }, [challenges, searchQuery, selectedCategory, selectedDistrict, selectedStatus, selectedPriority]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDistrict('All');
    setSelectedStatus('All');
    setSelectedPriority('All');
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-50 text-red-700 border-red-200';
      case 'High': return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'Medium': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Looking for Team': return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'University Matched': return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'In Progress': return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'Prototype': return 'bg-indigo-100 text-indigo-900 border-indigo-300';
      case 'Pilot': return 'bg-teal-100 text-teal-900 border-teal-300';
      case 'Deployed': return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Public Civic Innovation Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {lang === 'hi' ? 'सामाजिक चुनौतियाँ खोजें' : 'Explore Societal Challenges'}
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Grassroots problems converted into verified challenges with AI scoring and university matching.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-white p-1 rounded-2xl border border-slate-200 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'grid' ? 'bg-brand-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t('tab_grid')}</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'list' ? 'bg-brand-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>{t('tab_list')}</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'map' ? 'bg-brand-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>{t('tab_map')}</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('filter_search_placeholder')}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {/* Category */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800"
              >
                {districts.map((dist) => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800"
              >
                {statuses.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">Priority</label>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800"
              >
                {priorities.map((pr) => (
                  <option key={pr} value={pr}>{pr}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filter count & reset */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Showing <strong className="text-slate-900">{filteredChallenges.length}</strong> challenges found
            </span>
            {(selectedCategory !== 'All' || selectedDistrict !== 'All' || selectedStatus !== 'All' || selectedPriority !== 'All' || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-brand-700 hover:text-brand-900 font-bold flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* JHARKHAND MAP SIMULATION VIEW */}
        {viewMode === 'map' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Map className="w-5 h-5 text-brand-700" />
                  <span>Jharkhand District Challenge Heatmap</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Select a district pin to inspect active university-partnered challenges.
                </p>
              </div>
              <span className="text-xs font-bold bg-brand-50 text-brand-800 px-3 py-1 rounded-full border border-brand-200">
                10 Active Key Districts
              </span>
            </div>

            {/* Visual Interactive District Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { district: "Ranchi", count: 4, uni: "BIT Sindri / CUJ", status: "Active Inundation" },
                { district: "Jamshedpur", count: 2, uni: "NIT Jamshedpur", status: "Transit Mobility" },
                { district: "Dhanbad", count: 3, uni: "IIT ISM Dhanbad", status: "Water Fluoride" },
                { district: "Dumka", count: 2, uni: "BIT Mesra Agri", status: "Solar Storage" },
                { district: "Bokaro", count: 2, uni: "BIT Sindri", status: "Slag Recycling" },
                { district: "Deoghar", count: 1, uni: "CUJ Geo-Labs", status: "Pilgrim Mist Kiosks" },
                { district: "Hazaribagh", count: 1, uni: "VBU Hazaribagh", status: "Elephant Acoustics" },
                { district: "Giridih", count: 1, uni: "VBU Mining Lab", status: "Mica Dust Cyclone" },
                { district: "Chaibasa", count: 1, uni: "Kolhan Univ", status: "Solar Token Meter" },
                { district: "Khunti", count: 1, uni: "IIM Ranchi", status: "Honey Dehydrator" },
              ].map((d, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedDistrict(d.district);
                    setViewMode('grid');
                  }}
                  className="p-4 rounded-2xl border-2 border-slate-200 hover:border-brand-600 bg-slate-50 hover:bg-brand-50/50 cursor-pointer transition-all hover:scale-102 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="w-4 h-4 text-brand-700 group-hover:text-brand-900" />
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-white text-slate-800 border">
                      {d.count} tickets
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-900">
                    {d.district}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 truncate">
                    {d.uni}
                  </p>
                  <div className="mt-2 text-[10px] font-semibold text-brand-700 bg-white px-2 py-0.5 rounded border border-slate-200 text-center">
                    {d.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.length === 0 ? (
              <div className="col-span-3 py-16 text-center bg-white rounded-3xl border border-slate-200 p-8">
                <p className="text-slate-400 text-base font-semibold">
                  No challenges matched your search criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 px-4 py-2 rounded-xl bg-brand-700 text-white text-xs font-bold"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredChallenges.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Header ID & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                        {item.id}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getPriorityBadge(item.priority)}`}>
                          {item.priority}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-800 transition-colors line-clamp-2 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* District & Category */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                      <span className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2 py-0.5 rounded font-medium">
                        <MapPin className="w-3.5 h-3.5 text-brand-600" />
                        {item.district}
                      </span>
                      <span className="bg-brand-50 text-brand-900 font-semibold px-2 py-0.5 rounded border border-brand-200">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.affectedCount}</span>
                      </span>
                      <AIBadge type="match" score={item.matchScore} />
                    </div>

                    <div className="text-[11px] text-slate-600 truncate flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-brand-700 flex-shrink-0" />
                      <span className="font-semibold text-slate-800 truncate">{item.assignedUni}</span>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-1 font-semibold">
                        <span className="text-slate-500">Milestone Progress</span>
                        <span className="text-brand-700">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-brand-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedChallenge(item)}
                      className="w-full py-2.5 rounded-xl bg-slate-50 group-hover:bg-brand-700 group-hover:text-white border border-slate-200 group-hover:border-brand-700 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>{t('btn_view_challenge')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* LIST VIEW */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {filteredChallenges.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedChallenge(item)}
                  className="p-5 hover:bg-slate-50 cursor-pointer transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {item.id}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getPriorityBadge(item.priority)}`}>
                        {item.priority}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-slate-500">
                        • {item.district}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 truncate">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 flex-shrink-0 text-xs">
                    <span className="font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
                      Progress: {item.progress}%
                    </span>
                    <span className="text-slate-500 text-[11px] truncate max-w-[200px]">
                      {item.assignedUni}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Details Modal */}
      <ChallengeDetailModal />
    </div>
  );
};
