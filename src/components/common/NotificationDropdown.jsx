import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Check, Sparkles, Handshake, CheckCircle2, FileText } from 'lucide-react';

export const NotificationDropdown = ({ isOpen, onClose }) => {
  const { notifications, markAllNotificationsRead, setActiveTab, setSelectedChallenge, challenges } = useApp();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'ai':
        return <Sparkles className="w-4 h-4 text-brand-600" />;
      case 'partner':
        return <Handshake className="w-4 h-4 text-indigo-600" />;
      case 'project':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case 'impact':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      default:
        return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  const handleNotificationClick = (item) => {
    onClose();
    if (item.type === 'ai' || item.type === 'project' || item.type === 'partner') {
      setActiveTab('challenges');
      if (challenges.length > 0) {
        setSelectedChallenge(challenges[0]);
      }
    } else if (item.type === 'impact') {
      setActiveTab('impact');
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800 text-sm">Notifications</span>
          <span className="text-xs bg-brand-100 text-brand-800 font-bold px-2 py-0.5 rounded-full">
            {notifications.filter(n => n.unread).length} new
          </span>
        </div>
        <button
          onClick={markAllNotificationsRead}
          className="text-xs text-brand-700 hover:text-brand-800 font-medium flex items-center gap-1 hover:underline"
        >
          <Check className="w-3.5 h-3.5" />
          Mark all read
        </button>
      </div>

      <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
        {notifications.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            No notifications right now
          </div>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNotificationClick(item)}
              className={`p-3.5 hover:bg-slate-50 cursor-pointer transition-colors flex items-start gap-3 ${
                item.unread ? 'bg-brand-50/40' : ''
              }`}
            >
              <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-100 flex-shrink-0">
                {getIcon(item.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-xs font-semibold text-slate-900 truncate">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 flex-shrink-0">{item.time}</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.message}
                </p>
              </div>
              {item.unread && (
                <span className="w-2 h-2 rounded-full bg-brand-500 self-center flex-shrink-0" />
              )}
            </div>
          ))
        )}
      </div>

      <div className="pt-2 px-4 border-t border-slate-100 text-center">
        <button
          onClick={() => {
            onClose();
            setActiveTab('dashboard');
          }}
          className="text-xs text-slate-500 hover:text-brand-700 font-medium transition-colors"
        >
          View live dashboard updates →
        </button>
      </div>
    </div>
  );
};
