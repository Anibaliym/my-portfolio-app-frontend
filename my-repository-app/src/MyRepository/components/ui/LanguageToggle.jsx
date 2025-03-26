import React, { useContext } from 'react';
import { LanguageContext } from '../../../assets/context/LanguageProvider';


export const LanguageToggle = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div 
            className="toggle-switch-language"
            onClick={toggleLanguage}
        >
            <span className={`switch-language ${language === 'en' ? 'active' : ''}`}>
                
            </span>
        </div>
    );
};