import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { NotificationDropdown } from './NotificationDropdown';
import {
  Menu,
  X,
  Bell,
  Languages,
  PlusCircle,
  LayoutDashboard,
  UserCheck,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const Navbar = () => {
  const {
    lang,
    setLang,
    t,
    activeTab,
    setActiveTab,
    currentRole,
    currentUser,
    notifications,
    setIsLoginModalOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const unreadCount = notifications.filter(n => n.unread).length;

  const navLinks = [
    { id: 'home', label: t('nav_home') },
    { id: 'challenges', label: t('nav_challenges') },
    { id: 'stories', label: t('nav_stories') },
    { id: 'impact', label: t('nav_impact') },
    { id: 'dashboard', label: t('nav_dashboard') }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
                          <img
                src="/logo.png"
                onError={(e) => { e.target.onerror = null; e.target.src = "/logo.svg"; }}
                alt="Ud-Bhavan Logo"
                className="w-20 h-20 object-contain"
              />
            
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-sans">
                  Ud<span className="text-brand-700">-Bhavan</span>
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide hidden sm:block">
                {lang === 'hi' ? 'उद्-भवन • नागरिक-विश्वविद्यालय-उद्योग मंच' : 'Civic Problem-to-Solution Ecosystem'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-brand-50 text-brand-800 shadow-sm border border-brand-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Report Problem Button */}
            <button
              onClick={() => handleNavClick('report')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all duration-200 transform hover:-translate-y-0.5 ${
                activeTab === 'report'
                  ? 'bg-brand-800 text-white ring-2 ring-amber-400'
                  : 'bg-brand-700 hover:bg-brand-800 text-white shadow-brand-700/20'
              }`}
            >
              <PlusCircle className="w-4 h-4 text-amber-300" />
              <span>{t('btn_report_problem')}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white text-xs font-bold text-slate-700 transition-colors shadow-sm"
              title="Toggle Language (English / हिंदी)"
            >
              <Languages className="w-3.5 h-3.5 text-brand-700" />
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors relative shadow-sm"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[10px] flex items-center justify-center border-2 border-white shadow">
                    {unreadCount}
                  </span>
                )}
              </button>
              <NotificationDropdown
                isOpen={notificationOpen}
                onClose={() => setNotificationOpen(false)}
              />
            </div>

            {/* Role & Demo Switcher */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-brand-200 bg-brand-50 hover:bg-brand-100/70 text-slate-800 transition-all shadow-sm group"
              title="Click to Switch Demo Persona"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-brand-500">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left leading-tight hidden lg:block">
                <div className="text-[11px] font-bold text-brand-900 flex items-center gap-1">
                  <span>{currentUser.name}</span>
                  <ChevronDown className="w-3 h-3 text-brand-700 group-hover:translate-y-0.5 transition-transform" />
                </div>
                <div className="text-[10px] text-brand-700 font-medium capitalize">
                  {currentUser.role}
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700"
            >
              {lang === 'en' ? 'हिंदी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-500">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                <p className="text-[10px] text-brand-700 capitalize">{currentUser.role}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoginModalOpen(true);
              }}
              className="text-xs font-semibold text-brand-700 px-2 py-1 rounded bg-brand-50"
            >
              Switch Role
            </button>
          </div>

          <button
            onClick={() => handleNavClick('report')}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-700 text-white font-bold text-sm shadow-md"
          >
            <PlusCircle className="w-4 h-4 text-amber-300" />
            <span>{t('btn_report_problem')}</span>
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === link.id
                  ? 'bg-brand-50 text-brand-800'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
