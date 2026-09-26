import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Bookmark, BookmarkCheck, Download, Check } from 'lucide-react';
import { PROCESSION_SCHEDULE, ProcessionEvent } from '../data/floresData';
import { RevealOnScroll } from './RevealOnScroll';

export const ProcessionSchedule: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [savedEvents, setSavedEvents] = useState<string[]>([]);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'Metro Manila', label: 'Metro Manila' },
    { id: 'Central Luzon', label: 'Central Luzon' },
    { id: 'Ilocos Region', label: 'Ilocos Region' },
    { id: 'Visayas', label: 'Visayas' }
  ];

  const filteredEvents =
    selectedRegion === 'all'
      ? PROCESSION_SCHEDULE
      : PROCESSION_SCHEDULE.filter((ev) => ev.region === selectedRegion);

  const toggleSave = (id: string) => {
    setSavedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const generateIcsCalendar = (ev: ProcessionEvent) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Flores de Mayo Heritage//Procession Schedule//EN
BEGIN:VEVENT
SUMMARY:${ev.name}
DESCRIPTION:${ev.highlight} - Route: ${ev.route}
LOCATION:${ev.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${ev.id}-schedule.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(ev.id);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#F4EFEA] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header */}
        <RevealOnScroll direction="up" className="max-w-3xl mb-10">
          <div className="text-xs font-serif tracking-widest uppercase text-[#465F4E] mb-2 font-medium">
            Local Heritage Calendars & Fieldwork Timetable
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight text-balance">
            Schedule of Local Processions
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Plan your cultural documentation or visit. Explore verified schedules for historic Santacruzan
            parades, children's floral offering novenas, and grand community processions.
          </p>
        </RevealOnScroll>

        {/* Region Filter Buttons */}
        <RevealOnScroll direction="up" delay={80} className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-300">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 active:scale-95 cursor-pointer whitespace-nowrap ${
                  selectedRegion === reg.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-mono">
            {savedEvents.length > 0
              ? `${savedEvents.length} Procession${savedEvents.length > 1 ? 's' : ''} Saved to Itinerary`
              : 'Save events to your itinerary'}
          </div>
        </RevealOnScroll>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => {
            const isSaved = savedEvents.includes(event.id);
            return (
              <RevealOnScroll key={event.id} delay={idx * 60} direction="up">
                <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-out flex flex-col justify-between h-full">
                  <div>
                    {/* Top bar */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-2.5 border-b border-stone-100">
                      <span className="font-serif font-semibold text-[#465F4E]">
                        {event.region}
                      </span>
                      <span className="text-[11px] text-stone-500 font-mono">
                        {event.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-medium text-stone-900 mb-2 leading-snug">
                      {event.name}
                    </h3>

                    {/* Venue & Date */}
                    <div className="space-y-2 mt-4 text-xs text-stone-600 font-sans">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-[#465F4E] shrink-0 mt-0.5" />
                        <span className="font-medium text-stone-900">{event.date}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#465F4E] shrink-0 mt-0.5" />
                        <span className="tabular-nums">{event.time}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#465F4E] shrink-0 mt-0.5" />
                        <span>{event.location}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-[#465F4E] shrink-0 mt-0.5" />
                        <span>~{event.expectedSagalas} Expected Sagalas & Queens</span>
                      </div>
                    </div>

                    {/* Procession Route */}
                    <div className="mt-4 p-3 bg-[#FAF8F5] rounded-xl border border-stone-200/80 text-xs">
                      <span className="font-semibold text-stone-800 block mb-1">Procession Route:</span>
                      <p className="text-stone-600 leading-relaxed font-sans">{event.route}</p>
                    </div>

                    {/* Highlight */}
                    <div className="mt-3 text-xs text-stone-600 italic font-sans">
                      <strong className="text-stone-700 not-italic">Highlight:</strong> {event.highlight}
                    </div>
                  </div>

                  {/* Bottom Actions with immediate micro-interactions */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleSave(event.id)}
                      type="button"
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all duration-150 active:scale-95 cursor-pointer ${
                        isSaved
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      {isSaved ? (
                        <>
                          <BookmarkCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Saved</span>
                        </>
                      ) : (
                        <>
                          <Bookmark className="w-3.5 h-3.5 text-stone-500" />
                          <span>Save</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => generateIcsCalendar(event)}
                      type="button"
                      className="px-3.5 py-1.5 text-xs font-medium bg-[#465F4E] hover:bg-[#394F40] active:scale-95 text-white rounded-lg flex items-center gap-1.5 transition-all duration-150 cursor-pointer shadow-2xs"
                    >
                      {downloadSuccess === event.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-200" />
                          <span>Added to Cal!</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Add to Cal (.ics)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Cultural Fieldwork Etiquette Guide */}
        <RevealOnScroll direction="up" delay={120} className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs max-w-4xl">
          <h4 className="font-serif text-xl font-medium text-stone-900 mb-2">
            Fieldwork & Visitor Etiquette Guide for Students
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed font-sans">
            If you are attending a live Santacruzan for your school documentation, please follow these
            respectful parish guidelines:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700 font-sans">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="block text-stone-900 mb-1">1. Respectful Attire</strong>
              Wear church-appropriate modest clothing (Sunday attire or Barong/blouse) as processions are
              sacred liturgical devotions.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="block text-stone-900 mb-1">2. Non-Intrusive Photos</strong>
              Avoid stepping inside the moving floral arches or blocking the path of the brass band and candle
              bearers.
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <strong className="block text-stone-900 mb-1">3. Join the Chants</strong>
              Devotees recite the rosary and sing "Dios Te Salve". Joining the response honors the community’s
              warm hospitality.
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
