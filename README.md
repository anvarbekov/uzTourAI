# UzTour — O'zbekistonning Raqamli Turizm Platformasi

## Texnologiyalar
- **Next.js 14** (App Router, JSX)
- **Firebase** (Auth, Firestore, Storage)
- **Cloudinary** (Rasm boshqaruvi)
- **Anthropic Claude AI** (AI sayohat yordamchisi)
- **Tailwind CSS** (Dizayn)
- **Framer Motion** (Animatsiyalar)
- **Zustand** (State boshqaruvi)
- **React Hot Toast** (Bildirishnomalar)

## O'rnatish

### 1. Loyihani yuklab oling

```bash
cd uztour
npm install
```

### 2. Environment variables sozlash

`.env.local.example` faylini `.env.local` ga nusxalang va qiymatlarni to'ldiring:

```bash
cp .env.local.example .env.local
```

**Firebase sozlash:**
1. [Firebase Console](https://console.firebase.google.com) ga boring
2. Yangi loyiha yarating
3. Web app qo'shing
4. Config qiymatlarni `.env.local` ga qo'shing
5. Firestore va Storage yoqing

**Cloudinary sozlash:**
1. [Cloudinary](https://cloudinary.com) da hisob oching
2. Dashboard dan Cloud name, API Key va Secret oling

**Anthropic AI sozlash:**
1. [Anthropic Console](https://console.anthropic.com) dan API key oling

### 3. Ishga tushirish

```bash
npm run dev
```

Brauzerda `http://localhost:3000` ni oching.

## Loyiha strukturasi

```
uztour/
├── app/                    # Next.js App Router sahifalari
│   ├── page.js            # Bosh sahifa
│   ├── regions/           # Viloyatlar
│   │   └── [slug]/        # Viloyat detail sahifasi
│   ├── hotels/            # Mehmonxonalar
│   ├── routes/            # Marshrutlar
│   ├── about/             # Biz haqimizda
│   └── api/               # API endpoints
│       └── ai-chat/       # AI chat API
├── components/            # React komponentlar
│   ├── layout/            # Header, Footer, ThemeProvider
│   ├── home/              # Hero, Regions, Events, AI sections
│   ├── regions/           # Region detail, cards
│   ├── hotels/            # Hotel cards, booking modal
│   └── routes/            # Route planner
├── data/                  # Mock data
│   ├── regions.js         # Viloyatlar, mehmonxonalar, joylar
│   └── translations.js    # Ko'p tillik tarjimalar
├── lib/                   # Yordamchi funksiyalar
│   ├── firebase.js        # Firebase config
│   ├── languageStore.js   # Til boshqaruvi (Zustand)
│   ├── themeStore.js      # Tema boshqaruvi (Zustand)
│   └── utils.js           # Yordamchi funksiyalar
└── styles/
    └── globals.css        # Global CSS stillar
```

## Asosiy xususiyatlar

### ✅ Amalga oshirilgan
- 🏠 Bosh sahifa (Hero, Viloyatlar, Tadbirlar, AI)
- 🗺️ Viloyatlar tizimi (8 viloyat + detail sahifalar)
- 🏨 Mehmonxona bron qilish (3 qadam)
- 🤖 AI sayohat yordamchisi (Claude API)
- 🌙 Dark/Light tema
- 🌍 Ko'p tillik (UZ, RU, EN, TR, ZH)
- 📱 Responsive dizayn
- 🗺️ Marshrutlar (tayyor + AI generated)
- 🔍 Qidiruv va filterlash

### 🔧 Kengaytirish mumkin
- Firebase authentication
- Real hotel data (Firestore)
- Cloudinary image upload
- Leaflet/Mapbox xarita
- AR camera mode
- Offline map caching
- Payment integration

## Tillar
- 🇺🇿 O'zbek
- 🇷🇺 Rus
- 🇬🇧 Ingliz
- 🇹🇷 Turk
- 🇨🇳 Xitoy
