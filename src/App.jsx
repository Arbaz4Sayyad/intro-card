import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import FeaturedWork from "./components/FeaturedWork";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import ScheduleModal from "./components/ScheduleModal";

function MainContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="font-sans antialiased overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen bg-[#09090b] text-zinc-100">
      {/* Floating Pill Navigation Dock */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex flex-col min-h-screen">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
        <Impact />
        <FeaturedWork />
        <TechStack />
        <Experience />
      </main>

      <Footer onOpenSchedule={() => setIsScheduleOpen(true)} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
