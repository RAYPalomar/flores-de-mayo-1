import React, { useState } from 'react';
import { MapPin, Flower2, Sparkles, BookOpen, Utensils, Award, Feather, CloudRain, ChevronRight } from 'lucide-react';
import { REGIONAL_TRADITIONS, BOTANICAL_HERITAGE, FIESTA_CUSTOMS, LUWA_POETRY_ARCHIVE } from '../data/floresData';
import { RevealOnScroll } from './RevealOnScroll';

export const CulturalHeritageSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'regional' | 'botanical' | 'customs' | 'luwa'>('regional');
  const [selectedProvince, setSelectedProvince] = useState(REGIONAL_TRADITIONS[0]);

  return (
    <section id="culture" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="max-w-3xl mb-12">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Philippine Ethnography & Grassroots Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            Cultural Traditions of the Philippine Islands
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Flores de Mayo is not uniform across the archipelago; it takes on vibrant local flavors—from
            the coastal fluvial Caracols of Cavite to the Subli dances of Batangas and the oral Tagalog Luwa poetry of Bulacan.
          </p>
        </RevealOnScroll>

        {/* Section Navigation Tabs with immediate active feedback */}
        <RevealOnScroll direction="up" delay={80} className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-300">
          {[
            { id: 'regional', label: '01. Regional Variations', icon: MapPin },
            { id: 'botanical', label: '02. Sacred Flowers of May', icon: Flower2 },
            { id: 'customs', label: '03. Fiesta Games & Feasts', icon: Utensils },
            { id: 'luwa', label: '04. Ang Luwa (Tagalog Poetry)', icon: Feather }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                type="button"
                className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-150 active:scale-95 cursor-pointer flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#22352A] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </RevealOnScroll>

        {/* Tab 1: Regional Variations Across the Philippines */}
        {activeTab === 'regional' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
            {/* Left Column: Province Selector */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-serif uppercase tracking-wider text-[#465F4E] mb-2 font-medium">
                Select a Heritage Province:
              </div>
              {REGIONAL_TRADITIONS.map((item) => (
                <button
                  key={item.province}
                  onClick={() => setSelectedProvince(item)}
                  type="button"
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 active:scale-[0.98] cursor-pointer flex items-center justify-between gap-3 ${
                    selectedProvince.province === item.province
                      ? 'bg-emerald-50/80 border-emerald-400 shadow-xs'
                      : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div>
                    <h4 className="font-serif text-base font-medium text-stone-900 leading-snug">
                      {item.province}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-sans mt-0.5">{item.region}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedProvince.province === item.province
                        ? 'text-[#22352A] translate-x-1'
                        : 'text-stone-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Column: Province Detail Showcase */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="text-xs font-serif italic text-[#465F4E] font-medium">
                    {selectedProvince.region} Archive
                  </span>
                  <span className="text-xs font-mono text-stone-500">
                    {selectedProvince.province}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mt-4 mb-1">
                  {selectedProvince.title}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#465F4E] mb-4">
                  {selectedProvince.distinction}
                </p>

                <div className="mt-4 p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 text-stone-700 text-sm leading-relaxed font-sans">
                  <strong className="block text-stone-900 mb-1 font-semibold">
                    Unique Folk Rites & Practices:
                  </strong>
                  {selectedProvince.culturalPractice}
                </div>

                <div className="mt-4 p-4 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs sm:text-sm text-[#241F1A] font-sans">
                  <strong className="text-amber-950 block mb-0.5 font-semibold">
                    Signature Fiesta Gastronomy:
                  </strong>
                  {selectedProvince.signatureFood}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
                <span>Documented by National Historical Commission</span>
                <span className="text-[#465F4E] font-medium">Cultural Map Reference</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sacred Flowers of May (Botanical Heritage) */}
        {activeTab === 'botanical' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {BOTANICAL_HERITAGE.map((bloom, idx) => (
              <RevealOnScroll key={bloom.name} delay={idx * 50} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#22352A] flex items-center justify-center font-serif text-lg font-bold mb-3 border border-emerald-200/60">
                      🌸
                    </div>

                    <h4 className="font-serif text-xl font-medium text-stone-900">
                      {bloom.name}
                    </h4>
                    <p className="text-xs font-serif italic text-[#465F4E] mb-3">
                      {bloom.scientificName}
                    </p>

                    <div className="space-y-2.5 text-xs text-stone-700 font-sans">
                      <div>
                        <strong className="text-stone-900 block font-semibold">Symbolism:</strong>
                        <p className="text-stone-600">{bloom.symbolism}</p>
                      </div>

                      <div>
                        <strong className="text-stone-900 block font-semibold">Role in Flores de Mayo:</strong>
                        <p className="text-stone-600">{bloom.roleInFlores}</p>
                      </div>

                      <div className="pt-1 text-[11px] text-stone-500">
                        <strong>Season:</strong> {bloom.bloomingSeason}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-[#465F4E] italic font-serif">
                    Scent: {bloom.fragranceProfile}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}

        {/* Tab 3: Fiesta Games & Feasts (Community Customs) */}
        {activeTab === 'customs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {FIESTA_CUSTOMS.map((custom, idx) => (
              <RevealOnScroll key={custom.title} delay={idx * 60} direction="up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 pb-3 border-b border-stone-100">
                      <span className="font-serif italic text-[#465F4E] font-medium capitalize">
                        {custom.category} Tradition
                      </span>
                      <span className="font-mono text-stone-500 text-[11px]">
                        Philippine Town Fiesta
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl font-medium text-stone-900 mt-3 mb-0.5">
                      {custom.title}
                    </h4>
                    <p className="text-xs font-serif italic text-stone-500 mb-3">
                      "{custom.tagalogName}"
                    </p>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans mb-4">
                      {custom.description}
                    </p>
                  </div>

                  <div className="mt-2 p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/70 text-xs text-[#22352A] font-sans">
                    <strong className="block mb-0.5 font-semibold text-[#1B2B21]">
                      Why It Matters for Filipino Community:
                    </strong>
                    {custom.culturalSignificance}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}

        {/* Tab 4: Ang Luwa (Tagalog Poetry & Declamation) */}
        {activeTab === 'luwa' && (
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl animate-fadeIn">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-serif uppercase tracking-widest text-emerald-300 mb-1.5 font-medium">
                Oral Tagalog Declamation Tradition
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                {LUWA_POETRY_ARCHIVE.title}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 font-sans">
                {LUWA_POETRY_ARCHIVE.origin}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tagalog verses */}
              <div className="bg-stone-950/70 p-6 rounded-xl border border-stone-800">
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300 block mb-3 pb-2 border-b border-stone-800 font-sans">
                  Original Tagalog Verses
                </span>
                <div className="space-y-1.5 font-serif italic text-stone-200 text-sm sm:text-base leading-relaxed">
                  {LUWA_POETRY_ARCHIVE.excerpt.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* English translation & context */}
              <div className="bg-stone-950/70 p-6 rounded-xl border border-stone-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300 block mb-3 pb-2 border-b border-stone-800 font-sans">
                    English Poetic Translation
                  </span>
                  <div className="space-y-1.5 font-serif italic text-stone-300 text-sm sm:text-base leading-relaxed">
                    {LUWA_POETRY_ARCHIVE.translation.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800 text-xs text-stone-400 font-sans">
                  <strong className="text-emerald-300 block mb-0.5">Performance Context:</strong>
                  {LUWA_POETRY_ARCHIVE.context}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* The Lutrina: Sacred Ritual for Rain Card */}
        <RevealOnScroll direction="up" delay={100} className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 border border-blue-200">
              <CloudRain className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <div className="text-xs font-serif uppercase tracking-wider text-blue-800 font-semibold mb-1">
                Ecological & Agricultural Significance
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 mb-2">
                "Ang Lutrina": The Ancient Philippine Ritual for Rain in May
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                In traditional Philippine farming communities, the month of May marks the peak of the dry summer
                before the planting season. Before modern irrigation, rural towns conducted the <em>Lutrina</em>—a
                nighttime procession across drought-stricken rice paddies carrying the Holy Cross and praying the Litany
                of the Saints to ask God for rain.
              </p>
              <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-200/80 text-xs text-blue-950 font-sans">
                When the first monsoon rains arrived in late May, farmers celebrated with boundless joy, transforming
                their solemn petitions into the triumphant thanksgiving parade known today as the <strong>Santacruzan</strong>.
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
