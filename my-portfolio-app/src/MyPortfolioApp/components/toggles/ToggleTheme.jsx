import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../assets/context/ThemeProvider';

export const ToggleTheme = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);

    const { t } = useTranslation();

    return (
        <button type="button" className="toggle-switch" onClick={ toggleTheme } aria-label={t('theme.switch')} aria-pressed={isDarkMode}>
            <span className="switch"></span>
        </button>
    )
}

