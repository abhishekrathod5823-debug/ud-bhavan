import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { translations } from '../data/translations';
import { initialChallenges } from '../data/initialChallenges';
import { initialUniversities } from '../data/initialUniversities';
import { initialPartners } from '../data/initialPartners';
import { initialSuccessStories } from '../data/initialSuccessStories';

const AppContext = createContext();

const initialNotifications = [
  {
    id: 1,
    title: "AI Match Ready",
    message: "New challenge UB-2026-00482 matched with BIT Sindri (94% compatibility).",
    time: "10 mins ago",
    unread: true,
    type: "ai"
  },
  {
    id: 2,
    title: "Industry CSR Pledge",
    message: "Tata Steel CSR committed ₹4.5 Lakhs for Harmu Drainage Telemetry.",
    time: "1 hour ago",
    unread: true,
    type: "partner"
  },
  {
    id: 3,
    title: "Milestone Verified",
    message: "Dumka Solar Cold Chamber prototype passed laboratory thermal tests.",
    time: "3 hours ago",
    unread: false,
    type: "project"
  },
  {
    id: 4,
    title: "Field Deployment",
    message: "Khunti Honey Dehydrator operational in 4 tribal SHG centers.",
    time: "Yesterday",
    unread: false,
    type: "impact"
  }
];

export const AppProvider = ({ children }) => {
  // Language
  const [lang, setLang] = useState(() => localStorage.getItem('ud_bhavan_lang') || 'en');

  // Role: citizen | university | industry | admin
  const [currentRole, setCurrentRole] = useState(() => localStorage.getItem('ud_bhavan_role') || 'citizen');

  // Navigation tab
  const [activeTab, setActiveTab] = useState('home');

  // Challenges state
  const [challenges, setChallenges] = useState(() => {
    const saved = localStorage.getItem('ud_bhavan_challenges');
    return saved ? JSON.parse(saved) : initialChallenges;
  });

  // Selected challenge for modal view
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  // Universities & Partners
  const [universities] = useState(initialUniversities);
  const [partners, setPartners] = useState(initialPartners);
  const [successStories] = useState(initialSuccessStories);

  // Notifications
  const [notifications, setNotifications] = useState(initialNotifications);

  // Login Modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // AI Parameter tuning for Admin
  const [adminSettings, setAdminSettings] = useState({
    validationThreshold: 80,
    duplicateThreshold: 65,
    priorityWeight: 85,
    matchingThreshold: 75
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('ud_bhavan_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('ud_bhavan_role', currentRole);
  }, [currentRole]);

  useEffect(() => {
    localStorage.setItem('ud_bhavan_challenges', JSON.stringify(challenges));
  }, [challenges]);

  // Translation helper
  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#16a34a', '#f59e0b', '#22c55e', '#ffffff']
      });
    } catch (e) {
      console.log('Confetti triggered', e);
    }
  };

  // Add new challenge from Citizen Report
  const addChallenge = (formData) => {
    const newId = `UB-2026-00${Math.floor(100 + Math.random() * 900)}`;
    const newChallenge = {
      id: newId,
      title: formData.title,
      description: formData.description,
      category: formData.category,
      district: formData.district,
      location: formData.location || `${formData.district} Center`,
      reportedBy: formData.anonymous ? "Concerned Citizen (Anonymous)" : (formData.name || "Rahul Sharma"),
      reportedDate: new Date().toISOString().split('T')[0],
      priority: formData.priority || "High",
      status: "University Matched",
      progress: 35,
      affectedCount: formData.affectedCount ? `${formData.affectedCount} Residents` : "5,000+ Citizens",
      assignedUni: "Birsa Institute of Technology (BIT Sindri)",
      matchScore: 94,
      duplicateScore: 8,
      impactScore: 91,
      aiRecommendation: `Autonomous IoT sensor network and civil remediation proposed for ${formData.category} challenge in ${formData.district}.`,
      suggestedDepts: ["Civil Engineering", "Environmental Engineering", "Computer Science"],
      team: {
        faculty: "Dr. Ananya Singh (BIT Sindri)",
        coFaculty: "Prof. Rakesh Kumar (Civil Lab)",
        students: [
          { name: "Aarav Gupta", role: "Sensor Architecture" },
          { name: "Priya Murmu", role: "Field Validation & Data" },
          { name: "Rohit Verma", role: "Hardware Assembly" },
          { name: "Neha Soren", role: "Citizen Dashboard Integration" }
        ]
      },
      industryPartners: [
        {
          name: "Tata Steel Foundation (CSR)",
          type: "CSR & Infrastructure Grant",
          support: "₹4.5 Lakh Grant + Equipment Testing",
          status: "Active Sponsor"
        }
      ],
      timeline: [
        { name: "Problem Reported", date: "Just now", status: "completed" },
        { name: "AI Validated", date: "Just now", status: "completed" },
        { name: "University Matched", date: "Automated", status: "completed" },
        { name: "Team Formed", date: "Reviewing", status: "current" },
        { name: "Research & Simulation", date: "Upcoming", status: "upcoming" },
        { name: "Hardware Prototype", date: "Upcoming", status: "upcoming" },
        { name: "Field Test", date: "Upcoming", status: "upcoming" },
        { name: "Pilot Deployment", date: "Upcoming", status: "upcoming" },
        { name: "City-Wide Deployed", date: "Upcoming", status: "upcoming" }
      ],
      updates: [
        { date: "Today", text: `Problem registered by citizen, AI approved with 94% domain match, dispatched to BIT Sindri innovation pool.` }
      ],
      evidenceImages: [
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80"
      ]
    };

    setChallenges(prev => [newChallenge, ...prev]);

    // Add alert notification
    setNotifications(prev => [
      {
        id: Date.now(),
        title: "New Challenge Created",
        message: `${newId} (${formData.title}) approved and matched with BIT Sindri.`,
        time: "Just now",
        unread: true,
        type: "ai"
      },
      ...prev
    ]);

    triggerConfetti();
    return newChallenge;
  };

  // University accepts AI suggested team
  const acceptUniversityTeam = (challengeId) => {
    setChallenges(prev => prev.map(ch => {
      if (ch.id === challengeId) {
        return {
          ...ch,
          status: "In Progress",
          progress: Math.max(ch.progress, 55),
          timeline: ch.timeline.map((t, i) => i <= 3 ? { ...t, status: "completed" } : (i === 4 ? { ...t, status: "current" } : t)),
          updates: [
            { date: "Today", text: "Faculty mentor Dr. Ananya Singh accepted AI suggested student team. Research phase commenced." },
            ...ch.updates
          ]
        };
      }
      return ch;
    }));

    setNotifications(prev => [
      {
        id: Date.now(),
        title: "Team Mobilized",
        message: `Dr. Ananya Singh & student team formed for ${challengeId}.`,
        time: "Just now",
        unread: true,
        type: "project"
      },
      ...prev
    ]);

    triggerConfetti();
  };

  // Industry pledges support
  const pledgeSupport = (challengeId, partnerPledge) => {
    setChallenges(prev => prev.map(ch => {
      if (ch.id === challengeId) {
        const newPartners = [...ch.industryPartners, {
          name: partnerPledge.partnerName || "Tata Steel Foundation (CSR)",
          type: partnerPledge.supportType || "CSR Funding & Mentorship",
          support: partnerPledge.amount || "₹3.5 Lakh Grant & Lab Access",
          status: "Active Sponsor"
        }];
        return {
          ...ch,
          industryPartners: newPartners,
          progress: Math.min(100, ch.progress + 15),
          updates: [
            { date: "Today", text: `${partnerPledge.partnerName || "Industry Partner"} pledged ${partnerPledge.supportType} to accelerate field testing.` },
            ...ch.updates
          ]
        };
      }
      return ch;
    }));

    setNotifications(prev => [
      {
        id: Date.now(),
        title: "CSR Support Pledged",
        message: `${partnerPledge.partnerName || "Industry Partner"} backed challenge ${challengeId}.`,
        time: "Just now",
        unread: true,
        type: "partner"
      },
      ...prev
    ]);

    triggerConfetti();
  };

  // Mark all notifications read
  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  // Current user persona helper
  const getCurrentUser = () => {
    switch (currentRole) {
      case 'university':
        return {
          name: "Dr. Ananya Singh",
          title: "Lead Professor, Dept of Water & Environment",
          org: "Birsa Institute of Technology (BIT Sindri)",
          role: "University Mentor",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
        };
      case 'industry':
        return {
          name: "Vikram Sengupta",
          title: "Head of CSR & Innovation Partnerships",
          org: "Tata Steel Foundation",
          role: "Industry CSR Partner",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        };
      case 'admin':
        return {
          name: "Shri Rajeshwar Sinha, IAS",
          title: "Mission Director, State Civic Innovation Cell",
          org: "Higher Education & Innovation Dept, Jharkhand",
          role: "State Admin",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
        };
      default:
        return {
          name: "Rahul Sharma",
          title: "Civic Activist & Citizen",
          org: "Harmu Basin Resident Welfare, Ranchi",
          role: "Citizen",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
        };
    }
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t,
        currentRole,
        setCurrentRole,
        currentUser: getCurrentUser(),
        activeTab,
        setActiveTab,
        challenges,
        setChallenges,
        selectedChallenge,
        setSelectedChallenge,
        universities,
        partners,
        setPartners,
        successStories,
        notifications,
        markAllNotificationsRead,
        isLoginModalOpen,
        setIsLoginModalOpen,
        addChallenge,
        acceptUniversityTeam,
        pledgeSupport,
        adminSettings,
        setAdminSettings,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
