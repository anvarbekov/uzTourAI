'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronDown, Play } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';

const heroImages = [
  "/images/uzb.jpg",
  "/images/uzb2.jpg",
  "/images/uzb3.jpg"
    ]
const stats = [
  { value: '14', label: { uz: 'Viloyat', en: 'Regions', ru: 'Регионов', tr: 'Bölge', zh: '地区' } },
  { value: '718+', label: { uz: 'Turistik joy', en: 'Tourist Sites', ru: 'Мест', tr: 'Turistik Yer', zh: '旅游景点' } },
  { value: '500+', label: { uz: 'Mehmonxona', en: 'Hotels', ru: 'Отелей', tr: 'Otel', zh: '酒店' } },
  { value: '4.9★', label: { uz: 'Reyting', en: 'Rating', ru: 'Рейтинг', tr: 'Puan', zh: '评分' } },
];

export default function HeroSection() {
  const { t, language } = useLanguageStore();
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    intervalRef.current = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with ken burns */}
      {heroImages.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-2000 ${i === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDuration: '1200ms' }}
        >
          <img
            src={img}
            alt="Uzbekistan"
            className="w-full h-full object-cover ken-burns"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Decorative Islamic pattern top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold-400/60 particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 15}%`,
              '--duration': `${3 + i * 0.5}s`,
              '--delay': `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 backdrop-blur-sm mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="text-gold-300 text-xs font-body font-medium tracking-wider uppercase">
              {t('hero.badge')}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight mb-4 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {t('hero.title')}
            <br />
            <span className="text-gradient-gold gold-shimmer italic">{t('hero.titleHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-body text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <Link
              href="/regions"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm shadow-glow-gold hover:shadow-glow-orange hover:scale-105 transition-all duration-300 group"
            >
              {t('hero.cta')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#ai-assistant"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm text-white font-body font-semibold text-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
            >
              <Sparkles size={18} className="text-gold-400" />
              {t('hero.ctaAI')}
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-center hover:bg-white/15 transition-all"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-gold-400 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs font-body">
                  {stat.label[language] || stat.label.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-24 right-6 sm:right-10 flex flex-col gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`rounded-full transition-all duration-300 ${i === currentImage ? 'w-2 h-6 bg-gold-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/50 text-xs font-body uppercase tracking-widest">
          {t('hero.scrollHint')}
        </span>
        <ChevronDown size={20} className="text-white/50" />
      </div>
    </section>
  );
}
