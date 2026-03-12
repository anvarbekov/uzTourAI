'use client';
import { useState } from 'react';
import { Star, Wifi, Car, Coffee, Waves, ArrowRight } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { formatPrice, cn } from '../../lib/utils';
import BookingModal from './BookingModal';

const amenityIcons = {
  WiFi: Wifi,
  Pool: Waves,
  Restaurant: Coffee,
  Parking: Car,
};

export default function HotelCard({ hotel, regionSlug }) {
  const { getText, t } = useLanguageStore();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Stars */}
          <div className="absolute top-3 left-3 flex items-center gap-0.5">
            {[...Array(hotel.stars)].map((_, i) => (
              <Star key={i} size={12} className="fill-gold-400 text-gold-400" />
            ))}
          </div>
          {/* Rating */}
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm flex items-center gap-1">
            <Star size={11} className="fill-gold-400 text-gold-400" />
            <span className="text-white text-xs font-semibold">{hotel.rating}</span>
          </div>
          {/* Price */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white text-xs font-body font-bold shadow-glow-gold">
            {formatPrice(hotel.price, hotel.currency)}
            <span className="opacity-70 font-normal"> /{t('booking.perNight')}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-display font-bold text-[var(--text-primary)] text-base mb-1 group-hover:text-gold-500 transition-colors">
            {hotel.name}
          </h3>
          <p className="text-[var(--text-muted)] text-xs font-body line-clamp-2 mb-3">
            {getText(hotel.description)}
          </p>

          {/* Amenities */}
          <div className="flex items-center gap-2 mb-4">
            {hotel.amenities.slice(0, 4).map(amenity => {
              const Icon = amenityIcons[amenity];
              return (
                <span key={amenity} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-muted)] text-[10px] font-body">
                  {Icon && <Icon size={10} />}
                  {amenity}
                </span>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => setBookingOpen(true)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white text-sm font-body font-semibold hover:opacity-90 hover:shadow-glow-gold transition-all flex items-center justify-center gap-2 group/btn"
          >
            {t('booking.bookNow')}
            <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {bookingOpen && (
        <BookingModal hotel={hotel} onClose={() => setBookingOpen(false)} />
      )}
    </>
  );
}
