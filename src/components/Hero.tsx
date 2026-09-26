import React from 'react';
import { Flower2, Play, Heart, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import heroBgImg from '../assets/images/flores_reference_hero_1790426574384.jpg';

interface HeroProps {
  onOpenPresentation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPresentation }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-8 lg:px-14 overflow-hidden">
      {/* Background Image: Golden luminous sunrise landscape with blooming foreground flowers */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Flores de Mayo Philippine Pastoral Heritage"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02]"
          loading="eager"
        />
        {/* Soft atmospheric gradient scrim on left and bottom to ensure crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/40 via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-black/5" />
      </div>

      {/* Main Hero Copy - Left Aligned exactly like Reference Image */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="max-w-2xl text-left">
          {/* Top Kicker with floral sprout icon & line */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#35483C] font-medium mb-3 sm:mb-4">
            <svg
              className="w-4 h-4 text-[#455A4C]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a9 9 0 0 1 9 9v1a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-1a9 9 0 0 1 9-9Z" />
              <path d="M12 7v10" />
              <path d="M7 12h10" />
            </svg>
            <span className="text-[#455A4C] tracking-[0.22em] font-semibold text-[11px] sm:text-xs">
              — DEVOTION, HERITAGE & FAITH
            </span>
          </div>

          {/* Hero Headline: Exact typography styling with italicized emphasis */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal tracking-tight text-[#22352A] leading-[1.08] text-balance">
            Devotion that <br />
            helps you <span className="font-serif italic font-normal text-[#2A4434]">bloom.</span>
          </h1>

          {/* Description Paragraph */}
          <p className="mt-4 sm:mt-5 text-[#374C3E] text-sm sm:text-base lg:text-[1.06rem] max-w-xl leading-relaxed font-sans font-normal">
            Discover sacred flower offerings, nourishing community traditions, and centuries of Filipino
            Marian devotion and vibrant Santacruzan pageantry.
          </p>

          {/* Two Action Buttons side by side: Green pill & Frosted glass pill */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary Solid Moss Green Pill Button */}
            <a
              href="#threed-showcase"
              className="px-6 sm:px-7 py-3 rounded-full bg-[#465F4E] hover:bg-[#394F40] text-white text-xs sm:text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Explore Traditions</span>
              <svg
                className="w-4 h-4 text-emerald-200 transition-transform group-hover:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m4.9 4.9 14.2 14.2" />
              </svg>
            </a>

            {/* Secondary Frosted Glass Pill Button linking smoothly to #traditions */}
            <a
              href="#traditions"
              className="px-6 sm:px-7 py-3 rounded-full bg-white/35 hover:bg-white/50 backdrop-blur-md border border-[#3A4D40]/30 text-[#22352A] text-xs sm:text-sm font-medium tracking-wide shadow-xs transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Our Traditions</span>
              <Play className="w-3.5 h-3.5 text-[#22352A] fill-[#22352A]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Frosted Glass 3-Item Card (Left) + Scroll to Explore (Center) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Left Side: Frosted Glass Horizontal Card with 3 Columns */}
        <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-4 sm:p-5 shadow-lg max-w-lg">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 divide-x divide-[#35483C]/15">
            {/* Item 1 */}
            <a
              href="#traditions"
              className="flex flex-col items-center text-center px-1 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#374C3E] group-hover:scale-110 transition-transform mb-1.5">
                <svg
                  className="w-5 h-5 text-[#374C3E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a9 9 0 0 1 9 9v1a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-1a9 9 0 0 1 9-9Z" />
                  <path d="M12 7v10" />
                </svg>
              </div>
              <span className="font-serif text-xs sm:text-sm font-medium text-[#22352A] leading-tight">
                Alay kay
              </span>
              <span className="text-[11px] text-[#465F4E] font-medium">Maria</span>
            </a>

            {/* Item 2 */}
            <a
              href="#history"
              className="flex flex-col items-center text-center px-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#374C3E] group-hover:scale-110 transition-transform mb-1.5">
                <Heart className="w-5 h-5 text-[#374C3E]" strokeWidth={1.75} />
              </div>
              <span className="font-serif text-xs sm:text-sm font-medium text-[#22352A] leading-tight">
                The Holy
              </span>
              <span className="text-[11px] text-[#465F4E] font-medium">Cross</span>
            </a>

            {/* Item 3 */}
            <a
              href="#threed-showcase"
              className="flex flex-col items-center text-center px-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#374C3E] group-hover:scale-110 transition-transform mb-1.5">
                <Flower2 className="w-5 h-5 text-[#374C3E]" strokeWidth={1.75} />
              </div>
              <span className="font-serif text-xs sm:text-sm font-medium text-[#22352A] leading-tight">
                Katutubong
              </span>
              <span className="text-[11px] text-[#465F4E] font-medium">Arko</span>
            </a>
          </div>
        </div>

        {/* Center/Right: "SCROLL TO EXPLORE" exactly matching Reference Image */}
        <div className="flex flex-col items-center justify-center text-center mx-auto md:mx-0 pb-1">
          <a
            href="#threed-showcase"
            className="flex flex-col items-center gap-2 text-[10px] sm:text-[11px] font-sans tracking-[0.24em] uppercase text-[#35483C] font-semibold hover:text-[#1F2C23] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            {/* Luminous line with glowing circle and dot */}
            <div className="flex flex-col items-center">
              <div className="w-[1.5px] h-4 bg-[#35483C]/40" />
              <div className="w-5 h-5 rounded-full border border-[#35483C]/60 bg-white/40 backdrop-blur-xs flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#465F4E] animate-ping" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

