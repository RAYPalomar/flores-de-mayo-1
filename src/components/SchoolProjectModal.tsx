import React, { useState } from 'react';
import { X, BookOpen, Check, Copy, Printer, FileText } from 'lucide-react';

interface SchoolProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolProjectModal: React.FC<SchoolProjectModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const projectSummaryText = `FLORES DE MAYO & SANTACRUZAN: PHILIPPINE CULTURAL & RELIGIOUS TRADITIONS
School Project Summary & Reference Guide

1. DEFINITION & ORIGINS:
- Flores de Mayo ("Flowers of May") is a month-long Catholic devotion honoring the Virgin Mary throughout May.
- Initiated in the Philippines following the 1854 Dogma of the Immaculate Conception (Pope Pius IX) and codified in 1865 by Padre Mariano Sevilla in Bulakan, Bulacan through his devotional manual "Mariquít na Bulaclac".
- Children offer fresh local flowers (Sampaguita, Rosal, Kalachuchi) daily while singing "Dios Te Salve Maria".

2. THE SANTACRUZAN PAGEANT:
- The climactic festival parade held at the end of May.
- Commemorates the 326 AD pilgrimage of Empress Helena (Reyna Elena) and her son Emperor Constantine in Jerusalem to find the True Cross of Christ.
- A "living catechism": includes biblical heroines (Judith, Esther), theological virtues (Reyna Fe, Esperanza, Caridad), Marian titles (Reyna Abogada, Reyna de las Flores), and historical figures.
- Escorted by youth under lighted bamboo arches (Katutubong Arko).

3. KEY CULTURAL SYMBOLS & BOTANICAL HERITAGE:
- Sampaguita (Jasminum sambac): National flower, maternal purity, humility, sweet scent.
- Kalachuchi & Rosal: Springtime resilience and delicate beauty gathered by parish children.
- Ilang-Ilang & Champaca: Golden fragrant blooms perfuming the bamboo arches.
- Bamboo Arko: Ephemeral native architecture, communal bayanihan.
- The Filipiniana Terno: Iconic butterfly sleeves, piña and abaca craftsmanship.
- The Holy Cross (Santa Cruz): Christian faith and historical triumph of Saint Helena.

4. REGIONAL FILIPINO TRADITIONS:
- Bulacan: Cradle of Flores de Mayo and oral Tagalog "Luwa" poetry.
- Batangas: The "Subli" dance with bamboo castanets honoring the Holy Cross of Bauan.
- Cavite: Coastal "Caracol" fluvial processions on decorated fishing bancas.
- Pampanga: Giant 10-foot "Majigangas" papier-mâché puppets leading the procession.
- Ilocos (Vigan): Sagalas in handwoven Abel Iloco gowns in horse-drawn kalesas.
- Cebu & Visayas: Floral petal carpets (alfombras) and Sinulog-cadence thanksgiving.

5. FIESTA CUSTOMS & COMMUNITY REVELRY:
- Ang Lutrina: The 9-day night procession praying for rain across dry rice fields before planting season.
- Ang Pabitin: Bamboo lattice suspended with fruits, native sweets, and coins.
- Palo Sebo: Traditional greased bamboo climbing contest.
- Salo-salo: Feasting on Pancit Luglug, Arroz Caldo, Kakanin (Sapin-Sapin, Bibingka, Biko), and Tsokolate de Batirol.
- Pabaon: Distributing blessed floral garlands to families for their home altars.

6. PRIMARY SOURCES & CITATIONS:
- Sevilla, Mariano (1865). Flores de Mayo o Mariquít na Bulaclac na sa Pagninilaynilay sa Buong Buán nang Mayo. Bulakan.
- National Commission for Culture and the Arts (NCCA) Philippine Intangible Cultural Heritage Registry.
- Archdiocese of Manila & Diocese of Malolos Historical Archives.`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(projectSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-stone-200 shadow-2xl relative animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#465F4E]" />
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
              School Project Handout & Summary
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 active:scale-90 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
          This educational guide synthesizes historical, liturgical, and ethnographic facts for classroom
          reports, slides, and bibliographies.
        </p>

        <div className="mt-6 bg-white p-4 sm:p-5 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-4 max-h-[50vh] overflow-y-auto font-mono">
          <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm leading-relaxed text-stone-800">
            {projectSummaryText}
          </pre>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopySummary}
            type="button"
            className="px-4 py-2 bg-[#465F4E] hover:bg-[#394F40] active:scale-95 text-white rounded-lg text-xs font-medium flex items-center gap-2 transition-all duration-150 shadow-xs cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-200" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Summary for Presentation</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            type="button"
            className="px-4 py-2 bg-white hover:bg-stone-100 active:scale-95 border border-stone-300 text-stone-700 rounded-lg text-xs font-medium flex items-center gap-2 transition-all duration-150 shadow-2xs cursor-pointer"
          >
            <Printer className="w-4 h-4 text-stone-500" />
            <span>Print Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};
