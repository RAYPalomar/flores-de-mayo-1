import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, BookOpen, Search, Filter, ShieldCheck, Heart, X } from 'lucide-react';
import { SAGALAS_ROSTER, SagalaRole } from '../data/floresData';
import { RevealOnScroll } from './RevealOnScroll';

export const SagalasGuide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSagala, setSelectedSagala] = useState<SagalaRole | null>(null);

  const categories = [
    { id: 'all', label: 'All Roles (13)' },
    { id: 'virtue', label: 'Theological Virtues' },
    { id: 'marian', label: 'Marian Titles' },
    { id: 'biblical', label: 'Biblical Figures' },
    { id: 'historical', label: 'Historical & Climax' }
  ];

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSagala(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredRoles = SAGALAS_ROSTER.filter((sagala) => {
    const matchesCat = selectedCategory === 'all' || sagala.category === selectedCategory;
    const matchesSearch =
      sagala.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sagala.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sagala.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sagala.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="sagalas" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="max-w-3xl mb-10">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Liturgical Roster & Order of Procession
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            The Sagalas & Reynas of the Santacruzan
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            The Santacruzan is not merely a beauty pageant; it is a walking catechism where each maiden
            embodies an Old Testament heroine, a cardinal virtue, a title from the Litany of Loreto, or
            Empress Helena herself.
          </p>
        </RevealOnScroll>

        {/* Filter & Search Bar with immediate press state */}
        <RevealOnScroll direction="up" delay={80} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          {/* Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 active:scale-95 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box with subtle focus ring */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search queen, title, symbol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#465F4E]/40 transition-all"
            />
          </div>
        </RevealOnScroll>

        {/* Sagalas Grid with responsive hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role, idx) => {
            const isElena = role.title.includes('Elena');
            return (
              <RevealOnScroll key={role.order} delay={idx * 40} direction="up">
                <div
                  onClick={() => setSelectedSagala(role)}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-200 ease-out cursor-pointer flex flex-col justify-between hover:-translate-y-1 active:scale-[0.98] ${
                    isElena
                      ? 'border-amber-400 shadow-md bg-gradient-to-br from-white to-amber-50/40 hover:border-amber-500 hover:shadow-xl'
                      : 'border-stone-200/90 shadow-2xs hover:shadow-md hover:border-stone-300'
                  }`}
                >
                  <div>
                    {/* Card Top: Order and Category */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-2.5 border-b border-stone-100">
                      <span className="font-mono text-stone-600 font-semibold">
                        Position #{role.order}
                      </span>
                      <span className="capitalize font-serif italic text-[#465F4E]">
                        {role.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-[#22352A]">
                        {role.title}
                      </h3>
                      {isElena && <Crown className="w-5 h-5 text-amber-600 shrink-0" />}
                    </div>

                    <p className="text-xs font-serif italic text-stone-500 mt-0.5">
                      {role.translation}
                    </p>

                    <div className="mt-4 space-y-2 text-xs font-sans">
                      <div>
                        <span className="font-semibold text-stone-700">Handheld Emblem: </span>
                        <span className="text-stone-600">{role.symbol}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-stone-700">Attire: </span>
                        <span className="text-stone-600">{role.attire}</span>
                      </div>
                      <div className="pt-2 text-stone-600 line-clamp-2 leading-relaxed">
                        {role.meaning}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#465F4E] font-medium">
                    <span className="truncate pr-2 text-stone-500 italic font-serif">
                      {role.funFact}
                    </span>
                    <span className="shrink-0 underline decoration-emerald-300">Details &rarr;</span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Modal for detailed Sagala examination with scale animation */}
        {selectedSagala && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedSagala(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs text-stone-500">
                <span className="font-mono text-stone-700 font-semibold">
                  Order #{selectedSagala.order} in the Procession
                </span>
                <button
                  onClick={() => setSelectedSagala(null)}
                  type="button"
                  className="p-1.5 text-stone-600 hover:text-stone-900 rounded-full hover:bg-stone-100 active:scale-90 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
                  {selectedSagala.title}
                </h3>
                <p className="font-serif italic text-[#465F4E] text-sm mt-0.5">
                  {selectedSagala.translation}
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-stone-700 font-sans">
                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 font-semibold mb-1">
                      Liturgical / Allegorical Meaning:
                    </strong>
                    <p className="leading-relaxed">{selectedSagala.meaning}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block mb-0.5">
                        Handheld Insignia
                      </span>
                      <p className="font-medium text-stone-800">{selectedSagala.symbol}</p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block mb-0.5">
                        Traditional Vestment
                      </span>
                      <p className="font-medium text-stone-800">{selectedSagala.attire}</p>
                    </div>
                  </div>

                  {selectedSagala.biblicalReference && (
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs">
                      <strong>Scriptural Foundation:</strong> {selectedSagala.biblicalReference}
                    </div>
                  )}

                  <div className="p-3 bg-stone-100 rounded-lg text-stone-700 text-xs">
                    <strong>Procession Trivia:</strong> {selectedSagala.funFact}
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
