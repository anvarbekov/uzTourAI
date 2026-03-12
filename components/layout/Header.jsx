'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Globe, ChevronDown, Search } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';
import useThemeStore from '../../lib/themeStore';
import { languages } from '../../data/translations';
import { cn } from '../../lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const langRef = useRef(null);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguageStore();
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/regions', label: t('nav.regions') },
    { href: '/hotels', label: t('nav.hotels') },
    { href: '/routes', label: t('nav.routes') },
    { href: '/about', label: t('nav.about') },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-color)] shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-primary-600 flex items-center justify-center shadow-glow-gold group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-display font-bold text-lg">U</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-500 border-2 border-[var(--bg-primary)] animate-pulse-slow" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-gradient-gold">UzTour</span>
              <div className="text-[10px] text-[var(--text-muted)] font-body leading-none tracking-wider uppercase">
                Uzbekistan Tourism
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'text-gold-500 bg-gold-500/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-body transition-all',
                  langOpen
                    ? 'bg-gold-500/10 text-gold-500'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                )}
              >
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline font-medium">{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={14} className={cn('transition-transform', langOpen && 'rotate-180')} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl overflow-hidden z-50 animate-fade-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 text-sm font-body transition-colors',
                        lang.code === language
                          ? 'bg-gold-500/10 text-gold-500'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                      )}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                      {lang.code === language && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-500" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-all"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar (expandable) */}
        {searchOpen && (
          <div className="pb-4 animate-fade-up">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                autoFocus
                placeholder={t('common.search') + '...'}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-[var(--text-muted)] font-body text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)]/98 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-sm font-body font-medium transition-all',
                  pathname === link.href
                    ? 'text-gold-500 bg-gold-500/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
