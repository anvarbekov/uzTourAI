import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '../data/translations';

const useLanguageStore = create(
  persist(
    (set, get) => ({
      language: 'uz',
      setLanguage: (lang) => set({ language: lang }),
      t: (path) => {
        const lang = get().language;
        const keys = path.split('.');
        let value = translations[lang] || translations['uz'];
        for (const key of keys) {
          value = value?.[key];
        }
        return value || path;
      },
      getText: (obj) => {
        const lang = get().language;
        if (!obj) return '';
        return obj[lang] || obj['en'] || obj['uz'] || Object.values(obj)[0] || '';
      },
    }),
    { name: 'uztour-language' }
  )
);

export default useLanguageStore;
