import React, { useState } from 'react';
import { Music, Volume2, Sparkles, Flower2, Heart, Award } from 'lucide-react';
import { TRADITIONS_LIST, DIOS_TE_SALVE_LYRICS } from '../data/floresData';
import { soundscape } from '../utils/audio';
import { RevealOnScroll } from './RevealOnScroll';

export const TraditionsSection: React.FC = () => {
  const [hymnLang, setHymnLang] = useState<'tagalog' | 'spanish'>('tagalog');
  const [isPlayingChimes, setIsPlayingChimes] = useState(false);

  const toggleSound = () => {
    const active = soundscape.toggle();
    setIsPlayingChimes(active);
  };

  return (
    <section id="traditions" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="max-w-3xl mb-12">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Living Customs & Rites of Devotion
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            Traditions of the Month of May
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Beyond the lavish dresses, Flores de Mayo is built upon grassroots communal rites—from
            children gathering fragrant sampaguita in parish patios to late-night bamboo bending for
            the arko.
          </p>
        </RevealOnScroll>

        {/* 4 Traditions Cards with stagger and hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {TRADITIONS_LIST.map((tradition, index) => (
            <RevealOnScroll key={tradition.id} delay={index * 80} direction="up">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-out flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 pb-3 border-b border-stone-100">
                    <span className="font-serif italic text-[#465F4E]">
                      Tradition 0{index + 1}
                    </span>
                    <span className="font-mono text-stone-500">
                      {tradition.timing}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-stone-900 mt-4 mb-2">
                    {tradition.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {tradition.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-700 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/60 font-sans">
                  <strong className="text-[#22352A] block mb-0.5 font-semibold">Cultural & Social Significance:</strong>
                  <p className="text-stone-700">{tradition.significance}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Traditional Hymn: Dios Te Salve Maria */}
        <RevealOnScroll direction="up" delay={120}>
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-serif text-emerald-300 uppercase tracking-widest mb-1.5 font-medium">
                  <Music className="w-4 h-4 text-emerald-300" />
                  <span>Sacred Processional Chant</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  {DIOS_TE_SALVE_LYRICS.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-xl font-sans">
                  {DIOS_TE_SALVE_LYRICS.origin}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-end">
                {/* Language Switcher with mobile-friendly labels */}
                <div className="flex items-center p-1 bg-stone-800 rounded-xl text-xs">
                  <button
                    onClick={() => setHymnLang('tagalog')}
                    type="button"
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-150 active:scale-95 cursor-pointer ${
                      hymnLang === 'tagalog'
                        ? 'bg-[#465F4E] text-white shadow-xs'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    <span className="hidden sm:inline">Tagalog (Aba Ginoong Maria)</span>
                    <span className="sm:hidden">Tagalog</span>
                  </button>
                  <button
                    onClick={() => setHymnLang('spanish')}
                    type="button"
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-150 active:scale-95 cursor-pointer ${
                      hymnLang === 'spanish'
                        ? 'bg-[#465F4E] text-white shadow-xs'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    <span className="hidden sm:inline">Spanish (Dios Te Salve)</span>
                    <span className="sm:hidden">Spanish</span>
                  </button>
                </div>

                {/* Chime button with ripple state */}
                <button
                  onClick={toggleSound}
                  type="button"
                  className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-150 active:scale-90 cursor-pointer flex items-center gap-1.5 text-xs ${
                    isPlayingChimes
                      ? 'bg-emerald-800 text-white border-emerald-500 shadow-xs'
                      : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                  }`}
                  title="Play gentle bell accompaniment"
                  aria-label="Toggle bell accompaniment"
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[11px] sm:hidden">{isPlayingChimes ? 'Chimes On' : 'Chimes'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-stone-950/60 p-6 rounded-xl border border-stone-800">
                <h4 className="font-serif text-emerald-200 text-sm tracking-wider uppercase mb-3 pb-2 border-b border-stone-800 font-medium">
                  Lyrical Verses ({hymnLang === 'tagalog' ? 'Tagalog' : 'Spanish'})
                </h4>
                <div className="space-y-1.5 font-serif text-stone-200 text-sm sm:text-base leading-relaxed italic animate-fadeIn">
                  {(hymnLang === 'tagalog' ? DIOS_TE_SALVE_LYRICS.tagalog : DIOS_TE_SALVE_LYRICS.spanish).map(
                    (line, i) => (
                      <p key={`${hymnLang}-${i}`}>{line}</p>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-emerald-200 text-sm tracking-wider uppercase mb-3 pb-2 border-b border-stone-800 font-medium">
                    Musical & Liturgical Context
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                    During the Santacruzan, town brass bands (banda de musica) play this melodic prayer in a gentle 3/4
                    waltz cadence. Devotees holding flickering white taper candles chant the verses in unison between
                    each mystery of the Holy Rosary.
                  </p>
                  <div className="mt-4 p-4 bg-stone-800/60 rounded-xl border border-stone-700 text-xs text-stone-300 font-sans">
                    <strong className="text-emerald-300 block mb-1">Musical Structure:</strong>
                    Sung in alternating call-and-response between the choir (or band instruments) and the accompanying
                    crowd of devotees.
                  </div>
                </div>

                <div className="mt-6 text-xs text-stone-400 flex items-center justify-between border-t border-stone-800 pt-3">
                  <span>Litany of Loreto Tradition</span>
                  <span>Bulakan & Pasig Heritage Registry</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
