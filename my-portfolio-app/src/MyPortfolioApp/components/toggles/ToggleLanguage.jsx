import { useTranslation } from 'react-i18next';

export const ToggleLanguage = () => {
    const { t, i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    return (
        <button
            type="button"
            className="toggle-switch-language"
            aria-label={t('language.switch')}
            onClick={() => i18n.changeLanguage(language === 'es' ? 'en' : 'es')}
        >
            <span className="language-text">{language.toUpperCase()}</span>
            <span className={`switch-language ${language === 'en' ? 'active' : ''}`} aria-hidden="true"></span>
        </button>
    );
};
