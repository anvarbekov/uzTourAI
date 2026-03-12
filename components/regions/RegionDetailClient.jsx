'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, MapPin, Clock, Ticket, Phone, Globe, ChevronRight, Filter, Grid, List, Heart, Share2 } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { getRegionById, categories, regionAttractions, regionHotels } from '../../data/regions';
import { cn, formatPrice } from '../../lib/utils';
import HotelCard from '../hotels/HotelCard';
import AttractionCard from './AttractionCard';

export default function RegionDetailClient({ slug }) {
  const { t, getText, language } = useLanguageStore();
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [savedItems, setSavedItems] = useState(new Set());

  const region = getRegionById(slug);
  if (!region) return <div className="pt-24 text-center py-20 text-[var(--text-secondary)]">Viloyat topilmadi</div>;

  // Mock data: use samarkand data for all regions for demo
  // const attractions = attractionsMock[slug] || attractionsMock.samarkand || [];
const hotels = regionHotels[slug] || [];
const attractions = regionAttractions[slug] || [];


  const filteredAttractions = activeCategory === 'all' || activeCategory === 'hotels'
    ? attractions
    : attractions.filter(a => a.category === activeCategory);

  const toggleSave = (id) => {
    setSavedItems(prev => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={region.heroImage}
          alt={getText(region.name)}
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-black/5 to-black/50" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-translation" /> */}

        {/* Back button */}
        <div className="absolute top-24 left-6 sm:left-10">
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-body hover:bg-black/60 transition-all"
          >
            <ArrowLeft size={16} />
            {t('common.back')}
          </Link>
        </div>

        {/* Region info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {region.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-body">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
                  {region.icon} {getText(region.name)}
                </h1>
                <div className="flex items-center gap-4 text-white/70 text-sm font-body">
                  <div className="flex items-center gap-1.5">
                    <Star size={15} className="fill-gold-400 text-gold-400" />
                    <span className="text-white font-semibold">{region.rating}</span>
                    <span>({region.reviewCount} {t('regions.reviews')})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{region.area}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">
                  <Share2 size={16} />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-rose-500/30 transition-all">
                  <Heart size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-3">
              {/* Region info card */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-3 text-sm">
                  {getText(region.name)} haqida
                </h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-[var(--text-muted)]">Aholi</span>
                    <span className="text-[var(--text-primary)] font-medium">{region.population}</span>
                  </div>
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-[var(--text-muted)]">Maydon</span>
                    <span className="text-[var(--text-primary)] font-medium">{region.area}</span>
                  </div>
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-[var(--text-muted)]">Iqlim</span>
                    <span className="text-[var(--text-primary)] font-medium">{getText(region.climate)}</span>
                  </div>
                </div>
                <div className="gold-divider my-3" />
                <div className="text-xs font-body text-[var(--text-muted)]">
                  <span className="font-medium text-gold-600 dark:text-gold-400">Eng yaxshi vaqt: </span>
                  {region.bestSeason[language] || region.bestSeason.en}
                </div>
              </div>

              {/* Category filter */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden">
                <div className="px-4 pt-4 pb-2">
                  <h3 className="font-body font-semibold text-[var(--text-primary)] text-sm mb-2">Kategoriyalar</h3>
                </div>
                <div className="pb-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-colors',
                      activeCategory === 'all'
                        ? 'bg-gold-500/10 text-gold-600 dark:text-gold-400'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'
                    )}
                  >
                    <span>🗺️</span>
                    <span>{t('common.all')}</span>
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-colors',
                        activeCategory === cat.id
                          ? 'bg-gold-500/10 text-gold-600 dark:text-gold-400'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'
                      )}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label[language] || cat.label.en}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Description */}
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 mb-6">
              <p className="text-[var(--text-secondary)] font-body leading-relaxed">
                {getText(region.description)}
              </p>
            </div>

            {/* Hotels section (when category is hotels) */}
            {(activeCategory === 'hotels' || activeCategory === 'all') && hotels.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  🏨 Mehmonxonalar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} regionSlug={slug} />
                  ))}
                </div>
              </div>
            )}

            {/* Attractions */}
            {activeCategory !== 'hotels' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-xl text-[var(--text-primary)]">
                    {activeCategory === 'all' ? 'Barcha joylar' : categories.find(c => c.id === activeCategory)?.label[language] || 'Joylar'}
                  </h2>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setViewMode('grid')} className={cn('p-2 rounded-lg transition-colors', viewMode === 'grid' ? 'bg-gold-500/10 text-gold-500' : 'text-[var(--text-muted)] hover:bg-[var(--bg-secondary)]')}>
                      <Grid size={16} />
                    </button>
                    <button onClick={() => setViewMode('list')} className={cn('p-2 rounded-lg transition-colors', viewMode === 'list' ? 'bg-gold-500/10 text-gold-500' : 'text-[var(--text-muted)] hover:bg-[var(--bg-secondary)]')}>
                      <List size={16} />
                    </button>
                  </div>
                </div>

                <div className={cn(
                  'gap-4',
                  viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col'
                )}>
                  {filteredAttractions.map(attraction => (
                    <AttractionCard
                      key={attraction.id}
                      attraction={attraction}
                      viewMode={viewMode}
                      saved={savedItems.has(attraction.id)}
                      onToggleSave={() => toggleSave(attraction.id)}
                    />
                  ))}
                </div>

                {filteredAttractions.length === 0 && (
                  <div className="text-center py-12 text-[var(--text-secondary)] font-body">
                    Bu kategoriyada hozircha joy mavjud emas
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
