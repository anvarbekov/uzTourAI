'use client';
import { useState } from 'react';
import { Search, Filter, Star, MapPin } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { hotelsMock, regions } from '../../data/regions';
import HotelCard from './HotelCard';

// Aggregate all hotels
const allHotels = Object.entries(hotelsMock).flatMap(([regionId, hotels]) =>
  hotels.map(h => ({ ...h, regionId }))
);

export default function HotelsPageClient() {
  const { t, getText } = useLanguageStore();
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const filtered = allHotels
    .filter(h => {
      const matchSearch = h.name.toLowerCase().includes(search.toLowerCase());
      const matchRegion = regionFilter === 'all' || h.regionId === regionFilter;
      return matchSearch && matchRegion;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="relative py-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-islamic opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              🏨 {t('nav.hotels')}
            </h1>
            <p className="text-white/70 font-body text-base max-w-lg mx-auto">
              O'zbekiston bo'ylab eng yaxshi mehmonxonalarni toping va bron qiling
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-48">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Mehmonxona nomi..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] font-body text-sm focus:outline-none focus:border-gold-500"
            />
          </div>
          <select
            value={regionFilter}
            onChange={e => setRegionFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] font-body text-sm focus:outline-none focus:border-gold-500"
          >
            <option value="all">Barcha viloyatlar</option>
            {regions.map(r => (
              <option key={r.id} value={r.id}>{r.name.uz}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] font-body text-sm focus:outline-none focus:border-gold-500"
          >
            <option value="rating">Reyting bo'yicha</option>
            <option value="price_asc">Narx: arzondan qimmatchiga</option>
            <option value="price_desc">Narx: qimmatchidan arzoniga</option>
          </select>
        </div>

        {/* Results */}
        <p className="text-[var(--text-muted)] font-body text-sm mb-6">
          {filtered.length} ta mehmonxona topildi
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(hotel => (
            <HotelCard key={`${hotel.regionId}-${hotel.id}`} hotel={hotel} regionSlug={hotel.regionId} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🏨</div>
            <p className="text-[var(--text-secondary)] font-body">Mehmonxona topilmadi</p>
          </div>
        )}
      </div>
    </div>
  );
}
