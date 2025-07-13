// Language store and utilities
class LanguageStore {
  constructor() {
    this.currentLanguage = 'en';
    this.translations = {};
    this.listeners = [];
    
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio-language');
      if (savedLang && ['en', 'es'].includes(savedLang)) {
        this.currentLanguage = savedLang;
      }
    }
  }

  setLanguage(lang) {
    if (['en', 'es'].includes(lang)) {
      this.currentLanguage = lang;
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-language', lang);
      }
      
      // Notify listeners
      this.listeners.forEach(callback => callback(lang));
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(cb => cb !== callback);
  }

  setTranslations(translations) {
    this.translations = translations;
  }

  t(key, lang = null) {
    const language = lang || this.currentLanguage;
    const keys = key.split('.');
    let value = this.translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  }
}

// Create global instance
export const languageStore = new LanguageStore();

// Helper function for components
export function t(key, lang = null) {
  return languageStore.t(key, lang);
}

// Helper to get current language
export function getCurrentLanguage() {
  return languageStore.getCurrentLanguage();
}

// Helper to set language
export function setLanguage(lang) {
  languageStore.setLanguage(lang);
}

// Helper to add language change listener
export function onLanguageChange(callback) {
  languageStore.addListener(callback);
  return () => languageStore.removeListener(callback);
}
