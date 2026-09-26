import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize, FileText, Sparkles, BookOpen } from 'lucide-react';
import { GALLERY_ITEMS, HISTORICAL_FACTS, SAGALAS_ROSTER } from '../data/floresData';
import heroProcessionImg from '../assets/images/flores_hero_procession_1790426146195.jpg';
import flowerOfferingImg from '../assets/images/flores_flower_offering_1790426167705.jpg';
import santacruzanArchImg from '../assets/images/flores_santacruzan_arch_1790426183002.jpg';
import sagalasPortraitImg from '../assets/images/flores_sagalas_portrait_1790426198790.jpg';

interface PresentationStageProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image?: string;
  content: string[];
  speakerNotes: string;
  keyTakeaway: string;
}

const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Flores de Mayo & Santacruzan',
    subtitle: 'Philippine Religious Folk Tradition & Cultural Heritage',
    category: 'Introduction',
    image: heroProcessionImg,
    content: [
      'Flores de Mayo ("Flowers of May") is a month-long Catholic devotion honoring the Blessed Virgin Mary.',
      'Santacruzan is the climactic evening pageant held at the end of May celebrating Queen Helena\'s discovery of the True Cross.',
      'Synthesizes pre-colonial community solidarity (Bayanihan), Hispanic floral devotions, and indigenous botanical arts.'
    ],
    speakerNotes: 'Welcome the class. Emphasize that while both terms are often used interchangeably, Flores de Mayo is the month-long daily church offering, while Santacruzan is the theatrical street parade.',
    keyTakeaway: 'The premier Philippine May festival blending faith, folk art, and community heritage.'
  },
  {
    id: 2,
    title: 'Historical Origin & Padre Mariano Sevilla',
    subtitle: 'Bulakan, Bulacan & The 1865 Devotional Handbook',
    category: 'History',
    image: flowerOfferingImg,
    content: [
      'In 1854, Pope Pius IX proclaimed the Dogma of the Immaculate Conception, initiating worldwide May devotions.',
      'In 1865, Filipino secular priest Padre Mariano Sevilla published "Flores de Mayo o Mariquít na Bulaclac" in Bulakan.',
      'Sevilla translated European Jesuit practices into Tagalog and adapted them to local native blossoms like sampaguita and kalachuchi.'
    ],
    speakerNotes: 'Padre Mariano Sevilla is the father of Philippine Flores de Mayo. His Tagalog devotional booklet is the foundation of the songs and rituals still used today.',
    keyTakeaway: 'First codified in Bulacan in 1865 by Filipino priest Padre Mariano Sevilla.'
  },
  {
    id: 3,
    title: 'The Legend of the True Cross',
    subtitle: 'Saint Helena (Reyna Elena) in 326 AD Jerusalem',
    category: 'Christian Tradition',
    image: sagalasPortraitImg,
    content: [
      'Saint Helena, mother of Emperor Constantine the Great, made a historic pilgrimage to Mount Calvary.',
      'Workers excavated three wooden crosses at the site of the crucifixion.',
      'The True Cross was identified after a sick person was healed upon touching it, establishing the feast of the Holy Cross (Santa Cruz).'
    ],
    speakerNotes: 'Explain that the name "Santacruzan" literally means "Holy Cross" (Santa Cruz + suffix -an).',
    keyTakeaway: 'The Santacruzan is rooted in the 4th-century historical pilgrimage of Queen Helena.'
  },
  {
    id: 4,
    title: 'Alay kay Maria & The Sampaguita',
    subtitle: 'Daily Children’s Offering & Botanical Symbolism',
    category: 'Tradition',
    image: flowerOfferingImg,
    content: [
      'Every afternoon of May, children dressed in white gather in the church to offer fresh flowers at the altar.',
      'Sampaguita (Jasminum sambac), the national flower, represents purity, humility, and filial devotion.',
      'Singing the traditional hymn "Dios Te Salve Maria" (Aba Ginoong Maria) accompanies the flower offering.'
    ],
    speakerNotes: 'Highlight the role of youth and children in preserving the ritual every afternoon at 4:30 PM.',
    keyTakeaway: 'Fresh flowers and children\'s voices are the emotional heart of Flores de Mayo.'
  },
  {
    id: 5,
    title: 'The Bamboo Arko & Ephemeral Architecture',
    subtitle: 'Native Craftsmanship, Palm Weaving & Illumination',
    category: 'Folk Art',
    image: santacruzanArchImg,
    content: [
      'Mobile arches (arko) are constructed from native bamboo poles bent into graceful parabolic curves.',
      'Decorated with sampaguita strings, yellow marigolds, coconut fronds, and battery-lit warm fairy lights.',
      'Carried by two escorts to frame each Sagala during the street procession.'
    ],
    speakerNotes: 'Point out that the bamboo arch is an indigenous Philippine art form showcasing the bayanihan spirit of local carpenters and artisans.',
    keyTakeaway: 'The floral bamboo arko is a uniquely Filipino festival architecture.'
  },
  {
    id: 6,
    title: 'The Liturgical Hierarchy of Sagalas',
    subtitle: 'From Methuselah to Reyna Elena',
    category: 'Procession Sequence',
    content: [
      'Methuselah leads the procession to symbolize the fleeting nature of worldly vanity.',
      'The Theological Virtues: Reyna Fe (Cross), Reyna Esperanza (Anchor), and Reyna Caridad (Heart).',
      'Reyna de las Flores represents the beauty of May and the floral tributes.',
      'The Climax: Reyna Elena with Prince Constantine carrying the Holy Cross under the grandest arko.'
    ],
    speakerNotes: 'Stress that the procession was designed as a "visual catechism" to teach scripture and theology to the community without requiring literacy.',
    keyTakeaway: 'The Santacruzan is a walking theological catechism of virtues and history.'
  },
  {
    id: 7,
    title: 'Preserving Cultural Heritage Today',
    subtitle: 'Living Tradition Across the Philippines & Worldwide',
    category: 'Contemporary Impact',
    image: heroProcessionImg,
    content: [
      'Celebrated across provinces: Bulacan, Pasig, Manila, Vigan, Cavite, and Cebu.',
      'Recognized by the National Commission for Culture and the Arts (NCCA) as intangible heritage.',
      'Held by the Filipino global diaspora in North America, Europe, and Asia to maintain connection with home.'
    ],
    speakerNotes: 'Conclude by asking the audience if they have ever watched or walked in a Santacruzan in their local barangay.',
    keyTakeaway: 'A vibrant living bridge connecting centuries of Filipino faith, fashion, and community.'
  }
];

export const PresentationStage: React.FC<PresentationStageProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const total = PRESENTATION_SLIDES.length;
  const slide = PRESENTATION_SLIDES[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide]);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Only swipe if horizontal movement is dominant
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn transition-all duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Top Bar for Presentation Stage */}
      <div
        className="w-full max-w-4xl flex items-center justify-between px-2 sm:px-4 py-2 text-stone-300 text-xs mb-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-serif tracking-wider text-emerald-300 font-semibold uppercase text-[11px] sm:text-xs">
            School Presentation · Slide Deck
          </span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="font-mono tabular-nums text-stone-400">
            {currentSlide + 1}/{total}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            type="button"
            className={`px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-medium border transition-all duration-150 active:scale-95 cursor-pointer flex items-center gap-1.5 ${
              showNotes
                ? 'bg-emerald-900/60 text-emerald-200 border-emerald-700'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Speaker Notes</span>
            <span className="sm:hidden">Notes</span>
          </button>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 active:scale-90 transition-all cursor-pointer"
            aria-label="Exit presentation mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Card Container: Fluid height on mobile, 4:3 on desktop */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl h-[86vh] sm:h-auto sm:aspect-[4/3] sm:max-h-[85vh] bg-[#FAF8F5] text-stone-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between border border-stone-200/50 relative animate-modal"
      >
        {/* Slide Content Header */}
        <div className="p-4 sm:p-6 lg:p-8 pb-3 border-b border-stone-200/80 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[10px] sm:text-[11px] font-serif uppercase tracking-widest text-[#465F4E] font-semibold mb-0.5">
              {slide.category} · Section 0{slide.id}
            </div>
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-stone-900 leading-tight">
              {slide.title}
            </h2>
            <p className="font-serif italic text-xs sm:text-sm text-stone-600 mt-0.5 line-clamp-1">
              {slide.subtitle}
            </p>
          </div>
          <span className="text-xl sm:text-2xl font-serif text-[#465F4E]/30 font-bold ml-2 shrink-0">
            0{slide.id}
          </span>
        </div>

        {/* Slide Body: Layout with Image & Key Points, smooth scroll on mobile */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
          {slide.image && (
            <div className="w-full sm:w-5/12 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-sm shrink-0 border border-stone-200 max-h-[160px] sm:max-h-none">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1 space-y-3 sm:space-y-4 w-full">
            <div className="space-y-2 sm:space-y-3">
              {slide.content.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#465F4E] shrink-0 mt-1.5" />
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Takeaway Callout */}
            <div className="p-3 sm:p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-[#1F3325] font-medium font-sans">
              <strong className="text-[#22352A] block mb-0.5 font-semibold">Key Takeaway for Report:</strong>
              {slide.keyTakeaway}
            </div>
          </div>
        </div>

        {/* Slide Footer with Controls */}
        <div className="p-3 sm:p-4 lg:p-5 bg-white border-t border-stone-200 flex items-center justify-between shrink-0">
          {/* Progress dots */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 sm:h-2 transition-all duration-200 rounded-full cursor-pointer active:scale-90 ${
                  currentSlide === idx ? 'w-4 sm:w-6 bg-[#465F4E]' : 'w-1.5 sm:w-2 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={prevSlide}
              type="button"
              className="px-2.5 sm:px-3.5 py-1.5 text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 active:scale-95 text-stone-700 flex items-center gap-1 transition-all duration-150 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              onClick={nextSlide}
              type="button"
              className="px-3 sm:px-4 py-1.5 text-xs font-medium rounded-lg bg-[#465F4E] hover:bg-[#394F40] active:scale-95 text-white flex items-center gap-1 transition-all duration-150 shadow-2xs cursor-pointer"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Presenter Speaker Notes Drawer */}
        {showNotes && (
          <div className="absolute bottom-14 sm:bottom-16 left-3 right-3 sm:left-4 sm:right-4 bg-stone-900/95 text-stone-100 p-3.5 sm:p-4 rounded-xl shadow-xl border border-stone-700 text-xs animate-slideDown backdrop-blur-md max-h-[40vh] overflow-y-auto z-30">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-stone-700 text-[10px] sm:text-[11px] text-emerald-300 uppercase tracking-wider font-semibold">
              <span>Speaker Cue & Classroom Presentation Notes</span>
              <button
                onClick={() => setShowNotes(false)}
                type="button"
                className="text-stone-400 hover:text-white cursor-pointer active:scale-90 text-sm px-1"
              >
                &times;
              </button>
            </div>
            <p className="text-stone-300 leading-relaxed italic font-sans text-xs">{slide.speakerNotes}</p>
          </div>
        )}
      </div>

      <div className="mt-2 text-stone-400 text-[11px] sm:text-xs flex items-center gap-3 font-sans">
        <span className="hidden sm:inline">Left/Right Arrow or Space</span>
        <span className="sm:hidden">Swipe left/right to change slides</span>
        <span aria-hidden="true">·</span>
        <span>Tap outside to exit</span>
      </div>
    </div>
  );
};
