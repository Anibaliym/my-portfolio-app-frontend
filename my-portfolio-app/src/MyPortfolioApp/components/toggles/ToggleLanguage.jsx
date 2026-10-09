import { useTranslation } from 'react-i18next';

export const ToggleLanguage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="appearance-selector language-selector" role="group" aria-label={t('language.label')}>
            {['es', 'en'].map(language => (
                <button key={language} type="button" className="appearance-option"
                    onClick={() => i18n.changeLanguage(language)}
                    aria-pressed={i18n.resolvedLanguage === language}
                    aria-label={t(`language.${language}`)} title={t(`language.${language}`)}>
                    {language.toUpperCase()}
                </button>
            ))}
        </div>
    );
};
