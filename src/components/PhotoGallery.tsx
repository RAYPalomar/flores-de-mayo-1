import React, { useState } from 'react';
import { Maximize2, X, Download, Share2, ZoomIn, Check, Info } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/floresData';
import { RevealOnScroll } from './RevealOnScroll';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [copiedNote, setCopiedNote] = useState(false);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'procession', label: 'Grand Procession' },
    { id: 'offering', label: 'Alay kay Maria' },
    { id: 'arch', label: 'Bamboo Arko' },
    { id: 'sagalas', label: 'Sagalas Court' }
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleCopyCaption = (item: GalleryItem) => {
    const citation = `"${item.title}" (${item.subtitle}) - Flores de Mayo Philippine Heritage Archive. ${item.description} Context: ${item.historicalContext}`;
    navigator.clipboard.writeText(citation);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  return (
    <section id="photo-gallery" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with smooth reveal */}
        <RevealOnScroll direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-1.5 font-medium">
              Visual Documentation Archive
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
              Photo Gallery & Cultural Artifacts
            </h2>
            <p className="mt-2 text-stone-600 text-sm max-w-xl font-sans">
              High-resolution photo collection in canonical 4:3 composition documenting the rites,
              attire, and artisan crafts of Flores de Mayo.
            </p>
          </div>

          {/* Interactive Category Filter with instant visual feedback */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl max-w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 active:scale-95 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* 4:3 Aspect Ratio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredPhotos.map((item, idx) => (
            <RevealOnScroll key={item.id} delay={idx * 80} direction="up">
              <div
                onClick={() => setSelectedPhoto(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex flex-col"
              >
                {/* 4:3 Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle scrim on hover with fade */}
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-stone-900 text-xs font-medium flex items-center gap-1.5 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-4 h-4 text-[#465F4E]" />
                      <span>View 4:3 Fullscreen</span>
                    </div>
                  </div>

                  {/* Top Corner Metadata tag */}
                  <div className="absolute top-3 left-3 bg-stone-900/70 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md font-serif">
                    Aspect 4:3 · {item.category.toUpperCase()}
                  </div>
                </div>

                {/* Photo Description Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                      <span className="font-serif italic text-[#465F4E]">Fig. {item.id}</span>
                      <span aria-hidden="true">·</span>
                      <span>Philippine Folk Tradition</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 group-hover:text-[#2A4434] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-serif italic text-stone-600 mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="truncate pr-2 italic font-serif">
                      {item.keyFact}
                    </span>
                    <span className="text-[#465F4E] font-medium whitespace-nowrap group-hover:translate-x-1 transition-transform duration-200">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Lightbox Modal with smooth scale & backdrop blur animation */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn transition-opacity duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-[#FAF8F5] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 animate-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-serif text-[#22352A] font-semibold uppercase tracking-wider">
                    Archive Detail
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>4:3 Native Aspect Ratio</span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  type="button"
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 active:scale-90 rounded-full transition-all duration-150 cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 4:3 Image Showcase in Lightbox */}
              <div className="p-4 sm:p-6 bg-stone-950 flex items-center justify-center">
                <div className="w-full max-w-2xl aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Detailed Breakdown for School Reports */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-200">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
                      {selectedPhoto.title}
                    </h3>
                    <p className="font-serif italic text-[#465F4E] text-sm mt-1">
                      {selectedPhoto.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyCaption(selectedPhoto)}
                    type="button"
                    className="px-4 py-2 text-xs font-medium bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-[#22352A] border border-emerald-300 rounded-lg flex items-center gap-1.5 transition-all duration-150 self-start whitespace-nowrap shadow-xs cursor-pointer"
                  >
                    {copiedNote ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Citation Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-[#465F4E]" />
                        <span>Copy Caption for Report</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
                      Visual & Ethnographic Observation
                    </h4>
                    <p className="text-stone-700 text-sm leading-relaxed font-sans">
                      {selectedPhoto.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
                      Historical Root & Significance
                    </h4>
                    <p className="text-stone-700 text-sm leading-relaxed font-sans">
                      {selectedPhoto.historicalContext}
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 text-[#1F3325] text-xs sm:text-sm flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#465F4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-[#22352A]">School Project Insight:</strong>{' '}
                    {selectedPhoto.keyFact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
