import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const items = [
    { path: '/about', label: 'menu.about' },
    { path: '/experience', label: 'menu.experience' },
    { path: '/proyects', label: 'menu.projects' },
];

export const MenuBar = () => {
    const { t } = useTranslation();

    return (
        <nav className="menu">
            <ul>
                {items.map(({ path, label }) => (
                    <li key={path}>
                        <NavLink to={path}>
                            <span className="menu-label">{t(label)}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
