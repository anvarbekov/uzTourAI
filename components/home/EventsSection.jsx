'use client';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';

const events = [
  {
    id: 1,
    title: { uz: "Navruz Bayrami", en: "Navruz Festival", ru: "Праздник Навруз" },
    date: "21 Mart 2026",
    location: { uz: "Butun O'zbekiston", en: "All Uzbekistan", ru: "По всему Узбекистану" },
    image: "/images/navroz2.jpg",
    category: { uz: "Milliy bayram", en: "National Holiday", ru: "Национальный праздник" },
    color: "from-green-500/20 to-emerald-600/20",
    border: "border-green-500/30",
  },
  {
    id: 2,
    title: { uz: "Sharq Taronalari", en: "Sharq Taronalari", ru: "Шарк Тароналари" },
    date: "August 2026",
    location: { uz: "Samarqand", en: "Samarkand", ru: "Самарканд" },
    image: "/images/sharq.jpg",
    category: { uz: "Musiqa festivali", en: "Music Festival", ru: "Музыкальный фестиваль" },
    color: "from-purple-500/20 to-violet-600/20",
    border: "border-purple-500/30",
  },
  {
    id: 3,
    title: { uz: "Buxoro Bahorgi Festivali", en: "Bukhara Spring Festival", ru: "Весенний фестиваль Бухары" },
    date: "Aprel 2026",
    location: { uz: "Buxoro", en: "Bukhara", ru: "Бухара" },
    image: "/images/festival.jpg",
    category: { uz: "Madaniy festival", en: "Cultural Festival", ru: "Культурный фестиваль" },
    color: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/30",
  },
];

export default function EventsSection() {
  const { t, getText } = useLanguageStore();

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-body font-medium mb-3">
            <Calendar size={13} />
            2025
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)] mb-3">
            {t('events.title')}
          </h2>
          <p className="text-[var(--text-secondary)] font-body max-w-xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={event.id}
              className={`group relative rounded-2xl border ${event.border} bg-gradient-to-br ${event.color} backdrop-blur-sm overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={getText(event.title)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--bg-card)]/80 text-[var(--text-secondary)] text-xs font-body mb-3">
                  {getText(event.category)}
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3 group-hover:text-gold-500 transition-colors">
                  {getText(event.title)}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs font-body">
                      <Calendar size={13} className="text-gold-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs font-body">
                      <MapPin size={13} className="text-gold-500" />
                      {getText(event.location)}
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-[var(--text-muted)] group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
