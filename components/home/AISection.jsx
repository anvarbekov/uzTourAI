'use client';
import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, User, Bot, Loader2, ArrowRight } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import { cn } from '../../lib/utils';

export default function AISection() {
  const { t, language } = useLanguageStore();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!initialized) {
      setMessages([{ role: 'assistant', content: t('ai.welcome'), id: Date.now() }]);
      setInitialized(true);
    }
  }, [ ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickPrompts = [
    { uz: "2 kunlik Samarqand rejasi", en: "2-day Samarkand itinerary", ru: "2-дневный маршрут по Самарканду" },
    { uz: "Buxoroda eng yaxshi mehmonxonalar", en: "Best hotels in Bukhara", ru: "Лучшие отели в Бухаре" },
    { uz: "Xivada nima ko'rish kerak?", en: "What to see in Khiva?", ru: "Что посмотреть в Хиве?" },
  ];

  const sendMessage = async (text) => {
  const msg = text || input.trim();
  if (!msg || loading) return;
  setInput('');

  const userMsg = { role: 'user', content: msg, id: Date.now() };
  setMessages(prev => [...prev, userMsg]);
  setLoading(true);

  try {
    const res = await fetch('/api/ai-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg, language }),
    });
    const data = await res.json();
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: data.reply || "Kechirasiz, xatolik yuz berdi.",
      id: Date.now() + 1,
    }]);
  } catch {
    setMessages(prev => [...prev, {
      role: 'assistant',
      content: "Kechirasiz, xatolik yuz berdi. Qayta urinib ko'ring.",
      id: Date.now() + 1,
    }]);
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="ai-assistant" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 text-xs font-body font-medium mb-4">
              <Sparkles size={13} />
              AI Powered
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4 leading-tight">
              {t('ai.title')}
            </h2>
            <p className="text-[var(--text-secondary)] font-body leading-relaxed mb-8">
              {t('ai.subtitle')}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '🗺️', title: { uz: 'Marshrut rejalashtirish', en: 'Trip Planning', ru: 'Планирование маршрута' }, desc: { uz: 'AI sizga shaxsiy sayohat rejasi tuzib beradi', en: 'AI creates a personalized itinerary for you', ru: 'AI составит персональный маршрут для вас' } },
                { icon: '🏨', title: { uz: 'Mehmonxona tavsiyasi', en: 'Hotel Recommendations', ru: 'Рекомендации отелей' }, desc: { uz: 'Byudjet va qiziqishlaringizga mos joylarni topadi', en: 'Finds places matching your budget and interests', ru: 'Находит места по бюджету и интересам' } },
                { icon: '📍', title: { uz: "Qo'llanma ma'lumotlar", en: 'Local Guide Info', ru: 'Информация местного гида' }, desc: { uz: "Har bir joyning tarixi, vaqti va narxi haqida ma'lumot", en: 'History, hours and prices for every location', ru: 'История, время работы и цены для каждого места' } },
              ].map((feat, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-gold-500/30 transition-colors">
                  <span className="text-2xl flex-shrink-0">{feat.icon}</span>
                  <div>
                    <div className="font-body font-semibold text-[var(--text-primary)] text-sm mb-0.5">
                      {feat.title[language] || feat.title.en}
                    </div>
                    <div className="text-[var(--text-muted)] text-xs font-body">
                      {feat.desc[language] || feat.desc.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat UI */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden shadow-card">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-color)] bg-gradient-to-r from-gold-500/5 to-primary-500/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-primary-600 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <div className="font-body font-semibold text-sm text-[var(--text-primary)]">UzTour AI</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-body text-[var(--text-muted)]">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn('flex gap-3', msg.role === 'user' ? 'flex-row-reverse' : '')}
                >
                  <div className={cn(
                    'w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs',
                    msg.role === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gradient-to-br from-gold-400 to-primary-600 text-white'
                  )}>
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div className={cn(
                    'max-w-[80%] px-4 py-2.5 rounded-xl text-sm font-body leading-relaxed',
                    msg.role === 'user'
                      ? 'chat-message-user'
                      : 'chat-message-ai text-[var(--text-primary)]'
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-primary-600 flex-shrink-0 flex items-center justify-center">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="chat-message-ai px-4 py-3 rounded-xl flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-gold-500" />
                    <span className="text-xs text-[var(--text-muted)] font-body">{t('ai.generating')}</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-[var(--border-color)]" style={{ scrollbarWidth: 'none' }}>
              {quickPrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(p[language] || p.en)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] text-xs font-body hover:border-gold-500/50 hover:text-gold-500 transition-all"
                >
                  {p[language] || p.en}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--border-color)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder={t('ai.placeholder')}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm font-body focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-primary-600 text-white flex items-center justify-center disabled:opacity-50 hover:opacity-90 transition-all shadow-glow-gold"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
