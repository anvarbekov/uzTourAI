import MainLayout from '../MainLayout';

export const metadata = { title: "Biz haqimizda — UzTour" };

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="min-h-screen pt-24 pb-16">
        <div className="relative py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden">
          <div className="absolute inset-0 bg-pattern-islamic opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="font-display font-bold text-5xl text-white mb-4">UzTour haqida</h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              O'zbekistonning rasmiy raqamli turizm ekotizimi
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: '🎯', title: 'Missiyamiz', desc: "O'zbekiston turizmini raqamlashtirish va dunyoga taqdim etish. Har bir sayyoh uchun mukammal sayohat tajribasini yaratish." },
              { icon: '🌍', title: 'Viziyamiz', desc: "O'zbekistonni dunyo turizmidagi eng mashhur destinatsiyalardan biriga aylantirish va raqamli infratuzilmani rivojlantirish." },
              { icon: '🤝', title: 'Hamkorlik', desc: "Mehmonxonalar, restoran va turizm kompaniyalari bilan hamkorlik qilib, turistlarga eng yaxshi xizmatni taqdim etamiz." },
              { icon: '🚀', title: 'Texnologiya', desc: "AI, AR va zamonaviy web texnologiyalaridan foydalanib, yangi darajadagi turizm platformasini yaratdik." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-gold-500/30 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center rounded-2xl border border-gold-500/20 bg-gold-500/5 p-8">
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">Biz bilan bog'laning</h2>
            <p className="text-[var(--text-secondary)] font-body mb-4">info@uztour.uz | +998 71 234 56 78</p>
            <p className="text-[var(--text-muted)] font-body text-sm">Toshkent, O'zbekiston</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
