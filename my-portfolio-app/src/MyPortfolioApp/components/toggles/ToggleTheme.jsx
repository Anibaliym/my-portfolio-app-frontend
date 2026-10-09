import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Monitor } from 'lucide-react';
import { ThemeContext } from '../../../assets/context/ThemeProvider';

const options = [
    { value: 'light', icon: <Sun size={14} aria-hidden="true" /> },
    { value: 'dark', icon: <Moon size={14} aria-hidden="true" /> },
    { value: 'system', icon: <Monitor size={14} aria-hidden="true" /> },
];

export const ToggleTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { t } = useTranslation();

    return (
        <div className="appearance-selector" role="group" aria-label={t('theme.label')}>
            {options.map(({ value, icon }) => (
                <button key={value} type="button" className="appearance-option"
                    onClick={() => setTheme(value)} aria-pressed={theme === value}
                    aria-label={t(`theme.${value}`)} title={t(`theme.${value}`)}>
                    {icon}
                </button>
            ))}
        </div>
    );
};
