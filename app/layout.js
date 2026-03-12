import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from '../components/layout/ThemeProvider';

export const metadata = {
  title: 'UzTour — O\'zbekistonning Raqamli Turizm Platformasi',
  description: 'O\'zbekistonning eng yaxshi turizm sayti. Viloyatlar, mehmonxonalar, tarixiy joylar va AI sayohat yordamchisi.',
  keywords: 'uzbekistan tourism, o\'zbekiston turizm, samarkand, bukhara, tashkent, silk road, travel',
  openGraph: {
    title: 'UzTour — Discover Uzbekistan',
    description: 'The premier digital tourism platform for Uzbekistan',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d4a017',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                fontFamily: 'var(--font-body)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
