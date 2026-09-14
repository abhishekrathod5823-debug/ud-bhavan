import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { DemoLoginModal } from './components/common/DemoLoginModal';

// Home sections
import { HeroSection } from './components/home/HeroSection';
import { LiveStatsCounter } from './components/home/LiveStatsCounter';
import { HowItWorks } from './components/home/HowItWorks';
import { FeaturedChallenges } from './components/home/FeaturedChallenges';
import { StoriesPreview } from './components/home/StoriesPreview';
import { HomeCTA } from './components/home/HomeCTA';

// Page Views
import { ReportProblemForm } from './components/report/ReportProblemForm';
import { ChallengesList } from './components/challenges/ChallengesList';
import { SuccessStoriesPage } from './components/stories/SuccessStoriesPage';
import { ImpactDashboard } from './components/impact/ImpactDashboard';
import { DashboardView } from './components/dashboards/DashboardView';

const MainContent = () => {
  const { activeTab } = useApp();

  return (
    <main className="min-h-[calc(100vh-80px)]">
      {activeTab === 'home' && (
        <>
          <HeroSection />
          <LiveStatsCounter />
          <HowItWorks />
          <FeaturedChallenges />
          <StoriesPreview />
          <HomeCTA />
        </>
      )}

      {activeTab === 'report' && <ReportProblemForm />}
      {activeTab === 'challenges' && <ChallengesList />}
      {activeTab === 'stories' && <SuccessStoriesPage />}
      {activeTab === 'impact' && <ImpactDashboard />}
      {activeTab === 'dashboard' && <DashboardView />}
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white font-sans">
        {/* Global Navigation */}
        <Navbar />

        {/* Dynamic Route View */}
        <div className="flex-1">
          <MainContent />
        </div>

        {/* Role Switcher Modal */}
        <DemoLoginModal />

        {/* Footer */}
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
