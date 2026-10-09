import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MenuBar = ({ activeMenuItem, setActiveMenuItem }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleMenuClick = (menuItem, navigateTo) => {
        setActiveMenuItem(menuItem);

        if (navigateTo) 
            navigate(navigateTo);
    };

    return (
        <div className="menu">
            <ul>
                <li className={`lead ${activeMenuItem === 'About Me' ? 'active' : ''}`}     onClick={() => handleMenuClick('About Me', '/about')}>
                    { t('menu.about') }
                </li>
                <li className={`lead ${activeMenuItem === 'Experience' ? 'active' : ''}`}   onClick={() => handleMenuClick('Experience', '/experience')}>
                    { t('menu.experience') }
                </li>
                <li className={`lead ${activeMenuItem === 'Projects' ? 'active' : ''}`}     onClick={() => handleMenuClick('Projects', '/proyects')}>
                    { t('menu.projects') }
                </li>
            </ul>  
        </div>        
    )
}
