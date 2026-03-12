'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MainLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}