import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreeDScrollShowcase } from './components/ThreeDScrollShowcase';
import { PhotoGallery } from './components/PhotoGallery';
import { TraditionsSection } from './components/TraditionsSection';
import { CulturalHeritageSection } from './components/CulturalHeritageSection';
import { VirtualArkoWorkshop } from './components/VirtualArkoWorkshop';
import { HistorySection } from './components/HistorySection';
import { SagalasGuide } from './components/SagalasGuide';
import { ProcessionSchedule } from './components/ProcessionSchedule';
import { SchoolQuiz } from './components/SchoolQuiz';
import { PresentationStage } from './components/PresentationStage';
import { SchoolProjectModal } from './components/SchoolProjectModal';
import { FloatingPetals } from './components/FloatingPetals';
import { Footer } from './components/Footer';

export default function App() {
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      {/* Floating Petals Ambient Particle Animation */}
      <FloatingPetals />

      {/* Navigation Bar */}
      <Navbar
        isPresentationMode={isPresentationOpen}
        onTogglePresentationMode={() => setIsPresentationOpen(!isPresentationOpen)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
      />

      <main>
        {/* Hero Section with luminous aesthetic & frosted cards */}
        <Hero onOpenPresentation={() => setIsPresentationOpen(true)} />

        {/* 4:3 Ratio 3D Scroll Showcase */}
        <ThreeDScrollShowcase />

        {/* Interactive Arko Studio Workshop */}
        <VirtualArkoWorkshop />

        {/* Photo Gallery & High-Res Cultural Lightbox */}
        <PhotoGallery />

        {/* Living Traditions & "Dios Te Salve" Hymn */}
        <TraditionsSection />

        {/* Philippine Cultural Heritage & Regional Traditions */}
        <CulturalHeritageSection />

        {/* Historical Facts & Origins Timeline */}
        <HistorySection />

        {/* Sagalas & Reynas Guide (Order of Procession) */}
        <SagalasGuide />

        {/* Schedule of Local Processions across Provinces */}
        <ProcessionSchedule />

        {/* Interactive Classroom Review Quiz */}
        <SchoolQuiz />
      </main>

      {/* Footer with Academic Citations */}
      <Footer onOpenReportModal={() => setIsReportModalOpen(true)} />

      {/* Projector-Ready 4:3 Presentation Stage Modal */}
      <PresentationStage
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />

      {/* School Project Handout & Bibliography Modal */}
      <SchoolProjectModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}
