import React, { useState } from 'react';
import { Sparkles, Layers, Moon, Sun, Check, Share2, Crown, Palette } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ArchFrame {
  id: string;
  name: string;
  shape: string;
  description: string;
}

interface FlowerChoice {
  id: string;
  name: string;
  colorHex: string;
  scent: string;
}

interface LightingChoice {
  id: string;
  name: string;
  glow: string;
}

interface QueenChoice {
  id: string;
  name: string;
  symbol: string;
  gownColor: string;
}

const ARCH_FRAMES: ArchFrame[] = [
  {
    id: 'parabolic',
    name: 'Katutubong Parabolic Bamboo',
    shape: 'rounded-t-full border-t-8 border-x-8',
    description: 'Traditional native bamboo bent into a natural graceful parabola, bound with abaca twine.'
  },
  {
    id: 'colonial',
    name: 'Colonial Kamistisuhan Triple Arch',
    shape: 'rounded-t-[4rem] border-t-8 border-x-8',
    description: 'Heritage Malolos design with tiered crown scrolls influenced by 19th-century church portals.'
  },
  {
    id: 'pointed',
    name: 'Gothic Folk Pinnacle Arch',
    shape: 'rounded-t-[6rem] border-t-8 border-x-8',
    description: 'Sharp elevated peak symbolizing spiritual aspiration toward the heavens.'
  }
];

const FLOWER_CHOICES: FlowerChoice[] = [
  { id: 'sampaguita', name: 'Sampaguita Garlands', colorHex: '#FFFFFF', scent: 'Pure White & Sweet' },
  { id: 'ilang', name: 'Golden Ilang-Ilang', colorHex: '#F6E05E', scent: 'Cascading Honey Amber' },
  { id: 'bougainvillea', name: 'Crimson Bougainvillea', colorHex: '#E53E3E', scent: 'Vibrant Festive Rose' },
  { id: 'rosal', name: 'Cream Rosal & Palms', colorHex: '#F7FAFC', scent: 'Lush Gardenia & Greenery' }
];

const LIGHTING_CHOICES: LightingChoice[] = [
  { id: 'fairy', name: 'Warm Fairy Garland Lights', glow: 'shadow-[0_0_25px_rgba(252,211,77,0.6)]' },
  { id: 'lanterns', name: 'Hanging Capiz Tin Parols', glow: 'shadow-[0_0_35px_rgba(251,191,36,0.8)]' },
  { id: 'candle', name: 'Subdued Candlelight Twilight', glow: 'shadow-[0_0_15px_rgba(245,158,11,0.4)]' }
];

const QUEEN_CHOICES: QueenChoice[] = [
  { id: 'elena', name: 'Reyna Elena with True Cross', symbol: '✝️ Holy Cross', gownColor: 'from-amber-100 to-amber-200' },
  { id: 'flores', name: 'Reyna de las Flores', symbol: '🌸 Floral Bouquet', gownColor: 'from-rose-100 to-rose-200' },
  { id: 'esperanza', name: 'Reyna Esperanza', symbol: '⚓ Anchor of Hope', gownColor: 'from-emerald-100 to-emerald-200' }
];

export const VirtualArkoWorkshop: React.FC = () => {
  const [selectedFrame, setSelectedFrame] = useState(ARCH_FRAMES[0]);
  const [selectedFlower, setSelectedFlower] = useState(FLOWER_CHOICES[0]);
  const [selectedLighting, setSelectedLighting] = useState(LIGHTING_CHOICES[0]);
  const [selectedQueen, setSelectedQueen] = useState(QUEEN_CHOICES[0]);
  const [isNightMode, setIsNightMode] = useState(true);
  const [copiedSpec, setCopiedSpec] = useState(false);

  const handleCopySpec = () => {
    const text = `SINING NG ARKO (PHILIPPINE BAMBOO ARCH) SPECIFICATION:
Frame Architecture: ${selectedFrame.name} - ${selectedFrame.description}
Floral Dressing: ${selectedFlower.name} (${selectedFlower.scent})
Illumination: ${selectedLighting.name}
Featured Sagala: ${selectedQueen.name} (${selectedQueen.symbol})
Preserving Philippine Ephemeral Folk Architecture.`;

    navigator.clipboard.writeText(text);
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 2500);
  };

  return (
    <section id="arko-workshop" className="py-16 md:py-24 bg-[#F5F1EB] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Interactive Cultural Craft Workshop
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            Sining ng Katutubong Arko Studio
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans text-balance">
            Design your custom Philippine festival bamboo arch. Choose native architectural curvatures,
            fragrant floral dressings, and glowing evening lanterns honoring Queen Helena.
          </p>
        </RevealOnScroll>

        {/* Studio Layout: Live 2D/3D Interactive Stage + Control Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Interactive Visual Stage */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Viewport Card */}
            <div
              className={`w-full max-w-md aspect-[4/3] sm:h-[480px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 shadow-xl border ${
                isNightMode
                  ? 'bg-gradient-to-b from-[#181D1A] via-[#212723] to-[#2B342F] border-stone-800'
                  : 'bg-gradient-to-b from-sky-100 via-amber-50 to-[#FAF8F5] border-stone-300'
              }`}
            >
              {/* Day / Night Scene Toggle */}
              <div className="flex items-center justify-between z-20">
                <span
                  className={`text-xs font-serif uppercase tracking-wider font-semibold ${
                    isNightMode ? 'text-amber-200' : 'text-[#22352A]'
                  }`}
                >
                  Live Arko Simulation · {isNightMode ? 'Dusk Procession' : 'Daylight Novena'}
                </span>
                <button
                  onClick={() => setIsNightMode(!isNightMode)}
                  type="button"
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer border ${
                    isNightMode
                      ? 'bg-stone-800 text-amber-200 border-amber-800/60 hover:bg-stone-700'
                      : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-100 shadow-2xs'
                  }`}
                >
                  {isNightMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-stone-600" />}
                  <span>{isNightMode ? 'Day View' : 'Night Glow'}</span>
                </button>
              </div>

              {/* The Handcrafted Arch Structure Frame (Dynamic CSS Graphic) */}
              <div className="relative my-auto w-full max-w-xs mx-auto h-[260px] sm:h-[300px] flex items-end justify-center">
                {/* Arch Outer Bamboo Curve */}
                <div
                  className={`absolute inset-0 w-full h-full border-[#C8A265] transition-all duration-500 ${
                    selectedFrame.shape
                  } ${isNightMode ? selectedLighting.glow : 'shadow-md'}`}
                  style={{
                    borderStyle: 'solid',
                    borderColor: '#C79A54',
                    borderWidth: '12px',
                    borderBottomWidth: '0px'
                  }}
                >
                  {/* Garland Floral Ropes draping the arch */}
                  <div className="absolute -top-3 left-0 right-0 flex justify-between px-2">
                    <span className="text-xl animate-bounce" style={{ animationDuration: '3s' }}>
                      🌸
                    </span>
                    <span className="text-xl animate-bounce" style={{ animationDuration: '2.4s' }}>
                      ✨
                    </span>
                    <span className="text-xl animate-bounce" style={{ animationDuration: '3.2s' }}>
                      🌸
                    </span>
                  </div>

                  {/* Left & Right Floral Pillars */}
                  <div className="absolute top-12 left-1 text-xs opacity-90">🌺</div>
                  <div className="absolute top-24 left-1 text-xs opacity-90">🌼</div>
                  <div className="absolute top-12 right-1 text-xs opacity-90">🌺</div>
                  <div className="absolute top-24 right-1 text-xs opacity-90">🌼</div>

                  {/* Hanging Lighting Lanterns */}
                  {selectedLighting.id === 'lanterns' && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse">
                      🏮
                    </div>
                  )}
                  {selectedLighting.id === 'fairy' && (
                    <div className="absolute inset-x-2 top-0 flex justify-around text-xs text-amber-200 animate-pulse">
                      <span>✦</span>
                      <span>✦</span>
                      <span>✦</span>
                      <span>✦</span>
                    </div>
                  )}
                </div>

                {/* Queen Silhouette / Figure inside Arch */}
                <div className="z-10 flex flex-col items-center pb-2">
                  <div className="w-16 sm:w-20 h-28 sm:h-36 rounded-t-3xl bg-gradient-to-t from-stone-800 to-amber-100 flex flex-col items-center justify-between p-2 shadow-lg border border-amber-300/40 relative">
                    <Crown className="w-4 h-4 text-amber-500" />
                    <span className="text-base sm:text-lg">{selectedQueen.symbol.slice(0, 2)}</span>
                    <span className="text-[9px] font-sans font-medium text-stone-900 bg-white/90 px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                      {selectedQueen.name.split(' ')[0]}
                    </span>
                  </div>
                  <div className="w-24 sm:w-28 h-3 bg-stone-950/40 rounded-full blur-xs mt-1" />
                </div>
              </div>

              {/* Bottom Caption Pill inside canvas */}
              <div className="z-20 text-center">
                <span
                  className={`text-xs font-serif italic ${
                    isNightMode ? 'text-stone-300' : 'text-stone-700'
                  }`}
                >
                  {selectedFrame.name} dressed in {selectedFlower.name}
                </span>
              </div>
            </div>

            {/* Specification Export Button */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={handleCopySpec}
                type="button"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 active:scale-95 text-stone-800 border border-stone-300 text-xs font-medium flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                {copiedSpec ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Arko Specifications Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-[#465F4E]" />
                    <span>Copy Arko Specs for School Project</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Customization Controls */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-6">
            {/* Control 1: Frame Architecture */}
            <div>
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#465F4E] font-semibold mb-2.5">
                <Layers className="w-4 h-4" />
                <span>1. Bamboo Frame Style</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {ARCH_FRAMES.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame)}
                    type="button"
                    className={`p-3 rounded-xl border text-left transition-all active:scale-95 cursor-pointer ${
                      selectedFrame.id === frame.id
                        ? 'border-[#465F4E] bg-emerald-50/70 text-[#22352A] shadow-2xs'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <span className="font-serif text-xs font-medium block leading-tight">
                      {frame.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Floral Dressing */}
            <div>
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#465F4E] font-semibold mb-2.5">
                <Palette className="w-4 h-4" />
                <span>2. Flower Garlands</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {FLOWER_CHOICES.map((flower) => (
                  <button
                    key={flower.id}
                    onClick={() => setSelectedFlower(flower)}
                    type="button"
                    className={`p-3 rounded-xl border text-left transition-all active:scale-95 cursor-pointer flex items-center gap-2.5 ${
                      selectedFlower.id === flower.id
                        ? 'border-[#465F4E] bg-emerald-50/70 text-[#22352A] shadow-2xs'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-stone-300 shrink-0"
                      style={{ backgroundColor: flower.colorHex }}
                    />
                    <div>
                      <span className="font-serif text-xs font-medium block leading-tight">
                        {flower.name}
                      </span>
                      <span className="text-[10px] text-stone-500 font-sans">{flower.scent}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Illumination & Lighting */}
            <div>
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#465F4E] font-semibold mb-2.5">
                <Sparkles className="w-4 h-4" />
                <span>3. Procession Lighting</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {LIGHTING_CHOICES.map((light) => (
                  <button
                    key={light.id}
                    onClick={() => setSelectedLighting(light)}
                    type="button"
                    className={`p-3 rounded-xl border text-left transition-all active:scale-95 cursor-pointer ${
                      selectedLighting.id === light.id
                        ? 'border-[#465F4E] bg-emerald-50/70 text-[#22352A] shadow-2xs'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <span className="font-serif text-xs font-medium block leading-tight">
                      {light.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Featured Sagala */}
            <div>
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#465F4E] font-semibold mb-2.5">
                <Crown className="w-4 h-4" />
                <span>4. Procession Muse (Sagala)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {QUEEN_CHOICES.map((queen) => (
                  <button
                    key={queen.id}
                    onClick={() => setSelectedQueen(queen)}
                    type="button"
                    className={`p-3 rounded-xl border text-left transition-all active:scale-95 cursor-pointer ${
                      selectedQueen.id === queen.id
                        ? 'border-[#465F4E] bg-emerald-50/70 text-[#22352A] shadow-2xs'
                        : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <span className="font-serif text-xs font-medium block leading-tight">
                      {queen.name}
                    </span>
                    <span className="text-[10px] text-stone-500 font-sans mt-0.5 block">
                      {queen.symbol}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
