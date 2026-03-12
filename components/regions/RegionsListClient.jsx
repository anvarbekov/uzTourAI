'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Star, ArrowRight, Search, Filter } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { regions } from '../../data/regions';
import { cn } from '../../lib/utils';

export default function RegionsListClient() {
  const { t, getText } = useLanguageStore();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = regions.filter(r => {
    const name = getText(r.name).toLowerCase();
    return name.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero banner */}
      <div className="relative py-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-islamic opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              {t('regions.title')}
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto mb-8">
              {t('regions.subtitle')}
            </p>
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t('common.search') + '...'}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-gold-500 transition-colors backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((region, i) => (
            <Link
              key={region.id}
              href={`/regions/${region.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-gold-500/40 bg-[var(--bg-card)] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={region.thumbnail}
                  alt={getText(region.name)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                  <Star size={11} className="fill-gold-400 text-gold-400" />
                  <span className="text-white text-xs font-semibold">{region.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-gold-500 transition-colors leading-tight">
                    {getText(region.name)}
                  </h3>
                  <span className="text-2xl flex-shrink-0">{region.icon}</span>
                </div>
                <p className="text-[var(--text-secondary)] text-xs font-body line-clamp-2 leading-relaxed mb-3">
                  {getText(region.description)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {region.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] text-[10px] font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={15} className="text-[var(--text-muted)] group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-[var(--text-secondary)] font-body">Hech narsa topilmadi</p>
          </div>
        )}
      </div>
    </div>
  );
}
