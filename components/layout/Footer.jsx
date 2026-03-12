'use client';
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import useLanguageStore from '../../lib/languageStore';

export default function Footer() {
  const { t } = useLanguageStore();

  const footerLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/regions', label: t('nav.regions') },
    { href: '/hotels', label: t('nav.hotels') },
    { href: '/routes', label: t('nav.routes') },
    { href: '/about', label: t('nav.about') },
  ];

  const social = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-islamic opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">U</span>
              </div>
              <span className="font-display font-bold text-2xl text-gradient-gold">UzTour</span>
            </Link>
            <p className="text-[var(--text-secondary)] font-body text-sm leading-relaxed max-w-xs mb-6">
              {t('footer.description')}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-gold-500 hover:border-gold-500/50 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-[var(--text-secondary)] hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-primary)] mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-500" />
                <span className="text-sm font-body text-[var(--text-secondary)]">
                  Toshkent, O'zbekiston
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="flex-shrink-0 text-gold-500" />
                <a href="tel:+998712345678" className="text-sm font-body text-[var(--text-secondary)] hover:text-gold-500 transition-colors">
                  +998 71 234 56 78
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="flex-shrink-0 text-gold-500" />
                <a href="mailto:info@uztour.uz" className="text-sm font-body text-[var(--text-secondary)] hover:text-gold-500 transition-colors">
                  info@uztour.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-[var(--text-muted)]">
            © {new Date().getFullYear()} UzTour. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-body text-[var(--text-muted)]">Made with</span>
            <span className="text-red-500">❤️</span>
            <span className="text-xs font-body text-[var(--text-muted)]">for Uzbekistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
