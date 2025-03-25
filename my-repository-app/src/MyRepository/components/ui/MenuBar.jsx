import { useNavigate } from 'react-router-dom';

export const MenuBar = ({ activeMenuItem, setActiveMenuItem }) => {
    const navigate = useNavigate();

    const handleMenuClick = (menuItem, navigateTo) => {
        setActiveMenuItem(menuItem);

        if (navigateTo) 
            navigate(navigateTo);
    };

    return (
        <div className="menu">
            <ul>
                <li className={`lead ${activeMenuItem === 'About Me' ? 'active' : ''}`}     onClick={() => handleMenuClick('About Me', '/about')}>About Me</li>
                <li className={`lead ${activeMenuItem === 'Experience' ? 'active' : ''}`}   onClick={() => handleMenuClick('Experience', '/experience')}>Experience</li>
                <li className={`lead ${activeMenuItem === 'Projects' ? 'active' : ''}`}     onClick={() => handleMenuClick('Projects', '/proyects')}>Projects</li>
            </ul>  
        </div>        
    )
}
