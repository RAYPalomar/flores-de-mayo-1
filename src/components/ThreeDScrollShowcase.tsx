import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Info, Play, Pause, Sparkles, MoveHorizontal } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/floresData';
import { soundscape } from '../utils/audio';
import { RevealOnScroll } from './RevealOnScroll';

interface ThreeDScrollShowcaseProps {
  onSelectGalleryItem?: (id: string) => void;
}

export const ThreeDScrollShowcase: React.FC<ThreeDScrollShowcaseProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState<boolean[]>(new Array(GALLERY_ITEMS.length).fill(false));
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Real-time continuous dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragLastX = useRef(0);
  const dragVelocity = useRef(0);
  const dragTime = useRef(0);
  const isHorizontalGesture = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop interactive tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const total = GALLERY_ITEMS.length;

  // Window resize listener to detect mobile layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % total;
      soundscape.playSingleChime(587.33);
      return next;
    });
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev - 1 + total) % total;
      soundscape.playSingleChime(440.0);
      return next;
    });
  }, [total]);

  const toggleFlip = (index: number) => {
    setIsFlipped((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      soundscape.playSingleChime(698.46);
      return copy;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        toggleFlip(activeIndex);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, nextCard, prevCard]);

  // Autoplay (pauses when user drags or hovers)
  useEffect(() => {
    if (!isAutoplay || isDragging) return;
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay, isDragging, nextCard]);

  // Mouse wheel / trackpad horizontal scrolling
  const wheelLock = useRef(false);
  const handleWheel = (e: React.WheelEvent) => {
    // If the active card is flipped, let user scroll the notes instead of switching cards
    if (isFlipped[activeIndex]) return;
    if (wheelLock.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 30) {
      wheelLock.current = true;
      if (delta > 0) nextCard();
      else prevCard();
      setTimeout(() => {
        wheelLock.current = false;
      }, 350);
    }
  };

  // 3D Mouse Tilt effect on desktop
  const handleMouseMoveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isDragging || isFlipped[activeIndex]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleMouseLeaveTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Pointer / Touch / Mouse Drag handlers
  const handlePointerDown = (clientX: number, clientY?: number, target?: EventTarget | null) => {
    // If clicking or touching inside flipped card study notes, let it scroll naturally
    if (isFlipped[activeIndex]) {
      const isScrollable = (target as HTMLElement | null)?.closest?.('.card-back-scrollable');
      if (isScrollable) return;
    }

    setIsDragging(true);
    dragStartX.current = clientX;
    dragLastX.current = clientX;
    if (clientY !== undefined) {
      dragStartY.current = clientY;
    }
    isHorizontalGesture.current = false;
    dragTime.current = Date.now();
    dragVelocity.current = 0;
    setDragOffset(0);
  };

  const handlePointerMove = (clientX: number, clientY?: number) => {
    if (!isDragging) return;

    // Check gesture direction on touch
    if (clientY !== undefined && !isHorizontalGesture.current) {
      const deltaX = Math.abs(clientX - dragStartX.current);
      const deltaY = Math.abs(clientY - dragStartY.current);
      if (deltaY > deltaX && deltaY > 12) {
        // Vertical scroll intent: release horizontal drag cleanly
        setIsDragging(false);
        setDragOffset(0);
        return;
      }
      if (deltaX > 8) {
        isHorizontalGesture.current = true;
      }
    }

    const delta = clientX - dragStartX.current;
    const now = Date.now();
    const dt = Math.max(1, now - dragTime.current);
    dragVelocity.current = (clientX - dragLastX.current) / dt;
    dragLastX.current = clientX;
    dragTime.current = now;

    // Apply soft resistance at edges
    const resistance = isMobile ? 0.78 : 0.85;
    setDragOffset(delta * resistance);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = isMobile ? 38 : 50;
    const velocityThreshold = 0.28;
    const offset = dragOffset;
    const velocity = dragVelocity.current;

    // Smooth release
    setDragOffset(0);

    if (offset < -threshold || velocity < -velocityThreshold) {
      nextCard();
    } else if (offset > threshold || velocity > velocityThreshold) {
      prevCard();
    }
  };

  return (
    <section
      id="threed-showcase"
      className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] relative overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Curatorial Header with smooth reveal - distinctly above cards with clean clearance */}
        <RevealOnScroll direction="up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-14 relative z-30">
          <div className="text-[11px] sm:text-xs tracking-widest uppercase font-serif text-[#465F4E] mb-2 font-medium flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Interactive 3D Spatial Gallery · 4:3 Ratio Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            The Living Tableaux of Flores de Mayo
          </h2>
          <p className="mt-2.5 sm:mt-3 text-stone-600 text-xs sm:text-base leading-relaxed text-balance font-sans max-w-2xl mx-auto">
            Drag, swipe, or flip through three-dimensional 4:3 perspective cards capturing sacred offerings,
            bamboo architecture, and the regal crowning procession of Reyna Elena.
          </p>
        </RevealOnScroll>

        {/* 3D Viewport Stage: exact 4:3 aspect ratio wrapper positioned cleanly below title, centered for mobile */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onMouseMove={handleMouseMoveTilt}
          onMouseLeave={() => {
            handleMouseLeaveTilt();
            handlePointerUp();
          }}
          onMouseDown={(e) => handlePointerDown(e.clientX, undefined, e.target)}
          onMouseUp={handlePointerUp}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX, e.touches[0].clientY, e.target)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handlePointerUp}
          onTouchCancel={handlePointerUp}
          className={`relative w-full max-w-4xl mx-auto h-[320px] sm:h-[440px] md:h-[500px] lg:h-[540px] mt-2 sm:mt-4 flex items-center justify-center select-none touch-pan-y ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ perspective: isMobile ? '900px' : '1200px' }}
        >
          {/* Subtle Ambient Backlight Glow behind the active card */}
          <div className="absolute w-[80%] max-w-md aspect-[4/3] rounded-3xl bg-amber-200/20 blur-2xl pointer-events-none transition-all duration-700 animate-pulse" />

          {GALLERY_ITEMS.map((item, index) => {
            // Normalized offset between -2 and 2
            const offset = (index - activeIndex + total) % total;
            let normalizedOffset = offset;
            if (offset > total / 2) {
              normalizedOffset = offset - total;
            }

            // Continuous dynamic drag offset addition
            const containerWidth = containerRef.current?.offsetWidth || (isMobile ? 360 : 680);
            const dragFactor = isMobile ? 1.45 : 1.25;
            const continuousOffset = normalizedOffset - (dragOffset / containerWidth) * dragFactor;

            const distance = Math.abs(continuousOffset);

            // Responsive 3D Geometry
            const rotateY = isMobile ? continuousOffset * -18 : continuousOffset * -24;
            const translateX = isMobile ? continuousOffset * 52 : continuousOffset * 68;
            const translateZ = isMobile ? -distance * 85 : -distance * 135;
            const scale = isMobile
              ? Math.max(0.76, 1 - distance * 0.16)
              : Math.max(0.72, 1 - distance * 0.14);

            // Hide cards that are far away to keep mobile layout completely clean
            const maxDistance = isMobile ? 1.5 : 2.2;
            const opacity = distance > maxDistance ? 0 : Math.max(0.12, 1 - distance * 0.38);
            const zIndex = Math.round(30 - distance * 10);
            const flipped = isFlipped[index];
            const isActive = Math.abs(continuousOffset) < 0.35;

            // Apply desktop 3D tilt only to active card
            const currentTiltX = isActive ? tilt.y : 0;
            const currentTiltY = isActive ? tilt.x : 0;

            return (
              <div
                key={item.id}
                onClick={() => {
                  // Only treat as click if not significantly dragged
                  if (Math.abs(dragOffset) > 8) return;
                  if (!isActive) {
                    setActiveIndex(index);
                    soundscape.playSingleChime(523.25);
                  }
                }}
                className={`absolute top-1/2 left-1/2 will-change-transform ${
                  isDragging
                    ? 'transition-none'
                    : 'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
                }`}
                style={{
                  transform: `translateX(-50%) translateY(-50%) translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY + currentTiltY}deg) rotateX(${currentTiltX}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  width: isMobile ? 'min(86vw, 360px)' : 'min(90vw, 680px)',
                  transformStyle: 'preserve-3d',
                  pointerEvents: opacity === 0 ? 'none' : 'auto'
                }}
              >
                {/* Outer floating wrapper (isolates animate-cardFloat so it doesn't conflict with 3D rotateY) */}
                <div className={`w-full aspect-[4/3] relative ${isActive && !isDragging ? 'animate-cardFloat' : ''}`} style={{ perspective: '1400px' }}>
                  {/* 3D Flipping Card Frame: pure preserve-3d without overflow-hidden */}
                  <div
                    className={`w-full h-full relative rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? 'ring-2 ring-amber-300/70 shadow-amber-900/25 shadow-2xl' : 'border border-stone-200/50 shadow-xl'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      WebkitTransformStyle: 'preserve-3d',
                      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Card Front: High-fidelity 4:3 visual presentation */}
                    <div
                      className="absolute inset-0 w-full h-full bg-stone-900 rounded-2xl overflow-hidden shadow-md"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                        pointerEvents: flipped ? 'none' : 'auto'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        loading="eager"
                        draggable={false}
                      />

                      {/* Measured contrast scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                      {/* Fluid Diagonal Shimmer Light Sweep on active card */}
                      {isActive && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmerWave" />
                        </div>
                      )}

                      {/* Floating Corner Star Accents on active card */}
                      {isActive && (
                        <>
                          <span className="absolute top-12 right-6 text-amber-200/80 text-xs animate-pulse pointer-events-none drop-shadow-md">
                            ✦
                          </span>
                          <span className="absolute bottom-20 left-6 text-amber-200/80 text-[10px] animate-pulse pointer-events-none drop-shadow-md" style={{ animationDelay: '1.2s' }}>
                            ✦
                          </span>
                        </>
                      )}

                      {/* On-Card Quick-Touch Navigation Arrows for Mobile / Touch */}
                      {isActive && (
                        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevCard();
                            }}
                            type="button"
                            className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 active:scale-80 transition-all duration-200 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg cursor-pointer"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextCard();
                            }}
                            type="button"
                            className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 active:scale-80 transition-all duration-200 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg cursor-pointer"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Top overlay metadata */}
                      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between text-white/90 text-xs z-10">
                        <div className="flex items-center gap-1.5 sm:gap-2 drop-shadow-md text-[11px] sm:text-xs">
                          <span className="font-serif italic tracking-wide text-amber-200">
                            0{index + 1}
                          </span>
                          <span aria-hidden="true" className="text-white/60">·</span>
                          <span className="capitalize">{item.category}</span>
                          <span aria-hidden="true" className="text-white/60 hidden sm:inline">·</span>
                          <span className="hidden sm:inline">4:3 Ratio</span>
                        </div>

                        {/* Flip Hint Button with active press state */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(index);
                          }}
                          type="button"
                          className="px-2.5 sm:px-3 py-1 bg-white/20 hover:bg-white/35 active:scale-90 transition-all duration-200 backdrop-blur-md rounded-full text-white text-[11px] sm:text-xs font-medium flex items-center gap-1.5 border border-white/30 shadow-xs cursor-pointer hover:border-amber-300/60"
                          title="Flip to read cultural study notes"
                        >
                          <RotateCcw className={`w-3.5 h-3.5 text-amber-200 transition-transform duration-500 ${flipped ? 'rotate-180' : ''}`} />
                          <span>Flip Facts</span>
                        </button>
                      </div>

                      {/* Bottom Card Caption */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left z-10">
                        <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight text-white drop-shadow-md leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-amber-200/95 font-serif italic text-xs sm:text-sm mt-0.5">
                          {item.subtitle}
                        </p>
                        <p className="text-stone-300 text-xs sm:text-sm line-clamp-2 mt-1.5 sm:mt-2 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Card Action footer */}
                        <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] sm:text-xs text-stone-300">
                          <span className="font-serif italic text-amber-200 truncate pr-2">
                            {item.keyFact}
                          </span>
                          {isActive && (
                            <span className="text-[11px] text-white/90 underline decoration-amber-400 decoration-1 underline-offset-2 shrink-0">
                              Active Stage
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Back: In-depth School Study Notes with isolated scrollable pane */}
                    <div
                      onWheel={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchMove={(e) => e.stopPropagation()}
                      className="absolute inset-0 w-full h-full bg-[#241F1A] text-stone-100 rounded-2xl p-4 sm:p-6 lg:p-7 flex flex-col justify-between border border-amber-900/40 shadow-2xl overflow-hidden cursor-default select-text"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        pointerEvents: flipped ? 'auto' : 'none'
                      }}
                    >
                      <div className="flex-1 min-h-0 flex flex-col">
                        <div className="flex items-center justify-between pb-2 border-b border-amber-800/40 shrink-0 select-none">
                          <div className="text-[10px] sm:text-xs font-serif tracking-widest uppercase text-amber-400">
                            Educational Archive · {item.category.toUpperCase()}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip(index);
                            }}
                            type="button"
                            className="px-2.5 py-1 bg-amber-950/60 hover:bg-amber-900/80 active:scale-90 rounded-md text-amber-200 text-[11px] sm:text-xs flex items-center gap-1 transition-all duration-200 border border-amber-800/40 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3 transition-transform duration-500 rotate-180" />
                            <span>Flip to Photo</span>
                          </button>
                        </div>

                        <div className="pt-2 sm:pt-2.5 pb-1 shrink-0 select-none">
                          <h4 className="font-serif text-base sm:text-xl lg:text-2xl font-medium text-amber-100 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-stone-400 text-[11px] sm:text-xs italic font-serif mt-0.5">
                            Historical Context & Meaning
                          </p>
                        </div>

                        {/* Dedicated Smooth Scrollable Study Notes */}
                        <div
                          onWheel={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchMove={(e) => e.stopPropagation()}
                          className="study-notes-scroll card-back-scrollable flex-1 min-h-0 overflow-y-auto overscroll-contain pr-2 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed pt-1 select-text touch-pan-y"
                          style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                          <p className="text-stone-300 font-sans leading-relaxed">{item.historicalContext}</p>
                          <p className="text-stone-400 font-sans text-xs leading-relaxed">{item.description}</p>
                          <div className="p-2 sm:p-2.5 bg-stone-900/80 rounded-lg border border-amber-900/30 text-amber-200 text-xs font-sans">
                            <strong className="text-amber-300 block mb-0.5 font-medium">Key Cultural Fact:</strong>
                            {item.keyFact}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-amber-900/40 flex items-center justify-between text-[10px] sm:text-xs text-stone-400 shrink-0 select-none mt-1">
                        <span>Philippine Folk Catholicism</span>
                        <span className="text-amber-300/80 font-medium">↕ Scroll notes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fluid Frosted Interactive Controls Bar */}
        <div className="mt-8 sm:mt-10 max-w-xl mx-auto bg-white/80 hover:bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-stone-200/90 shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Card step counter & fluid pagination indicators */}
          <div className="flex items-center gap-2">
            {GALLERY_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  soundscape.playSingleChime(523.25);
                }}
                className={`h-2.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] rounded-full cursor-pointer active:scale-80 ${
                  activeIndex === idx
                    ? 'w-8 sm:w-10 bg-[#465F4E] ring-2 ring-emerald-500/30 shadow-xs'
                    : 'w-2.5 bg-stone-300 hover:bg-stone-400 hover:scale-110'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-serif text-stone-500 ml-2 tabular-nums">
              0{activeIndex + 1} / 0{total}
            </span>
          </div>

          {/* Navigation Buttons with fluid elastic physics */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevCard}
              type="button"
              className="p-2 sm:p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 active:scale-85 transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-stone-300/80 shadow-2xs hover:shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-700/50"
              aria-label="Previous card in 3D carousel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => toggleFlip(activeIndex)}
              type="button"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 active:scale-85 border border-stone-300/80 rounded-full shadow-2xs hover:shadow-xs transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped[activeIndex] ? 'rotate-180' : ''}`} />
              <span>Flip Card</span>
            </button>

            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              type="button"
              className={`px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs font-medium rounded-full border shadow-2xs hover:shadow-xs active:scale-85 transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer flex items-center gap-1.5 ${
                isAutoplay
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300 ring-2 ring-emerald-400/40 animate-fluidPulse'
                  : 'bg-stone-100 text-stone-600 border-stone-300/80 hover:bg-stone-200'
              }`}
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-3 h-3 text-emerald-800" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-stone-600" />
                  <span>Autoplay</span>
                </>
              )}
            </button>

            <button
              onClick={nextCard}
              type="button"
              className="p-2 sm:p-2.5 rounded-full bg-[#465F4E] text-white hover:bg-[#394F40] active:scale-85 border border-[#465F4E] shadow-2xs hover:shadow-xs transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-700/50"
              aria-label="Next card in 3D carousel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interaction hints with subtle animation */}
        <div className="mt-4 sm:mt-5 text-center text-[11px] sm:text-xs text-stone-500 flex items-center justify-center gap-3">
          <span className="flex items-center gap-1">
            <MoveHorizontal className="w-3.5 h-3.5 text-stone-400 animate-pulse" />
            <span>Swipe or drag to explore</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>Tap to center card</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Spacebar to flip</span>
        </div>
      </div>
    </section>
  );
};
