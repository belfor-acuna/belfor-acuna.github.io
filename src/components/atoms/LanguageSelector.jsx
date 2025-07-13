import { useState, useEffect } from 'react';
import { languageStore, setLanguage, getCurrentLanguage, onLanguageChange } from '../../utils/i18n.js';

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Listen for language changes
    const unsubscribe = onLanguageChange((newLang) => {
      setCurrentLang(newLang);
    });

    return unsubscribe;
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);

    // Dispatch custom event for Vue components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));

    // Also trigger storage event for components listening to localStorage
    localStorage.setItem('portfolio-language', lang);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-primary-900 border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium text-primary-900 dark:text-primary-100">
          {currentLanguage?.code.toUpperCase()}
        </span>
        <svg 
          className={`w-4 h-4 text-primary-600 dark:text-primary-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-primary-900 border border-primary-200 dark:border-primary-700 rounded-lg shadow-lg z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLang === lang.code 
                    ? 'bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100' 
                    : 'text-primary-700 dark:text-primary-300'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {currentLang === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
