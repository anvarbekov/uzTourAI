'use client';
import { useState } from 'react';
import { X, Star, Users, Calendar, Check, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { formatPrice, cn } from '../../lib/utils';
import toast from 'react-hot-toast';

export default function BookingModal({ hotel, onClose }) {
  const { t, getText } = useLanguageStore();
  const [step, setStep] = useState(1); // 1: select room, 2: dates/guests, 3: confirm
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);

  const nights = checkIn && checkOut
    ? Math.max(0, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000))
    : 1;

  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  const handleBook = async () => {
    if (!selectedRoom || !checkIn || !checkOut) {
      toast.error("Barcha maydonlarni to'ldiring");
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setBooked(true);
    toast.success("Bron muvaffaqiyatli amalga oshirildi! 🎉");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
          <div>
            <h2 className="font-display font-bold text-[var(--text-primary)]">{hotel.name}</h2>
            <div className="flex items-center gap-1 mt-0.5">
              {[...Array(hotel.stars)].map((_, i) => (
                <Star key={i} size={11} className="fill-gold-400 text-gold-400" />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            <X size={16} />
          </button>
        </div>

        {booked ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
              <Check size={28} className="text-green-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">Bron tasdiqlandi!</h3>
            <p className="text-[var(--text-secondary)] font-body text-sm mb-4">
              {hotel.name} — {selectedRoom?.type} xona<br />
              {checkIn} → {checkOut} ({nights} kecha)<br />
              Jami: {formatPrice(totalPrice, hotel.currency)}
            </p>
            <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm hover:opacity-90 transition-all">
              Yoping
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Steps indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={cn(
                    'w-6 h-6 rounded-full text-xs flex items-center justify-center font-body font-semibold transition-all',
                    step >= s ? 'bg-gold-500 text-white' : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                  )}>
                    {step > s ? <Check size={12} /> : s}
                  </div>
                  {s < 3 && <div className={cn('flex-1 h-0.5', step > s ? 'bg-gold-500' : 'bg-[var(--border-color)]')} />}
                </div>
              ))}
            </div>

            {/* Step 1: Room selection */}
            {step === 1 && (
              <div>
                <h3 className="font-body font-semibold text-[var(--text-primary)] mb-3">Xona tanlang</h3>
                <div className="space-y-3">
                  {hotel.rooms.map(room => (
                    <div
                      key={room.id}
                      onClick={() => room.available && setSelectedRoom(room)}
                      className={cn(
                        'flex gap-3 p-3 rounded-xl border transition-all',
                        !room.available ? 'opacity-50 cursor-not-allowed border-[var(--border-color)]' :
                        selectedRoom?.id === room.id
                          ? 'border-gold-500 bg-gold-500/5 cursor-pointer'
                          : 'border-[var(--border-color)] cursor-pointer hover:border-gold-500/40'
                      )}
                    >
                      <img src={room.image} alt={room.type} className="w-20 h-16 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-body font-semibold text-sm text-[var(--text-primary)]">{room.type}</span>
                          <span className={cn('text-xs px-2 py-0.5 rounded-full font-body', room.available ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-500')}>
                            {room.available ? t('booking.available') : t('booking.unavailable')}
                          </span>
                        </div>
                        <div className="text-[var(--text-muted)] text-xs mt-0.5 flex items-center gap-1.5">
                          <Users size={11} /> {room.capacity} kishi
                        </div>
                        <div className="text-gold-600 dark:text-gold-400 font-body font-bold text-sm mt-1">
                          {formatPrice(room.price, hotel.currency)} / kecha
                        </div>
                      </div>
                      {selectedRoom?.id === room.id && (
                        <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 self-center">
                          <Check size={11} className="text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  disabled={!selectedRoom}
                  onClick={() => setStep(2)}
                  className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm disabled:opacity-50 hover:opacity-90 transition-all"
                >
                  Davom etish
                </button>
              </div>
            )}

            {/* Step 2: Dates & guests */}
            {step === 2 && (
              <div>
                <h3 className="font-body font-semibold text-[var(--text-primary)] mb-3">Sana va mehmonlar</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-body text-[var(--text-muted)] mb-1.5">{t('booking.checkIn')}</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={e => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-body text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body text-[var(--text-muted)] mb-1.5">{t('booking.checkOut')}</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={e => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-body text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-body text-[var(--text-muted)] mb-1.5">{t('booking.guests')}</label>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setGuests(g => Math.max(1, g - 1))} className="w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] hover:border-gold-500 transition-colors">
                        <ChevronLeft size={16} />
                      </button>
                      <span className="w-8 text-center font-body font-semibold text-[var(--text-primary)]">{guests}</span>
                      <button onClick={() => setGuests(g => Math.min(selectedRoom?.capacity || 4, g + 1))} className="w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-primary)] hover:border-gold-500 transition-colors">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] font-body text-sm hover:bg-[var(--bg-secondary)] transition-all">Orqaga</button>
                  <button
                    disabled={!checkIn || !checkOut}
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm disabled:opacity-50 hover:opacity-90 transition-all"
                  >Davom etish</button>
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h3 className="font-body font-semibold text-[var(--text-primary)] mb-3">Bronni tasdiqlang</h3>
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2.5 mb-4">
                  {[
                    ['Mehmonxona', hotel.name],
                    ['Xona', selectedRoom?.type],
                    [t('booking.checkIn'), checkIn],
                    [t('booking.checkOut'), checkOut],
                    ['Kecha soni', `${nights} kecha`],
                    [t('booking.guests'), `${guests} kishi`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm font-body">
                      <span className="text-[var(--text-muted)]">{label}</span>
                      <span className="text-[var(--text-primary)] font-medium">{value}</span>
                    </div>
                  ))}
                  <div className="gold-divider my-1" />
                  <div className="flex justify-between text-sm font-body">
                    <span className="font-semibold text-[var(--text-primary)]">Jami</span>
                    <span className="font-bold text-gold-600 dark:text-gold-400 text-base">{formatPrice(totalPrice, hotel.currency)}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] font-body text-sm hover:bg-[var(--bg-secondary)] transition-all">Orqaga</button>
                  <button
                    onClick={handleBook}
                    disabled={loading}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm disabled:opacity-70 hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <><Loader2 size={15} className="animate-spin" /> Yuborilmoqda...</> : t('booking.bookNow')}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
