import React from 'react';
import { BookOpen, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-stone-800">
        <div>
          <span className="font-serif text-2xl font-medium text-white tracking-tight">
            Flores de Mayo & Santacruzan
          </span>
          <p className="mt-1 text-xs text-stone-400 font-sans max-w-md leading-relaxed">
            School Project on Philippine Cultural & Religious Heritage. Dedicated to preserving
            the memory of Padre Mariano Sevilla (1865) and Philippine folk craftsmanship.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-400">
          <a href="#threed-showcase" className="hover:text-white transition-colors">
            3D Gallery
          </a>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <a href="#photo-gallery" className="hover:text-white transition-colors">
            Photo Archive
          </a>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <a href="#history" className="hover:text-white transition-colors">
            Historical Facts
          </a>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <a href="#sagalas" className="hover:text-white transition-colors">
            Sagalas Guide
          </a>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <a href="#schedule" className="hover:text-white transition-colors">
            Processions
          </a>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <button
            onClick={onOpenReportModal}
            type="button"
            className="text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-400/50 underline-offset-2"
          >
            Bibliography & Citations
          </button>
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors border border-stone-700 self-end md:self-auto"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
        <p>
          Prepared for Educational & Cultural Research · Philippine Intangible Heritage.
        </p>
        <p className="flex items-center gap-1">
          Honoring the artisans of Bulacan, Pasig, Intramuros, and nationwide.
        </p>
      </div>
    </footer>
  );
};
