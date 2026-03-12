import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🕌</div>
        <h1 className="font-display font-bold text-4xl text-[var(--text-primary)] mb-3">404</h1>
        <p className="text-[var(--text-secondary)] font-body mb-8">Sahifa topilmadi</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-primary-600 text-white font-body font-semibold text-sm hover:opacity-90 transition-all"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
