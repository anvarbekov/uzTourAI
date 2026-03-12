'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { Star, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { regions } from '../../data/regions';
import { cn } from '../../lib/utils';

function RegionCard({ region, index }) {
  const { getText, t } = useLanguageStore();

  return (
    <Link
      href={`/regions/${region.slug}`}
      className="group relative flex-shrink-0 w-[300px] sm:w-[340px] rounded-2xl overflow-hidden cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={region.thumbnail}
          alt={getText(region.name)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Top badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 text-gold-300 text-xs font-body font-medium">
            {region.icon} {region.tags[0]}
          </div>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
          <Star size={12} className="fill-gold-400 text-gold-400" />
          <span className="text-white text-xs font-body font-semibold">{region.rating}</span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-gold-300 transition-colors">
            {getText(region.name)}
          </h3>
          <p className="text-white/70 text-sm font-body leading-relaxed line-clamp-2 mb-4">
            {getText(region.description)}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white/60">
              <MapPin size={13} />
              <span className="text-xs font-body">{region.reviewCount} {t('regions.reviews')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/20 text-gold-300 text-xs font-body font-semibold group-hover:bg-gold-500 group-hover:text-white transition-all">
              {t('regions.explore')}
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function RegionsSection() {
  const { t } = useLanguageStore();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 dark:text-gold-400 text-xs font-body font-medium mb-3">
              <MapPin size={13} />
              Uzbekiston viloyatlari
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-3">
              {t('regions.title')}
            </h2>
            <p className="text-[var(--text-secondary)] font-body max-w-xl leading-relaxed">
              {t('regions.subtitle')}
            </p>
          </div>

          {/* Nav buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-gold-500 hover:border-gold-500/50 flex items-center justify-center transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-gold-500 hover:border-gold-500/50 flex items-center justify-center transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {regions.map((region, i) => (
            <RegionCard key={region.id} region={region} index={i} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] font-body font-medium text-sm hover:text-gold-500 hover:border-gold-500/50 transition-all group"
          >
            {t('common.viewAll')} viloyatlar
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
