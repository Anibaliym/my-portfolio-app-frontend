import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

let savedLanguage;
try 
{
    savedLanguage = localStorage.getItem('language');
} 
catch {
    // The site still works when browser storage is unavailable.
}

const syncLanguage = (language) => 
{
    const code = language === 'es' ? 'es' : 'en';

    document.documentElement.lang = code;
    document.title = `Anibal Yañez | ${i18n.t('profile.role')}`;
    document.body.classList.toggle('language-en', code === 'en');
    document.body.classList.toggle('language-es', code === 'es');

    try 
    {
        localStorage.setItem('language', code);
    } 
    catch 
    {
        // Persistence is optional; language switching remains available.
    }
};

i18n.use(initReactI18next).init({
    resources: { en: { translation: en }, es: { translation: es } },
    lng: savedLanguage === 'es' ? 'es' : 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    initAsync: false,
    interpolation: { escapeValue: false },
});

syncLanguage(i18n.resolvedLanguage);
i18n.on('languageChanged', syncLanguage);

export default i18n;
