import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Maximize2, BookOpen } from 'lucide-react';
import { soundscape } from '../utils/audio';

interface NavbarProps {
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
  onOpenReportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPresentationMode,
  onTogglePresentationMode,
  onOpenReportModal
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = soundscape.toggle();
    setIsPlayingAudio(active);
  };

  const navLinks = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'showcase', label: '3D Gallery', href: '#threed-showcase' },
    { id: 'traditions', label: 'Traditions', href: '#traditions' },
    { id: 'culture', label: 'PH Culture', href: '#culture' },
    { id: 'history', label: 'History', href: '#history' },
    { id: 'sagalas', label: 'Sagalas', href: '#sagalas' },
    { id: 'schedule', label: 'Schedule', href: '#schedule' },
    { id: 'quiz', label: 'School Quiz', href: '#quiz' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-xs border-b border-[#35483C]/10 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
        {/* Left: Brand with stylized floral emblem matching Reference Image */}
        <a
          href="#"
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-2.5 group focus:outline-hidden"
        >
          {/* Stylized geometric line floral emblem matching reference logo */}
          <div className="w-8 h-8 text-[#2A3F31] flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="w-7 h-7"
            >
              {/* Petals */}
              <ellipse cx="16" cy="11" rx="4.5" ry="7" transform="rotate(0 16 11)" />
              <ellipse cx="11" cy="18" rx="4.5" ry="7" transform="rotate(-60 11 18)" />
              <ellipse cx="21" cy="18" rx="4.5" ry="7" transform="rotate(60 21 18)" />
              <circle cx="16" cy="16" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-2xl lg:text-[1.75rem] font-normal tracking-tight text-[#1F3025] leading-none">
              flores
            </span>
            <span className="text-[9px] font-sans tracking-[0.24em] uppercase text-[#476050] font-semibold mt-0.5">
              DE MAYO · PILIPINAS
            </span>
          </div>
        </a>

        {/* Center: Clean horizontal nav links with active underline */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[13.5px] font-sans font-normal text-[#2A3E31]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative py-1 transition-colors hover:text-[#17251C] ${
                  isActive ? 'text-[#17251C] font-medium' : 'text-[#3B5041]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#223529] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions & Pill Button */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Audio Chime Button */}
          <button
            onClick={handleAudioToggle}
            type="button"
            className={`p-2 rounded-full transition-all border ${
              isPlayingAudio
                ? 'bg-emerald-100 text-[#243B2C] border-emerald-300 shadow-xs'
                : 'bg-white/40 text-[#3B5041] border-[#3B5041]/20 hover:bg-white/70'
            }`}
            title="Toggle peaceful processional chimes"
            aria-label="Toggle bell chimes soundscape"
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 text-emerald-800" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#3B5041]" />
            )}
          </button>

          {/* School Project Info Modal */}
          <button
            onClick={onOpenReportModal}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#22352A] bg-white/40 hover:bg-white/60 backdrop-blur-xs border border-[#3A4D40]/25 rounded-full transition-colors whitespace-nowrap"
            title="School Project Information & Citations"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#354C3D]" />
            <span>Project Citations</span>
          </button>

          {/* Primary Action Button: Solid Moss Green Pill matching "Join Bloom" */}
          <button
            onClick={onTogglePresentationMode}
            type="button"
            className="px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-medium tracking-wide text-white bg-[#47604F] hover:bg-[#394E3F] rounded-full shadow-xs hover:shadow-md transition-all whitespace-nowrap"
          >
            {isPresentationMode ? 'Exit 4:3 Stage' : '4:3 Presentation'}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="p-2 text-[#2A3E31] hover:text-black lg:hidden focus:outline-hidden"
            aria-label="Open mobile navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-[#35483C]/10 px-6 pt-3 pb-6 space-y-3 animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-[#2A3E31] hover:text-[#17251C] font-medium text-sm rounded-lg hover:bg-stone-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#35483C]/10 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                onTogglePresentationMode();
                setIsMobileMenuOpen(false);
              }}
              type="button"
              className="flex-1 py-2 text-xs font-medium text-center bg-[#47604F] text-white rounded-full shadow-xs"
            >
              {isPresentationMode ? 'Exit 4:3 Stage' : '4:3 Presentation'}
            </button>
            <button
              onClick={() => {
                onOpenReportModal();
                setIsMobileMenuOpen(false);
              }}
              type="button"
              className="flex-1 py-2 text-xs font-medium text-center bg-stone-100 text-[#2A3E31] border border-stone-300 rounded-full"
            >
              School Handout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

