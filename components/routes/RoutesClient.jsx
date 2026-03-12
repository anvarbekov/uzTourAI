'use client';
import { useState } from 'react';
import { Clock, MapPin, Star, ArrowRight, Sparkles, Loader2, Route } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { cn } from '../../lib/utils';

const prebuiltRoutes = [
  {
    id: 1,
    title: { uz: "Ipak yo'li klassik marshrufi", en: "Classic Silk Road Route", ru: "Классический маршрут Шёлкового пути" },
    duration: { uz: "7 kun", en: "7 days", ru: "7 дней" },
    cities: ["Toshkent", "Samarqand", "Buxoro", "Xiva"],
    image: "https://images.unsplash.com/photo-1586185976272-eb473dc91c05?w=600&q=80",
    type: { uz: "Tarixiy", en: "Historical", ru: "Исторический" },
    rating: 4.9,
    highlights: { uz: ["Registon", "Ark qal'asi", "Ichon-qal'a", "Toshkent metro"], en: ["Registan", "Ark Fortress", "Ichon-Qala", "Tashkent Metro"] },
    gradient: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/30",
  },
  {
    id: 2,
    title: { uz: "Farg'ona vodiysi sayohati", en: "Fergana Valley Trip", ru: "Путешествие по Ферганской долине" },
    duration: { uz: "3 kun", en: "3 days", ru: "3 дня" },
    cities: ["Farg'ona", "Namangan", "Andijon"],
    image: "https://images.unsplash.com/photo-1625244695078-e7d0b0c7e2d1?w=600&q=80",
    type: { uz: "Madaniy", en: "Cultural", ru: "Культурный" },
    rating: 4.6,
    highlights: { uz: ["Marg'ilon ipak", "Rishton sopoli", "Bobur maskani"], en: ["Margilan silk", "Rishtan ceramics", "Babur homeland"] },
    gradient: "from-green-500/20 to-emerald-600/20",
    border: "border-green-500/30",
  },
  {
    id: 3,
    title: { uz: "Toshkent—Samarqand 1 kun", en: "Tashkent–Samarkand Day Trip", ru: "Ташкент–Самарканд за 1 день" },
    duration: { uz: "1 kun", en: "1 day", ru: "1 день" },
    cities: ["Toshkent", "Samarqand"],
    image: "https://images.unsplash.com/photo-1597435877853-c9c13e1c2f56?w=600&q=80",
    type: { uz: "Tezkor", en: "Express", ru: "Экспресс" },
    rating: 4.7,
    highlights: { uz: ["Registon", "Bibixonim", "Shohi Zinda"], en: ["Registan", "Bibi-Khanym", "Shah-i-Zinda"] },
    gradient: "from-blue-500/20 to-indigo-600/20",
    border: "border-blue-500/30",
  },
];

export default function RoutesClient() {
  const { getText, t, language } = useLanguageStore();
  const [activeTab, setActiveTab] = useState('ready');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateRoute = async () => {
    if (!aiPrompt.trim() || loading) return;
    setLoading(true);
    setAiResult('');
    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `Menga quyidagi so'rov uchun batafsil sayohat marshrutini tuz: ${aiPrompt}`, language }),
      });
      const data = await res.json();
      setAiResult(data.reply || 'Xatolik yuz berdi');
    } catch {
      setAiResult('Xatolik yuz berdi');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="relative py-16 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-islamic opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            🗺️ Sayohat Marshrutlari
          </h1>
          <p className="text-white/70 font-body text-base max-w-lg mx-auto">
            Tayyor marshrutlardan foydalaning yoki AI yordamida o&#39;z marshrutingizni yarating
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 p-1 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] inline-flex w-fit">
          <button
            onClick={() => setActiveTab('ready')}
            className={cn('px-5 py-2.5 rounded-lg text-sm font-body font-medium transition-all', activeTab === 'ready' ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]')}
          >
            <Route size={15} className="inline mr-1.5" />
            Tayyor marshrutlar
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={cn('px-5 py-2.5 rounded-lg text-sm font-body font-medium transition-all', activeTab === 'ai' ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]')}
          >
            <Sparkles size={15} className="inline mr-1.5" />
            AI marshrut
          </button>
        </div>

        {activeTab === 'ready' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prebuiltRoutes.map(route => (
              <div
                key={route.id}
                className={`group rounded-2xl border ${route.border} bg-gradient-to-br ${route.gradient} overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <div className="h-44 overflow-hidden">
                  <img src={route.image} alt={getText(route.title)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-[var(--bg-card)]/80 text-[var(--text-secondary)] text-xs font-body">
                      {route.type[language] || route.type.en}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-body">
                      <Star size={12} className="fill-gold-400 text-gold-400" />
                      <span className="text-[var(--text-primary)] font-semibold">{route.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-2 group-hover:text-gold-500 transition-colors">
                    {getText(route.title)}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {route.cities.map(city => (
                      <span key={city} className="flex items-center gap-1 text-[var(--text-muted)] text-xs font-body">
                        <MapPin size={10} className="text-gold-500" />
                        {city}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs font-body">
                      <Clock size={12} className="text-gold-500" />
                      {route.duration[language] || route.duration.en}
                    </div>
                    <button className="flex items-center gap-1.5 text-xs font-body font-semibold text-gold-600 dark:text-gold-400 hover:gap-2 transition-all">
                      Ko&#39;rish <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="max-w-2xl">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-primary-600 flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[var(--text-primary)]">AI Marshrut Generator</h3>
                  <p className="text-[var(--text-muted)] text-xs font-body">Shaxsiy sayohat rejangizni yarating</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-body text-[var(--text-muted)] mb-2">Sayohat haqida ayting:</label>
                <textarea
                  value={aiPrompt}
                  onChange={e => setAiPrompt(e.target.value)}
                  rows={3}
                  placeholder="Masalan: 5 kunlik Samarqand va Buxoro sayohati, 2 kishi, tarixiy joylar qiziqtiradi..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] font-body text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["2 kunlik Samarqand", "Oilaviy Buxoro safari", "Xiva va Nukus qo'shma tur"].map(p => (
                  <button
                    key={p}
                    onClick={() => setAiPrompt(p)}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] text-xs font-body hover:border-gold-500/50 hover:text-gold-500 transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                onClick={generateRoute}
                disabled={!aiPrompt.trim() || loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm disabled:opacity-50 hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {loading ? <><Loader2 size={16} className="animate-spin" /> Marshrut yaratilmoqda...</> : <><Sparkles size={16} /> AI Marshrut yaratish</>}
              </button>

              {aiResult && (
                <div className="mt-6 p-4 rounded-xl border border-gold-500/20 bg-gold-500/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-gold-500" />
                    <span className="text-xs font-body font-semibold text-gold-600 dark:text-gold-400">AI tomonidan yaratilgan marshrut</span>
                  </div>
                  <div className="text-[var(--text-primary)] font-body text-sm leading-relaxed whitespace-pre-line">
                    {aiResult}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
