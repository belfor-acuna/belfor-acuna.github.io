import { useEffect } from 'react';
import { languageStore } from '../../utils/i18n.js';
import { translations } from '../../translations/index.js';

export default function TranslationProvider({ children }) {
  useEffect(() => {
    // Initialize translations
    languageStore.setTranslations(translations);
  }, []);

  return children;
}
