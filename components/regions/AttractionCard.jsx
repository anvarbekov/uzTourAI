"use client";
import { useState } from "react";
import { Star, Clock, Ticket, Heart, X, MapPin, Tag } from "lucide-react";
import useLanguageStore from "../../lib/languageStore";
import { formatPrice, cn } from "../../lib/utils";
import { categories } from "../../data/regions";

export default function AttractionCard({
  attraction,
  viewMode = "grid",
  saved,
  onToggleSave,
}) {
  const { getText, language } = useLanguageStore();
  const [modalOpen, setModalOpen] = useState(false);

  const cat = categories.find((c) => c.id === attraction.category);

  return (
    <>
      {/* ═══ CARD ═══ */}
      <div
        className={cn(
          "rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:-translate-y-1 group",
          viewMode === "list" ? "flex" : "",
          "hover:border-gold-500/30 hover:shadow-card-hover",
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative overflow-hidden",
            viewMode === "list" ? "w-36 h-36 flex-shrink-0" : "h-48",
          )}
        >
          <img
            src={attraction.image}
            alt={getText(attraction.name)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category */}
          {cat && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-body">
              {cat.icon} {cat.label[language] || cat.label.en}
            </div>
          )}

          {/* Save */}
          <button
            onClick={onToggleSave}
            className={cn(
              "absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all",
              saved
                ? "bg-rose-500 border-rose-400 text-white"
                : "bg-black/40 border-white/20 text-white hover:bg-rose-500/50",
            )}
          >
            <Heart size={14} className={saved ? "fill-current" : ""} />
          </button>

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1">
            <Star size={12} className="fill-gold-400 text-gold-400" />
            <span className="text-white text-xs font-semibold">
              {attraction.rating}
            </span>
            <span className="text-white/60 text-xs">
              ({attraction.reviewCount})
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-body font-semibold text-[var(--text-primary)] text-sm mb-1.5 line-clamp-1 group-hover:text-gold-500 transition-colors">
            {getText(attraction.name)}
          </h3>
          <p className="text-[var(--text-muted)] text-xs font-body line-clamp-2 leading-relaxed mb-3 flex-1">
            {getText(attraction.description)}
          </p>

          <div className="flex items-center justify-between text-xs font-body text-[var(--text-muted)]">
            <div className="flex items-center gap-3">
              {attraction.openHours && (
                <span className="flex items-center gap-1">
                  <Clock size={11} className="text-gold-500" />
                  {attraction.openHours}
                </span>
              )}
              {attraction.entryFee != null && (
                <span className="flex items-center gap-1">
                  <Ticket size={11} className="text-gold-500" />
                  {attraction.entryFee === 0
                    ? "Bepul"
                    : formatPrice(attraction.entryFee, attraction.currency)}
                </span>
              )}
            </div>

            {/* Batafsil tugma */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-body font-semibold hover:bg-gold-500 hover:text-white transition-all"
            >
              Batafsil →
            </button>
          </div>
        </div>
      </div>

      {/* ═══ MODAL ═══ */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          {/* Modal box */}
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl">
            {/* Rasm */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={attraction.image}
                alt={getText(attraction.name)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Yopish tugmasi */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition-all"
              >
                <X size={18} />
              </button>

              {/* Kategoriya */}
              {cat && (
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-body">
                  {cat.icon} {cat.label[language] || cat.label.en}
                </div>
              )}

              {/* Reyting */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                  <Star size={13} className="fill-gold-400 text-gold-400" />
                  <span className="text-white text-sm font-semibold">
                    {attraction.rating}
                  </span>
                  <span className="text-white/60 text-xs">
                    ({attraction.reviewCount} sharh)
                  </span>
                </div>
              </div>
            </div>

            {/* Kontent */}
            <div className="p-6">
              {/* Nom */}
              <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">
                {getText(attraction.name)}
              </h2>

              {/* Tavsif */}
              <p className="text-[var(--text-secondary)] font-body text-sm leading-relaxed mb-6">
                {getText(attraction.description)}
              </p>

              {/* Ma'lumotlar grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {attraction.openHours && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <Clock size={18} className="text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="text-[var(--text-muted)] text-xs font-body">
                        Ish vaqti
                      </div>
                      <div className="text-[var(--text-primary)] text-sm font-body font-medium">
                        {attraction.openHours}
                      </div>
                    </div>
                  </div>
                )}

                {attraction.entryFee != null && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <Ticket size={18} className="text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="text-[var(--text-muted)] text-xs font-body">
                        Kirish narxi
                      </div>
                      <div className="text-[var(--text-primary)] text-sm font-body font-medium">
                        {attraction.entryFee === 0
                          ? "Bepul"
                          : formatPrice(
                              attraction.entryFee,
                              attraction.currency,
                            )}
                      </div>
                    </div>
                  </div>
                )}

                {attraction.priceRange && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <Tag size={18} className="text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="text-[var(--text-muted)] text-xs font-body">
                        Narx darajasi
                      </div>
                      <div className="text-[var(--text-primary)] text-sm font-body font-medium">
                        {attraction.priceRange}
                      </div>
                    </div>
                  </div>
                )}

                {attraction.tags?.[0] && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <MapPin size={18} className="text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="text-[var(--text-muted)] text-xs font-body">
                        Tur
                      </div>
                      <div className="text-[var(--text-primary)] text-sm font-body font-medium">
                        {attraction.tags[0]}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Teglar */}
              {attraction.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {attraction.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 dark:text-gold-400 text-xs font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Yopish */}
              <button
                onClick={() => setModalOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm hover:opacity-90 transition-all"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
