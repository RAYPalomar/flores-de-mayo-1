import React, { useState } from 'react';
import { Calendar, BookOpen, Quote, Sparkles, Check, Copy, Clock, Award } from 'lucide-react';
import { HISTORICAL_FACTS, HistoricalMilestone } from '../data/floresData';
import { RevealOnScroll } from './RevealOnScroll';

export const HistorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'theology' | 'symbols' | 'citations'>('timeline');
  const [copiedCite, setCopiedCite] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCite(id);
    setTimeout(() => setCopiedCite(null), 2500);
  };

  const academicCitations = [
    {
      style: 'APA 7th Edition',
      text: 'Sevilla, M. (1865). Flores de Mayo o Mariquít na Bulaclac na sa Pagninilaynilay sa Buong Buán nang Mayo. Bulakan, Bulacan: Imprenta de los Amigos del País.'
    },
    {
      style: 'MLA 9th Edition',
      text: 'Sevilla, Mariano. Flores de Mayo o Mariquít na Bulaclac na sa Pagninilaynilay sa Buong Buán nang Mayo. Imprenta de los Amigos del País, 1865.'
    },
    {
      style: 'Chicago 17th Edition',
      text: 'Sevilla, Mariano. 1865. Flores de Mayo o Mariquít na Bulaclac na sa Pagninilaynilay sa Buong Buán nang Mayo. Bulakan: Imprenta de los Amigos del País.'
    }
  ];

  return (
    <section id="history" className="py-16 md:py-24 bg-[#F4EFEA] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="max-w-3xl mb-12">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Historical Foundations & Archival Research
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            The Historical Roots of Flores de Mayo
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            From the 4th-century Mediterranean pilgrimage of Empress Helena to Padre Mariano Sevilla’s
            1865 Bulakan devotional treatise: tracing how an Italian Jesuit prayer custom became the
            crown jewel of Philippine folk Catholicism.
          </p>
        </RevealOnScroll>

        {/* Section Navigation Tabs with active press & smooth transitions */}
        <RevealOnScroll direction="up" delay={100} className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-300">
          {[
            { id: 'timeline', label: '01. Chronological Timeline' },
            { id: 'theology', label: '02. Flores vs. Santacruzan' },
            { id: 'symbols', label: '03. Cultural Symbols' },
            { id: 'citations', label: '04. School Citations' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              type="button"
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 active:scale-95 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#22352A] text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </RevealOnScroll>

        {/* Tab 1: Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-6 max-w-4xl animate-fadeIn">
            {HISTORICAL_FACTS.map((item, idx) => (
              <RevealOnScroll key={item.year} delay={idx * 60} direction="up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-100">
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-serif font-bold text-[#22352A] bg-emerald-50 px-3.5 py-1 rounded-lg border border-emerald-200/80">
                        {item.year}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium text-stone-900">
                          {item.title}
                        </h3>
                        <p className="text-xs font-serif italic text-stone-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-stone-500 font-mono">
                      Milestone 0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-4 text-stone-700 text-sm leading-relaxed font-sans">
                    <p className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#465F4E]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#FAF8F5] p-3 rounded-lg border border-stone-200/80">
                      <span className="font-semibold text-stone-800 block mb-0.5">Historical Impact:</span>
                      <span className="text-stone-600 font-sans">{item.impact}</span>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-lg border border-stone-200/80">
                      <span className="font-semibold text-stone-800 block mb-0.5">Primary Source:</span>
                      <span className="text-stone-600 italic font-serif">{item.source}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}

        {/* Tab 2: Theological & Cultural Synthesis */}
        {activeTab === 'theology' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="text-xs font-serif tracking-wider uppercase text-[#465F4E] mb-1 font-medium">
                  Sacred Distinction · Church Liturgy
                </div>
                <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">
                  Flores de Mayo (Flowers of May)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4 font-sans">
                  Flores de Mayo refers specifically to the <strong>month-long daily devotion</strong> conducted
                  every afternoon from May 1 to May 31. Parishes hold catechetical instruction for young children,
                  recitation of the holy rosary, and the <em>Alay ng Bulaklak</em> (offering of fresh blossoms)
                  accompanied by the singing of traditional hymns.
                </p>

                <div className="space-y-2 text-xs text-stone-700 mt-4 border-t border-stone-100 pt-4 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#465F4E]" />
                    <span><strong>Duration:</strong> Entire month of May (31 days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#465F4E]" />
                    <span><strong>Focal Figure:</strong> The Blessed Virgin Mary (Mother of God)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#465F4E]" />
                    <span><strong>Primary Participants:</strong> Parish youth, catechists, and children</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#465F4E]" />
                    <span><strong>Setting:</strong> Inside parish churches and barangay chapels (visita)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-[#22352A]">
                Padre Mariano Sevilla chose May because it coincides with the blooming season of Philippine native
                flowers like sampaguita, kalachuchi, and rosal after the dry summer months.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="text-xs font-serif tracking-wider uppercase text-[#465F4E] mb-1 font-medium">
                  Festive Culmination · Street Pageantry
                </div>
                <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">
                  Ang Santacruzan (The Holy Cross)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4 font-sans">
                  The Santacruzan is the <strong>theatrical parade or climax</strong> usually held on the last days
                  of May. It commemorates Queen Helena’s successful quest in 326 AD to excavate and verify the True
                  Cross of Jesus Christ in Jerusalem. It weaves civic pride, couture terno fashion, and catechesis into
                  an open-air procession.
                </p>

                <div className="space-y-2 text-xs text-stone-700 mt-4 border-t border-stone-100 pt-4 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                    <span><strong>Duration:</strong> Culminating evening (often May 31 or last Sunday)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                    <span><strong>Focal Figure:</strong> Saint Helena (Reyna Elena) and the True Cross</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                    <span><strong>Primary Participants:</strong> Town muses (Sagalas), brass bands, community elders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                    <span><strong>Setting:</strong> Street parade winding through town barangays and plazas</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-800 font-sans">
                In many Philippine towns, people colloquially use "Flores de Mayo" and "Santacruzan" interchangeably,
                though liturgically Santacruzan is the grand pageant finale!
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Cultural Symbols */}
        {activeTab === 'symbols' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#22352A] flex items-center justify-center font-serif text-lg font-bold mb-4">
                🌸
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900 mb-1">
                The Sampaguita Bloom
              </h4>
              <p className="text-xs font-serif italic text-[#465F4E] mb-2">
                Jasminum sambac · National Flower
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                Symbolizes maternal purity, humility, and sweet fidelity. Strung tightly by artisans into fragrant
                rosary-like garlands with pandan leaves, offering an intoxicating perfume through May streets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#22352A] flex items-center justify-center font-serif text-lg font-bold mb-4">
                🎋
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900 mb-1">
                The Katutubong Arko
              </h4>
              <p className="text-xs font-serif italic text-[#465F4E] mb-2">
                Bamboo Architecture & Bayanihan
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                Handcrafted from native bamboo poles bent into graceful parabolic curves. Decorated with marigolds,
                palm fronds, and battery-lit LED lights. Exemplifies indigenous Filipino engineering and community unity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#22352A] flex items-center justify-center font-serif text-lg font-bold mb-4">
                👗
              </div>
              <h4 className="font-serif text-lg font-medium text-stone-900 mb-1">
                The Filipiniana Terno
              </h4>
              <p className="text-xs font-serif italic text-[#465F4E] mb-2">
                Iconic Butterfly Sleeves & Callado
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                Evolved from the Spanish-era Baro't Saya into the modern terno with structured butterfly sleeves.
                Crafted from piña fabric, abaca silk, and seed pearls, representing the pinnacle of Philippine haute couture.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: School Citations Box */}
        {activeTab === 'citations' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs max-w-3xl animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-serif text-[#465F4E] mb-2 uppercase tracking-wider font-medium">
              <BookOpen className="w-4 h-4 text-[#465F4E]" />
              <span>Academic References for Student Submissions</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-stone-900 mb-2">
              Ready-to-Use Bibliographic Citations
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6 font-sans">
              Use these formatted citations for your school project bibliography, slides, and printed research handouts.
            </p>

            <div className="space-y-4">
              {academicCitations.map((cite, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="pr-4">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1 font-sans">
                      {cite.style}
                    </span>
                    <p className="text-xs text-stone-800 font-serif leading-relaxed">
                      {cite.text}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(cite.text, cite.style)}
                    type="button"
                    className="self-start sm:self-auto px-3.5 py-1.5 text-xs font-medium rounded-md bg-white border border-stone-300 hover:bg-stone-50 active:scale-95 text-stone-700 flex items-center gap-1.5 transition-all duration-150 shrink-0 shadow-2xs cursor-pointer"
                  >
                    {copiedCite === cite.style ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
