import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MenuBar = () => {
    const { t } = useTranslation();

    return (
        <nav className="menu">
            <ul>
                <li className="lead"><NavLink to="/about">{t('menu.about')}</NavLink></li>
                <li className="lead"><NavLink to="/experience">{t('menu.experience')}</NavLink></li>
                <li className="lead"><NavLink to="/proyects">{t('menu.projects')}</NavLink></li>
            </ul>
        </nav>
    );
};
