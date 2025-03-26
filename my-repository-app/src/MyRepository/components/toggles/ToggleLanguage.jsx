import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../../../assets/context/LanguageProvider';

export const ToggleLanguage = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    useEffect(() => {
        document.body.classList.toggle('language-en', language === 'en');
        document.body.classList.toggle('language-es', language === 'es');
    }, [language]);

    return (
        <div className="toggle-switch-language" onClick={toggleLanguage}>
            <span className="language-text">{language === 'es' ? 'ES' : 'EN'}</span>
            <span className={`switch-language ${language === 'en' ? 'active' : ''}`}></span>
        </div>
    );
};