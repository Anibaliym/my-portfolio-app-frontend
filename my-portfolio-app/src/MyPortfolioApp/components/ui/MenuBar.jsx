import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../../assets/context/LanguageProvider';
import { useContext } from 'react';

export const MenuBar = ({ activeMenuItem, setActiveMenuItem }) => {
    const navigate = useNavigate();
    const {language} = useContext(LanguageContext);

    const handleMenuClick = (menuItem, navigateTo) => {
        setActiveMenuItem(menuItem);

        if (navigateTo) 
            navigate(navigateTo);
    };

    return (
        <div className="menu">
            <ul>
                <li className={`lead ${activeMenuItem === 'About Me' ? 'active' : ''}`}     onClick={() => handleMenuClick('About Me', '/about')}>
                    { (language === 'es') ? 'Acerca de mi' : 'About Me' }
                </li>
                <li className={`lead ${activeMenuItem === 'Experience' ? 'active' : ''}`}   onClick={() => handleMenuClick('Experience', '/experience')}>
                    { (language === 'es') ? 'Experiencia' : 'Experience' }
                </li>
                <li className={`lead ${activeMenuItem === 'Projects' ? 'active' : ''}`}     onClick={() => handleMenuClick('Projects', '/proyects')}>
                    { (language === 'es') ? 'Proyectos' : 'Projects' }
                </li>
            </ul>  
        </div>        
    )
}
